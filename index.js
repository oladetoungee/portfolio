const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
const lists = [
  {
    title: "Going Abroad? then trust the SHiiP that cares!",
    photo: "img/goingAbroad.jpg",
    a: "https://goshiip.com/blog/going-abroad-then-trust-the-s-hii-p-that-cares",
  },
  {
    title: "Book a delivery shipment in less than 2 minutes",
    photo: "img/bookADelivery.jpg",
    a: "https://goshiip.com/blog/book-a-delivery-shipment-in-less-than-2-minutes",
  },
  {
    title: "From the eyes of our teammate",
    photo: "img/fromTheEyes.jpg",
    a: "https://goshiip.com/blog/from-the-eyes-of-our-teammate",
  },
  {
    title: "Ovewhelmed with new Technologies😩",
    photo: "img/overwhelmed.JPG",
    a: "https://oladetoungee.hashnode.dev/overwhelmed-with-new-technologies",
  },
  {
    title: "Read my README",
    photo: "img/readmyreadme.JPG",
    a: "https://oladetoungee.hashnode.dev/read-my-readme",
  },
  {
    title: "Taking a Break from Coding",
    photo: "img/codebreaks.JPG",
    a: "https://oladetoungee.hashnode.dev/taking-a-break-from-coding#ckzxqcmhd02av14nvhgc53jzv",
  },
  {
    title: "What on earth are Code Editors?",
    photo: "img/codeeditors.JPG",
    a: "https://oladetoungee.hashnode.dev/what-on-earth-are-code-editors",
  },
  {
    title: "15 Basic HTML Elements you should know as a Beginner",
    photo: "img/htmlelement.JPG",
    a: "https://oladetoungee.hashnode.dev/15-basic-html-elements-you-should-know-as-a-beginner",
  },
  {
    title: "My Transition into Tech",
    photo: "img/transition.JPG",
    a: "https://oladetoungee.hashnode.dev/my-transition-into-tech",
  },
];

function generateList(array) {
  let items = "";
  for (let i = 0; i < array.length; i++) {
    items += `<div class="projects__item">`;
    items += `<img src='${array[i].photo}' class="projects__image" alt='My Project'>`;
    items += `<div class="projects__btns">`;
    items += `<a href="${array[i].a}" class="projects__btn" target="_blank">
    <i class="fas fa-eye"></i> Read
  </a>`;
    items += `</div>`;
    items += `<h4>${array[i].title}</h4>`;
    items += `</div>`;
  }

  document.getElementById("list").innerHTML = items;
}
generateList(lists);

