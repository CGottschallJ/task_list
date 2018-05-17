


const createListContainer = document.querySelector('#listCreateWrap');

// - Creating a button to open createListForm
const openCreateFormButton = document.createElement('a');
openCreateFormButton.id = "createListButton"; 
openCreateFormButton.className= "waves-effect waves-light btn green";
openCreateFormButton.innerText = 'Create New List';
createListContainer.appendChild(openCreateFormButton);

// - Creating createListForm
const createListForm = document.createElement('form');
createListForm.id = 'createListForm';

// - Creating listNameInput
const listNameInput = document.createElement('input');
listNameInput.setAttribute('placeholder', 'Enter New List Name');
listNameInput.setAttribute('type', 'text');
listNameInput.className = "validate";
listNameInput.id = "listNameInput";

// - Appending listNameInput to createListForm
createListForm.appendChild(listNameInput);

// - Creating createListSubmit button
const createListSubmit = document.createElement('a');
createListSubmit.className = "waves-effect waves-light btn right green";
createListSubmit.innerText = "Create List";
createListSubmit.style.margin = '0px 10px';
createListSubmit.style.color = 'white';

// - Appending createListSubmit to createListForm
createListForm.appendChild(createListSubmit);

// - Creating Nevermind Button
const nevermindButton = document.createElement('a');
nevermindButton.id = 'nevermindButton'
nevermindButton.className = "waves-effect waves-light btn red right";
nevermindButton.innerText = "Nevermind";

// - Appending Nevermind to createListForm
createListForm.appendChild(nevermindButton);


// openCreateFormButton Functionality
openCreateFormButton.addEventListener('click', e => {
  e.preventDefault();
  createListContainer.removeChild(openCreateFormButton);
  createListContainer.appendChild(createListForm);
})

// nevermindButton Functionality 
nevermindButton.addEventListener('click', e => {
  e.preventDefault();
  createListContainer.removeChild(createListForm);
  createListContainer.appendChild(openCreateFormButton);
});

// createListSumbit Functionality
createListSubmit.addEventListener('click', e => {
  e.preventDefault();

  let newListName = listNameInput.value;

  if(newListName.length === 0){
    listNameInput.setAttribute('placeholder', 'Please Enter A List Name First');
    listNameInput.style.borderBottom = '2px solid red';

  } else {
    listNameInput.style.borderBottom = '2px solid green';
    //create Card
    const listCard = document.createElement('div');
    listCard.className = 'card';

    //create cardTitle
    const cardTitle = document.createElement('span');
    cardTitle.className = 'card-title';
    cardTitle.innerText = newListName;
    listCard.appendChild(cardTitle);


    //Create collectionList
    const collectionList = document.createElement('ul');
    collectionList.className = 'collection';
    listCard.appendChild(collectionList);

    //Create firstItem
    const firstItem = document.createElement('li');
    firstItem.className = 'collection-item';
    firstItem.innerHTML = `
      <form class='task-form'>
        <input type='text' name='task' id='task' placeholder='New Task...'></input>
        <input type='submit' class='btn';><i class="fa fa-plus"></i>  
      </form> 
    `;
    collectionList.appendChild(firstItem);

    let listDisplayContainer = document.querySelector('#listDisplayWrap');
    listDisplayContainer.appendChild(listCard);

    createListContainer.removeChild(createListForm);
    createListContainer.appendChild(openCreateFormButton);
    console.log(newListName);
  }
  


});

// const allListNames = JSON.parse(localStorage.getItem('listNames'));

// allListNames.map(listName => {
//   console.log(listName)
// })

// Creating a listDisplayContainer

// const listDisplayContainer = document.querySelector('#listDisplayWrap');

// const allListNames = JSON.parse(localStorage.getItem('listNames'));

// allListNames.map(listName => {
//   console.log(listName)
// })

// Appending listDisplayContainer to mainWrap















// const createListButton = document.querySelector('#createListButton');

// createListButton.addEventListener('click', e => {
//   e.preventDefault();

//   const createForm = document.createElement('form');
//   createForm.id = "create_form";


//   const createInput = document.createElement('input');
//   createInput.id = "new_task";
//   createInput.setAttribute('type', 'text');
//   createInput.className = "validate";
//   createInput.setAttribute('placeholder', 'Enter New List Name Here...');

//   const createButton = document.createElement('a');
//   createButton.className = "waves-effect waves-light btn right green";
//   createButton.innerText = "Create List";
//   createButton.style.margin = '0px 10px';
//   createButton.style.color = 'white';
//   // createButton.style('color', 'white');

//   const nevermindButton = document.createElement('a');
//   nevermindButton.id = 'nevermindButton'
//   nevermindButton.className = "waves-effect waves-light btn red right";
//   nevermindButton.innerText = "Nevermind";

//   createForm.appendChild(createInput);
//   createForm.appendChild(createButton);
//   createForm.appendChild(nevermindButton);
  

//   const createListWrap = document.querySelector('#createWrap');

//   // createListWrap.remove(document.createListButton)

//   if(createListWrap.children.length === 1){
//     createListWrap.appendChild(createForm);
//     createListWrap.removeChild(createListButton);
//   }

//   /* BUTTON EVENTS */

//   //create button
//   createButton.addEventListener('click', e => {

//     e.preventDefault();
    
//     const listName = document.querySelector('#new_task').value;

//     let listNames;

//     if(localStorage.getItem('listNames') === null){
//       listNames = [];
//     } else {
//       listNames = JSON.parse(localStorage.getItem('listNames'))
//     }

//     listNames.push(listName);

//     localStorage.setItem('listNames', JSON.stringify(listNames));

  


//     // Setup button displaying list saved on timer.!!!!

//   })

//   //nevermind button
//   nevermindButton.addEventListener('click', e => {
//     createListWrap.removeChild(createForm);
//     createListWrap.appendChild(createListButton);
//   });


// });

// /* LIST DISPLAY */

//   // - Creating a wrapper to hold all lists
// const listDisplay = document.createElement('div');
// listDisplay.id = 'listDisplayWrap';

//   // - Appending to the body Element
// document.querySelector('#mainWrap').appendChild(listDisplay);

//   // - storing all listNames as an array
// const allLists = JSON.parse(localStorage.getItem('listNames'));




















// function displayLists() {
//   // allLists.forEach(list => {
//   let listCard = document.createElement('div');
//   listCard.className = 'card listCard';
//   let cardTitle = document.createElement('span');
//   cardTitle.className = 'card-title';
//   cardTitle.innerText = 
//   listCard.appendChild(cardTitle);
//   listDisplay.appendChild(listCard);
//   // })
// }
