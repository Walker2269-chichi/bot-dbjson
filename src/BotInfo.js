import React from "react";

function BotInfo({ bot, onBack, enlistBot }) {
  return (
    <div className="bot-info">
      <button onClick={onBack}>Back to Collection</button>
      <div className="bot-details">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>
          <strong>Class:</strong> {bot.bot_class}
        </p>
        <p>
          <strong>Health:</strong> {bot.health}
        </p>
        <p>
          <strong>Damage:</strong> {bot.damage}
        </p>
        <p>
          <strong>Armor:</strong> {bot.armor}
        </p>
        <p>
          <strong>keyMessage</strong> {bot.catchphrase}
        </p>
        <RecruitButton onClick={() => enlistBot(bot)} />
      </div>
    </div>
  );
}

export default BotInfo;
