import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';

export function ProfitChart() {
    const value = 60;

    const chartOptions = {
        chart: {
            type: 'pie',
            margin: 0,
            padding:0,
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            plotBorderWidth: 0,
            backgroundColor: "transparent",
            events: {
                render: function () {
                    this.reflow()
                },
            },
        },
        legend: {
            enabled:false
        },
        title: {
            text: "",
        },
        subtitle:{
            text:`<div class="h3Chart"><h3>70%</h3><br><p>Goal <br> Completed</p></div>`,
            y:"50",
            floating:true
        },
        tooltip: {
            enabled: false,
            floating: true
        },
        credits: {
            enabled: false
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 0,
            tickWidth: 0,
            tickLength: 0,
            title: {
                enabled: false,
            },
            labels: {
                enabled: false
            },
        },
        plotOptions: {
            pie: {
                size: "100%",
                borderWidth: 0,
                borderColor: '#ffff',
                startAngle: 10,
                pointInterval: 0,
                borderWidth:0,
                showInLegend: true,
                center: ['50%', '50%'],
                dataLabels: {
                    enabled: false
                },
            },
        },
        series: [{
            type: 'pie',
            enableMouseTracking: false,
            innerSize: '80%',
            colorByPoint: true,
            name: '',
            data: [{
                y: value,
                name: "value 1",
                color: "#7294fe"
            }, {
                y: 100 - value,
                name: "value 2",
                color: "#283366",
                selected: true
            }],
        }]
    }
    return (
        <div style={{ height: '100%' }}>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
                containerProps={{ style: { height: "100%" } }}
            />
        </div>
    )
}