import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
            Experience healthcare designed around your convenience. Health Care offers a complete range of on-demand 
            medical services tailored to your lifestyle. Instantly connect with licensed doctors online for expert 
            consultations, digital prescriptions, and fast refills – all from the comfort of your home.
          </p>
          </div>

          <div className="info-cards-content">
            <InformationCard
              title="Emergency Care"
              description="In moments that matter most, our Emergency Care service stands ready. Whether it's a 
              sudden illness, accident, or urgent health concern, our round-the-clock team of qualified professionals 
              ensures rapid, reliable medical attention – 24/7, wherever you are."
              icon={faTruckMedical}
            />

            <InformationCard
              title="Heart Disease"
              description="Protect what matters most – your heart. Our seasoned cardiologists use cutting-edge 
              diagnostics and tailored treatment plans to monitor, manage, and enhance your cardiovascular health. 
              From early screenings to advanced care, we’re here to help you live life to the fullest."
              icon={faHeartPulse}
            />

            <InformationCard
              title="Dental Care"
              description="Let your smile shine. Our Dental Care services cover everything from regular cleanings 
              and exams to cosmetic enhancements and restorative treatments. With gentle care and modern techniques, 
              our expert dentists keep your oral health in perfect shape."
              icon={faTooth}
            />
          </div>
    </div>
  );
}

export default Info;
