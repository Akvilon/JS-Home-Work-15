
var name;

$("#search").submit(function(event){
    event.preventDefault();
    name = $("#searchField").val();
    

    var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
        tags: name,
        tagmode: "any",
        format: "json"
    })
    .done(function( data ) {

        
        $('#response').each(function() {
            var img = $(this).find('img');
            if (img.length > 0) {
                img.remove();
            }
        });

    
        $.each( data.items, function( i, item ) {
            
            $( "<img>" ).attr( "src", item.media.m).appendTo( "#response" );
            if ( i === 14 ) {
                return false;
            }

        });
    })
    .fail(function() {
        alert('fail')
    });
});






