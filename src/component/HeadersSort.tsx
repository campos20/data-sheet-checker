import { Col, Row } from "antd";
import { SortItems } from "./SortItems";

interface HeadersSort {
  headers1: string[];
  headers2: string[];
}

export const HeadersSort = ({ headers1, headers2 }: HeadersSort) => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <SortItems headers={headers1} />
        </Col>
        <Col span={12}>
          <SortItems headers={headers2} />
        </Col>
      </Row>
    </div>
  );
};
