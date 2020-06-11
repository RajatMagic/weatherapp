import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import { ScreenText } from '@/lang/ScreenText';
import LineChart from "@/components/LineComponent/LineComponent.vue";
import APP_UTILITIES from "@/utilities/commonFunctions";
import APP_CONST from '@/constants/AppConst'

@Component({
    components: {
      'LineChart': LineChart
    }
  })
export default class HomeComponent extends Vue {
    private objScreenText: ScreenText = new ScreenText();
    public styles: any = {
        width: "100%",
        height: "325px",
        position: "relative"
      }
    public data:any = {};  
    public unitsObj:any = {}
    public showMore:boolean = false;
    public maxTemSetSeries:Array<any> = [];
    public minTemSetSeries:Array<any> = [];
    public labels:Array<any> = [];
    public newObj:any = {}
  

    /**
   * method 'getScreenText' responsible to get the localize screen text
   * @param {string} key
   * @return {string} screen text
   */
    public getScreenText(key: string): string {
        return this.objScreenText.getScreenText(key);
    }

    got(){
        this.$router.push('/home');
    }
    
 fetchResponseData(){
    let promise:Promise<any> = new Promise((resolve:any, reject) => {
        setTimeout(() => resolve(JSON.parse(JSON.stringify(APP_CONST.WEATHER_DATA))), 1000)
      });
    return promise.then((resolve:any) => {
        return resolve;
    }).catch((err:any) => {
        return err;
    })
  }
    
  async created() {
    try {
      const response:any = await this.fetchResponseData();
      let { channel } = response.query.results;
      this.data = channel;
      this.unitsObj = channel.units;
      let maxData:Array<any> = [];
      let minData:Array<any> = [];
      let labels:Array<any> = [];
      channel.item&& channel.item.forecast.forEach((item:any) => {
        maxData.push(parseInt(item.high));
        minData.push(parseInt(item.low));
        labels.push(item.date);
      })
      var date_sort_asc = function (date1:any, date2:any) {
        // This is a comparison function that will result in dates being sorted in
        // ASCENDING order. As you can see, JavaScript's native comparison operators
        // can be used to compare dates. This was news to me.
        if (date1 > date2) return 1;
        if (date1 < date2) return -1;
        return 0;
      };
      
      let maxTempDataObj:any = {
        label: 'Max Temp  (ºF)', // Name the series
        data: maxData.sort(), // Specify the data values array
        fill: false,
        borderColor: '#2196f3', // Add custom color border (Line)
        backgroundColor: '#2196f3', // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
      }
      let minTempDataObj:any = {
        label: 'Min Temp (ºF)', // Name the series
        data: minData.sort(), // Specify the data values array
        fill: false,
        borderColor: "#4CAF50", 
        backgroundColor: "#4CAF50", // Add custom color background (Points and Fill)
        borderWidth: 1 // Specify bar border width
      }
      this.maxTemSetSeries = maxTempDataObj;
      this.minTemSetSeries = minTempDataObj;
      this.labels = labels.sort(function(a:any,b:any){
        return (new Date(a) as any) - (new Date(b) as any)
      });
      this.newObj = {
        labels:this.labels,
        datasets: [this.maxTemSetSeries,this.minTemSetSeries]
        }
      
    } catch (err) {
     console.log("this is eerr--",err);
    }
  }

  toggleDetails(){
    this.showMore = !this.showMore;
  }
}

    