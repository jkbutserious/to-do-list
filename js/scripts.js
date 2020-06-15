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

ToDoList.prototype.markComplete = function (taskId) {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]){
      if(this.tasks[i].id === taskId) {
        this.tasks[i].complete = true;
      }
    }
  }
}

ToDoList.prototype.removeComplete = function () {
  for (let i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i]){
      if (this.tasks[i].complete === true) {
        delete this.tasks[i];
      }
    } 
  }
}

function Task(taskName, complete) {
  this.taskName = taskName;
  this.complete = complete;
}

let list1 = new ToDoList();



// User Interface Logic

$(document).ready(function() {
  $("#toDoList").submit(function(event) {
    event.preventDefault();
    const task = $("#task").val();
    let taskItem = new Task(task, false);
    list1.addTask(taskItem);
    $("#output").empty();

    for (let i = 0; i < list1.tasks.length; i++) {
      // let test = list1.tasks[i].taskName;
      if(list1.tasks[i]) {
        $("#output").append("<li>" + list1.tasks[i].taskName + " ID: " + list1.tasks[i].id + "</li>");
      }
    }
  });
  $("#completeTask").submit(function(event) {
    event.preventDefault();
    list1.markComplete(parseInt($("#completed-task").val()));
  });
  $("#removeTasks").click(function() {
    list1.removeComplete();
    $("#output").empty();

    for (let i = 0; i < list1.tasks.length; i++) {
      // let test = list1.tasks[i].taskName;
      if(list1.tasks[i]) {
        $("#output").append("<li>" + list1.tasks[i].taskName + " ID: " + list1.tasks[i].id + "</li>");
      }
    }
  });

});