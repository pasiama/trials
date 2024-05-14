<template>
  <div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ data?.title }}
          </h5>
        </div>
        <div class="modal-body">
          <span> Description: {{ data?.description }}</span>
          <p>Due Date: {{ data?.duedate }}</p>
          <p>Priority: {{ data?.priority }}</p>
        </div>
        <div class="modal-footer">
          <button
            @click="mountTask()"
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Edit
          </button>

          <button
            v-if="data?.completed === false"
            @click="updateCompleteStatus"
            type="button"
            class="btn btn-primary"
          >
            Not Completed
          </button>

          <button
            v-if="data?.completed === true"
            @click="updateCompleteStatus"
            type="button"
            class="btn btn-secondary"
          >
            Completed
          </button>

          <button
            @click="removeTask()"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Delete
          </button>

          <NuxtLink
            @click.prevent="Navigate"
            to="/tasklist"
            class="btn btn-primary btn-md"
            >Back</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>

  <!-- edit modal -->

  <div
    class="modal fade"
    id="exampleModalToggle2"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel2"
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
            v-model="selectedItem.title"
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
              v-model="selectedItem.title"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Description</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="selectedItem.description"
            ></textarea>
          </div>
          <form class="row gx-3 gy-2 align-items-center">
            <div class="col-md-3">
              <label>Date</label>
              <input
                type="date"
                class="form-control"
                id="datepicker"
                placeholder="10-12-23"
                v-model="selectedItem.duedate"
              />
            </div>
            <div class="col-mb-3">
              <label>Priority</label>
              <select
                class="form-select"
                id="specificSizeSelect"
                v-model="selectedItem.priority"
              >
                <option selected>First</option>
                <option value="1">first</option>
                <option value="2">second</option>
                <option value="3">third</option>
              </select>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            @click="updateTask()"
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Update Task
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- <p>
      {{ data?.title }}
      {{ data?.description }}
      {{ data?.duedate }}
      {{ data?.priority }}
    </p> -->
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { reactive, ref, computed, onBeforeMount } from "vue";
import type { Task } from "~/types/task";
const router = useRouter()
const selectedItem = ref<Task>({} as Task);
const d = new Date().toDateString();

const tasks = ref<Task[]>([]);

const taskForm = reactive<Task>({
  id: 0,
  title: "",
  description: "",
  duedate: "",
  priority: 0,
  completed: false,
});

const mountTask = () => {
  selectedItem.value = { ...data.value };
  
  
};

function updateTask() {
  let storage = JSON.parse(localStorage.getItem("tasks") || "[]");
  storage = storage.map((task: Task) => {
    if (task.id == selectedItem.value.id) {
      data.value = selectedItem.value;
      return selectedItem.value;
    }
    return task;
  });
  localStorage.setItem("tasks", JSON.stringify(storage));
}

function updateCompleteStatus() {
  tasks.value = tasks.value.map((task) => {
    if (task.id == selectedItem.value.id) {
      !selectedItem.value.completed;
      return {
        ...selectedItem.value,
        completed: !selectedItem.value.completed,
      };
    }
    return task;
  });

  selectedItem.value.completed = !selectedItem.value.completed;
}
const { id } = useRoute().params;
const data = ref<Task>();
onMounted(async () => {
  let storage = JSON.parse(localStorage.getItem("tasks") || ([] as any));
  data.value = await storage.find((task: any) => task.id == id);

  console.log("data**********", id);
});

function removeTask() {
  let storage = JSON.parse(localStorage.getItem("tasks") || "[]");
  console.log("storage old", storage[0].id);
  // let tempStorage = [...storage];
  console.log("selected ",data.value.id);
  
  let storageUpdate = storage.filter(
    (task: Task) => task.id !== data.value.id
  );

  console.log("delete", storageUpdate);
  // localStorage.removeItem("tasks");
  localStorage.setItem("tasks", JSON.stringify(storageUpdate));
  // console.log("storage new", storage);
  router.push('/tasklist');
//   // let storage = JSON.parse(localStorage.getItem("tasks" )|| "[]")
//   // let tempStorage = [...storage]; 
//   // let filtered = tempStorage.filter((task:any) => task.id !== selectedItem.value.id)
//   // localStorage.setItem("tasks", JSON.stringify(filtered))
//   // return filtered
 
}

</script>

<style></style>
