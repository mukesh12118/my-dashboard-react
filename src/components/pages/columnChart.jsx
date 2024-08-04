import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts';
import { useEffect, useState } from "react";


export default function ColumnChart() {
    const [windowWidth,setWindowWidth] = useState(0)

    useEffect(()=>{
        setWindowWidth(window.innerWidth)
    },[])
    const optionBarChart = {
        chart: {
            type: 'column',
            events: {
                render: function () {
                    this.reflow()
                },
            },
            backgroundColor: "transparent",
            margin: [50, 20, 60, 50],
        },
        title: {
            text: ""
        },
        credits: {
            enabled: false
        },
        
        plotOptions: {
            series: {
                pointWidth: windowWidth < 600 ? 10 : 20,
                borderRadius: 20,
                groupPadding:0,
                color: "#7294ff",
                borderWidth:0,
               
                // borderRadius: {
                //     radius: 10
                // }
            },
            column: {
                borderRadius: 10
            }
        },
        legend: {
            enabled: false
        },
        xAxis: {
            categories: ["5", "9", "44", "13", "34", "11", "33"],
            gridLineWidth: "0",
            gridLineColor: "transparent",
            labels: {
                style: {
                    color: "#36363e",
                    fontSize: "var(--font9)",
                    fontWeight: 600
                }
            },
            scrollbar: {
                enabled: true
            },
            offset: 10,
            // lineWidth: 0,
        },
        yAxis: {
            lineWidth: 0,
            tickInterval: 5,
            maxPadding: 0,
            borderRadiusTopLeft: 15,
            gridLineWidth: "1",
            gridLineColor: "transparent",
            gridLineColor: "#36363e",
            lineWidth: 1,
            startOnTick: false,
            lineColor:"transparent",
            labels: {
                style: {
                    color: '#36363e',
                    fontSize: "var(--font9)",
                    fontWeight: 600
                },
            },
            title: {
                enabled: false
            },
        },
        series: [{
            name: "Activity -1",
            data: [1, 4, 3, 3, 2, 4, 2],
        },{
            name: "Activity -2",
            data: [5, 2, 3, 3, 5, 2, 3],
        },{
            name: "Activity -3",
            data: [4, 2, 8, 4, 2, 6, 5],
        }],
        tooltip: {
            align: "right"
        }
    }
    return (
        <div style={{height:'100%'}}>
            <HighchartsReact
                highcharts={Highcharts}
                options={optionBarChart}
                containerProps={{ style: { height: "100%" } }}
            />
        </div>
    )
}