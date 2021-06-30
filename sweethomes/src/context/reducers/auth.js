const auth = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return state;
    case 'REGISTER':
      return {};
    default:
      return state;
  }
};

export default auth;
