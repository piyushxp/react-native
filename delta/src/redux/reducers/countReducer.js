const dataReducer = (state = 'piyush', action) => {
  console.log('4. [inside reducer], action = ', action);
  switch (action.type) {
    case 'LOADING':
      console.log('5. [inside reducer Loading]', action);
      return 'Loading';
    case 'RECEIVING':
      console.log('5. [inside reducer RECEIVING]', action);
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
