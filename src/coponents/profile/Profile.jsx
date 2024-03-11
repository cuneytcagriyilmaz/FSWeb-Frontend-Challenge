
import React from "react";
import './profile.css'
function Profile() {
    return (
        <div className="header-profile mt-[42px]" id="profile">
            <h1 className="text-title font-semibold mb-[10px] text-[36px] text-center md:text-[48px] md:text-left ">
                Profile
            </h1>
            <div
                className="profile-container flex text-primary flex-wrap  justify-center md:justify-start "
                id="profile-info"
            >
                <div className="basis-full md:basis-1/2 tracking-[1%]">
                    <span className="text-blue-600 font-medium text-3xl flex justify-center md:justify-start">
                        Profile
                    </span>

                    <div
                        id="infos"
                        className="grid grid-cols-2 mt-[21px] text-[#000] dark:text-text"
                    >
                        <div className=" grid grid-rows-5 font-semibold place-content-center md:place-content-start">
                            <p>Birthday</p>
                            <p>City</p>
                            <p>Education</p>
                            <br />
                            <p>Preffered Role</p>
                        </div>
                        <div className=" grid grid-rows-5 md:basis-1/2 place-content-center md:place-content-start">
                            <p>22.05.1998</p>
                            <p>Antalya</p>
                            <p>Antalya Bilim Uni. Electrical Electronics Engineering</p>
                            <p>
                                Bachelor's degree -
                                2022
                            </p>
                            <p>Full-Stack Java Developer</p>
                        </div>
                    </div>
                </div>
                <div className="basis-full md:basis-1/2 tracking-[1%]">
                    <span className="text-blue-600 font-medium text-3xl flex justify-center md:justify-start">
                        About Me
                    </span>

                    <div className="text-text space-y-4">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                        <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
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


