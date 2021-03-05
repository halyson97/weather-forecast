interface ActionTypes {
  type: String;
  current: Number;
  forecast: Number;
  updatedAt: Date;
}

export default function actions(
  state = {current: null, forecast: null, updatedAt: null},
  action: ActionTypes,
) {
  switch (action.type) {
    case 'SAVE_WEATHER':
      return {
        ...state,
        current: action.current,
        forecast: action.forecast,
        updatedAt: action.updatedAt,
      };
    default:
      return state;
  }
}
