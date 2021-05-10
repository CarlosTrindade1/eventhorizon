<template>
    <div class="config">
        <div class="d-flex flex-row align-items-center justify-content-between" style="width: 100%">
            <div class="avatar-ico">
                <Gravatar :email="this.user.email" alt="User" style="width: 100%; height: 100%; border-radius: 30px;"/>
            </div>
            <div><h1 class="user-name">Olá, {{this.user.name}}!</h1></div>
            <div>
                <button class="btn-update-profile" @click.prevent ="showUpdateProfile = !showUpdateProfile">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                    Editar perfil
                </button>
            </div>
        </div>
        <div v-if="showUpdateProfile">
            <hr>
            <div class="form">
                <p>Nome:</p>
                <input type="text" v-model="userUpdated.name">
                <p>E-mail:</p>
                <input type="email" v-model="userUpdated.email">
                <div class="d-flex justify-content-around">
                    <div style="width: 50%" class="mr-2">
                        <p>Senha atual:</p>
                        <input type="password" v-model="userUpdated.confirmPassword">
                    </div>
                    <div style="width: 50%" class="ml-2">
                        <p>Nova senha:</p>
                        <input type="password" v-model="userUpdated.password">
                    </div>
                </div>
                <button class="btn-save-update my-2" @click.prevent ="updateUser">
                    <i class="fa fa-floppy-o" aria-hidden="true"></i>
                    Salvar alterações
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Gravatar from 'vue-gravatar'
import {mapState} from 'vuex'
import axios from 'axios'
import {baseApiUrl, showError, showSuccess} from '../../global'

export default {
    name: 'Config',
    components: {Gravatar},
    computed: mapState(['user']),
    data: function(){
        return {
            showUpdateProfile: false,
            userUpdated: {}
        }
    },
    methods: {
        updateUser(){
            const url = `${baseApiUrl}/user/update`
            axios.post(url, this.userUpdated)
                .then(showSuccess('Alterações salvas com sucesso!'))
                .catch(showError)
            

            this.$router.push({path: '/learn'})
        }
    },
    mounted(){
        this.userUpdated.id = this.user.id
        this.userUpdated.name = this.user.name
        this.userUpdated.email = this.user.email
    }
}
</script>

<style>
    .config {
        display: flex;
        flex-direction: column;

        padding: 20px;
    }

    .avatar-ico {
        width: 150px;
        height: 150px;

        margin: 0px 20px;
    }

    .btn-update-profile {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;

        background-color: #0190CD;

        border: 1px solid #0190CD;
        border-radius: 15px;

        width: 200px;
        height: 50px;
    }

    .btn-update-profile:hover {
        background-color: #0069D9;
    }

    .btn-save-update {
        color: #fff;
        font-size: 1.3rem;
        font-weight: 700;

        width: 100%;
        height: 50px;

        border: 1px solid #0190CD;
        border-radius: 15px;

        background-color: #0190CD;
    }

    .btn-save-update:hover {
       background-color: #0069D9; 
    }
</style>