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
                        <VueEditor v-model="chapter.description" 
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
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode === 'save'">Salvar</b-button>
                    <b-button variant="danger" v-if="mode === 'remove'">Excluir</b-button>
                    <b-button class="ml-2">Cancelar</b-button>
                </b-col>
            </b-row>
            <hr>
        </b-form>
        <b-table hover striped :items="chapters" :fields="fields">
            <template slot="actions" slot-scope="">
                <b-button variant="warning" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger">
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
        }
    },
    mounted(){
        this.loadChapters()
    }
}
</script>

<style>

</style>