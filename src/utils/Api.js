export const BASE_URL = './api';

export const getResponseData = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(getResponseData);
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(getResponseData);
};

export const logout = () => {
  return fetch(`${BASE_URL}/exit`, {
    method: 'DELETE'
  })
    .then(getResponseData);
}

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET'
  })
    .then(getResponseData);
};

export const updateProfile = ({ username, description }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: username,
      about: description
    })
  })
    .then(getResponseData);
}

export const updateAvatar = (dataAvatar) => {
  return fetch(`${BASE_URL}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataAvatar)
  })
  .then(getResponseData);
}

// Drawings api

export const createDrawing = (data) => {
  return fetch(`${BASE_URL}/drawings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(getResponseData);
}


export const updateDrawing = (drawingId, name, elements) => {
  return fetch(`${BASE_URL}/drawings/${drawingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, elements})
  })
    .then(getResponseData);
}


export const deleteDrawing = (drawingId) => {
  return fetch(`${BASE_URL}/drawings/${drawingId}`, {
    method: 'DELETE'
  })
    .then(getResponseData);
}

// Counter api

export const createAction = () => {
  return fetch(`${BASE_URL}/actions`, {
    method: 'POST'
  })
    .then(getResponseData);
}


export const getActions = () => {
  return fetch(`${BASE_URL}/actions`, {
    method: 'GET'
  })
    .then(getResponseData);
}


export const getCounter = () => {
  return fetch(`${BASE_URL}/actions/counter`, {
    method: 'GET'
  })
    .then(getResponseData);
}
