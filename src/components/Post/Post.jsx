import "./post.css"
import { MoreVert } from "@material-ui/icons"
import {Users} from "../../dummyData"
import {useState} from "react";

export default function Post({post}) {
    const [like,setLike] =useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    console.log(post);
    const user= Users.filter(u => u.id==1)
    console.log(user[0].username);
  return (
    <div className="Post">
         <div className="postWrapper">
            <div className="postTop">
            <div className="postTopLeft">
                 <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} 
                 alt="" className="postProfileImg" />
                <span className="post Username">
                    {Users.filter(u=>u.id === post.userId)[0].username}
                    </span>
                <span className="postDate">{post.date}</span>
            </div>

            <div className="postTopRight">
                <MoreVert />
            </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="assets/like.png" alt="" className="likeIcon"  onClick={likeHandler}/>
                    <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentext">{post.comment} comments</span>
                </div>
            </div>
         </div>
    </div>
  )
}
