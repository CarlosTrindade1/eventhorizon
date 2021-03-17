<template>
    <div class="footer">
        <span>Copyright <strong>Event Horizon</strong> © 2021</span>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #ddd;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
</style>