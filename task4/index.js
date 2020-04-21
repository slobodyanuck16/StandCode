const listItems = document.querySelectorAll('.list-item');

function handleClick(event) {
  console.log(event.target.textContent);
}

listItems.forEach(elem => {
  elem.addEventListener('click', handleClick);
});