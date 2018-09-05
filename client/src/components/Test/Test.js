import React from 'react';
import BodyLayout from '../UI/BodyLayout';

// import brain1 from '../../Assets/Images/brain1.jpg';
// import brain2 from '../../Assets/Images/brain2.jpg';
// import crazydoc from '../../Assets/Images/doctorDrill.jpg';
// import patient from '../../Assets/Images/examine1.jpg';

const test = (props) => {



    return (

        <BodyLayout>
            <div className="hero">
                <h1>Pshyco<span>Therapist</span></h1>
            </div>

            <section className="welcome">
                <div className="welcome-left">
                    {/*<img src={brain1} alt="man thinking under a tree" />*/}
                </div>
                <div className="welcome-middle">
                    <h1><span>W</span>elcome to your Therapy</h1>
                </div>
                <div className="welcome-right">
                    {/*<img src={brain2} alt="thinking" />*/}
                </div>
            </section>

            <section className="about-me">
                {/*<img src={crazydoc} alt="mad doctor" />*/}
                <h1 className="about-title"><span>Dr</span>. Kanelopolo</h1>
                <h2 className="about-subtitle">Psycologist</h2>
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
                            {/*<img src={patient} alt="patient" />*/}
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

            <footer>
                <p>Follow me Now!</p>
                <div className="social-icons">

                </div>
                <p className="copywrite">&copy; Entr<span></span>py 2018</p>
            </footer>
        </BodyLayout>

        )
}



export default test;
