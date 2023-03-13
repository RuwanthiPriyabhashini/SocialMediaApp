import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
    <div className="rihtbarProfileImgContainer">
    <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
    <span className="rightbarOnliner"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
