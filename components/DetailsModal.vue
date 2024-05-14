<template>
    <div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ selectedItem.title }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <span> Description: {{ selectedItem.description}}</span>
        <p> Due Date: {{selectedItem.duedate }}</p>
        <p> Priority: {{ selectedItem.priority }}</p>
      </div>
      <div class="modal-footer">
        <button @click="taskForm=selectedItem"  class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Edit</button>


        <button v-if="selectedItem.completed===false"  @click="completed" type="button" class="btn btn-primary">Not Completed</button>
        
        <button v-if="selectedItem.completed===true"  @click="completed" type="button" class="btn btn-secondary">Completed</button>

        <button @click="removeTask"  type="button" class="btn btn-primary"   data-bs-dismiss="modal" >Delete</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
</template>


<script lang="ts"  setup>
 function  editTask(){}

function pushTask(){
tasks.value.push({
 id:id+1,
       title:taskForm.title,
       description:taskForm.description,
       duedate:taskForm.duedate,
       priority:parseInt(taskForm.priority),
     completed:false});
}



function removeTask(){
 tasks.value = tasks.value.filter(task=>task.id !== selectedItem.value.id)
 console.log("Tasks",tasks)
 
}

function completed (){
 const selecteditemstate = selectedItem.value.completed;
selectedItem.value.completed = !selecteditemstate;
}



</script>

<style scoped>
.btn-group{
    padding: 5rem;
}


a.btn{
    /* padding: 3rem; */
    /* padding-left: 5rem;
    padding-bottom: 5rem; */
}
list-group-item{
    margin: 20rem;
    /* padding: 3rem; */
    color: rgb(6, 41, 52);
}
h1{
    padding: .2rem;
    font-size: x-large;
    color: aliceblue;
}
.details1{
  padding: 20px;
  
}
.title{
  font-size: 20px;

}
</style>