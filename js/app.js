document.addEventListener('DOMContentLoaded', () => {
  const newPlayerForm = document.querySelector('#new-player-form');
  newPlayerForm.addEventListener('submit', handleNewPlayerFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all')
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
})


const handleNewPlayerFormSubmit = function (event) {
  event.preventDefault();

  const squadListItem = createSquadListItem(event.target);
  const squadList = document.querySelector('#squad-list');
  squadList.appendChild(squadListItem);

  event.target.reset();
}

const createSquadListItem = function (form) {
  const squadListItem = document.createElement('tr');
  squadListItem.classList.add('squad-list-item');

  const firstName = document.createElement('td');
  firstName.textContent = form.firstname.value;
  squadListItem.appendChild(firstName);

  const lastName = document.createElement('td');
  lastName.textContent = form.lastname.value;
  squadListItem.appendChild(lastName);

  const footed = document.createElement('td');
  footed.textContent = form.footed.value;
  squadListItem.appendChild(footed);

  const position = document.createElement('td');
  position.textContent = form.position.value;
  squadListItem.appendChild(position);

  return squadListItem;
}

const handleDeleteAllClick = function (event) {
  const squadList = document.querySelector('#squad-list');
  squadList.innerHTML = '';
}
