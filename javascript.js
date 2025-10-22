document.addEventListener('DOMContentLoaded', function() {

  // Submits task and keeps it on screen
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); 

    // Create new list item
    const li = document.createElement('li');
    const task_text = document.querySelector('#task').value.trim();
    if (task_text === "") return; 

    // Create a span for the task text
    const span = document.createElement('span');
    span.textContent = task_text;

    // Get the priority from the dropdown
    const priority = document.querySelector('#priority').value;
    const priorityDropdown = document.querySelector('#priority');
    const taskInput = document.querySelector('#task');

    // Assign priority class to the span
    if (priority === 'Low') span.classList.add('low-priority');
    else if (priority === 'Medium') span.classList.add('medium-priority');
    else if (priority === 'High') span.classList.add('high-priority');

    //assigned color when user selects the priority 
    const initalPriority = priorityDropdown.value;
    if (initialPriority === ('Low') taskInput.style.color = 'lightblue';
     if (initialPriority === ('Medium') taskInput.style.color = 'yellow';
     if (initialPriority === ('High') taskInput.style.color = 'red';
    

    // Append the span to the li
    li.appendChild(span);

    // Add radio buttons and remove button
    li.innerHTML += `
      <input type="radio" name="status-${Date.now()}" class="pending-radio"> Pending
      <input type="radio" name="status-${Date.now()}" class="complete-radio"> Complete
      <button class="remove">Remove</button>
    `;

    // Append li to the task list
    document.querySelector("#tasks_list").append(li);

    // Clear input box
    document.querySelector("#task").value = '';

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





