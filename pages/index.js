import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react";

export default function Main() {
    const router = useRouter();
    const [state, setState] = useState(0)

    const handleClick = () => {
        if(state) 
            router.push("/Route")  // programatically moves to domain/Route
        else 
            router.replace("/Route")  // programatically moves to domain/Route, but replaces the current url instead of adding the new url to stack
    }

    return (
        <>
            <Link href="/Route1">
                <a>Index route1</a>
            </Link>
            <Link href="/Route1/12">
                <a>Dynamic route1</a>
            </Link>
            <Link href="/Route1/12/nestedprofile/10">
                <a>Nested Dynamic route1</a>
            </Link>
            <Link href="/Route1/docs" replace> {/*here replace means that it will replace the current url with the given url in the link so if we click on the back button we get back to home page directly*/}
                <a>Catch all route (base)</a>
            </Link>
            <Link href="/Route1/docs/first/last/swayam/random">
                <a>Catch all route</a>
            </Link>
            <button onClick={handleClick}>Programatic Navigation</button>
        </>
    )
}

// serves at domain/
