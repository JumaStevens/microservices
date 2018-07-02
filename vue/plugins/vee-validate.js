import Vue from 'vue'
import VeeValidate from 'vee-validate'

const config = {
  classes: true,
  classNames: {
    // the control has been blurred
    touched: 'touched',
    // the control hasn't been blurred
    untouched: 'untouched',
    // model is valid
    valid: 'valid',
    // model is invalid
    invalid: 'invalid',
    // control has not been interacted with
    pristine: 'pristine',
    // control has been interacted with
    dirty: 'dirty'
  }
}

Vue.use(VeeValidate, config)
