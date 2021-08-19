import { useRouter } from "next/router"

export default function Dynamic() {
    const { query } = useRouter(); 

    return (
        <>
        {
            query.id === "Route2" ?
            <div>
            {query.id} Route2 rendered dynamically 
            </div> 
            :
            <div>
            {query.id}
            </div>
        }
        </>
    )
}
//serves at dynamic route domaim/Route1/{id}
/* 
    now here if query.id === "Route2", then you may think the first condition is true so it will render accordingly but it will not, 
    it is because we already have a file name Router2.js in the same directory as the [id].js so nextjs will give that file more preference
*/
