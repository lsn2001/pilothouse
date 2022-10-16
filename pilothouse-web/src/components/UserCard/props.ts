import {  type PropType } from 'vue';
import type { ILogoItem } from '~/components/UserCard/type/interface';
export const propsData = reactive({
    avatar: {
        type: String,
        default: '',
        required: true
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    bgcolor: {
        type: String,
        default: 'white',
        required: true
    },
    logoArr: {
        // keyof typeof 枚举类型 可以获得枚举类型的所有属性的类型 也就是Share,Twitter,Github的类型
        // 第一个Array是构造函数 通过PropType指定构造函数的类型 比如定义一个数组可以用columnData: ColumnData[] = [] 而这里Array<keyof typeof Elogo>就是Array<string>一个数组值的类型为string类型的数组
        // Array as PropType<Array<string>  通过构造函数的形式给logoArr定义它的type为一个Array<string>
        type: Array as PropType<Array<ILogoItem>>,
        default: ['share','twitter','github'],
    }
})
