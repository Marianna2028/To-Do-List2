document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); // Prevent page refresh

    const taskInput = document.querySelector('#task');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const prioritySelect = document.querySelector('#priority');
    const selectedPriority = prioritySelect.value;

    const li = document.createElement('li');

    // Task text with priority
    const span = document.createElement('span');
    span.textContent = `${taskText} [${selectedPriority}]`;
    li.appendChild(span);

    // Pending radio
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio';
    pendingRadio.name = `status-${Date.now()}`;
    li.appendChild(pendingRadio);
    li.appendChild(document.createTextNode(' Pending '));

    // Complete radio
    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = pendingRadio.name;
    li.appendChild(completeRadio);
    li.appendChild(document.createTextNode(' Complete '));

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove';
    li.appendChild(removeBtn);

    // Add task to list
    document.querySelector('#tasks_list').appendChild(li);

    // Clear input
    taskInput.value = '';

    // Remove button functionality
    removeBtn.addEventListener('click', () => li.remove());
  };
});





