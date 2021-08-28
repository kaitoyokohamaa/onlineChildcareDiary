import { VFC } from "react";
import { Avator } from "components/common/avator";
import { Input } from "@chakra-ui/react";
export const Header = () => {
  return (
    <div>
      <Input placeholder={"検索"} />
      <Avator />
    </div>
  );
};
