import React from 'react';
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import { Link } from "react-router-dom";

const VenueListCard = ({ title, description, image, link }) => {
  return (
    
      
    <div className="max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 mx-2">
      <a href={link}>
        <img className="rounded-t-lg w-full h-32 object-cover" src={image} alt="" />
      </a>
      <div className="p-3">
        <a href={link}>
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-2 text-sm font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        {/* <a
          href={link}
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        > */}
          <Link to="/venue" className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-black dark:bg-blue-600 dark:hover:bg-white dark:focus:ring-blue-800">
          Read more
          {/* <svg
            className="rtl:rotate-180 w-3 h-3 ms-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
            >
            <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg> */}
          </Link>
        {/* </a> */}
      </div>
    </div>
  );
};

const VenueList = () => {
  const venues = [
    {
      
      id: 1,
      title: 'Venue 1',
      description: 'A beautiful venue for all occasions.',
      image: '/path/to/venue1.jpg',
      link: '/venues/venue-1',
    },
    {
      id: 2,
      title: 'Venue 1',
      description: 'A beautiful venue for all occasions.',
      image: '/path/to/venue1.jpg',
      link: '/venues/venue-1',
    },
    {
      id: 3,
      title: 'Venue 1',
        description: 'A beautiful venue for all occasions.',
        image: '/path/to/venue1.jpg',
        link: '/venues/venue-1',
      },
      {
        id: 4,
        title: 'Venue 1',
        description: 'A beautiful venue for all occasions.',
        image: '/path/to/venue1.jpg',
        link: '/venues/venue-1',
      },
      {
        id: 5,
        title: 'Venue 1',
        description: 'A beautiful venue for all occasions.',
        image: '/path/to/venue1.jpg',
        link: '/venues/venue-1',
      },
      // Add more venue data as needed
    ];

    return (
      <div>
        <Navbar />
      <div className="mx-auto max-w-screen-lg px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {venues.map(venue => (
          <VenueListCard key={venue.id} {...venue} />
          ))}
      </div>
    </div>
    
    <Footer />
      </div>
  );
};

export default VenueList;
