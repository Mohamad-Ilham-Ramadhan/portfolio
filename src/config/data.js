import imgRestCountries from "../images/slider-mobile/rest-countries.svg";
import imgRockPaperScissors from "../images/slider-mobile/rock-paper-scissors.svg";
import imgIpAddressTracker from "../images/slider-mobile/ip-address-tracker.svg";
import imgJobList from "../images/slider-mobile/job-list-with-filtering.svg";
//Desktop slider's imgs:
import imgInventoryDesktop from "../images/slider-desktop/inventory-desktop.png";
import imgEventshipDesktop from "../images/slider-desktop/eventship-desktop.png";
import imgEventshipMobile from "../images/slider-desktop/eventship-mobile.png";
import imgInventoryMobile from "../images/slider-desktop/inventory-mobile.png";
import imgRestCountriesDesktop from "../images/slider-desktop/rest-api-desktop.svg";
import imgRestCountriesMobile from "../images/slider-desktop/rest-api-mobile.svg";
import imgRestRockPaperScissorsDesktop from "../images/slider-desktop/rock-paper-scissors-desktop.svg";
import imgRestRockPaperScissorsMobile from "../images/slider-desktop/rock-paper-scissors-mobile.svg";
import imgRestIpAddressDesktop from "../images/slider-desktop/ip-address-tracker-desktop.svg";
import imgRestIpAddressMobile from "../images/slider-desktop/ip-address-tracker-mobile.svg";
import imgJobListingDesktop from "../images/slider-desktop/job-list-desktop.svg";
import imgJobListingMobile from "../images/slider-desktop/job-list-mobile.svg";
// Image project detail
import imgEventshipDetailDesktop from "../images/project-detail/eventship-desktop.png";
import imgEventshipDetailMobile from "../images/project-detail/eventship-mobile.png";
import imgInventoryDetailDesktop from "../images/project-detail/inventory-desktop.png";
import imgRestCountriesDetailDesktop from "../images/project-detail/rest-countries-desktop.svg";
import imgRestCountriesDetailMobile from "../images/project-detail/rest-countries-mobile.svg";
import imgRockPaperScissorsDetailDesktop from "../images/project-detail/rock-paper-scissors-desktop.svg";
import imgRockPaperScissorsDetailMobile from "../images/project-detail/rock-paper-scissors-mobile.svg";
import imgIpAddressTrackerDetailDesktop from "../images/project-detail/ip-address-desktop.svg";
import imgIpAddressTrackerDetailMobile from "../images/project-detail/ip-address-mobile.svg";
import imgJobListingDetailDesktop from "../images/project-detail/job-listing-desktop.svg";
import imgJobListingDetailMobile from "../images/project-detail/job-listing-mobile.svg";
import imgBaseApparelDetailDesktop from "../images/project-detail/base-apparel-desktop.svg";
import imgBaseApparelDetailMobile from "../images/project-detail/base-apparel-mobile.svg";
import imgCodingBootcampDetailDesktop from "../images/project-detail/coding-bootcamp-desktop.svg";
import imgCodingBootcampDetailMobile from "../images/project-detail/coding-bootcamp-mobile.svg";
import imgFourCardDetailDesktop from "../images/project-detail/four-card-desktop.svg";
import imgFourCardDetailMobile from "../images/project-detail/four-card-mobile.svg";
import imgFyloDataDetailDesktop from "../images/project-detail/fylo-data-desktop.svg";
import imgFyloDataDetailMobile from "../images/project-detail/fylo-data-mobile.svg";
import imgFyloLandingDetailDesktop from "../images/project-detail/fylo-landing-desktop.svg";
import imgFyloLandingDetailMobile from "../images/project-detail/fylo-landing-mobile.svg";
import imgHuddleLandingDetailDesktop from "../images/project-detail/huddle-landing-desktop.svg";
import imgHuddleLandingDetailMobile from "../images/project-detail/huddle-landing-mobile.svg";
import imgIntroComponentDetailDesktop from "../images/project-detail/intro-component-desktop.svg";
import imgIntroComponentDetailMobile from "../images/project-detail/intro-component-mobile.svg";
import imgPingComingDetailDesktop from "../images/project-detail/ping-coming-desktop.svg";
import imgPingComingDetailMobile from "../images/project-detail/ping-coming-mobile.svg";
import imgShortlyDetailDesktop from "../images/project-detail/shortly-desktop.svg";
import imgShortlyDetailMobile from "../images/project-detail/shortly-mobile.svg";
import imgSinglePriceDetailDesktop from "../images/project-detail/single-price-desktop.svg";
import imgSinglePriceDetailMobile from "../images/project-detail/single-price-mobile.svg";
// img projects:
import imgBaseApparel from "../images/project-imgs/base-apparel.svg";
import imgCodingBootcamp from "../images/project-imgs/coding-bootcamp-testimonial.svg";
import imgFourCard from "../images/project-imgs/four-card-feature-section.svg";
import imgFyloData from "../images/project-imgs/fylo-data-storage-component.svg";
import imgFyloLanding from "../images/project-imgs/fylo-landing-page.svg";
import imgHuddleLanding from "../images/project-imgs/huddle-landing-page.svg";
import imgIntroComponent from "../images/project-imgs/intro-component.svg";
import imgPingSingle from "../images/project-imgs/ping-single-column.svg";
import imgShortly from "../images/project-imgs/shortly-url-shortening.svg";
import imgSinglePrice from "../images/project-imgs/single-price-grid.svg";
// gallery
import imgInventoryGallery1 from "../images/project-detail/gallery/inventory/login.png";
import imgInventoryGallery2 from "../images/project-detail/gallery/inventory/bpp.png";
import imgInventoryGallery3 from "../images/project-detail/gallery/inventory/bpp-detail.png";
import imgInventoryGallery4 from "../images/project-detail/gallery/inventory/cutoff.png";
import imgInventoryGallery5 from "../images/project-detail/gallery/inventory/dashboard.png";
import imgInventoryGallery6 from "../images/project-detail/gallery/inventory/opname-progress.png";
const projects = [
  {
    id: -2,
    title: "Inventory System",
    description:
      "This project is a freelance project for local company, build using Laravel and MySQL. Features inclues CRUD, PDf and CSV reporting, data recap monthly using Laravel Scheduler and linux cronjob, complex stock opname logic but simple user experience and many more.",
    builtWith: [
      "Laravel",
      "MySQL",
      "JQuery",
    ],
    heading: "Invenity",
    mobileImg: imgRestCountries,
    imgDesktop: imgInventoryDesktop,
    imgMobile: imgInventoryMobile,
    imgDetailDesktop: imgInventoryDetailDesktop,
    imgDetailMobile: imgInventoryDetailDesktop,
    github:
      null,
    visit:
      null,
    detail: "Invenity",
    gallery: [
      {img: imgInventoryGallery1, title: 'Login'},
      {img: imgInventoryGallery2, title: 'BPP'},
      {img: imgInventoryGallery3, title: 'BPP Detail'},
      {img: imgInventoryGallery4, title: 'Cutoff Monthly'},
      {img: imgInventoryGallery5, title: 'Dashboard'},
      {img: imgInventoryGallery6, title: 'Stock Opname Progress'},
    ],
  },
  {
    id: -1,
    title: "Eventship Landing Page",
    description:
      "This project is a freelance project for startup of friend of mine, build using Reactjs and Material UI. I demanded implementing given design and it includes mobile version also.",
    builtWith: [
      "Reactjs",
      "Material UI",
    ],
    heading: "Eventship",
    mobileImg: imgRestCountries,
    imgDesktop: imgEventshipDesktop,
    imgMobile: imgEventshipMobile,
    imgDetailDesktop: imgEventshipDetailDesktop,
    imgDetailMobile: imgEventshipDetailMobile,
    github:null,
    visit:'https://eventship.vercel.app/',
    detail: "eventship",
  },
  {
    id: 0,
    title: "Rest Countires API",
    description:
      "This project is a solution for a challange from frontendmentor.io. It's fetch countries data from https://restcountries.eu through redux-thunk (async action) when root component didMount using axios and store it in redux state so no need to re-fetching the filtered list, I'm just using JavaScript filter method and for search, I'm using fuse.js for searching like fuzy search in vscode. It's an single page app using react router dom as router, click the country card and you'll go to detail page which contains detail information about the country. Inside detail page I implement map using leaflet and react-leaflet. To limits the number of the cards I develope pagination using react-paginate. It's also responsive.",
    builtWith: [
      "React",
      "Redux",
      "Material-UI",
      "leafletjs",
      "react-leaflet",
      "react-paginate",
      "webpack",
      "fuse.js",
    ],
    heading: "Countries API",
    mobileImg: imgRestCountries,
    imgDesktop: imgRestCountriesDesktop,
    imgMobile: imgRestCountriesMobile,
    imgDetailDesktop: imgRestCountriesDetailDesktop,
    imgDetailMobile: imgRestCountriesDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/rest-countries-api-with-color-theme-switcher",
    visit:
      "https://rest-countries-api-with-color-theme-switcher-two.vercel.app/",
    detail: "rest-countries-api",
  },
  {
    id: 1,
    title: "Rock Paper Scissors",
    description:
      "This project is a solution for a challange from frontendmentor.io. This is a game rock paper scissors, play against computer if win you get +1 score if lose you get -1 score. Build using react, redux, react transition group. It's responsive.",
    builtWith: [
      "React",
      "Redux",
      "Material-UI",
      "react-transition-group",
      "webpack",
    ],
    heading: "Rock Paper Scissors",
    mobileImg: imgRockPaperScissors,
    imgDesktop: imgRestRockPaperScissorsDesktop,
    imgMobile: imgRestRockPaperScissorsMobile,
    imgDetailDesktop: imgRockPaperScissorsDetailDesktop,
    imgDetailMobile: imgRockPaperScissorsDetailMobile,
    github: "https://github.com/Mohamad-Ilham-Ramadhan/rock-paper-scissors",
    visit: "https://rock-paper-scissors-rose.vercel.app/",
    detail: "rock-paper-scissors",
  },
  {
    id: 2,
    title: "IP Address Tracker",
    description:
      "This project is a solution for a challange from frontendmentor.io. This is an IP address tracker site/app, fetch API from https://ipapi.co show IP location in map (leaflet). It's only work with an IP address not domain because the API only provide that. It used to work with a domain but get cross domain issue because the API who provides domain as input use an http (http://ip-api.com) but my site who requests use https so the browser isn't allow that requests.",
    builtWith: ["React", "Material-UI", "leaflet", "react-leaflet", "webpack"],
    heading: "Tracker",
    mobileImg: imgIpAddressTracker,
    imgDesktop: imgRestIpAddressDesktop,
    imgMobile: imgRestIpAddressMobile,
    imgDetailDesktop: imgIpAddressTrackerDetailDesktop,
    imgDetailMobile: imgIpAddressTrackerDetailMobile,

    github: "https://github.com/Mohamad-Ilham-Ramadhan/ip-address-tracker",
    visit: "https://ip-address-tracker-ashy.vercel.app/",
    detail: "ip-address-tracker",
  },
  {
    id: 3,
    title: "Job Listings with Filtering",
    description:
      "This project is a solution for a challange from frontendmentor.io. This is fake jobs list filtering, it's challange me to filter list using builtWith and select input.",
    builtWith: ["React", "redux", "Material-UI", "webpack"],
    heading: "Jobs",
    mobileImg: imgJobList,
    imgDesktop: imgJobListingDesktop,
    imgMobile: imgJobListingMobile,
    imgDetailDesktop: imgJobListingDetailDesktop,
    imgDetailMobile: imgJobListingDetailMobile,

    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/job-listings-with-filtering",
    visit: "https://job-listings-with-filtering-ten.vercel.app/",
    detail: "job-listings-with-filtering",
  },
  // more projects
  {
    id: 4,
    title: "Url Shortening API Landing Page",
    heading: "Shortly",
    description:
      "This project is a solution for a challange from frontendmentor.io. Shorten link saved to localStorage. The API is come from https://rel.ink but sadly it has been suspended due to malware activity. The shortened link is saved to localStorage. This project also improve my layout skill.",
    builtWith: ["React", "Redux", "Material-UI", "Webpack"],
    tags: ["React", "Layout", "API"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgShortly,
    imgDetailDesktop: imgShortlyDetailDesktop,
    imgDetailMobile: imgShortlyDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/URL-shortening-API-landing-page",
    visit: "https://url-shortening-api-landing-page-beta.vercel.app/",
    detail: "url-shortening-api-landing-page",
  },
  {
    id: 5,
    title: "Huddle Landing Page",
    description:
      "This project is a solution for a challange from frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "Bootstrap-sass", "Webpack"],
    tags: ["React", "Bootstrap", "Layout"],
    heading: "Huddle",
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgHuddleLanding,
    imgDetailDesktop: imgHuddleLandingDetailDesktop,
    imgDetailMobile: imgHuddleLandingDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/huddle-landing-page-with-alternating-feature-blocks",
    visit:
      "https://huddle-landing-page-with-alternating-feature-blocks-six.vercel.app/",
    detail: "huddle-landing-page",
  },
  {
    id: 6,
    title: "Fylo Landing Page",
    heading: "Fylo",
    description:
      "This project is a solution for a challange from frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "Material-UI", "Webpack"],
    tags: ["React", "Material-UI", "Layout"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgFyloLanding,
    imgDetailDesktop: imgFyloLandingDetailDesktop,
    imgDetailMobile: imgFyloLandingDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/fylo-landing-page-with-two-column-layout",
    visit: "https://fylo-landing-page-with-two-column-layout-opal.vercel.app/",
    detail: "fylo-landing-page",
  },
  {
    id: 7,
    title: "Coding Bootcamp Slider",
    description:
      "This project is a solution for a challange from frontendmentor.io. It's the first time of using react transition group to create slider and also challange my layouting skills and responsive design.",
    builtWith: ["React", "react-transition-group", "Webpack"],
    tags: ["React", "Animation", "Layout"],
    heading: "Slider",
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgCodingBootcamp,
    imgDetailDesktop: imgCodingBootcampDetailDesktop,
    imgDetailMobile: imgCodingBootcampDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/coding-bootcamp-testimonials-slider",
    visit: "https://coding-bootcamp-testimonials-slider-lilac.vercel.app/",
    detail: "coding-bootcamp-slider",
  },
  {
    id: 8,
    title: "Four Card Feature Section",
    heading: "Four card",
    description:
      "This project is a solution for a challange from frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "Bootstrap", "Webpack"],
    tags: ["React", "Bootstrap", "Layout"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgFourCard,
    imgDetailDesktop: imgFourCardDetailDesktop,
    imgDetailMobile: imgFourCardDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/four-card-feature-section",
    visit: "https://four-card-feature-section-mauve.vercel.app/",
    detail: "four-card-feature-section",
  },
  {
    id: 9,
    title: "Base Apparel Coming Soon",
    heading: "Base Apparel",
    description:
      "This project is a solution for a challange from frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "Bootstrap", "Webpack"],
    tags: ["React", "Bootstrap", "Layout"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgBaseApparel,
    imgDetailDesktop: imgBaseApparelDetailDesktop,
    imgDetailMobile: imgBaseApparelDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/base-apparel-coming-soon",
    visit: "https://base-apparel-coming-soon-self.vercel.app/",
    detail: "base-apparel",
  },
  {
    id: 10,
    title: "Intro Component",
    heading: "Intro",
    description:
      "This project is a solution for a challange from frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "bootstrap-sass", "Webpack"],
    tags: ["React", "Sass", "Layout"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgIntroComponent,
    imgDetailDesktop: imgIntroComponentDetailDesktop,
    imgDetailMobile: imgIntroComponentDetailMobile,
    github:
      "https://github.com/Mohamad-Ilham-Ramadhan/intro-component-with-signup-form",
    visit: "https://intro-component-with-signup-form-alpha.vercel.app/",
    detail: "intro-component",
  },
  {
    id: 11,
    title: "Ping Coming Soon Page",
    heading: "Ping",
    description:
      "This project is a solution for a challange from frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "bootstrap-sass", "Webpack"],
    tags: ["React", "Sass", "Layout"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgPingSingle,
    imgDetailDesktop: imgPingComingDetailDesktop,
    imgDetailMobile: imgPingComingDetailMobile,
    github: "https://github.com/Mohamad-Ilham-Ramadhan/ping-coming-soon-page",
    visit: "https://ping-coming-soon-page-five.vercel.app/",
    detail: "ping-page",
  },
  {
    id: 12,
    title: "Fylo Data Storage Component",
    heading: "Fylo",
    description:
      "This project is a solution for a challange from frontendmentor.io. My first solution for frontendmentor.io. It challange my layouting skills and responsive design.",
    builtWith: ["React", "Bootstrap", "Webpack"],
    tags: ["React", "Sass", "Layout"],
    mobileImg: null,
    imgDesktop: null,
    imgMobile: null,
    imgProject: imgFyloData,
    imgDetailDesktop: imgFyloDataDetailDesktop,
    imgDetailMobile: imgFyloDataDetailMobile,
    github: "https://github.com/Mohamad-Ilham-Ramadhan/fylo-data-storage",
    visit: "https://fylo-data-storage-phi.vercel.app/",
    detail: "fylo-component",
  },
];

const moreProjects = projects.filter((item) => item.id > 3);
const sliderProjects = projects.filter((item) => item.id < 4);

export default projects;
export { moreProjects, sliderProjects };
