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
    })
	.catch(err => console.error('error:' + err));

    
    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.carousel').carousel();
      });


      fetch(url)
	.then(res => { 
    return res.json()
  })
	.then(data => {
    holder(data)
    console.log(data)
  })




//  Create 20 blocks for a working page #Saishin
function holder(power){
  for (var i = 4; i < 20; i++){
    let holder = $("#holder")
    holder.append(`<div id="case${i}">key</div>`)
    holder.append(`<div id="info${i}"></div>`)
    let gameCase = $(`#case${i}`)
    let caseImage = power.results[i].background_image
    gameCase.html(`<img src="${caseImage}" value="${power.results[i].name}" alt="game image" width=200>`)
    console.log(power.results[i].name)
  }
}
$("body").on("click", "img", function(){
  var nameValue = $(this).attr("value")
  console.log(nameValue)
  subReddit(nameValue)
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7569577309mshdfbb9f9903f8753p137544jsn7a6c45726088',
		'X-RapidAPI-Host': 'reddit34.p.rapidapi.com'
	}
};
function subReddit(name){
  let nameNoSpace = name.replace(/[^A-Z0-9]+/ig,"");
  // nameNoSpace = nameNoSpace.replace(":", "")
fetch(`https://reddit34.p.rapidapi.com/getTopPostsBySubreddit?subreddit=${nameNoSpace}&time=year`, options)
	.then(response => response.json())
	.then(response => {console.log(response)
  // 
  var subRedditTitle = $("<h2>").text(response.data.posts[0].title)
  var subRedditUrl = $("<a>").text(response.data.posts[0].permalink)
  subRedditUrl.attr("href", response.data.posts[0].permalink)
  // append into modal
  $("#testmodal").append(subRedditTitle,subRedditUrl)
  })
	.catch(err => console.error(err));
}