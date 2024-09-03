import React from "react";
import Loader from "../layouts/Loader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-5 profile">
              <div className="d-flex align-items-center mb-4">
                <figure className="avatar avatar-profile text-center mr-3">
                  {user && user.avatar ? (
                    <img
                      className="rounded-circle figure-img img-fluid"
                      src={user?.avatar.url}
                      alt={user?.name}
                    />
                  ) : (
                    <img
                      className="rounded-circle figure-img img-fluid"
                      src="default-avatar.png"
                      alt="Default Avatar"
                    />
                  )}
                </figure>
                <span>Welcome {user ? user.name : "User"}!</span>
              </div>
              <Link
                to="/users/me/update"
                id="edit_profile"
                className="btn btn-primary btn-block my-5"
              >
                Edit Profile
              </Link>
              <h4>Full Name:</h4>
              <p>{user ? user.name : "N/A"}</p>

              <h4>Email Address</h4>
              <p>{user ? user.email : "N/A"}</p>

              <h4>Joined On</h4>
              <p>{user ? String(user.createdAt).substring(0, 10) : "N/A"}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};


export default Profile;
