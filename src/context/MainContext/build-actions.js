import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    userInsert: (payload) => dispatch({ type: actionTypes.INSERTUSER, payload }),
    schedule: (payload) => dispatch({ type: actionTypes.SCHEDULE, payload }),
    payment: (payload) => dispatch({ type: actionTypes.INSERTPAYMANTMETHOD, payload }),
    updateQuant: (payload) => dispatch({ type: actionTypes.UPDATEQUANT, payload }),
    updateSubtotal: (payload) => dispatch({ type: actionTypes.UPDATESUBTOTAL, payload }),
    updateTotal: (payload) => dispatch({ type: actionTypes.UPDATETOTAL, payload }),
  };
};
