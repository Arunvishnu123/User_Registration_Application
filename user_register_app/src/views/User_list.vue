<template>
    <navBar :submit="submitForm"
            :current="viewUser"
            :firstName="this.user" />

            <usercomp />
</template>
<script>
import navBar from '../components/navBar.vue'
import usercomp from '../components/User_component.vue'
export default{
components:{
    navBar,
    usercomp
},
data() {
    return {
      user: "Current User",
    };
  },

methods: {
    submitForm() {
      this.$router.push("/");
    },
    viewUser() {
      this.$router.push("/User");
    }
  }
}

</script>