// import React, { useState, useEffect } from "react";
// import "./mode.css";

// function Mode() {
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("isDarkMode") === "true"
//   );

//   useEffect(() => {
//     localStorage.setItem("isDarkMode", isDarkMode);
//     if (isDarkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [isDarkMode]);

//   const handleCheckboxChange = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div className="flex flex-row items-center justify-center sm:justify-end mt-6 text-text ">
//       <div className="block">
//         <label htmlFor="checkbox" className="flex items-center cursor-pointer">
//           <div className="relative mr-2">
//             <input
//               type="checkbox"
//               id="checkbox"
//               className="sr-only"
//               checked={isDarkMode}
//               onChange={handleCheckboxChange}
//             />
//           </div>
//         </label>
//       </div>

//       <div>
//         <div className="sm:hidden cursor-pointer">
//           "EN" : "TR"
//         </div>
//         <div className="hidden sm:inline-block">
//           MOD |
//           <span
//             className="cursor-pointer text-primary font-bold"
//           >
//             {isDarkMode ? "Dark Mode" : "Light Mode"}
//           </span>
//           YE GEÇ
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Mode;






import React, { useState, useEffect, useContext } from "react";
import "./mode.css";
import { DataContext } from "../../context/DataContext";


function Mode() {

  const { langHandler, langPre } = useContext(DataContext);

  return (
    <div className="mode-container flex flex-row items-center justify-center sm:justify-end mt-6 text-text">
      <div className="block">
        <label htmlFor="checkbox" className="flex items-center cursor-pointer">
          <div className="relative mr-2">
            <input
              type="checkbox"
              id="checkbox"
            />
          </div>
          | 
        </label>
      </div>

      <div>
        <div className="lang-handler-div font-bold">
          
          <span
            className="cursor-pointer font-bold lang-handler-span"
            onClick={langHandler}
          >
            {langPre === "en" ? "TÜRKÇE" : "İNGİLİZCE"}
          </span>
          'YE GEÇ
        </div>
      </div>
    </div>
  );
}

export default Mode;
