import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Assuming you'll style this page in a separate CSS file

export default function About() {
    return (
        <Fragment>
            <div className="about-container">
                <div className="about-header">
                    <h1>About Us</h1>
                </div>

                <div className="about-content">
                    <section className="about-intro">
                        <br>
                        </br>
                        <br>
                        </br>
                        <h2>Our Story</h2>
                        <p>
                            Welcome to our world of handmade delights! What started as a small passion for crafting beautiful, unique items has blossomed into a full-fledged business that celebrates creativity, craftsmanship, and community.
                        </p>
                        <p>
                            At <b>Our Crafts Studio</b>, each item is lovingly crafted by hand, with careful attention to detail. We believe in creating products that are not only beautiful but also meaningful, made with sustainable and ethically sourced materials.
                        </p>
                    </section>

                    <section className="about-mission">
                        <br>
                        </br>
                        <br>
                        </br>
                        <h2>Our Mission</h2>
                        <br>
                        </br>
                        <br>
                        </br>
                        <p>
                            Our mission is simple: to bring the joy of handmade creations to everyone, while supporting artisans and promoting creativity. Every piece we make tells a story—whether it's a hand-knit scarf, a hand-painted mug, or a custom-crafted piece of jewelry. 
                        </p>
                        <p>
                            We strive to create products that inspire, and we hope to bring a little extra beauty into your everyday life through our one-of-a-kind items.
                        </p>
                    </section>

                    <section className="about-values">
                        <h2>Why Choose Us?</h2>
                        <br>
                        </br>
                        <br>
                        </br>
                        <ul>
                            <li><b>Handcrafted with Love</b>: Each product is handmade with care and precision.</li>
                            <li><b>Sustainable & Ethical</b>: We prioritize using eco-friendly materials and ethical production practices.</li>
                            <li><b>Unique Designs</b>: Our items are one-of-a-kind, making every purchase a special experience.</li>
                        </ul>
                    </section>

                    <section className="about-contact">
                        <br>
                        </br>
                        <br>
                        </br>
                        <h2>Get in Touch</h2>
                        <p>
                            We love hearing from our customers! If you have any questions, suggestions, or custom requests, feel free to reach out.
                        </p>
                        <p>
                            <br>
                            </br>
                            <br>
                            </br>
                            <Link to="/contact" className="contact-link">Contact Us</Link>
                        </p>
                    </section>
                </div>
            </div>
        </Fragment>
    );
}
