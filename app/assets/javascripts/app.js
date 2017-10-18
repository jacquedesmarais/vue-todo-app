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

      deleteTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1);
      }
    },
    computed: {

    }
  });
});