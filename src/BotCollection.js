import React from "react";
import RobotCard from "./RobotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Selectable Bots</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <RobotCard key={bot.id} bot={bot} handleClick={() => enlistBot(bot)} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
