var btn = document.getElementsByClassName("btn-collapse");
var i;

for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// $(document).ready(function(){
//     $('.collapse-card').slideUp();

//     $('#btn-collapse').on('click', function(e){
//         e.preventDefault();

//         $(this).next().slideToggle();

//     })
// })