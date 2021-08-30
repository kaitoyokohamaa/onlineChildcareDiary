import { NextPage } from "next";

const IndexPage: NextPage = () => null;

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
};

export default IndexPage;
