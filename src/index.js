import Button from './components/Button/Button.vue';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.vue';
import RippleInk from './components/RippleInk/RippleInk.vue';
import Link from './components/Link/Link.vue';
import Checkbox from './components/Checkbox/Checkbox.vue';
import CheckboxGroup from './components/CheckboxGroup/CheckboxGroup.vue';
import Radio from './components/Radio/Radio.vue';
import RadioGroup from './components/RadioGroup/RadioGroup.vue';

const AquablueUI = {
	Button,
	ButtonGroup,
	RippleInk,
	Link,
	Checkbox,
	CheckboxGroup,
	Radio,
	RadioGroup,
};

function install(Vue, config = { size: 'md' }) {
	Object.keys(AquablueUI).forEach(key => {
		const Component = AquablueUI[key];
		Vue.component(Component.name, Component);
	});

	Vue.prototype.$ELEMENT = {
		size: config.size || '',
	};
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install,
	AquablueUI,
};
