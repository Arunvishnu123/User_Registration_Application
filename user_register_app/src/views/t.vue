<template>
    <navBar :submit="submitForm"
            :current="viewUser"
            :firstName="this.user" />
</template>

<script>
import navBar from '../components/navBar.vue'
export default{
components:{
    navBar
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
