import { useEffect, useState } from "react";
import axios from "axios";

const AddData = (props) => {
  return (
    <>
      <input type="text" placeholder="Add your new Todo"></input>
      <button>ADD</button>
    </>
  );
};

export default AddData;
