<template>
  <div>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <table class="table table-striped table-hover">
            <tbody>
              <tr>
                <td>{{ data.firstName }} {{ data.lastName }}</td>
                <td>{{ data.email }}</td>
                <td>{{ data.address }}</td>
                <td>{{ data.DOB }}</td>
                <td>
                  <span>
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      data-toggle="modal"
                      ><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                        >Edit</i
                      ></a
                    >
                  </span>
                  <span>
                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                      ><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                        >Delete</i
                      ></a
                    >
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div id="editEmployeeModal">
      <Delete2121></Delete2121>
    </div>

    <div id="deleteEmployeeModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
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
              <input type="submit" class="btn btn-danger" value="Delete" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Delete2121 from "./Delete.vue";
export default {
  name: "usercomp",
  components: {
    Delete2121,
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
};
</script>

<style scoped>
span {
  padding-left: 15px;
}
</style>
