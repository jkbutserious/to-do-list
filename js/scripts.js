// Business Logic

function ToDoList() {
  this.tasks = [];
  this.currentID = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function() {
  this.currentID += 1;
  return this.currentID;
}

function Task(taskName, complete) {
  this.taskName = taskName;
  this.complete = complete;
}

let list1 = new ToDoList();

// User Interface Logic

$(document).ready(function() {
  $("#toDoList").submit(function() {
    event.preventDefault();
    const task = $("#task").val();
    let taskItem = new Task(task, false);
    list1.addTask(taskItem);

    
  })
})