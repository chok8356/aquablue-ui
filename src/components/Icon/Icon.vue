<template>
    <component :is="svg ? 'svg' : 'i'"
        :class="classes">
        <use v-if="svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            :xlink:href="`#${icon}`" />
    </component>

</template>

<script>
export default {
    name: "AqIcon",
    props: {
        icon: String,
        iconSet: String,
        svg: Boolean
    },
    computed: {
        getIconSet() {
            return this.iconSet || this.$ICON_SET;
        },
        classes() {
            return [
                "aq-icon",
                this.svg ? "aq-icon--svg" : "aq-icon--default",
                this.getIconSet,
                this.icon
            ];
        }
    }
};
</script>