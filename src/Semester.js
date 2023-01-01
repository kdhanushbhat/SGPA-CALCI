import SubjectForm from "./SubjectForm";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import data1 from "./info1";
import { useSelector, useDispatch } from "react-redux";
import { datachange } from "./store/dataslice";

export default function Semester(prop) {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.active.branch);
  const sem = useSelector((state) => state.active.sem);
  const data = data1[branch];
  const sems = data.map((itm) => {
    return (
      <Dropdown.Item
        key={itm["id"]}
        onClick={() => {
          dispatch(datachange.semChange(itm["sem"]));
          console.log(itm);
        }}
      >
        {itm["sem"]}
      </Dropdown.Item>
    );
  });
  return (
    <div className="m-3">
      <div className="mb-5">
        <DropdownButton  size="lg" id="dropdown-basic-button" title="Select your semester">
          {sems}
        </DropdownButton>
        <h3 className="m-4">Semester : {sem ? sem : ""}</h3>
      </div>

      {sem ? <SubjectForm subjects={data[sem - 1]["sublist"]} /> : ""}
    </div>
  );
}
