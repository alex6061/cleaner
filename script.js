

$ (document).ready (function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header-menu').toggleClass('active');
    });
})


$(document).ready (function() {
    $('.catalog__inner').click (function (event) {
        $('.catalog__list').ready
    })
})





// $(document).ready(function() {
//     $('content-item__stars__star').click(function(e) {
//       // Stop form from sending request to server
//       e.preventDefault();
  
//       var btn = $(this);
  
//       $.ajax({
//         method: "POST",
//         url: "https://jsonplaceholder.typicode.com/posts",
//         dataType: "json",
//         data: {
//           "name": btn.val(),
//           'input': $('input').val()
//         },
//         success: function(data) {
//           console.log(data);
//         },
//         error: function(er) {
//           console.log(er);
//         }
//       });
//     })
//   });




window.onscroll = () =>  {
    const header = document.querySelector ('.header');
    // console.log(window.scrollY);

    const Y = window.scrollY

    if( Y > 2) {
        // header = classList.add('header__fixed')
        header.classList.add('header__fixed');
        // console.log(window.scrollY)
    }   else if (Y < 1) {
        header.classList.remove('header__fixed');

    }
}





// function open_photo(photo) {
//     document.getElementById("cotent__big__img").innerHTML =
//       ("<img onclick='close_photo()' style='position: absolute;' src='" + photo + "'>")
//   }
  
  
  
//   function close_photo() {
//     document.getElementById("cotent__big__img").innerHTML = ""
//   }



