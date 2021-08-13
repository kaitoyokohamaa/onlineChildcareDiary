import { VFC } from "react";
type Props = {
  styles?: string;
  children: React.ReactNode;
};
export const Button: VFC<Props> = ({ styles, children }) => {
  return <button className={styles}>{children}</button>;
};
