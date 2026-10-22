/* Welcome  (Trusted Code Hub)
 * Greets every new member and answers !rules and !welcome.
 * Edit RULES below if you host your own copy. Posts in the channel the bot is limited to
 * (or the first channel if the bot may post anywhere). */
const RULES = [
  "Be kind and respectful.",
  "No spam or advertising.",
  "Keep things in the right channel.",
  "Listen to the moderators."
];
bot.on("join", (member) => {
  bot.send("👋 Welcome to the server, " + member.name + "! Type !rules to see the rules.");
});
bot.on("message", (m) => {
  if (m.isBot) return;
  const t = m.text.trim().toLowerCase();
  if (t === "!rules") bot.send("📜 Rules:\n" + RULES.map((r, i) => (i + 1) + ". " + r).join("\n"), m.channel);
  else if (t === "!welcome") bot.send("Hi " + m.author + "! Glad you're here. Type !rules for the rules.", m.channel);
});