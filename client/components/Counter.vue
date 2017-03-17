<template>
    <div class="counter-wrapper">
        <div class="counter">{{ count }}</div>
        <button @click="$store.commit('INCREMENT')">INCREMENT</button>
        <button @click="$store.commit('DECREMENT')">DECREMENT</button>
    </div>
</template>
<script>
    export default {
        computed: {
            count () {
                return this.$store.state.counter.count
            }
        }
    }
</script>
<style>
    .counter-wrapper {
        margin-bottom: 40px;
    }
    .counter {
        cursor: pointer;
        margin: 100px auto 20px auto;
        border-radius: 3px;
        width: 200px;
        height: 200px;
        text-align: center;
        line-height: 200px;
        font-size: 5rem;
        background-color: #f0f0f0;
        user-select: none;
    }
</style>
