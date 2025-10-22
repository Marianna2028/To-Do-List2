document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault();

    const task_text = document.querySelector('#task').value.trim();
    if (task_text === "") return;

    const li = document.createElement('li');

    // Create a span to hold the task text
    const span = document.createElement('span');
    span.textContent = task_text;
    li.appendChild(span);

    // --- Create Complete button ---
    const completeBtn = document.createElement('button');
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', function() {
      span.classList.add('completed');
      span.classList.remove('pending'); // remove pending if previously set
    });
    li.appendChild(completeBtn);

    // --- Create Pending button ---
    const pendingBtn = document.createElement('button');
    pendingBtn.textContent = "Pending";
    pendingBtn.addEventListener('click', function() {
      span.classList.add('pending');
      span.classList.remove('completed'); // remove completed if previously set
    });
    li.appendChild(pendingBtn);

    // --- Remove button ---
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(removeBtn);

    // Add the list item to the task list
    document.querySelector("#tasks_list").appendChild(li);

    // Clear input
    document.querySelector('#task').value = "";
  };
});





