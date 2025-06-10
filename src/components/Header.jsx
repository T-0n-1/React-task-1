import ReactImg from "../assets/react-core-concepts.png";
import "./Header.css";

const reactExpressions = ["Fundamental", "Crucial", "Core"];

function getRandomExpression(expressions) {
  const randomIndex = Math.floor(Math.random() * expressions.length);
  return expressions[randomIndex];
}

export default function Header() {
  const description = getRandomExpression(reactExpressions);

  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
      <ul></ul>
    </header>
  );
}
