<template>
    <label class="aq-radio"
        :class="classes">
        <div class="aq-radio__circle">
            <input class="aq-radio__input"
                type="radio"
                aria-hidden="true"
                ref="input"
                :checked="isChecked"
                :name="name"
                :tabindex="tabindex"
                :value="trueValue"
                @blur="onBlur"
                @change="onChange"
                @click="onClick"
                @focus="onFocus">
        </div>
        <div v-if="label || this.$slots.default"
            class="aq-radio__text">
            <slot>{{label}}</slot>
        </div>
    </label>
</template>

<script>
export default {
    name: "AqRadio",

    model: {
        prop: "value",
        event: "change"
    },

    props: {
        name: String,
        label: String,
        tabindex: [String, Number],
        trueValue: {
            default: true
        },
        value: {
            default: false
        },
        disabled: Boolean,
        circlePosition: {
            type: String,
            default: "left"
        },
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
        }
    },
    computed: {
        classes() {
            return [
                this.type ? `aq-radio--${this.type}` : "",
                {
                    "is-checked": this.isChecked,
                    "is-disabled": this.disabled
                },
                `aq-radio--circle-position-${this.circlePosition}`
            ];
        },
        isChecked() {
            // return (
            //     String(this.value).length > 0 &&
            //     (this.value == this.trueValue || this.value == this.label)
            // );
            if (this.value instanceof Array) {
                return this.value.includes(this.label);
            }
            return this.value === this.trueValue || this.value === this.label;
        }
    },
    methods: {
        onChange(e) {
            if (!this.disabled && this.label) {
                this.$emit("change", this.label, e);
            } else if (!this.disabled) {
                this.$emit("change", this.trueValue, e);
            }
        },
        onClick(e) {
            this.$emit("click", e);
        },
        onFocus(e) {
            this.$emit("focus", e);
        },
        onBlur(e) {
            this.$emit("blur", e);
        }
    }
};
</script>