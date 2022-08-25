import { Collapse } from "antd";
import { SheetViewer } from "./SheetViewer";

const { Panel } = Collapse;

export const SheetCompare = () => {
  return (
    <div>
      <Collapse defaultActiveKey={["data1", "data2"]}>
        <Panel key="data1" header="Data 1">
          <label>Paste first data here</label>
          <SheetViewer />
        </Panel>
        <Panel key="data2" header="Data 2">
          <label>Paste second here</label>
          <SheetViewer />
        </Panel>
      </Collapse>
    </div>
  );
};
