import React, { Suspense, lazy } from "react";

const ProductDetails = lazy(() => import("./components/ProductDetails"))
const Reviews = lazy(() => import("./components/Reviews"))
const Suggestions = lazy(() => import("./components/Suggestions"))

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-center text-3xl font-bold mb-6">E-Commerce Product Page</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Product Details */}
        <div className="lg:col-span-2">
          <Suspense fallback={<p className="tex-gray-600">Loading...</p>}>
            <ProductDetails productId= {1} />
          </Suspense>

          {/* Suggestions */}
          <div>
            <Suspense fallback={<p className="tex-gray-600">Loading...</p>}>
              <Suggestions productId= {1} />
            </Suspense>
          </div>

          {/* Review section */}
          <div className="max-w-5xl mx-auto mt-8">
            <Suspense fallback={<p className="text-gray-600">Loading...</p>}>
               <Reviews />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;