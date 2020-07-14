import React, { useState } from "react";
import { testData } from "./testData";
import "./book.scss";

export const Book = () => {
  const [fontSize, setFontSize] = useState<number>(15);

  const changeFontSize = (value: number) => {
    setFontSize(fontSize + value);
  };

  const textStyle = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className="book">
      <div className="fontSizeChangeBox z-depth-3">
        <div
          onClick={(event) => {
            changeFontSize(-1);
          }}
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">exposure_neg_1</i>
        </div>
        <div className="input-field col s6">
          <input
            id="last_name"
            type="text"
            className="validate"
            value={fontSize}
          />
          <label htmlFor="last_name">Размер шрифта</label>
        </div>
        <div
          onClick={(event) => {
            changeFontSize(1);
          }}
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">exposure_plus_1</i>
        </div>
      </div>

      {testData.map((t) => {
        return <p style={textStyle}>{t.text}</p>;
      })}
    </div>
  );
};
