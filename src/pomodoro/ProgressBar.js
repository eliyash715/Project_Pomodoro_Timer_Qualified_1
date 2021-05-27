import React from "react";
import PropTypes from "prop-types";

function ProgressBar({ percentComplete }) {
  return (
    <div className="progress" style={{ height: "20px" }}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-label="Percent complete"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentComplete} // TODO: Increase aria-valuenow with elapsed time
        style={{ width: `${percentComplete}%` }} // TODO: Increase width % with elapsed time
      />
    </div>
  );
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number.isRequired,
};

export default ProgressBar;








//Old Code & Working Code
// import React from "react";

// function ProgressBar({ percentComplete }) {
//   return (
//     <div className="progress" style={{ height: "20px" }}>
//       <div
//         className="progress-bar"
//         role="progressbar"
//         aria-valuemin="0"
//         aria-valuemax="100"
//         aria-valuenow={percentComplete} // TODO: Increase aria-valuenow as elapsed time increases
//         style={{ width: `${percentComplete}%` }} // TODO: Increase width % as elapsed time increases
//       />
//     </div>
//   );
// }
// export default ProgressBar;