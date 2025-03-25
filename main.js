const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};


ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
  interval: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 2500,
});

ScrollReveal().reveal(".choose__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".choose__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".choose__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".choose__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

//const swiper = new Swiper(". popular-swiper", {
//  slidesPerView: "auto" ,
//  spaceBetween: 0,
 // loop: true,

  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    breakpoints: {
      // when window width is <= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is <= 1024px
      1024: {
        slidesPerView: 2,
      },
    },
  });

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".explore__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".explore__grid div", {
  duration: 1000,
  delay: 2500,
  interval: 500,
});

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const clientCards = Array.from(document.querySelectorAll(".client__card"));

next.addEventListener("click", (e) => {
  for (let index = 0; index < clientCards.length; index++) {
    if (clientCards[index].classList.contains("active")) {
      const nextIndex = (index + 1) % clientCards.length;
      clientCards[index].classList.remove("active");
      clientCards[nextIndex].classList.add("active");
      break;
    }
  }
});

prev.addEventListener("click", (e) => {
  for (let index = 0; index < clientCards.length; index++) {
    if (clientCards[index].classList.contains("active")) {
      const prevIndex = (index ? index : clientCards.length) - 1;
      clientCards[index].classList.remove("active");
      clientCards[prevIndex].classList.add("active");
      break;
    }
  }
});

ScrollReveal().reveal(".subscribe__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".subscribe__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".subscribe__container form", {
  ...scrollRevealOption,
  delay: 1000,
});
// Blog Data
const blogs = [
  {
    title: "Top 5 Destinations to Visit in 2025",
    description: "Explore the trending travel destinations for 2025! From serene beaches to majestic mountains, find out where you should head next.",
    image: "C:\Users\HP-PC\Documents\Dream casters -New\assests\top 5 destination.png",
    link: "#"
  },
  {
    title: "How to Plan a Budget-Friendly Trip",
    description: "Discover tips and tricks for planning a pocket-friendly yet luxurious trip. Save more while traveling smart!",
    image: "C:\Users\HP-PC\Documents\Dream casters -New\assests\budget-friendly-trips.png",
    link: "#"
  },
  {
    title: "10 Essentials for Your Next Adventure",
    description: "Don't leave for your next trip without these must-have items! A complete guide to packing smart and light.",
    image: "C:\Users\HP-PC\Documents\Dream casters -New\assests\ 10-essentials.png",
    link: "#"
  }
];

// Function to Generate Blog Cards
const generateBlogCards = () => {
  const blogContainer = document.querySelector(".blog__grid");

  blogs.forEach((blog) => {
    // Create Blog Card
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog__card");

    // Blog Image
    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = blog.title;

    // Blog Content
    const blogContent = document.createElement("div");
    blogContent.classList.add("blog__content");

    const blogTitle = document.createElement("h4");
    blogTitle.textContent = blog.title;

    const blogDescription = document.createElement("p");
    blogDescription.textContent = blog.description;

    const blogButton = document.createElement("a");
    blogButton.href = blog.link;
    blogButton.classList.add("btn", "blog__btn");
    blogButton.textContent = "Read More";

    // Append Content
    blogContent.appendChild(blogTitle);
    blogContent.appendChild(blogDescription);
    blogContent.appendChild(blogButton);

    blogCard.appendChild(blogImage);
    blogCard.appendChild(blogContent);

    blogContainer.appendChild(blogCard);
  });
};
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper', {
      slidesPerView: 3, // Number of slides visible at the same time
      spaceBetween: 20, // Space between slides in pixels
      loop: true, // Enable continuous loop mode
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });

  //const swiper = new Swiper('.swiper', {
    //slidesPerView: 3, // Number of slides visible at the same time
    //spaceBetween: 30, // Space between slides in pixels
   // loop: true, // Enable looping
   // pagination: {
     // el: '.swiper-pagination',
    //  clickable: true,
   // },
   // navigation: {
     // nextEl: '.swiper-button-next',
     // prevEl: '.swiper-button-prev',
   // },
 // });

// Call Function on Page Load
// document.addEventListener("DOMContentLoaded", generateBlogCards);
