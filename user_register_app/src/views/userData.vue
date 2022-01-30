<template>
<section>
    <navBar :submit="goTosignout" :current="goTouser" :firstName="this.user" />
    <div class="container1">
        <div class="row">
            <div class="col"></div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" class="rounded-circle img-fluid" style="width: 150px" />
                        <h5 class="my-3">{{$store.state.signedUser.firstName}} {{$store.state.signedUser.lastName}}</h5>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Full Name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{$store.state.signedUser.firstName}} {{$store.state.signedUser.lastName}}</p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{$store.state.signedUser.email}}</p>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">DOB</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{$store.state.signedUser.DOB}}</p>
                            </div>
                        </div>
                        <hr />

                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Address</p>

                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{$store.state.signedUser.address}}</p>
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
import navBar from '../components/navBar.vue'

export default {
    name: "form",
    components: {
        navBar
    },
    data() {
        return {
            user: "User List",
        };
    },
    created() {

    },
    methods: {
        goTosignout() {
            this.$router.push("/");
        },
        goTouser() {
            this.$router.push("/Userlist");
        },
        tet() {
            console.log(this.$store.state.userData)
        }
    },
};
</script>

<style scoped>
.container1 {
    margin: 4cm;
}

.col {
    color: rgb(47, 9, 134);
}

.card {
    background-color: rgb(194, 194, 194);
}

.User_Date {

    font-size: 20px;
}
</style>
