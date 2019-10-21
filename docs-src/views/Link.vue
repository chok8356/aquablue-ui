<template>
    <div>
        <div class="content__block">
            <h2 class="mb-3">
                Type
            </h2>
            <div class="gutter-3">
                <aq-link href="#">
                    Button
                </aq-link>
                <template v-for="n in ['primary','success','error','warning','info']">
                    <aq-link href="#"
                        :key="n"
                        :type="n">
                        Button
                    </aq-link>
                </template>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Disabled
            </h2>
            <div class="gutter-3">
                <aq-link href="#"
                    disabled>
                    Button
                </aq-link>
            </div>
        </div>

        <div class="content__block">
            <h2 class="mb-3">
                Without underline
            </h2>
            <div class="gutter-3">
                <aq-link href="#">
                    Button
                </aq-link>
                <aq-link href="#"
                    :underline="false">
                    Button
                </aq-link>
            </div>
        </div>

        <div class="content__block">
            <h2>Icons</h2>
            <div class="gutter-3 align-items-center">
                <aq-link href="#"
                    icon="feather icon-check">
                    Button
                </aq-link>
                <aq-link href="#"
                    icon="feather icon-check"
                    icon-right>
                    Button
                </aq-link>
                <aq-link href="#">
                    <template #icon>
                        <i class="feather icon-plus"></i>
                    </template>
                    Button
                </aq-link>
            </div>
        </div>
    </div>
</template>
