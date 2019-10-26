import './styles/imports.scss';

import Button from './components/Button/Button.vue';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.vue';
import RippleInk from './components/RippleInk/RippleInk.vue';
import Link from './components/Link/Link.vue';
import Checkbox from './components/Checkbox/Checkbox.vue';
import CheckboxGroup from './components/CheckboxGroup/CheckboxGroup.vue';
import Radio from './components/Radio/Radio.vue';
import RadioGroup from './components/RadioGroup/RadioGroup.vue';
import TextBox from './components/TextBox/TextBox.vue';
import Icon from './components/Icon/Icon.vue';

const AquablueUI = {
    Button,
    ButtonGroup,
    RippleInk,
    Link,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    TextBox,
    Icon,
};

function install(Vue, config = { size: 'md', iconSet: 'feather' }) {
    Object.keys(AquablueUI).forEach(key => {
        const Component = AquablueUI[key];
        Vue.component(Component.name, Component);
    });

    Vue.prototype.$ELEMENT = {
        size: config.size || '',
    };

    Vue.prototype.$ICON_SET = config.iconSet || '';
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    AquablueUI,
};
