<template>
	<component :is="href ? 'a' : 'button'"
		:href="href ? (disabled ? null : href) : null"
		class="aq-btn"
		:class="classes"
		:disabled="disabled"
		@click="onClick">
		<div class="aq-btn__content">
			<div v-if="icon || $slots.icon || loading"
				class="aq-btn__icon"
				:class="[
          iconRight ? 'aq-btn__icon--right' : 'aq-btn__icon--left',
          {
            'is-loading': loading
          }
        ]">
				<i v-if="icon"
					:class="icon" />
				<slot v-else-if="this.$slots.icon"
					name="icon" />
				<i v-else-if="loading">
					<svg xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-loader">
						<line x1="12"
							y1="2"
							x2="12"
							y2="6" />
						<line x1="12"
							y1="18"
							x2="12"
							y2="22" />
						<line x1="4.93"
							y1="4.93"
							x2="7.76"
							y2="7.76" />
						<line x1="16.24"
							y1="16.24"
							x2="19.07"
							y2="19.07" />
						<line x1="2"
							y1="12"
							x2="6"
							y2="12" />
						<line x1="18"
							y1="12"
							x2="22"
							y2="12" />
						<line x1="4.93"
							y1="19.07"
							x2="7.76"
							y2="16.24" />
						<line x1="16.24"
							y1="7.76"
							x2="19.07"
							y2="4.93" />
					</svg>
				</i>
			</div>
			<span v-if="this.$slots.default"
				class="aq-btn__text">
				<slot />
			</span>
		</div>
		<aq-ripple-ink v-if="!disabled || loading" />
	</component>
</template>

<script>
import UiRippleInk from "./../RippleInk/RippleInk.vue";
export default {
	name: "AqButton",
	components: {
		UiRippleInk
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
		}
	},
	methods: {
		onClick(e) {
			this.$emit("click", e);
		}
	}
};
</script>
