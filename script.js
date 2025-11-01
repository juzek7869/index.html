// Prosty przykład kalendarza wydarzeń
const events = [
  { date: "2025-11-10", name: "" },
  { date: "2025-12-05", name: "" },
  { date: "2026-01-15", name: "" },
];

const list = document.getElementById("eventList");
if (list) {
  events.forEach(ev => {
    const li = document.createElement("li");
    li.textContent = `${ev.date} — ${ev.name}`;
    list.appendChild(li);
  });
}