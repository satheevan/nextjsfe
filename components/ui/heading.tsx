import { title } from "../primitives";

export const Heading = ({...props}) => (
  <h2 className={title({ size: "xs", class: `mt-2 ${props?.className}` })}>
    {props?.children}
  </h2>
);