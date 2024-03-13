
// import React, { useContext } from "react";
// import './profile.css'
// import { DataContext } from "../../context/DataContext";


// function Profile() {
//     const { content, theme } = useContext(DataContext);

//     return (
//         <div className="header-profile" id="profile">
//             <h1 className="profile-h1 text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left ">
//                 {content.profile}
//             </h1>
//             <div
//                 className="profile-container flex text-primary flex-wrap  justify-center md:justify-start "
//                 id="profile-info"
//             >
//                 <div className="basis-full md:basis-1/2 tracking-[1%]">
//                     <span className="text-blue-600 font-medium text-3xl flex justify-center md:justify-start">
//                         {content.profile}
//                     </span>

//                     <div
//                         id="infos"
//                         className="grid grid-cols-2 mt-[21px] text-[#000]"
//                     >
//                         <div className=" grid grid-rows-5 font-semibold place-content-center md:place-content-start">
//                             <p>{content.aboutSection.bdaytitle}</p>
//                             <p>{content.aboutSection.cityTitle}</p>
//                             <p>{content.aboutSection.educationTitle}</p>
//                             <br />
//                             <p>{content.aboutSection.roleTitle}</p>
//                         </div>
//                         <div className=" grid grid-rows-5 md:basis-1/2 place-content-center md:place-content-start">
//                             <p>{content.aboutSection.bday}</p>
//                             <p>{content.aboutSection.city}</p>
//                             <p>{content.aboutSection.education.uni}</p>
//                             <p>
//                                 {content.aboutSection.education.type} -
//                                 {content.aboutSection.education.year}
//                             </p>
//                             <p>{content.aboutSection.role}</p>

//                         </div>
//                     </div>
//                 </div>
//                 <div className="basis-full md:basis-1/2 tracking-[1%]">
//                     <span className="text-blue-600 font-medium text-3xl flex justify-center md:justify-start ">
//                         {content.aboutSection.section}
//                     </span>

//                     <div className="text-text space-y-4">
//                         {content.aboutSection.aboutMe.map((paragraph, index) => (
//                             <p key={index}>{paragraph}</p>
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Profile;





import React, { useContext } from "react";
import './profile.css'
import { DataContext } from "../../context/DataContext";

function Profile() {
    const { content, theme } = useContext(DataContext);

    return (
        <div className={`header-profile ${theme === 'dark' ? 'dark:bg-darkBackground' : ''}`} id="profile">
            <h1 className={`profile-h1 ${theme === 'dark' ? 'dark:text-darkH1' : ''} text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left`}>
                {content.profile}
            </h1>

            <div
                className="profile-container flex text-primary flex-wrap  justify-center md:justify-start "
                id="profile-info"
            >
                <div className="basis-full md:basis-1/2 tracking-[1%]">
                    <span className={`text-blue-600 ${theme === 'dark' ? 'dark:text-darkH2' : ''} font-medium text-3xl flex justify-center md:justify-start`}>
                        {content.profile}
                    </span>


                    <div
                        id="infos"
                        className="grid grid-cols-2 mt-[21px] text-[#000]"
                    >
                        <div className={`grid ${theme === 'dark' ? 'dark:text-white' : ''} grid-rows-5 font-semibold place-content-center md:place-content-start`}>
                            <p>{content.aboutSection.bdaytitle}</p>
                            <p>{content.aboutSection.cityTitle}</p>
                            <p>{content.aboutSection.educationTitle}</p>
                            <br />
                            <p>{content.aboutSection.roleTitle}</p>
                        </div>
                        <div className={`grid ${theme === 'dark' ? 'dark:text-white' : ''} grid-rows-5 md:basis-1/2 place-content-center md:place-content-start`}>
                            <p>{content.aboutSection.bday}</p>
                            <p>{content.aboutSection.city}</p>
                            <p>{content.aboutSection.education.uni}</p>
                            <p>
                                {content.aboutSection.education.type} -
                                {content.aboutSection.education.year}
                            </p>
                            <p>{content.aboutSection.role}</p>

                        </div>
                    </div>
                </div>
                <div className="basis-full md:basis-1/2 tracking-[1%] ">
                    <span className={`text-blue-600 ${theme === 'dark' ? 'dark:text-darkH2' : ''} font-medium text-3xl flex justify-center md:justify-start`}>
                        {content.aboutSection.section}
                    </span>

                    <div className={`text-text ${theme === 'dark' ? 'dark:text-white' : ''} space-y-4`}>
                        {content.aboutSection.aboutMe.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


















































// import React from 'react';
// import './profile.css'

// function Profile() {
//     return (
//         <>
//             <div className='header-profile'>
//                 <h1 className='profile-h1'>Profile</h1>
//                 <div className="profile-container">
//                     <div className="profile-content">
//                         <section className="left-section-profile">
//                             <h2 className='profile-h2'> Profile</h2>
//                             <ul>
//                                 <li>
//                                     <span className="profile-info">Doğum Tarihi:</span>
//                                     <span className="profile-value">22.05.1998</span>
//                                 </li>
//                                 <li>
//                                     <span className="profile-info">İkamet Şehri:</span>
//                                     <span className="profile-value">Antalya</span>
//                                 </li>
//                                 <li>
//                                     <span className="profile-info">Eğitim Durumu:</span>
//                                     <span className="profile-value">Antalya Bilim Ünv. Elektrik Elektronik Müh. Lisans 2022</span>
//                                 </li>
//                                 <li>
//                                     <span className="profile-info">Tercih Ettiği Rol:</span>
//                                     <span className="profile-value">Full Stack Java Developer</span>
//                                 </li>
//                             </ul>
//                         </section>
//                         <section className="right-section-profile">
//                             <h2 className='profile-h2'>About Me</h2>
//                             <div className="info-about">
//                                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
//                                 <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
//                             </div>


//                         </section>
//                     </div>
//                 </div>
//             </div >
//         </>
//     );
// }

// export default Profile;


