import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import MyNavbar from './Components/MyNavbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Navigation */}
      <MyNavbar />

      {/* 2. Main Content (grows to fill space) */}
      <main className="flex-grow-1">
        <Home />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

export default App;