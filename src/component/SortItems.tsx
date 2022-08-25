import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

interface SortItemsProps {
  headers: string[];
  setSortedHeaders: (newHeaders: string[]) => void;
}

const reorder = (list: string[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const SortItems = ({ headers, setSortedHeaders }: SortItemsProps) => {
  const [stateItems, setStateItems] = useState(headers);
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items = reorder(
      stateItems,
      result.source.index,
      result.destination.index
    );
    setStateItems(items);
  };
  useEffect(() => setStateItems(headers), [headers]);

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
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
