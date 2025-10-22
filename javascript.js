document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); // Stop page refresh

    const taskInput = document.querySelector('#task');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);

    // Pending radio
    const pendingRadio = document.createElement('input');
    pendingRadio.type = 'radio';
    pendingRadio.name = `status-${Date.now()}`;
    pendingRadio.classList.add('pending-radio');
    li.appendChild(pendingRadio);
    li.appendChild(document.createTextNode(' Pending '));

    // Complete radio
    const completeRadio = document.createElement('input');
    completeRadio.type = 'radio';
    completeRadio.name = pendingRadio.name;
    completeRadio.classList.add('complete-radio');
    li.appendChild(completeRadio);
    li.appendChild(document.createTextNode(' Complete '));

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.textContent = 'Remove';
    li.appendChild(removeBtn);

    // Add to list
    document.querySelector('#tasks_list').appendChild(li);

    taskInput.value = '';

    // Radio functionality
    pendingRadio.addEventListener('change', () => {
      span.classList.remove('completed');
      span.classList.add('pending');
    });

    completeRadio.addEventListener('change', () => {
      span.classList.remove('pending');
      span.classList.add('completed');
    });

    removeBtn.addEventListener('click', () => {
      li.remove();
    });

  };

});




