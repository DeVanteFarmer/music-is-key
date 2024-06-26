const API_BASE_URL = "http://localhost:8088"

export const getUserById = (id) => {
  return fetch(`${API_BASE_URL}/users/${id}`).then((res) => res.json())
}

export const getUserSongs = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/songs?userId=${userId}`)
  return response.json()
}

export const getUserByEmail = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/users?email=${email}&password=${password}`);
  const users = await response.json()
  return users
}

export const createUser = (customer) => {
  return fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json())
}
