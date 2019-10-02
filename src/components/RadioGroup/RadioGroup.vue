<template>
	<div class="aq-radio-group"
		:class="classes"
		role="group"
		aria-label="radio-group">
		<div v-if="this.$slots.default"
			class="aq-radio-group__label-text">
			<slot />
		</div>
		<div class="aq-radio-group__items">
			<aq-radio v-for="option in options"
				:id="option[keys.id]"
				:key="option[keys.id]"
				v-model="selectedOptionValue"
				class="aq-radio-group__radio"
				:name="option[keys.name]"
				:true-value="option[keys.value] || option"
				:type="type"
				:circle-position="circlePosition"
				:disabled="option[keys.disabled]"
				:checked="isOptionCheckedByDefault(option)"
				@blur="onBlur"
				@focus="onFocus">
				{{ option[keys.label] || option }}
			</aq-radio>
		</div>
		<div v-if="hasFeedback"
			class="aq-radio-group__feedback">
			<div v-if="showError"
				class="aq-radio-group__feedback-text">
				<slot name="error">
					{{ error }}
				</slot>
			</div>

			<div v-else-if="showHelp"
				class="aq-radio-group__feedback-text">
				<slot name="help">
					{{ help }}
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
import Radio from "./../Radio/Radio.vue";

export default {
	name: "AqRadioGroup",
	components: {
		Radio
	},

	props: {
		name: String,
		options: {
			type: Array,
			required: true
		},
		value: {
			type: [Number, String],
			required: true
		},
		keys: {
			type: Object,
			default() {
				return {
					id: "id",
					class: "class",
					label: "label",
					value: "value",
					checked: "checked",
					disabled: "disabled"
				};
			}
		},
		circlePosition: {
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
			initialValue: this.value,
			selectedOptionValue: this.value
		};
	},
	computed: {
		classes() {
			return [
				`aq-radio-group--circle-position-${this.circlePosition}`,
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
	watch: {
		selectedOptionValue() {
			this.$emit("input", this.selectedOptionValue);
			this.$emit("change", this.selectedOptionValue);
		},
		value() {
			this.selectedOptionValue = this.value;
		}
	},
	created() {
		this.$emit("input", this.initialValue);
	},
	methods: {
		isOptionCheckedByDefault(option) {
			return (
				this.initialValue == option[this.keys.value] ||
				this.initialValue == option ||
				option[this.keys.checked]
			);
		},
		onBlur(e) {
			this.$emit("blur", e);
		},
		onFocus(e) {
			this.$emit("focus", e);
		}
	}
};
</script>
