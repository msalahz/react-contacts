const api =
  process.env.REACT_APP_CONTACTS_API_URL ||
  "https://evening-mountain-37762.herokuapp.com";

let { token } = localStorage;

if (!token)
  // eslint-disable-next-line no-multi-assign
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const getAll = () =>
  fetch(`${api}/contacts`, { headers })
    .then(res => res.json())
    .then(data => data.contacts);

export const remove = contact =>
  fetch(`${api}/contacts/${contact.id}`, { method: "DELETE", headers })
    .then(res => res.json())
    .then(data => data.contact);

export const create = body =>
  fetch(`${api}/contacts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(res => res.json());
