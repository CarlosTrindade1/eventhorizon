<template>
    <div class="menu-learn">
        <div class="menu-1">
            <div class="item img">
                <img src="../../assets/logo-nome_pretoebranco.png" alt="Logo">
            </div>
            <div class="item link">
                <i class="fa fa-leanpub" style="font-size: 1.3rem"></i>
                <a href> APRENDER</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
    .menu-learn {
        background-color: #fff;
        grid-area: menu;
        border-bottom: 2px solid #ccc;
        padding: 5px;

        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .menu-learn .menu-1 {
        height: 100%;
        display: flex;
        align-items: center;
    }

    .menu-learn .menu-1 .img {
        height: 100%;
    }

    img {
        height: 100%;
    }

    .item {
        margin: 0px 20px;
    }

    .menu-learn .menu-1 .link a{
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        color: rgb(73, 73, 73);
    }

    .menu-learn .menu-1 .link a:hover{
        text-decoration: none;
        font-size: 1rem;
        font-weight: 600;
        color: #000;
    }
</style>