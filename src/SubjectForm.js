import { useEffect, useState } from "react";

export default function SubjectForm(props) {
  const [res, setRes] = useState("");
  let crsum = 0;
  const [ar, setAr] = useState([]);
  const sublist = props.subjects;
  const calculate = () => {
    console.log("hello");
  };

  useEffect(()=>{
    setRes("")
  },[props.subjects])
  const frm = sublist.map((itm) => {
    crsum = crsum + itm.cr;
    function gradeCheck(value) {
      if (value >= 90) return 10;
      else if (value >= 80) return 9;
      else if (value >= 70) return 8;
      else if (value >= 60) return 7;
      else if (value >= 45) return 6;
      else if (value >= 40) return 4;
      else return 0;
    }
    function handleChange(e) {
      let index = sublist.indexOf(itm);
      let value = gradeCheck(e.target.value);
      let arr = ar;
      arr[index] = itm.cr * value;
      setAr(arr);
    }
    return (
      <label key={itm.code} className="mx-4 col-md-4 border rounded my-4 p-3">
        {itm.sub}
        <input
        max="100"
        min="0"
          type="number"
          className="col-md-3 form-control my-3"
          size="60"
          onChange={handleChange}
        />
      </label>
    );
  });
  function handleSubmit() {
    const sum = ar.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum, ar);
    setRes(sum / crsum);
  }
  return (
    <div>
      {res !== ""?
        <h3 id="result" className="my-5 fw-bolder text-dark border border-dark rounded w-75 mx-auto p-4">
          YOUR SGPA IS : {res.toFixed(3)}
        </h3>
      : ""}
      <form onSubmit={calculate}>
        {frm}
        <br />
        <a href="#result" style={{textDecoration:"none",color:"white",fontSize:"1.2rem"}}>
          <button
            type="button"
            className="btn btn-primary px-5 py-3 mt-4"
            onClick={handleSubmit}
            >Calculate</button>
        </a>
        
      </form>
      
    </div>
  );
}
