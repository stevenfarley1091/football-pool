const STORAGE_KEY = "pool:data";
const SESSION_KEY = "pool:session";
const ADMIN_KEY = "pool:admin";
const memoryStorage = {};

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return memoryStorage[key] || null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    memoryStorage[key] = value;
  }
}

function safeRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    delete memoryStorage[key];
  }
}

const DEFAULT_DATA = {
  league: {
    name: "Sunday Champs",
    password: "letmein",
    adminPin: "admin123",
    currentWeek: 2,
    season: "2026",
    weekLabel: "Week 2",
  },
  players: [
    "CF&SF",
    "Mark F.",
    "Susan",
    "Cowan",
    "Ray",
    "Vicki",
    "Craig",
    "Kevin",
    "Mark C.",
    "Lisa",
    "Heidi",
  ],
  weeks: {
    "1": {
      games: [
        {
          id: "2026-1-BUF@KC",
          away: "BUF",
          home: "KC",
          kickoff: "2026-09-10T20:20:00-04:00",
          status: "final",
          score: { away: 17, home: 21 },
          possession: "",
          quarter: "",
          clock: "",
          ballSpot: "",
        },
        {
          id: "2026-1-DAL@NYG",
          away: "DAL",
          home: "NYG",
          kickoff: "2026-09-11T13:00:00-04:00",
          status: "final",
          score: { away: 27, home: 14 },
          possession: "",
          quarter: "",
          clock: "",
          ballSpot: "",
        },
        {
          id: "2026-1-LAR@SF",
          away: "LAR",
          home: "SF",
          kickoff: "2026-09-14T20:15:00-04:00",
          status: "final",
          score: { away: 17, home: 24 },
          possession: "",
          quarter: "",
          clock: "",
          ballSpot: "",
        },
      ],
      picks: {
        "CF&SF": {
          "2026-1-BUF@KC": "KC",
          "2026-1-DAL@NYG": "DAL",
          "2026-1-LAR@SF": "SF",
        },
        "Mark F.": {
          "2026-1-BUF@KC": "BUF",
          "2026-1-DAL@NYG": "NYG",
          "2026-1-LAR@SF": "SF",
        },
        Susan: {
          "2026-1-BUF@KC": "KC",
          "2026-1-DAL@NYG": "NYG",
          "2026-1-LAR@SF": "LAR",
        },
        Cowan: {
          "2026-1-BUF@KC": "BUF",
          "2026-1-DAL@NYG": "DAL",
          "2026-1-LAR@SF": "SF",
        },
        Ray: {
          "2026-1-BUF@KC": "KC",
          "2026-1-DAL@NYG": "DAL",
          "2026-1-LAR@SF": "LAR",
        },
        Vicki: {
          "2026-1-BUF@KC": "BUF",
          "2026-1-DAL@NYG": "NYG",
          "2026-1-LAR@SF": "SF",
        },
        Craig: {
          "2026-1-BUF@KC": "KC",
          "2026-1-DAL@NYG": "DAL",
          "2026-1-LAR@SF": "SF",
        },
        Kevin: {
          "2026-1-BUF@KC": "BUF",
          "2026-1-DAL@NYG": "DAL",
          "2026-1-LAR@SF": "LAR",
        },
        "Mark C.": {
          "2026-1-BUF@KC": "KC",
          "2026-1-DAL@NYG": "NYG",
          "2026-1-LAR@SF": "SF",
        },
        Lisa: {
          "2026-1-BUF@KC": "BUF",
          "2026-1-DAL@NYG": "DAL",
          "2026-1-LAR@SF": "SF",
        },
        Heidi: {
          "2026-1-BUF@KC": "KC",
          "2026-1-DAL@NYG": "NYG",
          "2026-1-LAR@SF": "LAR",
        },
      },
    },
    "2": {
      games: [
        { id: "2026-2-MIA@NE", away: "MIA", home: "NE", kickoff: "2026-09-17T20:15:00-04:00", status: "in-progress", score: { away: 14, home: 17 }, possession: "NE", quarter: "Q3", clock: "08:22", ballSpot: "NE 42" },
        { id: "2026-2-GB@CHI", away: "GB", home: "CHI", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-BAL@CLE", away: "BAL", home: "CLE", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-DAL@PHI", away: "DAL", home: "PHI", kickoff: "2026-09-18T16:25:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-LAR@SEA", away: "LAR", home: "SEA", kickoff: "2026-09-18T20:20:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-NYG@WAS", away: "NYG", home: "WAS", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-TB@CAR", away: "TB", home: "CAR", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-IND@JAX", away: "IND", home: "JAX", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-HOU@TEN", away: "HOU", home: "TEN", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-ARI@LV", away: "ARI", home: "LV", kickoff: "2026-09-18T16:05:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-SF@LA", away: "SF", home: "LA", kickoff: "2026-09-18T16:25:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-NO@ATL", away: "NO", home: "ATL", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-KC@DEN", away: "KC", home: "DEN", kickoff: "2026-09-18T16:25:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-CIN@PIT", away: "CIN", home: "PIT", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-DET@MIN", away: "DET", home: "MIN", kickoff: "2026-09-18T13:00:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" },
        { id: "2026-2-BUF@NYJ", away: "BUF", home: "NYJ", kickoff: "2026-09-19T20:15:00-04:00", status: "scheduled", score: { away: 0, home: 0 }, possession: "", quarter: "", clock: "", ballSpot: "" }
      ],
      picks: {
        "CF&SF": {
          "2026-2-MIA@NE": "MIA",
          "2026-2-GB@CHI": "CHI",
          "2026-2-BAL@CLE": "BAL",
          "2026-2-DAL@PHI": "PHI",
          "2026-2-LAR@SEA": "LAR",
          "2026-2-NYG@WAS": "WAS",
          "2026-2-TB@CAR": "TB",
          "2026-2-IND@JAX": "JAX",
          "2026-2-HOU@TEN": "HOU",
          "2026-2-ARI@LV": "LV",
          "2026-2-SF@LA": "SF",
          "2026-2-NO@ATL": "ATL",
          "2026-2-KC@DEN": "KC",
          "2026-2-CIN@PIT": "PIT",
          "2026-2-DET@MIN": "DET",
          "2026-2-BUF@NYJ": "NYJ",
        },
        "Mark F.": {
          "2026-2-MIA@NE": "NE",
          "2026-2-GB@CHI": "GB",
          "2026-2-BAL@CLE": "CLE",
          "2026-2-DAL@PHI": "DAL",
          "2026-2-LAR@SEA": "SEA",
          "2026-2-NYG@WAS": "NYG",
          "2026-2-TB@CAR": "CAR",
          "2026-2-IND@JAX": "IND",
          "2026-2-HOU@TEN": "TEN",
          "2026-2-ARI@LV": "ARI",
          "2026-2-SF@LA": "LA",
          "2026-2-NO@ATL": "NO",
          "2026-2-KC@DEN": "DEN",
          "2026-2-CIN@PIT": "CIN",
          "2026-2-DET@MIN": "MIN",
          "2026-2-BUF@NYJ": "BUF",
        },
        "Susan": {
          "2026-2-MIA@NE": "MIA",
          "2026-2-GB@CHI": "CHI",
          "2026-2-BAL@CLE": "BAL",
          "2026-2-DAL@PHI": "PHI",
          "2026-2-LAR@SEA": "LAR",
          "2026-2-NYG@WAS": "WAS",
          "2026-2-TB@CAR": "TB",
          "2026-2-IND@JAX": "JAX",
          "2026-2-HOU@TEN": "HOU",
          "2026-2-ARI@LV": "LV",
          "2026-2-SF@LA": "SF",
          "2026-2-NO@ATL": "ATL",
          "2026-2-KC@DEN": "KC",
          "2026-2-CIN@PIT": "PIT",
          "2026-2-DET@MIN": "DET",
          "2026-2-BUF@NYJ": "NYJ",
        },
        "Cowan": {
          "2026-2-MIA@NE": "NE",
          "2026-2-GB@CHI": "GB",
          "2026-2-BAL@CLE": "CLE",
          "2026-2-DAL@PHI": "DAL",
          "2026-2-LAR@SEA": "SEA",
          "2026-2-NYG@WAS": "NYG",
          "2026-2-TB@CAR": "CAR",
          "2026-2-IND@JAX": "IND",
          "2026-2-HOU@TEN": "TEN",
          "2026-2-ARI@LV": "ARI",
          "2026-2-SF@LA": "LA",
          "2026-2-NO@ATL": "NO",
          "2026-2-KC@DEN": "DEN",
          "2026-2-CIN@PIT": "CIN",
          "2026-2-DET@MIN": "MIN",
          "2026-2-BUF@NYJ": "BUF",
        },
        "Ray": {
          "2026-2-MIA@NE": "MIA",
          "2026-2-GB@CHI": "CHI",
          "2026-2-BAL@CLE": "BAL",
          "2026-2-DAL@PHI": "PHI",
          "2026-2-LAR@SEA": "LAR",
          "2026-2-NYG@WAS": "WAS",
          "2026-2-TB@CAR": "TB",
          "2026-2-IND@JAX": "JAX",
          "2026-2-HOU@TEN": "HOU",
          "2026-2-ARI@LV": "LV",
          "2026-2-SF@LA": "SF",
          "2026-2-NO@ATL": "ATL",
          "2026-2-KC@DEN": "KC",
          "2026-2-CIN@PIT": "PIT",
          "2026-2-DET@MIN": "DET",
          "2026-2-BUF@NYJ": "NYJ",
        },
        "Vicki": {
          "2026-2-MIA@NE": "NE",
          "2026-2-GB@CHI": "GB",
          "2026-2-BAL@CLE": "CLE",
          "2026-2-DAL@PHI": "DAL",
          "2026-2-LAR@SEA": "SEA",
          "2026-2-NYG@WAS": "NYG",
          "2026-2-TB@CAR": "CAR",
          "2026-2-IND@JAX": "IND",
          "2026-2-HOU@TEN": "TEN",
          "2026-2-ARI@LV": "ARI",
          "2026-2-SF@LA": "LA",
          "2026-2-NO@ATL": "NO",
          "2026-2-KC@DEN": "DEN",
          "2026-2-CIN@PIT": "CIN",
          "2026-2-DET@MIN": "MIN",
          "2026-2-BUF@NYJ": "BUF",
        },
        "Craig": {
          "2026-2-MIA@NE": "MIA",
          "2026-2-GB@CHI": "CHI",
          "2026-2-BAL@CLE": "BAL",
          "2026-2-DAL@PHI": "PHI",
          "2026-2-LAR@SEA": "LAR",
          "2026-2-NYG@WAS": "WAS",
          "2026-2-TB@CAR": "TB",
          "2026-2-IND@JAX": "JAX",
          "2026-2-HOU@TEN": "HOU",
          "2026-2-ARI@LV": "LV",
          "2026-2-SF@LA": "SF",
          "2026-2-NO@ATL": "ATL",
          "2026-2-KC@DEN": "KC",
          "2026-2-CIN@PIT": "PIT",
          "2026-2-DET@MIN": "DET",
          "2026-2-BUF@NYJ": "NYJ",
        },
        "Kevin": {
          "2026-2-MIA@NE": "NE",
          "2026-2-GB@CHI": "GB",
          "2026-2-BAL@CLE": "CLE",
          "2026-2-DAL@PHI": "DAL",
          "2026-2-LAR@SEA": "SEA",
          "2026-2-NYG@WAS": "NYG",
          "2026-2-TB@CAR": "CAR",
          "2026-2-IND@JAX": "IND",
          "2026-2-HOU@TEN": "TEN",
          "2026-2-ARI@LV": "ARI",
          "2026-2-SF@LA": "LA",
          "2026-2-NO@ATL": "NO",
          "2026-2-KC@DEN": "DEN",
          "2026-2-CIN@PIT": "CIN",
          "2026-2-DET@MIN": "MIN",
          "2026-2-BUF@NYJ": "BUF",
        },
        "Mark C.": {
          "2026-2-MIA@NE": "MIA",
          "2026-2-GB@CHI": "CHI",
          "2026-2-BAL@CLE": "BAL",
          "2026-2-DAL@PHI": "PHI",
          "2026-2-LAR@SEA": "LAR",
          "2026-2-NYG@WAS": "WAS",
          "2026-2-TB@CAR": "TB",
          "2026-2-IND@JAX": "JAX",
          "2026-2-HOU@TEN": "HOU",
          "2026-2-ARI@LV": "LV",
          "2026-2-SF@LA": "SF",
          "2026-2-NO@ATL": "ATL",
          "2026-2-KC@DEN": "KC",
          "2026-2-CIN@PIT": "PIT",
          "2026-2-DET@MIN": "DET",
          "2026-2-BUF@NYJ": "NYJ",
        },
        "Lisa": {
          "2026-2-MIA@NE": "NE",
          "2026-2-GB@CHI": "GB",
          "2026-2-BAL@CLE": "CLE",
          "2026-2-DAL@PHI": "DAL",
          "2026-2-LAR@SEA": "SEA",
          "2026-2-NYG@WAS": "NYG",
          "2026-2-TB@CAR": "CAR",
          "2026-2-IND@JAX": "IND",
          "2026-2-HOU@TEN": "TEN",
          "2026-2-ARI@LV": "ARI",
          "2026-2-SF@LA": "LA",
          "2026-2-NO@ATL": "NO",
          "2026-2-KC@DEN": "DEN",
          "2026-2-CIN@PIT": "CIN",
          "2026-2-DET@MIN": "MIN",
          "2026-2-BUF@NYJ": "BUF",
        },
        "Heidi": {
          "2026-2-MIA@NE": "MIA",
          "2026-2-GB@CHI": "CHI",
          "2026-2-BAL@CLE": "BAL",
          "2026-2-DAL@PHI": "PHI",
          "2026-2-LAR@SEA": "LAR",
          "2026-2-NYG@WAS": "WAS",
          "2026-2-TB@CAR": "TB",
          "2026-2-IND@JAX": "JAX",
          "2026-2-HOU@TEN": "HOU",
          "2026-2-ARI@LV": "LV",
          "2026-2-SF@LA": "SF",
          "2026-2-NO@ATL": "ATL",
          "2026-2-KC@DEN": "KC",
          "2026-2-CIN@PIT": "PIT",
          "2026-2-DET@MIN": "DET",
          "2026-2-BUF@NYJ": "NYJ",
        },
      },
    },
  },
  api: {
    enabled: false,
    provider: "espn",
    baseUrl: "https://realtimesportsapi.com/api/v1",
    apiKey: "",
    leagueSlug: "nfl",
    season: "2026",
    week: "1",
    pollSeconds: 45,
  },
  historyOverrides: {},
  tiebreakers: {},
};

let data = loadData();
let pollTimer = null;
let historyWeek = null;
let weekViewWeek = null;
let standingsWeek = null;
let adminWeek = null;
const historyMondayCache = {};
const weekActualCache = {};

const HISTORY_DATA = normalizeHistoryData(window.HISTORY_DATA);
let historySeason = HISTORY_DATA.seasons[0]?.season || "";

function normalizeHistoryData(raw) {
  if (!raw) return { seasons: [] };
  if (Array.isArray(raw.seasons)) return raw;
  if (raw.weeks) {
    return {
      seasons: [
        {
          season: raw.season || "History",
          weeks: raw.weeks || [],
          players: raw.players || [],
          seasonTotals: raw.seasonTotals || {},
        },
      ],
    };
  }
  return { seasons: [] };
}

const els = {
  leagueName: document.getElementById("leagueName"),
  leagueMeta: document.getElementById("leagueMeta"),
  tabs: document.getElementById("tabs"),
  tabWeek: document.getElementById("tab-week"),
  tabStandings: document.getElementById("tab-standings"),
  tabHistory: document.getElementById("tab-history"),
  tabAdmin: document.getElementById("tab-admin"),
  refreshBtn: document.getElementById("refreshBtn"),
  logoutBtn: document.getElementById("logoutBtn"),
  liveStatus: document.getElementById("liveStatus"),
  loginModal: document.getElementById("loginModal"),
  loginLeague: document.getElementById("loginLeague"),
  loginPassword: document.getElementById("loginPassword"),
  loginBtn: document.getElementById("loginBtn"),
  loginError: document.getElementById("loginError"),
  loginLeagueHint: document.getElementById("loginLeagueHint"),
  jsWarning: document.getElementById("jsWarning"),
  adminModal: document.getElementById("adminModal"),
  adminPinModalInput: document.getElementById("adminPinModalInput"),
  adminUnlockBtn: document.getElementById("adminUnlockBtn"),
  adminError: document.getElementById("adminError"),
  toast: document.getElementById("toast"),
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

function init() {
  if (els.jsWarning) els.jsWarning.classList.add("hidden");
  wireTabs();
  wireAuth();
  wireAdminAuth();
  wireActions();
  render();
  checkSession();
}

function wireTabs() {
  if (!els.tabs) return;
  els.tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".tab");
    if (!tab) return;
    document.querySelectorAll(".tab").forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");
    const tabName = tab.dataset.tab;
    document.querySelectorAll(".panel").forEach((panel) => panel.classList.add("hidden"));
    document.getElementById(`tab-${tabName}`).classList.remove("hidden");
    if (tabName === "admin") guardAdmin();
  });
}

function wireAuth() {
  if (!els.loginBtn) return;
  if (els.loginLeagueHint) {
    els.loginLeagueHint.textContent = data.league.name;
  }

  els.loginBtn.addEventListener("click", () => {
    const league = els.loginLeague.value.trim();
    const password = els.loginPassword.value.trim();
    if (league !== data.league.name || password !== data.league.password) {
      setLoginError("League name or password is incorrect.");
      toast("League name or password is incorrect.");
      return;
    }
    safeSet(SESSION_KEY, JSON.stringify({ league }));
    els.loginModal.classList.add("hidden");
    setLoginError("");
  });

  [els.loginLeague, els.loginPassword].forEach((input) => {
    if (!input) return;
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        els.loginBtn.click();
      }
    });
  });

  els.logoutBtn.addEventListener("click", () => {
    safeRemove(SESSION_KEY);
    safeRemove(ADMIN_KEY);
    els.loginModal.classList.remove("hidden");
  });
}

function wireAdminAuth() {
  if (!els.adminUnlockBtn) return;
  els.adminUnlockBtn.addEventListener("click", () => {
    const pin = els.adminPinModalInput.value.trim();
    if (!pin || pin !== data.league.adminPin) {
      setAdminError("Invalid admin PIN.");
      return;
    }
    safeSet(ADMIN_KEY, JSON.stringify({ unlocked: true }));
    els.adminModal.classList.add("hidden");
    setAdminError("");
  });

  if (els.adminPinModalInput) {
    els.adminPinModalInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        els.adminUnlockBtn.click();
      }
    });
  }
}

function wireActions() {
  els.refreshBtn.addEventListener("click", async () => {
    await refreshLiveScores();
    render();
    toast("Scores updated.");
  });
}

function render() {
  renderHeader();
  renderWeekView();
  renderStandings();
  renderHistory();
  renderAdmin();
  startPolling();
}

function renderHeader() {
  els.leagueName.textContent = data.league.name;
  els.leagueMeta.textContent = `${data.league.weekLabel} · NFL · ${data.league.season}`;
  els.liveStatus.textContent = data.api.enabled
    ? `Live sync on (${data.api.pollSeconds}s)`
    : "Live sync off";
}

function renderWeekView() {
  const weekKey = weekViewWeek || String(data.league.currentWeek);
  const week = data.weeks[weekKey] || getCurrentWeek();
  const games = week.games;
  const picks = week.picks;
  const weekPlayers = [...data.players].sort((a, b) => a.localeCompare(b));
  const tiebreaker = data.tiebreakers?.[weekKey];
  let actualTotal = tiebreaker?.actual;
  let actualLabel = "";
  if (actualTotal === "" || actualTotal === undefined || actualTotal === null) {
    if (data.api.provider === "espn") {
      if (weekActualCache[weekKey] === undefined) {
        actualLabel = "Actual: fetching…";
        updateWeekActualFromEspn(weekKey);
      } else {
        actualTotal = weekActualCache[weekKey];
      }
    }
  }

  const standings = weekPlayers.map((player) => {
    const playerPicks = picks[player] || {};
    const tally = tallyResults(games, playerPicks);
    return { player, ...tally };
  });
  const allFinal = games.every((game) => game.status === "final");
  const winner = allFinal ? pickWeekWinner(standings, tiebreaker) : null;
  const pointsWinners = allFinal ? pickPointsWinners(standings, tiebreaker, actualTotal) : [];
  const winners = pointsWinners.length ? pointsWinners : winner ? [winner] : [];
  const winnerKeys = new Set(winners.map(normalizePlayerName));
  const pointsWinnerKeys = new Set(pointsWinners.map(normalizePlayerName));
  const sortedStandings = standings
    .slice()
    .sort((a, b) => compareRecords(a, b))
    .sort((a, b) => (a.player === winner ? -1 : b.player === winner ? 1 : 0));

  els.tabWeek.innerHTML = `
    <div class="week-snapshot">
      <div class="week-header">
        <h2 class="section-title">Week Snapshot</h2>
        <div class="form-grid" style="max-width:220px;">
          <label>
            Week
            <select id="weekViewSelect">
              ${Object.keys(data.weeks)
                .sort((a, b) => Number(a) - Number(b))
                .map(
                  (wk) =>
                    `<option value="${wk}" ${wk === weekKey ? "selected" : ""}>Week ${wk}</option>`
                )
                .join("")}
            </select>
          </label>
        </div>
      </div>
      <div class="week-layout">
      <div class="matrix-wrap">
        <table class="matrix-table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Score</th>
            <th>Status</th>
            ${weekPlayers
              .map((player) => {
                const row = sortedStandings.find((s) => s.player === player);
                const record = row ? `${row.wins}-${row.losses}` : "--";
                return `<th class="player-col ${winnerKeys.has(normalizePlayerName(player)) ? "winner" : ""}"><div class="player-header"><span class="player-name">${player}</span><span class="player-record">${record}</span></div></th>`;
              })
              .join("")}
          </tr>
        </thead>
        <tbody>
          ${games
            .map((game) => {
              const status = formatStatus(game);
              const liveDetail = formatLiveDetail(game);
              const showLiveDetail = game.status === "in-progress" && liveDetail;
              const score = renderScore(game);
              return `
                <tr>
                  <td class="game-cell">
                    <strong>${game.away}@${game.home}</strong>
                    <div class="kickoff">${formatKickoff(game.kickoff)}</div>
                  </td>
                  <td>${score}</td>
                  <td>
                    <div class="status-main">${status}</div>
                    ${showLiveDetail ? `<div class="status-sub">${liveDetail}</div>` : ""}
                  </td>
                  ${weekPlayers
                    .map((player) => {
                      const pick = picks[player]?.[game.id];
                      const result = pick ? getPickResult(game, pick) : "pending";
                      const cls = {
                        win: "win",
                        loss: "loss",
                        winLive: "win-live",
                        lossLive: "loss-live",
                        tie: "tie",
                        pending: "",
                      }[result];
                      return `<td class="matrix-pick player-col ${cls}">${pick || "--"}</td>`;
                    })
                    .join("")}
                </tr>
              `;
            })
            .join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"><strong>Points Total</strong>${
              Number.isFinite(Number(actualTotal))
                ? ` <span class="actual-total">Actual: ${actualTotal}</span>`
                : actualLabel
                ? ` <span class="actual-total">${actualLabel}</span>`
                : ""
            }</td>
            ${weekPlayers
              .map((player) => {
                const guess = tiebreaker?.guesses?.[player];
                const cls = winnerKeys.has(normalizePlayerName(player)) ? "winner" : "";
                return `<td class="matrix-pick player-col ${cls}">${guess ?? "--"}</td>`;
              })
              .join("")}
          </tr>
        </tfoot>
        </table>
      </div>
    </div>
    </div>
  `;

  const weekSelect = document.getElementById("weekViewSelect");
  if (weekSelect) {
    weekSelect.addEventListener("change", (event) => {
      weekViewWeek = event.target.value;
      renderWeekView();
    });
  }
}

async function updateWeekActualFromEspn(weekKey) {
  const weekNum = Number(weekKey);
  if (!Number.isFinite(weekNum)) return;
  const total = await getEspnMondayOrSundayTotal(weekNum);
  weekActualCache[weekKey] = total ?? null;
  renderWeekView();
}

function pickWeekWinner(rows, tiebreaker) {
  const actual = Number(tiebreaker?.actual);
  const byRecord = [...rows].sort((a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (a.losses !== b.losses) return a.losses - b.losses;
    return a.player.localeCompare(b.player);
  });
  const top = byRecord[0];
  if (!top) return null;

  const tied = byRecord.filter(
    (row) => row.wins === top.wins && row.losses === top.losses
  );
  if (tied.length === 1) return top.player;

  if (!Number.isFinite(actual)) {
    return tied[0].player;
  }

  const withDiff = tied.map((row) => {
    const guess = Number(tiebreaker?.guesses?.[row.player]);
    const diff = Number.isFinite(guess) ? Math.abs(guess - actual) : Number.POSITIVE_INFINITY;
    return { player: row.player, diff };
  });
  withDiff.sort((a, b) => a.diff - b.diff || a.player.localeCompare(b.player));
  return withDiff[0]?.player || tied[0].player;
}

function pickPointsWinners(rows, tiebreaker, actualOverride) {
  const actual =
    Number.isFinite(Number(actualOverride)) ? Number(actualOverride) : Number(tiebreaker?.actual);
  if (!Number.isFinite(actual)) return [];
  const guesses = tiebreaker?.guesses || {};
  const normalizedGuesses = Object.entries(guesses).reduce((acc, [key, value]) => {
    acc[normalizePlayerName(key)] = value;
    return acc;
  }, {});
  const top = [...rows].sort((a, b) => compareRecords(a, b))[0];
  if (!top) return [];

  const tiedTop = rows.filter(
    (row) => row.wins === top.wins && row.losses === top.losses
  );

  const diffs = tiedTop
    .map((row) => {
      const num = Number(normalizedGuesses[normalizePlayerName(row.player)]);
      if (!Number.isFinite(num)) return null;
      return { player: row.player, diff: Math.abs(num - actual) };
    })
    .filter(Boolean);

  if (!diffs.length) return [];
  const minDiff = Math.min(...diffs.map((d) => d.diff));
  return diffs
    .filter((d) => d.diff === minDiff)
    .map((d) => d.player)
    .sort((a, b) => a.localeCompare(b));
}

function normalizePlayerName(name) {
  return String(name || "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function renderScore(game) {
  const awayHasBall = game.possession === game.away || game.possession === "away";
  const homeHasBall = game.possession === game.home || game.possession === "home";
  const ball = `<span class="ball" aria-hidden="true">🏈</span>`;
  return `
    <div class="score-inline">
      <span class="score-team">${game.away} ${game.score.away} ${awayHasBall ? ball : ""}</span>
      <span class="score-team">${game.home} ${game.score.home} ${homeHasBall ? ball : ""}</span>
    </div>
  `;
}

function renderPickBadge(game, pick) {
  if (!pick) {
    return `<div class="pick-badge">${game.away} @ ${game.home} · No pick</div>`;
  }
  const result = getPickResult(game, pick);
  const label = `${pick} · ${game.away}@${game.home}`;
  const cls = {
    win: "win",
    loss: "loss",
    winLive: "win-live",
    lossLive: "loss-live",
    tie: "tie",
    pending: "",
  }[result];
  return `<div class="pick-badge ${cls}">${label}</div>`;
}

function renderStandings() {
  const totals = data.players.reduce((acc, player) => {
    acc[player] = { wins: 0, losses: 0, ties: 0, pending: 0 };
    return acc;
  }, {});

  Object.values(data.weeks).forEach((week) => {
    const games = week.games || [];
    data.players.forEach((player) => {
      const picks = week.picks?.[player] || {};
      const tally = tallyResults(games, picks);
      totals[player].wins += tally.wins;
      totals[player].losses += tally.losses;
      totals[player].ties += tally.ties;
      totals[player].pending += tally.pending;
    });
  });

  const rows = Object.entries(totals).map(([player, rec]) => ({ player, ...rec }));
  rows.sort(compareRecords);
  const withPct = rows.map((row) => ({ ...row, pct: calcWinPct(row.wins, row.losses, row.ties) }));

  const weekKey = String(data.league.currentWeek);
  const standingsWeekKey = standingsWeek || weekKey;
  const week = data.weeks[standingsWeekKey] || getCurrentWeek();
  const weekRows = data.players.map((player) => {
    const picks = week.picks?.[player] || {};
    const tally = tallyResults(week.games || [], picks);
    return { player, ...tally };
  });
  weekRows.sort(compareRecords);
  const weekWithPct = weekRows.map((row) => ({ ...row, pct: calcWinPct(row.wins, row.losses, row.ties) }));

  els.tabStandings.innerHTML = `
    <h2 class="section-title">Overall Standings</h2>
    <table class="standings-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Win %</th>
        </tr>
      </thead>
      <tbody>
        ${withPct
          .map(
            (row) => `
            <tr>
              <td>${row.player}</td>
              <td>${row.wins}</td>
              <td>${row.losses}</td>
              <td>${row.pct}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
    <div class="week-header" style="margin-top:24px;">
      <h2 class="section-title">Week Standings</h2>
      <div class="form-grid" style="max-width:220px;">
        <label>
          Week
          <select id="standingsWeekSelect">
            ${Object.keys(data.weeks)
              .sort((a, b) => Number(a) - Number(b))
              .map(
                (wk) =>
                  `<option value="${wk}" ${wk === standingsWeekKey ? "selected" : ""}>Week ${wk}</option>`
              )
              .join("")}
          </select>
        </label>
      </div>
    </div>
    <table class="standings-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Win %</th>
          <th>Pending</th>
        </tr>
      </thead>
      <tbody>
        ${weekWithPct
          .map(
            (row) => `
            <tr>
              <td>${row.player}</td>
              <td>${row.wins}</td>
              <td>${row.losses}</td>
              <td>${row.pct}</td>
              <td>${row.pending}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  `;

  const select = document.getElementById("standingsWeekSelect");
  if (select) {
    select.addEventListener("change", (event) => {
      standingsWeek = event.target.value;
      renderStandings();
    });
  }
}

function compareRecords(a, b) {
  if (b.wins !== a.wins) return b.wins - a.wins;
  if (a.losses !== b.losses) return a.losses - b.losses;
  return a.player.localeCompare(b.player);
}

function calcWinPct(wins, losses, ties) {
  const games = wins + losses;
  if (!games) return ".000";
  return (wins / games).toFixed(3).replace(/^0/, "");
}

async function renderHistory() {
  if (!els.tabHistory) return;
  const history = HISTORY_DATA;
  if (!history.seasons || history.seasons.length === 0) {
    els.tabHistory.innerHTML = `
      <h2 class="section-title">History</h2>
      <p class="hint">No historical data loaded.</p>
    `;
    return;
  }

  if (!historySeason) historySeason = history.seasons[0].season;
  const seasonData =
    history.seasons.find((s) => s.season === historySeason) || history.seasons[0];

  const weeks = [...(seasonData.weeks || [])].sort((a, b) => a.week - b.week);
  if (!historyWeek) historyWeek = weeks[weeks.length - 1].week;
  const selected = weeks.find((w) => w.week === Number(historyWeek)) || weeks[0];
  let mondayTotal = selected.mondayTotal;
  if ((mondayTotal === null || mondayTotal === undefined || mondayTotal === "") && data.api.provider === "espn") {
    mondayTotal = await getEspnMondayOrSundayTotal(selected.week);
  }

  const seasonTotals = seasonData.seasonTotals || {};
  const rankCompare = (a, b) => {
    if (b.wins !== a.wins) return b.wins - a.wins;
    if (a.losses !== b.losses) return a.losses - b.losses;
    return a.player.localeCompare(b.player);
  };
  const rankCompareWithPoints = (a, b) => {
    const base = rankCompare(a, b);
    if (base !== 0) return base;
    const aPts = Number(a.points || 0);
    const bPts = Number(b.points || 0);
    if (bPts !== aPts) return bPts - aPts;
    return a.player.localeCompare(b.player);
  };

  const totalsRows = (seasonData.players || [])
    .map((player) => {
      const rec = seasonTotals[player] || { wins: 0, losses: 0, ties: 0 };
      return { player, wins: rec.wins + rec.ties, losses: rec.losses, ties: 0 };
    })
    .sort(rankCompare);

  const weekRows = (seasonData.players || [])
    .map((player) => {
      const rec = selected.records?.[player] || { wins: 0, losses: 0, ties: 0, raw: "" };
      const points = selected.points?.[player] ?? "";
      const numericPoints = Number(points);
      const diff =
        Number.isFinite(numericPoints) && Number.isFinite(mondayTotal)
          ? Math.abs(numericPoints - Number(mondayTotal))
          : "";
      return {
        player,
        wins: rec.wins + rec.ties,
        losses: rec.losses,
        ties: 0,
        points,
        diff,
      };
    })
    .sort(rankCompareWithPoints);

  els.tabHistory.innerHTML = `
    <h2 class="section-title">History</h2>
    <div class="form-grid">
      <label>
        Season
        <select id="historySeasonSelect">
          ${history.seasons
            .map(
              (s) =>
                `<option value="${s.season}" ${s.season === seasonData.season ? "selected" : ""}>${s.season}</option>`
            )
            .join("")}
        </select>
      </label>
    </div>
    <h3 class="section-title">Season Totals</h3>
    <table class="standings-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Win %</th>
        </tr>
      </thead>
      <tbody>
        ${totalsRows
          .map((row) => {
            const pct = calcWinPct(row.wins, row.losses, row.ties);
            return `
              <tr>
                <td>${row.player}</td>
                <td>${row.wins}</td>
                <td>${row.losses}</td>
                <td>${pct}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
    <h3 class="section-title" style="margin-top:24px;">Week Records</h3>
    <div class="form-grid">
      <label>
        Week
        <select id="historyWeekSelect">
          ${weeks
            .map(
              (w) =>
                `<option value="${w.week}" ${w.week === selected.week ? "selected" : ""}>Week ${w.week}</option>`
            )
            .join("")}
        </select>
      </label>
    </div>
    <p class="hint">Tiebreak total (Mon or Sun night): ${Number.isFinite(Number(mondayTotal)) ? mondayTotal : "Not set"}</p>
    <table class="standings-table">
      <thead>
        <tr>
          <th>Player</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Win %</th>
          <th>Points</th>
          <th>Diff</th>
        </tr>
      </thead>
      <tbody>
        ${weekRows
          .map((row) => {
            const pct = calcWinPct(row.wins, row.losses, row.ties);
            return `
              <tr>
                <td>${row.player}</td>
                <td>${row.wins}</td>
                <td>${row.losses}</td>
                <td>${pct}</td>
                <td>${row.points}</td>
                <td>${row.diff}</td>
              </tr>
            `;
          })
          .join("")}
      </tbody>
    </table>
  `;

  const select = document.getElementById("historyWeekSelect");
  if (select) {
    select.addEventListener("change", (event) => {
      historyWeek = Number(event.target.value);
      renderHistory();
    });
  }

  const seasonSelect = document.getElementById("historySeasonSelect");
  if (seasonSelect) {
    seasonSelect.addEventListener("change", (event) => {
      historySeason = event.target.value;
      historyWeek = null;
      renderHistory();
    });
  }

}

function renderAdmin() {
  const adminWeekKey = adminWeek || String(data.league.currentWeek);
  const week = data.weeks[adminWeekKey] || getCurrentWeek();
  const games = week.games;
  const picks = week.picks;
  const tiebreaker = data.tiebreakers?.[adminWeekKey] || { actual: "", guesses: {} };

  els.tabAdmin.innerHTML = `
    <h2 class="section-title">Admin Console</h2>
    <details class="admin-section">
      <summary>League Settings</summary>
      <div class="form-grid">
        <label>
          League Name
          <input type="text" id="settingsLeagueName" value="${data.league.name}" />
        </label>
        <label>
          League Password
          <input type="text" id="settingsPassword" value="${data.league.password}" />
        </label>
        <label>
          Admin PIN
          <input type="text" id="settingsAdminPin" value="${data.league.adminPin}" />
        </label>
        <label>
          Current Week
          <input type="number" id="settingsWeek" min="1" value="${data.league.currentWeek}" />
        </label>
        <label>
          Week Label
          <input type="text" id="settingsWeekLabel" value="${data.league.weekLabel}" />
        </label>
      </div>
      <div class="inline-input" style="margin-top:12px;">
        <button class="ghost" id="resetDefaultsBtn" type="button">Reset To Defaults</button>
        <span class="hint">Clears local changes and reloads the starter data.</span>
      </div>
      <button class="primary" id="saveSettingsBtn" style="margin-top:12px;">Save Settings</button>
    </details>

    <details class="admin-section">
      <summary>Live Scoring</summary>
      <div class="form-grid">
        <label>
          Enable Live Sync
          <select id="settingsLive">
            <option value="false" ${data.api.enabled ? "" : "selected"}>Off</option>
            <option value="true" ${data.api.enabled ? "selected" : ""}>On</option>
          </select>
        </label>
        <label>
          Provider
          <select id="settingsProvider">
            <option value="espn" ${data.api.provider === "espn" ? "selected" : ""}>ESPN (public)</option>
            <option value="realtimeSportsApi" ${data.api.provider === "realtimeSportsApi" ? "selected" : ""}>RealtimeSportsAPI</option>
          </select>
        </label>
        <label>
          Base URL
          <input type="text" id="settingsBaseUrl" value="${data.api.baseUrl}" />
        </label>
        <label>
          API Key
          <input type="text" id="settingsApiKey" value="${data.api.apiKey}" />
        </label>
        <label>
          League Slug
          <input type="text" id="settingsLeagueSlug" value="${data.api.leagueSlug}" />
        </label>
        <label>
          Season
          <input type="text" id="settingsSeason" value="${data.api.season}" />
        </label>
        <label>
          Week
          <input type="text" id="settingsApiWeek" value="${data.api.week}" />
        </label>
        <label>
          Poll Seconds
          <input type="number" id="settingsPoll" min="15" value="${data.api.pollSeconds}" />
        </label>
      </div>
      <p class="hint">Live sync runs in the browser, so API keys are visible to users. For private keys, move the live feed to a backend.</p>
    </details>

    <details class="admin-section">
      <summary>Players</summary>
    <div class="inline-input">
      <input type="text" id="playerInputSingle" placeholder="Sam" />
      <button class="primary" id="addPlayerBtn" type="button">Add Player</button>
    </div>
    <div class="admin-list" style="margin-top:12px;">
      ${data.players
        .sort((a, b) => a.localeCompare(b))
        .map(
          (player) => `
            <div class="admin-item players">
              <strong>${player}</strong>
              <div class="inline-input">
                <button class="ghost edit-player" data-player="${player}">Edit</button>
                <button class="ghost remove-player" data-player="${player}">Delete</button>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  </details>

    <details class="admin-section">
      <summary>Week Setup</summary>
      <div class="form-grid">
        <label>
          Week For Edits
          <select id="adminWeekSelect">
            ${Object.keys(data.weeks)
              .sort((a, b) => Number(a) - Number(b))
              .map(
                (wk) =>
                  `<option value="${wk}" ${wk === adminWeekKey ? "selected" : ""}>Week ${wk}</option>`
              )
              .join("")}
          </select>
        </label>
        <label>
          Week Label
          <input type="text" id="weekLabelInput" value="${data.league.weekLabel}" />
        </label>
      </div>
      <div class="form-grid">
        <label>
          Tiebreaker Total (Mon/Sun night)
          <input type="number" id="tiebreakerActual" value="${tiebreaker.actual ?? ""}" />
        </label>
      </div>
    </details>
    <details class="admin-section">
      <summary>Add Game</summary>
      <div class="form-grid">
      <label>
        Away Team
        <input type="text" id="awayInput" placeholder="DAL" />
      </label>
      <label>
        Home Team
        <input type="text" id="homeInput" placeholder="NYG" />
      </label>
      <label>
        Kickoff (ISO)
        <input type="text" id="kickoffInput" placeholder="2026-09-12T13:00:00-04:00" />
      </label>
      <label>
        Status
        <select id="statusInput">
          <option value="scheduled">scheduled</option>
          <option value="in-progress">in-progress</option>
          <option value="final">final</option>
        </select>
      </label>
    </div>
      <button class="primary" id="addGameBtn">Add Game</button>
    </details>

    <details class="admin-section">
      <summary>Games & Scores</summary>
      <p class="hint">Status can be updated manually or through live sync.</p>
      <div class="admin-list">
      ${games
        .map(
          (game) => `
          <div class="admin-item" data-game-id="${game.id}">
            <strong>${game.away} @ ${game.home}</strong>
            <input type="number" class="score-away" value="${game.score.away}" min="0" />
            <input type="number" class="score-home" value="${game.score.home}" min="0" />
            <select class="possession-select">
              <option value="">--</option>
              <option value="${game.away}" ${game.possession === game.away ? "selected" : ""}>${game.away} ball</option>
              <option value="${game.home}" ${game.possession === game.home ? "selected" : ""}>${game.home} ball</option>
            </select>
            <input type="text" class="quarter-input" value="${game.quarter || ""}" placeholder="Q4" />
            <input type="text" class="clock-input" value="${game.clock || ""}" placeholder="12:34" />
            <input type="text" class="ball-spot-input" value="${game.ballSpot || ""}" placeholder="NYG 42" />
            <select class="status-select">
              ${["scheduled", "in-progress", "final"]
                .map(
                  (status) =>
                    `<option value="${status}" ${status === game.status ? "selected" : ""}>${status}</option>`
                )
                .join("")}
            </select>
          </div>
        `
        )
        .join("")}
    </div>
      <button class="ghost" id="saveScoresBtn">Save Scores</button>
    </details>

    <details class="admin-section" open>
      <summary>Enter Picks</summary>
      <p class="hint">Enter each player's picks and their tiebreaker Points Total.</p>
      <div class="admin-list">
      ${data.players
        .map(
          (player) => `
          <div class="admin-item picks stacked">
            <div class="player-meta">
              <strong>${player}</strong>
              <div class="pick-cell">
                <span class="pick-label">Points</span>
                <input type="number" class="tiebreaker-input" data-player="${player}" value="${tiebreaker.guesses?.[player] ?? ""}" />
              </div>
            </div>
            <div class="player-picks-list">
              ${games
                .map((game) => {
                  const currentPick = picks[player]?.[game.id] || "";
                  return `
                    <div class="pick-cell">
                      <span class="pick-label">${game.away}@${game.home}</span>
                      <select class="pick-select" data-player="${player}" data-game-id="${game.id}">
                        <option value="">--</option>
                        <option value="${game.away}" ${currentPick === game.away ? "selected" : ""}>${game.away}</option>
                        <option value="${game.home}" ${currentPick === game.home ? "selected" : ""}>${game.home}</option>
                      </select>
                    </div>
                  `;
                })
                .join("")}
            </div>
          </div>
        `
        )
        .join("")}
    </div>
      <button class="primary" id="savePicksBtn">Save Picks</button>
    </details>
  `;

  wireAdminControls();
}

function wireAdminControls() {
  const addGameBtn = document.getElementById("addGameBtn");
  const saveScoresBtn = document.getElementById("saveScoresBtn");
  const savePicksBtn = document.getElementById("savePicksBtn");
  const addPlayerBtn = document.getElementById("addPlayerBtn");
  const saveTiebreakerBtn = document.getElementById("saveTiebreakerBtn");
  const adminWeekSelect = document.getElementById("adminWeekSelect");

  const getAdminWeekKey = () =>
    adminWeekSelect ? adminWeekSelect.value : String(data.league.currentWeek);

  if (adminWeekSelect) {
    adminWeekSelect.addEventListener("change", (event) => {
      adminWeek = event.target.value;
      renderAdmin();
    });
  }

  addGameBtn.addEventListener("click", () => {
    if (!validateAdmin()) return;
    const away = document.getElementById("awayInput").value.trim();
    const home = document.getElementById("homeInput").value.trim();
    const kickoff = document.getElementById("kickoffInput").value.trim();
    const status = document.getElementById("statusInput").value;
    if (!away || !home) {
      toast("Add both away and home teams.");
      return;
    }
    const weekKey = getAdminWeekKey();
    const id = `${data.league.season}-${weekKey}-${away}@${home}`;
    if (!data.weeks[weekKey]) data.weeks[weekKey] = { games: [], picks: {} };
    data.weeks[weekKey].games.push({
      id,
      away,
      home,
      kickoff,
      status,
      score: { away: 0, home: 0 },
      possession: "",
      quarter: "",
      clock: "",
      ballSpot: "",
    });
    saveData();
    render();
    toast("Game added.");
  });

  saveScoresBtn.addEventListener("click", () => {
    if (!validateAdmin()) return;
    const weekKey = getAdminWeekKey();
    const week = data.weeks[weekKey] || getCurrentWeek();
    document.querySelectorAll(".admin-item[data-game-id]").forEach((row) => {
      const id = row.dataset.gameId;
      const game = week.games.find((g) => g.id === id);
      if (!game) return;
      game.score.away = Number(row.querySelector(".score-away").value) || 0;
      game.score.home = Number(row.querySelector(".score-home").value) || 0;
      game.possession = row.querySelector(".possession-select").value || "";
      game.quarter = row.querySelector(".quarter-input").value.trim();
      game.clock = row.querySelector(".clock-input").value.trim();
      game.ballSpot = row.querySelector(".ball-spot-input").value.trim();
      game.status = row.querySelector(".status-select").value;
    });
    saveData();
    render();
    toast("Scores saved.");
  });

  savePicksBtn.addEventListener("click", () => {
    if (!validateAdmin()) return;
    const weekKey = getAdminWeekKey();
    const week = data.weeks[weekKey] || getCurrentWeek();
    document.querySelectorAll(".pick-select").forEach((select) => {
      const player = select.dataset.player;
      const gameId = select.dataset.gameId;
      if (!week.picks[player]) week.picks[player] = {};
      const value = select.value;
      if (value) week.picks[player][gameId] = value;
    });
    if (!data.tiebreakers) data.tiebreakers = {};
    const actualValue = document.getElementById("tiebreakerActual")?.value.trim();
    const actual = actualValue ? Number(actualValue) : "";
    const guesses = {};
    document.querySelectorAll(".tiebreaker-input").forEach((input) => {
      const player = input.dataset.player;
      const val = input.value.trim();
      guesses[player] = val ? Number(val) : "";
    });
    data.tiebreakers[weekKey] = { actual, guesses };
    saveData();
    render();
    toast("Picks and tiebreakers saved.");
  });

  addPlayerBtn.addEventListener("click", () => {
    if (!validateAdmin()) return;
    const value = document.getElementById("playerInputSingle").value.trim();
    if (!value) return;
    data.players = Array.from(new Set([...data.players, value]));
    saveData();
    render();
    toast("Player added.");
  });

  const addPlayerInput = document.getElementById("playerInputSingle");
  if (addPlayerInput) {
    addPlayerInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        addPlayerBtn.click();
      }
    });
  }

  document.querySelectorAll(".remove-player").forEach((button) => {
    button.addEventListener("click", () => {
      if (!validateAdmin()) return;
      const player = button.dataset.player;
      if (!player) return;
      if (!confirm(`Remove ${player} and their picks?`)) return;
      data.players = data.players.filter((name) => name !== player);
      Object.values(data.weeks).forEach((week) => {
        if (week.picks) delete week.picks[player];
      });
      saveData();
      render();
      toast("Player removed.");
    });
  });

  document.querySelectorAll(".edit-player").forEach((button) => {
    button.addEventListener("click", () => {
      if (!validateAdmin()) return;
      const currentName = button.dataset.player;
      if (!currentName) return;
      const nextName = prompt("Edit player name:", currentName);
      if (!nextName) return;
      const trimmed = nextName.trim();
      if (!trimmed || trimmed === currentName) return;
      if (data.players.includes(trimmed)) {
        toast("Name already exists.");
        return;
      }
      data.players = data.players.map((name) => (name === currentName ? trimmed : name));
      Object.values(data.weeks).forEach((week) => {
        if (!week.picks) return;
        if (week.picks[currentName]) {
          week.picks[trimmed] = week.picks[currentName];
          delete week.picks[currentName];
        }
      });
      if (data.tiebreakers) {
        Object.values(data.tiebreakers).forEach((tb) => {
          if (tb.guesses?.[currentName] !== undefined) {
            tb.guesses[trimmed] = tb.guesses[currentName];
            delete tb.guesses[currentName];
          }
        });
      }
      saveData();
      render();
      toast("Player updated.");
    });
  });

  const saveSettingsBtn = document.getElementById("saveSettingsBtn");
  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", () => {
      if (!validateAdmin()) return;
      data.league.name = document.getElementById("settingsLeagueName").value.trim() || data.league.name;
      data.league.password = document.getElementById("settingsPassword").value.trim() || data.league.password;
      data.league.adminPin = document.getElementById("settingsAdminPin").value.trim() || data.league.adminPin;
      data.league.currentWeek = Number(document.getElementById("settingsWeek").value) || data.league.currentWeek;
      data.league.weekLabel = document.getElementById("settingsWeekLabel").value.trim() || data.league.weekLabel;

      data.api.enabled = document.getElementById("settingsLive").value === "true";
      data.api.provider = document.getElementById("settingsProvider").value;
      data.api.baseUrl = document.getElementById("settingsBaseUrl").value.trim() || data.api.baseUrl;
      data.api.apiKey = document.getElementById("settingsApiKey").value.trim();
      data.api.leagueSlug = document.getElementById("settingsLeagueSlug").value.trim() || data.api.leagueSlug;
      data.api.season = document.getElementById("settingsSeason").value.trim() || data.api.season;
      data.api.week = document.getElementById("settingsApiWeek").value.trim() || data.api.week;
      data.api.pollSeconds = Number(document.getElementById("settingsPoll").value) || data.api.pollSeconds;

      if (!data.weeks[data.league.currentWeek]) {
        data.weeks[data.league.currentWeek] = { games: [], picks: {} };
      }

      saveData();
      render();
      toast("Settings saved.");
    });
  }

  if (saveTiebreakerBtn) {
    saveTiebreakerBtn.addEventListener("click", () => {
      if (!validateAdmin()) return;
      const weekKey = getAdminWeekKey();
      if (!data.tiebreakers) data.tiebreakers = {};
      const actualValue = document.getElementById("tiebreakerActual")?.value.trim();
      const actual = actualValue ? Number(actualValue) : "";
      const guesses = {};
      document.querySelectorAll(".tiebreaker-input").forEach((input) => {
        const player = input.dataset.player;
        const val = input.value.trim();
        guesses[player] = val ? Number(val) : "";
      });
      data.tiebreakers[weekKey] = { actual, guesses };
      saveData();
      toast("Tiebreaker saved.");
    });
  }

  const resetBtn = document.getElementById("resetDefaultsBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!confirm("Reset all local changes and reload defaults?")) return;
      safeRemove(STORAGE_KEY);
      safeRemove(SESSION_KEY);
      safeRemove(ADMIN_KEY);
      data = cloneData(DEFAULT_DATA);
      render();
      checkSession();
      toast("Defaults restored.");
    });
  }
}

function validateAdmin() {
  if (isAdminUnlocked()) return true;
  guardAdmin();
  return false;
}

function isAdminUnlocked() {
  const stored = safeGet(ADMIN_KEY);
  if (!stored) return false;
  try {
    return JSON.parse(stored).unlocked === true;
  } catch {
    return false;
  }
}

function guardAdmin() {
  if (isAdminUnlocked()) return;
  if (els.adminModal) {
    els.adminModal.classList.remove("hidden");
    els.adminPinModalInput?.focus();
  }
}

function setAdminError(message) {
  if (!els.adminError) return;
  els.adminError.textContent = message;
}

function tallyResults(games, picks) {
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let pending = 0;

  games.forEach((game) => {
    const pick = picks[game.id];
    if (!pick) {
      pending += 1;
      return;
    }
    const result = getPickResult(game, pick);
    if (result === "win") wins += 1;
    else if (result === "loss") losses += 1;
    else if (result === "tie") wins += 1;
    else pending += 1;
  });

  return { wins, losses, ties, pending };
}

function getPickResult(game, pick) {
  if (game.score.home === game.score.away && game.status === "final") return "tie";
  const winner = game.score.home > game.score.away ? game.home : game.score.away > game.score.home ? game.away : null;
  if (game.status === "final") return pick === winner ? "win" : "loss";
  if (game.status === "in-progress") {
    if (!winner) return "tie";
    return pick === winner ? "winLive" : "lossLive";
  }
  return "pending";
}

function formatStatus(game) {
  if (game.status === "scheduled") return `Kickoff ${formatKickoff(game.kickoff)}`;
  if (game.status === "in-progress") return "Live";
  return "Final";
}

function formatLiveDetail(game) {
  if (game.status !== "in-progress") return "";
  const pieces = [];
  if (game.quarter) pieces.push(game.quarter);
  if (game.clock) pieces.push(game.clock);
  if (game.ballSpot) pieces.push(`Ball: ${game.ballSpot}`);
  return pieces.join(" · ");
}

function formatKickoff(iso) {
  if (!iso) return "TBD";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "TBD";
  return date.toLocaleString(undefined, { weekday: "short", hour: "numeric", minute: "2-digit" });
}

function getCurrentWeek() {
  const weekKey = String(data.league.currentWeek);
  if (!data.weeks[weekKey]) data.weeks[weekKey] = { games: [], picks: {} };
  return data.weeks[weekKey];
}

function loadData() {
  const stored = safeGet(STORAGE_KEY);
  if (!stored) return cloneData(DEFAULT_DATA);
  try {
    return JSON.parse(stored);
  } catch {
    return cloneData(DEFAULT_DATA);
  }
}

function saveData() {
  safeSet(STORAGE_KEY, JSON.stringify(data));
}

function cloneData(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function checkSession() {
  const session = safeGet(SESSION_KEY);
  if (!session) {
    els.loginModal.classList.remove("hidden");
    return;
  }
  els.loginModal.classList.add("hidden");
}

function toast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  setTimeout(() => els.toast.classList.remove("show"), 2400);
}

function setLoginError(message) {
  if (!els.loginError) return;
  els.loginError.textContent = message;
}

async function refreshLiveScores() {
  if (!data.api.enabled) return;
  try {
    const events = await fetchLiveEvents();
    if (!events.length) return;
    const week = getCurrentWeek();
    week.games = week.games.map((game) => {
      const match = events.find(
        (event) => event.home === game.home && event.away === game.away
      );
      if (!match) return game;
      return {
        ...game,
        status: match.status,
        score: { home: match.homeScore, away: match.awayScore },
      };
    });
    saveData();
  } catch (error) {
    console.error(error);
    toast("Live sync failed. Check API settings.");
  }
}

async function fetchLiveEvents() {
  if (data.api.provider === "espn") {
    return fetchEspnScoreboard();
  }
  if (data.api.provider === "realtimeSportsApi") {
    return fetchRealtimeSportsApi();
  }
  return [];
}

async function fetchEspnScoreboard() {
  const { week } = data.api;
  const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${week}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("ESPN scoreboard request failed");
  const payload = await response.json();
  return mapEspnScoreboard(payload);
}

function mapEspnScoreboard(payload) {
  const events = payload?.events || [];
  return events.map((event) => {
    const competition = event.competitions?.[0];
    const competitors = competition?.competitors || [];
    const home = competitors.find((team) => team.homeAway === "home");
    const away = competitors.find((team) => team.homeAway === "away");
    const situation = competition?.situation || event?.status?.situation || {};
    return {
      home: home?.team?.abbreviation || home?.team?.shortDisplayName,
      away: away?.team?.abbreviation || away?.team?.shortDisplayName,
      homeScore: Number(home?.score || 0),
      awayScore: Number(away?.score || 0),
      status: normalizeStatus(competition?.status?.type?.state || event?.status?.type?.state),
      quarter: competition?.status?.type?.shortDetail?.split(" ")[0] || "",
      clock: competition?.status?.displayClock || "",
      ballSpot: situation?.possessionText || situation?.shortDownDistanceText || "",
      possession:
        situation?.possession?.abbreviation ||
        situation?.possession ||
        "",
    };
  });
}

async function getEspnMondayOrSundayTotal(week) {
  if (historyMondayCache[week]) return historyMondayCache[week];
  const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?week=${week}`;
  const response = await fetch(url);
  if (!response.ok) return null;
  const payload = await response.json();
  const events = payload?.events || [];
  const mondayGames = events.filter((event) => {
    const date = new Date(event.date);
    return !Number.isNaN(date.getTime()) && date.getDay() === 1;
  });
  let games = mondayGames;
  if (!games.length) {
    const sundayGames = events
      .map((event) => ({ event, date: new Date(event.date) }))
      .filter(({ date }) => !Number.isNaN(date.getTime()) && date.getDay() === 0)
      .sort((a, b) => a.date - b.date);
    const lastSunday = sundayGames[sundayGames.length - 1];
    games = lastSunday ? [lastSunday.event] : [];
  }
  if (!games.length) return null;
  const total = games.reduce((sum, event) => {
    const competition = event.competitions?.[0];
    const competitors = competition?.competitors || [];
    const home = competitors.find((team) => team.homeAway === "home");
    const away = competitors.find((team) => team.homeAway === "away");
    const homeScore = Number(home?.score || 0);
    const awayScore = Number(away?.score || 0);
    return sum + homeScore + awayScore;
  }, 0);
  historyMondayCache[week] = total;
  return total;
}

async function fetchRealtimeSportsApi() {
  const { baseUrl, apiKey, leagueSlug } = data.api;
  if (!apiKey) return [];
  const url = `${baseUrl}/sports/football/leagues/${leagueSlug}/events/live`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) throw new Error("Live feed request failed");
  const payload = await response.json();
  return mapRealtimeSportsApi(payload);
}

function mapRealtimeSportsApi(payload) {
  const events = payload?.data || payload?.events || [];
  return events.map((event) => ({
    home: event.home_team?.abbreviation || event.homeTeam || event.home,
    away: event.away_team?.abbreviation || event.awayTeam || event.away,
    homeScore: Number(event.home_score || event.homeScore || 0),
    awayScore: Number(event.away_score || event.awayScore || 0),
    status: normalizeStatus(event.status || event.state),
  }));
}

function normalizeStatus(status) {
  const value = String(status || "").toLowerCase();
  if (value.includes("final")) return "final";
  if (value.includes("live") || value.includes("in")) return "in-progress";
  return "scheduled";
}

function startPolling() {
  if (pollTimer) clearInterval(pollTimer);
  if (!data.api.enabled) return;
  pollTimer = setInterval(async () => {
    await refreshLiveScores();
    render();
  }, data.api.pollSeconds * 1000);
}
