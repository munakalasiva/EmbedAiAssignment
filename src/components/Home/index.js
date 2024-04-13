import { Component } from "react";
import SideNavbar from "../SideNavbar";
import PrimeCharacter from "../PrimeCharacter";
import ForYou from "../ForYou";
import TryThese from "../TryThese";
import Features from "../Features";
import FeatureButtons from "../FeatureButtons";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="side-nav-bar">
          <SideNavbar />
        </div>
        <div className="main-container">
          <div className="home-container">
            <nav className="home-nav">
              <p className="nav-head-1">Welcome back,</p>
              <div className="nav-head-profile">
                <div className="nav-head-profile-name">
                  <button className="profile-button-1">s</button>
                  <p>siva@123</p>
                </div>
                <div className="search-container">
                  <i className="fa fa-search icon"></i>
                  <input
                    type="search"
                    placeholder="Search for Characters"
                    className="input"
                  />
                </div>
              </div>
            </nav>
            <div className="prime-char-section">
              <PrimeCharacter />
            </div>
            <div className="for-you-section">
              <ForYou />
            </div>
            <div className="try-these-section">
              <TryThese />
            </div>
            <div className="featured-container">
              <Features />
            </div>
            <div className="feature-buttons-container">
              <FeatureButtons />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
