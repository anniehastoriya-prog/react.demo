import { useState } from "react";
import { episodeList } from "./data";
// the State
//selectedEpisode is the current state value.
// setSelectedEpisode is the function to update the selectedEpisode. it will re-render the component.
export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();
  // components
  /** Details about the selected episode */
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more.</p>
        </section>
      );
    }
    // in react to name a class we use className
    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch now</button>
      </section>
    );
  }

  /**  will display a list of episodes names and allows the user to select an episode. */
  // instead of event listener we have event handlers. it lets you run the code when a user
  //interacts with an element.
  // when clicked, espisode pops up with the details.
  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
