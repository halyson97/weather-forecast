import api from '../../services/climatempo/api';

import config from '../../config/config';
import {Location} from '../../protocols';

export const getCityByLocation = async ({latitude, longitude}: Location) => {
  const url = `/api/v1/locale/city?latitude=${latitude}&longitude=${longitude}&token=${config.climatempo.token}`;

  const response = await api.get(url);

  return response;
};

export const getWeatherCurrentByCityId = async (cityId: Number) => {
  const url = `/api/v1/weather/locale/${cityId}/current?token=${config.climatempo.token}`;

  const response = await api.get(url);

  return response;
};

export const getForecastByCityId = async (cityId: Number) => {
  const url = `/api/v1/forecast/locale/${cityId}/days/15?token=${config.climatempo.token}`;

  const response = await api.get(url);

  return response;
};

export default {
  getCityByLocation,
  getWeatherCurrentByCityId,
  getForecastByCityId,
};
