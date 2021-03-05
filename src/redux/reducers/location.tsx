interface ActionTypes {
  type: String;
  latitude: Number;
  longitude: Number;
}

export default function actions(
  state = {latitude: null, longitude: null},
  action: ActionTypes,
) {
  switch (action.type) {
    case 'SAVE_LOCATION':
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
      };
    default:
      return state;
  }
}
