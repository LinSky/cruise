<template>
    <div class="agent_page">
        <div class="numbers">
            <div class="flex_item">
                <tw-number-card bgColor="#ff9a2a" name="Building" iconClass="icon-cog" number="5"></tw-number-card>
            </div>
            <div class="flex_item">
                <tw-number-card bgColor="#7fbc39" name="Idle" iconClass="icon-coffee" number="5"></tw-number-card>
            </div>
            <div class="flex_item">

            </div>
        </div>
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
.numbers{
    display: flex;
    .flex_item{
        flex: 1; margin-right: 30px;
        &:last-child{
            margin-right: 0;
        }
    }
}
</style>
