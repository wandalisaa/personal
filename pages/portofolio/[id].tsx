import { useRouter } from "next/router";
import Layout from "../layout.tsx";
import { porto } from "../../data/porto";

export default function portoDetail() {
  const Router = useRouter();
  const { id } = Router.query;
  return (
    <Layout pageTitle="Portofolio">
      Portofolio {id}
    </Layout>
  );
}

