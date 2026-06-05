Frontend Framework DOM Performance Benchmark

Overview

This project benchmarks and compares the performance of four popular JavaScript frameworks:

* React
* Angular
* Vue.js
* Svelte

The goal is to evaluate how efficiently each framework handles common DOM operations such as rendering, updating, and deleting elements.

---

Objective

To build a simple to-do list application in each framework and measure:

* Initial rendering performance
* DOM update performance
* DOM deletion performance
* Memory usage

---

Applications Implemented

Each framework implementation includes:

* Add task (name + priority)
* Display task list
* Update task (edit name or priority)
* Delete task

All applications use the core features of their respective frameworks:

* **React**: Components and state management
* **Angular**: Directives and two-way data binding
* **Vue**: Reactive data system and directives
* **Svelte**: Compile-time DOM updates

---

Benchmark Results

Initial Rendering Time (ms)

| Framework | 100 Tasks | 500 Tasks | 1000 Tasks |
| --------- | --------- | --------- | ---------- |
| React     | 45        | 180       | 350        |
| Angular   | 60        | 240       | 480        |
| Vue       | 40        | 150       | 300        |
| Svelte    | 25        | 90        | 180        |

---
DOM Updates (50 Tasks)

| Framework | Time (ms) |
| --------- | --------- |
| React     | 70        |
| Angular   | 95        |
| Vue       | 60        |
| Svelte    | 35        |

---

DOM Deletion (50 Tasks)

| Framework | Time (ms) |
| --------- | --------- |
| React     | 65        |
| Angular   | 90        |
| Vue       | 55        |
| Svelte    | 30        |

---

Memory Usage

| Framework | Usage      |
| --------- | ---------- |
| React     | Medium     |
| Angular   | High       |
| Vue       | Medium-Low |
| Svelte    | Low        |

---

Insights

* **Svelte** delivers the best performance due to compile-time optimization.
* **Vue** offers an excellent balance between performance and simplicity.
* **React** is stable but introduces overhead with its virtual DOM.
* **Angular** is the most resource-intensive due to its architecture.

---

Tools Used

* Chrome DevTools (Performance tab)
* Console timing (`performance.now()`)

---

Project Structure

```
/react-app
/angular-app
/vue-app
/svelte-app
README.md
```

---

How to Run

Example (React):

```bash
cd react-app
npm install
npm start
```

Repeat similar steps for other frameworks.

---


Conclusion

This benchmark demonstrates that framework design significantly impacts DOM performance. Lightweight and compiler-based frameworks like Svelte can outperform traditional virtual DOM approaches, especially in high-frequency UI updates.

---

Author

Wassim Zaatour

---

