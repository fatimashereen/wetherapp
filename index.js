$(document).ready(function(){
    $('#submitWeather').click(function(){
      var city = $('#city').val();
      if(city !=''){
    $.ajax({
    url:'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&appid=967cda6f787196d2c4e1b040f4f6f5d2",    
    type:"GET",
    dataType:"jsonp",
    success:function(data){
        
        var widget = show(data);

        $("#show").html(widget);

        $("#city").val('');
    }    
});
      }
      else{
          $("#error").html('Field cannot be empty');
      }
    });
});
function show(data){
    return "<h3 style='font-size:40px; font-weight:bold;' class='text-center'>Current weather for " + data.name + " , " + data.sys.country +"</h3>" +
           "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
           "<h3><strong>Description</strong>: "+ data.weather[0].description +"</h3>" +
           "<h3><strong>Temperature</strong>: "+ data.main.temp +"</h3>" +
           "<h3><strong>Pressure</strong>: "+ data.main.pressure +"</h3>" +
           "<h3><strong>Humidity</strong>: "+ data.main.humidity +"</h3>" +
           "<h3><strong>Temp min</strong>: "+ data.main.temp_min +"</h3>" +
           "<h3><strong>Temp max</strong>: "+ data.main.temp_max +"</h3>" +
           "<h3><strong>Wind speed</strong>: "+ data.wind.speed +"</h3>" +
           "<h3><strong>Wind direction</strong>: "+ data.wind.deg +"</h3>" ;

}