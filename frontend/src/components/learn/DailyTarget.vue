<template>
    <div class="daily-target">
        <div class="header-daily-target">
            <h1>Progresso em XP</h1>
            <Counter
                :year="2021"
                :month="5"
                :date="31"
                :hour="0"
                :minute="0"
                :second="0"
                :millisecond="0"/>     
        </div>
        <div class="daily-target-flex">
            <div v-if="this.userStats.valueDailyTarget >= 50" class="daily-target-icon-gold mr-3">
                <i class="fa fa-trophy"></i>
            </div>
            <div v-else class="daily-target-icon-silver mr-3">
                <i class="fa fa-trophy"></i>
            </div>
            <div style="flex-grow: 2;" class="ml-2">
                <div><p>Meta diária</p></div>
                <div class="progress-flex">
                    <div class="progress mb-3">
                        <div v-bind:class="{'progress-bar': true, 
                        'bg-primary': this.userStats.valueDailyTarget < 50,
                        'bg-warning': this.userStats.valueDailyTarget >= 50}" 
                        role="progressbar" v-bind:style="{width: this.userStats.valueDailyTarget * 2 + '%'}" 
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p v-if="this.userStats.valueDailyTarget <= 50">
                        {{this.userStats.valueDailyTarget}}/{{this.userStats.dailyTarget}} 
                        <span style="font-style: italic">bósons</span>
                    </p>
                    <p v-else>50/50 bósons</p>
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Counter from '../counters/Counter.vue'

export default {
    name: 'DailyTarget',
    components: {Counter},
    computed: mapState(['userStats'])
}
</script>

<style>
    .daily-target {
        border: 2px solid rgba(160, 160, 160, 0.253);
        border-radius: 10px;

        padding: 20px;
        margin-top: 12px;

        width: 100%;
    }

    .daily-target h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .daily-target-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .daily-target-icon-silver {
        font-size: 3.5rem;
        color: rgb(134, 134, 134);
    }

    .daily-target-icon-gold {
        font-size: 3.5rem;
        color: rgb(247, 203, 10);
    }

    .header-daily-target {
        display: flex;
        justify-content: space-between;
    }

</style>