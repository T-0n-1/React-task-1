export default function TabButton({ children }) {
  function handleClick() {
    console.log(`${children} Button clicked`);
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
