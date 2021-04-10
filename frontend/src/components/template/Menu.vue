<template>
    <header class="menu">
        <img src="../../assets/logo-nome_pretoebranco.png" alt="Logo">
        <router-link to="/learn" class="link" v-if="!hideMenu"><i class="fa fa-leanpub mr-2 size"></i> APRENDER</router-link>
        <UserDropdown v-if="!hideUserDropdown"/>
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Menu',
    components: {UserDropdown},
    props: {
        hideMenu: Boolean,
        hideUserDropdown: Boolean
    }
}
</script>

<style>
    .menu {
        grid-area: menu;
        border-bottom: 2px solid rgba(160, 160, 160, 0.253);

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .menu > img {
        height: 100%;
        margin-left: 20px
    }

    .menu .link{
        text-decoration: none;
        color: #007BFF;
        font-size: 1.1rem;
        font-weight: 600;
    }
    .menu .link:hover{
        text-decoration: none;
        color: #0069D9;
    }

    .size {
        font-size: 1.8rem;
    }
</style>