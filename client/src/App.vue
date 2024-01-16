<template>
  <div id="app" class="w-full h-full p-4 bg-gray-100">
    <h1 class="text-3xl text-green-700 mb-4 font-bold text-center">Todo List</h1>
    <div class="flex mb-4">
      <div class="flex-grow mx-auto w-1/2">
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Add a new task"
          class="w-full border border-gray-300 px-3 py-2 rounded-l focus:outline-none text-center"
        />
      </div>
      <button
        @click="addTask"
        :disabled="!newTask.trim()"
        class="bg-green-600 text-white px-4 py-2 rounded-r"
      >
        Add
      </button>
    </div>

    <ul>
      <li v-for="task in tasks" :key="task.id" class="flex items-center justify-between bg-white p-3 mb-2 shadow-md rounded mx-auto w-1/2">
        <div class="flex items-center space-x-4">
          <input
            type="checkbox"
            v-model="task.completed"
            @change="updateTask(task)"
            class="form-checkbox h-5 w-5 accent-green-300 focus:accent-green-500 transition duration-150 ease-in-out text"
          />
          <input type="text" v-model="task.task" @change="updateTask(task)" class="border-none focus:outline-none w-full" />
          
        </div>
        <button @click="deleteTask(task.id)" class="text-red-600">Delete</button>
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

