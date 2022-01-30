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
            <a  href="#editEmployeeModal" @click="editData(data)" class="edit" data-toggle="modal">
            Edit
              
            </a>
          </span>
          <span>
            <a href="#deleteEmployeeModal" class="delete" data-toggle="modal">
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
        <form>
          <div class="modal-header">
            <h4 class="modal-title">Edit Employee</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" class="form-control" required  />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Address</label>
              <textarea class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label>BOB</label>
              <input type="text" class="form-control" required />
            </div>
          </div>
          <div class="modal-footer">
            <input
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              value="Cancel"
            />
            <input type="submit" class="btn btn-info" value="Save" />
          </div>
        </form>
      </div>
    </div>
  </div>

  <div id="deleteEmployeeModal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Delete Employee</h4>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-hidden="true"
          >
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
          <input
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
            value="Cancel"
          />
          <button
            @click="deleteData(data)"
            class="btn btn-danger"
            data-dismiss="modal"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import editUser from "./editUser.vue";

export default {
  name: "usercomp",
  components: {
    // editUser,
  },
  props: {
    data: Object,
  },
  computed: {
    gt() {
      console.log("key", this.key);
      return this.key;
    },
  },
  methods: {
    deleteData(data) {
      console.log(data);
      this.$store.dispatch("deleteData", data);
    },
     editData(data){
    console.log("hellor")
    this.$store.dispatch("editData", data);
    console.log(data)
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

td {
  width: 25%;
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
