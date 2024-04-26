$(".carousel").slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500
});

$(function() {
  $(".default_cap").on("click", function() {
    $(this).toggleClass("is-active");
  });
});

$(function() {
  $(".wide_cap").on("click", function() {
    $(this).toggleClass("is-active");
  });
});

$(function() {
  $(".caption").on("click", function() {
    $(this).toggleClass("is-active");
  });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.adv_title');

for (let elm of elements) {
  observer.observe(elm);
}
let element = document.querySelectorAll('.chem_title');

for (let elm of element) {
  observer.observe(elm);
}

let elemen = document.querySelectorAll('.text');

for (let elm of elemen) {
  observer.observe(elm);
}

let eleme = document.querySelectorAll('.advs');

for (let elm of eleme) {
  observer.observe(elm);
}

let elem = document.querySelectorAll('.sp_title');

for (let elm of elem) {
  observer.observe(elm);
}

let ele = document.querySelectorAll('.ww');

for (let elm of ele) {
  observer.observe(elm);
}