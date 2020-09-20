<template>
    <div class="container">
        <h1>CatalogList Example</h1>
        <catalogList />
    </div>
</template>

<script>
    import catalogList from '@/components/catalog/catalogList'

    export default {
        name: "MainPage",
        components: {
            catalogList
        }
    }
</script>

<style scoped>
    .container {
        max-width:  1380px;
        margin: 0 auto;
        padding: 40px 20px;
        background: #f4f4f6;
    }
</style>