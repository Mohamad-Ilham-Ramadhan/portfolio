import imgRestCountries from "../images/slider-mobile/rest-countries.svg";
import imgRockPaperScissors from "../images/slider-mobile/rock-paper-scissors.svg";
import imgIpAddressTracker from "../images/slider-mobile/ip-address-tracker.svg";
import imgJobList from "../images/slider-mobile/job-list-with-filtering.svg";
//Desktop slider's imgs:
import imgRestCountriesDesktop from "../images/slider-desktop/rest-api-desktop.svg";
import imgRestCountriesMobile from "../images/slider-desktop/rest-api-mobile.svg";
import imgRestRockPaperScissorsDesktop from "../images/slider-desktop/rock-paper-scissors-desktop.svg";
import imgRestRockPaperScissorsMobile from "../images/slider-desktop/rock-paper-scissors-mobile.svg";
import imgRestIpAddressDesktop from "../images/slider-desktop/ip-address-tracker-desktop.svg";
import imgRestIpAddressMobile from "../images/slider-desktop/ip-address-tracker-mobile.svg";
import imgJobListingDesktop from "../images/slider-desktop/job-list-desktop.svg";
import imgJobListingMobile from "../images/slider-desktop/job-list-mobile.svg";
// Image project detail
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
const projects = [
  {
    id: 0,
    title: "Rest Countires API",
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
      "This project is a solution for a challange from frontendmentor.io. Shorten link saved to localStorage. The API is come from https://rel.ink. This project also improve my layout skill.",
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
    heading: "Four card",
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
