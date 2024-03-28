import { React } from "react";
import { useParams, Link } from "react-router-dom";
const CandidateProfile = () => {
  const { candidateId } = useParams();

  // Add a call to API here to get a candidate profile associated with above id
  // TODO: implement call to API with suitable model
  //
  return (
    <div className="CandidateProfile">
      {candidateId}
      <Link to={".."}>Return</Link>
    </div>
  );
};

export default CandidateProfile;
