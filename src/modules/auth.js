import JtockAuth from 'j-tockauth';

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
});

const performAuthentication = async (e, dispatch) => {
  try {
    e.preventDefault();

    let response = await auth.signIn(
      e.target.elements.email.value,
      e.target.elements.password.value
    );
    if (response.data.role === 'journalist') {
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: response.data,
      });
    } else {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: 'You are not authorized to be here',
      });
      localStorage.removeItem('J-tockAuth-Storage');
    }
  } catch (error) {
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      payload: error.response.data.errors[0],
    });
  }
};

export { performAuthentication };
