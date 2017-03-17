<template>
    <div class="list-item">
        <span>{{ title }}</span>
        -
        <span>{{ text }}</span>
    </div>
</template>
<script>
    export default {
        props: ['title', 'text']
    }
</script>
<style>
    .list-item {
        color: #f60;
    }    
</style>

