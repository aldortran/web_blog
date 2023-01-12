import Link from 'next/link';
import Logo from "./logo";
export default function MainNavigation(){
    return <div className='bg-black'>
        <header className='flex bg-zinc-800 justify-center max-w-7xl mx-auto pt-4 border-x border-zinc-100 h-full sm:px-4'>
            <nav className='flex justify-center rounded-full bg-zinc-700 p-2 '>
                <ul className='flex text-gray-100 pointer-events-auto'>
                    <li className= 'hover:text-teal-400 mx-3 opacity-1'><Link href='/posts' className='px-3 py-2' legacyBehavior>
                        Posts
                    </Link></li>
                    <li className='hover:text-teal-400 mx-3 opacity-1'><Link href='/pages/contact' className='px-3 py-2' legacyBehavior>
                        Contact
                    </Link></li>
                </ul>
            </nav>
        </header>
    </div>
}
