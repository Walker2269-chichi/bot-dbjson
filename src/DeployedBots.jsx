import React from "react";
import RobotCard from "./RobotCard";

function DeployedBots({ army, releaseBot, dischargeBot }) {
  return (
    <div className="deployed-bots">
      <h2>Assigned Units</h2>
      <div className="bot-list">
        {army.map((bot) => (
          <RobotCard
            key={bot.id}
            bot={bot}
            handleClick={() => releaseBot(bot)}
            handleDelete={() => dischargeBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default DeployedBots;
