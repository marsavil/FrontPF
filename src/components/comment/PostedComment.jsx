import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, getUserById } from "../../Redux/actions";

export const PostedComment = ({ name, comment }) => {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.detail)
  console.log("este es el prducto en detail",product)

  useEffect(() => {
    dispatch(getComments(product.id))
  },[dispatch])

  const allComments = useSelector((state) => state.comments)

  
  console.log("soy allcomments", allComments)
  return (
    <>
    <div>
        {allComments? (
          allComments.map((e) => (
            
            <div className="darker mt-4 text-justify user">
              <h4 className="texts">{e.text}</h4>
              
              {/* <p>{comment}</p> */}
            </div>
          ))
        ) : (
          <h2>No Comments</h2>
        )}
      </div>
    </>
  );
};
