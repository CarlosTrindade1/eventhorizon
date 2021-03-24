<template>
    <div class="chapter">
        <b-card :title="chapter.name" 
            img-src="https://5287aa00874a313e299d-1850966fc307ff23e1e789aeafd2476b.ssl.cf5.rackcdn.com/PostImagem/31119/fotos-do-buraco-negro_o1dqp09b1m10ss3eib9n3r1co6e.jpg"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
                        
            <p>{{chapter.description}}</p>

            <div class="chapter-button">
                <b-button href="https://www.youtube.com/watch?v=3VLPyOLC1nc&list=PLPz6TqSYQzDYuQ3WqF5plmN0rycwcYULm&index=1" target="_blank" variant="primary">Conteúdo</b-button>
                <b-button @click="question" variant="success">Começar</b-button>
            </div>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Chapter',
    props: ['chapter'],
    methods: {
        question(){
            this.$router.push({
                name: 'questions',
                params: {id: this.chapter.id}
            })
        }
    }
}
</script>

<style>
    .chapter {
        margin: 0px 10px;
        margin-bottom: 20px;
    }

    .chapter-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }
</style>