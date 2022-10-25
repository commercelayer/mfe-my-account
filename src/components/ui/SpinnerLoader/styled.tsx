import styled, { css } from "styled-components"

type WrapperProps = {
  color: string
  sizePx: number
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

export const Spinner = styled.div<WrapperProps>`
  width: ${({ sizePx }) => sizePx}px;
  height: ${({ sizePx }) => sizePx}px;
  animation: spinner 0.75s linear infinite;

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .spinner-inner-1 {
    background: linear-gradient(
      to right,
      #fff 0%,
      #fff 40%,
      ${({ color }) => color} 51%
    );
  }

  .spinner-inner-2 {
    background: linear-gradient(to top, rgba(#fff, 0) 0%, #fff 100%);
  }

  .spinner-inner-3 {
    background: #fff;

    ${({ sizePx }) => {
      const offset = sizePx * 0.1
      const computedSize = sizePx - offset * 2
      return css`
        top: ${offset}px;
        left: ${offset}px;
        width: ${computedSize}px;
        height: ${computedSize}px;
      `
    }}
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
