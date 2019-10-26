<template>
    <div class="aq-textbox">
        <div v-if="icon || $slots.icon || loading"
            class="aq-textbox__icon"
            :class="classesIcon">
            <i v-if="icon"
                :class="icon"></i>
            <slot name="icon"
                v-else-if="this.$slots.icon">
            </slot>
            <i v-else-if="loading">

            </i>
        </div>
        <div class="aq-textbox__content">
            <label class="aq-textbox__label">
                <component :class="!multiLine ? 'aq-textbox__input' : 'aq-textbox__textarea'"
                    :is="!multiLine ? 'input' : 'textarea'"
                    :ref="!multiLine ? 'input' : 'textarea'">
                </component>
            </label>

        </div>
    </div>

</template>

<script>
export default {
    name: "AqTextBox",
    props: {
        name: String,
        label: String,
        placeholder: String,
        disabled: Boolean,
        loading: Boolean,
        icon: String,
        iconRight: Boolean,
        help: String,
        error: String,
        multiLine: Boolean,
        invalid: {
            type: Boolean,
            default: false
        }
    }
};
</script>