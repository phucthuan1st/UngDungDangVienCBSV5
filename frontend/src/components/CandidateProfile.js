import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/CandidateProfile.css";
import mockData from "../mock/mockCandidateData.json";

const CandidateProfile = () => {
  const { candidateId } = useParams();
  const [candidateData, setCandidateData] = useState(null);

  useEffect(() => {
    const filteredCandidate = mockData.find(
      (candidate) => candidate.ProfileId === parseInt(candidateId),
    );
    setCandidateData(filteredCandidate);
  }, [candidateId]);

  if (!candidateData) {
    return <div className="CandidateProfile">No candidate found.</div>;
  }

  return (
    <div className="CandidateProfile">
      <div className="left">
        <div className="buttons">
          <Link to={".."} className="return-button">
            Return
          </Link>
        </div>
        <img
          className="avatar"
          src={candidateData.AvatarLink}
          alt="Candidate Avatar"
        />
      </div>
      <div className="right">
        <div>
          <h2>{`${candidateData.LastName} ${candidateData.FirstName}`}</h2>
          <p>Birthday: {candidateData.Birthday}</p>
          <p>Gender: {candidateData.Gender}</p>
          <p>Hometown: {candidateData.Hometown}</p>
          <p>Status: {candidateData.Status}</p>
          <p>Role: {candidateData.RoleName}</p>
          <p>Phone Number: {candidateData.PhoneNumber}</p>
          <p>Email: {candidateData.Email}</p>
          <p>Last Update Date: {candidateData.LastUpdateDate}</p>
        </div>

        <div className="buttons">
          <Link to={`../update/${candidateId}`} className="update-button">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
