export default function Card(props) {
  return (
    <div className="wrapper">
      <div className="card--container">
        <img src={props.src} alt="" className="card--img" />
        <div className="card--content">
          <div className="card--upper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWrmRPmq6lo6ez_Ve_8212hM-8pB-1ktoIr3VeN__qQ&s"
              alt=""
              className="pin"
            />
            <p className="country">{props.location}</p>
            <p className="maps">View on Google Maps</p>
          </div>
          <div className="card--lower">
            <h1 className="card--title">{props.title}</h1>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}</p>
          </div>
        </div>
      </div>
      <div className="card--divider"></div>
    </div>
  );
}
