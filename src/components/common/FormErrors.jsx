import React from "react";

const FormErrors = (props) => {
  if (props.msg) {
    return <span className="text-red-500">{props.msg}</span>;
  } else return null;
};

export default FormErrors;
