export const setLoading = () => {
  return {
    type: 'SET_LOADING',
  };
};

export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: 'GET_TECHS',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'TECHS_ERROR',
      payload: err.response.statusText,
    });
  }
};

export const addTechs = (tech) => async (dispatch) => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    dispatch({
      type: 'ADD_TECHS',
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: 'TECHS_ERROR',
      payload: err.response.statusText,
    });
  }
};

export const deleteTechs = (id) => async (dispatch) => {
  try {
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: 'DELETE_TECHS',
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: 'TECHS_ERROR',
      payload: err.response.statusText,
    });
  }
};
