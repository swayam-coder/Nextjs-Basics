import { useRouter } from "next/router"


export default function Nested() {
    const { query } = useRouter()
    return (
        <div>
            welcome to nested dynamic route {query.profile} and {profile.nested}
        </div>
    )
}

//this will serve at domain/Route1/[profile]/nestedprofile/[nested]