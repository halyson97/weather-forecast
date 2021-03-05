export function saveLocation(latitude: Number, longitude: Number) {
  return {
    type: 'SAVE_LOCATION',
    latitude,
    longitude,
  };
}
