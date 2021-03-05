interface LocationType {
  latitude: Number;
  longitude: Number;
}

import Geolocation from '@react-native-community/geolocation';

export const getLocation = (): Promise<LocationType> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (info) =>
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        }),
      (erro) => reject(erro),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
};
