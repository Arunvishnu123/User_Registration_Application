import { createStore } from "vuex";

export default createStore({
  state: {
    //register form data
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
      DOB: "",
      picture: {},
      email: "",
      password: "",
    //registerform data
  },
  mutations: {
//registerformdata update
    updateFirstName(state, firstName) {
      state.firstName = firstName
    },
    updateLastName(state, lastName) {
      state.lastName = lastName
    },
    updateGender(state, gender) {
      state.gender = gender
    },
    updateAddress(state, address) {
      state.address = address
    },
    updateDOB(state, DOB) {
      state.DOB = DOB
    },
    updateEmail(state,email) {
      state.email = email
    },
    updatePassword(state,password) {
      state.password = password
    },
    


    //registerformdata update
  },
  actions: {},
  modules: {},
});
