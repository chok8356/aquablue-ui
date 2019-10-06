<template>
    <div>
        <div class="content__block">
            <h2 class="mb-3">
                Base
            </h2>
            <div class="gutter-3">
                <div>
                    <aq-checkbox v-model="check">
                        Checkbox
                    </aq-checkbox>
                    <div>
                        <code>{{ check }}</code>
                    </div>
                </div>
                <div>
                    <aq-checkbox v-model="check2">
                        Checkbox
                    </aq-checkbox>
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
                        <aq-checkbox v-model="check"
                            :type="n">
                            Checkbox
                        </aq-checkbox>
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
                    <aq-checkbox v-model="check"
                        disabled>
                        Checkbox
                    </aq-checkbox>
                    <div>
                        <code>{{ check }}</code>
                    </div>
                </div>
                <div>
                    <aq-checkbox v-model="check2"
                        disabled>
                        Checkbox
                    </aq-checkbox>
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
                    <aq-checkbox v-model="check">
                        Checkbox
                    </aq-checkbox>
                    <div>
                        <code>{{ check }}</code>
                    </div>
                </div>
                <div>
                    <aq-checkbox v-model="check2"
                        box-position="right">
                        Checkbox
                    </aq-checkbox>
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
            <aq-checkbox-group v-model="group1"
                :options="['Red', 'Blue', 'Green']"></aq-checkbox-group>
            <div>
                <code>{{ group1 }}</code>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Group Vertical
            </h2>
            <div class="gutter-x-5">
                <aq-checkbox-group v-model="group2"
                    :options="['Red', 'Blue', 'Green']"
                    vertical></aq-checkbox-group>

                <aq-checkbox-group v-model="group2"
                    :options="['Red', 'Blue', 'Green']"
                    vertical
                    box-position="right"></aq-checkbox-group>
            </div>
            <div>
                <code>{{ group2 }}</code>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Group with Label, Disabled item, Error and Helper text
            </h2>
            <aq-checkbox-group v-model="optionsValues"
                :invalid="optionsValues.length < 2"
                :options="options">
                Favourite Colours
                <template #error="">
                    Select at least 2 colors
                </template>
                <template #help="">
                    Choose you favourite colours
                </template>
            </aq-checkbox-group>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            check: false,
            check2: true,
            group1: ["Red"],
            group2: ["Red"],
            group3: ["Red"],
            group4: ["Red"],
            optionsValues: [],
            options: [
                {
                    id: "1",
                    name: "color",
                    label: "Red",
                    value: "red",
                    disabled: true
                },
                {
                    id: "2",
                    name: "color",
                    label: "Green",
                    value: "green"
                },
                {
                    id: "3",
                    name: "color",
                    label: "Blue",
                    value: "blue"
                }
            ]
        };
    }
};
</script>
