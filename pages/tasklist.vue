<template>
  <div>
    <div class="main">
      <div class="card">
        <div class="card-body p-8">
          <form class="d-flex justify-content-center align-items-center mb-4">
            <div class="form-outline flex-fill">
              <label class="form-label" for="form2">New task...</label>
            </div>

            <NuxtLink
              type="submit"
              @click.prevent="clearData()"
              class="btn btn-primary btn-sm"
              data-bs-target="#exampleModalToggle3"
              data-bs-toggle="modal"
              data-bs-dismiss="modal"
            >
              ADD
            </NuxtLink>
          </form>

          <!-- Tabs navs -->
          <ul class="nav nav-tabs mb-6 pb-2" id="ex1" role="tablist">
            <li class="nav-item" role="presentation">
              <h4
                class="nav-link active"
                id="ex1-tab-1"
                data-mdb-toggle="tab"
                href="#ex1-tabs-1"
                role="tab"
                aria-controls="ex1-tabs-1"
                aria-selected="true"
              >
                Sort By:
              </h4>
            </li>
            <li class="nav-item" role="presentation">
              <!-- <span class="badge bg-primary rounded-pill">4</span> -->
              <button
                class="nav-link"
                id="ex1-tab-2"
                data-mdb-toggle="tab"
                @click="sortAscending"
                role="tab"
                aria-controls="ex1-tabs-2"
                aria-selected="false"
              >
                Priority
              </button>
            </li>
            <li class="nav-item" role="presentation">
              
              <button
                class="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                @click="sortByDueDate"
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
              >
                Due Date <span class="badge bg-primary rounded-pill">{{ DueTaskCount() }}</span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              
              <button
              
                class="nav-link"
                id="ex1-tab-3"
                data-mdb-toggle="tab"
                @click="sortByCompleted()"
              
                role="tab"
                aria-controls="ex1-tabs-3"
                aria-selected="false"
                >Completed<span class="badge bg-secondary rounded-pill">{{ completedTaskCount() }}</span></button
              >
            </li>
          </ul>
          <!-- Tabs navs -->
          <!-- Tabs content -->
          <div>
            <div class="details1">
              <h3 v-if="tasks.length == 0">No Tasks available</h3>
          <!-- <p v-if="isTaskMissed(task)">Task missed! The due date has passed.</p> -->

              <!-- RENDERING TASKSs -->
              <ol
                v-else
                class="list-group-item d-flex align-items-center border-0 mb-2 rounded"
                data-bs-toggle="modal"
                data-bs-target="#"
                v-for="(task, index) in tasks"
                :key="'task' + index"
                @click="mountTask(task)"
              >
                <!-- <div class="form-check"> -->
                <!-- <input
                      class="form-check-input "
                      type="checkbox"
                      id="check1"
                      name="option1"
                      value="something"
                      
                    /> -->
                <!-- </div> -->
                <span>
                  <input 
                    v-model="task.completed"
                    @change="handleCheckboxChange($event,task)"
                    class="form-check-input"
                    type="checkbox"
                    :id="'check' + task.id"
                    :name="'option' + task.id"
                    :value="task.id"
                  />
                  <label :for="'check' + task.id" :class="{ 'completed-task': task.completed }">
                        <h5> {{ task.title }} : {{ task.description }}</h5>
                  </label>
                  
                  <NuxtLink :to="`/tasks/${task.id}`">
                    <h6 class="view">View Detail</h6>
          <!-- <p v-if="isTaskMissed()">Task missed! The due date has passed.</p> -->

                  </NuxtLink>
                </span>
              </ol>
            </div>

            <!-- modals -->
            <div
              class="modal fade"
              id="exampleModalToggle3"
              aria-hidden="true"
              aria-labelledby="exampleModalToggleLabel3"
              tabindex="-1"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <input
                      type="text"
                      class="form-control-plaintext"
                      id="staticEmail"
                      placeholder="Title"
                      v-model="taskForm.title"
                    />
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-body">
                    <div class="mb-3">
                      <label for="staticEmail" class="form-label">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="staticEmail"
                        placeholder="Title"
                        v-model="taskForm.title"
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleFormControlTextarea3"
                        class="form-label"
                        >Description</label
                      >
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea3"
                        rows="3"
                        v-model="taskForm.description"
                      ></textarea>
                    </div>
                    <form
                      v-on:submit.prevent=""
                      class="row gx-3 gy-2 align-items-center"
                    >
                      <div class="col-mb-3">
                        <label>Date</label>
                        <input
                          type="date"
                          class="form-control"
                          id="datepicker"
                          placeholder="10-12-23"
                          v-model="taskForm.duedate"
                        />
                      </div>
                      <div class="col-mb-3">
                        <label>Time</label>
                        <div class="input-group">
                          <div class="input-group-text">@</div>
                          <input
                            type="time"
                            class="form-control"
                            id="timepicker"
                            placeholder="10:33"
                            v-model="taskForm.details"
                          />
                        </div>
                      </div>
                      <div class="col-mb-3">
                        <label placeholder="Select....">Priority</label>
                        <select
                          class="form-select"
                          id="specificSelect"
                          v-model="taskForm.priority"
                        >
                          <option value="1">first</option>
                          <option value="2">second</option>
                          <option value="3">third</option>
                        </select>
                      </div>
                    </form>
                  </div>

                  <div class="modal-footer">
                    <button
                      @click="pushTask()"
                      type="submit"
                      class="btn btn-primary"
                      data-bs-target="#exampleModalToggle3"
                      data-bs-toggle="modal"
                      data-bs-dismiss="modal"
                    >
                      ADD TASK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Tabs content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// imports

import { reactive, ref, computed, onBeforeMount } from "vue";
import type { Task } from "~/types/task";

let id = 0;

const tasks = ref<Task[]>([]);

const selectedItem = ref<Task>({} as Task);
const d = new Date().toDateString();

const taskForm = reactive<Task>({
  id: 0,
  title: "",
  description: "",
  duedate: "",
  priority: 0,
  completed: false || true,
});

function clearData() {
  (taskForm.title = ""),
    (taskForm.description = ""),
    (taskForm.duedate = ""),
    (taskForm.priority = 0);
}

// lifecycle
onBeforeMount(() => {
  let storage = localStorage.getItem("tasks");
  if (!storage) {
    localStorage.setItem("tasks", JSON.stringify(tasks.value as any));
  } else {
    tasks.value = JSON.parse(storage || "[]");
  }



  // tasks.value.forEach((task) => {
  //   const storedStatus = localStorage.getItem(`task_${task.id}_status`);
  //   if (storedStatus !== null) {
  //     task.completed = storedStatus !== null ? JSON.parse(storedStatus) : false;
      
  //   }
  //   console.log("stored active", storedStatus);
  //   console.log(" active", task.completed);
    
  // });
});

// methods
const mountTask = (task: Task) => {
  selectedItem.value = { ...task };
};

console.log("tasks", tasks);

function updateTask() {
  tasks.value = tasks.value.map((task) => {
    if (task.id == selectedItem.value.id) {
      return selectedItem.value;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

// function updateCompleteStatus() {
//   tasks.value = tasks.value.map((task) => {
//     if (task.id == selectedItem.value.id) {
//       !selectedItem.value.completed;
//       return {
//         ...selectedItem.value,
//         completed: !selectedItem.value.completed,
//       };
//     }
//     return task;
//   });

//   selectedItem.value.completed = !selectedItem.value.completed;;
// }

function pushTask() {
  // fetch existing items'
  let storage = JSON.parse(localStorage.getItem("tasks") || "[]"); //['lady', 'phoebe', 'playng']

  if (!storage) {
    storage = [];
  }
  console.log(storage);
  // let array = [];
  storage.push({
    id: storage.length + 1,
    title: taskForm.title,
    description: taskForm.description,
    duedate: taskForm.duedate,
    priority: taskForm.priority,
  });

  console.log(storage);

  tasks.value = storage;

  localStorage.setItem("tasks", JSON.stringify(storage));

  // console.log(storage);
}
function sortAscending() {
  tasks.value.sort((a, b) => {
    return a.priority - b.priority;
  });
  console.log("tasks.value", tasks.value);
}

function sortByDueDate() {
  tasks.value.sort((a, b) => {
    return a.priority - b.priority;
  });
  tasks.value.reverse();
  console.log("tasks.value", tasks.value);
}

function sortByCompleted(){
  return tasks.value.sort((a, b) =>
   (a.completed === b.completed ? 0 : a.completed ? -1 : 1));
}

function handleCheckboxChange(event:any, task : Task) {
  console.log("event", event);
  console.log("tasks", tasks);
  task.completed = event?.target?._modelValue
  console.log("tasks", tasks);
  
  localStorage.setItem("tasks", JSON.stringify(tasks.value))
  
}

function completedTaskCount() {
      // Use a computed property to count the number of completed tasks
      return tasks.value.filter(task => task.completed).length;
    }


    function DueTaskCount() {
      const d = new Date().toDateString();
      if (taskForm.duedate == d){
        
        return tasks.value.filter(task => task.duedate).length;
      }
      // Use a computed property to count the number of completed tasks
      return tasks.value.filter(task => task.duedate).length;
    }

  //  function isTaskMissed(task:Task) {
  //     // Compare the task due date with the current date
  //     const taskDueDate = new Date(task.duedate);
  //     const currentDate = new Date();

  //     return taskDueDate < currentDate
  //   }

definePageMeta({
  middleware: "register-guard",
});
</script>

<style scoped>
.gradient-custom {
  background: radial-gradient(50% 123.47% at 50% 50%, #00ff94 0%, #720059 100%),
    linear-gradient(121.28deg, #669600 0%, #ff0000 100%),
    linear-gradient(360deg, #0029ff 0%, #8fff00 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff57 100%),
    radial-gradient(100% 148.07% at 0% 0%, #fff500 0%, #51d500 100%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal;
}
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgba(20, 145, 240, 0.748);
  overflow-x: hidden;
  padding-top: 20px;
}
h5{
  margin-left: 20px;
}
.completed-task {
  text-decoration: line-through;
  padding-left: 50px;
  margin-left: 20px;
}
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.card {
  border-radius: 15px;
  /* margin-left: 200px;
  margin-right: 100px; */
}
/* .card a:hover{
  color: bisque;
} */

.vh-100 {
  border-radius: 15px;
}
.main {
  width: 1138px;
  margin-left: 200px;
  margin-right: 100px;
  /* margin-right: 100px;  */
  font-size: 20px; /* Increased text to enable scrolling */
  padding-left: 100px;
  background-color: white;
  /* background: radial-gradient(50% 123.47% at 50% 50%, #00ff953d 0%, #72005959 100%),
    linear-gradient(121.28deg, #66960072 0%, #ff000063 100%),
    linear-gradient(360deg, #002aff5e 0%, #91ff004e 100%),
    radial-gradient(100% 164.72% at 100% 100%, #6100ff 0%, #00ff555a 1%),
    radial-gradient(100% 148.07% at 0% 0%, #fff70060 0%, #52d50058 1%);
  background-blend-mode: screen, color-dodge, overlay, difference, normal; */
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

.search-container {
  padding: 3.8rem;
}
.btn-group {
  padding: 1rem;
}

.form-check-input{
  padding-left: 20px;
  margin-left: 20px;
}

a.btn {
  /* padding: 3rem; */
  /* padding-left: 5rem;
    padding-bottom: 5rem; */
}

.list-group-item {
  /* padding: 3rem; */
  background-color: rgba(128, 128, 128, 0.131);
}
h1 {
  padding: 0.2rem;
  font-size: x-large;
  color: #665257;
}
.details1 {
  padding: 20px;
}
.title {
  font-size: 20px;
}
.dates {
  white-space: pre-wrap;
  color: #665257;
  text-align: justify;
  padding-top: 2rem;
}

h6.view {
  padding-left: 50rem;
  text-align-last: right;
}

ol.gradient-list {
  counter-reset: gradient-counter;
  list-style: none;
  margin: 1.75rem 0;
  padding-left: 1rem;
  background: #c8dee6;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(233, 195, 225, 0.917),
    0 0.5rem 1.125rem rgba(12, 7, 11, 0.957);
  counter-increment: gradient-counter;
  margin-top: 1rem;
  min-height: 3rem;
  padding: 1rem 1rem 1rem 3rem;
  position: relative;
}
</style>
