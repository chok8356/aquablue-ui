import VueTestUtils from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button/Button.vue';

VueTestUtils.config.mocks['$ELEMENT'] = {
    size: 'md',
};

describe('Button Test', () => {
    it('Renders props.type', () => {
        const wrapper = shallowMount(Button, {
            propsData: { type: 'primary' },
        });
        expect(wrapper.classes('aq-btn--primary')).toBe(true);
    });
    it('Renders default slot', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Test',
            },
        });
        expect(wrapper.text()).toBe('Test');
    });
});
