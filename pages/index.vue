<template>
   <div>
    <div class="card">
  <div class="card-body">
    <h1 class="card-title">WE PLAN TO-DO APP</h1>
    <h5 class="card-subtitle mb-2 text-muted">Manage your task with ease</h5>
    <p class="card-text">Click to continue. If new to the app, sign up</p>
    
    <a onclick="increment()"><NuxtLink to="/signup">Proceed to Register</NuxtLink></a>
    <!-- <a href="#" class="card-link"></a> -->
  </div>
</div>
   </div>
</template>

<style scoped>
.card{
    padding: 20rem;
    background-color: rgb(72, 102, 123);
    
}
.card-body{
    background-color: bisque;
    
}
</style>

<script setup lang="ts">

definePageMeta({
  layout: false,
})



</script>