new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [],
        completedTasks: [],
    },
    methods: {
        addTask() {
            const date = new Date().toLocaleString();
            this.tasks.push({ id: Date.now(), text: this.newTask, date });
            this.newTask = '';
        },
        completeTask(taskId) {
            const completedTask = this.tasks.find(task => task.id === taskId);
            this.completedTasks.push({ ...completedTask, date: new Date().toLocaleString() });
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
    },
});
