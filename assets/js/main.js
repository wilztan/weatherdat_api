$('#button_show').click(function() {
  if($('#weather_table').is(":visible")){
      $('#weather_table').hide();
      $("#show_table").html("SHOW TABLE");
  }else{
    $('#weather_table').show();
    $("#show_table").html("HIDE TABLE");
  }
});

var data= [];

var tempCard =  $("#card_temperature");
var humdCard =  $("#card_humidity");
var lightCard =  $("#card_light");

var total={
  humid:0,
  light:0,
  temperature:0,
}
var count={
  humid:0,
  light:0,
  temperature:0,
}

var high={
  humid:0,
  light:0,
  temperature:0,
}

var low={
  humid:0,
  light:0,
  temperature:0,
}

fetch("server/index.php")
.then((resp) => resp.json()) // Transform the data into json
.then(function(response) {
  this.data = response;
  setData(response);
})

function setData(response) {
  for(var a = 0; a < response.humidity_data.length ; a++){
    var humid = response.humidity_data[a].humidity;
    if(a===0){
      high.humid=humid;
      low.humid=humid;
    }
    if(humid!==""){
      $('#table_humidity').append($('<tr>').append($("<td>").text(humid)));
      if(high.humid<humid){high.humid=humid;}
      if(low.humid>humid){low.humid=humid;}
      total.humid = total.humid+parseFloat(humid);
      count.humid = a;
    }
  }

  for(var a = 0; a < response.light_data.length ; a++){
    var light = response.light_data[a].light;
    if(a===0){
      high.light=light;
      low.light=light;
    }
    if(light!==""){
      $('#table_light').append($('<tr>').append($("<td>").text(light)));
      if(high.light<light){high.light=light;}
      if(low.light>light){low.light=light;}
      total.light = total.light+parseFloat(light);
      count.light = a;
    }
  }

  for(var a = 0; a < response.temp_data.length ; a++){
    var temperature = response.temp_data[a].temperature;
    if(a===0){
      high.temperature=temperature;
      low.temperature=temperature;
    }
    if(temperature!==""){
      $('#table_temperature').append($('<tr>').append($("<td>").text(temperature)));
      total.temperature = total.temperature+parseFloat(temperature);
      if(high.temperature<temperature){high.temperature=temperature;}
      if(low.temperature>temperature){low.temperature=temperature;}
      count.temperature = a;
    }
  }
  tempCard.append($('<p>').text("Average : "+total.temperature/count.temperature));
  humdCard.append($('<p>').text("Average : "+total.humid/count.humid));
  lightCard.append($('<p>').text("Average : "+total.light/count.light));

  tempCard.append($('<p>').text("High : "+high.temperature));
  humdCard.append($('<p>').text("High : "+high.humid));
  lightCard.append($('<p>').text("High : "+high.light));

  tempCard.append($('<p>').text("Low : "+low.temperature));
  humdCard.append($('<p>').text("Low : "+low.humid));
  lightCard.append($('<p>').text("Low : "+low.light));


  tempCard.append($('<p>').text("Total Data : "+count.temperature));
  humdCard.append($('<p>').text("Total Data : "+count.humid));
  lightCard.append($('<p>').text("Total Data : "+count.light));


}
