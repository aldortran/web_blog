import classes from './contact-form.module.css'
import {useState, useEffect} from "react";
import Notification from "../ui/notification/notification";

async function sendContact(contactDetails){
    const response = await fetch('/api/contact',{
        method:'POST',
        body:JSON.stringify(contactDetails),
        headers:{
            'Content-Type': 'application/json',
        }

    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message || 'Something went wrong')
    }
    return
}
function ContactForm(){
    const [enterEmail, setEmail] = useState('');
    const [enterName, setName] = useState('');
    const [enterMessage, setMessage] = useState('');
    const [requestStatus, setRequestStatus] = useState(''); // 'success' 'pending' 'error'
    const [requestError, setRequestError] = useState();

    useEffect(()=> {
        if(requestStatus === 'error' || requestStatus === 'success'){
            const timer = setTimeout(()=>{
                setRequestStatus(null)
                setRequestError(null)
            },3000);
            return () => clearTimeout(timer)
        }
    },[requestStatus])
    async function sendMessage(e){
        e.preventDefault();
        setRequestStatus('pending')
        // add client-side validation
       try{
           await sendContact({
               email:enterEmail,
               text:enterMessage,
               name:enterName,
           })
           setRequestStatus('success')
       }catch (error){
            setRequestError(error.text)
            setRequestStatus('error')
       }

    }
    let notification;
    if(requestStatus === 'pending'){
        notification = {
            status: 'pending',
            title: 'Pending!',
            text: 'You message its not way'
        }
    }
    if(requestStatus === 'error'){
        notification = {
            status: 'error',
            title: 'Error!',
            text: requestError,
        }
    }
    if(requestStatus === 'success'){
        notification = {
            status: 'success',
            title: 'Success',
            text: 'OK'
        }
    }
    return (
        <section className='bg-zinc-700'>
            <div className='max-w-screen-md py-8 lg:py-16 px-4 mx-auto'>
                <h2 className='text-zinc-400 text-center text-4xl'>Contact</h2>
                <form className={classes.form} onSubmit={sendMessage}>
                    <div>
                            <label htmlFor='email'>Email:</label>
                            <input id='email' type='email' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-red-300 focus:border-red-300' required value={enterEmail} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                            <label htmlFor='name'>Your Name:</label>
                            <input id='name' type='text' className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-red-300 focus:border-red-300' required value={enterName} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div>
                            <label htmlFor='mess'>Your Message:</label>
                            <textarea id='mess' rows='5' className='shadow-sm bg-gray-50 text-sm block rounded-lg w-full p-2.5' required value={enterMessage} onChange={(e)=> setMessage(e.target.value)}></textarea>
                    </div>
                    <div>
                        <button className='p-4 hover:bg-red-500 bg-red-400 rounded-3xl'>Send Message</button>
                    </div>
                </form>
                {notification && (<Notification status = {notification.status} title={notification.title} text={notification.text}/> )}
            </div>
        </section>
    )
}
export default ContactForm;