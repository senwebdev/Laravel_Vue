<template>

    <div class="control has-icons-right" :class="[cssClass, { 'required has-error' : error }]" >
        <input class="input" :class="inputClass" ref="input" :type="type" :name="name" :id="label" :placeholder="placeHolder" @input="updateValue($event.target.value)" >
        <span v-if="icon.slIcon" class="icon" :class="[icon.size, icon.align]">
            <i class="sl" :class="icon.slIcon"></i>
        </span>
        <small v-if="error" class="validation-info error" v-text="error"></small>
    </div>

</template>

<script>

    export default {

        name: "InputText",

        props: {
            name: {
                type: String,
                required: true,
                default: ''
            },
            placeHolder: {
                type: String,
                required: false,
                default: ''
            },
            type: {
                type: String,
                required: true,
                default: 'text'
            },
            value: {
                type: String,
                required: false,
                default: ''
            },
            label: {
                type: String,
                required: false,
                default: ''
            },
            cssClass: {
                type: String,
                required: true,
                default: ''
            },
            inputClass: {
                type: String,
                required: false,
                default: ''
            },
            icon: {
                type: Object,
                required: false,
                default () {
                    return {
                        size: '',
                        align: '',
                        slIcon: ''
                    }

                }
            },
            error: {
                type: String,
                required: false,
                default: ''
            }
        },

        methods: {
            updateValue (value) {
                // emit an input to our parent
                this.$emit('input', String(value));
            }
        }

    }

</script>
