import { Collapse } from "antd";
import { useState } from "react";
import { LineToLineComparator } from "./LineToLineComparator";
import { SheetViewer } from "./SheetViewer";

const { Panel } = Collapse;

interface SheetCompareProps {}

export const SheetCompare = ({}: SheetCompareProps) => {
  const [content1, setContent1] = useState<string[][]>([]);
  const [content2, setContent2] = useState<string[][]>([]);
  const [mainColumn1, setMainColumn1] = useState<number>();
  const [mainColumn2, setMainColumn2] = useState<number>();

  return (
    <div>
      <Collapse defaultActiveKey={["data1", "data2"]}>
        <Panel key="data1" header="Data 1">
          <SheetViewer content={content1} setContent={setContent1} />
        </Panel>
        <Panel key="data2" header="Data 2">
          <SheetViewer content={content2} setContent={setContent2} />
        </Panel>
      </Collapse>
      <LineToLineComparator
        content1={content1}
        content2={content2}
        mainColumn1={mainColumn1}
        mainColumn2={mainColumn2}
      />
    </div>
  );
};
