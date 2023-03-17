import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../Loading/Loading";
import VideoGridItem from "./VideoGridItem";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  const { selectedTags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ selectedTags, search }));
  }, [dispatch, selectedTags, search]);
  // console.log(videos);
  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {isLoading && <Loading></Loading>}
          {/* <!-- error section */}
          {isError && <div className="col-span-12">{error}</div>}
          {videos && videos.length === 0 && (
            <div className="col-span-12">No videos found</div>
          )}
          {/* <!-- single video --> */}
          {videos &&
            videos.length > 0 &&
            videos.map((video) => (
              <VideoGridItem key={video.id} video={video}></VideoGridItem>
            ))}
        </div>
      </section>
    </section>
  );
};

export default VideoGrid;
