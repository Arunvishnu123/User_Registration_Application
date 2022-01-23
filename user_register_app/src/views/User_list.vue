<template>
  <navBar :submit="submitForm" :current="viewUser" :firstName="this.user" />
 
  <usercomp> </usercomp>
 
  
</template>
<script>
import navBar from "../components/navBar.vue";
import usercomp from "../components/User_component.vue";
export default {
  components: {
    navBar,
    usercomp,
  },
  data() {
    return {
      user: "Current User",
    };
  },
 computed: {
    datas: {
      get() {
        return this.$store.state.userData;
      },
    }
 },
  methods: {
    submitForm() {
      this.$router.push("/");
    },
    viewUser() {
      this.$router.push("/User");
    },
    gg(){
        console.log(this.data)
    }
  },
};
</script>