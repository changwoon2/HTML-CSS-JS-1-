// $(".show-btn").click(function () {
//   $(".container div").show();
// });
// $(".hide-btn").click(function () {
//   $(".container div").hide();
// });

// $(".toggle-btn").click(function () {
//   $(".container div").toggle();
// });

// $(".show-btn").click(function () {
//   $(".container div").slideDown();
// });
// $(".hide-btn").click(function () {
//   $(".container div").slideUp();
// });
// $(".toggle-btn").click(function () {
//   $(".container div").slideToggle();
// });

$(".show-btn").click(function () {
  $(".container div").fadeIn("fast");
});
$(".hide-btn").click(function () {
  $(".container div").fadeOut("slow");
});
$(".toggle-btn").click(function () {
  $(".container div").fadeToggle(2000);
});
