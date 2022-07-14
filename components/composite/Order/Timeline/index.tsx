/*
   NOTES/TODO: 
    - This component could have two different behaviours driven by the type of line items it is rapresenting the status of.
    - Line items can be related to physical products (that need shipping) and digital ones (that don't).
    - It could be possibile that we have manage in a slightly different way the final status naming depending of physical/digital.
  */

const OrderTimeline: React.FC = () => {

  const steps = [{ // First step. Completed.
    title: 'Placed',
    date: 'XX/XX/XXXX',
    stepContainerClasses: 'flex-auto',
    stepTextClasses: '',
    stepDotContainerClasses: 'bg-black border-black',
    stepDotClasses: '',
    stepLineClasses: 'border-black'
  },
  { // Second step. Completed. Last completed.
    title: 'In progress',
    date: 'XX/XX/XXXX',
    stepContainerClasses: 'flex-auto',
    stepTextClasses: '-ml-8 text-center',
    stepDotContainerClasses: 'border-black',
    stepDotClasses: '',
    stepLineClasses: 'border-gray-300 border-dashed'
  },
  { // Third step. Uncompleted.
    title: 'Shipped',
    date: '-',
    stepContainerClasses: '',
    stepTextClasses: 'right-0 text-right',
    stepDotContainerClasses: 'border-gray-300',
    stepDotClasses: 'hidden',
    stepLineClasses: 'hidden'
  }]

  return (
    <div className="flex items-center pt-8 pb-12 -mx-5 md:mx-0">
      {steps.map((step, index) => {
        return (
          <div className={`flex items-center ${step.stepContainerClasses}`} key={index}>
            <div className="flex items-center text-black relative">
              <div className={`flex items-center justify-center rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 ${step.stepDotContainerClasses}`}>
                <span className={` w-2 h-2 rounded-full bg-black ${step.stepDotClasses} `}></span>
              </div>
              <div className={ `absolute top-0 mt-6 text-xs font-medium ${step.stepTextClasses} `}>
                <span className="block text-xs font-bold text-gray-500">{step.title}</span>
                <span className="block text-sm font-bold text-black w-20">{step.date}</span>
              </div>
            </div>
            <div className={ `flex-auto border-t-2 transition duration-500 ease-in-out ${step.stepLineClasses}` }></div>            
          </div>
        )
      })}
    </div>
  )

  /*
    <div className="flex items-center pt-8 pb-24 -mx-5 md:mx-0">
      <div className="flex items-center text-black relative">
        <div className="rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 bg-black border-black flex items-center justify-center"></div>
        <div className="absolute top-0 mt-6 text-xs font-medium "> 
          <span className="block text-xs font-bold text-gray-500">Placed</span>
          <span className="block text-sm font-bold text-black w-20">XX/XX/XXXX</span>
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-black"></div> 
      <div className="flex items-center text-white relative">
        <div className="rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 border-black flex items-center justify-center">
          <span className="block w-2 h-2 rounded-full bg-black"></span>
        </div>
        <div className="absolute top-0 mt-6 text-xs font-medium  -ml-8 text-center"> 
          <span className="block text-xs font-bold text-gray-500">In progress</span>
          <span className="block text-sm font-bold text-black w-20">XX/XX/XXXX</span>
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300 border-dashed"></div> 
      <div className="flex items-center text-gray-500 relative">
        <div className="rounded-full transition duration-500 ease-in-out w-4 h-4 border-2 border-gray-300 flex items-center justify-center">
          <span className="hidden w-2 h-2 rounded-full bg-black"></span>
        </div>
        <div className="absolute top-0 mt-6 text-xs font-medium right-0 text-right"> 
          <span className="block text-xs font-bold text-gray-500">Shipped</span>
          <span className="block text-sm font-bold text-black w-20">-</span>
        </div>
      </div>
      <div className="flex-auto border-t-2 transition duration-500 ease-in-out hidden"></div> 
    </div>
  */
}

export default OrderTimeline