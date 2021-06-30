<template>
    <div class="classification">
        <div class="division">
            <div class="header-daily-target">
                <h3 v-if="userStats.ranking == 0">Unranked</h3>
                <h3 v-if="userStats.ranking == 1">Divisão Aristotélica</h3>
                <h3 v-if="userStats.ranking == 2">Divisão Copernicana</h3>
                <h3 v-if="userStats.ranking == 3">Divisão Keplericana</h3>
                <h3 v-if="userStats.ranking == 4">Divisão Galiléica</h3>
                <h3 v-if="userStats.ranking == 5">Divisão Newtoniana</h3>
                <Counter
                :year="2021"
                :month="6"
                :date="4"
                :hour="0"
                :minute="0"
                :second="0"
                :millisecond="0"
                />
            </div>
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
            <div class="" v-for="userFront in users" :key="userFront.name">
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
                        {{userFront.weekExp}} <i>bósons</i>
                    </div>
                </div>
                <div v-show="userFront == users[4]" class="promote-bar">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    <p class="mb-0 mx-2">ZONA DE PROMOÇÃO</p>
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { baseApiUrl } from '../../global'
import Counter from '../counters/Counter.vue'

export default {
    name: 'Classification',
    components: {Counter},
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

    .promote-bar {
        vertical-align: center;
        color: #62B900;
        font-weight: 900;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        padding: 10px;

        background-color: #ffffff;
    }

</style>