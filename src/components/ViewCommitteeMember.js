import React from "react";
import FooterComponent from "./FooterComponent";
import "../ViewCommitteeMember.css"; // Import your custom CSS for styling
import ResidentNavbar from "./ResidentNavbar";

const ViewCommitteeMember = () => {
  const dummyCommitteeMembers = [
    {
      id: 1,
      postName: "Chairman",
      name: "Jesan Daniel",
      wingNo: "2",
      flatNo: "102",
    },
    {
      id: 2,
      postName: "Secretary",
      name: "Maitri Bhatt",
      wingNo: "2",
      flatNo: "103",
    },
    {
        id: 3,
        postName: "Treasurer",
        name: "Tejas Kalsait",
        wingNo: "3",
        flatNo: "202",
      },
      {
        id: 4,
        postName: "Security Head",
        name: "Prashant Menon",
        wingNo: "3",
        flatNo: "301",
      }
     
  ];

  return (
    <div>
      <div className="ResidentNavbar">
        <ResidentNavbar />
      </div><br/><br/>
      <br/><br/><br/><br/><div className="table-container">
      <h1 className="committeeHome-h3">Committee Members</h1>
        {dummyCommitteeMembers.length === 0 ? (
          <p>No committee members found.</p>
        ) : (
            
          <table className="table table-striped table-committeeMembers">
            <thead className="table-centre">
              <tr>
                <th>Post Name</th>
                <th>Name</th>
                <th>Wing No.</th>
                <th>Flat No.</th>
              </tr>
            </thead>
            <tbody>
              {dummyCommitteeMembers.map((member) => (
                <tr key={member.id}>
                  <td>{member.postName}</td>
                  <td>{member.name}</td>
                  <td>{member.wingNo}</td>
                  <td>{member.flatNo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default ViewCommitteeMember;
