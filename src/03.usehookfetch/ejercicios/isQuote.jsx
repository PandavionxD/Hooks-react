
export const IsQuote = ({data}) => {
    return (
        <>
            <blockquote className=" blockquote text-start alert alert-info ">
                <p className="mb-1" > {data[0].quote} </p>
                <footer className="blockquote-footer mt-1">
                    {data[0].author}
                </footer>
            </blockquote>
        </>
    )
}