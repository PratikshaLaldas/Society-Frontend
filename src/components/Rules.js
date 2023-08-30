import React from "react";
import RuleCard from "./RuleCard"; // Make sure to import the RuleCard component
import "../Rules.css"; // Import the CSS file for styling
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";

const Rules = () => {
  

  return (
    <div>
    <div className="ResidentNavbar">
        <ResidentNavbar />
    </div>

    <div className="container mt-5">
      <div className="card rules-container">
        <div className="card-header text-white">
          <h4 className="mb-0 center-align" >Society Rules and Regulations</h4>
        </div>
        <div className="card-body ">
      <p className="rule-card">
         <h5>Cleanliness</h5>
         After using common areas like the hall and garden for events, residents are required to clean up and dispose of any waste properly.     </p>
      <p className="rule-card">
         <h5>Bill Payments</h5>
         Residents must pay their monthly bills on time to avoid any penalties or service disruptions. Late payments may result in fines.     </p>
      <p className="rule-card">
         <h5>Complaints</h5>
         Residents can submit complaints regarding maintenance, facilities, or other issues. Complaints should be submitted through resident dashboard for proper resolution      </p>
      <p className="rule-card">
         <h5>Suggestions</h5>
         Residents are encouraged to provide suggestions for improving the community. Suggestions can be submitted through the designated dasboard.      </p>
      <p className="rule-card">
         <h5>Response Time</h5>
         The committee members will respond to complaints and suggestions within 7 days and provide an initial response or timeline for resolution    </p>
      <p className="rule-card">
         <h5>Voting</h5>
         Residents are expected to actively participate in society votes, including elections, policy changes, and major decisions that impact the community.  </p>
       <p className="rule-card">
         <h5>Notices</h5>
         Important notices, updates, and announcements will be displayed on the bulletin board. Residents are responsible for staying informed about community matters.</p>
        </div>
      </div>
    </div>
    <FooterComponent/>
    </div>
  );
};

export default Rules;
