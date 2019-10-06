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
                class="aq-checkbox-group__checkbox"
                :box-position="boxPosition"
                :disabled="option.disabled || disabled"
                :key="index"
                :label="option.label || option"
                :name="option.name || name"
                :type="type"
                :value.sync="value"
                @blur="onBlur"
                @change="onChange"
                @focus="onFocus">
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

    model: {
        prop: "value",
        event: "change"
    },

    props: {
        name: String,
        options: {
            type: Array,
            required: true
        },
        boxPosition: {
            type: String,
            default: "left"
        },
        vertical: {
            type: Boolean,
            default: false
        },
        value: {
            type: Array,
            default() {
                return [];
            }
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
    mounted: function() {
        this.isCheckedByDefault(this.options);
    },
    methods: {
        isCheckedByDefault(options) {
            for (var option in options) {
                if (options[option] instanceof Object) {
                    if (options[option].checked === true) {
                        this.value.push(options[option].label);
                    }
                }
            }
        },
        onBlur(e) {
            this.$emit("blur", e);
        },
        onFocus(e) {
            this.$emit("focus", e);
        },
        onChange(e) {
            this.$emit("change", e);
        }
    }
};
</script>
