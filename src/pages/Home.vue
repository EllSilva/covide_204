<script setup>

var paisesArray = [];
var confirmedArray = [];

    
fetch('https://covid19-brazil-api.now.sh/api/report/v1/countries')
    .then((res) => res.json())
    .then((data) => {

        Object.entries(data).forEach(([key, value]) => {

            for (let i = 0; i < value.length; i++) {

                paisesArray.push(value[i].country);
                confirmedArray.push(value[i].confirmed);

            }
        });
   
    localStorage.setItem('paises', JSON.stringify(paisesArray));
        localStorage.setItem('confirmacao', JSON.stringify(confirmedArray));
    })


const paises = JSON.parse(localStorage.getItem('paises'))
const confirmacao = JSON.parse(localStorage.getItem('confirmacao'))



const series = [{
            data: confirmacao
          }]
          const chartOptions = {
            chart: {
              type: 'bar',
              height: 430
            },
            plotOptions: {
              bar: {
                horizontal: true,
                dataLabels: {
                  position: 'top',
                },
              }
            },
            dataLabels: {
              enabled: true,
              offsetX: -6,
              style: {
                fontSize: '12px',
                colors: ['#fff']
              }
            },
            stroke: {
              show: true,
              width: 1,
              colors: ['#fff']
            },
            tooltip: {
              shared: true,
              intersect: false
            },
            xaxis: {
              categories: paises
            },
          }
          
          
        
 
</script>

<template>
    <div class="">
        <div class="m-5 p-4 bg-blue-900 bg-opacity-20">
            <h1> COVID número de casos confirmado</h1>

        </div>
        <apexchart type="bar" width="7000"  height="6430" :options="chartOptions" :series="series"></apexchart> 

    </div>
</template>