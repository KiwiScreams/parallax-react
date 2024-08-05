
import "./Contacts.css"
const Contact = () => {
    return ( 
        <>
        <div className="contacts">
            <h2>Contact Us:</h2>
            <p>Have questions or need assistance? Our team is here to help! Contact us for more information about testing opportunities, technical support,<br/> or any inquiries you may have. We look forward to hearing from you!</p>
            <div className="social-icons flex">
                <div className="line"></div>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <div className="line"></div>
            </div>
            <h2 className="top">Are you brave enough to accept the challenge?</h2>
        </div>
        </>
     );
}
 
export default Contact;