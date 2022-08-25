import { Col, Row } from "antd";
import { SortItems } from "./SortItems";

interface HeadersSort {
  headers1: string[];
  headers2: string[];
  setSortedHeaders1: (newHeaders: string[]) => void;
  setSortedHeaders2: (newHeaders: string[]) => void;
}

export const HeadersSort = ({
  headers1,
  headers2,
  setSortedHeaders1,
  setSortedHeaders2,
}: HeadersSort) => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <SortItems headers={headers1} setSortedHeaders={setSortedHeaders1} />
        </Col>
        <Col span={12}>
          <SortItems headers={headers2} setSortedHeaders={setSortedHeaders2} />
        </Col>
      </Row>
    </div>
  );
};
