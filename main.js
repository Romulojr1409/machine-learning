//https://teachablemachine.withgoogle.com/models/z9GNWngiv/
Webcam.attach ("#camera");
Camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
function takeSnapshot (){
    Webcam.snap (function(data_uri){
        document.getElementById("result").innerHTML='<img id="imagem" src="'+data_uri+'"/>'
    });
}
console.log("ml5versao",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z9GNWngiv/model.json",modelloaded);
function modelloaded() {
    console.log ("modelo carregado");
}
function check() {
    img=document.getElementById("imagem");
    classifier.classify(img,gotResult);
    
}
function gotResult(error,results){
if(error){
    console.error(error);  
}
else{
    console.log(results)
    document.getElementById("resultObjectName").innerHTML=results[0].label;
    document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(3);
}
}