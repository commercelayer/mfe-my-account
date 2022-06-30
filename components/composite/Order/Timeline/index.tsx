/*
   NOTES/TODO: 
    - This component could have two different behaviours driven by the type of line items it is rapresenting the status of.
    - Line items can be related to physical products (that need shipping) and digital ones (that don't).
    - It could be possibile that we have manage in a slightly different way the final status naming depending of physical/digital.
  */

const OrderTimeline: React.FC = () => {
  return (
    <div className="flex items-center pt-8 pb-24 -mx-5 md:mx-0">
      {/* Step 1 - Complete and First Complete */}
      <div className="flex items-center text-black relative">
        <div className="rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 bg-black border-black flex items-center justify-center"></div>
        <div className="absolute top-0 mt-6 text-xs font-medium ">
          <span className="block text-xs font-bold text-gray-500">Placed</span>
          <span className="block text-sm font-bold text-black w-16">XX/XX/XXXX</span>
        </div>
      </div>
      {/* Step 2 - Complete and Last Complete */}
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-black"></div>
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 border-black flex items-center justify-center">
          <span className="block w-2 h-2 rounded-full bg-black"></span>
        </div>
        <div className="absolute top-0 -ml-6 text-center mt-6 text-xs font-medium  text-black">
          <span className="block text-xs font-bold text-gray-500">In progress</span>
          <span className="block text-sm font-bold text-black w-16">XX/XX/XXXX</span>
        </div>
      </div>
      {/* Step 3 - Incomplete */}
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 border-dashed"></div>
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 border-gray-300 flex items-center justify-center">
          <span className="hidden w-2 h-2 rounded-full bg-black"></span>
        </div>
        <div className="absolute top-0 -ml-6 text-center mt-6 text-xs font-medium  ">
          <span className="block text-xs font-bold text-gray-500">Shipped</span>
          <span className="block text-sm font-bold text-black w-16">-</span>
        </div>
      </div>
    </div>
  )
}

export default OrderTimeline