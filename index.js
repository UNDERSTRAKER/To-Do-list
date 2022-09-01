const tasks = [
    { text: "Trapear el apto", done: false },
    { text: "Pasar la materia de Web", done: false },
    { text: "Recoger la mota", done: false },
    { text: "Comprar comida", done: false }
  ];
  
  const allTasksHtml = document.getElementById("all");
  const pendingHtml = document.getElementById("pending");
  const completedHtml = document.getElementById("completed");
  
  function createTasks() {
  
    allTasksHtml.innerHTML = "";
    pendingHtml.innerHTML = "";
    completedHtml.innerHTML = "";
  
    tasks.forEach((task) => {
      const elem = document.createElement("li");
      elem.textContent = task.text;
      elem.className = task.done ? "checked" : "unchecked";
      elem.addEventListener("click", () => toggleCompletedTask(task));
  
      const cloneElem = elem.cloneNode(true);
      cloneElem.addEventListener("click", () => toggleCompletedTask(task));
      
      allTasksHtml.append(elem);
      
      if (task.done) {
        completedHtml.append(cloneElem);
      } else {
        pendingHtml.append(cloneElem);
      }
    });
  }
  
  createTasks();
  function toggleCompletedTask(task) {
    task.done = !task.done;
    createTasks();
  }