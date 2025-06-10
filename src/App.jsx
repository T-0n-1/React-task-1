import { useState } from "react";
import componentImg from "./assets/components.png";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConsept.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please Click a Button");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={componentImg}
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
            />
            <CoreConcept
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic && (
            <div>
              <h3>{selectedTopic}</h3>
              <p>
                {`You have selected the topic: ${selectedTopic}. This is where you can add more information about the topic.`}
              </p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
