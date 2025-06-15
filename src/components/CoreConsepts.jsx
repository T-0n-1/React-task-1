import Section from "./Section.jsx";
import CoreConcept from "./CoreConsept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConsepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conseptItem) => (
          <CoreConcept key={conseptItem.title} {...conseptItem} />
        ))}
      </ul>
    </Section>
  );
}
