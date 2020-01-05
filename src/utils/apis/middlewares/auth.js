import Axios from 'axios';

const callLoginApi = payload => Axios.post(process.env.AUTH_END_POINT, payload);

export default callLoginApi;
