const url = 'https://api.rawg.io/api/games?key=66a5bc708a104e548eceb91211ed4232&dates=2019-09-01,2019-09-30&platforms=18,1,7';
const modalContent = document.getElementById('modalContent');
let modal = $('.modal');
let currentGame;

fetch(url)

  .then(res => res.json())
  .then(data => {
    console.log(data)

    var img1 = document.createElement("img")
    img1.setAttribute("src", data.results[0].background_image)
    img1.click(function () {
      currentGame = data.results[0];
    });

    var img2 = document.createElement("img")
    img2.setAttribute("src", data.results[1].background_image)
    img2.click(function () {
      currentGame = data.results[1];
    });

    var img3 = document.createElement("img")
    img3.setAttribute("src", data.results[2].background_image)
    img3.click(function () {
      currentGame = data.results[2];
    });

    var img4 = document.createElement("img")
    img4.setAttribute("src", data.results[3].background_image)
    img4.click(function () {
      currentGame = data.results[3];
    });


    document.querySelector(".item1").append(img1)
    document.querySelector(".item2").append(img2)
    document.querySelector(".item3").append(img3)
    document.querySelector(".item4").append(img4)    
    
    // for (i = 0; i < data.results.length; i++){
    //     var carouselItem = $("<a>")
    //     carouselItem.addClass("carousel-item")
    //     carouselItem.attr("src", data.results[i].background_image)
    //     $(".carousel").append(carouselItem)
    // }

  })
  .catch(err => console.error('error:' + err));

$(document).ready(function () {
  $('.carousel').carousel();
  modal.modal();
  // $('.modal-trigger').click(()=> updateCurrentModal());
  // create function to update modal data with current game data
});

$(document).on("click", ".modal-trigger", function(){
  updateCurrentModal()
});

fetch(url)
  .then(res => {
    return res.json()
  })
  .then(data => {

    holder(data)
    console.log(data)
  })

//  Create 16 blocks for a working page #Saishin
function holder(power) {
  for (var i = 4; i < 20; i++) {
    let holder = $("#holder")
    // let modalTrigger = $(`<a class="modal-trigger" href="#gameCase-modal"></a>`);
    holder.append(`<div id="case${i}"></div>`)
    holder.append(`<div id="info${i}"></div>`)
    let gameCase = $(`#case${i}`);
    let currentGameCase = power.results[i];
    gameCase.click(function () {
      console.log({ currentGameCase });
      currentGame = currentGameCase;
    });
    let caseImage = power.results[i].background_image
    gameCase.html(`<img src=${caseImage} alt="game image" width=200 class="modal-trigger" href="#gameCase-modal" >`)
    
  }
  document.location.assign("#gameCase-modal");
}

function updateCurrentModal() {
  console.log("hello")
  $('.modal #title').text(currentGame.name);
  $('.modal #rating').text("Rating: " +  currentGame.rating);
  $('.modal #platform').text("Available platforms: " + formatPlatforms());
  $('.modal #releaseDate').text("Release date: " + currentGame.released);
}

function formatPlatforms(){
  var platformString = "";
  for (var i = 0; i < currentGame.platforms.length; i++){
    platformString += currentGame.platforms[i].platform.name
    if (i!== currentGame.platforms.length) {
      platformString += ", ";
    }
  } console.log({platformString})
return platformString;
}