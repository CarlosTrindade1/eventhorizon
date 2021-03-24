<template>
    <div class="auth">
        <div class="auth-container">
            <img src="../../assets/logo-nome_pretoebranco.png" alt="Logomarca">
            <h1>Login</h1>
            <div class="form">
                <p>E-mail:</p>
                <input type="email" placeholder="Digite o seu e-mail..." v-model="user.email">
                <p>Senha:</p>
                <input type="password" placeholder="Digite a sua senha..." v-model="user.password">
            </div>
            <a href @click.prevent="signin" class="bg-primary">Login</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
    name: 'Auth',
    data: function(){
        return {
            user: {}
        }
    },
    methods: {
        signin(){
            const url = `${baseApiUrl}/signin`
            axios.post(url, this.user)
                .then(resp => {
                    this.$store.commit('setUser', resp.data)
                    this.$router.push({path: '/learn'})
                })
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

        border: 1px solid #000;
        border-radius: 10px;
        width: 500px;

        padding: 20px;
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
        height: 100px;
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

</style>