import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Low");

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), name, priority }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTask = (id) => {
    const newName = prompt("New name:");
    setTasks(tasks.map(t => t.id === id ? { ...t, name: newName } : t));
  };

  const generateTasks = (count) => {
    const start = performance.now();
    const newTasks = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      name: "Task " + i,
      priority: ["Low","Medium","High"][i % 3]
    }));
    setTasks(newTasks);
    console.log(`Render ${count}:`, performance.now() - start);
  };

  const runBenchmark = () => {
    console.log("---- START ----");
    generateTasks(100);
    generateTasks(500);
    generateTasks(1000);

    let start = performance.now();
    setTasks(prev => prev.map((t,i) => i < 50 ? {...t, name: t.name + " updated"} : t));
    console.log("Update 50:", performance.now() - start);

    start = performance.now();
    setTasks(prev => prev.slice(50));
    console.log("Delete 50:", performance.now() - start);
    console.log("---- END ----");
  };

  return (
    <div>
      <h2>React</h2>

      <input onChange={e => setName(e.target.value)} />
      <select onChange={e => setPriority(e.target.value)}>
        <option>Low</option><option>Medium</option><option>High</option>
      </select>

      <button onClick={addTask}>Add</button>

      <br/><br/>

      <button onClick={() => generateTasks(100)}>100</button>
      <button onClick={() => generateTasks(500)}>500</button>
      <button onClick={() => generateTasks(1000)}>1000</button>

      <button onClick={runBenchmark}>Run Benchmark</button>

      {tasks.map(t => (
        <div key={t.id}>
          {t.name} ({t.priority})
          <button onClick={() => updateTask(t.id)}>Edit</button>
          <button onClick={() => deleteTask(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
