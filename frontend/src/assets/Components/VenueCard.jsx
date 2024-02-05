import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./venue.css";

const VenueCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="card-contianer w-100 bg-gray-400">
      <div className="w-3/4 m-auto  ">
        <div className="mt-20  ">
          <Slider {...settings}>
            {data.map((d) => (
              // eslint-disable-next-line react/jsx-key
              <div className="bg-white h-[450px] rounded-xl">
                <div className="h-56  rounded-t-xl flex justify-center items-center">
                  <img src={d.image} alt="" className="h-44 w-44 " />
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p>{d.description}</p>
                  <p>${d.price}</p>
                  <a
                    className=" text-red text-lg px-6 py-1 block mt-4 text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                    href=""
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/2d/8c/45/2d8c45048ce7622605bc93b57e39e61c.jpg",
    name: "Venue 1",
    description: "A beautiful venue for all occasions.",
    price: 150,
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/236x/7e/82/22/7e8222058d3bd5515ef92b8e016602a8.jpg",
    name: "Venue 2",
    description: "Spacious and elegant, perfect for events.",
    price: 200,
  },

  {
    id: 3,
    image:
      "https://i.pinimg.com/236x/9e/f9/fd/9ef9fd926babdd7b62697505ac4fc463.jpg",
    name: "Venue 3",
    description: "An intimate space with a touch of luxury.",
    price: 120,
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/236x/b9/c6/a1/b9c6a115c8ab3313867d25e48228302e.jpg",
    name: "Venue 4",
    description: "Versatile venue with modern amenities.",
    price: 180,
  },
  // Add more venues as needed
];

export default VenueCard;
