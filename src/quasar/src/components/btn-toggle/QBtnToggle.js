import { h, defineComponent, computed } from 'vue';

import FBtn from '../btn/QBtn.js';
import FBtnGroup from '../btn-group/QBtnGroup.js';

import {
  useFormInject,
  useFormProps
} from '../../composables/private/use-form.js';

import { hMergeSlot } from '../../utils/private/render.js';

export default defineComponent({
  name: 'FBtnToggle',

  props: {
    ...useFormProps,

    modelValue: {
      required: true
    },

    options: {
      type: Array,
      required: true,
      validator: v =>
        v.every(
          opt =>
            ('label' in opt || 'icon' in opt || 'slot' in opt) && 'value' in opt
        )
    },

    // To avoid seeing the active raise shadow through
    // the transparent button, give it a color (even white)
    readonly: Boolean,
    disable: Boolean,

    clearable: Boolean,

    apart: Boolean,
    width: Number,

    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },

  emits: ['update:modelValue', 'clear', 'click'],

  setup(props, { slots, emit }) {
    const hasActiveValue = computed(
      () => props.options.find(opt => opt.value === props.modelValue) !== void 0
    );

    const formAttrs = computed(() => ({
      type: 'hidden',
      name: props.name,
      value: props.modelValue
    }));

    const injectFormInput = useFormInject(formAttrs);

    const btnOptions = computed(() =>
      props.options.map((item, i) => {
        const { attrs, value, slot, ...opt } = item;

        return {
          slot,
          noLeftBorder: i !== 0,
          props: {
            key: i,
            onClick(e) {
              set(value, item, e);
            },
            ...attrs,
            ...opt,
            func: value !== props.modelValue && !props.apart,
            fontDark: value !== props.modelValue && props.apart,
            round: value === props.modelValue && props.apart,
            small: true,
            disable: props.disable === true || opt.disable === true
          }
        };
      })
    );

    function set(value, opt, e) {
      if (props.readonly !== true) {
        if (props.modelValue === value) {
          if (props.clearable === true) {
            emit('update:modelValue', null, null);
            emit('clear');
          }
        } else {
          emit('update:modelValue', value, opt);
        }

        emit('click', e);
      }
    }

    function getContent() {
      const child = btnOptions.value.map(opt => {
        return h(
          FBtn,
          {
            ...opt.props,
            style: {
              width: `${props.width || 100}px`,
              marginLeft: opt.noLeftBorder ? '-1px' : ''
            }
            // class: { 'no-left-border': opt.noLeftBorder }
          },
          opt.slot !== void 0 ? slots[opt.slot] : void 0
        );
      });

      if (
        props.name !== void 0 &&
        props.disable !== true &&
        hasActiveValue.value === true
      ) {
        injectFormInput(child, 'push');
      }

      return hMergeSlot(slots.default, child);
    }

    return () =>
      h(
        FBtnGroup,
        {
          class: 'q-btn-toggle',
          style: { minHeight: '30px' }
        },
        getContent
      );
  }
});
