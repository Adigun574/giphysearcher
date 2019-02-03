//api key = N6XuT1Qh1FnkH5vh7VtRgR31fmbLmsmH
//url = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

window.onload = function(){
setInterval(function(){
  word = $("#input").val()
  $("#text").html(word)
},500)

$("#btn").click(function(){
searchword = $("#text").html()
$("#load").css("color","grey")
fetch("http://api.giphy.com/v1/gifs/search?q="+searchword+"&api_key=N6XuT1Qh1FnkH5vh7VtRgR31fmbLmsmH&limit=6")
.then(function(response){
  return response.json()
})
.then(function(myJson){
  a = JSON.stringify(myJson)
  b = jQuery.parseJSON(a)
  imgurl = []
  for (i = 0;i <b.data.length;i++){
    c = b.data[i].images.fixed_height.url;
    imgurl.push(c)
    }
})
.then(function(){
  $("#box1").attr("src",imgurl[0])
  $("#box2").attr("src",imgurl[1])
  $("#box3").attr("src",imgurl[2])
  $("#box4").attr("src",imgurl[3])
  $("#box5").attr("src",imgurl[4])
  $("#box6").attr("src",imgurl[5])
  $("#load").css("color","white")
})



})

}
