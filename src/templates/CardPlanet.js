import { Link } from "react-router-dom";
/**
 * Karta pro vykreslení příspěvku v sekci Planet
 * @param {*} cardData Data objektu
 * @returns Export komponentu
 * @author Matyáš Lorenz
 */
export const CardPlanet = ({ cardData }) => (
    <div className="card blogs_blog" style={{ width: "18rem" }}>
      <Link to={"/planeta/" + cardData.short} relative="path">
      <h5 className="card-title blogs_blog_title">
        {cardData.title}
      </h5>
      <p className="card-text blogs_blog_const">{cardData.nickname}</p>
      <img
        className="card-img-top blogs_blog_image"
        src={cardData.img}
        alt="Card image cap"
      />
      <p className="card-text blogs_blog_desc">{cardData.content}</p>
      </Link>
    </div>
  );
  