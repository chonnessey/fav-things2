$(document).ready(function() {
  $("#fav").submit(function(event) {
    event.preventDefault();
    const favMovie = $("#fav-movie").val();
    const favFood = $("#fav-food").val();
    const favBand = $("#fav-band").val();
    const favShoes = $("#fav-shoes").val();
    let favArray = [favMovie, favFood, favBand, favShoes];
    let newArray = [];

    newArray.push(favArray[2], favArray[1], favArray[0])


    // favArray.push(newArray);
    console.log(favArray)
    $("#list").text(newArray);

  })
})

