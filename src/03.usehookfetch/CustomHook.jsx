import { useFetch } from "./ejercicios/useFetch"

export const CustomHook = () => {

    const { data, hasError, isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes')

    console.log({ data, hasError, isLoading })

    return (
        <>
            <h1> Hook Custom Fetch </h1>
            <hr />
        </>
    )
}

