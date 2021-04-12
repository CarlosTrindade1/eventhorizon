<template>
    <div class="classification">
        <div class="division">
            <h1>Divisão Quântica</h1>
            <div class="division-icons">
                <div>
                    <i class="fa fa-shield" style="color: #AAC1D4" aria-hidden="true"></i>
                </div>
                <div>
                    <i class="fa fa-shield" style="color: #FFC100" aria-hidden="true"></i>
                </div>
                <div>
                    <i class="fa fa-shield" style="color: #0190CD" aria-hidden="true"></i>
                </div>
                <div>
                    <i class="fa fa-shield" style="color: #ff2142" aria-hidden="true"></i>
                </div>
                <div>
                    <i class="fa fa-eercast" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="ranking">
            <div class="ranking-content">
                <div class="mx-3">
                    <p style="color: #62B900">1</p>
                </div>
                <div class="mx-3">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <div class="mx-3">
                    <p>Carlos Trindade</p>
                </div>
                <div class="mx-3">
                    20 XP
                </div>
            </div>
            <div class="ranking-content">
                <div class="mx-3">
                    <p style="color: #62B900">2</p>
                </div>
                <div class="mx-3">
                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <div class="mx-3">
                    <p>Eduardo</p>
                </div>
                <div class="mx-3">
                    10 XP
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Classification'
}
</script>

<style>
    .classification {
        border: 2px solid rgba(160, 160, 160, 0.253);
        border-radius: 10px;

        /* padding: 20px; */
        margin-top: 12px;

        width: 100%;
    }

    .division {
        border-bottom: 2px solid rgba(160, 160, 160, 0.253);

        padding: 20px;
    }

    .division h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }

    .ranking {
        padding: 20px;
    }

    .division-icons {
        display: flex;
        justify-content: space-around;

        font-size: 4rem;
    }

    .ranking-content {
        display: flex;

        justify-content: flex-start;

        font-size: 1.2rem;
        font-weight: 700;
    }
</style>