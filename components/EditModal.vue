<template>
   <div>
        <!-- Modal for edit -->
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="Title" v-model="selectedItem.title">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="selectedItem.description"></textarea>
       </div>
     <form class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label>Date</label>
    <input type="text" class="form-control" id="specificSizeInputName" placeholder="10-12-23"  v-model="selectedItem.duedate">
  </div>
  <div class="col-sm-3">
    <label>Time</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="10:33"  v-model="taskForm.details">
    </div>
  </div>
  <div class="col-sm-3">
    <label>Priority</label>
    <select class="form-select" id="specificSizeSelect" value="selectedItem.priority">
      <option selected>First</option>
      <option value=1>first</option>
      <option value=2>second</option>
      <option value=3>third</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck2" v-model="taskForm.details">
      <label class="form-check-label" for="autoSizingCheck2">
        Remind me
      </label>
    </div>
  </div>
</form>
      </div>
      
      <div class="modal-footer">
        <button  @click="editTask"  class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Edit</button>
      </div>
    </div>
  </div>
</div>
</div>
    
</template>


<script lang="ts" setup>
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