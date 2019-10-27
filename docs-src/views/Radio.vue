<template>
    <div>
        <div class="content__block">
            <h2 class="mb-3">
                Base
            </h2>
            <div class="gutter-3">
                <div>
                    <aq-radio v-model="check">
                        Radio
                    </aq-radio>
                    <div>
                        <code>{{ check }}</code>
                    </div>
                </div>
                <div>
                    <aq-radio v-model="check2"
                        checked>
                        Radio
                    </aq-radio>
                    <div>
                        <code>{{ check2 }}</code>
                    </div>
                </div>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Type
            </h2>
            <div class="gutter-3">
                <template v-for="n in ['primary','success','error','warning','info']">
                    <div :key="n">
                        <aq-radio v-model="check"
                            :type="n">
                            Radio
                        </aq-radio>
                        <div>
                            <code>{{ check }}</code>
                        </div>
                    </div>
                </template>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Disabled
            </h2>
            <div class="gutter-3">
                <div>
                    <aq-radio v-model="check"
                        disabled>
                        Radio
                    </aq-radio>
                    <div>
                        <code>{{ check }}</code>
                    </div>
                </div>
                <div>
                    <aq-radio v-model="check2"
                        disabled>
                        Radio
                    </aq-radio>
                    <div>
                        <code>{{ check2 }}</code>
                    </div>
                </div>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Box position
            </h2>
            <div class="gutter-3">
                <div>
                    <aq-radio v-model="check">
                        Radio
                    </aq-radio>
                    <div>
                        <code>{{ check }}</code>
                    </div>
                </div>
                <div>
                    <aq-radio v-model="check2"
                        circle-position="right">
                        Radio
                    </aq-radio>
                    <div>
                        <code>{{ check2 }}</code>
                    </div>
                </div>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Group
            </h2>
            <div class="gutter-3">
                <aq-radio-group v-model="group1"
                    :options="['Red', 'Blue', 'Green']">
                </aq-radio-group>
            </div>
            <div>
                <code>{{ group1 }}</code>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Group Vertical
            </h2>
            <div class="gutter-x-5">
                <aq-radio-group v-model="group2"
                    vertical
                    :options="['Red', 'Blue', 'Green']"></aq-radio-group>

                <aq-radio-group v-model="group2"
                    circle-position="right"
                    vertical
                    :options="['Red', 'Blue', 'Green']"></aq-radio-group>
            </div>
            <div>
                <code>{{ group2 }}</code>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Group with Label, Disabled item, Error and Helper text
            </h2>
            <aq-radio-group v-model="optionsValues"
                :invalid="optionsValues.length <= 0"
                :options="options">
                Favourite Colours
                <template #error>
                    Select color
                </template>
                <template #help>
                    Choose you favourite colours
                </template>
            </aq-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            check: false,
            check2: true,
            group1: "Blue",
            group2: "Red",
            optionsValues: "",
            options: [
                {
                    name: "color",
                    label: "Red",
                    disabled: true
                },
                {
                    name: "color",
                    label: "Green"
                },
                {
                    name: "color",
                    label: "Blue"
                }
            ]
        };
    }
};
</script>
