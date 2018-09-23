import './shim.js'

import eos from 'eosjs'

const KEY = "5K7mtrinTFrVTduSxizUc5hjXJEtTjVTsqSHeBHes1Viep86FP5";
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

  static async getTableRows({seller}) {
    const {rows, more} = await EOSService.eos.getTableRows(true, 'ticketticket', seller, 'tickets');
    console.log({rows})
    return {rows, more};
  }

  static async releaseTicket({hash, ticket_name, seller}) {
    const contract = await EOSService.eos.contract('ticketticket');
    await contract.buyticket({hash, ticket_name, seller}, {scope: 'active', authorization: [seller]});
  }

  static async checkTicket({hash , seller}) {
    const contract = await EOSService.eos.contract('ticketticket');
    await contract.check({hash, seller}, {scope: 'active', authorization: [seller]});
  }
}
