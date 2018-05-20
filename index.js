const mainContainer = document.querySelector('#container');

/* HEADER SECTION */

//Creating Header Container
const headerContainer = document.createElement('div');
headerContainer.id = 'header-container';
headerContainer.className = 'nav-wrapper';
//Appending to mainContainer
mainContainer.appendChild(headerContainer);

//Creating Header Text
const headerText = document.createElement('h1');
headerText.id = 'header-text';
headerContainer.className = 'brand-logo';
headerText.innerText = 'Task List Application';
//Appending To HeaderContainer
headerContainer.appendChild(headerText);

/* CREATE LIST SECTION */

//Creating subheader for createList and filter section
const subheader = document.createElement('div')
subheader.id = 'subheader';
mainContainer.appendChild(subheader);

//Creating Add List Button Container
const addListContainer = document.createElement('form');
addListContainer.id = 'add-list-container';
addListContainer.className = 'input-field col s6'
//Appending to mainContainer
subheader.appendChild(addListContainer);

//Creating New List Input
const newListInput = document.createElement('input');
newListInput.id = 'new-list-input';
newListInput.className = 'validate';
newListInput.setAttribute('type', 'text');
//Appending to addListContainer
addListContainer.appendChild(newListInput);

//Creating Label for New List label
const newListLabel = document.createElement('label');
newListLabel.setAttribute('for', 'new-list-input');
newListLabel.innerText = 'New List...';
//Append to newListContainer
addListContainer.appendChild(newListLabel);

//Creating Add List Button
const addListButton = document.createElement('input');
addListButton.className = "btn";
addListButton.id = 'create-list-button';
addListButton.setAttribute('type', 'submit');
addListButton.setAttribute('value', 'Add New List');
//Appending to add-list-button-container
addListContainer.appendChild(addListButton);

//creating filterListsContainer
const filterListsContainer = document.createElement('div');
filterListsContainer.className = 'input-field col s12';
subheader.appendChild(filterListsContainer);

//creating filterListsInput
const filterListInput = document.createElement('input');
filterListInput.id = 'filter-list-input';
filterListInput.setAttribute('type', 'text');
//Appending to addListContainer
filterListsContainer.appendChild(filterListInput);

//Creating filterListLabel
const filterListLabel = document.createElement('label');
filterListLabel.setAttribute('for', 'filter-list-input');
filterListLabel.innerText = 'Search Lists...';
//Append to newListContainer
filterListsContainer.appendChild(filterListLabel);

//Creating ListDisplayContainer
const listDisplayContainer = document.createElement('div');
listDisplayContainer.id = "list-display-container";
listDisplayContainer.style.display ='grid';
listDisplayContainer.style.gridTemplateColumns = 'repeat(1, 1fr 1fr)';
listDisplayContainer.style.gridGap ='10px';


//Appending to add-list-button-container
mainContainer.appendChild(listDisplayContainer);

loadEventListeners();

function loadEventListeners() {

  addListContainer.addEventListener('submit', createNewList);

  filterListInput.addEventListener('keyup', filterListNames);

  listDisplayContainer.addEventListener('click', filterTaskList);

  listDisplayContainer.addEventListener('click', removeList);

  listDisplayContainer.addEventListener('click', displayAddTaskInput);

  listDisplayContainer.addEventListener('submit', addTaskToList);

  listDisplayContainer.addEventListener('keyup', filterTaskNames);

  listDisplayContainer.addEventListener('click', removeTask);

}

function createNewList(e){
  e.preventDefault();

  //check if value exists
  if(newListInput.value === '') {
    newListLabel.innerText = 'Please Enter Task First';
    newListLabel.style.color = 'red';
  } else {
    //create listCard
    const listCard = document.createElement('div');
    listCard.className = 'card';

    //create cardContent Element
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    //Append to listCard
    listCard.appendChild(cardContent);

    //create cardTitle Element
    const cardTitle = document.createElement('span');
    cardTitle.className = 'card-title center';
    cardTitle.innerText = `${newListInput.value}`;
    //Append to cardContent
    cardContent.appendChild(cardTitle);

    //create AddToListItemButton
    const addListItemButton = document.createElement('a');
    addListItemButton.className = 'add-to-list-button left';

    //create AddToListIcon
    const addListItemIcon = document.createElement('i');
    addListItemIcon.className = 'add-to-list-icon fa fa-plus';
    //Appending to addListButton
    addListItemButton.appendChild(addListItemIcon);
    //Appending Button to Card
    cardContent.appendChild(addListItemButton);

    //create listSearchButton
    const listSearchButton = document.createElement('a');
    listSearchButton.className = 'filter-list-button';
    cardContent.appendChild(listSearchButton);

    //create listSearchIcon
    const listSearchIcon = document.createElement('i');
    listSearchIcon.className = 'filter-list-icon fas fa-search';
    listSearchButton.appendChild(listSearchIcon)
    
    //create removeListButton
    const removeListButton = document.createElement('a');
    removeListButton.className = 'remove-list-button secondary-content';

    //create removeListIcon
    const removeListIcon = document.createElement('i');
    removeListIcon.className = 'remove-list-icon fa fa-times';
    removeListIcon.style.color = 'red';
    //Appending to removeListButton
    removeListButton.appendChild(removeListIcon);
    //Appending Button to Card
    cardContent.appendChild(removeListButton);
    //Appending to listDisplayContainer
    listDisplayContainer.appendChild(listCard);

    //create collection
    const listCollection = document.createElement('ul');
    listCollection.className = 'collection';
    
    if(listCollection.children.length === 0) {
      listCollection.style.display = 'none';
    } else {
      listCollection.style.display = 'block';
    }
    
    listCard.appendChild(listCollection);

    //TODO
    // //store in Local Storage
    // storeListItems(taskInput.value);

    //Reset the input
    if(newListInput.value.length > 0) {
      newListLabel.innerText = 'New Task';
      newListLabel.style.color = '#26a69a';
      newListInput.value = '';
    }
  }
}

function filterListNames(e){
  e.preventDefault();
  const filterListText = e.target.value.toLowerCase();

  document.querySelectorAll('.card').forEach(list => {
    let listName = list.firstChild.textContent;

    if(listName.toLowerCase().indexOf(filterListText) != -1){
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
  });
}

function displayAddTaskInput(e) {
  e.preventDefault();

  let addLink = e.target;
  let addLinkButton = e.target.parentElement;
  let cardHeaderContent = e.target.parentElement.parentElement;
  
  let searchLinkButton = e.target.parentElement.nextSibling;

  if(e.target.classList.contains('add-to-list-icon') && e.target.parentElement.children.length === 1){

    let deleteListLink = e.target.parentElement.nextSibling.nextSibling;
    
    //create Task Form
    let taskInputForm = document.createElement('form');
    taskInputForm.className= 'create-task-form';
    taskInputForm.setAttribute('action', 'submit');
    
    //create taskName input
    let taskNameInput = document.createElement('input');
    taskNameInput.setAttribute('placeHolder', 'Enter Task Name...');
    taskNameInput.id = 'task-enter-input';
    taskNameInput.style.width = '80%';
    taskNameInput.style.height ='2rem';

    //append to form
    taskInputForm.appendChild(taskNameInput);



    //Styling taskName input
    cardHeaderContent.style.gridTemplateColumns = 'repeat(1, 3fr 1fr 2fr 1fr)';
    addLink.style.display = 'inline-block';
    addLinkButton.style.display = 'grid';
    addLinkButton.style.gridTemplateColumns = 'repeat(1, 1fr 4fr)';
    addLink.style.paddingLeft = '5px';
    addLink.style.display = 'inline-block';
    deleteListLink.style.gridColumn = '4/5';
    searchLinkButton.style.gridColumn = '2/3';

    addLinkButton.appendChild(taskInputForm);

  } else if(e.target.classList.contains('add-to-list-icon') && e.target.parentElement.children.length > 1) {
    e.target.nextSibling.remove();
    let deleteListLink = e.target.parentElement.nextSibling.nextSibling;
    cardHeaderContent.style.gridTemplateColumns = 'repeat(1, 1fr 1fr 3fr 1fr 1fr)';
    deleteListLink.style.gridColumn = '5/6';
    addLinkButton.style.gridTemplateColumns = 'none';

  }
}

function filterTaskList(e){
  e.preventDefault();

  let searchLink = e.target;
  let searchLinkButton = e.target.parentElement;
  let cardHeaderContent = e.target.parentElement.parentElement;
  let deleteListLink = e.target.parentElement.nextSibling;

  if(e.target.classList.contains('filter-list-icon') && e.target.parentElement.children.length === 1){
    //create filter input
    let filterCurrentListInput = document.createElement('input');
    filterCurrentListInput.className = 'list-filter-input';
    filterCurrentListInput.setAttribute('placeHolder', 'Search Tasks');
    filterCurrentListInput.style.width = '80%';
    filterCurrentListInput.style.height ='2rem'
    //Styling filter input
    cardHeaderContent.style.gridTemplateColumns = 'repeat(1, 1fr 3fr 2fr 1fr)';
    searchLink.style.display = 'inline-block';
    searchLinkButton.style.display = 'grid';
    searchLinkButton.style.gridTemplateColumns = 'repeat(1, 1fr 4fr)';
    searchLink.style.paddingLeft = '5px';
    searchLink.style.display = 'inline-block';
    deleteListLink.style.gridColumn = '4/5';
    searchLinkButton.appendChild(filterCurrentListInput);
  } else if(e.target.classList.contains('filter-list-icon') && e.target.parentElement.children.length > 1) {
    e.target.nextSibling.remove();
    cardHeaderContent.style.gridTemplateColumns = 'repeat(1, 1fr 1fr 3fr 1fr 1fr)';
    deleteListLink.style.gridColumn = '5/6';
    searchLinkButton.style.gridTemplateColumns = 'none';
  }
}

function removeList(e) {
  e.preventDefault();
  
  if(e.target.classList.contains('remove-list-icon')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.parentElement.remove();
    }
  } 
}

function addTaskToList(e) {
  e.preventDefault();

  let inputValue = e.target.firstChild.value;
  let taskInput = e.target.firstChild;


  console.log(taskInput);

  if(inputValue=== '') {
    console.log('empty')
    taskInput.setAttribute('placeHolder', 'Please Enter Task First');
    taskInput.style.borderBottom = '2px dashed red';
  } else {
    
    let listCard = e.target.parentElement.parentElement.parentElement;
    let listCollection = listCard.lastChild;
    console.log(listCollection);

    let listItem = document.createElement('li');
    listItem.className = 'collection-item'
    listItem.appendChild(document.createTextNode(inputValue));

    let clearTaskLink = document.createElement('a');
    clearTaskLink.className = 'delete-item secondary-content';
    clearTaskLink.innerHTML = '<i class="far fa-check-circle"></i>';
    clearTaskLink.style.color = 'green';

    listItem.appendChild(clearTaskLink);


    listCollection.appendChild(listItem);

    if(listCollection.children.length > 0) {
      listCollection.style.display = 'block';
    }

    taskInput.value = '';
  }
}

function filterTaskNames(e){
  e.preventDefault();
  
  if(e.target.classList.contains('list-filter-input')) {
    let listCard = e.target.parentElement.parentElement.parentElement.lastChild;
    let allListItems = Array.from(listCard.children);
    let filterValue = e.target.value.toLowerCase();
    console.log(allListItems);

    allListItems.forEach((task) => {
      let listText = task.firstChild.textContent;

      if(listText.toLowerCase().indexOf(filterValue) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    })
  }
}

function removeTask(e) {
  e.preventDefault();
  const grandParent = e.target.parentElement.parentElement;

  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();
    }
  }
}