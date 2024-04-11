import { React } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ComradeProfile.css";

const ComradeProfile = () => {
  const { comradeId } = useParams();

  // Add a call to API here to get a comrade profile associated with above id
  // TODO: implement call to API with suitable model
  //
  return (
    <div className="ComradeProfile">
      {comradeId}
      <Link to={".."}>Return</Link>
    </div>
  );
};

export default ComradeProfile;
