<template>
	<div>
		<div class="content__block">
			<h2 class="mb-3">Type</h2>
			<div class="gutter-3 mb-3">
				<aq-button>Button</aq-button>
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<aq-button :key="n"
						:type="n">Button</aq-button>
				</template>
				<aq-button icon="feather icon-download" />
				<aq-button icon="feather icon-download"
					type="primary" />
			</div>
			<!-- <div class="gutter-3 mb-3">
				<aq-button disabled>Button</aq-button>
				<template v-for="n in ['primary', 'success', 'error', 'warning', 'info']">
					<aq-button :type="n"
						disabled>Button</aq-button>
				</template>
				<aq-button icon="feather icon-download"
					disabled></aq-button>
				<aq-button type="primary"
					icon="feather icon-download"
					disabled></aq-button>
			</div>

			<div class="gutter-3 mb-5">
				<aq-button loading>Button</aq-button>
				<template v-for="n in ['primary', 'success', 'error', 'warning', 'info']">
					<aq-button :type="n"
						loading>Button</aq-button>
				</template>
				<aq-button loading></aq-button>
				<aq-button type="primary"
					loading></aq-button>
			</div> -->
			<div class="gutter-3 mb-3">
				<aq-button light>Button</aq-button>
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<aq-button :key="n"
						:type="n"
						light>Button</aq-button>
				</template>
				<aq-button icon="feather icon-download"
					light />
				<aq-button icon="feather icon-download"
					light
					type="primary" />
			</div>
			<!-- <div class="gutter-3 mb-3">
                <aq-button light disabled>Button</aq-button>
                <template v-for="n in ['primary', 'success', 'error', 'warning', 'info']">
                      <aq-button :type="n" light disabled>Button</aq-button>
                </template>
                <aq-button icon="feather icon-download" light disabled></aq-button>
                <aq-button type="primary"icon="feather icon-download" light disabled></aq-button>
                </div>

                <div class="gutter-3 mb-5">
                <aq-button light loading>Button</aq-button>
                <template v-for="n in ['primary', 'success', 'error', 'warning', 'info']">
                      <aq-button :type="n" light loading>Button</aq-button>
                </template>
                <aq-button light loading></aq-button>
                <aq-button type="primary" light loading></aq-button>
			</div>-->
			<div class="gutter-3 mb-3">
				<aq-button text>Button</aq-button>
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<aq-button :key="n"
						:type="n"
						text>Button</aq-button>
				</template>
				<aq-button icon="feather icon-download"
					text />
				<aq-button icon="feather icon-download"
					text
					type="primary" />
			</div>
			<!-- <div class="gutter-3 mb-3">
                <aq-button text disabled>Button</aq-button>
                <template v-for="n in ['primary', 'success', 'error', 'warning', 'info']">
                      <aq-button :type="n" text disabled>Button</aq-button>
                </template>
                <aq-button icon="feather icon-download" text disabled></aq-button>
                <aq-button type="primary"icon="feather icon-download" text disabled></aq-button>
                </div>

                <div class="gutter-3 mb-5">
                <aq-button text loading>Button</aq-button>
                <template v-for="n in ['primary', 'success', 'error', 'warning', 'info']">
                      <aq-button :type="n" text loading>Button</aq-button>
                </template>
                <aq-button text loading></aq-button>
                <aq-button type="primary" text loading></aq-button>
			</div>-->
			<div class="gutter-3 mb-3">
				<aq-button round>Button</aq-button>
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<aq-button :key="n"
						:type="n"
						round>Button</aq-button>
				</template>
				<aq-button icon="feather icon-download"
					round />
				<aq-button icon="feather icon-download"
					round
					type="primary" />
			</div>
			<div class="gutter-3">
				<aq-button circle
					icon="feather icon-download"
					text />
				<aq-button circle
					icon="feather icon-download" />
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<aq-button :key="n"
						:type="n"
						circle
						icon="feather icon-download" />
				</template>
			</div>
		</div>
		<div class="content__block">
			<h2 class="mb-3">Disabled</h2>
			<div class="gutter-3">
				<aq-button disabled>Button</aq-button>
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<aq-button :key="n"
						:type="n"
						disabled>Button</aq-button>
				</template>
				<aq-button disabled
					icon="feather icon-download" />
				<aq-button disabled
					icon="feather icon-download"
					type="primary" />
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
						<i class="feather icon-plus" />
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
					icon="feather icon-download"
					icon-right
					type="primary">Download</aq-button>
				<aq-button href="#"
					icon="feather icon-download"
					light
					type="error">Download</aq-button>
				<aq-button href="#"
					icon="feather icon-download"
					text
					type="success">Download</aq-button>
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
					<aq-button :key="n"
						:size="n"
						circle
						icon="feather icon-download" />
				</template>
			</div>
		</div>
		<div class="content__block">
			<h2 class="mb-3">Button group</h2>
			<aq-button-group>
				<aq-button type="primary">Open</aq-button>
				<aq-button icon="feather icon-edit"
					type="primary">Edit</aq-button>
				<aq-button icon="feather icon-download"
					type="primary" />
			</aq-button-group>
		</div>
	</div>
</template>
