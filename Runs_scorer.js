import React, { useState } from 'react';

const Index = () => {
  const [runs, setRuns] = useState(0);
  const [wicket, setWicket] = useState(0);
  const [history, setHistory] = useState([]);

  //runCount -> taken the vlues from button function (value) respective button pressed
  const handleAddRun = (runCount) => {
    const newRuns = runs + runCount;
    const newWickets = runCount === 0 ? wicket + 1 : wicket; // Increment wickets if runCount is 0
   

    // Create a new history entry for runs and wickets[key value pair]
    const newEntry = {
      runs: newRuns,
      wickets: newWickets
     };

    setRuns(newRuns);
    setWicket(newWickets);
    setHistory([...history, newEntry]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastEntry = history.pop();
      // console.log(lastEntry);

      setRuns(lastEntry.runs);
      setWicket(lastEntry.wickets);
      setHistory([...history]);
    }
  };

  return (
    <>
      <div className="container">
        {/* ... your other code ... */}
        <div className="box" style={{ width: "450px", height: "250px", backgroundColor: 'white', border: "2px solid black" }}>
          <h1>Score - {runs}/{wicket}</h1>
        </div>
        {/* <h1>{[lastEntry]}data</h1> */}
        <div className="btn-group me-2 my-2 my-2" role="group" aria-label="First group">
          <button type="button" onClick={() => handleAddRun(1)} className="btn btn-outline-secondary" style={{backgroundColor:"yellow"}}>1</button>
          <button type="button" onClick={() => handleAddRun(2)} className="btn btn-outline-secondary">2</button>
          <button type="button" onClick={() => handleAddRun(3)} className="btn btn-outline-secondary">3</button>
          <button type="button" onClick={() => handleAddRun(4)} className="btn btn-outline-secondary">4</button>
          <button type="button" onClick={() => handleAddRun(5)} className="btn btn-outline-secondary">5</button>
          <button type="button" onClick={() => handleAddRun(6)} className="btn btn-outline-secondary">6</button>
        </div>
        <div className="btn-group" role="group" aria-label="First group">
          <button type="button" onClick={() => handleAddRun(0)} className="btn btn-outline-secondary">Wicket</button>
          <button type="button" onClick={handleUndo} className="btn btn-outline-secondary">Undo</button>
        </div>
      </div>
    </>
  );
};

export default Index;