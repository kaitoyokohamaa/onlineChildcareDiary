import { NextPage } from "next";
import { Layout } from "@/components/common/layout";
import { Pages } from "@/components/register/Pages";
const School: NextPage = () => {
  return (
    <Layout isHeader>
      <Pages />
    </Layout>
  );
};
export default School;
