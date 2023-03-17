import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

const Tag = ({ tag }) => {
  const { title } = tag;
  const { selectedTags } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const isSelected = selectedTags.includes(title) ? true : false;
  // console.log(isSelected);

  const handleSelectedTag = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  const classStyle = isSelected
    ? `bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer `
    : `bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer`;

  return (
    <>
      <div onClick={handleSelectedTag} className={classStyle}>
        {title}
      </div>
      {/* <!-- selected --> */}
      {/* <div className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer">
        redux
      </div> */}
    </>
  );
};

export default Tag;
