function onSuccess(response) {
  response.json();
}

const request = fetch('https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users')

console.log(request);
request
.then(onSuccess)
.then(function(data) {
  console.log(data);
})