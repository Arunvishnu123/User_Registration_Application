import { createStore } from "vuex";
import axios from "axios";

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

    //registerusers
    userData: null,

    //current login email and password
    currentEmail: "",
    currentPassword: "",

    //signed in user
    signedUser:null

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
    updateEmail(state, email) {
      state.email = email
    },
    updatePassword(state, password) {
      state.password = password
    },

    //registerformdata update
    getData(state, data) {
      state.userData = data
    },

    //login form update

    updateCurrentEmail(state, currentEmail) {
      state.currentEmail = currentEmail
    },
    updateCurrentPassword(state, currentPassword) {
      state.currentPassword = currentPassword
    },
  },
  actions: {
    getData({ commit }) {
      axios.get('https://userregistrationsystem-default-rtdb.firebaseio.com/posts.json').then(response => {
        var userdata = [];
        for (let key in response.data) {
          response.data[key].id = key
          userdata.push(response.data[key])
        }
        console.log(userdata)
        commit('getData', userdata)
      })
    }
  },
  modules: {},
});
