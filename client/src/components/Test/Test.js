import React from 'react';
import BodyLayout from '../UI/BodyLayout';

import brain1 from '../../Assets/Images/brain1.jpg';
// import brain2 from '../../Assets/Images/brain2.jpg';
// import crazydoc from '../../Assets/Images/doctorDrill.jpg';
import patient from '../../Assets/Images/examine1.jpg';

const test = (props) => {



    return (

        <BodyLayout>
            <div className="hero">
                <h1>Pshyco<span>Therapist</span></h1>

                <div className="container-layout">
                    <div className="item item-1">καλησπερα</div>
                    <div className="item item-2">2</div>
                    <div className="item item-3">3</div>
                    <div className="item item-3">4</div>
                    <div className="item item-3">5</div>
                    <div className="item item-3">6</div>
                    <div className="item item-3">7</div>
                    <div className="item item-3">8</div>
                </div>
            </div>

            <section className="welcome">
                <div className="welcome-left">
                    {<img src={brain1} alt="man thinking under a tree" />}
                </div>
                <div className="welcome-middle">
                    <h1><span>W</span>elcome to your Therapy</h1>
                </div>
                <div className="welcome-right">
                    {/*<img src={brain2} alt="thinking" />*/}
                </div>
            </section>

            <section className="about-me">
                {/*{<img src={crazydoc} alt="mad doctor" />}*/}
                <h1 className="about-title"><span>Dr.</span>Thano Kanelopolo <span>PhD</span></h1>
                <h2 className="about-subtitle">Psycologist
                    <span>Kologist..</span>
                    <span>Kologist...</span>
                    </h2>
                <div className="about-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque praesentium mollitia reiciendis sed sit esse quisquam necessitatibus quasi nihil.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ad quam temporibus repudiandae cumque iure voluptates ipsum corporis ratione unde adipisci, nisi sequi quo molestiae eligendi dignissimos illum cupiditate asperiores, similique quaerat aperiam! Nam, repellat, sapiente repudiandae dicta doloribus recusandae!</p>
                </div>
            </section>

            <section className="portofolio">
                <div className="container">
                    <h1>My Work</h1>

                    <div className="portofolio-items">
                        <figure className="portofolio-item featured">
                            {<img src={patient} alt="patient" />}
                            <figcaption>
                                <h2 className="portofolio-title">Examine the patient</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iste dolorum in. Est, quia, tempora! Deleniti facere reiciendis ipsa ratione atque, nesciunt quisquam esse repellat nemo aperiam. Aspernatur, expedita, unde.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="container">
                    <h1>Βιονική Επιστρωμάτωση Εγκεφάλου</h1>

                    <div className="portofolio-items">
                        <figure className="portofolio-item featured">
                            {<img src={patient} alt="patient" />}
                            <figcaption>
                                <h2 className="portofolio-title">Examine the patient</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iste dolorum in. Est, quia, tempora! Deleniti facere reiciendis ipsa ratione atque, nesciunt quisquam esse repellat nemo aperiam. Aspernatur, expedita, unde.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="container">
                    <h1>My Work</h1>

                    <div className="portofolio-items">
                        <figure className="portofolio-item featured">
                            {<img src={patient} alt="patient" />}
                            <figcaption>
                                <h2 className="portofolio-title">Examine the patient</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iste dolorum in. Est, quia, tempora! Deleniti facere reiciendis ipsa ratione atque, nesciunt quisquam esse repellat nemo aperiam. Aspernatur, expedita, unde.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="container">
                    <h1>Crazy Patient</h1>

                    <div className="portofolio-items">
                        <figure className="portofolio-item featured">
                            {<img src={patient} alt="patient" />}
                            <figcaption>
                                <h2 className="portofolio-title">Examine the patient</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iste dolorum in. Est, quia, tempora! Deleniti facere reiciendis ipsa ratione atque, nesciunt quisquam esse repellat nemo aperiam. Aspernatur, expedita, unde.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="container">
                    <h1>Ειδική Περίπτωση Βλάβης</h1>

                    <div className="portofolio-items">
                        <figure className="portofolio-item featured">
                            {<img src={patient} alt="patient" />}
                            <figcaption>
                                <h2 className="portofolio-title">Examine the patient</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iste dolorum in. Est, quia, tempora! Deleniti facere reiciendis ipsa ratione atque, nesciunt quisquam esse repellat nemo aperiam. Aspernatur, expedita, unde.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className="container">
                    <h1>Τρομπο</h1>

                    <div className="portofolio-items">
                        <figure className="portofolio-item featured">
                            {<img src={patient} alt="patient" />}
                            <figcaption>
                                <h2 className="portofolio-title">Examine the patient</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, iste dolorum in. Est, quia, tempora! Deleniti facere reiciendis ipsa ratione atque, nesciunt quisquam esse repellat nemo aperiam. Aspernatur, expedita, unde.</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="contact">
                <h1>Contact me</h1>
                <form>
                    <label className="name">Name:
                        <input type="text" id="name" />
                    </label>

                    <label for="email">Email:
                        <input type="email" />
                    </label>

                    <label message="message">Message
                        <textarea name="" id="message" cols="30" rows="10"></textarea>
                    </label>
                </form>
            </section>
        </BodyLayout>

        )
}



export default test;
