<template>
    <div class="learn">
        <div class="grid-learn">
            <Module/>
        </div>
    </div>
</template>

<script>
import Module from './Module'

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
            // Codificar
            console.log('Buscando os módulos...')
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