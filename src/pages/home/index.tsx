import { NextPage } from "next";
import { Layout } from "@/components/common/layout";
import { Pages } from "@/components/home/Pages";
const Home: NextPage = () => {
  return (
    <Layout isHeader>
      <Pages />
    </Layout>
  );
};
export default Home;
