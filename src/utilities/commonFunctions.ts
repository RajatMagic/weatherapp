import { Vue } from 'vue-property-decorator'

export default class APP_UTILITIES extends Vue {

    public static dateSorter(a:any,b:any){
        return (new Date(a) as any) - (new Date(b) as any)
      }
}