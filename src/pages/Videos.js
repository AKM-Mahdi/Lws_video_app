import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideoList from "../components/List/RelatedVideoList";
import Player from "../components/Video-Elements/Player";
import VideoDescription from "../components/Video-Elements/VideoDescription";
import { fetchVideo } from "../features/video/videoSlice";
import Loading from "../components/Loading/Loading";

const Videos = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  // console.log(video);

  const { id, tags } = video;

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No video found!</div>;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <Player video={video}></Player>

          {/* <!-- video description --> */}
          <VideoDescription video={video}></VideoDescription>
        </div>

        {/* <!-- related videos --> */}
        <RelatedVideoList
          currentVideoId={id}
          currentVideoTags={tags}
        ></RelatedVideoList>
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Videos;
