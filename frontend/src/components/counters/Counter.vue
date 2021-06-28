<template>
    <div>
        <section class="flex text-6xl justify-center content-center">
            <div class="days mr-2 relative">
                {{displayHours}}:
                {{displayMinutes}}:
                {{displaySeconds}}
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data: function(){
        return {
            displayDays: 0,
            displayHours: 0,
            displayMinutes: 0,
            displaySeconds: 0
        }
    },
    computed: {
        _seconds: () => 1000,
        _minutes(){
            return this._seconds * 60
        },
        _hours(){
            return this._minutes * 60
        },
        _days(){
            return this._hours * 24
        }
    },
    methods: {
        showRemaining(){
            const timer = setInterval(() => {
                const now = new Date()
                const end = new Date(2021, 5, 29, 10, 10, 10, 10)
                const distance = end.getTime() - now.getTime()

                if (distance < 0){
                    clearInterval(timer)
                    return
                }

                const days = Math.floor(distance / this._days)
                const hours = Math.floor((distance % this._days) / this._hours)
                const minutes = Math.floor((distance % this._hours) / this._minutes)
                const seconds = Math.floor((distance % this._minutes) / this._seconds)

                this.displayMinutes = minutes < 10 ? "0" + minutes : minutes
                this.displaySeconds = seconds < 10 ? "0" + seconds : seconds
                this.displayHours = hours < 10 ? "0" + hours : hours
                this.displayDays = days < 10 ? "0" + days : days

            }, 1000)
        }
    },
    mounted(){
        this.showRemaining()
    }
}
</script>

<style>

</style>