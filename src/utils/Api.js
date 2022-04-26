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

// Element api

export const createElement = (element) => {
  return fetch(`${BASE_URL}/elements`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(element)
  })
    .then(getResponseData);
}


export const updateElement = (element) => {
  return fetch(`${BASE_URL}/elements/${element.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(element)
  })
    .then(getResponseData);
}


export const deleteElement = (elementID) => {
  return fetch(`${BASE_URL}/elements/${elementID}`, {
    method: 'DELETE'
  })
    .then(getResponseData);
}
