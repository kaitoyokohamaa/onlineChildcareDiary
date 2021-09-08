import { NextPage } from "next";

import { Layout } from "@/components/common/layout";
import { Pages } from "@/components/diary/Pages";
const Diary: NextPage = () => {
  return (
    <Layout isHeader>
      <Pages />
    </Layout>
  );
};
export default Diary;
