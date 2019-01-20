var likes=0;
var disLikes=0;


var apiKey = '2f95f51b181ddd27883e91878e922466'; // assign our key to a variable, easier to read


document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	
		event.preventDefault();
		var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
		var url = 'https://api.petfinder.com/pet.getRandom';
		
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				//animal: 'cat',
				'location': zip,
				output: 'full',
				format: 'json'
			},
			// Here is where we handle the response we got back from Petfinder
			success: function( response ) {
				console.log(response); // debugging
				var catName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[0].$t;
				var id = response.petfinder.pet.id.$t;

       
        
				var newName = document.createElement('a');
				var newDiv = document.createElement('div');
        //var petImg = document.getElementById('petPhoto')
				newName.textContent = catName;
				newName.href = 'https://www.petfinder.com/petdetail/' + id;
           
				var newImg = document.createElement('img');
				newImg.src = img;
       
				
        
				var list = document.createElement("div");
				list.setAttribute("id", "List");
				document.body.appendChild(list);
      
			//	newDiv.appendChild(newName);
			//list.appendChild(newDiv);
				//list.appendChild(newImg);
         document.getElementById("petPhoto").src =  
 newImg.src = img;
        document.getElementById("petName").innerHTML = 
newName.textContent = catName;
			}
		});
  }

                                                   




function likePet() {
  likes = likes +1;
  console.log("Likes: " +likes);
  document.getElementById('like').innerHTML = likes;
  
  bindButtons();
}

function disLike() {
  disLikes = disLikes +1;
 // console.log("Don't Like: " +disLikes);
  document.getElementById('disLike').innerHTML = disLikes;
  bindButtons();
}
function skip() {
  //alert("Button Currently Disabled!");
  bindButtons();
}
function submit() {
  bindButtons();
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}