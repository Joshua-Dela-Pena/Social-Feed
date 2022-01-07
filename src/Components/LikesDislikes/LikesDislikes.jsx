import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import "./LikesDislikes.css"

function LikesDislikes({ likes }) {
    const [liked, setLiked] = useState(false);
  
    return (
      <div className="LikesDislikes">
        <div className="likesDislike">
          {liked ? (
            <FavoriteIcon fontSize="medium" onClick={(event) => setLiked(false)} />
          ) : (
            <FavoriteBorderIcon
              fontSize="medium"
              onClick={(event) => setLiked(true)}
            />
          )}
        </div>
      </div>
    );
  }
 
export default LikesDislikes;