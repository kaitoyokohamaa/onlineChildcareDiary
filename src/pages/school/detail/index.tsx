import { NextPage } from "next";
import { Layout } from "@/components/common/layout";
import { Pages } from "@/components/school/detail/Pages";
const School: NextPage = () => {
  return (
    <Layout>
      <Pages />
    </Layout>
  );
};
export default School;
