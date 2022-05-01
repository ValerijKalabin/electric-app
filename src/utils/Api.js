export const BASE_URL = './api';

export const getResponseData = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response);
};

// Auth api

export const signin = (key) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key })
  })
    .then(getResponseData);
};


export const signout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST'
  })
    .then(getResponseData);
}

// User api

export const createUser = (name, days, status, password) => {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, days, status, password })
  })
    .then(getResponseData);
};


export const updateUser = (name, newname, days, password) => {
  return fetch(`${BASE_URL}/users/name`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, newname, days, password })
  })
    .then(getResponseData);
};


export const updateAdmin = (name, password) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password })
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
  return fetch(`${BASE_URL}/drawings/me/${drawingId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, elements})
  })
    .then(getResponseData);
}


export const deleteDrawing = (drawingId) => {
  return fetch(`${BASE_URL}/drawings/me/${drawingId}`, {
    method: 'DELETE'
  })
    .then(getResponseData);
}


export const getDrawings = () => {
  return fetch(`${BASE_URL}/drawings/me`, {
    method: 'GET'
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
