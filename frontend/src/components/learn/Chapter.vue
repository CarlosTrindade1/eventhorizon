<template>
    <div class="chapter">
        <b-card :title="chapter.name" 
            img-src="https://conteudos.xpi.com.br/wp-content/uploads/2020/10/fundo-geometrico-de-tecnologia_29971-339.jpg"
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

        box-shadow: 0 10px 10px rgb(126 126 126 / 30%);
        transition: all .3s ease;
    }

    .chapter:hover {
        margin-top: 5px;
        box-shadow: none;
        cursor: pointer;
    }

    .chapter-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
    }
</style>