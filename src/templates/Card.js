export const Card = ({ cardData }) => (
  <div className="card stars_star" style={{ width: "18rem" }}>
    <h5 className="card-title stars_star_title">{cardData.title}</h5>
    <p className="card-text stars_star_const">{cardData.const}</p>
    <img
      className="card-img-top stars_star_image"
      src={cardData.img}
      alt="Card image cap"
    />
    <p className="card-text stars_star_desc">{cardData.desc}</p>
    
  </div>
);
