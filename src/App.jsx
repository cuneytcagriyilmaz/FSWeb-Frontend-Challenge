
// import React, { useState, useEffect } from 'react';
// import './App.css'
// import Mode from './coponents/mode/Mode'
// import Header from './coponents/header/Header'
// import Hero from './coponents/hero/Hero'
// import Skills from './coponents/skills/Skills'
// import Profile from './coponents/profile/Profile'
// import Projects from './coponents/projects/Projects'
// import Footer from './coponents/footer/Footer'

// function App() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem('darkMode') === 'true'
//   );

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDarkMode);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <>
//       <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
//         <Mode darkMode={darkMode} setDarkMode={setDarkMode} />
//         <Header />
//         <Hero />
//         <Skills />
//         <Profile />
//         <Projects />
//       </div>
//       <Footer />

//     </>
//   );
// }

// export default App;

//----------------------------------------------


// import React, { useState, useEffect } from 'react';
// import './App.css'
// import Mode from './coponents/mode/Mode'
// import Header from './coponents/header/Header'
// import Hero from './coponents/hero/Hero'
// import Skills from './coponents/skills/Skills'
// import Profile from './coponents/profile/Profile'
// import Projects from './coponents/projects/Projects'
// import Footer from './coponents/footer/Footer'

// function App() {
//   const [darkMode, setDarkMode] = useState(
//     localStorage.getItem('darkMode') === 'true'
//   );

//   useEffect(() => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDarkMode);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('darkMode', darkMode);
//   }, [darkMode]);

//   return (
//     <>
//       <div className={`main-container ${darkMode ? 'dark-mode' : ''}`}>
//         <Mode darkMode={darkMode} setDarkMode={setDarkMode} />
//         <Header />
//         <Hero />
//         <Skills />
//         <Profile />
//         <Projects />
//       </div>
//       <Footer />

//     </>
//   );
// }

// export default App;


//-------------------------------------
// import React, { useState, useEffect } from 'react';
// import './App.css'
// import Mode from './coponents/mode/Mode'
// import Header from './coponents/header/Header'
// import Hero from './coponents/hero/Hero'
// import Skills from './coponents/skills/Skills'
// import Profile from './coponents/profile/Profile'
// import Projects from './coponents/projects/Projects'
// import Footer from './coponents/footer/Footer'
// import { DataContext } from "./context/DataContext";
// import { languages } from "./data/languages";



// function App() {

//   useEffect(() => {
//     const user = {
//       userLangPref: langPre === true ? "TR" : "EN",
//     };

//   }, [localStorage.theme, localStorage.lang]);

//   const [langPre, setLangPre] = useState(localStorage.getItem("lang"));

//   const langHandler = () => {
//     setLangPre(!langPre);
//     localStorage.setItem("lang", langPre);
//   };
//   const content = langPre === true ? languages.tr : languages.en;
//   const contentProjects = langPre === true ? `tr` : `en`;


//   return (
//     <DataContext.Provider
//       value={{
//         content, contentProjects, langHandler, langPre
//       }}
//     >
//       <div>
//         <div className="main-container">
//           <Mode />
//           <Header />
//           <Hero />
//           <Skills />
//           <Profile />
//           <Projects />
//         </div>
//         <Footer />
//       </div>
//     </DataContext.Provider>

//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import './App.css'
import Mode from './coponents/mode/Mode'
import Header from './coponents/header/Header'
import Hero from './coponents/hero/Hero'
import Skills from './coponents/skills/Skills'
import Profile from './coponents/profile/Profile'
import Projects from './coponents/projects/Projects'
import Footer from './coponents/footer/Footer'
import { DataContext } from "./context/DataContext";
import { languages } from "./data/languages";

function App() {
  const storedLang = localStorage.getItem("lang");

  const defaultLang = storedLang ? storedLang : "en";

  const [langPre, setLangPre] = useState(defaultLang);

  const langHandler = () => {
    const newLang = langPre === "en" ? "tr" : "en";
    setLangPre(newLang);
    localStorage.setItem("lang", newLang);
  };

  const content = langPre === "tr" ? languages.tr : languages.en;
  const contentProjects = langPre === "tr" ? "tr" : "en";

  const data = {
    content,
    contentProjects,
    langHandler,
    langPre
  };

  useEffect(() => {
    if (!storedLang) {
      localStorage.setItem("lang", defaultLang);
    }
  }, [storedLang, defaultLang]);

  return (
    <DataContext.Provider value={data}>
      
        <Mode />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
     
    </DataContext.Provider>
  );
}

export default App;
