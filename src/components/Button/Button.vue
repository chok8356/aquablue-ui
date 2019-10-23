<template>
    <component :href="href ? (disabled ? null : href) : null"
        class="aq-btn"
        :class="classes"
        :disabled="disabled"
        :is="href ? 'a' : 'button'"
        @click="onClick">
        <div class="aq-btn__content">
            <div v-if="icon || $slots.icon"
                class="aq-btn__icon"
                :class="classesIcon">
                <aq-icon v-if="icon"
                    :icon="icon"></aq-icon>
                <slot name="icon"
                    v-else-if="this.$slots.icon">
                </slot>
            </div>
            <span v-if="this.$slots.default"
                class="aq-btn__text">
                <slot>
                </slot>
            </span>
        </div>
        <aq-ripple-ink v-if="!disabled || loading">
        </aq-ripple-ink>
    </component>
</template>

<script>
import AqRippleInk from "./../RippleInk/RippleInk.vue";
import AqIcon from "./../Icon/Icon.vue";
export default {
    name: "AqButton",
    components: {
        AqRippleInk,
        AqIcon
    },

    props: {
        text: Boolean,
        light: Boolean,
        disabled: Boolean,
        loading: Boolean,
        round: Boolean,
        circle: Boolean,
        href: String,
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
    computed: {
        buttonSize() {
            return this.size || this.$ELEMENT.size;
        },
        classes() {
            return [
                this.type ? `aq-btn--${this.type}` : "",
                this.buttonSize ? `aq-btn--${this.buttonSize}` : "",
                {
                    "is-light": this.light,
                    "is-text": this.text,
                    "is-round": this.round,
                    "is-circle": this.circle,
                    "is-link": this.href,
                    "is-disabled": this.disabled,
                    "is-loading": this.loading
                }
            ];
        },
        classesIcon() {
            return [
                this.iconRight ? "aq-btn__icon--right" : "aq-btn__icon--left",
                {
                    "is-loading": this.loading
                }
            ];
        }
    },
    methods: {
        onClick(e) {
            this.$emit("click", e);
        }
    }
};
</script>
