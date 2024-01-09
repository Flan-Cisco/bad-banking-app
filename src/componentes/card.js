import "./card.css"

function Card(props) {

  

  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? "text-" + props.txtcolor : " text-white";
    if (props.header === "Withdraw") {
      const margin = " withdraw-container"
      return "card mb-3 card" + bg + txt + margin;
    }
    return "card mb-3 card" + bg + txt;
  }
  return (
    <div className={classes()}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body && <div className="body-card">{props.body}</div>}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

export default Card;
