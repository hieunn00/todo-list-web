
<template>
  <div id="app">
    <h1>Todo List</h1>
    <div>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
      <button @click="addTask" :disabled="!newTask.trim()">Add</button>
    </div>

    
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" v-model="task.completed" @change="updateTask(task)" />
        {{ task.task }}
        <button @click="deleteTask(task.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: [],
      baseUrl: 'http://localhost:3000'
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await fetch(`${this.baseUrl}/api/todos`);
        const data = await response.json();
        this.tasks = data;
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async addTask() {
      try {
        const response = await fetch(`${this.baseUrl}/api/todos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ task: this.newTask }),
        });
        const data = await response.json();
        this.tasks.push(data);
        this.newTask = '';
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
    async updateTask(task) {
      try {
        await fetch(`${this.baseUrl}/api/todos/${task.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task),
        });
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },
    async deleteTask(id) {
      try {
        await fetch(`${this.baseUrl}/api/todos/${id}`, {
          method: 'DELETE',
        });
        this.tasks = this.tasks.filter(task => task.id !== id);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
  },
};

</script>

<style>

</style>

