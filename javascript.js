document.addEventListener('DOMContentLoaded', function() {
  let selectedPriority = "Low"; // Default priority

  // Dropdown selection
  const priorityLinks = document.querySelectorAll('.dropdown-content a');
  const priorityBtn = document.getElementById('priorityBtn');

  priorityLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      selectedPriority = this.dataset.priority;
      priorityBtn.textContent = selectedPriority; // Show selected priority
    });
  });

  // Task submission
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault();

    const taskInput = document.querySelector('#task');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

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

    taskInput.value = '';

    // Remove button functionality
    removeBtn.addEventListener('click', () => li.remove());
  };
});





