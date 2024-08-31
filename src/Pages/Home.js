import React from "react";
import '../home.css';
import { mentors } from "../Data/Homedata";
import FAQ from "../FAQ";



function Home() {
    return (
        <>
            <div className="inspirational_mentors">
                <h2 className="heading_insp">Meet Our Inspirational Mentors</h2>
                <p className="para1">Discover the Mentors who are ready to guide, inspire, and empower you. Get to know our accomplished experts and find the perfect Mentors to help you reach your goals.</p>

                <div className="cards_display">

                    

                    {mentors.map((v, i) => {
                        return (
                            <Cards mentors={v} key={i} />
                        )
                    })}

                </div>
            </div>

            {/* FAQ */}
            <div className="FAQ_Area">
                <div><h2 style={{textAlign : "center"}}>Frequently Asked Questions</h2>
                    <p  style={{textAlign : "center"}}>Get answers to common queries about our platform and mentorship opportunities.</p>
                    <img src={require("../images/footer-illustration.webp")} alt="footerimg" style={{ width : "80%" }} />
                </div>
                <div><FAQ/></div>
            </div>
        </>
    )
}
export default Home;

function Cards({ mentors }) {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img src="profile.jpg" alt="Profile Photo" className="profile-photo" />
                    <div className="profile-details">
                        <h2 className="name">{mentors.mentorsName}</h2>
                        <p className="designation">Senior Developer</p>
                        <div className="company-position">
                            <p className="company">{mentors.comapany}</p>
                            <p className="position">{mentors.role}</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="info-item rating">
                        <strong>Rating:</strong> <span style={{ color: "orange", fontSize: "25px" }}>★</span><span style={{ fontSize: "120%", fontWeight: "600" }}>{mentors.rating}</span>
                    </div>
                    <div className="info-item experience">
                        <strong>Experience:</strong> {mentors.experience}
                    </div>
                    <div className="info-item session">
                        <strong>Sessions:</strong> {mentors.session}
                    </div>
                </div>
            </div>

        </>
    )
}


