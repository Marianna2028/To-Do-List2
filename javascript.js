
document.addEventListener('DOMContentLoaded', function() {

  document.querySelector("#new-task").onsubmit = function() {
    event.preventDefault();

    
    const li = document.createElement('li');
    li.innerHTML = document.querySelector('#task').value;

//function for removing tasks
    
        let task_text = docuement.querySelector('#task').value;
    let new_task_html = '
      <span> ${task_text} </span> 
      <button class = "remove"> Completed </button>
    ';
      
      li.innerHTML = new_task_html
        li.innerHTML = document.querySelector('#task').value; 
  
    
 document.querySelector("#tasks_list").append(li);
    document.querySelector("#task").value = '';

    return false;
  
    
}
});
