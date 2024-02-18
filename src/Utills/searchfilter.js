function searchFilter(searchText, VideoData) {
  const data = VideoData?.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}
export default searchFilter;
