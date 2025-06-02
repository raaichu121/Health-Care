import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/doc-1.png";
import profile2 from "../Assets/doc-2.png";
import profile3 from "../Assets/doc-3.png";
import profile4 from "../Assets/doc-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Care. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Dr. Ajay Singh"
          title="General Surgeons"
          stars="4.8"
          reviews="1120"
        />
        <DoctorCard
          img={profile2}
          name="Dr. Sandhya Chaudhary"
          title="Hematologists"
          stars="4.5"
          reviews="800"
        />
        <DoctorCard
          img={profile3}
          name="Dr. Dlip Yadav"
          title="Endocrinologists"
          stars="4.7"
          reviews="950"
        />
        <DoctorCard
          img={profile4}
          name="Dr. Palki Sharma"
          title="Hematologists"
          stars="4.8"
          reviews="850"
        />
      </div>
    </div>
  );
}

export default Doctors;
