<template>
  <div>
    <div class="body">
        <div class="container mt-2">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <div class="card px-5 py-5" id="form1">
            <div class="form-data" >
              <div class="forms-inputs mb-4">
                <span>Email or username</span>
                <input class="col-md-12"
                v-model="userForm.Email"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                />{{ userForm.Email }}
                <div class="invalid-feedback">A valid email is required!</div>
              </div>
              <div class="forms-inputs mb-4">
                <span>Password</span>
                <input class="col-md-12"
                v-model="userForm.Password" 
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                 />{{ userForm.Password }}
                <div class="invalid-feedback">
                  Password must be 8 character!
                </div>
              </div>
              <div class="mb-3">
                <button
                @click="loginUser()"
                  class="btn btn-dark w-100"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>


<script lang="ts" setup> 

const router = useRouter()
const userForm = reactive<any>({
   Fullname : "",
   Email : "",
   Password : ""
})
 
function loginUser (){
 
  if ( !userForm.Email || !userForm.Password) {
    alert("Please fill in all fields to login.");
    return;
  }


  let users = JSON.parse(localStorage.getItem("user") || "[]") || [];

  const existingUser = users.find(user => user.Email === userForm.Email && user.Password === userForm.Password);

  if (existingUser) {
    router.push({path: "/tasklist"})

  }else{
    alert("Wrong email or password");
    return;
  }
  
 
  localStorage.setItem("user", JSON.stringify(users));
  
}
</script>

<style scoped>
.body {
  background: #000;
  width: 100%;
  height: 100%;
}
.card {
  border: none;
  height: 320px;
  color: black;
}
.row{
    color: aquamarine;
}
.forms-inputs {
  position: relative;
}
.forms-inputs span {
  position: absolute;
  top: -18px;
  left: 10px;
  background-color: #fff;
  padding: 5px 10px;
  font-size: 15px;
}
.forms-inputs input {
  height: 50px;
  border: 2px solid #eee;
}
.forms-inputs input:focus {
  box-shadow: none;
  outline: none;
  border: 2px solid #000;
}
.btn {
  height: 50px;
}
</style>

<!-- <script lang="ts" setup>
var app = new Vue({
  el: "#form1",
  data: function () {
    return {
      email: "",
      emailBlured: false,
      valid: false,
      submitted: false,
      password: "",
      passwordBlured: false,
    };
  },

  methods: {
    validate: function () {
      this.emailBlured = true;
      this.passwordBlured = true;
      if (this.validEmail(this.email) && this.validPassword(this.password)) {
        this.valid = true;
      }
    },

    validEmail: function (email) {
      var re = /(.+)@(.+){2,}\.(.+){2,}/;
      if (re.test(email.toLowerCase())) {
        return true;
      }
    },

    validPassword: function (password) {
      if (password.length > 7) {
        return true;
      }
    },

    submit: function () {
      this.validate();
      if (this.valid) {
        this.submitted = true;
      }
    },
  },
});
</script> -->
