function addLog(text) {
  state.logs.push({
    text,
    time: new Date().toLocaleTimeString()
  });

  renderLogs();
}

function updateCaseStatus(id, status) {
  const c = state.cases.find(x => x.id === id);
  if (!c) return;

  c.status = status;
  addLog(`Case #${id} set to ${status}`);
  renderCases();
}

function sendCaseMessage(id, from, msg) {
  const c = state.cases.find(x => x.id === id);
  if (!c) return;

  c.messages.push({ from, msg });
  renderCaseView(id);
}

function sendStaffMessage(msg) {
  state.staffChat.push({
    from: state.user.name,
    msg
  });

  renderStaffChat();
}
