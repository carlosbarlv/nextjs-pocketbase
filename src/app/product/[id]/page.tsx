import { pb } from "@/lib/pocketbase";
import { Button, Card, Col, Image, Rate, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default async function ProductPreviewPage({
  params,
}: {
  readonly params: { id: string };
}) {
  const product = await pb.collection("products").getOne(`${params.id}`, {
    expand: "relField1,relField2.subRelField",
  });
  // eslint-disable-next-line no-console
  console.log(product);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return (
    <Card>
      <Row justify={"space-around"}>
        <Col className="gutter-row" span={11}>
          <Image
            alt="Product image"
            src={`http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.image}`}
            style={{
              borderRadius: 10,
            }}
          />
        </Col>
        <Col className="gutter-row" span={11}>
          <Title>{product.name}</Title>
          <Rate tooltips={desc} value={product.stars} />
          <Paragraph>
            {product.description}
          </Paragraph>
          <Button type="primary">Add to cart ${product.price}</Button>
        </Col>
      </Row>
    </Card>
  );
}
