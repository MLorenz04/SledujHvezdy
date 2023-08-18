export const Card = ({cardData} ) => (
<div className="card" style={{width: '18rem'}}>
  <img className="card-img-top" src={cardData.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{cardData.title}</h5>
    <p className="card-text">{cardData.desc}</p>
  </div>
</div>
);