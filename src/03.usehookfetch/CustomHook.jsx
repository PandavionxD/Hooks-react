import { UseCounter } from "../01.useState/hooks/useCounter";
import { useFetch } from "./ejercicios/useFetch"
import { IsLoadingComponent } from "./ejercicios/isLoading"
import { IsQuote } from "./ejercicios/isQuote"


export const CustomHook = () => {

    const { value, increment } = UseCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${value}`)

    console.log(data)
    return (
        <>
            <h1> Hook Custom Fetch </h1>
            <hr />
            {
                isLoading
                    ?
                    <IsLoadingComponent />
                    :
                    <IsQuote data={data} />
            }



            <button className="btn btn-primary" onClick={() => increment()} > Next Quote</button>
        </>
    )
}

