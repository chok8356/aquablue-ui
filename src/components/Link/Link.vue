<template>
	<a :href="disabled ? 'javascript:void(0)' : href"
		class="aq-link"
		:class="[
      type ? `aq-link--${type}` : '',
      {
        'is-disabled': disabled,
        'is-underline': underline
      }
    ]"
		@click="onClick">
		<div class="aq-link__content">
			<div v-if="icon || $slots.icon"
				class="aq-link__icon"
				:class="[
          iconRight ? `aq-link__icon--right` : 'aq-link__icon--left'
        ]">
				<i v-if="icon"
					:class="icon" />
				<slot v-else-if="this.$slots.icon"
					name="icon" />
			</div>
			<span v-if="this.$slots.default"
				class="aq-link__text">
				<slot />
			</span>
		</div>
	</a>
</template>

<script>
import UiRippleInk from "./../RippleInk/RippleInk.vue";
export default {
	name: "AqLink",

	props: {
		disabled: Boolean,
		underline: {
			type: Boolean,
			default: true
		},
		href: {
			type: String,
			required: true
		},
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
	methods: {
		onClick(e) {
			this.$emit("click", e);
		}
	}
};
</script>
