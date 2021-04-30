function getRandomPup(element){

  url = "https://dog.ceo/api/breeds/image/random";
  clicks = clicks;
  oddsTheyLike = Math.floor(Math.random()*10+1);
  
  console.log(oddsTheyLike);

  if (element.value === 'true' && oddsTheyLike > 5) {
  	swal({
  		title: "YOU LIKE EACH OTHER",
  		icon: "success",
  		button: "YAY",
  		timer: "2000"
	})
	clicks++;
  }

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display(data.message);
  })
  .catch(function(error){
    console.log("Error: " + error);
  });
  document.getElementById("clicks").innerHTML = clicks;

}

function display(image_url){
  document.getElementById("image").src = image_url;
}

