<template>
    <div class="ranking">
        <DailyTarget/>
        <Classification/>
    </div>
</template>

<script>
import DailyTarget from '../learn/DailyTarget'
import Classification from '../learn/Classification'

export default {
    name: 'Ranking',
    components: {DailyTarget, Classification}
}
</script>

<style>

</style>