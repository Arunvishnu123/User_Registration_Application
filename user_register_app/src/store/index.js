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
    signedUser: null,

    //currentdata edit
    editUserData:{
      firstName:null,
      lastName:null,
      email:null,
      DOB:null,
      address:null,
      gender:null,
      pasword:null
    },

    //tag to put data - during edit 
    editPutData:{
      firstName:null,
      lastName:null,
      email:null,
      DOB:null,
      address:null,
      gender:null,
      pasword:null
    },

    //DELETE
    testDelete:null

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

    //delete the individual data
    deleteDatas(state, dataID) {
      console.log("dksdv", dataID.id)
      let datas = state.userData.filter(v => v.id != dataID.id)
      console.log("fjdjsdfsdfjsdijfidsfijd",datas)
      state.userData = datas

    },

    //edit DATA when user choose edit option

    editFirstName(state, firstName) {
      state.editPutData.firstName = firstName
    },
    editLastName(state, lastName) {
      state.editPutData.lastName = lastName
    },
    editGender(state, gender) {
      state.editPutData.gender = gender
    },
    editAddress(state, address) {
      state.editPutData.address = address
    },
    editDOB(state, DOB) {
      state.editPutData.DOB = DOB
    },
  editEmail(state, email) {
      state.editPutData.email = email
    },

  },
  actions: {

    //get data from the server - here firebase realtime database is used
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
    },
    deleteData({ commit }, data) {
      commit('deleteDatas', data);
      console.log("current", data)
      axios.delete('https://userregistrationsystem-default-rtdb.firebaseio.com/posts/' + data.id + '.json').then(response => {
        console.log("Deleted", response)
      })
    },
    editData({ commit }, data) {
      commit('editDatas', data);
      console.log("current", data);
    }
  },
  modules: {
  
  },
});
