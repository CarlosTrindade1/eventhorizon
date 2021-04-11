<template>
    <div class="home">
        <div><img src="../../assets/unnamed.png" alt="Buraco Negro"></div>
        <Auth/>
    </div>
</template>

<script>
import Auth from '../auth/Auth'

export default {
    name: 'Home',
    components: {Auth}
}
</script>

<style>
    .home {
        widows: 100vw;
        height: 100vh;

        display: flex;

        justify-content: space-around;
        align-items: center;

        background-color: #0D6EFD;
    }
</style>