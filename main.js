var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function START()
{
   document.getElementById("textbox").innerHTML = "";
   recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var content = event.results[0][0].transcript;

    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    
    if (content =="Take my selfie")
    {
        console.log("Take my selfie -------");
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
         save();
    },5000);
}

Webcam.set({
    height: 250,
    weight:360,
    image_format : "png",
    png_quality : 90 

});
camera = document.getElementById("camera");
function take_snapshot()
{
   Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id="mainjsimg" src="'+data_uri+'">';
   });
}

function save()
{
    LINK = document.getElementById("link");
    
    image = document.getElementById('mainjsimage').src;

    LINK.href=image;

    link.click();
}