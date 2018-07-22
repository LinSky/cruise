<template>
    <div class="agent_page">
        <button type="button" name="button" v-pop="500">click</button>
        <button type="button" name="button" v-pop="300">click</button>
    </div>
</template>

<script>
export default {
    created () {

    },
    methods: {
        clickHandler () {
            this.$popover({top: 100, left: 100, width: 50})
        }
    }
}
</script>

<style lang="less" scoped>

</style>
