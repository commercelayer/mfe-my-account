function PageMain({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="flex-1 pb-16 lg:pb-0 pt-[114px] lg:pt-0">
    {children}
  </div>
}

export default PageMain
