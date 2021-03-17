<template>
    <div class="module">
        <hr>
        <h1>Cinemática</h1>
        <div class="module-grid">
            <Chapter/>
            <Chapter/>
            <Chapter/>
        </div>
        <hr>
    </div>
</template>

<script>
import Chapter from './Chapter'

export default {
    name: 'Module',
    components: {Chapter}
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