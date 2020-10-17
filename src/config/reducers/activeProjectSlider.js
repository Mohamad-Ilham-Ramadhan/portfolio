import { sliderProjects } from "../data";

export default function activeProjectSlider(state = 0, action) {
  switch (action.type) {
    case "CHANGE_ACTIVE_SLIDER":
      return sliderProjects.find((item) => item.id == action.id);
    default:
      return sliderProjects[0];
  }
}
