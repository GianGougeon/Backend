import Item from "./Item";

const List = ({ frutas }) => {
  return (
    <ul className="list">
      {frutas.map((fruta, i) => {
        return <Item fruta={fruta} key={i} />;
      })}
    </ul>
  );
};

export default List;
