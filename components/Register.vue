<template>
  <div>
    <div class="form-body">
      <div class="row">
        <div class="form-holder">
          <div class="form-content">
            <div class="form-items">
              <h3>Register Today</h3>
              <p>Fill in the data below.</p>
              <form class="requires-validation" novalidate>
                <div class="col-md-12">
                  <input
                  v-model="userForm.Fullname"
                    class="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />{{ userForm.Fullname }}
                  <div class="valid-feedback">Username field is valid!</div>
                  <div class="invalid-feedback">
                    Username field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                  v-model="userForm.Email"
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    required
                  />{{ userForm.Email }}
                  <div class="valid-feedback">Email field is valid!</div>
                  <div class="invalid-feedback">
                    Email field cannot be blank!
                  </div>
                </div>

                <div class="col-md-12">
                  <input
                  v-model="userForm.Password"
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  /> {{ userForm.Password }}
                  <div class="valid-feedback">Password field is valid!</div>
                  <div class="invalid-feedback">
                    Password field cannot be blank!
                  </div>
                </div>
                <div class="col-md-12">
                  <input
                  v-model="userForm.Phone"
                    class="form-control"
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  /> {{ userForm.Phone }}
                  <div class="valid-feedback">Password field is valid!</div>
                  <div class="invalid-feedback">
                    Password field cannot be blank!
                  </div>
                </div>
                <div class="col-md-12">
                  <input
                  v-model="userForm.Address"
                    class="form-control"
                    type="address"
                    name="address"
                    placeholder="Address"
                    required
                  /> {{ userForm.Address }}
                  <div class="valid-feedback">Password field is valid!</div>
                  <div class="invalid-feedback">
                    Password field cannot be blank!
                  </div>
                </div>
                <div class="form-button mt-3">
                  <a href="./tasklist">
                    <NuxtLink 
                    
                    @click.prevent="addUser()"
                  
                    class="btn btn-primary"
                    id="submit"
                    type="submit"
                    >Register</NuxtLink
                  >
                </a>
                  <!-- <button  class="btn btn-primary">Register</button> -->
                </div>
                <span>Already Registered? Procced to Login</span>
                <div class="SubButton">
                  <NuxtLink 
                    @click.prevent=""
                    to="/login"
                    class="btn btn-primary"
                  >
                    LogIn
                  </NuxtLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script lang="ts" setup>
(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

</script> -->
  
<script lang="ts"  setup>
import type { Profile } from "~/types/task";
// definePageMeta({
  
//   middleware: "register-guard"
// })
const router = useRouter()
const user = ref <any>({})
const userForm = reactive<Profile>({
  id: 0,
   Fullname : "",
   Email : "",
   Password : "",
   Phone: 0,
   Address :"",
})



 
function addUser (){
 
  if (!userForm.Fullname || !userForm.Email || !userForm.Password) {
    alert("Please fill in all fields before registering.");
    return;
  }


  let users = JSON.parse(localStorage.getItem("user") || "[]") || [];

  const existingUser = users.find(user => user.Email === userForm.Email);

  if (existingUser) {
    alert("User with this email already exists. Please use a different email.");
    return;
  }
  
  users.push({
    Fullname: userForm.Fullname,
    Email: userForm.Email,
    Password : userForm.Password,
    Phone: userForm.Phone,
   Address :userForm.Address,
   
  });
  localStorage.setItem("user", JSON.stringify(users));

  router.push('/tasklist');

  
}


// const {status, signin, signout} = useAuth()

// const Loggedin =computed (()=> status.value === 'authenticated')

// async function handleSignIn(){
//   await signin()

// }

// async function handleSignOut(){
//   await signout()

// }
</script>





<style scoped>
*,
body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  height: 100%;
  background-color: #0a6099;
  overflow: hidden;
}

.form-holder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}

.form-holder .form-content {
  position: relative;
  text-align: center;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 60px;
}

.form-content .form-items {
  border: 3px solid #962222;
  padding: 40px;
  display: inline-block;
  width: 100%;
  min-width: 540px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  text-align: left;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.form-content h3 {
  color: #962222;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 5px;
}

.form-content h3.form-title {
  margin-bottom: 30px;
}

.form-content p {
  color: #962222;
  text-align: left;
  font-size: 17px;
  font-weight: 300;
  line-height: 20px;
  margin-bottom: 30px;
}

.form-content label,
.was-validated .form-check-input:invalid ~ .form-check-label,
.was-validated .form-check-input:valid ~ .form-check-label {
  color: #962222;
}

.form-content input[type="text"],
.form-content input[type="password"],
.form-content input[type="email"],
.form-content select {
  width: 100%;
  padding: 9px 20px;
  text-align: left;
  border: 0;
  outline: 0;
  border-radius: 6px;
  background-color: #c78c8c;
  font-size: 15px;
  font-weight: 300;
  color: #3f3838;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-top: 16px;
}

.btn-primary {
  background-color: #21598b;
  outline: none;
  border: 0px;
  box-shadow: none;
}

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #000102;
  outline: none !important;
  border: none !important;
  box-shadow: none;
}

.form-content textarea {
  position: static !important;
  width: 100%;
  padding: 8px 20px;
  border-radius: 6px;
  text-align: left;
  background-color: #199c26;
  border: 0;
  font-size: 15px;
  font-weight: 300;
  color: #740808;
  outline: none;
  resize: none;
  height: 120px;
  -webkit-transition: none;
  transition: none;
  margin-bottom: 14px;
}

.form-content textarea:hover,
.form-content textarea:focus {
  border: 0;
  background-color: #17b36f;
  color: #8d8d8d;
}

.mv-up {
  margin-top: -9px !important;
  margin-bottom: 8px !important;
}

.invalid-feedback {
  color: #ff606e;
}

.valid-feedback {
  color: #2acc80;
}
</style>
