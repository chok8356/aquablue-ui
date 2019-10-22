<template>
    <component :href="href ? (disabled ? null : href) : null"
        class="aq-btn"
        :class="classes"
        :disabled="disabled"
        :is="href ? 'a' : 'button'"
        @click="onClick">
        <div class="aq-btn__content">
            <div v-if="icon || $slots.icon || loading"
                class="aq-btn__icon"
                :class="classesIcon">
                <i v-if="icon"
                    :class="icon"></i>
                <slot name="icon"
                    v-else-if="this.$slots.icon">
                </slot>
                <i v-else-if="loading">
                    <svg class="feather feather-loader"
                        fill="none"
                        height="14"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg">
                        <line x1="12"
                            x2="12"
                            y1="2"
                            y2="6"></line>
                        <line x1="12"
                            x2="12"
                            y1="18"
                            y2="22"></line>
                        <line x1="4.93"
                            x2="7.76"
                            y1="4.93"
                            y2="7.76"></line>
                        <line x1="16.24"
                            x2="19.07"
                            y1="16.24"
                            y2="19.07"></line>
                        <line x1="2"
                            x2="6"
                            y1="12"
                            y2="12"></line>
                        <line x1="18"
                            x2="22"
                            y1="12"
                            y2="12"></line>
                        <line x1="4.93"
                            x2="7.76"
                            y1="19.07"
                            y2="16.24"></line>
                        <line x1="16.24"
                            x2="19.07"
                            y1="7.76"
                            y2="4.93"></line>
                    </svg>
                </i>
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
export default {
    name: "AqButton",
    components: {
        AqRippleInk
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
            default: "md",
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
