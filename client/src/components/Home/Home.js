import React from 'react';
import CollapsingContent from '../CollapsingContent/CollapsingContent';
import doc from '../../Assets/Images/doctorDrill.jpg';

const home = (props) => {

    const titles = props.posts.map( obj => obj.title );


    return (

        <section className="home">
            <div className="hero">
                <h1><span className="hero-main">Welcome </span>
                    <span className="hero-sub">to your therapy</span>
                </h1>
            </div>
            <img src={doc} alt="doctor" />
            <CollapsingContent title={titles[0]}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat explicabo debitis unde dicta itaque blanditiis, consequuntur, non, neque mollitia necessitatibus cum doloremque nam similique fuga laborum quam, harum possimus suscipit odio aspernatur ullam quasi delectus voluptate id. Fugiat commodi ab pariatur suscipit et, cumque dignissimos maiores fugit, harum quibusdam modi?</p>
            </CollapsingContent>
            <CollapsingContent title={titles[1]}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio accusantium, ipsam voluptatum aliquam et cum, velit in. Error ab commodi quasi necessitatibus, modi sapiente officiis provident esse quaerat, consequatur, dolores ipsam voluptate sit quod iste! Quas aut sequi itaque hic eveniet molestiae vel rem, ipsam voluptatibus doloremque praesentium deleniti sit.</p>
            </CollapsingContent>
            <CollapsingContent title={titles[2]}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur explicabo officiis, iste ea a molestiae saepe laboriosam velit recusandae? Nostrum nesciunt tempore commodi fuga optio odit omnis placeat, iure a, dolorum quidem enim id saepe. Veritatis cupiditate quidem harum similique odio debitis, sed accusantium voluptate libero at! Dolore magnam non rem tempora quos quibusdam! Perferendis, voluptate, ex! Itaque natus maxime similique dolore provident cupiditate, veniam impedit magni! Veritatis ratione, perspiciatis! Ipsam numquam rem incidunt perspiciatis labore voluptas dignissimos, ab similique maxime reiciendis, praesentium officiis accusamus dolor, dolore consequuntur earum. Modi magni omnis nihil ipsa eveniet a ab quam nemo eius!</p>
            </CollapsingContent>
        </section>
        )
}

export default home;
