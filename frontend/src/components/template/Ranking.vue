<template>
    <div class="ranking" v-if="!hideRanking">
        Ranking
    </div>
</template>

<script>
export default {
    name: 'Ranking',
    props: {
        hideRanking: Boolean
    }
}
</script>

<style>
    .ranking {
        grid-area: aside;
        background-color: #efefef;
        padding: 20px;
    }
</style>