/* Ping & Help  (Trusted Code Hub)
 * Commands:  !ping   !help   !time   !remind <minutes> <text>
 * Runs in a sandbox: it can only read chat messages and ask the chat to send messages. */
const PREFIX = "!";
bot.on("message", (m) => {
  if (m.isBot || !m.text.startsWith(PREFIX)) return;
  const [cmd, ...rest] = m.text.slice(PREFIX.length).trim().split(/\s+/);
  const say = (t) => bot.send(t, m.channel);
  switch (cmd.toLowerCase()) {
    case "ping":
      say("pong! 🏓");
      break;
    case "help":
      say("Commands: !ping, !time, !remind <minutes> <text>, !help");
      break;
    case "time":
      say("It is " + new Date().toLocaleString() + " (server owner's time).");
      break;
    case "remind": {
      const mins = Number(rest[0]);
      const what = rest.slice(1).join(" ");
      if (!(mins > 0 && mins <= 120) || !what) { say("Use it like: !remind 10 stretch your legs (1 to 120 minutes)"); break; }
      say("OK " + m.author + ", I'll remind you in " + mins + " minute(s).");
      setTimeout(() => say("⏰ " + m.author + ": " + what.slice(0, 200)), mins * 60000);
      break;
    }
  }
});