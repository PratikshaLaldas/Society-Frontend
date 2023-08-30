import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa"; 

const Complaint = ({ complaint, deleteComplaint }) => {
  const navigate = useNavigate();

  const editComplaint = (cid) => {
    navigate(`/UpdateComplaint/${cid}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    
    <tr >
      <td>{complaint.complainerName}</td>
      <td>{formatDate(complaint.date)}</td>
      <td>{complaint.description}</td>
      <td>{complaint.solutionMsg}</td>
      <td>
        &nbsp; &nbsp;
      <span
          className="icon-complaint-edit-button"
          onClick={() => editComplaint(complaint.cid)}
        >
          <FaPencilAlt />
        </span> 
        <span
          className="icon-complaint-delete-button"
          onClick={() => deleteComplaint(complaint.cid)}
        >
          <FaTrash />
        </span>
      </td>
    </tr>
  );
};

export default Complaint;
