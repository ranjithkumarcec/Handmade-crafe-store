// src/pages/Contact.js

import { Fragment } from 'react';
import './Contact.css'; // Assuming you'll create a separate CSS file for styling

export default function Contact() {
    return (
        <Fragment>
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>If you have any questions or custom requests, feel free to reach out!</p>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="4" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </Fragment>
    );
}
