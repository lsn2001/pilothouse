import { type PropType } from 'vue';
export const propsData = reactive({
    bgcolor: {
        type: String,
        default: '',
        
    },
    title: {
        type: String,
        default: '',
        required:true
    },
    text: {
        type: String,
        default: '',
        required:true
    }
})