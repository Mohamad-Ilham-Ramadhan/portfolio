import { combineReducers } from "redux";
import projectsSlider from "./projectsSlider";
import activeProjectSlider from "./activeProjectSlider";

const reducer = combineReducers({ activeProjectSlider, projectsSlider });

export default reducer;
