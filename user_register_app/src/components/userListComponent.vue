<template>
<table class="table table-dark table-striped">
    <tbody>
        <tr>
            <td>{{ data.firstName }} {{ data.lastName }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.DOB }}</td>
            <td>{{ data.gender }}</td>
            <td>
                <span>
                    <a href="#editEmployeeModal" @click="editData(data)" class="edit" data-toggle="modal">
                        Edit

                    </a>
                </span>
                <span>
                    <a @click="getDeleteData(data)" href="#deleteEmployeeModal" class="delete" data-toggle="modal">
                        Delete
                    </a>
                </span>
            </td>
        </tr>
    </tbody>
</table>

<div id="editEmployeeModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <form @submit.prevent="onCreatePut">
                <editUser />
            </form>
        </div>
    </div>
</div>

<div id="deleteEmployeeModal" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Delete Employee</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    &times;
                </button>
            </div>
            <div class="modal-body">
                <p>Are you sure you want to delete these Records?</p>
                <p class="text-warning">
                    <small>This action cannot be undone.</small>
                </p>
            </div>
            <div class="modal-footer">
                <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
                <button @click="deleteData()" class="btn btn-danger" data-dismiss="modal">
                    Delete
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import editUser from "./editUser.vue";
import axios from "axios";
export default {
    name: "usercomp",
    components: {
        editUser,
    },
    props: {
        data: Object,
        id: String
    },
    data() {
        return {
            deleteDataObject: null
        };
    },
    computed: {

    },
    methods: {
        //function to select the data from the component need to be deleted when the user select the delete option in userlist screen
        getDeleteData(data) {

            this.$store.state.testDelete = data;
            console.log(this.$store.state.testDelete);
        },
        //function to delete the selected  component from the list
        deleteData() {
            let data = this.$store.state.testDelete;
            console.log(data);
            this.$store.dispatch("deleteData", data); //delete function is written in the store in the function deleteData
        },

        //function to select the data when user select a particular compoenent to edit
        editData(data) {

            this.$store.state.editUserData = data //data from selected component

           //var selectEdit = this.$store.state.userData.filter(v => v.id == data.id)//filter the data 
           
            console.log("sdfsdsdfsdfsdfsdfsdfd", data)
            this.$store.state.editPutData.firstName = data.firstName//get the current firstname from the selected data before editing
            this.$store.state.editPutData.lastName = data.lastName//get the current lastname from the selected data before editing and store it 
            this.$store.state.editPutData.DOB = data.DOB//get the current DOB from the selected data before editing and store it
            this.$store.state.editPutData.email = data.email//get the current lemail from the selected data before editing and store it
            this.$store.state.editPutData.address = data.address//get the current address from the selected data before editing and store it
            this.$store.state.editPutData.password = data.password//get the current password from the selected data before editing and store it
            this.$store.state.editPutData.gender = data.gender//get the current gender from the selected data before editing and store it

            console.log(this.$store.state.editPutData)
            
        },

        //fucntion to put the data on server
        onCreatePut() {
            let da = this.$store.state.editUserData
            console.log(this.$store.state.editPutData.firstName)

            axios.put('https://userregistrationsystem-default-rtdb.firebaseio.com/posts/' + da.id + '.json',
              //editPutData in store to update the data in the server
                this.$store.state.editPutData).then(response => {
                console.log("put", response)
                this.$store.state.userData.filter(v => v.id == this.$store.state.editPutData.id)
                this.$store.dispatch("getData")//function to update current user list - simply the get request from the server

            })
        }
    },

};
</script>

<style scoped>
span {
    padding-left: 35px;
}

table,
th,
td {
    table-layout: fixed;
    border-collapse: collapse;
    margin: 0;
    font-size: 0.9em;
    font-family: sans-serif;
}

.edit {
    font-size: 15px;
    color: aliceblue;
}

.delete {
    font-size: 15px;
    color: aliceblue;
}
</style>
