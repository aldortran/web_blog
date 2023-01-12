import Link from 'next/link';

export default function Button(props){
    if(props.link){
        return(
            <Link href={props.link} legacyBehavior>
                <a>{props.children}</a>
            </Link>
        )
    }
    return (
        <button className='bg-red-500'>
            {props.children}
        </button>
    )
}