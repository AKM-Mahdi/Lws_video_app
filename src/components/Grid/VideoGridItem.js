import React from "react";
import { Link } from "react-router-dom";

const VideoGridItem = ({ video }) => {
  const {
    id,
    title,
    description,
    author,
    avatar,
    thumbnail,
    duration,
    views,
    unlikes,
    date,
  } = video;
  // console.log(video);
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <Link to={`/videos/${id}`}>
            <img src={thumbnail} className="w-full h-auto" alt={title} />
          </Link>

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <Link to={`/videos/${id}`}>
            <img
              src={avatar}
              className="rounded-full h-6 w-6"
              alt="Learn with Sumit"
            />
          </Link>

          <div clas="flex flex-col">
            <Link to={"/videos/1"}>
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <Link
              to={`/videos/${id}`}
              className="text-gray-400 text-xs mt-2 hover:text-gray-600"
              href="#"
            >
              {description.slice(0, 45)}
            </Link>
            <p className="text-gray-400 text-xs mt-1">
              {views}
              {" . "}
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
