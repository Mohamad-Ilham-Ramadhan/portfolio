import projects from "../data";

export default function projectDetail(state = null, action) {
  switch (action.type) {
    case "SELECT_PROJECT_DETAIL":
      return projects.find((item) => item.detail == action.link);
    default:
      return projects[0];
  }
}
