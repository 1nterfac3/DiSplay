import React from 'react';
import PropTypes from 'prop-types';


const User = (props) => {
    return (
        <div className="Image-Container">
            <img className="user-image" src={props.imageUrl} alt={props.name}></img>
            <h3>{props.fullname}</h3>
            <p><b>Job Title:</b> {props.jobTitle}</p>
            <p><b>Salary:</b> ${props.salary}</p>
        </div>
    );
}

User.defaultProps = {
    jobTitle: "Junior Programmer",
    // imageUrl: "https://picsum.photos/id/199/2592/1728",
    salary: 84000
  };

export default User;