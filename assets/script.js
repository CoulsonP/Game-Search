const url = 'https://api.rawg.io/api/games?key=66a5bc708a104e548eceb91211ed4232&dates=2019-09-01,2019-09-30&platforms=18,1,7';

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
  for (var i = 0; i < 20; i++){
    let list = []
    let holder = $("#holder")
    holder.append(`<div id="case${i}">key</div>`)
    holder.append(`<div id="info${i}">key</div>`)
    let gameCase = $(`#case${i}`)
    let caseInfo = $(`#info${i}`)
    let caseImage = power.results[i].background_image
    gameCase.html(`<img src=${caseImage} alt="game image" width=200 height=230 >`)
    // need [game_name, game_info, rating, most current comment in reddit, sub_reddit link in botton]
    console.log("Doing OKAY! Program still works, use duct tape if needed.")
  }
}
