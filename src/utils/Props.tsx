import {bindActionCreators} from 'redux';

export const MapDispatchToProps = (actions: any) => {
  return (dispatch: any) => {
    return bindActionCreators(actions, dispatch);
  };
};

export default {
  MapDispatchToProps,
};
