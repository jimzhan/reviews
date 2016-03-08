import { handleActions } from 'redux-actions';


export default handleActions({
  increase: (state) => Object.assign({}, state, { value: state.value + 1 }),
}, { value: 0 });
