<template>
		<div id="app" :class="{'hide-ranking': !user}">
			<Menu :hideUserDropdown="!user" :hideMenu="!user"/>
			<Content/>
			<Ranking :hideRanking="!user"/>
			<Footer/>
		</div>
</template>

<script>
import {mapState} from 'vuex'
import Menu from './components/template/Menu'
import Footer from './components/template/Footer'
import Content from './components/template/Content'
import Ranking from './components/template/Ranking'

import axios from 'axios'
import {baseApiUrl, userKey} from './global'

export default {
	name: 'App',
	components: {Menu, Footer, Content, Ranking},
	computed: mapState(['user']),
	data: function(){
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken(){
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if (!userData){
				this.validatingToken = false
				this.$router.push({name: 'home'})
				return
			}

			const resp = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if (resp.data) {
				this.$store.commit('setUser', userData)

			} else {
				localStorage.removeItem(userKey)
				this.$router.push({name: 'home'})
			}

			this.validatingToken = false
		}
	},
	created(){
		this.validateToken()
	}
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap');
    * {
      font-family: 'Asap', sans-serif; 
    }

    body {
        margin: 0;
    }

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb {
		background: #007BFF;
		border-radius: 10px;
	}

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        height: 100vh;
        display: grid;
        grid-template-rows: 80px 1fr 40px;
        grid-template-columns: 65% 35%;
        
        grid-template-areas:
            'menu menu'
            'content aside'
            'footer footer';
    }

    #app.hide-ranking {
		grid-template-areas:
			'menu menu'
			'content content'
			'footer footer';
    }
</style>
