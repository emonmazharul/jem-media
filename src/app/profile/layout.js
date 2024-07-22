import Link from "next/link"

export const metadata = {
    title:'this is my profile page'
}

export default function ProfileLayout({children}) {
    return <div>
        <ul className="list-none">
            <li><a>add full name</a></li>
            <li><a>downlaod the filename</a></li>
            <li><Link href="/">visit homepage</Link></li>
        </ul>
        {children}
    </div>
}