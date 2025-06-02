import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
            Welcome to Health Care – your trusted companion in digital healthcare. Our mission is to 
            deliver accessible, reliable, and personalized medical services for individuals seeking 
            expert care and guidance. By using our platform, you acknowledge and accept the terms detailed 
            in our Privacy Policy and Terms of Service.
          </p>

          <p className="legal-title">Privacy Policy</p>
          <p className="legal-description">
            At Health Care, your privacy is our priority. Our Privacy Policy explains how we collect, 
            utilize, and safeguard your personal and health-related information. We are committed to data 
            security and assure you that your information is managed with the highest level of confidentiality and care.
          </p>

          <p className="legal-title">Terms of Service</p>
          <p className="legal-description">
            By using Health Care, you agree to our Terms of Service, which outline the proper use of our platform, 
            respectful interactions with healthcare professionals, and mutual responsibilities. Understanding these 
            terms helps ensure a smooth and safe experience for all our users.
          </p>

          <p className="legal-title">Consultations</p>
          <p className="legal-description">
            Health Care connects you with experienced medical professionals for convenient online consultations. 
            While these virtual sessions are not a substitute for emergency or in-person care, they are ideal for 
            medical advice, prescriptions, and personalized guidance. Providing accurate information is vital to 
            ensure the best possible care.
          </p>

          <p className="legal-title">How it Works</p>
          <p className="legal-description">
            Accessing healthcare has never been easier. Simply choose your specialist, schedule a virtual 
            appointment, and receive expert advice tailored to your needs. Please note: for urgent or life-threatening 
            situations, always seek immediate assistance from your nearest healthcare facility.
          </p>

          <div className="legal-footer">
            <p>© 2025 Health Care. All rights reserved.</p>
          </div>
      </div>
    </div>
  );
}

export default LegalDocs;
