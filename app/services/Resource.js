import cloneDeep from 'lodash.clonedeep';
import isEqual from 'lodash.isequal';

const config = {
  urlBase: '',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
};

export class Resource {
  static GET = 'get';
  static POST = 'post';
  static DELETE = 'delete';
  static PUT = 'put';
  static config = config;

  static init(base) {
    Resource.config.urlBase = base;
  }

  static setSession(session) {
    if (!session) {
      delete Resource.config.headers.Authorization;
    } else {
      Resource.config.headers.Authorization = `FSign user="${session.userId}",token="${session.token}"`;
    }
  }

  constructor(specs, options) {
    Object.keys(specs).forEach((key) => {
      const spec = specs[key];
      if (spec.method === Resource.GET || spec.method === Resource.DELETE) {
        this[key] = this.$$actionBuilderNoBody(spec.url, spec.method, spec.block);
      } else {
        this[key] = this.$$actionBuilder(spec.url, spec.method, spec.block);
      }
    });
    this.fetchQueue = {};
    this.options = options || {};
    this.base = () => config.urlBase + (this.options.base || '');
  }

  fetch(url, options) {
    return new Promise(async (resolve, reject) => {
      if (this.fetchQueue[url] && options.method !== Resource.GET) {
        if (isEqual(this.fetchQueue[url], options)) {
          reject(new Error(`Duplicated request: ${url}.`));
        }
      }
      this.fetchQueue[url] = cloneDeep(options);
      const timeoutId = setTimeout(() => {
        this.fetchQueue[url] = null;
        // alertVM.display({content: I18nService.render('connectionTrouble')})
        reject(new Error(`Fetch timeout:${url}${JSON.stringify(options)}`));
      }, options.timeout || 10000);
      fetch(url, options).then(
        (res) => {
          this.fetchQueue[url] = null;
          clearTimeout(timeoutId);
          resolve(res);
        },
        (err) => {
          this.fetchQueue[url] = null;
          // if (!err.status) offlineVM.display()
          clearTimeout(timeoutId);
          reject(err);
        },
      );
    });
  }

  $$actionBuilderNoBody(template, method) {
    const buildUrl = this.$$urlBuilder(template);
    return async (params) => {
      const url = buildUrl(params);
      const res = await this.fetch(url, {
        method,
        headers: config.headers,
      });
      const obj = await res.json();
      if (res.ok) {
        return obj;
      } else {
        throw Object.assign({httpStatusCode: res.status}, obj);
      }
    };
  }

  $$actionBuilder(template, method) {
    const buildUrl = this.$$urlBuilder(template);
    return (params, body) => {
      const hasBody = !!body;
      const urlParams = hasBody ? params : {};
      const payload = hasBody ? body : params;
      const url = buildUrl(urlParams);
      return this.fetch(url, {
        method,
        headers: config.headers,
        body: JSON.stringify(payload),
      }).then((res) => {
        if (res.ok) {
          return res.json().then(obj => obj, error => ({error}));
        }
        return res.json().then((obj) => {
          const result = Object.assign({httpStatusCode: res.status}, obj);
          // if (!res.status) offlineVM.display()
          return Promise.reject(result);
        }, error => Promise.reject(error));
      });
    };
  }

  $$urlBuilder(template) {
    return (params) => {
      let res = template;
      const query = [];
      const keys = Object.keys(params || {});
      keys.forEach((key) => {
        if (res.indexOf(`:${key}`) !== -1) {
          res = res.replace(`:${key}`, params[key]);
        } else {
          query.push(`${key}=${params[key]}`);
        }
      });
      if (query.length) {
        res += `?${query.join('&')}`;
      }
      return this.base() + res;
    };
  }
}
