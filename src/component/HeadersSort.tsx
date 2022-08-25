import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface HeadersSort {
  headers1: string[];
  headers2: string[];
}

export const HeadersSort = ({ headers1, headers2 }: HeadersSort) => {
  const [stateItems, setItems] = useState(headers1);
  const onDragEnd = (result: any) => {
    console.log(result);
  };

  useEffect(() => setItems(headers1), [headers1]);
  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {stateItems.map((header, idx) => {
                return (
                  <Draggable key={header} draggableId={header} index={idx}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {header}
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
