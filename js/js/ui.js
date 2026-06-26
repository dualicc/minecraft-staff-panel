let activeCaseId = null;

function renderCases() {
  const container = document.getElementById("caseList");
  if (!container) return;

  container.innerHTML = "";

  state.cases.forEach(c => {
    const div = document.createElement("div");
    div.className = "case";
    div.innerHTML = `
      <b>${c.target}</b> — ${c.type}
      <span>${c.status}</span>
    `;

    div.onclick = () => openCase(c.id);
    container.appendChild(div);
  });
}

function openCase(id) {
  activeCaseId = id;
  renderCaseView(id);
}

function renderCaseView(id) {
  const c = state.cases.find(x => x.id === id);
  if (!c) return;

  const panel = document.getElementById("casePanel");

  panel.innerHTML = `
    <h3>${c.target}</h3>
    <p>${c.reason}</p>
    <p><small>${c.evidence}</small></p>

    <button onclick="updateCaseStatus(${c.id}, 'ACCEPTED')">Accept</button>
    <button onclick="updateCaseStatus(${c.id}, 'DENIED')">Deny</button>
    <button onclick="updateCaseStatus(${c.id}, 'ESCALATED')">Escalate</button>

    <hr>

    <h4>Case Chat</h4>
    <div id="caseMessages"></div>

    <input id="caseInput" placeholder="Message...">
    <button onclick="sendCaseMessage(${c.id}, 'Staff', document.getElementById('caseInput').value)">Send</button>
  `;

  const msgBox = panel.querySelector("#caseMessages");

  c.messages.forEach(m => {
    msgBox.innerHTML += `<div><b>${m.from}:</b> ${m.msg}</div>`;
  });
}

function renderStaffChat() {
  const el = document.getElementById("staffChatBox");
  if (!el) return;

  el.innerHTML = "";

  state.staffChat.forEach(m => {
    el.innerHTML += `<div><b>${m.from}:</b> ${m.msg}</div>`;
  });
}

function renderLogs() {
  const el = document.getElementById("logBox");
  if (!el) return;

  el.innerHTML = "";

  state.logs.forEach(l => {
    el.innerHTML += `<div>[${l.time}] ${l.text}</div>`;
  });
}
