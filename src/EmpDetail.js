import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EmpDetail = () => {
  const { empid } = useParams();

  const [empdata, empdatachange] = useState({});
  console.log("data", empdata);

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
        console.log("resoult", resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Create</h2>
        </div>
        <div className="card-body"></div>

        {empdata && (
          <div>
            <h2>
              The Employe name is : <b>{empdata.name}</b> ({empdata.id})
            </h2>
            <h3>Contact Details</h3>
            <h5>Email is :{empdata.email}</h5>
            <h5>Phone is :{empdata.phone}</h5>
            <Link className="btn btn-danger" to="/">
              Back to Listing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmpDetail;
