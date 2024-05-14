<template>
      <div>

        <div class="sidenav">
          <h1>TO-DO LIST</h1>

         

  <a href="#about">Today</a>
  <a href="#services">Tommorow</a>
  <a href="#clients">Weekly Report </a>
  <a href="#contact">Check out</a>
</div>

<div class="main">

  <div class="row">
    <div class="col-sm-4 p-3 bg-white text-white">
      <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Sort Task By
  </button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><button class="dropdown-item" type="button"><a href="#priority">Priority</a></button></li>
    <li><button class="dropdown-item" type="button"><a href="#due">Due Date</a></button></li>
    <li><button class="dropdown-item" type="button"><a href="#creation"> Creation Date</a></button></li>
  </ul>
</div>
    </div>
    <div class="col-sm-8 p-3 bg-white text-white">
      <div class="search-container">
    <form >
      <input type="text" placeholder="Search.." name="search">
      <button type="submit">Search</button>
    </form>
  </div>
    </div>
  </div>
 
 

     

     <div> 
           <div class="details1">
            <div  @click="selectedItem=task" class="list-group-item list-group-item-action list-group-item-secondary " data-bs-toggle="modal" data-bs-target="#exampleModal" v-for="(task,index) in tasks" :key="'task'+index"><ul>{{ task.title }} <br> {{ task.description }}</ul>
            </div>     
        
       </div>
     </div>

     
         <NuxtLink @click.prevent="taskForm" class="btn btn-primary btn-lg" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal"> ADD </NuxtLink>

        
    
    

    <!-- <div>
       <button @click="removeTask"   > Delete</button>
       <p  id="demo" ></p>    
    </div> -->

     <!-- Modals -->
  <!-- Modal for details -->
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





      <!-- Modal for addButton -->
  <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <input type="text" class="form-control-plaintext" id="staticEmail" placeholder="Title" v-model="taskForm.title">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
  <label for="exampleFormControlTextarea3" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea3" rows="3" v-model="taskForm.description"></textarea>
       </div>
     <form v-on:submit.prevent="addItem"    class="row gx-3 gy-2 align-items-center">
  <div class="col-sm-3">
    <label>Date</label>
    <input type="text" class="form-control" id="specificInputName" placeholder="10-12-23"  v-model="taskForm.duedate">
  </div>
  <div class="col-sm-3">
    <label>Time</label>
    <div class="input-group">
      <div class="input-group-text">@</div>
      <input type="text" class="form-control" id="time" placeholder="10:33"  v-model="taskForm.details">
    </div>
  </div>
  <div class="col-sm-3">
    <label>Priority</label>
    <select  class="form-select" id="specificSelect" v-model="taskForm.priority">
      <option selected>Select...</option>
      <option value=1>first</option>
      <option value=2>second</option>
      <option value=3>third</option>
    </select>
  </div>
  <div class="col-auto">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="autoSizingCheck3" v-model="taskForm.details">
      <label class="form-check-label" for="autoSizingCheck3">
        Remind me
      </label>
    </div>
  </div>
</form>
      </div>
      
      <div class="modal-footer">
        <button  @click="pushTask" type="submit"  class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">ADD TASK</button>
      </div>
    </div>
  </div>
</div>






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

<!-- <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> -->
    </div>
</template>


<script lang="ts" setup>
import{reactive,ref,computed}from 'vue'
type tasksType = {id:number,title:string,description:string,duedate:string,priority:number |null,completed:boolean}[]
type singleTaskType = {id:number,title:string,description:string,duedate:string,priority:string}
let id = 3;

      const selectedItem  =ref({})
      const results=ref({
      // id:selectedItem.value.id,
      // title:selectedItem.value.title,
      // description:selectedItem.value.description,
      // duedate:selectedItem.value.duedate,
      // priority:selectedItem.value.priority,
      // completed:selectedItem.value.completed
      
     })

     
      const taskForm=reactive({
      title:"",
      description:"",
      duedate:"",
      priority:null,
      completed:false
      
     })

     const EdittaskForm=ref({
      title:selectedItem.value.title,
      description:"",
      duedate:"",
      priority:null,
      completed:false
      
     })
    
console.log("results==>",results);

     console.log("Reactive var====>",taskForm);
     
     console.log("selected item",selectedItem);
     
     
     console.log("results===>",results);
     
    //  const task=computed({
    //   get(){
    //     return tasks.value
    //   },
    //   set(newTask){
    //     tasks.values=newTask.apply('')

    //   }
    //  })
      let tasks=ref<tasksType>([
          {
            id:1,
            title:'Meeting',
          description:'Have an online meeting',
          duedate:'Moday',
          priority:1,
        completed:false},

          {
            id:2,
            title:'class',
          description:'Have an online class',
          duedate:'sunday',
          priority:2,
        completed:false
      },

          {id:3,
            
            title:'home',
          description:'go home',
          duedate:'sunday',
          priority:3,
          completed:false,
        }
     ])

     console.log("Tasks===>",tasks);
     
   function  editTask(){
//       if(taskForm !== '')
//       task.push(taskForm);
// /// what happends then the button is clicked to add a task. if the function in the newdetials is nor empty,push it to the detail array
    
//       taskForm='';
      
}

// function addTask(){
//      this.tasks.push({
      
//       title: this.newTask.title,
//       description: this.newTask.description,
//       dueDate: this.newTask.dueDate,
//       priority:this.newTask.priority
//      });

//      this.newTask.title='';
//      this.newTask.description='';
//      this.newTask.dueDate='';
//      .newTask.priority=''

     
// }

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

    // tasks.value= [
    //   {id:3,
            
    //         title:'home',
    //       description:'go home',
    //       duedate:'sunday',
    //       priority:'third',}
    //     ]

    tasks.value = tasks.value.filter(task=>task.id !== selectedItem.value.id)
    console.log("Tasks",tasks)
    
  //  console.log("id",selectedItem.value.id);
    
    //  return tasks.filter(task=>task.id !== 4)
     console.log("Tasks",tasks);
     

   }

   function completed (){
    const selecteditemstate = selectedItem.value.completed;
  selectedItem.value.completed = !selecteditemstate;
   }

  //  function sortPriority(){
  //   let n=selectedPriority;

  //       if(selectedItem === n)
  //       return n;
  //   }else{
  //   return null;
  //  }

  //  function sort

  
</script>

<style scoped>
.sidenav {
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:rgba(20, 145, 240, 0.748);
  overflow-x: hidden;
  padding-top: 20px;
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

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.search-container{
  padding: 3.8rem;
}
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
