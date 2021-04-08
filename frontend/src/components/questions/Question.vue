<template>
    <div class="question">
        <div class="question-content">
            <div>
                <h1>{{questions[index].name}}</h1>

                <p>{{questions[index].content}}</p>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="response = 'A'">
                <label class="form-check-label" for="flexRadioDefault1">
                    A) 1,5
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="response = 'B'">
                <label class="form-check-label" for="flexRadioDefault2">
                    B) 2
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" @click="response = 'C'">
                <label class="form-check-label" for="flexRadioDefault3">
                    C) 1
                </label>
            </div>
        </div>
        <div class="question-button">
            <button type="button" class="btn btn-primary" @click="respond" v-if="showResponse">Responder</button>
            <button type="button" class="btn btn-success" @click="next" v-else>Next</button>
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
            questions: [],
            index: 0,
            response: null,
            showResponse: true
        }
    },
    methods: {
        getQuestions(){
            const url = `${baseApiUrl}/chapters/${this.categoryId}/questions`
            axios.get(url).then(resp => {
                this.questions = resp.data
            })
        },
        respond(){
            if (this.questions[this.index].response == this.response){
                console.log(true)
                this.showResponse = false
            } else {
                console.log(false)
                this.showResponse = false
            }
        },
        next(){
            this.index++
            this.showResponse = true
        }
    },
    mounted(){
        this.categoryId = this.$route.params.id
        this.getQuestions()
    }
}
</script>

<style>
    .question {
        display: flex;
        flex-direction: column;
    }

    .question-content {
        margin-bottom: 20px;
    }

    .question-button {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
</style>