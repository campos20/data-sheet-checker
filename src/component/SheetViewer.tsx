import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";

export const SheetViewer = () => {
  const [rawData, setRawData] = useState("");
  const [content, setContent] = useState<string[][]>([]);
  const [header, setHeader] = useState<string[]>([]);

  useEffect(() => {
    const newData = rawData.split("\n").map((line) => line.split("\t"));
    setHeader(newData[0]);
    setContent(newData.length > 1 ? newData.slice(1) : []);
  }, [rawData]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <TextArea
            value={rawData}
            onChange={(e) => setRawData(e.target.value)}
          />
        </Col>
        <Col span={12}>
          <div style={{ overflowX: "auto" }}>
            <table style={{}}>
              <thead>
                {header.map((h, i) => (
                  <th key={h + "-" + i}>{h}</th>
                ))}
              </thead>
              <tbody>
                {content.map((line, i) => (
                  <tr key={i + "-" + line}>
                    {line.map((cell, j) => (
                      <td key={j + "-" + cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </div>
  );
};
