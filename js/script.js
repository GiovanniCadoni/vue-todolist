const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: {
                text: "",
                done: false,
            },
            todoList: [],
        };
    },
    methods: {
        addTask: function() {
            console.log("copiato");
            this.todoList.push({
                text: this.newTask.text,
                done: this.newTask.done,
            });
            //this.todoList.push({...this.newTask})
            this.newTask.text = "";
        },
        deleteTask: function(clickedIndex) {
            console.log("Elimina");
            this.todoList.splice(clickedIndex, 1);
        },
    },
}).mount("#app");