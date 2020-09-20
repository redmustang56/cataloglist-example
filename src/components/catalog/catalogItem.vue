<template>
    <div class="c__i">
        <a href="" class="c__i-img">
            <img :src="require('../../assets/img/catalog/' + product.image)" alt="">
        </a>
        <div class="c__i-inf">
            <div class="c__i-name">{{ product.name }}</div>
            <div class="c__i-price">{{ product.price }}</div>
            <button class="btn">Add Cart</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "catalogItem",
        props: {
            product: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data: () => ({

        })
    }
</script>

<style lang="scss" scoped>
    .c__i {
        position: relative;
        padding: 12px 12px 19px;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        &-img {
            position: relative;
            display: flex;
            max-width: 364px;
            margin: 0 -2px 20px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &-name {
            margin-bottom: 12px;
            font-size: 16px;
            line-height: 1.4;
            overflow: hidden;
        }
        &-price {
            font-size: 24px;
            color: #c4113f;
            margin-bottom: 11px;
        }
    }
    .btn {
        color: #fff;
        font-size: 16px;
        line-height: 16px;
        border: 0;
        border-radius: 90px;
        background-color: #520f54;
        cursor: pointer;
        transition: background-color .3s,border-color .3s,color .3s,box-shadow .3s;
    }
</style>