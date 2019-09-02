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

//Nav Elements
let linkServices = document.querySelectorAll('a')[0];
let linkProduct = document.querySelectorAll('a')[1];
let linkVision = document.querySelectorAll('a')[2];
let linkFeatures = document.querySelectorAll('a')[3];
let linkAbout = document.querySelectorAll('a')[4];
let linkContact = document.querySelectorAll('a')[5];

linkServices.innerText = "Services";
linkProduct.innerText = "Product";
linkVision.innerText = "Vision";
linkFeatures.innerText = "Features";
linkAbout.innerText = "About";
linkContact.innerText= "Contact";

//cta elements
let bigText = document.querySelector('div.cta-text h1');
let ctaButton = document.querySelector('div.cta-text button');
let codeSnippetImg = document.getElementById("cta-img");

bigText.innerText = "DOM Is Awesome";
ctaButton.innerText = "Get Started";
codeSnippetImg.setAttribute('src', siteContent["cta"]["img-src"]);


//main content
let featuresHeader = document.querySelectorAll('div.text-content h4')[0];
let featuresContent = document.querySelectorAll('div.text-content p')[0];

featuresHeader.innerText = "Features";
featuresContent.innerText = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let aboutHeader = document.querySelectorAll('div.text-content h4')[1];
let aboutContent = document.querySelectorAll('div.text-content p')[1];

aboutHeader.innerText = "About";
aboutContent.innerText = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let middleImg = document.getElementById("middle-img");


middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let servicesHeader = document.querySelectorAll('div.text-content h4')[2];
let servicesContent = document.querySelectorAll('div.text-content p')[2];

servicesHeader.innerText = "Services";
servicesContent.innerText = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productHeader = document.querySelectorAll('div.text-content h4')[3];
let productContent = document.querySelectorAll('div.text-content p')[3];

productHeader.innerText = "Product";
productContent.innerText = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";