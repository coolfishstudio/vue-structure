<template>
    <div class="testone">
        <h1>{{ msg }}</h1>
        <h2>app > pages > test</h2>
        <list title="我是List组件的标题" text="我是List组件的内容"></list>
        <counter></counter>
    </div>
</template>

<script>
import { List, Counter } from '@/components'
export default {
    name: 'test',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        List,
        Counter
    }
}
</script>

<style scoped>
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
