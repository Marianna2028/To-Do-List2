document.addEventListener('DOMContentLoaded', function() {

  // Submits task and keeps it on screen
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); // Prevent page refresh

    const taskInput = document.querySelector('#task');
    const taskText = taskInput.value.trim();
    if (taskText === "") return; // Don't add empty tasks

    // Create new list item
    const li = document.createElement('li');

    // Create a span for task text
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Create Pending radio
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio';
    pendingRadio.name = `status-${Date.now()}`; // Unique per task
    pendingRadio.classList.add('pending-radio');
    li.appendChild(pendingRadio);
    li.appendChild(document.createTextNode(' Pending '));

    // Create Complete radio
    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = pendingRadio.name;
    completeRadio.classList.add('complete-radio');
    li.appendChild(completeRadio);
    li.appendChild(document.createTextNode(' Complete '));

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button'; // Important: prevents form submit
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    li.appendChild(removeBtn);

    // Append li to task list
    document.querySelector("#tasks_list").appendChild(li);

    // Clear input
    taskInput.value = '';

    // Radio button functionality
    pendingRadio.addEventListener('change', function() {
      span.classList.remove('completed');
      span.classList.add('pending');
    });

    completeRadio.addEventListener('change', function() {
      span.classList.remove('pending');
      span.classList.add('completed');
    });

    // Remove button functionality
    removeBtn.addEventListener('click', function() {
      li.remove();
    });
  };

});





