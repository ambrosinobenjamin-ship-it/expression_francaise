(function () {
  const total = EXPRESSIONS.length;

  function dayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    return Math.floor(diff / 86400000);
  }

  const todayIndex = dayOfYear(new Date()) % total;
  let currentIndex = todayIndex;

  const elDate = document.getElementById("date");
  const elExprText = document.getElementById("expr-text");
  const elExplication = document.getElementById("explication");
  const elExemple = document.getElementById("exemple");
  const elCounter = document.getElementById("counter");
  const elTodayBtn = document.getElementById("today-btn");
  const elPrev = document.getElementById("prev");
  const elNext = document.getElementById("next");
  const elNotebook = document.getElementById("notebook");

  const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function render() {
    const entry = EXPRESSIONS[currentIndex];

    elExprText.textContent = entry.expression;
    elExplication.textContent = entry.explication;
    elExemple.textContent = entry.exemple;
    elCounter.textContent = `Entrée ${currentIndex + 1} / ${total}`;

    if (currentIndex === todayIndex) {
      elDate.textContent = dateFormatter.format(new Date());
      elTodayBtn.classList.add("hidden");
    } else {
      elDate.textContent = "";
      elTodayBtn.classList.remove("hidden");
    }

    // petite ré-apparition douce à chaque changement
    elNotebook.style.opacity = 0;
    requestAnimationFrame(() => {
      elNotebook.style.transition = "opacity 0.25s ease";
      elNotebook.style.opacity = 1;
    });
  }

  elPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + total) % total;
    render();
  });

  elNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % total;
    render();
  });

  elTodayBtn.addEventListener("click", () => {
    currentIndex = todayIndex;
    render();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") elPrev.click();
    if (e.key === "ArrowRight") elNext.click();
  });

  // ---------- Archive ----------

  const toggleBtn = document.getElementById("toggle-archive");
  const archivePanel = document.getElementById("archive");
  const archiveList = document.getElementById("archive-list");
  const archiveSearch = document.getElementById("archive-search");
  const archiveCount = document.getElementById("archive-count");

  archiveCount.textContent = total;

  function buildArchive(filter = "") {
    archiveList.innerHTML = "";
    const needle = filter.trim().toLowerCase();

    EXPRESSIONS.forEach((entry, i) => {
      if (needle && !entry.expression.toLowerCase().includes(needle)) return;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.textContent = entry.expression;
      btn.addEventListener("click", () => {
        currentIndex = i;
        render();
        archivePanel.classList.add("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
      li.appendChild(btn);
      archiveList.appendChild(li);
    });
  }

  toggleBtn.addEventListener("click", () => {
    const willShow = archivePanel.classList.contains("hidden");
    archivePanel.classList.toggle("hidden");
    if (willShow) {
      buildArchive(archiveSearch.value);
      archiveSearch.focus();
    }
  });

  archiveSearch.addEventListener("input", () => buildArchive(archiveSearch.value));

  render();
})();
