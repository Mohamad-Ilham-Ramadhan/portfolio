import { combineReducers } from "redux";
import projectsSlider from "./projectsSlider";
import activeProjectSlider from "./activeProjectSlider";
import projectDetail from "./projectDetail";

const reducer = combineReducers({
  activeProjectSlider,
  projectsSlider,
  projectDetail,
});

export default reducer;
