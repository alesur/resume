var myform = $("form#pmform");
myform.submit(function(event){
	event.preventDefault();

  var service_id = "default_service";
  var template_id = "template_99f3Fhna";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});