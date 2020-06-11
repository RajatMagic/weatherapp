import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import { ScreenText } from '@/lang/ScreenText';
import LineChart from "@/components/lineComponent/LineComponent.vue";
import APP_UTILITIES from "@/utilities/commonFunctions";
import APP_CONST from '@/constants/AppConst';
import { StyleObj } from "@/Model/model"
import * as weatherResponse from '@/assets/JSON/responsedata.json';

@Component({
    components: {
        'LineChart': LineChart
    }
})
export default class HomeComponent extends Vue {
    private objScreenText: ScreenText = new ScreenText();
    public styles: StyleObj = APP_CONST.STYLE_OBJ;
    public data: any = {};
    public unitsObj: any = {}
    public showMore: boolean = false;
    public maxTemSetSeries: Array<any> = [];
    public minTemSetSeries: Array<any> = [];
    public labels: Array<any> = [];
    public newObj: any = {}

    public getScreenText(key: string): string {
        return this.objScreenText.getScreenText(key);
    }

    got() {
        this.$router.push(APP_CONST.HOME_ROUTE);
    }

    fetchResponseData() {
        let promise: Promise<any> = new Promise((resolve: any, reject) => {
            setTimeout(() => resolve(JSON.parse(JSON.stringify(<any>weatherResponse))), APP_CONST.TIME);
        });
        return promise.then((resolve: any) => {
            return resolve;
        }).catch((err: any) => {
            return err;
        })
    }

    async created() {
        try {
            const response: any = await this.fetchResponseData();
            let { channel } = response.default.query.results;
            this.data = channel;
            this.unitsObj = channel.units;
            let maxData: Array<number> = [];
            let minData: Array<number> = [];
            let labels: Array<string> = [];
            channel.item && channel.item.forecast.forEach((item: any) => {
                maxData.push(parseInt(item.high));
                minData.push(parseInt(item.low));
                labels.push(item.date);
            })

            let maxTempDataObj: any = {
                label: APP_CONST.MAX_TEMP,
                data: maxData.sort(),
                fill: APP_CONST.FALSE,
                borderColor: APP_CONST.BORDER_BLUE,
                backgroundColor: APP_CONST.BACKGROUND_BLUE,
                borderWidth: 1
            }
            let minTempDataObj: any = {
                label: APP_CONST.MIN_TEMP,
                data: minData.sort(),
                fill: APP_CONST.FALSE,
                borderColor: APP_CONST.BORDER_GREEN,
                backgroundColor: APP_CONST.BORDER_GREEN,
                borderWidth: 1
            }
            this.maxTemSetSeries = maxTempDataObj;
            this.minTemSetSeries = minTempDataObj;
            this.labels = labels.sort((a: string, b: string) => APP_UTILITIES.dateSorter(a, b));
            this.newObj = {
                labels: this.labels,
                datasets: [this.maxTemSetSeries, this.minTemSetSeries]
            }

        } catch (err) {
            alert("Weather api error!!")
        }
    }

    toggleDetails() {
        this.showMore = !this.showMore;
    }
}

