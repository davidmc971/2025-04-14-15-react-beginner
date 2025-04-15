import "./App.css";

const items = [
  { id: 1, text: "Avengers" },
  { id: 2, text: "Pulp Fiction" },
  { id: 3, text: "Star Wars" },
  { id: 4, text: "Indiana Jones" },
  { id: 5, text: "Inception" },
];

type ListItemProps = {
  text: string;
};

function ListItem({ text }: ListItemProps) {
  return <li>{text}</li>;
}

function App() {
  return (
    <ul>
      {items.map((item) => (
        <ListItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default App;
