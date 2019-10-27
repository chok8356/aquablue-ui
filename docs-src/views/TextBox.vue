<template>
    <div>
        <div class="content__block">
            <h2 class="mb-3">
                Base
            </h2>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    size="xs">Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    size="sm">Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name">Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    size="lg">Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    size="xs"
                    textarea>Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    size="sm"
                    textarea>Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    textarea>Name</aq-text-box>
            </div>
            <div class="gutter-2 mb-3">
                <aq-text-box v-model="name"
                    size="lg"
                    textarea>Name</aq-text-box>
            </div>
        </div>
        <div class="content__block">
            <h2 class="mb-3">
                Floating label
            </h2>
            <div class="gutter-1">
                <aq-text-box v-model="name"
                    floating-label>Name</aq-text-box>
            </div>
        </div>
        <div class="content__block">
            <h2 class="mb-3">
                Placeholder
            </h2>
            <div class="gutter-1">
                <aq-text-box v-model="name"
                    placeholder="Enter your name">Name</aq-text-box>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: "",
            company: ""
        };
    }
};
</script>