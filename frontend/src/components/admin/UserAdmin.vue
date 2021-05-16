<template>
    <div class="user-admin">
        <b-form>
            <input type="hidden" id="user-id" v-model="user.id">
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" labe-for="user-name">
                        <b-form-input type="text" id="user-name"
                            v-model="user.name" required
                            :readonly="mode == 'remove'"
                            placeholder="Informe o nome do usuário..."/>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="user-email">
                        <b-form-input type="email" id="user-email"
                            v-model="user.email" required
                            :readonly="mode == 'remove'"
                            placeholder="Informe o e-mail do usuário..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-checkbox id="user-admin" v-model="user.admin" class="mt-3 mb-3" v-show="mode === 'save'">
                Administrador?
            </b-form-checkbox>
            <b-row v-if="mode == 'save'">
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="user-password">
                        <b-form-input id="user-password" type="password" 
                            v-model="user.password" required
                            placeholder="Informe a senha do usuário..."/>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmação de senha:" label-for="user-confirm-password">
                        <b-form-input id="user-confirm-password" type="password" 
                            v-model="user.confirmPassword" required
                            placeholder="Confirme a senha do usuário..."/>
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
        <b-table hover striped :items="users" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" class="mr-2" @click="loadUser(data.item)">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadUser(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
import {baseApiUrl, showError} from '../../global'
import axios from 'axios'

export default {
    name: 'UserAdmin',
    data: function(){
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'email', label: 'E-mail', sortable: true},
                {key: 'admin', label: 'Administrador', sortable: true,
                    formatter: value => value ? 'Sim' : 'Não'},
                {key: 'actions', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadUsers(){
            const url = `${baseApiUrl}/users`
            axios.get(url).then(resp => this.users = resp.data)
        },
        reset(){
            this.mode = 'save'
            this.user = {}
            this.loadUsers()
        },
        save() {
            const method = this.user.id ? 'put' : 'post'
            const id = this.user.id ? `/${this.user.id}` : ''
            console.log(this.user)
            axios[method](`${baseApiUrl}/users${id}`, this.user)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        remove(){
            const id = this.user.id
            axios.delete(`${baseApiUrl}/users/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
        },
        loadUser(user, mode = 'save'){
            this.mode = mode
            this.user = {...user}
        }
    },
    mounted(){
        this.loadUsers()
    }
}
</script>

<style>
    
</style>