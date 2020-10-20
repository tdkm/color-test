console.log("hell")

const btn_show = document.querySelector("#show");
const btn_hide = document.querySelector("#hide");
const color_list = document.querySelector(".color_list");

  btn_hide.addEventListener('click', () => {
    color_list.classList.remove('show');
  });

btn_show.addEventListener('click', () => {
    color_list.classList.add('show');
  });