<template>
    <div class="menu-admin">
        <div class="d-flex flex-column justify-content-start">
            <div class="menu-header p-3">
                <h2>
                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                    Admin
                </h2>
            </div>
            <div class="menu-links">
                <router-link :class="{'link-item': true, 'active': this.$route.path == '/adm/dashboard'}" 
                to="/adm/dashboard" style="text-decoration: none;">
                    <i class="fa fa-tachometer" aria-hidden="true"></i>
                    Dashboard
                </router-link>
                <router-link :class="{'link-item': true, 'active': this.$route.path == '/adm/admin-pages'}" 
                to="/adm/admin-pages" style="text-decoration: none;">
                    <i class="fa fa-cogs" aria-hidden="true"></i>
                    Admin Pages
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MenuAdmin'
}
</script>

<style>
    .menu-admin {
        background-color: #0D6EFD;
    }

    .menu-links {
        width: 100%;
    }

    .link-item {
        color: #fff;
        font-size: 1.2rem;

        display: block;

        height: 50px;

        padding: 10px;

        background-color: #0D6EFD;

        transition: 0.5s;
    }

    .link-item:hover {
        color: #000;
        background-color: #fff;
    }

    .menu-header {
        color: #fff;

        border-bottom: 1px solid #fff;
    }

    .active {
        color: #000;
        background-color: #fff;
    }
</style>