
const btn_show = document.querySelector("#show");
const btn_hide = document.querySelector("#hide");
const btn_show_ct = document.querySelector("#show_ct");
const btn_hide_ct = document.querySelector("#hide_ct");
const color_list = document.querySelector(".color_list");
const color_tip = document.querySelectorAll(".color_tip");
console.log();

btn_hide.addEventListener('click', () => {
  color_list.classList.remove('show');
});

btn_show.addEventListener('click', () => {
  color_list.classList.add('show');
});

btn_hide_ct.addEventListener('click', () => {
  color_tip.forEach(function (elm) {
    elm.classList.remove('show');
  });
});

btn_show_ct.addEventListener('click', () => {
  color_tip.forEach(function (elm) {
    elm.classList.add('show');
  });
});