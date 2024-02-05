import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import VenueCards from './path/to/VenueCards'; {/* Added to integrate with backend*/}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// const App = () => {
//   return (
//     <div>
//       {/* Other components or content */}
//       <VenueCards />
//     </div>
//   );
// };

export default App;