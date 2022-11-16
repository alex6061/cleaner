

$ (document).ready (function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header-menu').toggleClass('active');
    });
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




