import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useEffect, useState } from "react";
import classes from "../index.module.css";

interface SheetViewerProps {
  content: string[][];
  setContent: (content: string[][]) => void;
  mainColumn?: number;
  setMainColumn: (mainColumn: number) => void;
  headers: string[];
  setHeaders: (h: string[]) => void;
}

export const SheetViewer = ({
  content,
  setContent,
  mainColumn,
  setMainColumn,
  headers,
  setHeaders,
}: SheetViewerProps) => {
  const [rawData, setRawData] = useState("");

  useEffect(() => {
    const newData = rawData
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .map((line) => line.split("\t"));
    const newHeader = newData[0];
    setContent(newData.length > 1 ? newData.slice(1) : []);
    if (newHeader) {
      setHeaders(newHeader);
    }
  }, [rawData]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <label>Paste sheet data here</label>
          <TextArea
            value={rawData}
            onChange={(e) => setRawData(e.target.value)}
          />
        </Col>
        <Col span={12}>
          {headers.length > 0 && (
            <div>
              Main column:{" "}
              <Select
                options={headers.map((label, j) => ({ label, value: j }))}
                onChange={(j) => setMainColumn(j)}
                className={classes.halfSpace}
                value={mainColumn}
              />
            </div>
          )}
          <div style={{ overflowX: "auto" }}>
            {content.length > 0 && (
              <table className={classes.dataTable}>
                <thead>
                  <tr>
                    {headers.map((h, i) => (
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
