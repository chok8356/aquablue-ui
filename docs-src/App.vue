<template>
	<div id="app"
		class="aq-docs">
		<header class="header">
			<div class="logo">
				<span class="logo__text">Aquablue UI</span>
			</div>
			<div class="login">
				<div class="login__link ">
					<span class="login__icon"><i class="fal fa-user-circle" /></span>
					<span class="login__text">Login</span>
				</div>
			</div>
		</header>

		<aside class="aside">
			<div class="menu">
				<router-link :to="{ name: 'Button' }"
					class="menu__item">
					Button
				</router-link>
				<router-link :to="{ name: 'Link' }"
					class="menu__item">
					Link
				</router-link>
				<router-link :to="{ name: 'Checkbox' }"
					class="menu__item">
					Checkbox
				</router-link>
				<router-link :to="{ name: 'Radio' }"
					class="menu__item">
					Radio
				</router-link>
				<router-link :to="{ name: 'Page' }"
					class="menu__item">
					Page
				</router-link>
			</div>
		</aside>

		<main class="content">
			<template v-if=" this.$route.meta.title">
				<h1 class="page-title">
					{{ this.$route.meta.title }}
				</h1>
				<div class="separator mb-4" />
			</template>
			<router-view />
		</main>
	</div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css';

export default {
	computed: {
		documentTitle() {
			return this.$route.meta.title + " |  Aquablue UI";
		}
	},
	watch: {
		$route() {
			document.title = this.documentTitle;
		}
	},
	mounted() {
		document.title = this.documentTitle;
	}
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "docs-src/assets/styles/index";
</style>
