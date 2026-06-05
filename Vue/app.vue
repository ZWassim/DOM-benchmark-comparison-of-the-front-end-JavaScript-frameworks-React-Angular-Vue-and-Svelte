<template>
  <div>
    <h2>Vue</h2>

    <input v-model="name" />
    <select v-model="priority">
      <option>Low</option><option>Medium</option><option>High</option>
    </select>

    <button @click="addTask">Add</button>

    <br><br>

    <button @click="generateTasks(100)">100</button>
    <button @click="generateTasks(500)">500</button>
    <button @click="generateTasks(1000)">1000</button>

    <button @click="runBenchmark">Run Benchmark</button>

    <div v-for="t in tasks" :key="t.id">
      {{t.name}} ({{t.priority}})
      <button @click="updateTask(t)">Edit</button>
      <button @click="deleteTask(t.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tasks: [], name: "", priority: "Low" };
  },
  methods: {
    addTask() {
      this.tasks.push({ id: Date.now(), name: this.name, priority: this.priority });
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    },
    updateTask(task) {
      task.name = prompt("New name") || task.name;
    },
    generateTasks(count) {
      const start = performance.now();
      this.tasks = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        name: "Task " + i,
        priority: ["Low","Medium","High"][i % 3]
      }));
      console.log(`Render ${count}:`, performance.now() - start);
    },
    runBenchmark() {
      console.log("---- START ----");
      this.generateTasks(100);
      this.generateTasks(500);
      this.generateTasks(1000);

      let start = performance.now();
      this.tasks.slice(0,50).forEach(t => t.name += " updated");
      console.log("Update 50:", performance.now() - start);

      start = performance.now();
      this.tasks = this.tasks.slice(50);
      console.log("Delete 50:", performance.now() - start);
    }
  }
};
</script>
