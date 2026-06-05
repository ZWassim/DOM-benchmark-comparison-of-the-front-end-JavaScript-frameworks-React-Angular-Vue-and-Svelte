import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Angular</h2>

  <input [(ngModel)]="name">
  <select [(ngModel)]="priority">
    <option>Low</option><option>Medium</option><option>High</option>
  </select>

  <button (click)="addTask()">Add</button>

  <br><br>

  <button (click)="generateTasks(100)">100</button>
  <button (click)="generateTasks(500)">500</button>
  <button (click)="generateTasks(1000)">1000</button>
  <button (click)="runBenchmark()">Run Benchmark</button>

  <div *ngFor="let t of tasks">
    {{t.name}} ({{t.priority}})
    <button (click)="updateTask(t)">Edit</button>
    <button (click)="deleteTask(t.id)">Delete</button>
  </div>
  `
})
export class AppComponent {
  tasks:any[] = [];
  name = "";
  priority = "Low";

  addTask() {
    this.tasks.push({ id: Date.now(), name: this.name, priority: this.priority });
  }

  deleteTask(id:number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  updateTask(task:any) {
    task.name = prompt("New name") || task.name;
  }

  generateTasks(count:number) {
    const start = performance.now();
    this.tasks = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      name: "Task " + i,
      priority: ["Low","Medium","High"][i % 3]
    }));
    console.log(`Render ${count}:`, performance.now() - start);
  }

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
