import React from "react";
import gemLogo from "../assets/GJ Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    //   <div>
    //       Header
    //       <link to="/" >
    //       GO back home</link>
    // </div>
    <>
      <div className="header-discount">
        <p>25% off new drops</p>
      </div>
      <header>
        <main>
          <img src={gemLogo} />
          <div>
            <span className="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.5px"
                height="26.5px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#708090"
                  d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
                ></path>
              </svg>
              <input type="text" placeholder="Search" />
            </span>

            <Link to="/" className="favourite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.5px"
                height="26.5px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#E91C1C"
                  fillRule="evenodd"
                  d="M4.536 5.778a5 5 0 0 1 7.07 0q.275.274.708.682q.432-.408.707-.682a5 5 0 0 1 7.125 7.016L13.02 19.92a1 1 0 0 1-1.414 0L4.48 12.795a5 5 0 0 1 .055-7.017z"
                ></path>
              </svg>
            </Link>

            <Link to="/userProfile" className="profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.5px"
                height="26.5px"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinejoin="round"
                    d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
                  ></path>
                  <circle cx={12} cy={7} r={3}></circle>
                </g>
              </svg>
            </Link>

            <Link to="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26.5px"
                height="26.5px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M6.616 21q-.691 0-1.153-.462T5 19.385V8.615q0-.69.463-1.152T6.616 7H8.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7h1.885q.69 0 1.152.463T19 8.616v10.769q0 .69-.463 1.153T17.385 21zm0-1h10.769q.23 0 .423-.192t.192-.424V8.616q0-.231-.192-.424T17.384 8H15.5v2.5q0 .214-.143.357T15 11t-.357-.143t-.143-.357V8h-5v2.5q0 .214-.143.357T9 11t-.357-.143T8.5 10.5V8H6.616q-.231 0-.424.192T6 8.616v10.769q0 .23.192.423t.423.192M9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z"
                ></path>
              </svg>
            </Link>

            <svg
              className="hambuger-menu"
              width="26.5"
              height="26.5"
              viewBox="0 0 17 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1V0H17V1H0ZM17 5V6H0V5H17ZM0 10H17V11H0V10Z"
                fill="black"
                fill-opacity="0.7"
              />
            </svg>
          </div>
        </main>
        <hr />
        <nav>
          <Link to="/">Home </Link>
          <Link to="/">New in</Link>
          <Link to="/">Accessories</Link>
          <Link to="/">Jewellery</Link>
          <Link to="/">Clothing</Link>
          <Link to="/">Gift sets</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
