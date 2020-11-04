import React, { Component } from 'react'
import * as echarts from 'echarts';
import {dataStore} from '../tools/dataStore'

export class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countryName: [],
            confirmedCount: [],
            confirmedIncr: [],
            curedCount: [],
            curedIncr: []
        }
    }

    fetchData = () => {
        let countryName = [], confirmedCount = [], 
            confirmedIncr = [], curedCount = [], 
            curedIncr = []
        dataStore.countrySumData().then((res) => {
            res.forEach(element => {
                countryName.push(element.countryName)
                confirmedCount.push(element.confirmedCount)
                confirmedIncr.push(element.confirmedIncr)
                curedCount.push(element.curedCount)
                curedIncr.push(element.curedIncr)
            })
            this.setState({
                countryName: countryName,
                confirmedCount: confirmedCount,
                confirmedIncr: confirmedIncr,
                curedCount: curedCount,
                curedIncr: curedIncr
            }, ()=>{
                this.setConfirmedData()
                this.setConfirmedIncr()
                this.setCuredCount()
                this.setCuredIncr()
            })
        })
    }

    setConfirmedData = () => {
        // init echart
        var myChart = echarts.init(document.getElementById('confirmedCount'));
        var option = {
            title: {
                text: '确诊数量'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: this.state.countryName
            },
            yAxis: {},
            series: [{
                name: '确诊数量',
                type: 'bar',
                data: this.state.confirmedCount
            }],
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 2
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 2
                }
            ],
            color: ['rgb(255, 155, 81)']
        };
        myChart.setOption(option);  
    }

    setConfirmedIncr = () => {
        // init echart
        var myChart = echarts.init(document.getElementById('confirmedIncr'));
        var option = {
            title: {
                text: '确诊增长数据'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: this.state.countryName
            },
            yAxis: {},
            series: [{
                name: '确诊增长数据',
                type: 'line',
                data: this.state.confirmedIncr
            }],
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 10
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 10
                }
            ],
            color: ['rgb(255, 155, 81)']
        };
        myChart.setOption(option);  
    }


    setCuredCount = () => {
        // init echart
        var myChart = echarts.init(document.getElementById('curedCount'));
        var option = {
            title: {
                text: '治愈人数'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: this.state.countryName
            },
            yAxis: {},
            series: [{
                name: '治愈人数',
                type: 'bar',
                data: this.state.curedCount
            }],
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 2
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 2
                }
            ],
            color: ['rgb(255, 155, 81)']
        };
        myChart.setOption(option);  
    }

    setCuredIncr = () => {
        // init echart
        var myChart = echarts.init(document.getElementById('curedIncr'));
        var option = {
            title: {
                text: '治愈人数'
            },
            tooltip: {},
            legend: {
                data:['人数']
            },
            xAxis: {
                data: this.state.countryName
            },
            yAxis: {},
            series: [{
                name: '治愈人数',
                type: 'line',
                data: this.state.curedIncr
            }],
            dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 0,
                    end: 10
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 0,
                    end: 10
                }
            ],
            color: ['rgb(255, 155, 81)']
        };
        myChart.setOption(option);  
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <h1>COVID-19 Data Analysis</h1>
                <h4>数据集来源: https://github.com/eAzure/COVID-19-Data 截止于2020.07.02的疫情统计数据</h4>
                <div id="confirmedCount" className="charts"></div><br /><br />
                <div id="confirmedIncr" className="charts"></div><br /><br />
                <div id="curedCount" className="charts"></div><br /><br />
                <div id="curedIncr" className="charts"></div><br /><br />
            </div>
        )
    }
}

export default HomePage
