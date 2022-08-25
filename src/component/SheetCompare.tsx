import { Collapse } from "antd";
import { SheetViewer } from "./SheetViewer";

const { Panel } = Collapse;

interface SheetCompareProps {
  content1: string[][];
  content2: string[][];
  setContent1: (content: string[][]) => void;
  setContent2: (content: string[][]) => void;
}

export const SheetCompare = ({
  content1,
  content2,
  setContent1,
  setContent2,
}: SheetCompareProps) => {
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
    </div>
  );
};
