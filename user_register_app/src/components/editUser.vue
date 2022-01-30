<template>
<div class="modal-header">
    <h4 class="modal-title">Edit Employee</h4>
    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
        &times;
    </button>
</div>
<div class="modal-body">
    <div class="form-group">
        <label>First Name</label>
        <input  v-model="firstName" type="text" class="form-control" required  />
    </div>
    <div class="form-group">
        <label>Last Name</label>
        <input v-model="lastName" type="text"  class="form-control"  />
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" class="form-control" required  />
    </div>
    <div class="form-group">
        <label>Address</label>
        <textarea v-model="address" class="form-control" required ></textarea>
    </div>
    <div class="form-group">
        <label>DOB</label>
        <input type="text" v-model="DOB" class="form-control" required  />
    </div>
</div>
<div class="modal-footer">
    <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
    <input type="submit" class="btn btn-info"  value="Save" />
</div>
</template>

<script>
export default {
    name: "Edit_User",
    computed: {
        firstName: {
            get() {
                return this.$store.state.editPutData.firstName;
            },
            set(value) {
                this.$store.commit("editFirstName", value);
            },
        },

        lastName: {
            get() {
                return this.$store.state.editPutData.lastName;
            },
            set(value) {
                this.$store.commit("editLastName", value);
            },
        },

        address: {
            get() {
                return this.$store.state.editPutData.address;
            },
            set(value) {
                this.$store.commit("editAddress", value);
            },
        },
        DOB: {
            get() {
                return this.$store.state.editPutData.DOB;
            },
            set(value) {
                this.$store.commit("editDOB", value);
            },
        },
        email: {
            get() {
                return this.$store.state.editPutData.email;
            },
            set(value) {
                this.$store.commit("editEmail", value);
            },
        },
    }
}
</script>
