// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Loader from './Components/Loader/Loader';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Homepage/Home';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Navbar/>} />
//           <Route path="/" element={<Loader/>} />
//           <Route path="/home" element={<Home/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Homepage/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<div><Navbar /><Loader /></div>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
