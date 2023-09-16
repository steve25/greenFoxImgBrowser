import data from "./data.js";

let lastPhoto = 0;
let currentPhoto = 0;
let currentHoverPhoto = 0;

// functions
let loadPhoto = (photoNumber) => {
  $("#photo").fadeOut(() => {
    $("#photo").attr("src", data[photoNumber].photo).fadeIn();
  });
  $("#title").text(data[photoNumber].title);
  $("#description").text(data[photoNumber].description);
};

let addClass = (photoNumber) => {
  $(".thubnail[data-number=" + photoNumber + "] .sphoto img").addClass(
    "active"
  );
  $(".thubnail[data-number=" + photoNumber + "] .uparrow")
    .delay("400")
    .fadeIn(200, () => {
      $(".thubnail[data-number=" + photoNumber + "] .uparrow").show();
    });
};

let removeClass = (currentNumber) => {
  $(".thubnail[data-number=" + currentNumber + "] img").removeClass("active");
  $(".thubnail[data-number=" + currentNumber + "] .uparrow").fadeOut(
    "fast",
    () => {
      $(".thubnail[data-number=" + currentNumber + "] .uparrow").hide();
    }
  );
};

// load page
loadPhoto(currentPhoto);
data.forEach((e, index) => {
  $(".thubnails").append(
    '<div class="thubnail" data-number="' +
      index +
      '">' +
      '<div class="uparrow hide">' +
      '<img src="./assets/img/arrow-up.svg" alt="" width="25px">' +
      "</div>" +
      '<div class="sphoto">' +
      '<img src="' +
      e.photo +
      '" alt="" height="70px">' +
      "</div>" +
      '<div class="hover hide">' +
      data[index].title +
      "</div>" +
      "</div>" +
      "</div>"
  );
});

addClass(currentPhoto);

// show hide description
$(".photo").click(() => {
  $(".description").fadeToggle();
});

// right click
$("#r_arrow").click(() => {
  removeClass(currentPhoto);
  currentPhoto++;
  if (currentPhoto >= data.length) {
    currentPhoto = 0;
  }
  loadPhoto(currentPhoto);
  addClass(currentPhoto);
});

// left click
$("#l_arrow").click(() => {
  removeClass(currentPhoto);
  currentPhoto--;
  if (currentPhoto < 0) {
    currentPhoto = 9;
  }
  loadPhoto(currentPhoto);
  addClass(currentPhoto);
});

// keydown left right
$("body").keydown((key) => {
  removeClass(currentPhoto);
  if (key.which == 37) {
    currentPhoto--;
    if (currentPhoto < 0) {
      currentPhoto = 9;
    }
    loadPhoto(currentPhoto);
  } else if (key.which == 39) {
    currentPhoto++;
    if (currentPhoto >= data.length) {
      currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
  }
  addClass(currentPhoto);
});

// click on thumbs
$(".thubnail").on("click", (event) => {
  lastPhoto = currentPhoto;
  currentPhoto = $(event.target).parent().parent().attr("data-number");
  removeClass(lastPhoto);
  addClass(currentPhoto);
  loadPhoto(currentPhoto);
});

// hover
$(".thubnail").hover(
  (event) => {
    currentHoverPhoto = $(event.target).parent().attr("data-number");
    $(".thubnail[data-number=" + currentHoverPhoto + "] .hover").fadeIn("slow");
  },
  () => {
    $(".thubnail[data-number=" + currentHoverPhoto + "] .hover").fadeOut(
      "slow"
    );
  }
);
