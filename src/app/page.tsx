import ProductCard from "@/components/ProductCard";
import { pb } from "@/lib/pocketbase";
import { Col, Row } from "antd";
import NavBar from '../components/NavBar';

export const dynamic = 'force-dynamic'

export default async function Home() {
  const productList = await pb.collection("products").getList();

  // eslint-disable-next-line no-console
  // console.log(productList);
  

  return (
    <main>
      <Row justify={'start'}>
        {productList.items.map((product) => (
          <Col style={{ padding: 10 }} span={8} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </main>
  );
}
