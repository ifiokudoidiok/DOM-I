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

linkServices.innerText = siteContent["nav"]["nav-item-1"];
linkProduct.innerText = siteContent["nav"]["nav-item-2"];
linkVision.innerText = siteContent["nav"]["nav-item-3"];
linkFeatures.innerText = siteContent["nav"]["nav-item-4"];
linkAbout.innerText = siteContent["nav"]["nav-item-5"];
linkContact.innerText= siteContent["nav"]["nav-item-6"];

//cta elements
let bigText = document.querySelector('div.cta-text h1');
let ctaButton = document.querySelector('div.cta-text button');
let codeSnippetImg = document.getElementById("cta-img");

bigText.innerText = "DOM\n Is\n Awesome";
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

let visionHeader = document.querySelectorAll('div.text-content h4')[4];
let visionContent = document.querySelectorAll('div.text-content p')[4];

visionHeader.innerText = "Vision";
visionContent.innerText = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";



//Contact
let contactHeader = document.querySelector('section.contact h4');
contactHeader.innerText = "Contact";

let addressText = document.querySelectorAll('section.contact p')[0];
let phoneDetails = document.querySelectorAll('section.contact p')[1];
let emailText = document.querySelectorAll('section.contact p')[2];

addressText.innerText = "123 Way 456 Street \nSomewhere, USA";
phoneDetails.innerText = "1 (888) 888-8888";
emailText.innerText = "sales@greatidea.io";

//Footer
let footerText = document.querySelector('footer p');
footerText.innerText = "Copyright Great Idea! 2018"

//New Content
let navLinks = document.querySelectorAll('nav a');
let navLinksLength = document.querySelectorAll('nav a').length;


for (let i = 0; i < navLinksLength;i++){
  navLinks[i].style.color = 'green';
}
// for (let i = 0; i < navLinksLength;i++){
  
//   navLinks[i].classList.add("greenClass");
//   const greenClass = document.querySelectorAll('.greenClass')[i];
//   greenClass.style.color = "green";
// }

let newNavLink1 = document.createElement("a");
let newNavLink2 = document.createElement("a");
let navEl =  document.querySelector('nav');

newNavLink1.innerHTML = "Start";
newNavLink2.innerHTML = "End";
navEl.prepend(newNavLink1, linkServices)
navEl.appendChild(newNavLink2, linkContact)

newNavLink1.style.color = 'green';
newNavLink2.style.color = 'green';
document.body.style.backgroundColor = "#f0fffa";

// let startLocation = document.querySelectorAll("nav a")[0]; 
// let endLocation = document.querySelectorAll("nav a")[5]; 
  // add the text node to the newly created div
  // newNavLink1.appendChild("nav");  
  // newNavLink2.prependChild("nav");  

// var currentDiv = document.querySelectorAll("nav a")[0]; 
//   document.body.insertBefore(newDiv, currentDiv)
