<template>
    <div class="chapter-admin">
        <b-form>
            <input type="hidden" v-model="chapter.id">
            <b-row>
                <b-col>
                    <b-form-group label="Nome:" label-for="chapter-name">
                        <b-form-input id="chapter-name" type="text"
                        v-model="chapter.name" required
                        placeholder="Informe o nome do capítulo..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Descrição:" label-for="chapter-description">
                        <VueEditor v-model="chapter.description" required
                        placeholder="Informe a descrição do capítulo..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group label="Imagem (URL):" label-for="chapter-image">
                        <b-form-input id="chapter-image" type="text"
                        v-model="chapter.imageUrl" required
                        placeholder="Informe a URL da imagem..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group v-if="mode === 'save'" 
                    label="Módulo:" label-for="module-id">
                        <b-form-select id="module-id"
                        :options="modules" v-model="chapter.moduleId"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
            <hr>
        </b-form>
        <b-table hover striped :items="chapters" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" class="mr-2" @click="loadChapter(data.item)">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadChapter(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'
import { baseApiUrl, showError } from '../../global'
import axios from 'axios'

export default {
    name: 'ChapterAdmin',
    components: {VueEditor},
    data: function(){
        return {
            mode: 'save',
            chapter: {},
            chapters: [],
            modules: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'imageUrl', label: 'Imagem (URL)'},
                {key: 'moduleId', label: 'Id do módulo'},
                {key: 'actions', label: 'Ações'},
            ]
        }
    },
    methods: {
        loadChapters(){
            const url = `${baseApiUrl}/chapters`
            axios.get(url)
                .then(resp => this.chapters = resp.data)
                .catch(showError)
        },
        loadModules(){
            const url = `${baseApiUrl}/modules`

            axios.get(url).then(resp => {
                this.modules = resp.data.map(module => {
                    return {value: module.id, text: module.name}
                })
            })
        },
        save(){
            const method = this.chapter.id ? 'put' : 'post'
            const id = this.chapter.id ? `/${this.chapter.id}` : ''
            const url = `${baseApiUrl}/chapters${id}`

            axios[method](url, this.chapter)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            const id = `${this.chapter.id}`
            const url = `${baseApiUrl}/chapters/${id}`

            axios.delete(url)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        reset(){
            this.mode = 'save'
            this.chapter = {}
            this.loadChapters()
        },
        loadChapter(chapter, mode = 'save'){
            this.mode = mode
            this.chapter = {...chapter}
        }
    },
    mounted(){
        this.loadChapters()
        this.loadModules()
    }
}
</script>

<style>

</style>