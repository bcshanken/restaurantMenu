import React from "react";
import "./InstructionsInput.css";

const InstructionsInput = ({ value, handleChange }) => {
  return (
    <div className="input-field">
      <textarea
        value={value}
        placeholder="add a note (extra sauce, no onions, etc.)"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        id="special-instructions"
        className="materialize-textarea"
      ></textarea>
    </div>
  );
};

export default InstructionsInput;
