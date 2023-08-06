import * as actionTypes from './actions-types';

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INSERTUSER:
      return { ...state, user: { ...state.user, ...action.payload } };
    case actionTypes.SCHEDULE:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case actionTypes.INSERTPAYMANTMETHOD:
      return { ...state, ...action.payload };
    case actionTypes.UPDATEQUANT:
      return { ...state, ...action.payload };
    case actionTypes.UPDATESUBTOTAL:
      return { ...state, subtotal: { ...state.subtotal, ...action.payload } };
    case actionTypes.UPDATETOTAL:
      return { ...state, total: { ...state.total, ...action.payload } };
  }

  return state;
};
