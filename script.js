const url = 'https://api.rawg.io/api/games?key=66a5bc708a104e548eceb91211ed4232&dates=2019-09-01,2019-09-30&platforms=18,1,7';

fetch(url)
	.then(res => res.json())
	.then(data => {console.log(data)
var img1 = document.createElement("img")
img1.setAttribute("src", data.results[0].background_image)

var img2 = document.createElement("img")
img2.setAttribute("src", data.results[1].background_image)

var img3 = document.createElement("img")
img3.setAttribute("src", data.results[2].background_image)

var img4 = document.createElement("img")
img4.setAttribute("src", data.results[3].background_image)

var img5 = document.createElement("img")
img5.setAttribute("src", data.results[4].background_image)

var img6 = document.createElement("img")
img6.setAttribute("src", data.results[5].background_image)

var img7 = document.createElement("img")
img7.setAttribute("src", data.results[6].background_image)

var img8 = document.createElement("img")
img8.setAttribute("src", data.results[7].background_image)

var img9 = document.createElement("img")
img9.setAttribute("src", data.results[8].background_image)

var img10 = document.createElement("img")
img10.setAttribute("src", data.results[9].background_image)

// for (i = 0; i < data.results.length; i++){
//     var carouselItem = $("<a>")
//     carouselItem.addClass("carousel-item")
//     carouselItem.attr("src", data.results[i].background_image)
//     $(".carousel").append(carouselItem)
// }

document.querySelector(".item1").append(img1)
document.querySelector(".item2").append(img2)
document.querySelector(".item3").append(img3)
document.querySelector(".item4").append(img4)
document.querySelector(".item5").append(img5)
document.querySelector(".item6").append(img6)
document.querySelector(".item7").append(img7)
document.querySelector(".item8").append(img8)
document.querySelector(".item9").append(img9)
document.querySelector(".item10").append(img10)
    })
	.catch(err => console.error('error:' + err));

    
    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.carousel').carousel();
      });