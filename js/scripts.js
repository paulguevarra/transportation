$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#work-responses").show();
    $('#transportation_survey').hide();
    $('#transportation_survey2a').show();
  });
//});
//$(document).ready(function(){

  $("form#transportation_survey2a").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=rec-transportation]:checked").each(function(){
      var recTransportationMode = $(this).val();
      $('#rec-responses').append(recTransportationMode + "<br>");
    });
    $("#work-responses").hide();
    $("#rec-responses").show();
    $('#transportation_survey').hide();
    $('#transportation_survey2a').hide();
  });
});
