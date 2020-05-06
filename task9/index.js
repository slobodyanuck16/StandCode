const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io';


// function getUserData(userId) {
//   return fetch(`${baseUrl}/users/${userId}`)
//   .then(response => {
//     if(!response.ok) {
//       throw new Error ('Can not find a user');
//     }
//     return response.json();
//   });
// }

async function getUserData(userId) {
  const response = await fetch(`${baseUrl}/users/${userId}`)
  console.log(response);
  if(!response.ok) {
          throw new Error ('Can not find a user');
        }
  const userData = await response.json();
  return userData;
}

getUserData(`4`)

// getUseData(`1`)
// .then(userData => {
//   console.log(userData);
// })
// .catch(error => {
//   alert(error)
// })