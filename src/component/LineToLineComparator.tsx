import classes from "../index.module.css";

interface LineToLineComparatorProps {
  content1: string[][];
  content2: string[][];
  mainColumn1?: number;
  mainColumn2?: number;
  sortedHeadersIndex1: number[];
  sortedHeadersIndex2: number[];
}

export const LineToLineComparator = ({
  content1,
  content2,
  mainColumn1,
  mainColumn2,
  sortedHeadersIndex1,
  sortedHeadersIndex2,
}: LineToLineComparatorProps) => {
  if (mainColumn1 == null || mainColumn2 == null) {
    return null;
  }

  return (
    <div>
      {content1.map((line, i) => {
        const compareLine = content2.find(
          (l) => l[mainColumn2] === line[mainColumn1]
        );
        const toDisplay1 = sortedHeadersIndex1.map((idx) => line[idx]);
        const toDisplay2 = sortedHeadersIndex2.map((idx) =>
          compareLine && compareLine.length > 0 ? compareLine[idx] : "-"
        );
        const highlight = toDisplay1.map(
          (cell, idx) => toDisplay2.length <= idx || cell !== toDisplay2[idx]
        );
        return (
          <div key={line + "-" + i} className={classes.compareItem}>
            {
              <table className={classes.dataTable}>
                <tbody>
                  <tr>
                    {toDisplay1.map((cell, j) => (
                      <td
                        key={cell + "-" + j}
                        className={
                          highlight[j] ? classes.incorrect : classes.correct
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {toDisplay2.map((cell, j) => (
                      <td
                        key={cell + "-" + j}
                        className={
                          highlight[j] ? classes.incorrect : classes.correct
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            }
          </div>
        );
      })}
    </div>
  );
};
