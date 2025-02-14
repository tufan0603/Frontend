import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BACKEND from "../../constrance";

function ProgressBar({ percentage, label, experience, id }) {
  const navigate = useNavigate();
  const editHandeler = async (id) => {
    const data = { id, percentage, label, experience };
    // const response = await axios.put(`${BACKEND}/skill/${id}`).then(() => {
    navigate("/UpdateSkill", { state: data });
  };
  const deleteHandeler = async (id) => {
    const response = await axios
      .delete(`${BACKEND}/skill/${id}`)
      .then((res) => {
        location.reload();
      });
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-label">
        {label}&nbsp;&nbsp;&nbsp;&nbsp;{percentage}{" "}
        %&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Experience:&nbsp;{experience}
        &nbsp;year&nbsp;
        <span className="edit-delete-icon">
          {" "}
          <MdEdit
            onClick={() => editHandeler(id, label, percentage, experience)}
          />
          <MdDelete
            className="delete-icon"
            onClick={() => {
              deleteHandeler(id);
            }}
          />
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
