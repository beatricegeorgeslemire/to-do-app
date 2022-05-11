//Query the DOM for the form element

const formElement = document.querySelector('form');
console.log(formElement);

//Add a submit event listener on the form
formElement.addEventListener('submit', function (event) {
    //prevent the page from refreshing whent he form is submitted


    //only if the user has entered an actual task (aka is not empty)
    event.preventDefault();
    //log out he event object which is generated when the form is submitted
    console.log(event);

    // alert(`You have submitted this form!`);
    //query the DOM for the input element and check whether its empty
    const inputElement = document.getElementById('toDoItem');
    console.log(inputElement);

    //only if the user has submitted an actual task
    if (inputElement.value !== '') {

        console.log('congrats on entering a task');

        //grab the user's to do item form the form input
        console.log(inputElement.value);

        //create an li
        const liElement = document.createElement('li');
        console.log(liElement);

        //display the TO DO on the page within an li element

        //include a checkbox icon within the li
        liElement.innerHTML = `<i class="fa-regular fa-square"></i>`;
        //create an element that represents the text we have to add (our TO DO)
        const toDoContent = document.createTextNode(inputElement.value);
        console.log(toDoContent);

        //and then append that text element to the li
        liElement.appendChild(toDoContent);

        //add li element to the ul
        document.querySelector('ul').appendChild(liElement);

        //clear input!
        inputElement.value = '';

    } else {
        alert("Stop bein lazy and submit something");
    }



});



//clicking on a task allows you to toggle between checked vs unchecked (aka done vs not done)

//NOTE: this will not work because you can only add event listeners to elements which exist at the time of the code execution.

// const listElements = document.querySelector('li');
// listElements.addEventListener('click', function () {
//     console.log('to do has been checked!');
// });

//in order to attach a click event listener to the li's which do not exist on th epage yet, we can use :
//EVENT PROPAGATION to DELEGATE the click event to the ul!
const ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
    //The this keyword represents the object that owns the code wghich is currently running
    //so this will give us back the ul consistently which is not what we want 
    //console.log(this);

    //log out the event object
    // console.log(event);

    //as long as we clicked on the icon, then:

    if (event.target.localName === 'i') {

        console.log('clickety clack');

        //this will log the specific nested element within the ul that the click is occuring on
        console.log(event.target);

        //toggle between checked/unchecked (AKA done vs not done) on the target element
        event.target.classList.toggle('fa-square-check');
        event.target.classList.toggle('fa-square');
    }
});

//BONUS LEVEL
//add a reset button which clears out all of the TO DOS
//add an edit task button 
//add a remove task button to each task
//add a congratulations alert whena all of the existing TO DOS are checked off
//add a take a break message if 5 or more tasks are completed