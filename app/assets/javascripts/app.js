document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [],
      newTaskText: "",
      newTaskPriority: ""
    },
    mounted: function() {

    },
    methods: {
      addTask: function() {
        if (this.newTaskText && this.newTaskPriority) {
          var newTask = {
                        text: this.newTaskText,
                        priority: this.newTaskPriority,
                        completed: false
          };
          this.tasks.push(newTask);
          this.newTaskText = "";
          this.newTaskPriority = "";
        }
      },

      toggleCompleted: function(inputTask) {
        inputTask.completed = !inputTask.completed;
      },

      deleteTask: function() {
        let incompleteTask = [];
        for(let task of this.tasks) {
          if (!task.completed) {
            incompleteTask.push(task);
          }
        }
        this.tasks = incompleteTask;
      },

      numberOfIncompleteTasks: function() {
        var count = 0;
        for (let task of this.tasks) {
          if (!task.completed) {
            count++;
          }
        }
        return count;
      }
    },
    computed: {

    }
  });
});