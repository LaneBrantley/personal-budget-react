import React from "react";
import {
  Link
} from "react-router-dom";
function Home() {
    return (
      <nav>
        <div className="menu">
            <ul>
                <li><Link to="">Homepage</Link></li>
                <li><Link to="about">Learn about us!</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="#main-content">Skip to main content</Link></li>
            </ul>
        </div>
    </nav>
    );
  }
  
  export default Home;
  