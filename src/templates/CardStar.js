import { Link } from "react-router-dom";
export const CardStar = ({ cardData }) => (
  <div className="card blogs_blog" style={{ width: "18rem" }}>
    <Link to={"/hvezda/" + cardData.short} relative="path">
      <h5 className="card-title blogs_blog_title">{cardData.title}</h5>
      <p className="card-text blogs_blog_const">{cardData.const}</p>
      <img
        className="card-img-top blogs_blog_image"
        src={cardData.img}
        alt="Card image cap"
      />
      <p className="card-text blogs_blog_desc">{cardData.content}</p>
    </Link>
  </div>
);
