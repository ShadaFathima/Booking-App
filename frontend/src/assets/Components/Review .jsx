import image from "../images/jawad.jpeg";
import "./review.css";

const Review = () => {
  return (
    <section className="bg-white">
      <div
        id="card"
        className="mx-auto max-w-screen-xl px-8 py-12 sm:px-8 lg:px-10 lg:py-16"
      >
        <h2
          id="heading"
          className="text-center text-4xl  tracking-tight text-gray-900 sm:text-5xl underline mt-4"
        >
          What Our Clients Say
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-0">
          <blockquote className="rounded-lg bg-white p-4 sm:p-6 w-full md:w-72 shadow-md">
            <div className="flex flex-col items-center">
              <img
                alt="Man"
                src={image}
                className="h-20 w-20 rounded-full object-cover mb-2"
              />

              <p className="text-lg font-medium text-gray-900">Jawad</p>
            </div>

            <p className="mt-2 text-gray-700">
              {" "}
              <span className="text-gray-500">&ldquo;</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
              <span className="text-gray-500">&rdquo;</span>
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-white p-4 sm:p-6 w-full md:w-72 shadow-md">
            <div className="flex flex-col items-center">
              <img
                alt="Man"
                src={image}
                className="h-20 w-20 rounded-full object-cover mb-2"
              />

              <p className="text-lg font-medium text-gray-900">Jawad</p>
            </div>

            <p className="mt-2 text-gray-700">
              {" "}
              <span className="text-gray-500">&ldquo;</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
              <span className="text-gray-500">&rdquo;</span>
            </p>
          </blockquote>

          <blockquote className="rounded-lg bg-white p-4 sm:p-6 w-full md:w-72 shadow-md">
            <div className="flex flex-col items-center">
              <img
                alt="Man"
                src={image}
                className="h-20 w-20 rounded-full object-cover mb-2"
              />

              <p className="text-lg font-medium text-gray-900">Jawad</p>
            </div>

            <p className="mt-2 text-gray-700">
              {" "}
              <span className="text-gray-500">&ldquo;</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              sit rerum incidunt, a consequuntur recusandae ab saepe illo est
              quia obcaecati neque quibusdam eius accusamus error officiis atque
              voluptates magnam!
              <span className="text-gray-500">&rdquo;</span>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Review;
