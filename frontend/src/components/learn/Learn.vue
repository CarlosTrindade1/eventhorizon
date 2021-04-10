<template>
    <div class="learn">
        <div class="grid-learn" >
            <div v-for="module in modulesWithChapters" :key="module.id">
                <Module :module="module"/>
            </div>
        </div>
    </div>
</template>

<script>
import Module from './Module'
import {baseApiUrl} from '../../global'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'Learn',
    components: {Module},
    computed: mapState(['userStats']),
    data: function(){
        return {
            modulesWithChapters: []
        }
    },
    methods: {
        getModulesWithChapters(){
            const url = `${baseApiUrl}/modulesWithChapters`
            axios.get(url).then(resp => this.modulesWithChapters = resp.data)
        }
    },
    mounted(){
        this.getModulesWithChapters()
    }
}
</script>

<style>
    .learn {
        display: flex;
        justify-content: center;
    }
</style>