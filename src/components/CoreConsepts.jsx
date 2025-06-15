import CoreConcept from "./CoreConsept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConsepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conseptItem) => (
          <CoreConcept key={conseptItem.title} {...conseptItem} />
        ))}
      </ul>
    </section>
  );
}
