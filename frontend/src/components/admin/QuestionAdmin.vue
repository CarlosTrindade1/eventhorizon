<template>
    <div class="question-admin">
        <b-form>
            <input type="hidden" v-model="question.id">
            <b-form-group label="Nome:" label-for="question-name">
                <b-form-input type="text" id="question-name"
                v-model="question.name" required
                :readonly="mode == 'remove'"
                placeholder="Informe o nome da questão..."/>
            </b-form-group>
            <b-form-group label="Texto:" label-for="question-content"
            v-if="mode == 'save'">
                <VueEditor v-model="question.content"
                placeholder="Informe o texto da questão..."/>
            </b-form-group>
            <b-form-group label="Resposta:" label-for="question-response"
            v-if="mode == 'save'">
                <b-form-input type="text" id="question-response"
                v-model="question.response" required
                placeholder="Informe a resposta da questão..."/>
            </b-form-group>
            <b-form-group label="Nível:" label-for="question-level"
            v-if="mode == 'save'">
                <b-form-input type="number" id="question-level"
                v-model="question.level" required max="4"
                placeholder="Informe o nível da questão..."/>
            </b-form-group>
            <b-form-group v-if="mode == 'save'">
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Alternativa A:" label-for="question-choiceA">
                            <b-form-input type="text" id="question-choiceA"
                            v-model="question.choiceA"
                            placeholder="Informe a alternativa A..."/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Alternativa B:" label-for="question-choiceB">
                            <b-form-input type="text" id="question-choiceB"
                            v-model="question.choiceB"
                            placeholder="Informe a alternativa B..."/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="6" sm="12">
                        <b-form-group label="Alternativa C:" label-for="question-choiceC">
                            <b-form-input type="text" id="question-choiceC"
                            v-model="question.choiceC"
                            placeholder="Informe a alternativa C..."/>
                        </b-form-group>
                    </b-col>
                    <b-col md="6" sm="12">
                        <b-form-group label="Alternativa D:" label-for="question-choiceD">
                            <b-form-input type="text" id="question-choiceD"
                            v-model="question.choiceD"
                            placeholder="Informe a alternativa D..."/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-form-group label="Alternativa E:" label-for="question-choiceE">
                    <b-form-input type="text" id="question-choiceE"
                    v-model="question.choiceE"
                    placeholder="Informe a alternativa E..."/>
                </b-form-group>
            </b-form-group>
            <b-form-group label="Capítulo:" label-for="question-chapterId"
            v-if="mode == 'save'">
                <b-form-select id="question-chapterId"
                :options="chapters" v-model="question.chapterId"/>
            </b-form-group>
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
            <hr>
        </b-form>
        <b-table hover striped :items="questions" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" class="mr-2" @click="loadQuestion(data.item)">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadQuestion(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'
import {baseApiUrl, showError} from '../../global'
import axios from 'axios'

export default {
    name: 'QuestionAdmin',
    components: {VueEditor},
    data: function(){
        return {
            mode: 'save',
            question: {},
            questions: [],
            chapters: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'chapterId', label: 'Id do Capítulo'},
                {key: 'response', label: 'Resposta'},
                {key: 'level', label: 'Nível'},
                {key: 'actions', label: 'Ações'},
            ]
        }
    },
    methods: {
        loadQuestions(){
            const url = `${baseApiUrl}/questions`

            axios.get(url)
                .then(resp => this.questions = resp.data)
                .catch(showError)
        },
        loadChapters(){
            const url = `${baseApiUrl}/chapters`

            axios.get(url)
                .then(resp => {
                    this.chapters = resp.data.map(chapter => {
                        return {value: chapter.id, text: chapter.name}
                    })
                })
        },
        save(){
            const method = this.question.id ? 'put' : 'post'
            const id = this.question.id ? `/${this.question.id}` : ''
            const url = `${baseApiUrl}/questions${id}`

            axios[method](url, this.question)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            const url = `${baseApiUrl}/questions/${this.question.id}`

            axios.delete(url)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        reset(){
            this.mode = 'save'
            this.question = {}
            this.loadQuestions()
        },
        loadQuestion(question, mode = 'save'){
            this.mode = mode
            const url = `${baseApiUrl}/questions/${question.id}`

            axios.get(url)
                .then(resp => this.question = resp.data)
        }
    },
    mounted(){
        this.loadQuestions()
        this.loadChapters()
    }
}
</script>

<style>

</style>