import imgRestCountries from "../../images/slider-mobile/rest-countries.svg";
import imgRockPaperScissors from "../../images/slider-mobile/rock-paper-scissors.svg";
import imgIpAddressTracker from "../../images/slider-mobile/ip-address-tracker.svg";
import imgJobList from "../../images/slider-mobile/job-list-with-filtering.svg";
//Desktop slider's imgs:
import imgRestCountriesDesktop from "../../images/slider-desktop/rest-api-desktop.svg";
import imgRestCountriesMobile from "../../images/slider-desktop/rest-api-mobile.svg";
import imgRestRockPaperScissorsDesktop from "../../images/slider-desktop/rock-paper-scissors-desktop.svg";
import imgRestRockPaperScissorsMobile from "../../images/slider-desktop/rock-paper-scissors-mobile.svg";
import imgRestIpAddressDesktop from "../../images/slider-desktop/ip-address-tracker-desktop.svg";
import imgRestIpAddressMobile from "../../images/slider-desktop/ip-address-tracker-mobile.svg";
import imgJobListingDesktop from "../../images/slider-desktop/job-list-desktop.svg";
import imgJobListingMobile from "../../images/slider-desktop/job-list-mobile.svg";
const projects = [
  {
    id: 1,
    title: "Rest Countires API",
    mobileImg: imgRestCountries,
    imgDesktop: imgRestCountriesDesktop,
    imgMobile: imgRestCountriesMobile,
  },
  {
    id: 2,
    title: "Rock Paper Scissors",
    mobileImg: imgRockPaperScissors,
    imgDesktop: imgRestRockPaperScissorsDesktop,
    imgMobile: imgRestRockPaperScissorsMobile,
  },
  {
    id: 3,
    title: "IP Address Tracker",
    mobileImg: imgIpAddressTracker,
    imgDesktop: imgRestIpAddressDesktop,
    imgMobile: imgRestIpAddressMobile,
  },
  {
    id: 4,
    title: "Job Listing with Filtering",
    mobileImg: imgJobList,
    imgDesktop: imgJobListingDesktop,
    imgMobile: imgJobListingMobile,
  },
];
export default function projectsSlider(state = projects, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export { projects };
