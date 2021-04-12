<template>
    <div class="ranking" v-if="!hideRanking">
        <DailyTarget class="mb-3"/>
        <Classification class="mt-5"/>
    </div>
</template>

<script>
import DailyTarget from '../learn/DailyTarget'
import Classification from '../learn/Classification'

export default {
    name: 'Ranking',
    components: {DailyTarget, Classification},
    props: {
        hideRanking: Boolean
    }
}
</script>

<style>
    .ranking {
        grid-area: aside;
        padding: 20px;
    }
</style>