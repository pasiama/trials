<template>
    <div>
        <div> 
           <div class="details1">
            <div  @click="selectedItem=task" class="list-group-item list-group-item-action list-group-item-secondary " data-bs-toggle="modal" data-bs-target="#exampleModal" v-for="(task,index) in tasks" :key="'task'+index"><ul>{{ task.title }} <br> {{ task.description }} </ul>
            </div>     
        
       </div>
     </div>

     
         <NuxtLink @click.prevent="taskForm" class="btn btn-primary btn-lg" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal"> ADD </NuxtLink>

  
    </div>
</template>


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