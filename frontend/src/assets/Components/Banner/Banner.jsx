import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="content">
        <h1>
          &quot; Find your dream venue,make
          <br />
          <b>
            every event <br />
            extraordinary. &quot;
          </b>
        </h1>
        <p>
          &quot;Explore and book your perfect venue effortlessly. <br /> Create
          extraordinary moments with ease.&quot;
        </p>
        <>
          <Link to="/venuelist">
            <button className="explore-button">Explore →</button>
          </Link>
        </>
      </div>
    </div>
  );
}

export default Banner;
