import type { JSX as ReactJSX } from "react"

/**
 * React 19 removed the global `JSX` namespace in favour of `React.JSX`.
 * We re-declare it globally so that plain `JSX.Element` annotations keep
 * working, both in this codebase and in the type definitions shipped by
 * `@commercelayer/react-components`, which still reference bare `JSX.*`.
 */
declare global {
  namespace JSX {
    type ElementType = ReactJSX.ElementType
    interface Element extends ReactJSX.Element {}
    interface ElementClass extends ReactJSX.ElementClass {}
    interface ElementAttributesProperty
      extends ReactJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute
      extends ReactJSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = ReactJSX.LibraryManagedAttributes<
      C,
      P
    >
    interface IntrinsicAttributes extends ReactJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T>
      extends ReactJSX.IntrinsicClassAttributes<T> {}
    type IntrinsicElements = ReactJSX.IntrinsicElements
  }
}
