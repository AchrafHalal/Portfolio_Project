import React, { useState } from 'react';
import './services.css';

function Services() {
    const [cards] = useState([
        {
            imgSrc: require('../../assets/bording.png'),
            title: 'Luxury Boarding',
            text: 'Indulge your pet in a luxurious staycation with our spacious accommodations, personalized attention, and top-notch amenities.'
        },
        {
            imgSrc: require('../../assets/grooming.png'),
            title: 'Professional Grooming',
            text: 'Transform your pet\'s appearance with our expert grooming services, including stylish haircuts, luxurious baths, and meticulous attention to detail.'
        },
        {
            imgSrc: require('../../assets/daycare.png'),
            title: 'Premium Daycare',
            text: 'Keep your pet entertained and socialized with our premium daycare facilities, providing a safe and stimulating environment for play and interaction.'
        },
        {
            imgSrc: require('../../assets/spa.png'),
            title: 'Exclusive Spa Treatments',
            text: 'Treat your pet to a day of relaxation and rejuvenation with our exclusive spa treatments, promoting wellness and enhancing their overall happiness.'
        },
        {
            imgSrc: require('../../assets/training.png'),
            title: 'Training Programs',
            text: 'Unlock your pet\'s full potential with our personalized training programs, designed to address specific needs and foster obedience and good behavior.'
        },
        {
            imgSrc: require('../../assets/health.png'),
            title: 'Health Consultations',
            text: 'Prioritize your pet\'s health with our personalized health and wellness consultations. Our expert veterinarians offer tailored advice on nutrition, preventive care, and overall well-being, ensuring your pet leads a happy and healthy life.'
        }
    ]);

    const [Services] = useState([
        'Luxury Boarding',
        'Professional Grooming',
        'Premium Daycare',
        'Exclusive Spa Treatments',
        'Training Programs',
        'Health Consultations'
    ]);

    return (
        <div className='services' id='services'>
            <section>
                <div className="container">
                    <h3 className='titre1'>Our Services</h3>
                    <h1><span className='p1'>Premium</span> Pet Servises</h1>
                    <div className="cards">
                        {cards.map((card, index) => (
                            <div className="card" key={index}>
                                <div className="icon"><img src={card.imgSrc} alt={card.title} /></div>
                                <h3>{card.title}</h3>
                                <p className='content'>{card.text}</p>
                                <a className='link' href="#">Read more</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="booking section__padding" id='book'>
                <div className="form_Container">
                    <form action="">
                        <input type="text" placeholder='Your Name' name="" id="" />
                        <input type="email" placeholder='Your Email' name="" id="" />
                        <input type="date" placeholder='Reservation date' name="" id="" />
                        <input type="time" placeholder='Reservation Time' name="" id="" />
                        <select id="">
                            <option value="" disabled selected hidden>Choose a service</option>
                            {Services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
    ))}
</select>                        <input type="submit" value="Book Now" />
                    </form>
                </div>
                <div className="form_content">
                    <h3 className='titre1'>Schedule Your Pet's Visit Today</h3>
                    <h1><span className='p1'>Book</span> Your Pet</h1>
                    <div className="par">
                        <p>
                        Experience hassle-free booking with our convenient online form. Simply fill out the required details, choose your preferred service, and select a suitable time slot. Our team will promptly confirm your appointment,
                         ensuring that your pet receives the care they deserve without delay
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
