document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); // prevents page refresh

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

    document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = '';

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



