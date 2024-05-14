<template>
  <div>
    <div class="container">
      <div class="main-body">
        <div
          v-for="(profile, index) in profiles"
          :key="'profile' + index"
          class="row gutters-sm"
        >
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <div class="mt-3">
                    <h4>{{ profile.Fullname }}</h4>
                  </div>
                </div>
              </div>
            </div>
            <h5 class="p-4">PLEASE COMPLETE YOUR PROFILE</h5>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Full Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.Fullname }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ profile.Email }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Phone</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ profile.Phone }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mobile</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">{{ profile.Phone }}</div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Address</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ profile.Address }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-12">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Edit
                    </button>
                  </div>

                  <!-- MODAL -->

                  <div
                    class="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                          <div class="column" id="main">
                            <h4>PROFILE</h4>
                            <h6>
                                Edit your profile information
                            </h6>
                            <form class="form">
                              <div class="form-group">
                                <label for="exampleInputName">Name</label>
                               
                                <input
                                v-model="profile.Fullname"
                                  type="name"
                                  class="form-control"
                                  id="exampleInputName"
                                  placeholder="Name"
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleInputEmail1">E-mail </label>
                                <input
                                v-model="profile.Email"
                                  type="email"
                                  class="form-control"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="E-mail"
                                />
                              </div>
                              <div class="form-group">
                                <label for="exampleInputPassword1"
                                  >Phone</label
                                >
                                <input
                                v-model="profile.Phone"
                                  type="phone"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="phone"
                                />
                              </div>
                                <div class="form-group">
                                <label for="exampleInputPassword1"
                                  >Mobile</label
                                >
                                <input
                                v-model="profile.Phone"
                                  type="phone"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="phone"
                                />
                                <div class="form-group">
                                <label for="exampleInputPassword1"
                                  >Address</label
                                >
                                <input
                                v-model="profile.Address"
                                  type="address"
                                  class="form-control"
                                  id="exampleInputPassword1"
                                  placeholder="address"
                                />
                                </div>
                              </div>
                              <button @click="updateProfile()" type="submit" class="btn btn-primary">
                                Update Profile
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
// import type { profile } from "console";
import { ref } from "vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import type { Profile } from "~/types/task";
const route = useRoute();

const profiled = ref<Profile>({}as Profile)

const profiles = ref<any>({
  Fullname: "",
  Email: "",
  Phone:0,
  Address:"",
  // Add other properties as needed
});
console.log("seenProfile", profiles);

onMounted(() => {
  try {
    const users = localStorage.getItem("user");
    console.log("users", users);
    // const profile = JSON.parse(users || "[]");
    // console.log("profile", profile);
    if (users) {
      const parsedUsers = JSON.parse(users);

      profiles.value = parsedUsers;

      console.log("profile", profiles.value);
    }
  } catch (error) {
    console.log("Local Storage error");
  }
});


function updateProfile() {
  let storage = JSON.parse(localStorage.getItem("user") || "[]");
  storage = storage.map((profiles: Profile) => {
    if (profiles.Fullname ===  profiled.value.Fullname) {
      profiles = profiled.value;
      return profiled.value;
    }
    return profiles;
  });
  localStorage.setItem("user", JSON.stringify(storage));
  console.log("updateprofile", updateProfile);
  
}

</script>

<style scoped>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.container {
  width: 1138px;
  margin-left: 200px;
  margin-right: 100px;
  /* margin-right: 100px;  */
  font-size: 20px; /* Increased text to enable scrolling */
  padding-left: 100px;
  background-color: white;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}


.form{
  padding-top: 20px;
}
.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}

.form-group{
  padding-bottom: 15px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>
