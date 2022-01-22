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

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input v-model="firstName"
                          placeholder="First Name"
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input v-model="lastName"
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
                    <input v-model="address"
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
                    <select class="form-select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div class="row"></div>

                  <div class="form-outline mb-4">
                    <input
                      placeholder="DOB"
                      type="text"
                      id="form3Example9"
                      class="form-control form-control-lg"
                    />
                  </div>
                  <div class="mb-3">
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      placeholder="Email"
                      type="text"
                      id="form3Example90"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      placeholder="Password"
                      type="text"
                      id="form3Example99"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      placeholder="Repeat Password"
                      type="text"
                      id="form3Example97"
                      class="form-control form-control-lg"
                    />
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg">
                      Reset all
                    </button>
                    <button type="button" class="btn btn-warning btn-lg ms-2">
                      Submit form
                    </button>
                  </div>
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

export default {
  name: "form",
  data() {
    return {
      firstName:'',
      lastName:'',
      address:'',
      gender:'',
      DOB:'',
      picture:'',
      email:'',
      password:''
    

    };
  },
  methods: {
   
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