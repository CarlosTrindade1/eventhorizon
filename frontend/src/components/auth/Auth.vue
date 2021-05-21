<template>
    <div class="auth">
        <div class="auth-container">
            <img src="../../assets/logo-pretoebranco-3.0.png" alt="Logomarca">
            <h1 v-if="showSignup">Registrar-se</h1>
            <h1 v-else>Login</h1>
            <div class="form">
                <p v-if="showSignup">Nome:</p>
                <input v-if="showSignup" type="text" placeholder="Digite o seu nome..." v-model="user1.name">
                <p>E-mail:</p>
                <input type="email" placeholder="Digite o seu e-mail..." v-model="user1.email">
                <p>Senha:</p>
                <input type="password" placeholder="Digite a sua senha..." v-model="user1.password">
                <p v-if="showSignup">Confirme a senha:</p>
                <input v-if="showSignup" type="password" placeholder="Confirme a sua senha..." v-model="user1.confirmPassword">
            </div>
            <a href v-if="showSignup" @click.prevent="signup" class="bg-primary">Registrar</a>
            <a href v-else @click.prevent="signin" class="bg-primary">Entrar</a>
            <a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup" style="color: #000">Já tem cadastro? Acesse o login!</span>
                <span v-else style="color: #000">Não tem cadastro? Registre-se aqui</span>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl, showError, userKey} from '../../global'
import {mapState} from 'vuex'

export default {
    name: 'Auth',
    data: function(){
        return {
            user1: {},
            showSignup: false,
        }
    },
    computed: mapState(['user']),
    methods: {
        signin(){
            const url = `${baseApiUrl}/signin`
            axios.post(url, this.user1)
                .then(resp => {
                    this.$store.commit('setUser', resp.data)
                    localStorage.setItem(userKey, JSON.stringify(resp.data))
                    axios.get(`${baseApiUrl}/user/${resp.data.id}/stats`).then(resp => {
                        this.$store.commit('setUserStats', resp.data)
                    })
                    this.$router.push({path: '/learn'})
                })
                .catch(showError)
        },
        signup(){
            const url = `${baseApiUrl}/signup`
            this.user1 = {...this.user1, admin: false}
            axios.post(url, this.user1)
                .then(() => {
                    this.user1 = {}
                    this.showSignup = false
                })
                .catch(showError)
        }
    }
}
</script>

<style>
    .auth {
        display: flex;
        justify-content: center;
    }

    .auth-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px solid #fff;
        border-radius: 15px;
        width: 500px;

        padding: 20px;

        background-color: #fff;
    }

    .auth-container h1 {
        font-size: 2rem;
    }

    .auth-container a {
        text-decoration: none;
        text-align: center;
        font-size: 1rem;

        display: block;

        color: #fff;

        padding: 15px;
        margin: 10px 0px;

        border-radius: 30px;
        align-self: stretch;
    }

    .auth img {
        height: 50px;
        margin-bottom: 10px;
    }

    .form {
        width: 100%;
    }

    .form input {
        width: 100%;
        padding: 10px;
        outline: none;
        border: 1px solid #000;
        border-radius: 30px;
        margin-bottom: 10px;
    }

    .form p {
        margin: 0;
    }

    @media (max-width: 520px){
        .auth-container {
            width: 450px;
        }
    }
    @media (max-width: 420px){
        .auth-container {
            width: 400px;
        }
    }
    @media (max-width: 380px){
        .auth-container {
            width: 350px;
        }
    }
    @media (max-width: 320px){
        .auth-container {
            width: 260px;
        }
    }
</style>