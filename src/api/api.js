import axios from 'axios';

export let ip = '192.168.1.226:9021';

export let base = `http://${ip}/v2/park`;

export const vipList = params => { return axios.get(base+'/vip/list', { params: params }); }