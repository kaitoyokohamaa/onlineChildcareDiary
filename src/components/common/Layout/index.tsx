import { Sidebar } from "./sidebar";
import { VFC } from "react";
type Props = { children: React.ReactChildren };
export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
};
