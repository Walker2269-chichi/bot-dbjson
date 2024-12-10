import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import DeployedBots from "./DeployedBots";
import FilterPanel from "./FilterPanel";

import "./App.css"; 

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filters, setFilters] = useState([]); // State to track filters

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Bots:", data); // Check if bots have the correct structure
        setBots(data);
      })
      .catch((err) => console.error("Error fetching bots:", err));
  }, []);

  const enlistBot = (bot) => {
    if (!army.some((enlisted) => enlisted.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((enlisted) => enlisted.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((enlisted) => enlisted.id !== bot.id));
      })
      .catch((err) => console.error("Error deleting bot:", err));
  };

  const handleFilterChange = (botClass) => {
    setFilters((prevFilters) =>
      prevFilters.includes(botClass)
        ? prevFilters.filter((filter) => filter !== botClass)
        : [...prevFilters, botClass]
    );
  };

  // Filter bots based on selected classes
  const filteredBots = filters.length > 0
    ? bots.filter((bot) => filters.includes(bot.class)) // Filter by class
    : bots; // Show all bots if no filter is applied

  // Debugging logs
  useEffect(() => {
    console.log("Filters:", filters); // Log filters
    console.log("Filtered Bots:", filteredBots); // Log filtered bots
  }, [filters, filteredBots]);

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <DeployedBots 
        army={army} 
        releaseBot={releaseBot} 
        dischargeBot={dischargeBot} 
      />
      <FilterPanel 
        filters={filters} 
        onFilterChange={handleFilterChange} 
      />
      <BotCollection 
        bots={filteredBots} 
        enlistBot={enlistBot} 
      />
    </div>
  );
}

export default App;
