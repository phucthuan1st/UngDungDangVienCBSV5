import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ComradeProfile.css";
import mockData from "../mock/mockComradeData.json";

const ComradeProfile = () => {
  const { comradeId } = useParams();
  const [comradeData, setComradeData] = useState(null);

  useEffect(() => {
    const filteredComrade = mockData.find(
      (comrade) => comrade.ProfileId === parseInt(comradeId),
    );
    setComradeData(filteredComrade);
  }, [comradeId]);

  if (!comradeData) {
    return <div className="ComradeProfile">No comrade found.</div>;
  }

  return (
    <div className="ComradeProfile">
      <div className="left">
        <div className="buttons">
          <Link to={".."} className="return-button">
            Return
          </Link>
        </div>
        <img
          className="avatar"
          src={comradeData.AvatarLink}
          alt="Comrade Avatar"
        />
      </div>
      <div className="right">
        <div>
          <h2>{`${comradeData.LastName} ${comradeData.FirstName}`}</h2>
          <p>Birthday: {comradeData.Birthday}</p>
          <p>Gender: {comradeData.Gender}</p>
          <p>Hometown: {comradeData.Hometown}</p>
          <p>Join Party Date: {comradeData.JoinPartyDate}</p>
          <p>Role: {comradeData.RoleName}</p>
          <p>Phone Number: {comradeData.PhoneNumber}</p>
          <p>Email: {comradeData.Email}</p>
        </div>

        <div className="buttons">
          <Link to={`../update/${comradeId}`} className="update-button">
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComradeProfile;
