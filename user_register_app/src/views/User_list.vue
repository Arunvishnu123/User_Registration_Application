<template>
  <div>
    <div>
      <navBar :submit="submitForm" :current="viewUser" :firstName="this.user" />
    </div>
    <div>
      <ul>
        
          <usercomp v-for="data in datas" :data="data" :key="data.id"> </usercomp>
        
      </ul>
    </div>
  </div>
 
</template>
<script>
import navBar from "../components/navBar.vue";
import usercomp from "../components/user_comp.vue";

export default {
  components: {
    navBar,
    usercomp,
  },
  data() {
    return {
      user: "Current User",
      g:0
    };
  },
  computed: {
    datas: {
      get() {
        return this.$store.state.userData;
      },
    },
  },
  methods: {
    submitForm() {
      this.$router.push("/");
    },
    viewUser() {
      this.$router.push("/User");
    },
    
  },
};
</script>