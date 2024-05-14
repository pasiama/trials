<!-- <template>
    <div class="task_header">
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">To Do List</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tasklist">Task Lists</a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link" href="/taskdetail">Task Details</a>
        </li> -->
        <!-- <li class="nav-item">
          <a class="nav-link" href="/userprofile">Profile</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <slot></slot>


    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

</style> -->
<template>
  <div class="main">
    <div class="header">
      <h1> MY DAY </h1>
      <div class="dates">
                   <h2>TODAY: {{ d }}</h2>
                   </div>
</div>
  </div>
</template>


<script  lang="ts"   setup>
  
  const d = new Date().toDateString();
</script>



<style scoped>
.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
.header {
  background-color: #ffffff;
  padding: 30px;
  text-align: start;
  font-size: 35px;
  width: 70%;
  margin: auto;
}
h2{
  color: rgb(64, 63, 63);
  font-size:35px;
}
</style>