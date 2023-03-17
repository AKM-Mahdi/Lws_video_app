import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import videosReducer from "../features/videos/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideos from "../features/relatedVideos/relatedVideosSlice";
import filterReducers from "../features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    videos: videosReducer,
    tags: tagsReducer,
    video: videoReducer,
    relatedVideos: relatedVideos,
    filter: filterReducers,
  },
});
