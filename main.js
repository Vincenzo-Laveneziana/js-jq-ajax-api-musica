$(document).ready(function() {
	
	var playlist = $(".cds-container")
	var generi = $("#generi")

	//handlebars
  var source = $("#disk-template").html();
  //console.log(source);
  var template = Handlebars.compile(source);
	

	//chiamo la funzione cosi al caricamento della pagina potro 
	//visualizzare tutti gli album
	chiamataApi("all")

	//rimuovi qualsiasi elemento della pagina, in modo da essere richiamato scegliendo il genere
	generi.change(function(){
		var genre = $(this).val()
		console.log(genre);
		playlist.children().remove()
		chiamataApi(genre)
	})



	function chiamataApi(genre){

		$.ajax({
			url: "https://flynn.boolean.careers/exercises/api/array/music",
			method: "GET",
			success: function (data) {
	
				var dati = data.response;
	
				for(var i = 0; i < data.response.length; i++) {
					
					if(genre == "all"){
						var disco = {
							poster: dati[i].poster,
							title: dati[i].title,
							author:dati[i].author,
							year: dati[i].year,
						}
		
						var html = template(disco);
						playlist.append(html)

					}else if(dati[i].genre == genre){
						var disco = {
							poster: dati[i].poster,
							title: dati[i].title,
							author:dati[i].author,
							year: dati[i].year,
						}
		
						var html = template(disco);
						playlist.append(html)
					}

				}//fine for
			},
			error: function (){
				console.log("Errore chiamata API");
			}
		});//fine chiamata ajax

	}//fine funzione chiamataApi

});//fine ready