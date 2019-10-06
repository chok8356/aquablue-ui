<template>
    <label class="aq-checkbox"
        :class="classes">
        <div class="aq-checkbox__checkmark">
            <input class="aq-checkbox__input"
                type="checkbox"
                aria-hidden="true"
                ref="input"
                :checked.prop="isChecked"
                :disabled="disabled"
                :name="name"
                :tabindex="tabindex"
                :value="value"
                @blur="onBlur"
                @change="onChange"
                @click="onClick"
                @focus="onFocus">
        </div>
        <div v-if="label || this.$slots.default"
            class="aq-checkbox__text">
            <slot>{{ label }}</slot>
        </div>
    </label>
</template>

<script>
export default {
    name: "AqCheckbox",

    props: {
        name: String,
        label: String,
        tabindex: [String, Number],
        trueValue: {
            default: true
        },
        falseValue: {
            default: false
        },
        value: {
            required: true
        },
        checked: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        boxPosition: {
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
    data() {
        return {
            isChecked: this.value || this.checked
        };
    },
    computed: {
        classes() {
            return [
                this.type ? `aq-checkbox--${this.type}` : "",
                {
                    "is-checked": this.isChecked,
                    "is-disabled": this.disabled
                },
                `aq-checkbox--box-position-${this.boxPosition}`
            ];
        }
    },
    watch: {
        value() {
            this.isChecked = this.value;
        }
    },
    created() {
        this.$emit("input", this.isChecked ? this.trueValue : this.falseValue);
    },
    methods: {
        onChange(e) {
            const isChecked = e.target.checked;
            if (!this.disabled) {
                this.$emit(
                    "input",
                    isChecked ? this.trueValue : this.falseValue,
                    e
                );
                this.$emit(
                    "change",
                    isChecked ? this.trueValue : this.falseValue,
                    e
                );
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
