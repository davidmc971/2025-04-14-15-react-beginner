const items = [
  { id: 1, text: "Avengers" },
  { id: 2, text: "Pulp Fiction" },
  { id: 3, text: "Star Wars" },
  { id: 4, text: "Indiana Jones" },
  { id: 5, text: "Inception" },
];

function ListItem(props) {
  return <li>{props.text}</li>;
}

function List(props) {
  const listItems = props.items.map((item) => (
    <ListItem key={item.id} text={item.text} />
  ));

  return <ul>{listItems}</ul>;
}

export default function ListExample() {
  return <List items={items} />;
}
