<template>
    <header class="menu">
        <img src="../../assets/logo-nome_pretoebranco.png" alt="Logo">
        <a href class="link"><i class="fa fa-leanpub mr-2"></i> APRENDER</a>
        <UserDropdown/>
    </header>
</template>

<script>
import UserDropdown from './UserDropdown'

export default {
    name: 'Menu',
    components: {UserDropdown}
}
</script>

<style>
    .menu {
        grid-area: menu;
        border-bottom: 2px solid #CCC;

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
        color: rgb(82, 82, 82);
        font-size: 1.2rem;
    }
    .menu .link:hover{
        text-decoration: none;
        color: #000;
    }
</style>