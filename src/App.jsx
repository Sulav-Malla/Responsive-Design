import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import clubAce from "../src/assets/clubace.png";
import diamondAce from "../src/assets/diamondace.png";
import heartAce from "../src/assets/heartace.svg";
import spadeAce from "../src/assets/spadeace.svg";

function App() {
  function toggleNav() {
    const nav_links = document.getElementById("nav_links");
    nav_links.classList.toggle("active");
  }
  return (
    <>
      <div className="container">
        <div className="navigation_bar">
          <h1>Takeo Responsive Design</h1>
          <div class="small_screen_nav" id="small_screen_nav">
            <button onClick={toggleNav}>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </button>
          </div>
          <div id="nav_links">
            <button className="nav_button" id="nav_button">
              <a href="#cards">Cards</a>
            </button>
            <button className="nav_button" id="nav_button">
              <a href="#footer">Footer</a>
            </button>
          </div>
        </div>
        <div className="responsiveCards" id="cards">
          <div class="card">
            <img src={clubAce} alt="Ace of Clubs" />
            <h3>Card #1</h3>
            <p>
              This is Ace of CLubs. <br></br>The Ace of Clubs is often
              associated with growth, creativity, and action.{" "}
            </p>
            <button>CLick Ace</button>
          </div>
          <div class="card">
            <img src={spadeAce} alt="Ace of Spades" />
            <h3>Card #2</h3>
            <p>
              This is Ace of Spades. <br></br>The Ace of Spades is traditionally
              seen as the most powerful and iconic card in a deck.{" "}
            </p>
            <button>CLick Ace</button>
          </div>
          <div class="card">
            <img src={diamondAce} alt="Ace of Diamonds" />
            <h3>Card #3</h3>
            <p>
              This is Ace of Diamonds.<br></br> The Ace of Diamonds is often
              tied to wealth, material success, and the tangible world.
            </p>
            <button>CLick Ace</button>
          </div>
          <div class="card">
            <img src={heartAce} alt="Ace of Hearts" />
            <h3>Card #4</h3>
            <p>
              This is Ace of Hearts. <br></br>The Ace of Hearts is often
              associated with love, compassion, and emotional connections.
            </p>
            <button>CLick Ace</button>
          </div>
        </div>
        <footer className="footer" id="footer">
          <a href="https://www.google.com">Go Google Something!</a>
        </footer>
      </div>
    </>
  );
}

export default App;
