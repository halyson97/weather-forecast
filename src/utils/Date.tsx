import moment from 'moment';
import 'moment/min/moment-with-locales';
import 'moment/locale/pt-br';

moment.locale('pt-br');

export const getWeekDay = (date: string) => {
  const weekDayName = moment(date).format('ddd');
  return weekDayName;
};

export const formatDateFull = (date: string) => {
  const weekDayName = moment(date).format('dddd[,] LL');
  return weekDayName;
};

export const getHourMinuteSecondsNow = () => {
  const weekDayName = moment().format('LTS');
  return weekDayName;
};

export const getWeekDayAndDate = (date: string) => {
  const weekDayName = moment(date).format('ddd[,] ll');
  return weekDayName;
};

export const getHoursAndMinutes = (date: string) => {
  const prepare = moment(date).format('LT');
  return prepare;
};
