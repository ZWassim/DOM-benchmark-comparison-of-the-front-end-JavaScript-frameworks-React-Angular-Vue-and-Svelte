<script>
  let tasks = [];
  let name = "";
  let priority = "Low";

  function addTask() {
    tasks = [...tasks, { id: Date.now(), name, priority }];
  }

  function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
  }

  function updateTask(task) {
    task.name = prompt("New name") || task.name;
  }

  function generateTasks(count) {
    const start = performance.now();
    tasks = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      name: "Task " + i,
      priority: ["Low","Medium","High"][i % 3]
    }));
    console.log(`Render ${count}:`, performance.now() - start);
  }

  function runBenchmark() {
    console.log("---- START ----");
    generateTasks(100);
    generateTasks(500);
    generateTasks(1000);

    let start = performance.now();
    tasks.slice(0,50).forEach(t => t.name += " updated");
    console.log("Update 50:", performance.now() - start);

    start = performance.now();
    tasks = tasks.slice(50);
    console.log("Delete 50:", performance.now() - start);
  }
</script>

<h2>Svelte</h2>

<input bind:value={name} />
<select bind:value={priority}>
  <option>Low</option><option>Medium</option><option>High</option>
</select>

<button on:click={addTask}>Add</button>

<br><br>

<button on:click={() => generateTasks(100)}>100</button>
<button on:click={() => generateTasks(500)}>500</button>
<button on:click={() => generateTasks(1000)}>1000</button>

<button on:click={runBenchmark}>Run Benchmark</button>

{#each tasks as t (t.id)}
  <div>
    {t.name} ({t.priority})
    <button on:click={() => updateTask(t)}>Edit</button>
    <button on:click={() => deleteTask(t.id)}>Delete</button>
  </div>
{/each}
