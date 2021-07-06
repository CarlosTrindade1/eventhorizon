<template>
    <header class="menu">
        <img src="../../assets/logo-nome_pretoebranco.png" alt="Logo">
        <router-link to="/learn" class="link" v-if="!hideMenu">
            <i class="fa fa-leanpub mr-2 size"></i> 
            APRENDER
        </router-link>
        <router-link to="/learn" class="link-icon" v-if="!hideMenu">
            <i class="fa fa-leanpub mr-2 size"></i>
        </router-link>
        <router-link to="/" id="ranking" class="link" style="color: #218838" v-if="!hideMenu">
            <i class="fa fa-newspaper-o mr-2 size"></i> 
            RANKING
        </router-link>
        <router-link to="/ranking" id="ranking" class="link-icon" style="color: #218838" v-if="!hideMenu">
            <i class="fa fa-newspaper-o mr-2 size"></i> 
        </router-link>
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

    .menu .link-icon {
        display: none;
        text-decoration: none;
        color: #007BFF;
        font-size: 1.1rem;
        font-weight: 600;
    }
    .menu .link-icon:hover{
        text-decoration: none;
        color: #0069D9;
    }

    /* Responsividade */

    @media (max-width: 690px){
        .menu > img {
            height: 60%;
            margin-left: 20px;
            width: 100px;
            margin: 0;
        }
    }

    @media (max-width: 690px){
        .menu .link {
            font-size: 0.8rem;
        }

        .size {
            font-size: 1rem;
        }
    }

    @media (min-width: 860px){
        #ranking {
            display: none;
        }
    }

    @media (max-width: 415px){
        .menu .link-icon {
            display: inline-block;
        }

        .menu .link {
            display: none;
        }
    }
</style>