<template>
    <a class="aq-link"
        :class="classes"
        :href="disabled ? 'javascript:void(0)' : href"
        @click="onClick">
        <div class="aq-link__content">
            <div v-if="icon || $slots.icon"
                class="aq-link__icon"
                :class="classesIcon">
                <i v-if="icon"
                    :class="icon"></i>
                <slot name="icon"
                    v-else-if="this.$slots.icon"></slot>
            </div>
            <span v-if="this.$slots.default"
                class="aq-link__text">
                <slot></slot>
            </span>
        </div>
    </a>
</template>

<script>
export default {
    name: "AqLink",

    props: {
        disabled: Boolean,
        underline: {
            type: Boolean,
            default: true
        },
        href: {
            type: String,
            required: true
        },
        icon: String,
        iconRight: Boolean,
        type: {
            type: String,
            default: "default",
            validator: function(value) {
                return (
                    [
                        "default",
                        "primary",
                        "success",
                        "error",
                        "warning",
                        "info"
                    ].indexOf(value) !== -1
                );
            }
        },
        size: {
            type: String,
            validator: function(value) {
                return ["xs", "sm", "md", "lg"].indexOf(value) !== -1;
            }
        }
    },
    methods: {
        onClick(e) {
            this.$emit("click", e);
        }
    },
    computed: {
        classes() {
            return [
                this.type ? `aq-link--${this.type}` : "",
                {
                    "is-disabled": this.disabled,
                    "is-underline": this.underline
                }
            ];
        },
        classesIcon() {
            return [
                this.iconRight ? `aq-link__icon--right` : "aq-link__icon--left"
            ];
        }
    }
};
</script>
