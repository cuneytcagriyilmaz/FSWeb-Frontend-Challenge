import React, { useContext } from "react";
import "./mode.css";

function Mode() {
  return (
    <div className="flex flex-row items-center justify-center sm:justify-end mt-6 text-text ">
      <div className="block">
        <label htmlFor="checkbox" className="flex items-center cursor-pointer">
          <div className="relative mr-2">
            <input
              type="checkbox"
              id="checkbox"
              className="sr-only"
            />
          </div>
        </label>
      </div>

      <div>
        <div className="sm:hidden cursor-pointer">
          "EN" : "TR"
        </div>
        <div className="hidden sm:inline-block">
          MOD |
          <span
            className="cursor-pointer text-primary font-bold"
          >
            "İNGİLİZCE" : "TÜRKÇE"
          </span>
          YE GEÇ
        </div>
      </div>
    </div>
  );
}

export default Mode;
