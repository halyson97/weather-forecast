import api from '../../services/climatempo/api';

import config from '../../config/config';
import {Location} from '../../protocols';

export const getCityByLocation = async ({latitude, longitude}: Location) => {
  const url = `/api/v1/locale/city?latitude=${latitude}&longitude=${longitude}&token=${config.climatempo.token}`;

  console.log(url);

  const response = await api.get(url);

  return response;
};

export default {
  getCityByLocation,
};
