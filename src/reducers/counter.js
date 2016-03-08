import { handleActions } from 'redux-actions';


export default handleActions({
  increase: (state, action) => ({
    value: state.value + action.payload,
  }),

}, {
  value: 0,
});
