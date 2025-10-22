document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); // prevents page refresh

    const li = document.createElement('li');
    let task_text = document.querySelector('#task').value;

    let new_task_html = 
      `
      <span>${task_text}</span> 
      <button class="remove">Remove</button>
    `;

    li.innerHTML = new_task_html;
    document.querySelector("#tasks_list").append(li);

    document.querySelector("#task").value = ''; // clear input

    return false; 

});

