"use client";

import { Button, Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: any) => {
  return (
    <Card
      cover={
        <Image
          alt="Product Image"
          src={`http://localhost:8090/api/files/${product.collectionId}/${product.id}/${product.image}`}
          width={1000}
          height={1000}
          style={{
            minHeight: 400
          }}
        />
      }
    >
      <Row>
        <Col span={24}>
          <Title level={2}>{product.name}</Title>
        </Col>
        <Col span={24}>{product.description}</Col>
        <Col span={24}>
          <Link href={`/product/${product.id}`}>
            <Button type="primary">Buy ${product.price}</Button>
          </Link>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
