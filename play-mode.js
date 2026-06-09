(() => {
  const HISTORY_KEY = "se-activity-history-v1";
  const history = safeParse(localStorage.getItem(HISTORY_KEY), []);
  let activeIdea = null;
  let timerSeconds = 0;
  let timerStartSeconds = 0;
  let timerInterval = null;

  const elements = {
    backdrop: document.querySelector("#play-backdrop"),
    sheet: document.querySelector("#play-sheet"),
    title: document.querySelector("#play-title"),
    summary: document.querySelector("#play-summary"),
    script: document.querySelector("#play-script"),
    steps: document.querySelector("#play-steps"),
    caution: document.querySelector("#play-caution"),
    timer: document.querySelector("#play-timer"),
    timerStatus: document.querySelector("#play-timer-status"),
    timerStart: document.querySelector("#play-timer-start"),
    timerReset: document.querySelector("#play-timer-reset"),
    progress: document.querySelector("#play-progress"),
    close: document.querySelector("#close-play-button"),
    historyList: document.querySelector("#history-list"),
    historyEmpty: document.querySelector("#history-empty"),
    historyClear: document.querySelector("#history-clear-button"),
    triedCount: document.querySelector("#tried-count"),
    workedCount: document.querySelector("#worked-count"),
    favouriteCount: document.querySelector("#favourite-count")
  };

  function safeParse(value, fallback) {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : fallback;
    } catch {
      return fallback;
    }
  }

  function esc(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll("\"", "&quot;")
      .replaceAll("'", "&#039;");
  }

  function materialIdeaAsActivity(idea) {
    return {
      ...idea,
      minutes: Math.max(5, idea.setupMinutes + 8),
      where: idea.place === "outdoor" ? "Outside" : idea.place === "both" ? "Inside or outside" : "Inside",
      summary: `A use-what-we-have activity using ${idea.materials.slice(0, 3).map((id) => id.replaceAll("-", " ")).join(", ")}.`,
      say: idea.script,
      caution: idea.safety,
      why: idea.skills.join(", ")
    };
  }

  function allActivities() {
    return [...ideas, ...(window.MATERIAL_IDEAS || []).map(materialIdeaAsActivity)];
  }

  function findActivity(id) {
    return allActivities().find((idea) => idea.id === id);
  }

  function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    elements.timerStart.textContent = timerSeconds === 0 ? "Start again" : "Start";
  }

  function setTimer(minutes) {
    stopTimer();
    timerSeconds = Math.max(1, Math.round(minutes * 60));
    timerStartSeconds = timerSeconds;
    elements.timerStart.textContent = "Start";
    elements.timerStatus.textContent = "Ready when you are";
    elements.timer.classList.remove("finished");
    renderTimer();
  }

  function renderTimer() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    elements.timer.textContent = `${minutes}:${String(seconds).padStart(2, "0")}`;
  }

  function toggleTimer() {
    if (timerInterval) {
      stopTimer();
      elements.timerStatus.textContent = "Paused";
      return;
    }
    if (timerSeconds === 0) timerSeconds = timerStartSeconds;
    elements.timerStart.textContent = "Pause";
    elements.timerStatus.textContent = "Activity timer running";
    elements.timer.classList.remove("finished");
    timerInterval = setInterval(() => {
      timerSeconds -= 1;
      renderTimer();
      if (timerSeconds <= 60 && timerSeconds > 0) elements.timerStatus.textContent = "One minute left: choose a gentle finish";
      if (timerSeconds <= 0) {
        timerSeconds = 0;
        stopTimer();
        elements.timer.classList.add("finished");
        elements.timerStatus.textContent = "Time to finish gently";
        if (navigator.vibrate) navigator.vibrate([120, 80, 120]);
      }
    }, 1000);
  }

  function updateProgress() {
    const checks = [...elements.steps.querySelectorAll("input")];
    const done = checks.filter((check) => check.checked).length;
    elements.progress.textContent = `${done} of ${checks.length} steps checked`;
  }

  function openPlay(id) {
    const idea = findActivity(id);
    if (!idea) return;
    const planSheet = document.querySelector("#plan-sheet");
    if (planSheet && !planSheet.hidden && typeof closePlan === "function") closePlan();
    activeIdea = idea;
    elements.title.textContent = idea.title;
    elements.summary.textContent = `${idea.summary} ${idea.where ? `Best fit: ${idea.where}.` : ""}`;
    elements.script.textContent = idea.say || idea.script || "";
    elements.steps.innerHTML = idea.steps.map((step, index) => `
      <label class="play-step">
        <input type="checkbox" value="${index}">
        <span><strong>${index + 1}</strong>${esc(step)}</span>
      </label>
    `).join("");
    elements.caution.innerHTML = idea.caution
      ? `<strong>Keep in mind:</strong> ${esc(idea.caution)}`
      : "<strong>Keep in mind:</strong> Follow their lead and finish while it is still working.";
    updateProgress();
    setTimer(idea.minutes || 10);
    elements.sheet.hidden = false;
    elements.backdrop.hidden = false;
    document.body.style.overflow = "hidden";
    elements.close.focus();
  }

  function closePlay() {
    stopTimer();
    elements.sheet.hidden = true;
    elements.backdrop.hidden = true;
    document.body.style.overflow = "";
  }

  function outcomeLabel(outcome) {
    return {
      loved: "Loved it",
      worked: "Worked well",
      "not-today": "Not today"
    }[outcome] || outcome;
  }

  function recordOutcome(outcome) {
    if (!activeIdea) return;
    history.unshift({
      id: activeIdea.id,
      title: activeIdea.title,
      category: activeIdea.category,
      outcome,
      completedAt: new Date().toISOString()
    });
    history.splice(100);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    renderHistory();
    closePlay();
    const toast = document.querySelector("#toast");
    toast.textContent = outcome === "not-today" ? "Saved as not for today" : "Saved to what worked lately";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1800);
  }

  function latestByIdea() {
    const seen = new Set();
    return history.filter((entry) => {
      if (seen.has(entry.id)) return false;
      seen.add(entry.id);
      return true;
    });
  }

  function renderHistory() {
    const positive = history.filter((entry) => entry.outcome === "loved" || entry.outcome === "worked");
    const lovedIds = new Set(history.filter((entry) => entry.outcome === "loved").map((entry) => entry.id));
    elements.triedCount.textContent = history.length;
    elements.workedCount.textContent = positive.length;
    elements.favouriteCount.textContent = lovedIds.size;

    const recent = latestByIdea().slice(0, 8);
    elements.historyEmpty.hidden = recent.length > 0;
    elements.historyClear.hidden = history.length === 0;
    elements.historyList.innerHTML = recent.map((entry) => {
      const date = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" }).format(new Date(entry.completedAt));
      return `
        <article class="history-card">
          <div>
            <span class="history-outcome outcome-${esc(entry.outcome)}">${esc(outcomeLabel(entry.outcome))}</span>
            <small>${esc(entry.category)} | ${esc(date)}</small>
          </div>
          <h3>${esc(entry.title)}</h3>
          <button class="secondary-button compact-button" type="button" data-start-idea="${esc(entry.id)}">Try again</button>
        </article>
      `;
    }).join("");
  }

  document.addEventListener("click", (event) => {
    const start = event.target.closest("[data-start-idea]");
    if (start) {
      openPlay(start.dataset.startIdea);
      return;
    }
    const outcome = event.target.closest("[data-play-outcome]");
    if (outcome) recordOutcome(outcome.dataset.playOutcome);
  });

  elements.steps.addEventListener("change", updateProgress);
  elements.timerStart.addEventListener("click", toggleTimer);
  elements.timerReset.addEventListener("click", () => setTimer((activeIdea && activeIdea.minutes) || 10));
  document.querySelector("#play-add-minute").addEventListener("click", () => {
    timerSeconds += 60;
    timerStartSeconds += 60;
    renderTimer();
  });
  document.querySelector("#play-timer-presets").addEventListener("click", (event) => {
    const button = event.target.closest("[data-timer-minutes]");
    if (button) setTimer(Number(button.dataset.timerMinutes));
  });
  elements.close.addEventListener("click", closePlay);
  elements.backdrop.addEventListener("click", closePlay);
  elements.historyClear.addEventListener("click", () => {
    if (!confirm("Clear the local activity history on this device?")) return;
    history.splice(0);
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.sheet.hidden) closePlay();
  });

  renderHistory();
})();
