<template>
    <div class="ranking" v-if="!hideRanking">
        <DailyTarget/>
    </div>
</template>

<script>
import DailyTarget from '../learn/DailyTarget'

export default {
    name: 'Ranking',
    components: {DailyTarget},
    props: {
        hideRanking: Boolean
    }
}
</script>

<style>
    .ranking {
        grid-area: aside;
        /* background-color: #efefef; */
        padding: 20px;
    }
</style>