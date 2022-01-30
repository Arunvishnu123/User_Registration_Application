<template>
<section class="h-100 bg-dark">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card card-registration my-4">
                    <div class="row g-0">
                        <div class="col-xl-6 d-none d-xl-block">
                            <img src="../assets/k.png" alt="Sample photo" class="img-fluid" style="
                    border-top-left-radius: 0.25rem;
                    border-bottom-left-radius: 0.25rem;
                  " />
                        </div>
                        <div class="col-xl-6">
                            <div class="card-body p-md-5 text-black">
                                <h3 class="mb-5 text-uppercase">Registration form</h3>
                                <form @submit.prevent="onCreatePost">
                                    <registercomp />
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
import registercomp from "../components/registerComponent.vue";
export default {
    components: {
        registercomp,
    },
    data() {
        return {
            value: 0,
        };
    },
    methods: {

        //function to post data to the api
        onCreatePost() {
            this.$router.push("/register_success");
            axios
                .post(
                    "https://userregistrationsystem-default-rtdb.firebaseio.com/posts.json", {
                        firstName: this.$store.state.firstName,
                        lastName: this.$store.state.lastName,
                        address: this.$store.state.address,
                        gender: this.$store.state.gender,
                        picture: "",
                        DOB: this.$store.state.DOB,
                        email: this.$store.state.email,
                        password: this.$store.state.password,

                    }
                )
                .then((response) => {
                    console.log(response);
                });
        },
    },
};
</script>

<style scoped>
.img-fluid {
    height: 753px;
    width: 750px;
}
</style>
