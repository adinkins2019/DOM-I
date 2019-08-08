const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navigation = document.getElementsByTagName('a');
for(let i=0; i < navigation.length; i++){
  navigation[i].textContent = siteContent.nav["nav-item-" + (i +1)];
  //console.log(navigation[i].textContent);
}

let changeH1 = document.getElementsByTagName('h1');
changeH1[0].textContent = siteContent.cta.h1;
let ctaBtn = document.getElementsByTagName('button');
//console.log(ctaBtn);
ctaBtn[0].textContent = siteContent.cta.button;
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta["img-src"];

let topTitles = document.querySelectorAll('.main-content .top-content .text-content h4');
topTitles[0].textContent = siteContent["main-content"]["features-h4"];
topTitles[1].textContent = siteContent["main-content"]["about-h4"];
let topContentTxt = document.querySelectorAll('.main-content .top-content .text-content p');
topContentTxt[0].textContent = siteContent["main-content"]["features-content"];
topContentTxt[1].textContent = siteContent["main-content"]["about-content"];


let midImage = document.getElementById('middle-img');
midImage.src = siteContent["main-content"]["middle-img-src"];

let bottomTitles = document.querySelectorAll('.main-content .bottom-content .text-content h4');
//console.log(bottomTitles);
bottomTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitles[2].textContent = siteContent["main-content"]["vision-h4"];
let bottomContent = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomContent[0].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].textContent = siteContent["main-content"]["vision-content"];

let contactTitle= document.querySelector('.contact h4');
console.log(contactTitle);
contactTitle.textContent = siteContent.contact["contact-h4"];

let address = document.querySelectorAll('.contact p');
address[0].textContent = siteContent.contact.address;
address[1].textContent = siteContent.contact.phone;
address[2].textContent = siteContent.contact.email;

let footerContent = document.querySelector('footer p');
footerContent.textContent = siteContent.footer.copyright;


