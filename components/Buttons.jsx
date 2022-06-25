import React from "react";

const Buttons = ({ next, prev, Previous, Next }) => {
   const handleNext = () => {
      Next();
   };
   const handlePrev = () => {
      Previous();
   };

   return (
      <>
         <div className="container mx-auto mt-10">
            <div className="flex justify-center">
               {prev ? (
                  <button
                  onClick={handlePrev}
                  className="bg-teal-500 w-[150px] h-[40px] rounded-2xl text-white font-nunito mr-5 border-2 border-teal-500 hover:bg-transparent hover:text-teal-500 transition-all ease-in-out duration-200"
                  >
                  Previous
                  </button>
               ) : null}
               {next ? (
                  <button
                  onClick={handleNext}
                  className="bg-teal-500 w-[150px] h-[40px] rounded-2xl text-white font-nunito ml-5 border-2 border-teal-500 hover:bg-transparent hover:text-teal-500 transition-all ease-in-out duration-200"
                  >
                  Next
                  </button>
               ) : null}
            </div>
         </div>
      </>
   );
};

export default Buttons;
