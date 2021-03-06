import Layout from "../../components/Layout";
import Image from "next/image";

export default function Rabbit() {
  return (
      <Layout title="rabbit">
        <Image src="/../public/gallery/project1.png"
           alt="Picture of the author"
           width={500}
           height={400} />
      </Layout>
  );
}