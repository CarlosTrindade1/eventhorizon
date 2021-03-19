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

            <b-button href variant="primary">Button</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Chapter',
    props: ['chapter']
}
</script>

<style>
    .chapter {
        margin: 0px 10px;
        margin-bottom: 20px;
    }
</style>