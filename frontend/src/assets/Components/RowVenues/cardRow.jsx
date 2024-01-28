import "./cardRow.css";

const cardRow = () => {
  return (
    <div className="row">
      <div className="posters">
        <div className="cardbg">
          <div className="card">
            <img
              className="poster"
              src="https://i.pinimg.com/564x/a2/ed/23/a2ed23fdc3d4bbfe1a830c504a4ea99e.jpg"
              alt=""
            />
            <h6>Hall Name</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cardRow;
