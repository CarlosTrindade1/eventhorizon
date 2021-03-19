<template>
    <div class="learn">
        <div class="grid-learn">
            <Module/>
        </div>
    </div>
</template>

<script>
import Module from './Module'
import {baseApiUrl} from '../../global'
import axios from 'axios'

export default {
    name: 'Learn',
    components: {Module},
    data: function(){
        return {
            modules: []
        }
    },
    methods: {
        getModules(){
            const url = `${baseApiUrl}/modules`

            axios.get(url).then(resp => {
                const modules = resp.data
                console.log(modules)
            })
        }
    },
    mounted(){
        this.getModules()
    }
}
</script>

<style>
    .learn {
        display: flex;
        justify-content: center;
    }
</style>