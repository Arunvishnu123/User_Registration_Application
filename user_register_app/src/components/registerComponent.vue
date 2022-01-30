<template>
<div class="row">
    <div class="col-md-6 mb-4">
        <div class="form-outline">
            <input v-model="firstName" placeholder="First Name" type="text" id="form3Example1m" class="form-control form-control-lg" required />
        </div>
    </div>
    <div class="col-md-6 mb-4">
        <div class="form-outline">
            <input v-model="lastName" placeholder="Last Name" type="text" id="form3Example1n" class="form-control form-control-lg" required />
        </div>
    </div>
</div>

<div class="row"></div>

<div class="form-outline mb-4">
    <input v-model="address" placeholder="Address" type="text" id="form3Example8" class="form-control form-control-lg" required />
</div>

<div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
    <select @change="onChange($event)" class="form-select">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
</div>

<div class="row"></div>

<div class="form-outline mb-4">
    <input v-model="DOB" placeholder="DOB" type="text" id="form3Example9" class="form-control form-control-lg" required />
</div>
<!--
<div class="mb-3">
    <input class="form-control" type="file" accept="image/*" id="formFile" @change="updatePhoto($event.target.name, $event.target.files)" />
</div>
-->
<div class="form-outline mb-4">
    <input v-model="email" placeholder="Email" type="email" id="form3Example90" class="form-control form-control-lg" required />
</div>

<div class="form-outline mb-4">
    <input :rules="[required, min6]" v-model="password" placeholder="Password" type="password" id="form3Example99" class="form-control form-control-lg" required :counter="6" />
</div>

<div class="form-outline mb-4">
    <input :rules="[required, min6, matchingPasswords]" v-model="password1" :counter="6" placeholder="Repeat Password" type="password" id="form3Example97" class="form-control form-control-lg" required />
</div>

<div class="d-flex justify-content-end pt-3">
    <button type="button" class="btn btn-light btn-lg">Reset all</button>
    <button type="submit" class="btn btn-warning btn-lg ms-2">
        Submit form
    </button>
</div>
</template>

<script>
export default {
    name: "registercomp",
    computed: {
      //update and get data from and to store when user selects the register option firstName,lastName,address,DOB,email,password,gender
        firstName: {
            get() {
                return this.$store.state.firstName;
            },
            set(value) {
                this.$store.commit("updateFirstName", value);
            },
        },
        gender: {
            get() {
                return this.$store.state.gender;
            },
            set(value) {
                this.$store.commit("updateGender", value);
            },
        },

        lastName: {
            get() {
                return this.$store.state.lastName;
            },
            set(value) {
                this.$store.commit("updateLastName", value);
            },
        },

        address: {
            get() {
                return this.$store.state.address;
            },
            set(value) {
                this.$store.commit("updateAddress", value);
            },
        },
        DOB: {
            get() {
                return this.$store.state.DOB;
            },
            set(value) {
                this.$store.commit("updateDOB", value);
            },
        },
        email: {
            get() {
                return this.$store.state.email;
            },
            set(value) {
                this.$store.commit("updateEmail", value);
            },
        },
        password: {
            get() {
                return this.$store.state.password;
            },
            set(value) {
                this.$store.commit("updatePassword", value);
            },
        },
    },
    methods: {
      //receive the gender value from dropdown selectors
        onChange(event) {
            this.gender = event.target.value;
            console.log(this.gender);
        },

        //browse photo from system . this feature is currently not used 
        updatePhoto(files) {
            if (!files.length) return;

            // Store the file data
            this.photo = {
                name: files[0].name,
                data: files[0],
            };
        },
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
