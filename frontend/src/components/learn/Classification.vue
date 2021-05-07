<template>
    <div class="classification">
        <div class="division">
            <h3 v-if="userStats.ranking == 0">Unranked</h3>
            <h3 v-if="userStats.ranking == 1">Divisão Aristotélica</h3>
            <h3 v-if="userStats.ranking == 2">Divisão Copernicana</h3>
            <h3 v-if="userStats.ranking == 3">Divisão Keplericana</h3>
            <h3 v-if="userStats.ranking == 4">Divisão Galiléica</h3>
            <h3 v-if="userStats.ranking == 5">Divisão Newtoniana</h3>
            <div class="division-icons">
                <div>
                    <i v-if="userStats.ranking >= 1" class="fa fa-shield" style="color: #AAC1D4" aria-hidden="true"></i>
                    <i v-else class="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div>
                    <i v-if="userStats.ranking >= 2" class="fa fa-shield" style="color: #FFC100" aria-hidden="true"></i>
                    <i v-else class="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div>
                    <i v-if="userStats.ranking >= 3" class="fa fa-shield" style="color: #0190CD" aria-hidden="true"></i>
                    <i v-else class="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div>
                    <i v-if="userStats.ranking >= 4" class="fa fa-shield" style="color: #ff2142" aria-hidden="true"></i>
                    <i v-else class="fa fa-lock" aria-hidden="true"></i>
                </div>
                <div>
                    <i v-if="userStats.ranking >= 5" class="fa fa-eercast" aria-hidden="true"></i>
                    <i v-else class="fa fa-lock" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="ranking">
            <div class="ranking-content" v-for="userFront in users" :key="userFront.name">
                <div :class="{'highlight': user.name == userFront.name, 'ranking-content': true}">
                    <div class="m-2">
                        <p style="color: #62B900" class="m-0">{{userFront.index + 1}}</p>
                    </div>
                    <div class="m-2">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                    <div class="m-2">
                        <p class="m-0">{{userFront.name}}</p>
                    </div>
                    <div class="m-2">
                        {{userFront.weekExp}} bósons
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { baseApiUrl } from '../../global'
export default {
    name: 'Classification',
    computed: mapState(['user', 'userStats']),
    data: function(){
        return {
            users: []
        }
    },
    methods: {
        getUsersByRanking(){
            const url = `${baseApiUrl}/users/ranking/${this.userStats.ranking}`
            axios.get(url).then(resp => this.users = resp.data)
        }
    },
    watch: {
        
    },
    beforeUpdate(){
        this.getUsersByRanking()
    },
    mounted(){
        this.getUsersByRanking()
    }
}
</script>

<style>
    .classification {
        border: 2px solid rgba(160, 160, 160, 0.253);
        border-radius: 10px;

        margin-top: 12px;

        width: 100%;
    }

    .division {
        border-bottom: 2px solid rgba(160, 160, 160, 0.253);

        padding: 20px;
    }

    .division h3 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    /* .ranking {
        padding: 20px;
    } */

    .division-icons {
        display: flex;
        justify-content: space-around;

        font-size: 4rem;
    }

    .ranking-content {
        display: flex;

        justify-content: flex-start;
        align-items: center;

        font-size: 1.2rem;
        font-weight: 700;

        border-radius: 5px;
    }

    .highlight {
        background-color: #007bff41;
    }
</style>