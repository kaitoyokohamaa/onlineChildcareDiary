import { NextPage } from "next";
import { Layout } from "@/components/common/layout";
import { Pages } from "@/components/chat/Pages";
const Chat: NextPage = () => {
  return (
    <Layout>
      <Pages />
    </Layout>
  );
};
export default Chat;
