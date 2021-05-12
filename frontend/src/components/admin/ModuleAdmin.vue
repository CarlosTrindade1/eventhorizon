<template>
    <div class="module-admin">
        <b-form>
            <input type="hidden" id="module-id" v-model="module.id">
            <b-row>
                <b-col>
                    <b-form-group label="Nome:" label-for="module-name">
                        <b-form-input id="module-name" type="text"
                        v-model="module.name" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe o nome do módulo..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" v-if="mode == 'save'" @click="save">Salvar</b-button>
                    <b-button variant="danger" v-if="mode == 'remove'" @click="remove">Excluir</b-button>
                    <b-button class="ml-2" @click="reset">Cancelar</b-button>
                </b-col>
            </b-row>
            <hr>
        </b-form>
        <b-table hover striped :items="modules" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadModule(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadModule(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl, showError} from '../../global'

export default {
    name: 'ModuleAdmin',
    data: function(){
        return {
            mode: 'save',
            module: {},
            modules: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'numberChapters', label: 'Número de capítulos', sortable: true},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadModules(){
            const url = `${baseApiUrl}/modules`
            axios.get(url)
                .then(resp => this.modules = resp.data)
                .catch(showError)
        },
        reset(){
            this.mode = 'save'
            this.module = {}
            this.loadModules()
        },
        save(){
            const method = this.module.id ? 'put' : 'post'
            const id = this.module.id ? `/${this.module.id}` : ''
            const url = `${baseApiUrl}/modules${id}`

            axios[method](url, this.module)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            const id = this.module.id
            const url = `${baseApiUrl}/modules/${id}`

            axios.delete(url)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadModule(module, mode = 'save'){
            this.mode = mode
            this.module = {...module}
        }
    },
    mounted(){
        this.loadModules()
    }
}
</script>

<style>

</style>