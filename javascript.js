document.addEventListener('DOMContentLoaded', function() {
  

  document.querySelector("#new-task").onsubmit = function(event) {
    event.preventDefault(); // prevents page refresh

    //creating a task 
    const li = document.createElement('li');
    const task_text = document.querySelector('#task').value.trim();
    
    // don’t add empty tasks
    if (task_text === "") return; 

    // Create the task item
    let new_task_html = `
      <span>${task_text}</span> 
      <button class="complete">Mark Complete</button>
      <button class="remove">Remove</button>
    `;

    //making the task print/adding it as a list 
    li.innerHTML = new_task_html;
    document.querySelector("#tasks_list").append(li);

    document.querySelector("#task").value = '';

    // Remove button functionality
    li.querySelector('.remove').addEventListener('click', function() {
      li.remove(); 
    });

    // Mark as complete button functionality
    li.querySelector('.complete').addEventListener('click', function() {
      li.querySelector('span').classList.toggle('completed');
    });
  };

});


