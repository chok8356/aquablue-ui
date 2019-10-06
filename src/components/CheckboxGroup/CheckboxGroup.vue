<template>
    <div class="aq-checkbox-group"
        :class="classes"
        role="group"
        aria-label="checkbox-group">
        <div v-if="this.$slots.default"
            class="aq-checkbox-group__label-text">
            <slot></slot>
        </div>
        <div class="aq-checkbox-group__items">
            <aq-checkbox v-for="(option, index) in options"
                v-model="checkboxValues[index]"
                class="aq-checkbox-group__checkbox"
                :box-position="boxPosition"
                :checked="isOptionCheckedByDefault(option)"
                :disabled="disabled || option[keys.disabled]"
                :id="option[keys.id]"
                :key="option[keys.id]"
                :name="name || option[keys.name]"
                :type="type"
                @blur="onBlur"
                @change="onChange(arguments, option)"
                @focus="onFocus">
                {{ option[keys.label] || option }}
            </aq-checkbox>
        </div>
        <div v-if="hasFeedback"
            class="aq-checkbox-group__feedback">
            <div v-if="showError"
                class="aq-checkbox-group__feedback-text">
                <slot name="error">
                    {{ error }}
                </slot>
            </div>

            <div class="aq-checkbox-group__feedback-text"
                v-else-if="showHelp">
                <slot name="help">
                    {{ help }}
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AqCheckboxGroup",

    props: {
        name: String,
        options: {
            type: Array,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        keys: {
            type: Object,
            default() {
                return {
                    id: "id",
                    name: "name",
                    class: "class",
                    label: "label",
                    value: "value",
                    disabled: "disabled"
                };
            }
        },
        boxPosition: {
            type: String,
            default: "left"
        },
        vertical: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
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
    data: function() {
        return {
            checkboxValues: [],
            initialValue: JSON.parse(JSON.stringify(this.value))
        };
    },
    computed: {
        classes() {
            return [
                `aq-checkbox-group--box-position-${this.boxPosition}`,
                { "is-invalid": this.invalid },
                { "is-vertical": this.vertical }
            ];
        },

        hasFeedback() {
            return this.showError || this.showHelp;
        },

        showError() {
            return (
                this.invalid &&
                (Boolean(this.error) || Boolean(this.$slots.error))
            );
        },

        showHelp() {
            return Boolean(this.help) || Boolean(this.$slots.help);
        }
    },
    created() {
        this.options.forEach((option, index) => {
            this.checkboxValues[index] = this.isOptionCheckedByDefault(option);
        });
    },
    methods: {
        isOptionCheckedByDefault(option) {
            return this.initialValue.includes(
                option[this.keys.value] || option
            );
        },
        onBlur(e) {
            this.$emit("blur", e);
        },
        onFocus(e) {
            this.$emit("focus", e);
        },
        onChange(e, option) {
            let value = [];
            const optionValue = option[this.keys.value] || option;

            if (this.value.includes(optionValue)) {
                this.value.splice(this.value.indexOf(optionValue), 1);
                value = this.value;
            } else {
                value = this.value.concat(optionValue);
            }

            this.$emit("input", value);
            this.$emit("change", value, e);
        }
    }
};
</script>
