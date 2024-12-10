import React from "react";
// import '/home/jeremiah/Desktop/React/code-challenge/week2-code/bot-battlr/src/App.css'
function RobotCard({ bot, handleClick, handleDelete }) {
  return (
    <div className="robot-card" onClick={handleClick}>
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
      {handleDelete && (
        <button
          className="dismiss-btn"
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering the parent onClick
            handleDelete();
          }}
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

export default RobotCard;
