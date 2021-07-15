import {COUNTER_CHANGE} from '../constants';
import axios from 'axios';

export default changeCount = () => {
  //loading
  // dispatch({type: 'LOADING'});
  console.log('chnageCount');

  return async dispatch => {
    try {
      let {data} = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );

      console.log(data);
      dispatch({type: 'RECEIVING', payload: data.title || 'Some data'});
    } catch (error) {
      console.log(error);
    }
  };

  //
};
