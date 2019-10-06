<template>
    <label class="aq-checkbox"
        :class="classes">
        <div class="aq-checkbox__checkmark">
            <input class="aq-checkbox__input"
                type="checkbox"
                aria-hidden="true"
                ref="input"
                :checked="isChecked"
                :disabled="disabled"
                :name="name"
                :tabindex="tabindex"
                :value="label"
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
        falseValue: {
            default: false
        },
        value: {
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
        },
        isChecked() {
            if (this.value instanceof Array) {
                return this.value.includes(this.label);
            }
            return this.value === this.trueValue;
        }
    },
    methods: {
        onChange(e) {
            let isChecked = e.target.checked;

            if (this.value instanceof Array) {
                let newValue = [...this.value];

                if (isChecked) {
                    newValue.push(this.label);
                } else {
                    newValue.splice(newValue.indexOf(this.label), 1);
                }

                this.$emit("change", newValue);
            } else {
                this.$emit(
                    "change",
                    isChecked ? this.trueValue : this.falseValue
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
