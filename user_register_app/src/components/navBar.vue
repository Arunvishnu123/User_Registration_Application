<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
        <!-- Toggle button -->
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <!-- Left links -->
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <h5 class="User_Date" href="#">Home</h5>
                </li>
            </ul>
            <!-- Left links -->

            <div class="d-flex align-items-center">
                <button type="button" @click="current" class="btn btn-link px-3 me-2">
                    {{ firstName }}
                </button>
                <button type="button" @click="submit" class="btn btn-primary me-3">
                    Sign out
                </button>
            </div>
        </div>
        <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
</nav>
<!-- Navbar -->
</template>

<script>
export default {
    name: "navBar",
    props: {
        firstName: {
            type: String,
            default () {
                return "My name";
            },
        },
        submit: {
            type: Function,
            default () {
                return {};
            },
        },
        current: {
            type: Function,
            default () {
                return {};
            },
        },
    },
};
</script>
