const NAME = "petshop";

export function readState() {
  try {
    const raw = localStorage.getItem(NAME);
    if (raw) return JSON.parse(raw);
  } catch (error) {
    console.error("Reading localStorage failed, falling back to default"); // eslint-disable-line no-console
  }
  return undefined;
}

function writeState(newData) {
  try {
    localStorage.setItem(NAME, JSON.stringify(newData));
  } catch (error) {
    console.error("Storing data to localStorage failed"); // eslint-disable-line no-console
  }
  return newData;
}

// Make a subsection of the state persistant
export default function persistenceMiddleware(selector) {
  let prevState;
  return store => next => action => {
    let result = next(action);
    // retrieve state to persist using selector
    const state = selector(store.getState());
    if (state !== prevState) {
      // if subsection changed
      writeState(state); // store state
      prevState = state;
    }
    return result;
  };
}
