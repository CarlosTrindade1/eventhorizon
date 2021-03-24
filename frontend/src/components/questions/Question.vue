<template>
    <div class="question">
        <div v-for="question in questions" :key="question.id">
            <h1>{{question.name}}</h1>

            <p>{{question.content}}</p>
            <p>{{question.response}}</p>
            <p>{{question.level}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl} from '../../global'

export default {
    name: 'Question',
    data: function(){
        return {
            categoryId: 0,
            questions: []
        }
    },
    methods: {
        getQuestions(){
            const url = `${baseApiUrl}/chapters/${this.categoryId}/questions`
            axios.get(url).then(resp => {
                this.questions = resp.data
            })
        }
    },
    mounted(){
        this.categoryId = this.$route.params.id
        this.getQuestions()
    }
}
</script>

<style>

</style>