<template>
    <div class="c__l">
        <catalogItem
                v-for="product in CATALOGLIST"
                :key="product.id"
                :product="product"
        />
    </div>
</template>

<script>
    import catalogItem from '@/components/catalog/catalogItem'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: "catalogList",
        data: () => ({

        }),
        components: {
            catalogItem
        },
        computed: {
            ...mapGetters([
                'CATALOGLIST'
            ])
        },
        methods: {
            ...mapActions([
                'GET_CATALOGLIST_FROM_API'
            ])
        },
        mounted() {
            this.GET_CATALOGLIST_FROM_API()
            .then((response) => {
                if(response.data) {
                    console.log("Load")
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .c__l {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-gap: 10px;
        margin: 40px 0;
    }
</style>