<template>
    <div :class="classes">
        <div v-if="icon || $slots.icon"
            class="aq-textbox__icon"
            :class="classesIcon">
            <aq-icon v-if="icon"
                :icon="icon"></aq-icon>
            <slot name="icon"
                v-else-if="this.$slots.icon">
            </slot>
        </div>
        <div class="aq-textbox__content">
            <label class="aq-textbox__label">
                <input v-if="!textarea"
                    :class="'aq-textbox__input'"
                    ref="input"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :required="required"
                    :tabindex="tabindex"
                    :value="value"
                    @blur="onBlur"
                    @change="onChange"
                    @focus="onFocus"
                    @input="updateValue($event.target.value)"
                    @keydown="onKeydown"
                    @keydown.enter="onKeydownEnter">
                <textarea v-else
                    :class="'aq-textbox__textarea'"
                    ref="textarea"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :required="required"
                    :tabindex="tabindex"
                    :value="value"
                    @blur="onBlur"
                    @change="onChange"
                    @focus="onFocus"
                    @input="updateValue($event.target.value)"
                    @keydown="onKeydown"
                    @keydown.enter="onKeydownEnter"></textarea>
                <div v-if="label || $slots.default"
                    :class="classesLabel">
                    <slot>{{ label }}</slot>
                </div>
            </label>
            <div v-if="hasFeedback"
                class="aq-textbox__feedback">
                <div v-if="showError"
                    class="aq-textbox__feedback-text">
                    <slot name="error">{{ error }}</slot>
                </div>

                <div class="aq-textbox__feedback-text"
                    v-else-if="showHelp">
                    <slot name="help">{{ help }}</slot>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: "AqTextBox",
    props: {
        name: String,
        label: {
            type: String,
            default: ""
        },
        value: {
            type: [String, Number],
            default: ""
        },
        placeholder: String,
        tabindex: [String, Number],
        disabled: Boolean,
        loading: Boolean,
        readonly: Boolean,
        icon: String,
        iconRight: Boolean,
        floatingLabel: {
            type: Boolean,
            defaul: false
        },
        required: {
            type: Boolean,
            default: false
        },
        help: String,
        error: String,
        textarea: Boolean,
        invalid: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            validator: function(value) {
                return ["xs", "sm", "md", "lg"].indexOf(value) !== -1;
            }
        }
    },
    data() {
        return {
            isActive: false
        };
    },
    computed: {
        classes() {
            return [
                "aq-textbox",
                this.textBoxSize ? `aq-textbox--${this.textBoxSize}` : "",
                {
                    "is-invalid": this.invalid,
                    "is-active": this.isActive
                }
            ];
        },

        classesLabel() {
            return [
                "aq-textbox__label-text",
                {
                    "aq-textbox__label-text--floating-label": this
                        .hasfloatingLabel
                }
            ];
        },

        textBoxSize() {
            return this.size || this.$ELEMENT.size;
        },

        valueLength() {
            return this.value ? this.value.length : 0;
        },

        hasLabel() {
            return Boolean(this.label) || Boolean(this.$slots.default);
        },

        hasfloatingLabel() {
            return (
                this.valueLength > 0 ||
                this.isActive ||
                this.floatingLabel ||
                this.placeholder
            );
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
    methods: {
        updateValue(value) {
            this.$emit("input", value);
        },

        onChange(e) {
            this.$emit("change", e);
        },

        onFocus(e) {
            this.isActive = true;
            this.$emit("focus", e);
        },

        onBlur(e) {
            this.isActive = false;
            this.$emit("blur", e);
        },

        onKeydown(e) {
            this.$emit("keydown", e);
        },

        onKeydownEnter(e) {
            this.$emit("keydown-enter", e);
        }
    }
};
</script>