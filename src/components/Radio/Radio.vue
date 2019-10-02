<template>
	<label class="aq-radio"
		:class="classes">
		<div class="aq-radio__circle">
			<input ref="input"
				type="radio"
				class="aq-radio__input"
				aria-hidden="true"
				:name="name"
				:tabindex="tabindex"
				:checked="isChecked"
				:value="trueValue"
				@change="onChange"
				@click="onClick"
				@blur="onBlur"
				@focus="onFocus">
		</div>
		<div class="aq-radio__text"
			v-if="label || this.$slots.default">
			<slot>{{label}}</slot>
		</div>
	</label>
</template>

<script>
export default {
	name: "AqRadio",

	props: {
		name: String,
		label: String,
		tabindex: [String, Number],
		trueValue: {
			type: [Number, String],
			required: true
		},
		value: {
			type: [Number, String],
			required: true
		},
		checked: {
			type: Boolean,
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
	data() {
		return {};
	},
	created() {
		if (this.checked) {
			this.$emit("input", this.trueValue);
		}
	},
	methods: {
		onChange(e) {
			this.$emit("change", this.isChecked, e);
		},
		onClick(e) {
			if (!this.disabled) {
				this.$emit("input", this.trueValue);
			}
		},
		onFocus(e) {
			this.$emit("focus", e);
		},
		onBlur(e) {
			this.$emit("blur", e);
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
			return (
				String(this.value).length > 0 && this.value == this.trueValue
			);
		}
	}
};
</script>