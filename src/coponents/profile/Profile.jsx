import React from 'react';
import './profile.css'

function Profile() {
    return (
        <>
            <div className='header-profile'>
                <h1 className='profile-h1'>Profile</h1>
                <div className="profile-container">
                    <div className="profile-content">
                        <section className="left-section-profile">
                            <h2 className='profile-h2'> Profile</h2>
                            <ul>
                                <li>
                                    <span className="profile-info">Doğum Tarihi:</span>
                                    <span className="profile-value">22.05.1998</span>
                                </li>
                                <li>
                                    <span className="profile-info">İkamet Şehri:</span>
                                    <span className="profile-value">Antalya</span>
                                </li>
                                <li>
                                    <span className="profile-info">Eğitim Durumu:</span>
                                    <span className="profile-value">Antalya Bilim Ünv. Elektrik Elektronik Müh. Lisans 2022</span>
                                </li>
                                <li>
                                    <span className="profile-info">Tercih Ettiği Rol:</span>
                                    <span className="profile-value">Full Stack Java Developer</span>
                                </li>
                            </ul>
                        </section>
                        <section className="right-section-profile">
                            <h2 className='profile-h2'>About Me</h2>
                            <div className="info-about">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.</p>
                                <p>Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
                            </div>


                        </section>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Profile;
