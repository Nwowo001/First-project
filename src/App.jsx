
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Section from './components/sections/section';
import Forms from './components/Forms/Forms';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/sign-in"
          element={<Forms />} // Only show the Forms component on the /sign-in route
        />
        <Route
          element={
            <>
              <Navbar />
              <Section />
            </>
          }
        >
          <Route path="/home" element={<Section />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/contacts" element={<div>Contact Page</div>} />
          <Route path="/faq" element={<div>FAQ Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
