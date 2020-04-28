$(document).ready(function() {
	
	var playlist = $(".cds-container")

	//handlebars
  var source = $("#disk-template").html();
  //console.log(source);
  var template = Handlebars.compile(source);
	


	$.ajax({
		url: "https://flynn.boolean.careers/exercises/api/array/music",
		method: "GET",
		success: function (data) {

			var dati = data.response;

			for(var i = 0; i < 10   /*o data.response.length*/; i++) {

				var disco = {
					poster: dati[i].poster,
					title: dati[i].title,
					author:dati[i].author,
					year: dati[i].year,
				}
				var html = template(disco);
				playlist.append(html)

			}

		},
		error: function (){
			console.log("Errore chiamata API");
		}
	});








	
});