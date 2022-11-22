import './index.scss';


const Contact = () => {
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>sdfgjsdfsdfsf</p>
            </div>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Example@example.com" required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li>
                            <textarea name="message" placeholder="Message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="Send" />
                        </li>
                    </ul>
                </form>
            </div>        
        </div>
        </>
    )
}


export default Contact