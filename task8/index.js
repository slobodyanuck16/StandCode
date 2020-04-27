const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

function getUsersList() {
  return fetch(baseUrl)
  .then(response => response.json())
}

getUsersList()
.then(data => console.log(data));

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`)
  .then(response => {
    return response.json();
  });
}

getUserById(`1`)
.then(data => {
  console.log(data);
})

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  })
}

const user = {
  age: 7,
  email: 'lol@gmail.com',
  firstName: 'Bob',
  id: '1',
  lastName: 'King',
}

createUser(user)
.then(response => response.text())
.then(data => console.log(data))


function updateUser(userId, newUserData) {
  const pr = fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(newUserData)
  });
  return pr;
}

updateUser('2', {email: 'a@a.com'})
  .then(result => result.json())
  .then(data => console.log(data))

function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });;
}

deleteUser('2')
  .then(response => response.json())
  .then(data => console.log(data))