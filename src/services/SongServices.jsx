const API_BASE_URL = "http://localhost:8088" // Your JSON server base URL

export const getAllSongs = () => {
  return fetch(`${API_BASE_URL}/songs`).then((res) => res.json())
}

export const getAllKeys = () => {
  return fetch(`${API_BASE_URL}/keys`).then((res) => res.json())
}

export const getSongsById = (id) => {
  return fetch(`${API_BASE_URL}/songs/${id}`).then((res) => res.json())
}

export const getKeyById = async (keyId) => {
  const response = await fetch(`${API_BASE_URL}/keys/${keyId}`)
  return await response.json()
}

export const getSongById = async (songId) => {
  const response = await fetch(`${API_BASE_URL}/songs/${songId}`)
  return await response.json()
}

export const deleteSong = async (songId) => {
  const response = await fetch(`${API_BASE_URL}/songs/${songId}`, {
    method: "DELETE",
  })
  return await response.json()
}

export const getComments = async (songId) => {
  const response = await fetch(`${API_BASE_URL}/songComments?songId=${songId}`)
  return await response.json()
}

export const addComment = async (songId, userId, body) => {
  const response = await fetch(`${API_BASE_URL}/songComments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ songId, userId, body }),
  })
  return await response.json()
}

export const getLikes = async (songId) => {
  const response = await fetch(`${API_BASE_URL}/likedSongs?songId=${songId}&liked=true`)
  const likes = await response.json()
  return likes.length
}

export const addLike = async (songId, userId) => {
  const response = await fetch(`${API_BASE_URL}/likedSongs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ songId, liked: true, userId }),
  });
  return await response.json();
};

export const removeLike = async (songId, userId) => {
  const response = await fetch(`${API_BASE_URL}/likedSongs?songId=${songId}&userId=${userId}`, {
    method: "DELETE",
  });
  return await response.json();
};

export const updateSong = async (songId, updatedSong) => {
  const response = await fetch(`${API_BASE_URL}/songs/${songId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedSong),
  })
  return response.json()
}

export const getSongsByIds = async (ids) => {
  const promises = ids.map(id => fetch(`${API_BASE_URL}/songs/${id}`).then(res => res.json()));
  return Promise.all(promises);
};