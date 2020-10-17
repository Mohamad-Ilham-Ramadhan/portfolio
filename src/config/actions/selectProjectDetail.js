export default function selectProjectDetail(link) {
  console.log(link);
  return {
    type: "SELECT_PROJECT_DETAIL",
    link,
  };
}
