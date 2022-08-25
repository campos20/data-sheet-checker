import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import classes from "./SheetViewer.module.css";

export const SheetViewer = () => {
  const [rawData, setRawData] = useState("");
  const [content, setContent] = useState<string[][]>([]);
  const [header, setHeader] = useState<string[]>([]);
  const [mainColumn, setMainColumn] = useState("");

  useEffect(() => {
    const newData = rawData
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .map((line) => line.split("\t"));
    const newHeader = newData[0];
    setContent(newData.length > 1 ? newData.slice(1) : []);
    if (newHeader) {
      setHeader(newHeader);
      if (
        newHeader.length > 0 &&
        (mainColumn === "" || !newHeader.includes(mainColumn))
      ) {
        setMainColumn(newHeader[0]);
      }
    }
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
          {header.length > 0 && (
            <div>
              Main column:{" "}
              <Select
                options={header.map((label, j) => ({ label, value: j }))}
                onChange={(j) => setMainColumn(header[j])}
              />
            </div>
          )}
          <div style={{ overflowX: "auto" }}>
            {content.length > 0 && (
              <table className={classes.dataTable}>
                <thead>
                  <tr>
                    {header.map((h, i) => (
                      <th key={h + "-" + i}>{h}</th>
                    ))}
                  </tr>
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
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};
