import { Vue } from 'vue-property-decorator'


export default class APP_CONST extends Vue {
    public static readonly HOME_ROUTE = "/home";
    public static readonly TIME = 1000;
    public static readonly MAX_TEMP = 'Max Temp  (ºF)';
    public static readonly MIN_TEMP = 'Min Temp  (ºF)';
    public static readonly BORDER_BLUE = '#2196f3';
    public static readonly BACKGROUND_BLUE = '#2196f3';
    public static readonly BORDER_GREEN = '#4CAF50';
    public static readonly BACKGROUND_GREEN = '#4CAF50';
    public static readonly TRUE = true;
    public static readonly FALSE = false;
    public static readonly LINE_CHART = "LineChart";
    public static readonly STYLE_OBJ = {
        width: "100%",
        height: "325px",
        position: "relative"
    }
}