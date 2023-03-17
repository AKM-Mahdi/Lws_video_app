import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../Loading/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";

const RelatedVideoList = ({ currentVideoId, currentVideoTags }) => {
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchRelatedVideo({
        id: currentVideoId,
        tags: currentVideoTags,
      })
    );
  }, [dispatch, currentVideoId, currentVideoTags]);
  console.log(relatedVideos);

  // decide what to render
  // let content = null;
  // if (isLoading) content = <Loading />;

  // if (!isLoading && isError)
  //   content = <div className="col-span-12">{error}</div>;

  // if (!isLoading && !isError && !relatedVideos?.id) {
  //   content = <div className="col-span-12">No video found!</div>;
  // }

  return (
    relatedVideos && (
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}

        {relatedVideos.map((relatedVideo) => (
          <RelatedVideoListItem
            key={relatedVideo.id}
            relatedVideo={relatedVideo}
          ></RelatedVideoListItem>
        ))}
      </div>
    )
  );
};

export default RelatedVideoList;
