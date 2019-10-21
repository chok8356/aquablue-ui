<template>
    <div>
        <div class="content__block">
            <h2 class="mb-3">Type</h2>
            <div class="gutter-3 mb-3">
                <aq-button>Button</aq-button>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-button :key="n"
                        :type="n">Button</aq-button>
                </template>
                <aq-button icon="feather icon-download"></aq-button>
                <aq-button type="primary"
                    icon="feather icon-download"></aq-button>
            </div>

            <div class="gutter-3 mb-3">
                <aq-button light>Button</aq-button>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-button light
                        :key="n"
                        :type="n">Button</aq-button>
                </template>
                <aq-button icon="feather icon-download"
                    light></aq-button>
                <aq-button type="primary"
                    icon="feather icon-download"
                    light></aq-button>
            </div>

            <div class="gutter-3 mb-3">
                <aq-button text>Button</aq-button>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-button text
                        :key="n"
                        :type="n">Button</aq-button>
                </template>
                <aq-button icon="feather icon-download"
                    text></aq-button>
                <aq-button type="primary"
                    icon="feather icon-download"
                    text></aq-button>
            </div>

            <div class="gutter-3 mb-3">
                <aq-button round>Button</aq-button>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-button round
                        :key="n"
                        :type="n">Button</aq-button>
                </template>
                <aq-button icon="feather icon-download"
                    round></aq-button>
                <aq-button type="primary"
                    icon="feather icon-download"
                    round></aq-button>
            </div>
            <div class="gutter-3">
                <aq-button circle
                    icon="feather icon-download"
                    text></aq-button>
                <aq-button circle
                    icon="feather icon-download"></aq-button>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-button circle
                        icon="feather icon-download"
                        :key="n"
                        :type="n"></aq-button>
                </template>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">Disabled</h2>
            <div class="gutter-3">
                <aq-button disabled>Button</aq-button>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-button disabled
                        :key="n"
                        :type="n">Button</aq-button>
                </template>
                <aq-button disabled
                    icon="feather icon-download"></aq-button>
                <aq-button type="primary"
                    disabled
                    icon="feather icon-download"></aq-button>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">Icons</h2>
            <div class="gutter-3 align-items-center">
                <aq-button icon="feather icon-download">Button</aq-button>
                <aq-button icon="feather icon-download"
                    icon-right>Button</aq-button>
                <aq-button>
                    <template #icon>
                        <i class="feather icon-plus"></i>
                    </template>
                    Button
                </aq-button>
                <aq-button loading>Button</aq-button>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">Link</h2>
            <div class="gutter-3">
                <aq-button href="#">Open</aq-button>
                <aq-button href="#"
                    type="primary"
                    icon="feather icon-download"
                    icon-right>Download</aq-button>
                <aq-button href="#"
                    type="error"
                    icon="feather icon-download"
                    light>Download</aq-button>
                <aq-button href="#"
                    type="success"
                    icon="feather icon-download"
                    text>Download</aq-button>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">Size</h2>
            <div class="gutter-3 mb-3 align-items-center">
                <template v-for="n in ['xs', 'sm', 'md', 'lg']">
                    <aq-button :key="n"
                        :size="n">Button</aq-button>
                </template>
            </div>
            <div class="gutter-3 align-items-center">
                <template v-for="n in ['xs', 'sm', 'md', 'lg']">
                    <aq-button circle
                        icon="feather icon-download"
                        :key="n"
                        :size="n"></aq-button>
                </template>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">Button group</h2>
            <aq-button-group>
                <aq-button type="primary">Open</aq-button>
                <aq-button type="primary"
                    icon="feather icon-edit">Edit</aq-button>
                <aq-button type="primary"
                    icon="feather icon-download"></aq-button>
            </aq-button-group>
        </div>

    </div>
</template>
