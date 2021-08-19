import { useRouter } from "next/router"

//catch all routes
export default function Params() {
    const { params = [] } = useRouter()  // the params = [] is because due to nextjs's ssr nature useRoute initially returns undefined which may break our code in runtime
    
    //params is an array
    return (
        <div>
            hello from {params[0]}, {params[1]}
        </div>
    )
}

// here if we type say, domain/Route1/docs/first/second, then param will be an array containing params[0] = "first" and params[1] ="second"

// here if we type say, domain/Route1/docs/first/second/third, then param will be an array containing params[0] = "first", params[1] ="second" and params[2] ="third"

// here if we type say, domain/Route1/docs, then 404 page not found will be shown, to avoid this we have to change [...params.js] to [[...params.js]]