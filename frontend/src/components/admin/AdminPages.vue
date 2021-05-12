<template>
    <div class="dashboard">
        <div class="page-title">
            <h1>Título</h1>
        </div>
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Usuários" active>
                        <UserAdmin/>
                    </b-tab>
                    <b-tab title="Módulos">
                        Hello world!
                    </b-tab>
                    <b-tab title="Capítulos">
                        Hello world!
                    </b-tab>
                    <b-tab title="Questões">
                        Hello world!
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import UserAdmin from './UserAdmin'

export default {
    name: 'Dashboard',
    components: {UserAdmin}
}
</script>

<style>
    .dashboard {
        padding: 20px;
    }
</style>