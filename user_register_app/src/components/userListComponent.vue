<template>
<table class="table table-dark table-striped">
    <tbody>
        <tr>
            <td>{{ data.firstName }} {{ data.lastName }}</td>
            <td>{{ data.email }}</td>
            <td>{{ data.address }}</td>
            <td>{{ data.DOB }}</td>
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
        gt() {
            console.log("key", this.key);
            return this.key;
        },
    },
    methods: {
        getDeleteData(data) {

            this.$store.state.testDelete = data
            console.log(this.$store.state.testDelete)
        },
        deleteData() {
            let data = this.$store.state.testDelete
            console.log(data);

            this.$store.dispatch("deleteData", data);
        },
        editData(data) {

            this.$store.state.editUserData = data

            var selectEdit = this.$store.state.userData.filter(v => v.id == data.id)
            console.log("sdfsdfd", selectEdit[0])
            this.$store.state.editPutData.firstName = selectEdit[0].firstName
            this.$store.state.editPutData.lastName = selectEdit[0].lastName
            this.$store.state.editPutData.DOB = selectEdit[0].DOB
            this.$store.state.editPutData.email = selectEdit[0].email
            this.$store.state.editPutData.address = selectEdit[0].address
            this.$store.state.editPutData.password = selectEdit[0].password
            this.$store.state.editPutData.gender = selectEdit[0].gender

            console.log(this.$store.state.editPutData)
            console.log(selectEdit)
        },
        onCreatePut() {
            let da = this.$store.state.editUserData
            console.log(this.$store.state.editPutData.firstName)

            axios.put('https://userregistrationsystem-default-rtdb.firebaseio.com/posts/' + da.id + '.json',
                this.$store.state.editPutData).then(response => {
                console.log("put", response)
                this.$store.state.userData.filter(v => v.id == this.$store.state.editPutData.id)
                this.$store.dispatch("getData")

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
