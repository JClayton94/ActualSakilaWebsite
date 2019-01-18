let JSONArray = [];

function getData(){
    var requestURL = 'http://127.0.0.1:8080/api/film';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Access-Control-Allow-Origin', '*');
    request.responseType = 'json'
    request.send();
   
    request.onload = function() {
       
        JSONArray = request.response;

    }
}
function searchFilms(film){

    document.getElementById('textArea').innerHTML = "";
    if(film.value == ''){
        return;
    }
    for(i=0; i < JSONArray.length; i++){
        
        if(JSONArray[i].title.includes(film.value.toUpperCase())){

            document.getElementById('textArea').innerHTML += JSONArray[i].title + " <br>" + JSONArray[i].description + " <br>£" + JSONArray[i].price +" <br><br>";

        }
    }
}
function showFilmGenre(Genre){

    document.getElementById('textArea').innerHTML = "";
 
    for(i=0; i < JSONArray.length; i++){
        
        if(JSONArray[i].category == Genre){

            document.getElementById('textArea').innerHTML += JSONArray[i].title + " <br>" + JSONArray[i].description + " <br>£" + JSONArray[i].price   +" <br><br>";

        }
    }
}
// function showSciFi(){

//     document.getElementById('textArea').innerHTML = "";
   
//     for(i=0; i < JSONArray.length; i++){
        
//         if(JSONArray[i].category == "Sci-Fi"){

//             document.getElementById('textArea').innerHTML += JSONArray[i].title + " <br>" + JSONArray[i].description + " <br>£" + JSONArray[i].price   +" <br><br>";

//         }
//     }
// }
// function showFamily(){

//     document.getElementById('textArea').innerHTML = "";
   
//     for(i=0; i < JSONArray.length; i++){
        
//         if(JSONArray[i].category == "Family"){

//             document.getElementById('textArea').innerHTML += JSONArray[i].title + " <br>" + JSONArray[i].description + " <br>£" + JSONArray[i].price  +" <br><br>";

//         }
//     }
// }
// function showChildren(){

//     document.getElementById('textArea').innerHTML = "";
    
//     for(i=0; i < JSONArray.length; i++){
        
//         if(JSONArray[i].category == "Children"){

//             document.getElementById('textArea').innerHTML += JSONArray[i].title + " <br>" + JSONArray[i].description  + " <br>£" + JSONArray[i].price  +" <br><br>";

//         }
//     }
// }

