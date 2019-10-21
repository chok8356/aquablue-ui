<template>
    <div class="aq-docs"
        id="app">
        <header class="header">
            <div class="logo">
                <a href="/"
                    class="logo__text">Aquablue UI</a>
                <div class="logo__menu-btn"
                    ref="menuBtn"
                    @click="toggleMenu()">
                    <span></span>
                </div>
            </div>
            <div class="login">
                <a href="https://github.com/chok8356/aquablue-ui"
                    class="login__link"
                    target="_blank">GitHub</a>
            </div>
        </header>

        <aside class="aside"
            ref="aside">
            <div class="menu">
                <router-link class="menu__item"
                    :to="{ name: 'Button' }">
                    Button
                </router-link>
                <router-link class="menu__item"
                    :to="{ name: 'Link' }">
                    Link
                </router-link>
                <router-link class="menu__item"
                    :to="{ name: 'Checkbox' }">
                    Checkbox
                </router-link>
                <router-link class="menu__item"
                    :to="{ name: 'Radio' }">
                    Radio
                </router-link>
                <router-link class="menu__item"
                    :to="{ name: 'Page' }">
                    Page
                </router-link>
            </div>
        </aside>

        <main class="content"
            ref="main">
            <template v-if=" this.$route.meta.title">
                <h1 class="page-title">
                    {{ this.$route.meta.title }}
                </h1>
                <div class="separator mb-4">
                </div>
            </template>
            <router-view>
            </router-view>
        </main>
    </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css';

export default {
    name: "App",
    computed: {
        documentTitle() {
            return this.$route.meta.title + " |  Aquablue UI";
        },
        getWidth() {
            return this.$el.clientWidth;
        }
    },
    methods: {
        toggleMenu() {
            this.$refs.menuBtn.classList.toggle("is-active");
            this.$refs.aside.classList.toggle("is-active");
        },
        closeMenu() {
            this.$refs.menuBtn.classList.remove("is-active");
            this.$refs.aside.classList.remove("is-active");
        }
    },
    watch: {
        $route() {
            document.title = this.documentTitle;
            this.closeMenu();
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
