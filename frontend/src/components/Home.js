// Home.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/home.css"; // Import the CSS file
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  const faqs = [
    {
      id: 1,
      que: "What is ABHA Number?",
      ans: "ABHA number is a 14 digit number that will uniquely identify you as a participant in India's digital healthcare ecosystem. ABHA number will establish a strong and trustable identity for you that will be accepted by healthcare providers and payers across the country.",
    },
    {
      id: 2,
      que: "What is ABHA Address?",
      ans: "ABHA (Ayushman Bharat Health Account) address is a unique identifier (self declared username) that enables you to share and access your health records digitally. Your ABHA address may look like 'yourname@consent manager'. For instance, xyz@abdm is a ABHA address with ABDM Consent Manager that will facilitate health data exchange for you with appropriate consent on the ABDM network.",
    },
    {
      id: 3,
      que: "Linking ABHA Number with ABHA Address.",
      ans: "You can use your ABHA number to seamlessly sign up for a ABHA address and ensure that the health records created for you are shared only with you. To enable health data sharing, it is recommended that you create ABDM ABHA address and link it with your ABHA number.",
    },
  ];

  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswer((prevState) => ({
        // ...prevState,
        // [id]: !prevState[id],
      ...Object.fromEntries(
        faqs.map((item) => [
          item.id,
          item.id === id ? !prevState[id] : false,
        ])
      ),
    }));
  };

  return (
    <div className="home-container">
      <Link to="/Login" className="login-link">
        Login
      </Link>
      <div className="benefits-container">
        <h1>Benefits of Dhanvantri</h1>
        <p>
          ABHA number is a 14 digit number that will uniquely identify you as a
          participant in India's digital healthcare ecosystem. ABHA number will
          establish a strong and trustable identity for you that will be
          accepted by healthcare providers across the country. Seamless sign up
          for PHR (Personal Health Records) applications such as ABDM ABHA
          application for Health data sharing.
        </p>
        <div className="benefits-blocks">
          <div className="block">
            <img alt="Block_Image" src="logo192.png"></img>
            <h5>Unique & Trustable Identity</h5>
            <p>
              Establish unique identity across different healthcare providers
              within the healthcare ecosystem.
            </p>
          </div>
          <div className="block">
            <img alt="Block_Image" src="logo192.png"></img>
            <h5>Unified Benefits</h5>
            <p>
              Link all healthcare benefits ranging from public health programmes
              to insurance schemes to your unique ABHA number.
            </p>
          </div>
          <div className="block">
            <img alt="Block_Image" src="logo192.png"></img>
            <h5>Hassle-free Access</h5>
            <p>
              Avoid long lines for registration in healthcare facilities across
              the country
            </p>
          </div>
          <div className="block">
            <img alt="Block_Image" src="logo192.png"></img>
            <h5>Easy PHR Sign Up</h5>
            <p>
              Seamless sign up for PHR (Personal Health Records) applications
              such as ABDM application for health data sharing
            </p>
          </div>
        </div>
      </div>
      <div className="faq-container">
        <h1>FAQ's</h1>

        {faqs.map((faq) => (
          <div className="faq-list" key={faq.id}>
            <div className="faq-head">
              <div className="faq-que">
                <p>{faq.que}</p>
              </div>
              <div className="angle">
                {!showAnswer[faq.id] && (
                  <button onClick={() => toggleAnswer(faq.id)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                )}
                {showAnswer[faq.id] && (
                  <button onClick={() => toggleAnswer(faq.id)}>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </button>
                )}
              </div>
            </div>
            {!showAnswer && (
              <div className="faq-ans">
                <p>
                  {faq.ans}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
