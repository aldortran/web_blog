import ContactForm from '../components/contact/contact-form'
import {Fragment} from "react";
import Head from "next/head";
function Contact(){
    return <Fragment>
        <Head>
            <title>Contact Me</title>
            <meta name='description' content='Send me your messages!'/>
        </Head>
        <div className='bg-zinc-800 mx-auto max-w-7xl border-x border-zinc-200'>
            <div>
                <ContactForm/>
            </div>

        </div>
    </Fragment>
}

export default Contact;