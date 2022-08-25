import { Collapse, Divider } from "antd";
import { useEffect, useState } from "react";
import { HeadersSort } from "./HeadersSort";
import { LineToLineComparator } from "./LineToLineComparator";
import { SheetViewer } from "./SheetViewer";

const { Panel } = Collapse;

interface SheetCompareProps {}

export const SheetCompare = ({}: SheetCompareProps) => {
  const [content1, setContent1] = useState<string[][]>([]);
  const [content2, setContent2] = useState<string[][]>([]);
  const [mainColumn1, setMainColumn1] = useState<number>();
  const [mainColumn2, setMainColumn2] = useState<number>();
  const [headers1, setHeaders1] = useState<string[]>([]);
  const [headers2, setHeaders2] = useState<string[]>([]);
  const [sortedHeaders1, setSortedHeaders1] = useState<string[]>([]);
  const [sortedHeaders2, setSortedHeaders2] = useState<string[]>([]);
  const [sortedHeadersIndex1, setSortedHeadersIndex1] = useState<number[]>([]);
  const [sortedHeadersIndex2, setSortedHeadersIndex2] = useState<number[]>([]);

  useEffect(() => {
    if (!sortedHeaders1) {
      return;
    }
    setSortedHeadersIndex1(sortedHeaders1.map((h) => headers1.indexOf(h)));
  }, [headers1, sortedHeaders1]);

  useEffect(() => {
    if (!sortedHeaders2) {
      return;
    }
    setSortedHeadersIndex2(sortedHeaders2.map((h) => headers2.indexOf(h)));
  }, [headers2, sortedHeaders2]);

  return (
    <div>
      <Collapse defaultActiveKey={["data1", "data2", "data3"]}>
        <Panel key="data1" header="Data 1">
          <SheetViewer
            content={content1}
            setContent={setContent1}
            setMainColumn={setMainColumn1}
            headers={headers1}
            setHeaders={setHeaders1}
          />
        </Panel>
        <Panel key="data2" header="Data 2">
          <SheetViewer
            content={content2}
            setContent={setContent2}
            setMainColumn={setMainColumn2}
            headers={headers2}
            setHeaders={setHeaders2}
          />
        </Panel>
        <Panel key="data3" header="Sort headers">
          <HeadersSort
            headers1={headers1}
            headers2={headers2}
            setSortedHeaders1={setSortedHeaders1}
            setSortedHeaders2={setSortedHeaders2}
          />
        </Panel>
      </Collapse>
      <Divider />
      <LineToLineComparator
        content1={content1}
        content2={content2}
        mainColumn1={mainColumn1}
        mainColumn2={mainColumn2}
        sortedHeadersIndex1={sortedHeadersIndex1}
        sortedHeadersIndex2={sortedHeadersIndex2}
      />
    </div>
  );
};
