<template>
	<div>
		<div class="content__block">
			<h2 class="mb-3">
				Base
			</h2>
			<div class="gutter-3">
				<div>
					<aq-radio v-model="check"
						true-value="1">
						Radio
					</aq-radio>
					<div>
						<code>{{ check }}</code>
					</div>
				</div>
				<div>
					<aq-radio v-model="check2"
						true-value="1"
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
				<template v-for="n in [
            'primary',
            'success',
            'error',
            'warning',
            'info'
          ]">
					<div :key="n">
						<aq-radio v-model="check"
							:type="n"
							true-value="1">
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
						disabled
						true-value="1">
						Radio
					</aq-radio>
					<div>
						<code>{{ check }}</code>
					</div>
				</div>
				<div>
					<aq-radio v-model="check2"
						disabled
						true-value="1">
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
					<aq-radio v-model="check"
						true-value="1">
						Radio
					</aq-radio>
					<div>
						<code>{{ check }}</code>
					</div>
				</div>
				<div>
					<aq-radio v-model="check2"
						circle-position="right"
						true-value="1">
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
					Favourite Colours
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
					:options="['Red', 'Blue', 'Green']"
					vertical />

				<aq-radio-group v-model="group2"
					:options="['Red', 'Blue', 'Green']"
					vertical
					circle-position="right" />
			</div>
		</div>

		<div class="content__block">
			<h2 class="mb-3">
				Group with Label, Disabled item, Error and Helper text
			</h2>
			<aq-radio-group v-model="optionsValues"
				:options="options"
				:invalid="optionsValues.length <= 0">
				Favourite Colours
				<template #error>
					Select 1 color
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
			check: 0,
			check2: 1,
			group1: "Blue",
			group2: "",
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
