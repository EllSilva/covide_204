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
      height: 1350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: paises,
    }
  }



 

</script>
 
<template>
  <div>
    <apexchart width="7000"   type="bar" :options="chartOptions" :series="series"></apexchart>

  </div>
</template>



