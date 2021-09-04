import { VFC } from "react";
import { List, ListItem, ListItemProps } from "@chakra-ui/react";
export const SidebarLink: VFC<ListItemProps> = (props) => {
  return (
    <List spacing={3}>
      <ListItem {...props}></ListItem>
    </List>
  );
};
