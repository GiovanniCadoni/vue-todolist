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
            if(this.newTask.text.trim() != "")
            {
                this.todoList.push({
                    text: this.newTask.text.trim(),
                    done: this.newTask.done,
                });
                //this.todoList.unshift(this.newTask);
                this.newTask.text = "";
            }
        },
        deleteTask: function(clickedIndex) {
            console.log("Elimina");
            this.todoList.splice(clickedIndex, 1);
        },
    },
}).mount("#app");