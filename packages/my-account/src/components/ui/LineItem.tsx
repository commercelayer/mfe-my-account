export function LineItemWrapper({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`relative flex flex-row w-full mb-6 not-last-of-type:border-b ${className ?? ''}`}>{children}</div>
}

export function LineItemContent({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex justify-between w-full pl-4 md:pl-8 ${className ?? ''}`}>{children}</div>
}

export function LineItemDescription({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex flex-col justify-between ${className ?? ''}`}>{children}</div>
}

export function LineItemSku({ children, className }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex gap-1 text-xs text-gray-600 font-semibold h-4 ${className ?? ''}`}>{children}</div>
}
export function LineItemQty({ children, className }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={`self-start w-auto text-xs font-semibold ring-inset ring-1 ring-gray-100 bg-gray-100 text-gray-600 py-[4px] px-[10px] rounded ${className ?? ''}`}>
    {children}
  </span>
}
export function LineItemFrequency({ children, className }: React.HTMLAttributes<HTMLSpanElement>) {
  return <LineItemQty className={`mt-2 flex bg-white ring-primary text-primary lg:mt-0 ${className ?? ''}`}>
    {children}
  </LineItemQty>
}
