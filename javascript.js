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

    // Append the span to the li
    li.appendChild(span);

    // Add radio buttons and remove button
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio';
    pendingRadio.name = `status-${Date.now()}`;
    pendingRadio.classList.add('pending-radio');
    li.appendChild(pendingRadio);
    li.appendChild(document.createTextNode(' Pending '));

    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = pendingRadio.name; // same group
    completeRadio.classList.add('complete-radio');
    li.appendChild(completeRadio);
    li.appendChild(document.createTextNode(' Complete '));

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove');
    li.appendChild(removeBtn);

    // Append li to the task list
    document.querySelector("#tasks_list").appendChild(li);

    // Clear input box
    document.querySelector("#task").value = '';

    // Pending radio functionality
    pendingRadio.addEventListener('change', function() {
      span.classList.remove('completed');
      span.classList.add('pending');
    });

    // Complete radio functionality
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





