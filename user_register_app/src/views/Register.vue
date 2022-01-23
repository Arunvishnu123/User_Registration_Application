<template>
  <section class="h-100 bg-dark">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card card-registration my-4">
            <div class="row g-0">
              <div class="col-xl-6 d-none d-xl-block">
                <img
                  src="../assets/k.png"
                  alt="Sample photo"
                  class="img-fluid"
                  style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                  "
                />
              </div>
              <div class="col-xl-6">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Registration form</h3>
                  <form @submit.prevent="onCreatePost">
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            v-model="firstName"
                            placeholder="First Name"
                            type="text"
                            id="form3Example1m"
                            class="form-control form-control-lg"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input
                            v-model="lastName"
                            placeholder="Last Name"
                            type="text"
                            id="form3Example1n"
                            class="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row"></div>

                    <div class="form-outline mb-4">
                      <input
                        v-model="address"
                        placeholder="Address"
                        type="text"
                        id="form3Example8"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div
                      class="
                        d-md-flex
                        justify-content-start
                        align-items-center
                        mb-4
                        py-2
                      "
                    >
                      <select @change="onChange($event)" class="form-select">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div class="row"></div>

                    <div class="form-outline mb-4">
                      <input v-model="DOB"
                        placeholder="DOB"
                        type="text"
                        id="form3Example9"
                        class="form-control form-control-lg"
                      />
                    </div>
                    <!--
                    <div class="mb-3">
                      <input
                        class="form-control"
                        type="file"
                        accept="image/*"
                        id="formFile"
                        @change="updatePhoto($event.target.name, $event.target.files)"
                      />
                    </div>
                    -->
                    <div class="form-outline mb-4">
                      <input v-model="email"
                        placeholder="Email"
                        type="text"
                        id="form3Example90"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="password"
                        placeholder="Password"
                        type="text"
                        id="form3Example99"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="form-outline mb-4">
                      <input v-model="password"
                        placeholder="Repeat Password"
                        type="text"
                        id="form3Example97"
                        class="form-control form-control-lg"
                      />
                    </div>

                    <div class="d-flex justify-content-end pt-3">
                      <button @click="mounted ()" type="button" class="btn btn-light btn-lg">
                        Reset all
                      </button>
                      <button type="submit" class="btn btn-warning btn-lg ms-2">
                        Submit form
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>  
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
      DOB: "",
      picture: {},
      email: "",
      password: "",
    };
  },
  methods: {
    onChange(event) {
      this.gender = event.target.value;
      console.log(this.gender);
    },
    updatePhoto(files) {
      if (!files.length) return;

      // Store the file data
      this.photo = {
        name: files[0].name,
        data: files[0],
      };
    },
    onCreatePost() {
      axios
        .post(
          "https://userregistrationsystem-default-rtdb.firebaseio.com/posts.json",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            gender: this.gender,
            picture: this.picture,
            DOB:this.DOB,
            email:this.email,
            password:this.password

          }
        )
        .then((response) => {
          console.log(response);
        });
    },

  mounted () {
    axios
      .get('https://userregistrationsystem-default-rtdb.firebaseio.com/posts.json')
      .then(response => {
        console.log(response.data);
      })
  }
  },
};
</script>

<style scoped>
.card-registration {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0m;
  padding-right: 0em;
  padding-top: 0cm;
  margin-top: 0ch;
}

input[type="text"] {
  border: 1px solid #ccc;
  height: 0.2cm;
}
.img-fluid {
  height: 753px;
  width: 750px;
}
::placeholder {
  font-size: 1em;
}
</style>