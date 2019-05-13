<template>
    <div id="app">
        <h1>SSR</h1>
        <input v-model="val" />
        <p>{{ val }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val: 'Hello SSR'
        }
    }
}
</script>

<style>
    :root {
        --themecolor: red;
    }

    p {
        color: var(--themecolor);
    }
</style>
   