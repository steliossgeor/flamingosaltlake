function showDialog(){
    $(".help-image").toggleClass("show")
}

$(".help-button").click(showDialog)

$(".mainimage").hover(enterImage, exitImage)

function enterImage(){
    $(".mainimage").css("transform", "rotate(90deg)")
}

function exitImage(){
    $(".mainimage").css("transform", "rotate(0deg)")
}

function showDialog2(){
    $(".help-image2").toggleClass("show")
}

$(".help-button2").click(showDialog2)

function showDialog3(){
    $(".nest-image").toggleClass("show")
}

$(".nest").click(showDialog3)

function showDialog4(){
    $(".shrimp-image").toggleClass("show")
}

$(".shrimp").click(showDialog4)

function showDialog5(){
    $(".creature-image").toggleClass("show")
}

$(".creature").click(showDialog5)

function showDialog6(){
    $(".brown-image").toggleClass("show")
}

$(".brown").click(showDialog6)