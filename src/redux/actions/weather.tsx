export function saveWeather(current: any, forecast: any, updatedAt: Date) {
  return {
    type: 'SAVE_WEATHER',
    current,
    forecast,
    updatedAt,
  };
}
