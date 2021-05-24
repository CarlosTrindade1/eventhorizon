<template>
    <div class="dashboard">
        <div class="stats">
            <i class="fa fa-users" aria-hidden="true"></i>
            {{count.countUsers.count}}
        </div>
        <div class="stats">
            <i class="fa fa-inbox" aria-hidden="true"></i>
            {{count.countModules.count}}
        </div>
        <div class="stats">
            <i class="fa fa-folder" aria-hidden="true"></i>
            {{count.countChapters.count}}
        </div>
        <div class="stats">
            <i class="fa fa-list-ol" aria-hidden="true"></i>
            {{count.countQuestions.count}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
    name: 'Dashboard',
    data: function(){
        return {
            count: {}
        }
    },
    methods: {
        getCounters(){
            const url = `${baseApiUrl}/stats`

            axios.get(url).then(resp => this.count = resp.data)
        }
    },
    mounted(){
        this.getCounters()
    }
}
</script>

<style>
    .dashboard {
        padding: 20px;

        display: grid;

        grid-template-columns: 25% 25% 25% 25%;
    }

    .stats {
        font-size: 2rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        border: 2px solid #E7E7E7;
        border-radius: 5px;

        padding: 10px;
        margin: 10px;
    }

    /* Responsividade */

    @media (max-width: 800px){
        .dashboard {
            grid-template-columns: 50% 50%;

        }
    }

    @media (max-width: 420px){
        .dashboard {
            grid-template-columns: 100%;
        }
    }
</style>