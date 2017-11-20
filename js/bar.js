var canvas = document.getElementById('myChart');
var myBarChart;
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 59, 20, 81, 56, 55, 40],
        }
    ]
};
var option = {
	scales: {
  	yAxes:[{
    		stacked:true,
        gridLines: {
        	display:true,
          color:"rgba(255,99,132,0.2)"
        }
    }],
    xAxes:[{
    		gridLines: {
        	display:false
        }
    }]
  }
};

chartbar();

function onemonth() {
  for(i=0; i<data.labels.length; i++){
    if(i == 0){
    var data1 = {
      labels: [data.labels[i]],
      datasets: [
          {
              label: "First month data",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 2,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [data.datasets[0].data[i]],
          }
      ]
    }
  }
}
  if(myBarChart){
    myBarChart.destroy();
  }
  myBarChart = Chart.Bar(canvas,{
  	data:data1,
    options:option
  });


}

function twomonth() {
  var l = [];
  var d = [];

  for(i=0; i<data.labels.length; i++){
    if(i <= 1){
      l.push(data.labels[i])
      d.push(data.datasets[0].data[i])
    }
  }

    var data1 = {
      labels: l,
      datasets: [
          {
              label: "First two months data",
              backgroundColor: "rgba(255,99,132,0.2)",
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 2,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: d,
          }
      ]
    }
 if(myBarChart){
   myBarChart.destroy();
  }
  myBarChart = Chart.Bar(canvas,{
    data:data1,
    options:option
  });

}

function chartbar(){
   myBarChart = Chart.Bar(canvas,{
     data:data,
     options:option
  });


}

