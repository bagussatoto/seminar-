'use strict';$(document).ready(function(){$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("average-chart11",am4charts.XYChart);chart.data=[{"date":"2018-01-1","price":180},{"date":"2018-01-2","price":252},{"date":"2018-01-3","price":185},{"date":"2018-01-4","price":189},{"date":"2018-01-5","price":158},{"date":"2018-01-6","price":200},{"date":"2018-01-7","price":187},{"date":"2018-01-8","price":180},{"date":"2018-01-9","price":252},{"date":"2018-01-10","price":185},{"date":"2018-01-11","price":268},{"date":"2018-01-12","price":158},{"date":"2018-01-13","price":200},{"date":"2018-01-14","price":187},{"date":"2018-01-15","price":180},{"date":"2018-01-16","price":252},{"date":"2018-01-17","price":185},{"date":"2018-01-18","price":250},{"date":"2018-01-19","price":158},{"date":"2018-01-20","price":200},{"date":"2018-01-21","price":187},{"date":"2018-01-22","price":180},{"date":"2018-01-23","price":252},{"date":"2018-01-24","price":185},{"date":"2018-01-25","price":295},{"date":"2018-01-26","price":158},{"date":"2018-01-27","price":200},{"date":"2018-01-28","price":90}];var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=true;valueAxis.renderer.minGridDistance=0;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="price";series.dataFields.dateX="date";series.strokeWidth=3;series.tooltipText="{valueY.value}";series.stroke=am4core.color("#2196f3");series.strokeWidth=3;series.fillOpacity=1;var gradient=new am4core.LinearGradient();gradient.addColor(am4core.color("#2196f3"),0.2);gradient.addColor(am4core.color("#2196f3"),0);gradient.rotation=90;series.fill=gradient;chart.cursor=new am4charts.XYCursor();chart.cursor.fullWidthLineX=true;chart.cursor.lineX.strokeWidth=0;chart.cursor.lineX.fill=am4core.color("#fff");chart.cursor.lineX.fillOpacity=0;chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("average-chart12",am4charts.XYChart);chart.data=[{"date":"2018-01-1","price":180},{"date":"2018-01-2","price":252},{"date":"2018-01-3","price":185},{"date":"2018-01-4","price":189},{"date":"2018-01-5","price":158},{"date":"2018-01-6","price":200},{"date":"2018-01-7","price":187},{"date":"2018-01-8","price":180},{"date":"2018-01-9","price":252},{"date":"2018-01-10","price":185},{"date":"2018-01-11","price":268},{"date":"2018-01-12","price":158},{"date":"2018-01-13","price":200},{"date":"2018-01-14","price":187},{"date":"2018-01-15","price":180},{"date":"2018-01-16","price":252},{"date":"2018-01-17","price":185},{"date":"2018-01-18","price":250},{"date":"2018-01-19","price":158},{"date":"2018-01-20","price":200},{"date":"2018-01-21","price":187},{"date":"2018-01-22","price":180},{"date":"2018-01-23","price":252},{"date":"2018-01-24","price":185},{"date":"2018-01-25","price":295},{"date":"2018-01-26","price":158},{"date":"2018-01-27","price":200},{"date":"2018-01-28","price":90}];var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=true;valueAxis.renderer.minGridDistance=0;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="price";series.dataFields.dateX="date";series.strokeWidth=3;series.tooltipText="{valueY.value}";series.stroke=am4core.color("#4caf50");series.strokeWidth=3;series.fillOpacity=1;var gradient=new am4core.LinearGradient();gradient.addColor(am4core.color("#4caf50"),0.2);gradient.addColor(am4core.color("#4caf50"),0);gradient.rotation=90;series.fill=gradient;chart.cursor=new am4charts.XYCursor();chart.cursor.fullWidthLineX=true;chart.cursor.lineX.strokeWidth=0;chart.cursor.lineX.fill=am4core.color("#fff");chart.cursor.lineX.fillOpacity=0;chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("average-chart13",am4charts.XYChart);chart.data=[{"date":"2018-01-1","price":180},{"date":"2018-01-2","price":252},{"date":"2018-01-3","price":185},{"date":"2018-01-4","price":189},{"date":"2018-01-5","price":158},{"date":"2018-01-6","price":200},{"date":"2018-01-7","price":187},{"date":"2018-01-8","price":180},{"date":"2018-01-9","price":252},{"date":"2018-01-10","price":185},{"date":"2018-01-11","price":268},{"date":"2018-01-12","price":158},{"date":"2018-01-13","price":200},{"date":"2018-01-14","price":187},{"date":"2018-01-15","price":180},{"date":"2018-01-16","price":252},{"date":"2018-01-17","price":185},{"date":"2018-01-18","price":250},{"date":"2018-01-19","price":158},{"date":"2018-01-20","price":200},{"date":"2018-01-21","price":187},{"date":"2018-01-22","price":180},{"date":"2018-01-23","price":252},{"date":"2018-01-24","price":185},{"date":"2018-01-25","price":295},{"date":"2018-01-26","price":158},{"date":"2018-01-27","price":200},{"date":"2018-01-28","price":90}];var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=true;valueAxis.renderer.minGridDistance=0;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="price";series.dataFields.dateX="date";series.strokeWidth=3;series.tooltipText="{valueY.value}";series.stroke=am4core.color("#f44336");series.strokeWidth=3;series.fillOpacity=1;var gradient=new am4core.LinearGradient();gradient.addColor(am4core.color("#f44336"),0.2);gradient.addColor(am4core.color("#f44336"),0);gradient.rotation=90;series.fill=gradient;chart.cursor=new am4charts.XYCursor();chart.cursor.fullWidthLineX=true;chart.cursor.lineX.strokeWidth=0;chart.cursor.lineX.fill=am4core.color("#fff");chart.cursor.lineX.fillOpacity=0;chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("average-chart14",am4charts.XYChart);chart.data=[{"date":"2018-01-1","price":180},{"date":"2018-01-2","price":252},{"date":"2018-01-3","price":185},{"date":"2018-01-4","price":189},{"date":"2018-01-5","price":158},{"date":"2018-01-6","price":200},{"date":"2018-01-7","price":187},{"date":"2018-01-8","price":180},{"date":"2018-01-9","price":252},{"date":"2018-01-10","price":185},{"date":"2018-01-11","price":268},{"date":"2018-01-12","price":158},{"date":"2018-01-13","price":200},{"date":"2018-01-14","price":187},{"date":"2018-01-15","price":180},{"date":"2018-01-16","price":252},{"date":"2018-01-17","price":185},{"date":"2018-01-18","price":250},{"date":"2018-01-19","price":158},{"date":"2018-01-20","price":200},{"date":"2018-01-21","price":187},{"date":"2018-01-22","price":180},{"date":"2018-01-23","price":252},{"date":"2018-01-24","price":185},{"date":"2018-01-25","price":295},{"date":"2018-01-26","price":158},{"date":"2018-01-27","price":200},{"date":"2018-01-28","price":90}];var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=true;valueAxis.renderer.minGridDistance=0;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="price";series.dataFields.dateX="date";series.strokeWidth=3;series.tooltipText="{valueY.value}";series.stroke=am4core.color("#FF9800");series.strokeWidth=3;series.fillOpacity=1;var gradient=new am4core.LinearGradient();gradient.addColor(am4core.color("#FF9800"),0.2);gradient.addColor(am4core.color("#FF9800"),0);gradient.rotation=90;series.fill=gradient;chart.cursor=new am4charts.XYCursor();chart.cursor.fullWidthLineX=true;chart.cursor.lineX.strokeWidth=0;chart.cursor.lineX.fill=am4core.color("#fff");chart.cursor.lineX.fillOpacity=0;chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("crypto-chart",am4charts.XYChart);var databtc=[];var dataeth=[];var dataltc=[];var visits=10;var i=0;for(i=0;i<=80;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);databtc.push({date:new Date().setSeconds(i-30),value:Math.abs(visits)});}
chart.addData(databtc);chart.invalidateRawData();for(i=0;i<=80;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);dataeth.push({date:new Date().setSeconds(i-30),value:Math.abs(visits)});}
for(i=0;i<=80;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);dataltc.push({date:new Date().setSeconds(i-30),value:Math.abs(visits)});}
var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.opposite=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="value";series.dataFields.dateX="date";series.strokeWidth=2;series.tooltipText="{valueY.value}";series.strokeWidth=3;series.fillOpacity=1;series.tooltip.getFillFromObject=false;series.tooltip.background.fill=am4core.color("#f44336");var gradient=new am4core.LinearGradient();gradient.addColor(am4core.color("#f44336"),0.2);gradient.addColor(am4core.color("#f44336"),0);gradient.rotation=90;series.fill=gradient;series.stroke=am4core.color("#f44336");chart.cursor=new am4charts.XYCursor();chart.cursor.fullWidthLineX=true;chart.cursor.lineX.strokeWidth=0;chart.cursor.lineX.fillOpacity=0;chart.padding(0,0,0,0);$('.data-btc').on('click',function(){chart.removeData(90);chart.addData(databtc);chart.invalidateRawData();});$('.data-eth').on('click',function(){chart.removeData(90);chart.addData(dataeth);chart.invalidateRawData();});$('.data-ltc').on('click',function(){chart.removeData(90);chart.addData(dataltc);chart.invalidateRawData();});});var px=new PerfectScrollbar('.revenue-scroll',{wheelSpeed:.5,swipeEasing:0,wheelPropagation:1,minScrollbarLength:40,});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("real1-chart",am4charts.XYChart);var data=[];var visits=10;var i=0;for(i=0;i<=30;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);visits=(visits>-5&&visits<5)?visits:0;visits=(visits<0)?0:visits;chart.data.push({date:new Date().setSeconds(i-30),value:visits});}
var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=false;valueAxis.renderer.minGridDistance=1;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="value";series.dataFields.dateX="date";series.strokeWidth=2;series.tooltipText="{valueY.value}";series.fill=am4core.color("#f44336");series.stroke=am4core.color("#f44336");chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("real2-chart",am4charts.XYChart);var data=[];var visits=10;var i=0;for(i=0;i<=30;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);visits=(visits>-5&&visits<5)?visits:0;visits=(visits<0)?0:visits;chart.data.push({date:new Date().setSeconds(i-30),value:visits});}
var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=false;valueAxis.renderer.minGridDistance=1;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="value";series.dataFields.dateX="date";series.strokeWidth=2;series.tooltipText="{valueY.value}";series.fill=am4core.color("#2196f3");series.stroke=am4core.color("#2196f3");chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("real3-chart",am4charts.XYChart);var data=[];var visits=10;var i=0;for(i=0;i<=30;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);visits=(visits>-5&&visits<5)?visits:0;visits=(visits<0)?0:visits;chart.data.push({date:new Date().setSeconds(i-30),value:visits});}
var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=false;valueAxis.renderer.minGridDistance=1;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="value";series.dataFields.dateX="date";series.strokeWidth=2;series.tooltipText="{valueY.value}";series.fill=am4core.color("#4caf50");series.stroke=am4core.color("#4caf50");chart.padding(0,0,0,0);});$(function(){am4core.useTheme(am4themes_animated);var chart=am4core.create("real4-chart",am4charts.XYChart);var data=[];var visits=10;var i=0;for(i=0;i<=30;i++){visits-=Math.round((Math.random()<0.5?1:-1)*Math.random()*10);visits=(visits>-5&&visits<5)?visits:0;visits=(visits<0)?0:visits;chart.data.push({date:new Date().setSeconds(i-30),value:visits});}
var dateAxis=chart.xAxes.push(new am4charts.DateAxis());dateAxis.renderer.grid.template.location=0;dateAxis.renderer.grid.template.disabled=true;dateAxis.startLocation=0.6;dateAxis.endLocation=0.4;dateAxis.renderer.labels.template.disabled=true;dateAxis.renderer.inside=true;var valueAxis=chart.yAxes.push(new am4charts.ValueAxis());valueAxis.logarithmic=false;valueAxis.renderer.minGridDistance=1;valueAxis.renderer.grid.template.disabled=true;valueAxis.renderer.inside=true;valueAxis.renderer.labels.template.disabled=true;var series=chart.series.push(new am4charts.LineSeries());series.dataFields.valueY="value";series.dataFields.dateX="date";series.strokeWidth=2;series.tooltipText="{valueY.value}";series.fill=am4core.color("#FF9800");series.stroke=am4core.color("#FF9800");chart.padding(0,0,0,0);});var px=new PerfectScrollbar('.subject-scroll',{wheelSpeed:.5,swipeEasing:0,wheelPropagation:1,minScrollbarLength:40,});});