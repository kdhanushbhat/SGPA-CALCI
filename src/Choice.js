import data1 from "./info1";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Semester from "./Semester";
import { useSelector, useDispatch } from "react-redux";
import { datachange } from "./store/dataslice";

export default function Choice() {
  const branch = useSelector((state) => state.active.branch);
  const dispatch = useDispatch();
  const brselected = useSelector((state) => state.active.brSelected);
  function handleBrClick(itm) {
    dispatch(datachange.branchChange(itm));
    console.log(window.innerWidth);
  }

  const branches = Object.keys(data1).map((itm) => {
    return (
      <Dropdown.Item key={itm} onClick={() => handleBrClick(itm)}>
        {itm}
      </Dropdown.Item>
    );
  });

  return (
    <div className="App">
      <h1
        className={
          window.innerWidth >= 1024 ? "title mb-4 p-5" : "title mb-4 p-3"
        }
      >
        SGPA CALCI (VTU)
      </h1>
      <DropdownButton
      
        size="lg"
        id="dropdown-basic-button"
        title={brselected ? branch : "Select Branch"}
        value="adawd"
      >
        {branches}
      </DropdownButton>
      {brselected ? <Semester branch={branch} /> : ""}
    </div>
  );
}
