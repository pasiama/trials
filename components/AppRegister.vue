<template>
    <div>
     <div class="col-12">
      <div class="reg2">
        <h1 class="card-title">Register</h1>
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
      <input type="password" class="form-control" id="inputPassword" required>
    </div>
     <label for="inputPassword" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword">
    </div>
   <div class="SubButton">
     <NuxtLink @click.prevent='Navigate' to="/home" class="btn btn-primary btn-lg">SignUp</NuxtLink>
   </div>
    
    <span>Already Registered? Procced to Login</span>
   <div class="SubButton">
     <NuxtLink @click.prevent='Navigate' to="/login" class="btn btn-primary btn-lg"> LogIn </NuxtLink>
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
.reg2{
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





















































































































































































<!-- 
<template>
  <div>

    <div class="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="imgcontainer">
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>
      <div class="modal-body">
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="taskForm.description"></textarea>
       </div>
       <form class="modal-content-animate" v-on:submit.prevent="">
    <div class="container">
      <h1>Sign Up</h1>
      <p>Please fill in this form to create an account.</p>
      <hr>
      <label for="email"><b>Email</b></label>
      <input type="text"  class="form-control" id="InputEmail" placeholder="Enter Email" name="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" class="form-control" id="InputPassword" placeholder="Enter Password" name="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" class="form-control" id="InputPassword2" placeholder="Repeat Password" name="psw-repeat" required>
      
      <label>
        <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
      </label>

      <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

      <div class="clearfix">
        <button type="button" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
      </div>
      
      <div class="modal-footer">
        <button  @click="pushTask" type="submit"  class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">ADD</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>


<style scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: #474e5d;
  padding-top: 50px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* Style the horizontal ruler */
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
 
/* The Close Button (x) */
.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
</style> -->