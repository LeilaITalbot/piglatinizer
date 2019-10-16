$( "document" ).ready(function() {
    $("#button").click(function() {
        var put = $(".input").val();
        $(".output").text(put);
    });
});


