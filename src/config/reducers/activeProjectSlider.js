import { projects } from "./projectsSlider";

export default function activeProjectSlider(state = 1, action) {
  switch (action.type) {
    case "CHANGE_ACTIVE_SLIDER":
      return projects.find((item) => item.id == action.id);
    default:
      return projects.find((item) => item.id == state);
  }
}
