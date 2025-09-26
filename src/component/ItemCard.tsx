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
          display: "flex",
          flexDirection: "column",
          marginBottom: "3em",
          background: "white",
          border: "1px solid rgba(0,0,0,0.1)",
          margin: "1em",
          padding: "1em",
          borderRadius: "1em",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <p>{item.item}</p>
        <select
          style={{
            all: "unset",
            padding: "0.5em",
            fontSize: "0.75em",
            background: "#f1f1f1",
            borderRadius: "5px",
            border: "1px solid rgba(0,0,0,0.1)"
          }}
          value={item.status}
          onChange={(e) =>
            setTaskData((prev) =>
              prev.map((prevItem) =>
                prevItem.id === item.id ? { ...prevItem, status: e.target.value } : prevItem,
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
