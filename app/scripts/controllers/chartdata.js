'use strict';

/**
 * @ngdoc function
 * @name landingOrbitApp.controller:ChartdataCtrl
 * @description
 * # ChartdataCtrl
 * Controller of the landingOrbitApp
 */
angular.module('landingOrbitApp')
  .controller('ChartdataCtrl', function () {
    
    
    Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});

  	Highcharts.chart('chart-container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Cost Per Month'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'CAD$'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '${point.y:,.0f}'
                }
            }
        },
        

        tooltip: {
            formatter:function(){
            	if (this.point.name !== 'Orbit') {
            		return '<b>'+Highcharts.numberFormat((this.y)/3000,2,'.')+' times  the cost of </b>' + this.series.data[0].name;
            	} else {
            		return '';
            	}
            }
        },
        
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Orbit',
                y: 3000,
                drilldown: null
            }, {
                name: 'Conventional Subway Interior Poster',
                y: 9600,
                drilldown: null
            }, {
                name: 'Conventional Taxi Top Sign',
                y: 17500,
                drilldown: null
            }, {
                name: 'Conventional Bus Exterior Poster',
                y: 31000,
                drilldown: null
            }, {
                name: 'Transit Vehicle Wrap',
                y: 33000,
                drilldown: null
            }, {
                name: '10\'X23\' Outdoor Poster with Backlights',
                y: 48500,
                drilldown: null
            }]
        }],
    });
  });
