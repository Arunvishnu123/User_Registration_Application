<template>
<section>
    <div>
        <div>
            <navBar :submit="goTosignout" :current="goTouser" :firstName="this.user" />
        </div>
        <div>
            <userData />
        </div>
    </div>

</section>
</template>

<script>
import navBar from '../components/navBar.vue'
import userData from '../components/userDataComponent.vue'

export default {
    name: "form",
    components: {
        navBar,
        userData
    },
    data() {
        return {
            user: "User List",
        };
    },
    created() {

    },
    beforeMount() {
            this.$store.dispatch("getData")//function to update current user list - simply the get request from the server
    },
    methods: {

        //fucntion to logout
        goTosignout() {
            this.$router.push("/");
        },

        //function route to view the registered users
        goTouser() {
            this.$router.push("/Userlist");
        },
        test() {
            console.log(this.$store.state.userData)
        }
    },
};
</script>
