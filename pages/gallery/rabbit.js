import Layout from "../../components/Layout";
import Image from "next/image";

export default function Rabbit() {
  return (
      <Layout title="rabbit">
        <Image src="/gallery/project1.png"
           alt="rabbit latter paper"
           width={500}
           height={400} />
      </Layout>
  );
}