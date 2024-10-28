import React from "react";
import imgSale from "../../assets/home/sale.png"
import imgShopping from "../../assets/home/shopping.png"
import imgWomen from "../../assets/home/women.png"

const Home = () => {
  return(
  <>
  <div className="
  relative overflow-hidden min-h-[550px] sm:min-h-[650px]
   bg-gray-100 flex justify-center items-center dark:bg-gray-950
   dark:text-white duration-200">
    {/* background pattern */}
    <div className="h-[700px] w-[700px] bg-primary/40
    absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

    </div>
    {/* home section */}
    <div className="container pb-8 sm:pb-0">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div>
            <h1 className="text-5xl sm:text-6xl
            lg:text-7xl font-bold">Lorem ipsum dolor sit amet.</h1>
            <p
            className="text-sm"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda.
            </p>
            <div>
              <button
              className="bg-gradient-to-r from-primary to-secondary
              hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Pedir agora
              </button>
            </div>
          </div>
          {/* text content section */}
          <div>
            <div>
              <img src={imgWomen} alt="" 
              className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
              sm:scale-125 object-contain mx-auto"
              />
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  </>

  )
};

export default Home;