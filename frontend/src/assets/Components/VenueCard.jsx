import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./venue.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const VenueCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("http://127.0.0.1:8000/");
        if (!result.ok) {
          throw new Error(`HTTP error! status : ${result.status}`);
        }
        const datas = await result.json;
        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="card-contianer w-100 bg-gray-400">
      <div className="w-3/4 m-auto  ">
        <div className="mt-20  ">
          <Slider {...settings}>
            {datas ? (
              datas.venues.map((d) => (
                <div className="bg-white h-[450px] rounded-xl" key={d.id}>
                  <div className="h-56 rounded-t-xl flex justify-center items-center">
                    <img src={d.image} alt="" className="h-44 w-44" />
                  </div>

                  <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.description}</p>
                    <p>${d.payment}</p>

                    <Link
                      to="/venue"
                      className="text-red text-lg px-6 py-1 block mt-4 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <h1>Loading</h1>
            )}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
