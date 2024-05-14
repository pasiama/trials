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
                @click.prevent="taskForm"
                class="btn btn-primary btn-sm"
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                ADD
            </NuxtLink>
            </form>
  
            
  
            <!-- Tabs content -->
            <div>
              <div class="details1">
                <h3 v-if="tasks.length == 0">No Tasks available</h3>
                
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
                  <span>
                    <input
                  
                      class="form-check-input"
                      type="checkbox"
                      id="check1"
                      name="option1"
                      checked
                      value="something"
                    />
                    {{ task.title }} : {{ task.description }}
                    <NuxtLink  :to="`/tasks/${task.id}`">
                      <h6 class="view">
                        View Detail
                      </h6>
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
                  <label for="exampleFormControlTextarea3" class="form-label"
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
                  v-on:submit.prevent="addItem"
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
                  <div class="col-auto">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="autoSizingCheck3"
                        v-model="taskForm.details"
                      />
                      <label class="form-check-label" for="autoSizingCheck3">
                        Remind me
                      </label>
                    </div>
                  </div>
                </form>
              </div>
  
              <div class="modal-footer">
                <button
                  @click="pushTask"
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
    completed: false,
  });
  
  // lifecycle
  onBeforeMount(() => {
    let storage = localStorage.getItem("tasks");
    if (!storage && d !== storage) {
      localStorage.setItem("tasks", JSON.stringify(tasks.value as any));
    } else {
      tasks.value = JSON.parse(storage || "[]");
    }
  });
  
  // methods
  const mountTask = (task: Task) => {
    
    const currentDate = new Date().toDateString();
    console.log("currentDate", currentDate);

    const taskDueDateFormatted = new Date(task.duedate).toDateString();
  
  tasks.value = tasks.value.filter((t) => 
   {const match = taskDueDateFormatted === currentDate;

    console.log("task due date",taskDueDateFormatted);
    console.log("match", currentDate);
    
    
    return match;

}
  
  
  
  );

  
  
  };
  function pushTask() {
    // fetch existing items'
    let storage = JSON.parse(localStorage.getItem("tasks") || "[]"); //['lady', 'phoebe', 'playng']
    storage.push({
      id: storage.length + 1,
      title: taskForm.title,
      description: taskForm.description,
      duedate: taskForm.duedate,
      priority: taskForm.priority,
      completed: false,
    });
    tasks.value = storage;
  
    localStorage.setItem("tasks", JSON.stringify(storage));
  }
 function sortByDueDate() {
    tasks.value.sort((a, b) => {
      return a.priority - b.priority;
    });
    tasks.value.reverse();
    
  }
  </script>
  
  <style scoped>
 
  
  .card{
    border-radius: 15px;
   
  }
  .main {
    width: 1138px;
    margin-left: 200px;
    margin-right: 100px;
  
    font-size: 20px; 
    padding-left:100px;
    background-color: white;
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
  h6.view {
    padding-left: 50rem;
    text-align-last: right;
  }
  
  </style>
  