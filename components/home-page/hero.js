import Image from "next/image";

export default function Hero(){
    return(
        <section className='flex flex-col h-full bg-black'>
            <div className='flex text-white bg-zinc-800 px-12 mx-auto w-full max-w-7xl py-8 border-x border-zinc-100'>
                    <div className='relative mt-6 px-8'>
                        <div className='pointer-events-auto'>
                            <Image aria-label='Levi' src='/images/tin.jpg' alt='Levi' width='300' height='300' className='w-16 h-16 rounded-full object-cover cursor-pointer' />
                        </div>
                        <h1 className='text-4xl font-bold max-w-2xl mt-6'>
                            Software engineer, and playing all musical instrument .
                        </h1>
                        <p className='text-base mt-6 max-w-2xl font-thin text-zinc-400'>
                            I’m Levi, I’m Junior SoftWare Engineer at VanLang University.
                        </p>
                        <div className='flex mt-6 gap-6'>
                            <a className="group -m-1 p-1" aria-label="Follow on Github" href="https://github.com/TranTrungTinLV" target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     className="icon icon-tabler icon-tabler-brand-github" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round-full">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
                                </svg>
                            </a>
                            <a className='group -m-1 p-1' aria-label='Follow on facebook' href='https://www.facebook.com/profile.php?id=100085482553477' target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                     className="bi bi-facebook" viewBox="0 0 16 16" id="IconChangeColor">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                        id="mainIconPathAttribute"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
            </div>
        </section>
    )
}