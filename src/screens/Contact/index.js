import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import '../Contact/contact.css'
const Index = () => {
    return (
        <div>
        <Navbar />
            <div>

            <div class="container ">
    <form id="contact" class="col" action="" method="post">
        <h3 class="contact-heading">Quick Contact</h3>
        <h4 class="contact-heading">Contact us today, and get reply with in 24 hours!</h4>
        <fieldset>
            <input placeholder="Your name" class="rounded" type="text" tabindex="1" required autofocus />
        </fieldset>
        <fieldset>
            <input placeholder="Your Email Address" class="rounded" type="email" tabindex="2" required />
        </fieldset>
        <fieldset>
            <input placeholder="Your Phone Number" type="tel" class="rounded" tabindex="3" required />
        </fieldset>
        <fieldset>
            <input placeholder="Your Web Site starts with http://" class="rounded" type="url" tabindex="4" required />
        </fieldset>
        <fieldset>
            <textarea placeholder="Type your Message Here...." class="rounded" tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
            <button name="submit" type="submit" id="contact-submit" class="rounded" data-submit="...Sending">Submit</button>
        </fieldset>
    </form>


</div>
        </div>
        <Footer />
            </div>
    );
}

export default Index;
