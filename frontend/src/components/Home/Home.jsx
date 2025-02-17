import ProductCard from "./ProductCard"
import { Fragment } from "react"

function Home() {
return (
    <Fragment>
    <div className="h-auto bg-white flex flex-col min-h-screen items-center justify-center p-top-bot">
        <h2 className="uppercase text-center font-bold text-3xl md:text-5xl text-gray-900 roboto" id="Products">Feature Products</h2>
        <hr className="h-20 w-64 text-gray-900 border-t-6 "/>
        <div className=" flex flex-col md:flex-row md:w-350 items-center justify-center gap-10 md:flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
    </Fragment>
)
}

export default Home