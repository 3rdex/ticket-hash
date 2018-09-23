import './shim.js'

import eos from 'eosjs'

const KEY = "5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3";
const RPC_API_URL = "http://127.0.0.1:8888";

export class EOSService {
  static eos;

  static init() {
    const config = {
      keyProvider: KEY, // WIF string or array of keys..
      httpEndpoint: RPC_API_URL
    };

    EOSService.eos = eos(config);
  }

  static get_info() {
    return EOSService.eos.getInfo({}).then(info => {
      return info;
    });
  }

  static async get_table_rows() {
    const result = await EOSService.eos.getTableRows(true, 'ticketticket', 'ticketticket', 'tickets')
    console.log(result);
  }
}
