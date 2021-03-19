<template>
    <div class="module">
        <hr>
        <h1>{{module.name}}</h1>
        <p>{{module.description}}</p>
        <div class="module-grid">
            <div :v-for="chapter in module.chapters" :key="chapter.id">
                <Chapter :chapter="chapter"/>
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
import Chapter from './Chapter'

export default {
    name: 'Module',
    components: {Chapter},
    props: ['module']
}
</script>

<style>
    .module h1{
        text-align: center;
        margin-bottom: 30px;
    }

    .module-grid {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
    }
</style>