import { type Item } from "../App";

interface ItemProps {
  item: Item;
  setTaskData: React.Dispatch<React.SetStateAction<Item[]>>;
}

const ItemCard: React.FC<ItemProps> = ({ item, setTaskData }) => {
  return (
    <>
      <div
        style={{
          marginBottom: "3em",
          background: "white",
          border: "1px solid rgba(0,0,0,0.1)",
          margin: "1em",
          padding: "1em",
          borderRadius: "1em",
        }}
      >
        <p>{item.item}</p>
        <select
          value={item.status}
          onChange={(e) =>
            setTaskData((prev) =>
              prev.map((i) =>
                i.id === item.id ? { ...i, status: e.target.value } : i,
              ),
            )
          }
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
      </div>
    </>
  );
};
export default ItemCard;
