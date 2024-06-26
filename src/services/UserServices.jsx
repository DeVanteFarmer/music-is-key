export const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}`).then((res) =>
      res.json()
    )
  }
  
  export const getUserSongs = async (userId) => {
    const response = await fetch(`http://localhost:8088/songs?userId=${userId}`);
    return response.json();
  };
  
  export const getUserByEmail = async (email, password) => {
    const response = await fetch(`http://localhost:8088/users?email=${email}&password=${password}`);
    const users = await response.json();
    return users;
  };
    
    export const createUser = (customer) => {
      return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      }).then((res) => res.json())
    }