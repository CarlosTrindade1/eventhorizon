<template>
    <div class="question">
        <div class="progress mb-3">
            <div class="progress-bar bg-success" role="progressbar" v-bind:style="{width: progress+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="question-content">
            <div>
                <h1>{{questions[index].name}}</h1>

                <p>{{questions[index].content}}</p>
            </div>
            <div class="form-check" v-if="questions[index].choiceA">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" @click="response = 'A'">
                <label class="form-check-label" for="flexRadioDefault1">
                    A) {{questions[index].choiceA}}
                </label>
            </div>
            <div class="form-check" v-if="questions[index].choiceB">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" @click="response = 'B'">
                <label class="form-check-label" for="flexRadioDefault2">
                    B) {{questions[index].choiceB}}
                </label>
            </div>
            <div class="form-check" v-if="questions[index].choiceC">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" @click="response = 'C'">
                <label class="form-check-label" for="flexRadioDefault3">
                    C) {{questions[index].choiceC}}
                </label>
            </div>
            <div class="form-check" v-if="questions[index].choiceD">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" @click="response = 'D'">
                <label class="form-check-label" for="flexRadioDefault4">
                    D) {{questions[index].choiceD}}
                </label>
            </div>
            <div class="form-check" v-if="questions[index].choiceE">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" @click="response = 'E'">
                <label class="form-check-label" for="flexRadioDefault5">
                    E) {{questions[index].choiceE}}
                </label>
            </div>
        </div>
        <div class="question-button">
            <button type="button" class="button-response bg-primary" @click="respond" v-if="showResponse">Responder</button>
            <button type="button" v-bind:class="{'button-response': true, 'bg-danger': !correct, 'bg-success': correct}" @click="next" v-else>Next</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl, showError, showSuccess} from '../../global'
import { mapState } from 'vuex'

export default {
    name: 'Question',
    data: function(){
        return {
            categoryId: 0,
            questions: [],
            index: 0,
            response: null,
            showResponse: true,
            progress: 0,
            correct: false
        }
    },
    computed: mapState(['userStats']),
    methods: {
        getQuestions(){
            const url = `${baseApiUrl}/chapters/${this.categoryId}/questions`
            axios.get(url).then(resp => {
                this.questions = resp.data
            })
        },
        respond(){
            if (this.questions[this.index].response == this.response){
                this.showResponse = false
                this.correct = true
                this.progress = this.progress + 100 / this.questions.length
                showSuccess('Reposta correta!')
                this.$store.commit('incrementValueDailyTarget')

            } else {
                this.addToEnd(this.questions[this.index], this.index)
                showError('Resposta incorreta!')
            }
        },
        next(){
            if (this.index < this.questions.length - 1){
                this.index++
                this.showResponse = true
                this.correct = false
            }
        },
        addToEnd(question, index){
            let aux = question
            this.questions.splice(index, 1)
            this.questions.push(aux)
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
        font-size: 1.2rem;
    }

    .question-button {
        display: flex;
        align-items: stretch;
        flex-direction: column;
    }

    .form-check-input {
        height: 25px;
        width: 25px;
    }

    .form-check-label {
        margin-left: 15px;
    }

    .form-check {
        margin: 20px 0px;
    }

    .button-response {

        padding: 10px;
        border: none;
        border-radius: 25px;

        color: #fff;
        font-size: 1.2rem;
    }

</style>