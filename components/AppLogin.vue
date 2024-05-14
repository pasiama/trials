<template>
    <div>
     <div class="col-12">
      <div class="reg3">
        <h1 class="card-title">LogIn Here</h1>
          <div class="mb-3 row">
    <label for="firstName" class="col-sm col-form-label">First Name</label>
    <div class="col-sm-10">
      <input v-model="firstName" type="text"  class="form-control" id="firstName" placeholder="kofi">
    </div>
    <label for="surName" class="col-sm-2 col-form-label">Surname</label>
    <div class="col-sm-10">
      <input v-model="surName" type="text" class="form-control" id="surName" placeholder="Asare">
    </div>
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input v-model="staticEmail" type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
     <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>

   <div class="SubButton">
     <NuxtLink @click.prevent='Navigate' to="/home" class="btn btn-primary btn-lg"> LogIn </NuxtLink>
   </div>
   
   

  </div>
      </div>
    </div>

    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<style>
.reg3{
    background-color: rgb(179, 150, 205);
    padding: 20rem;
    margin: auto;
}
input{
    margin-top: 1rem;
}
label{
     margin-top: 1rem;
     font-size: 20px;
}
.SubButton{
   padding-left: 25rem;
   margin-top: 1rem;
}
span{
    text-align: center;
    margin-top: 1rem;
}
</style>
