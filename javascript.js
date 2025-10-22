document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault();

    const task_text = document.querySelector('#task').value.trim();
    if (task_text === "") return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task_text;
    li.appendChild(span);

    const prioritySelect = document.createElement('select');
    prioritySelect.innerHTML = `
      <option value="">Priority</option>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    `;
    li.appendChild(prioritySelect);

    const completeBtn = document.createElement('button');
    completeBtn.type = "button"; // ← important
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener('click', function() {
      span.classList.add('completed');
      span.classList.remove('pending');
    });
    li.appendChild(completeBtn);

    const pendingBtn = document.createElement('button');
    pendingBtn.type = "button"; // ← important
    pendingBtn.textContent = "Pending";
    pendingBtn.addEventListener('click', function() {
      span.classList.add('pending');
      span.classList.remove('completed');
    });
    li.appendChild(pendingBtn);

    const removeBtn = document.createElement('button');
    removeBtn.type = "button"; // ← important
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', function() {
      li.remove();
    });
    li.appendChild(removeBtn);

    document.querySelector("#tasks_list").appendChild(li);
    document.querySelector('#task').value = "";
  };
});



