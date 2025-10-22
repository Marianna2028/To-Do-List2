document.addEventListener('DOMContentLoaded', function() {

  //submits task and keeps it on screen
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); 

    //creates new list item 
    const li = document.createElement('li');
    const task_text = document.querySelector('#task').value.trim();
    if (task_text === "") return; 

    // Create the task with radio buttons
    li.innerHTML = `
      <span>${task_text}</span>
      <input type="radio" name="status-${Date.now()}" class="pending-radio"> Pending
      <input type="radio" name="status-${Date.now()}" class="complete-radio"> Complete
      <button class="remove">Remove</button>
    `;

    //shows task in list 
    document.querySelector("#tasks_list").append(li);

    //clears input box
    document.querySelector("#task").value = '';

    //gets text element
    const span = li.querySelector('span');

    // Pending radio functionality
    li.querySelector('.pending-radio').addEventListener('change', function() {
      span.classList.remove('completed');
      span.classList.add('pending');
    });

    // Complete radio functionality
    li.querySelector('.complete-radio').addEventListener('change', function() {
      span.classList.remove('pending');
      span.classList.add('completed');
    });

    // Remove button functionality
    li.querySelector('.remove').addEventListener('click', function() {
      li.remove();
    });

  };

});



