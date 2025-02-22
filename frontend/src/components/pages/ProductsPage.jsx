import Products from "./Products"


function ProductsPage() {
  return (
    <div className="h-auto bg-white flex flex-col min-h-screen items-center justify-center p-top-bot">
        <h2
            className="uppercase text-center font-bold text-3xl md:text-5xl text-gray-900 roboto"
            id="Products"
          >
            All Products
          </h2>
          <hr className="h-20 w-64 text-gray-900 border-t-6 " />
          <Products />
    </div>
  )
}

export default ProductsPage