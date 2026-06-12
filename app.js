const STORAGE_KEY = "postpartum-care-tracker-v1";

const TESTS = {
  urine_pregnancy_test: {
    label: "Home urine pregnancy test",
    unit: "qualitative",
    guide: "A home urine test can show hCG presence, but it does not measure the level or confirm pregnancy location. A faint line should be confirmed with quantitative serum beta-hCG when timing/context matters.",
    food: "No food or supplement decision should be based on a urine test line. Use it to trigger confirmation and clinician questions."
  },
  beta_hcg: {
    label: "Quantitative beta-hCG",
    unit: "IU/L",
    guide: "Blood hCG confirms and trends hCG level. It does not prove pregnancy location by itself; serial values and ultrasound decide next steps.",
    food: "No food or supplement changes should be based on hCG alone. Use this result for clinician review and timing of repeat testing."
  },
  blood_pressure: {
    label: "Blood pressure",
    unit: "mmHg",
    guide: "Screens for postpartum hypertension and preeclampsia risk. Severe values or symptoms need urgent care.",
    food: "If pressure is high, ask the doctor about salt, fluids, sleep, medicines, and safe activity. Food changes are supportive only."
  },
  temperature: {
    label: "Temperature",
    unit: "C",
    guide: "Fever can point to postpartum infection and should be reviewed urgently.",
    food: "Hydration helps comfort, but fever after delivery needs clinician review."
  },
  epds: {
    label: "EPDS or mood score",
    unit: "score",
    guide: "A screening score for postpartum depression/anxiety. It is not a diagnosis.",
    food: "Nutrition cannot replace mental health care. Regular meals, sleep support, and trusted help matter."
  },
  hemoglobin: {
    label: "Hemoglobin",
    unit: "g/dL",
    guide: "Low hemoglobin can suggest anemia, especially after heavy bleeding or fatigue.",
    food: "Discuss iron treatment. Food support: lentils, beans, greens, eggs/meat if used, and vitamin C with meals."
  },
  wbc: {
    label: "WBC count",
    unit: "10^3/uL",
    guide: "Part of CBC. It can support infection review but must be interpreted with postpartum timing, symptoms, and lab range.",
    food: "Fever or infection signs need clinician review; diet is supportive only."
  },
  ferritin: {
    label: "Ferritin",
    unit: "ng/mL",
    guide: "Ferritin estimates iron stores. Reference ranges vary by lab and inflammation can change results.",
    food: "Ask whether iron supplementation is needed. Pair iron-rich foods with citrus or amla."
  },
  serum_iron: {
    label: "Serum iron",
    unit: "ug/dL",
    guide: "Serum iron fluctuates and should not be used alone. It is more useful with ferritin, TIBC, and transferrin saturation.",
    food: "Discuss iron treatment only after CBC and iron-study interpretation."
  },
  transferrin_saturation: {
    label: "Transferrin saturation",
    unit: "%",
    guide: "Helps interpret iron availability when checked with ferritin/TIBC. Lab ranges and inflammation matter.",
    food: "If iron deficiency is confirmed, ask about dosing, timing, constipation prevention, and vitamin C pairing."
  },
  fasting_glucose: {
    label: "Fasting glucose",
    unit: "mg/dL",
    guide: "Used after gestational diabetes to screen for persistent diabetes risk.",
    food: "Build meals around protein, fiber, and slow carbohydrates. Avoid sugary drinks."
  },
  ogtt_2h: {
    label: "75 g OGTT 2-hour glucose",
    unit: "mg/dL",
    guide: "Preferred postpartum screen after GDM in many guidelines. Confirms glucose tolerance status.",
    food: "Ask for a diabetes-prevention plan if elevated. Walking after meals may help when medically cleared."
  },
  tsh: {
    label: "TSH",
    unit: "mIU/L",
    guide: "Checks thyroid function when symptoms, thyroid history, or new postpartum depression are present.",
    food: "Do not change thyroid medicine alone. Discuss iodine, selenium, and medicine timing with clinician."
  },
  free_t4: {
    label: "Free T4",
    unit: "ng/dL",
    guide: "Often paired with TSH when thyroid dysfunction is suspected.",
    food: "Food advice depends on thyroid diagnosis and medicines."
  },
  platelets: {
    label: "Platelets",
    unit: "10^3/uL",
    guide: "Can be checked with hypertension or preeclampsia concerns.",
    food: "Abnormal platelets after delivery need medical interpretation."
  },
  creatinine: {
    label: "Creatinine",
    unit: "mg/dL",
    guide: "Kidney marker, relevant when hypertension or preeclampsia is suspected.",
    food: "Hydration matters, but abnormal kidney markers need clinician review."
  },
  urine_pcr: {
    label: "Urine protein/creatinine ratio",
    unit: "ratio",
    guide: "Useful with high BP or preeclampsia concerns to assess proteinuria alongside symptoms and blood labs.",
    food: "Abnormal proteinuria after delivery needs medical interpretation, not diet-only management."
  },
  alt_ast: {
    label: "ALT or AST",
    unit: "U/L",
    guide: "Liver enzymes may be checked with preeclampsia/HELLP concerns or abdominal pain.",
    food: "Avoid alcohol and unnecessary medicines; review abnormal results with a clinician."
  },
  vitamin_d: {
    label: "Vitamin D",
    unit: "ng/mL",
    guide: "Useful when deficiency risk, bone pain, low sun exposure, or breastfeeding nutrition concerns exist.",
    food: "Discuss vitamin D and calcium needs, especially while breastfeeding."
  },
  b12: {
    label: "Vitamin B12",
    unit: "pg/mL",
    guide: "Useful with vegetarian/vegan diet, numbness, anemia, or fatigue.",
    food: "Discuss B12 supplementation if vegetarian/vegan or low."
  },
  blood_group_rh: {
    label: "Blood group and Rh",
    unit: "",
    guide: "Useful if Rh status is unknown, especially around bleeding, pregnancy loss, or pregnancy follow-up.",
    food: "No food action. Keep this as a reference fact for clinicians."
  },
  weight: {
    label: "Weight",
    unit: "kg",
    guide: "Trend marker only. Rapid swelling or sudden weight gain with hypertension symptoms is more important than weight alone.",
    food: "Focus on recovery, protein, fiber, and sustainable activity when cleared."
  }
};

const RISK_FLAGS = [
  ["positivePregnancyTest", "Positive/faint urine pregnancy test", "Adds beta-hCG follow-up"],
  ["gdm", "Gestational diabetes", "Adds glucose follow-up"],
  ["hypertension", "High BP or preeclampsia", "Adds early BP checks"],
  ["thyroid", "Thyroid disease or symptoms", "Adds TSH/Free T4 review"],
  ["cSection", "C-section", "Adds wound and infection watch"],
  ["heavyBleeding", "Heavy bleeding or transfusion", "Adds anemia checks"],
  ["anemia", "Known anemia/low iron", "Adds CBC/ferritin discussion"]
];

const SYMPTOMS = [
  ["severe_headache", "Severe headache", "Especially with BP, swelling, or vision change"],
  ["vision", "Vision changes", "Blur, spots, loss of vision, double vision"],
  ["chest", "Chest pain or trouble breathing", "Treat as urgent"],
  ["bleeding", "Heavy bleeding", "Soaking pads, clots, dizziness"],
  ["fever", "Fever or chills", "Temperature 38 C or higher"],
  ["leg", "One-sided leg pain/swelling", "Possible clot symptom"],
  ["fainting", "Fainting or seizure", "Treat as urgent"],
  ["self_harm", "Thoughts of self-harm or harming baby", "Immediate support needed"]
];

const BASELINE_TASKS = [
  {
    id: "day-3-contact",
    window: [2, 4],
    title: "Postnatal contact around day 3",
    tests: ["Symptoms", "Bleeding", "Temperature", "Breastfeeding", "BP if risk"],
    reason: "WHO-style early contact after discharge."
  },
  {
    id: "day-7-14",
    window: [7, 14],
    title: "Postnatal contact in days 7-14",
    tests: ["BP", "Wound if C-section", "Bleeding", "Mood", "Feeding"],
    reason: "Catches hypertension, infection, feeding, and recovery issues."
  },
  {
    id: "within-3-weeks",
    window: [7, 21],
    title: "Initial postpartum clinician contact",
    tests: ["BP", "Symptoms", "Mood screen", "Medication review"],
    reason: "ACOG recommends contact within the first 3 weeks."
  },
  {
    id: "six-week",
    window: [35, 49],
    title: "Six-week postpartum review",
    tests: ["Clinical exam", "Mood screen", "Bleeding", "Breastfeeding", "Family planning"],
    reason: "Core postnatal visit window and common point for lab review."
  },
  {
    id: "by-12-weeks",
    window: [50, 84],
    title: "Comprehensive postpartum visit by 12 weeks",
    tests: ["Physical recovery", "Mental health", "Chronic risk plan", "Nutrition"],
    reason: "ACOG recommends comprehensive assessment no later than 12 weeks."
  },
  {
    id: "one-year",
    window: [85, 365],
    title: "First-year recovery follow-up",
    tests: ["Mood", "Weight trend", "BP if elevated", "Diabetes risk if GDM"],
    reason: "Postpartum risks can continue through the first year."
  }
];

const RISK_TASKS = {
  gdm: [
    {
      id: "gdm-ogtt",
      window: [28, 84],
      title: "Post-GDM glucose screen",
      tests: ["75 g 2-hour OGTT", "Fasting glucose"],
      reason: "ACOG suggests 4-12 weeks; FOGSI guidance uses 6-12 weeks for women with GDM."
    }
  ],
  hypertension: [
    {
      id: "bp-3-10",
      window: [3, 10],
      title: "Early blood pressure check",
      tests: ["BP", "Symptoms", "Urine protein/labs if ordered"],
      reason: "Postpartum BP often peaks in the first week and severe values need fast treatment."
    }
  ],
  thyroid: [
    {
      id: "thyroid-6w",
      window: [35, 56],
      title: "Thyroid function review",
      tests: ["TSH", "Free T4 if ordered"],
      reason: "Useful with thyroid history, symptoms, dose changes, or new postpartum depression."
    },
    {
      id: "thyroid-4-8m",
      window: [120, 240],
      title: "Postpartum thyroiditis watch",
      tests: ["TSH", "Free T4 if symptomatic"],
      reason: "Hypothyroid symptoms commonly appear around 4-8 months postpartum."
    }
  ],
  heavyBleeding: [
    {
      id: "anemia-4-6",
      window: [28, 42],
      title: "Anemia follow-up",
      tests: ["CBC or Hb", "Ferritin if ordered"],
      reason: "CDC notes women at risk for anemia at 4-6 weeks postpartum should be screened."
    }
  ],
  anemia: [
    {
      id: "anemia-known",
      window: [21, 56],
      title: "Iron status check",
      tests: ["Hb", "Ferritin if ordered"],
      reason: "Known anemia needs response tracking and a clinician-reviewed iron plan."
    }
  ],
  cSection: [
    {
      id: "csection-wound",
      window: [3, 21],
      title: "C-section wound and infection watch",
      tests: ["Temperature", "Wound redness/discharge", "Pain"],
      reason: "Wound infection should be caught early."
    }
  ]
};

const DEFAULT_STATE = {
  profile: {
    name: "Mother",
    deliveryDate: "",
    deliveryType: "vaginal",
    feedingStatus: "breastfeeding",
    lastPeriodDate: "",
    doctorName: "",
    clinicalContext: "",
    riskFlags: {
      positivePregnancyTest: false,
      gdm: false,
      hypertension: false,
      thyroid: false,
      cSection: false,
      heavyBleeding: false,
      anemia: false
    }
  },
  symptoms: {},
  results: [],
  notes: []
};

let state = loadState();

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setupForms();
  const sharedUpdateNotice = applySharedUpdateFromHash();
  renderAll();
  if (sharedUpdateNotice) {
    showInlineNotice(sharedUpdateNotice, "Dashboard updated");
  }
});

function cacheElements() {
  [
    "profileTitle",
    "daysPostpartum",
    "metricGrid",
    "nextActions",
    "careBoard",
    "timelineList",
    "resultForm",
    "resultType",
    "resultDate",
    "resultValue",
    "resultNote",
    "resultsTable",
    "resultCount",
    "taskCount",
    "pasteReport",
    "parseReportBtn",
    "sampleBtn",
    "clearResultsBtn",
    "nutritionAdvice",
    "symptomList",
    "testGuide",
    "profileForm",
    "profileName",
    "deliveryDate",
    "deliveryType",
    "feedingStatus",
    "riskFlags",
    "saveProfileBtn",
    "exportBtn",
    "importInput",
    "urgentPanel",
    "timelineStatus",
    "lastSubmitted",
    "contextStatus",
    "historyStatus",
    "trendGrid",
    "hcgPanel",
    "noteForm",
    "noteDate",
    "noteType",
    "noteTitle",
    "noteText",
    "clearNotesBtn",
    "caseSummary",
    "noteCount",
    "noteList",
    "lastPeriodDate",
    "doctorName",
    "clinicalContext"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
}

function setupForms() {
  Object.entries(TESTS).forEach(([value, test]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = test.label;
    els.resultType.appendChild(option);
  });

  els.resultDate.value = todayISO();
  els.noteDate.value = todayISO();

  els.resultForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addResult({
      type: els.resultType.value,
      value: els.resultValue.value.trim(),
      date: els.resultDate.value || todayISO(),
      note: els.resultNote.value.trim()
    });
    els.resultValue.value = "";
    els.resultNote.value = "";
  });

  els.parseReportBtn.addEventListener("click", () => {
    const parsed = parseReport(els.pasteReport.value);
    if (!parsed.length) {
      showInlineNotice("No recognizable values found. Try labels like BP, Hb, TSH, EPDS, fasting glucose, or OGTT 2h.");
      return;
    }
    parsed.forEach(addResult);
    els.pasteReport.value = "";
  });

  els.sampleBtn.addEventListener("click", () => {
    els.pasteReport.value = [
      `Date: ${todayISO()}`,
      "BP: 124/80",
      "Temperature: 36.8 C",
      "Hb: 11.2 g/dL",
      "Ferritin: 22 ng/mL",
      "Fasting glucose: 92 mg/dL",
      "OGTT 2h: 128 mg/dL",
      "TSH: 2.8 mIU/L",
      "EPDS: 7"
    ].join("\n");
  });

  els.clearResultsBtn.addEventListener("click", () => {
    if (confirm("Clear all saved results from this browser?")) {
      state.results = [];
      saveState();
      renderAll();
    }
  });

  els.noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    addNote({
      type: els.noteType.value,
      date: els.noteDate.value || todayISO(),
      title: els.noteTitle.value.trim(),
      text: els.noteText.value.trim()
    });
    els.noteTitle.value = "";
    els.noteText.value = "";
  });

  els.clearNotesBtn.addEventListener("click", () => {
    if (confirm("Clear all saved care notes from this browser?")) {
      state.notes = [];
      saveState();
      renderAll();
    }
  });

  els.saveProfileBtn.addEventListener("click", saveProfileFromForm);
  els.profileForm.addEventListener("change", saveProfileFromForm);

  els.exportBtn.addEventListener("click", exportState);
  els.importInput.addEventListener("change", importState);

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });
}

function renderAll() {
  renderProfileForm();
  renderRiskFlags();
  renderSymptoms();
  renderHeader();
  renderStatusStrip();
  renderMetrics();
  renderTrendGrid();
  renderTimeline();
  renderResults();
  renderNotes();
  renderCaseSummary();
  renderAdvisor();
  renderHcgPanel();
  renderTestGuide();
  saveState();
}

function renderProfileForm() {
  els.profileName.value = state.profile.name || "";
  els.deliveryDate.value = state.profile.deliveryDate || "";
  els.deliveryType.value = state.profile.deliveryType || "vaginal";
  els.feedingStatus.value = state.profile.feedingStatus || "breastfeeding";
  els.lastPeriodDate.value = state.profile.lastPeriodDate || "";
  els.doctorName.value = state.profile.doctorName || "";
  els.clinicalContext.value = state.profile.clinicalContext || "";
}

function renderRiskFlags() {
  els.riskFlags.innerHTML = "";
  RISK_FLAGS.forEach(([key, label, help]) => {
    const wrapper = document.createElement("label");
    wrapper.className = "check-card";
    wrapper.innerHTML = `
      <input type="checkbox" data-risk="${key}" ${state.profile.riskFlags[key] ? "checked" : ""}>
      <span>${label}<small>${help}</small></span>
    `;
    wrapper.querySelector("input").addEventListener("change", (event) => {
      state.profile.riskFlags[key] = event.target.checked;
      if (key === "cSection" && event.target.checked) state.profile.deliveryType = "c-section";
      renderAll();
    });
    els.riskFlags.appendChild(wrapper);
  });
}

function renderSymptoms() {
  els.symptomList.innerHTML = "";
  SYMPTOMS.forEach(([key, label, help]) => {
    const wrapper = document.createElement("label");
    wrapper.className = "check-card";
    wrapper.innerHTML = `
      <input type="checkbox" data-symptom="${key}" ${state.symptoms[key] ? "checked" : ""}>
      <span>${label}<small>${help}</small></span>
    `;
    wrapper.querySelector("input").addEventListener("change", (event) => {
      state.symptoms[key] = event.target.checked;
      renderAll();
    });
    els.symptomList.appendChild(wrapper);
  });
}

function renderHeader() {
  const name = state.profile.name || "Mother";
  els.profileTitle.textContent = `${name} recovery plan`;
  const day = postpartumDay();
  els.daysPostpartum.textContent = day === null ? "Set delivery date" : `Day ${day} postpartum`;
}

function renderStatusStrip() {
  const day = postpartumDay();
  const latest = latestResult();
  const riskLabels = activeRiskLabels();
  const noteCount = state.notes.length;

  els.timelineStatus.textContent = day === null ? "Set delivery date" : `Day ${day}, ${timelinePhase(day)}`;
  els.lastSubmitted.textContent = latest
    ? `${formatDate(latest.date)} · ${TESTS[latest.type]?.label || latest.type}`
    : "No results yet";
  els.contextStatus.textContent = riskLabels.length ? riskLabels.join(", ") : "Baseline only";
  els.historyStatus.textContent = `${noteCount} ${noteCount === 1 ? "note" : "notes"}`;
}

function renderMetrics() {
  const day = postpartumDay();
  const tasks = getTasks();
  const openTasks = tasks.filter((task) => ["due", "overdue"].includes(task.status));
  const urgent = getUrgentItems();
  const riskCount = Object.values(state.profile.riskFlags).filter(Boolean).length;
  const latestBp = getLatest("blood_pressure");
  const latestMood = getLatest("epds");

  const metrics = [
    {
      label: "Postpartum day",
      value: day === null ? "-" : day,
      hint: day === null ? "Add delivery date in profile" : "Calculated from delivery date"
    },
    {
      label: "Open actions",
      value: openTasks.length,
      hint: openTasks.length ? "Due or overdue windows" : "No due windows today"
    },
    {
      label: "Risk factors",
      value: riskCount,
      hint: riskCount ? "Used to personalize tests" : "Baseline schedule only"
    },
    {
      label: "Latest BP / mood",
      value: `${latestBp ? latestBp.value : "-"} / ${latestMood ? latestMood.value : "-"}`,
      hint: urgent.length ? "Urgent flag present" : "Most recent entered values"
    }
  ];

  els.metricGrid.innerHTML = metrics
    .map((metric) => `
      <article class="metric">
        <span>${metric.label}</span>
        <strong>${metric.value}</strong>
        <p>${metric.hint}</p>
      </article>
    `)
    .join("");

  renderUrgentPanel(urgent);
}

function renderTrendGrid() {
  const trendCards = [
    buildHcgTrendCard(),
    buildLatestTrendCard("blood_pressure", "BP watch"),
    buildLatestTrendCard("hemoglobin", "Anemia watch", "ferritin"),
    buildLatestTrendCard("fasting_glucose", "Glucose watch", "ogtt_2h"),
    buildLatestTrendCard("tsh", "Thyroid watch", "free_t4")
  ];

  els.trendGrid.innerHTML = trendCards.map((card) => `
    <article class="trend-card">
      <span>${card.label}</span>
      <strong>${escapeHTML(card.value)}</strong>
      <p>${escapeHTML(card.hint)}</p>
    </article>
  `).join("");
}

function buildLatestTrendCard(type, label, pairedType) {
  const latest = getLatest(type);
  const paired = pairedType ? getLatest(pairedType) : null;
  if (!latest && !paired) {
    return { label, value: "-", hint: "No saved result yet" };
  }
  const result = latest || paired;
  const interpretation = interpretResult(result);
  const pairText = paired && latest ? `; ${TESTS[paired.type]?.label}: ${paired.value}` : "";
  return {
    label,
    value: `${result.value}${result.unit ? ` ${result.unit}` : ""}`,
    hint: `${formatDate(result.date)} · ${interpretation.label}${pairText}`
  };
}

function buildHcgTrendCard() {
  const hcg = analyzeHcgTrend();
  return {
    label: "hCG watch",
    value: hcg.displayValue,
    hint: hcg.shortMessage
  };
}

function renderUrgentPanel(urgent) {
  if (!urgent.length) {
    els.urgentPanel.classList.remove("is-visible");
    els.urgentPanel.innerHTML = "";
    return;
  }
  els.urgentPanel.classList.add("is-visible");
  els.urgentPanel.innerHTML = `
    <strong>Urgent review needed</strong>
    <span>${urgent.map((item) => item.message).join(" ")}</span>
  `;
}

function renderTimeline() {
  const tasks = getTasks();
  els.timelineList.innerHTML = tasks
    .map((task) => `
      <article class="timeline-row">
        <div class="timeline-date">${task.windowText || windowLabel(task.window)}</div>
        <div>
          <strong>${task.title}</strong>
          <p>${task.tests.join(", ")}. ${task.reason}</p>
        </div>
        <span class="chip ${statusClass(task.status)}">${task.statusLabel}</span>
      </article>
    `)
    .join("");
}

function renderResults() {
  const sorted = [...state.results].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  els.resultCount.textContent = `${sorted.length} ${sorted.length === 1 ? "entry" : "entries"}`;
  if (!sorted.length) {
    els.resultsTable.innerHTML = `<tr><td colspan="5"><div class="empty">No results yet. Add a lab value or paste report text.</div></td></tr>`;
    return;
  }
  els.resultsTable.innerHTML = sorted.map((result) => {
    const interpretation = interpretResult(result);
    return `
      <tr>
        <td>${formatDate(result.date)}</td>
        <td>${escapeHTML(result.label || TESTS[result.type]?.label || result.type)}</td>
        <td class="value-cell">${escapeHTML(result.value)} ${escapeHTML(result.unit || TESTS[result.type]?.unit || "")}</td>
        <td><span class="chip ${statusClass(interpretation.level)}">${interpretation.label}</span></td>
        <td>${escapeHTML(interpretation.message)}${result.note ? `<br><span class="muted">${escapeHTML(result.note)}</span>` : ""}</td>
      </tr>
    `;
  }).join("");
}

function renderNotes() {
  const sorted = [...state.notes].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  els.noteCount.textContent = `${sorted.length} ${sorted.length === 1 ? "note" : "notes"}`;
  if (!sorted.length) {
    els.noteList.innerHTML = `<div class="empty">No care notes yet. Add doctor advice, symptoms, food changes, supplements, or planned tests so history stays together.</div>`;
    return;
  }
  els.noteList.innerHTML = sorted.map((note) => `
    <article class="history-row">
      <div class="history-meta">${formatDate(note.date)}</div>
      <div>
        <strong>${escapeHTML(note.title || noteTypeLabel(note.type))}</strong>
        <p>${escapeHTML(note.text || "")}</p>
      </div>
      <span class="chip soft">${escapeHTML(noteTypeLabel(note.type))}</span>
    </article>
  `).join("");
}

function renderCaseSummary() {
  const riskLabels = activeRiskLabels();
  const latest = latestResult();
  const hcg = analyzeHcgTrend();
  const profile = state.profile;
  const summary = [
    ["Profile", `${profile.name || "Mother"} · ${profile.deliveryDate ? `delivery ${formatDate(profile.deliveryDate)}` : "delivery date not set"} · ${profile.deliveryType || "delivery type not set"}`],
    ["Risks", riskLabels.length ? riskLabels.join(", ") : "No risk flags selected"],
    ["Current hCG", hcg.shortMessage],
    ["Last result", latest ? `${TESTS[latest.type]?.label || latest.type}: ${latest.value} ${latest.unit || ""} on ${formatDate(latest.date)}` : "No lab result saved"],
    ["Clinical context", profile.clinicalContext || "No context note saved"],
    ["Doctor/clinic", profile.doctorName || "Not set"]
  ];

  els.caseSummary.innerHTML = summary.map(([label, text]) => `
    <div>
      <span>${label}</span>
      <p>${escapeHTML(text)}</p>
    </div>
  `).join("");
}

function renderAdvisor() {
  const tasks = getTasks();
  const due = tasks.filter((task) => ["due", "overdue"].includes(task.status));
  els.taskCount.textContent = `${due.length} open`;

  els.nextActions.innerHTML = due.length
    ? due.slice(0, 6).map((task) => `
      <div class="action-item">
        <span class="chip ${statusClass(task.status)}">${task.statusLabel}</span>
        <strong>${task.title}</strong>
        <p>${task.tests.join(", ")}. ${task.reason}</p>
      </div>
    `).join("")
    : `<div class="empty">No due tests based on current delivery date and risk flags. Keep symptoms and scheduled visits updated.</div>`;

  const board = buildCareBoard();
  els.careBoard.innerHTML = board.map((item) => `
    <div class="board-item">
      <span class="chip ${statusClass(item.level)}">${item.label}</span>
      <p>${item.message}</p>
    </div>
  `).join("");

  renderNutritionAdvice();
}

function renderHcgPanel() {
  const analysis = analyzeHcgTrend();
  els.hcgPanel.classList.remove("is-quiet");
  els.hcgPanel.innerHTML = `
    <div class="panel-header">
      <h3>Beta-hCG watch</h3>
      <span class="chip ${statusClass(analysis.level)}">${analysis.label}</span>
    </div>
    <div class="action-item">
      <strong>${analysis.title}</strong>
      <p>${analysis.message}</p>
      <p>${analysis.nextStep}</p>
    </div>
  `;
}

function renderNutritionAdvice() {
  const suggestions = new Map();
  const latestHb = getLatest("hemoglobin");
  const latestFerritin = getLatest("ferritin");
  const latestFasting = getLatest("fasting_glucose");
  const latestOgtt = getLatest("ogtt_2h");
  const latestTsh = getLatest("tsh");

  if (state.profile.feedingStatus === "breastfeeding" || state.profile.feedingStatus === "mixed") {
    suggestions.set("breastfeeding", {
      title: "Breastfeeding nutrition review",
      text: "Discuss calcium, vitamin D, iodine, B12, hydration, and enough protein. Needs vary by diet and labs."
    });
  }

  if (state.profile.riskFlags.anemia || state.profile.riskFlags.heavyBleeding || isFlagged(latestHb) || isFlagged(latestFerritin)) {
    suggestions.set("iron", {
      title: "Iron and anemia support",
      text: "Ask whether CBC/ferritin show iron deficiency and whether iron treatment is needed. Food support: dal, chana, rajma, greens, eggs/meat if used, and vitamin C with meals."
    });
  }

  if (state.profile.riskFlags.gdm || isFlagged(latestFasting) || isFlagged(latestOgtt)) {
    suggestions.set("glucose", {
      title: "Glucose risk plan",
      text: "Ask for a post-GDM prevention plan. Food support: protein and fiber at each meal, fewer sweet drinks, and post-meal walks when cleared."
    });
  }

  if (state.profile.riskFlags.thyroid || isFlagged(latestTsh)) {
    suggestions.set("thyroid", {
      title: "Thyroid follow-up",
      text: "Do not self-adjust thyroid medicine. Ask about TSH/Free T4 timing and how supplements should be spaced from thyroid tablets."
    });
  }

  if (!suggestions.size) {
    suggestions.set("baseline", {
      title: "Baseline recovery meals",
      text: "Prioritize regular meals, protein, fiber, fluids, and culturally familiar foods. Use supplements only with clinician guidance."
    });
  }

  els.nutritionAdvice.innerHTML = [...suggestions.values()].map((item) => `
    <div class="advice-card">
      <strong>${item.title}</strong>
      <p>${item.text}</p>
    </div>
  `).join("");
}

function renderTestGuide() {
  els.testGuide.innerHTML = Object.entries(TESTS).map(([key, test]) => `
    <article class="guide-card">
      <span class="chip soft">${test.unit}</span>
      <strong>${test.label}</strong>
      <p>${test.guide}</p>
      <p>${test.food}</p>
    </article>
  `).join("");
}

function buildCareBoard() {
  const items = [];
  const urgent = getUrgentItems();
  urgent.forEach((item) => items.push({ level: "danger", label: "Urgent", message: item.message }));

  const hcg = analyzeHcgTrend();
  if (hcg.level !== "info" || state.profile.riskFlags.positivePregnancyTest || getResults("beta_hcg").length) {
    items.push({ level: hcg.level, label: "hCG", message: `${hcg.message} ${hcg.nextStep}` });
  }

  const flaggedResults = state.results
    .map((result) => ({ result, interpretation: interpretResult(result) }))
    .filter((entry) => ["danger", "warning"].includes(entry.interpretation.level));

  flaggedResults.slice(0, 5).forEach(({ result, interpretation }) => {
    items.push({
      level: interpretation.level,
      label: TESTS[result.type]?.label || result.type,
      message: `${formatDate(result.date)}: ${result.value} ${result.unit || ""}. ${interpretation.message}`
    });
  });

  const riskLabels = RISK_FLAGS
    .filter(([key]) => state.profile.riskFlags[key])
    .map(([, label]) => label);
  if (riskLabels.length) {
    items.push({
      level: "info",
      label: "Context",
      message: `Known risks: ${riskLabels.join(", ")}. The schedule is adjusted for these.`
    });
  }

  const due = getTasks().filter((task) => ["due", "overdue"].includes(task.status));
  if (due.length) {
    items.push({
      level: "warning",
      label: "Open follow-up",
      message: `${due.length} test or visit window is open. Prioritize overdue items and symptom-driven care.`
    });
  }

  if (!items.length) {
    items.push({
      level: "success",
      label: "Stable",
      message: "No urgent values or symptoms are currently entered. Keep follow-up visits and update new results."
    });
  }

  return items;
}

function getTasks() {
  const tasks = [...BASELINE_TASKS];
  Object.entries(state.profile.riskFlags).forEach(([key, enabled]) => {
    if (enabled && RISK_TASKS[key]) tasks.push(...RISK_TASKS[key]);
  });
  tasks.push(...getDynamicTasks());

  const day = postpartumDay();
  return tasks
    .map((task) => {
      if (task.status) return { ...task, statusLabel: statusLabel(task.status) };
      const status = taskStatus(task, day);
      return { ...task, status, statusLabel: statusLabel(status) };
    })
    .sort((a, b) => {
      const rank = { overdue: 0, due: 1, upcoming: 2, complete: 3, past: 4, unknown: 5 };
      return rank[a.status] - rank[b.status] || a.window[0] - b.window[0];
    });
}

function getDynamicTasks() {
  const tasks = [];
  const hcgResults = getResults("beta_hcg");
  const urineConcern = getResults("urine_pregnancy_test").some((result) => /positive|faint/i.test(result.value));
  const hcgConcern = state.profile.riskFlags.positivePregnancyTest || hcgResults.length || urineConcern;

  if (hcgConcern && !hcgResults.length) {
    tasks.push({
      id: "hcg-now",
      window: [0, 365],
      windowText: "Now",
      title: "Quantitative serum beta-hCG",
      tests: ["Beta-hCG blood test"],
      reason: "Use blood hCG to confirm level after a positive/faint urine result; urine strips do not determine pregnancy location.",
      status: "due"
    });
  }

  if (hcgResults.length === 1) {
    const first = hcgResults[0];
    const daysSince = daysBetween(first.date, todayISO());
    const status = daysSince < 2 ? "upcoming" : daysSince <= 3 ? "due" : "overdue";
    tasks.push({
      id: "hcg-repeat",
      window: [0, 365],
      windowText: `48h after ${formatDate(first.date)}`,
      title: "Repeat quantitative beta-hCG",
      tests: ["Repeat beta-hCG at about 48 hours"],
      reason: "Serial hCG trend is more useful than a single number for pregnancy of unknown location.",
      status
    });
  }

  if (hcgResults.length >= 2) {
    tasks.push({
      id: "hcg-trend-review",
      window: [0, 365],
      windowText: "Trend ready",
      title: "Review beta-hCG trend with clinician",
      tests: ["Trend review", "Ultrasound if indicated"],
      reason: analyzeHcgTrend().shortMessage,
      status: "complete"
    });
  }

  return tasks;
}

function taskStatus(task, day) {
  if (day === null) return "unknown";
  const [start, end] = task.window;
  if (day < start) return "upcoming";
  if (day >= start && day <= end) return "due";
  if (day > end && !hasRelevantResult(task)) return "overdue";
  return "past";
}

function hasRelevantResult(task) {
  const labels = task.tests.join(" ").toLowerCase();
  return state.results.some((result) => {
    const resultLabel = `${TESTS[result.type]?.label || ""} ${result.type}`.toLowerCase();
    return labels.includes("bp") && result.type === "blood_pressure"
      || labels.includes("glucose") && ["fasting_glucose", "ogtt_2h"].includes(result.type)
      || labels.includes("tsh") && result.type === "tsh"
      || labels.includes("hb") && result.type === "hemoglobin"
      || labels.includes("ferritin") && result.type === "ferritin"
      || labels.includes("mood") && result.type === "epds"
      || labels.includes(resultLabel);
  });
}

function addResult(input) {
  const test = TESTS[input.type] || { label: input.type, unit: "" };
  state.results.push({
    id: `result-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: input.date || todayISO(),
    type: input.type,
    label: input.label || test.label,
    value: String(input.value || "").trim(),
    unit: input.unit || test.unit,
    note: input.note || ""
  });
  saveState();
  renderAll();
}

function addNote(input) {
  state.notes.push({
    id: `note-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    date: input.date || todayISO(),
    type: input.type || "general",
    title: input.title || noteTypeLabel(input.type),
    text: input.text || ""
  });
  saveState();
  renderAll();
}

function parseReport(text) {
  const dateMatch = text.match(/\bdate\s*[:\-]\s*(\d{4}-\d{2}-\d{2}|\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/i);
  const date = dateMatch ? normalizeDate(dateMatch[1]) : todayISO();
  const patterns = [
    ["beta_hcg", /\b(?:beta[-\s]?hcg|b[-\s]?hcg|quantitative hcg|serum hcg|hcg)\s*[:\-]?\s*(\d{1,7}(?:\.\d+)?)/i],
    ["blood_pressure", /\b(?:bp|blood pressure)\s*[:\-]?\s*(\d{2,3}\s*\/\s*\d{2,3})/i],
    ["temperature", /\b(?:temp|temperature)\s*[:\-]?\s*(\d{2}(?:\.\d)?)/i],
    ["hemoglobin", /\b(?:hb|hgb|hemoglobin)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
    ["wbc", /\b(?:wbc|white blood cells?)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
    ["ferritin", /\bferritin\s*[:\-]?\s*(\d{1,4}(?:\.\d+)?)/i],
    ["serum_iron", /\b(?:serum iron|iron)\s*[:\-]?\s*(\d{1,3}(?:\.\d+)?)/i],
    ["transferrin_saturation", /\b(?:transferrin saturation|tsat|t sat|iron saturation)\s*[:\-]?\s*(\d{1,3}(?:\.\d+)?)/i],
    ["fasting_glucose", /\b(?:fasting glucose|fbs|fasting sugar)\s*[:\-]?\s*(\d{2,3}(?:\.\d+)?)/i],
    ["ogtt_2h", /\b(?:ogtt\s*2h|ogtt\s*2 hr|2h\s*ogtt|2 hour glucose|ppbs)\s*[:\-]?\s*(\d{2,3}(?:\.\d+)?)/i],
    ["tsh", /\btsh\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
    ["free_t4", /\b(?:free t4|ft4)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
    ["platelets", /\bplatelets?\s*[:\-]?\s*(\d{2,4}(?:\.\d+)?)/i],
    ["creatinine", /\bcreatinine\s*[:\-]?\s*(\d(?:\.\d+)?)/i],
    ["urine_pcr", /\b(?:urine protein\/creatinine|protein creatinine ratio|upcr|pcr)\s*[:\-]?\s*(\d(?:\.\d+)?|\d{2,4})/i],
    ["alt_ast", /\b(?:alt|ast|sgpt|sgot)\s*[:\-]?\s*(\d{1,4}(?:\.\d+)?)/i],
    ["vitamin_d", /\b(?:vitamin d|25-oh d)\s*[:\-]?\s*(\d{1,3}(?:\.\d+)?)/i],
    ["b12", /\b(?:b12|vitamin b12)\s*[:\-]?\s*(\d{2,5}(?:\.\d+)?)/i],
    ["epds", /\b(?:epds|mood score|depression score)\s*[:\-]?\s*(\d{1,2})/i],
    ["weight", /\bweight\s*[:\-]?\s*(\d{2,3}(?:\.\d+)?)/i]
  ];

  const parsed = [];
  patterns.forEach(([type, regex]) => {
    const match = text.match(regex);
    if (match) {
      parsed.push({ type, value: match[1].replace(/\s+/g, ""), date, note: "Parsed from pasted report" });
    }
  });
  return parsed;
}

function interpretResult(result) {
  const value = String(result.value || "").trim();
  const numeric = parseFloat(value);

  if (result.type === "urine_pregnancy_test") {
    if (/positive|faint/i.test(value)) {
      return warning("Confirm", "Positive/faint urine test. Confirm with quantitative serum beta-hCG; urine tests do not confirm pregnancy location.");
    }
    if (/negative/i.test(value)) {
      return neutral("Logged", "A negative urine test can be repeated if timing is early or symptoms continue.");
    }
    return neutral("Logged", "Use the kit reading window and confirm with blood beta-hCG if clinically important.");
  }

  if (result.type === "beta_hcg") {
    const analysis = analyzeHcgTrend();
    if (numeric >= 1500) {
      return warning("Ultrasound threshold", "hCG is at/above a common transvaginal ultrasound decision threshold. Location still needs clinician/scan correlation.");
    }
    if (postpartumDay() !== null && postpartumDay() > 21 && numeric > 5) {
      return warning("Persistent hCG", "hCG persisting beyond about 3 weeks postpartum needs clinician review for new pregnancy, retained tissue, or other causes.");
    }
    return neutral(analysis.label, analysis.shortMessage);
  }

  if (result.type === "blood_pressure") {
    const bp = parseBP(value);
    if (!bp) return neutral("Needs review", "Use format like 122/78.");
    if (bp.systolic >= 160 || bp.diastolic >= 110) {
      return danger("Urgent", "Severe-range BP. Seek urgent medical care, especially with headache, vision changes, chest pain, or shortness of breath.");
    }
    if (bp.systolic >= 140 || bp.diastolic >= 90) {
      return warning("High", "Postpartum BP is high. Contact clinician and repeat as instructed.");
    }
    return success("In range", "No high BP flag from this reading.");
  }

  if (result.type === "temperature") {
    if (numeric >= 38) return danger("Urgent", "Fever at or above 38 C after delivery needs clinician review.");
    return success("Logged", "No fever flag from this value.");
  }

  if (result.type === "epds") {
    if (numeric >= 13) return warning("Review", "Score is in a range commonly used for depression follow-up. Arrange clinician review.");
    if (numeric >= 10) return warning("Watch", "Mild elevation. Repeat screen and discuss if symptoms persist.");
    return success("Lower", "No score-based depression flag, but symptoms still matter.");
  }

  if (result.type === "fasting_glucose") {
    if (numeric >= 126) return warning("Diabetes-range", "Fasting glucose is diabetes-range by common nonpregnant criteria. Confirm with clinician.");
    if (numeric >= 100) return warning("Impaired", "Fasting glucose is above normal. Discuss diabetes-prevention follow-up.");
    return success("In range", "No fasting glucose flag.");
  }

  if (result.type === "ogtt_2h") {
    if (numeric >= 200) return warning("Diabetes-range", "2-hour OGTT is diabetes-range by common criteria. Confirm with clinician.");
    if (numeric >= 140) return warning("Impaired", "2-hour OGTT suggests impaired glucose tolerance. Discuss prevention plan.");
    return success("In range", "No 2-hour glucose flag.");
  }

  if (result.type === "hemoglobin") {
    if (numeric && numeric < 10) return warning("Low", "Hemoglobin is low by common postpartum anemia thresholds. Discuss treatment and iron studies.");
    if (numeric && numeric < 12) return warning("Borderline", "Hemoglobin may be borderline or low depending on lab range and symptoms.");
    return neutral("Logged", "Use the lab reference range and symptoms for interpretation.");
  }

  if (result.type === "wbc") {
    if (numeric && numeric > 15) return warning("Review", "WBC may be elevated, but postpartum timing and infection symptoms matter. Review with clinician if fever/pain/discharge.");
    return neutral("Logged", "Use lab reference range and symptoms for CBC interpretation.");
  }

  if (result.type === "ferritin") {
    // Ferritin can be falsely reassuring in the first 6 weeks postpartum because it rises with inflammation.
    if (postpartumDay() !== null && postpartumDay() < 42) return neutral("Early postpartum", "Ferritin may be distorted by inflammation in the first 6 weeks. Interpret with CBC, symptoms, and clinician context.");
    if (numeric && numeric < 30) return warning("Low stores?", "Ferritin may suggest low iron stores, but inflammation and lab ranges matter.");
    return neutral("Logged", "Use lab range and clinician context.");
  }

  if (result.type === "transferrin_saturation") {
    if (numeric && numeric < 20) return warning("Low?", "Transferrin saturation may suggest low available iron when paired with ferritin/TIBC and CBC.");
    return neutral("Logged", "Use with ferritin/TIBC and lab range.");
  }

  if (result.type === "serum_iron") {
    return neutral("Logged", "Serum iron varies through the day and should be interpreted with ferritin, TIBC/TSAT, CBC, and symptoms.");
  }

  if (result.type === "tsh") {
    if (numeric && (numeric < 0.4 || numeric > 4.5)) {
      return warning("Review", "TSH is outside many adult reference ranges. Postpartum thyroid issues need clinician interpretation.");
    }
    return neutral("Logged", "TSH ranges vary by lab, symptoms, and medication status.");
  }

  if (result.type === "platelets") {
    if (numeric && numeric < 100) return danger("Urgent review", "Low platelets can be serious postpartum, especially with hypertension symptoms.");
    if (numeric && numeric < 150) return warning("Low", "Platelets are below many lab reference ranges. Discuss with clinician.");
    return neutral("Logged", "Use lab reference range.");
  }

  if (result.type === "creatinine") {
    if (numeric && numeric > 1.1) return warning("Review", "Creatinine may be elevated. Important with BP or preeclampsia concerns.");
    return neutral("Logged", "Use lab reference range.");
  }

  if (result.type === "urine_pcr") {
    if (numeric && numeric >= 0.3) return warning("Proteinuria?", "Protein/creatinine ratio may be elevated by common preeclampsia criteria. Review with BP, symptoms, platelets, creatinine, and liver enzymes.");
    return neutral("Logged", "Use lab units/reference range and BP context.");
  }

  if (["alt_ast", "vitamin_d", "b12", "free_t4", "blood_group_rh", "weight"].includes(result.type)) {
    return neutral("Logged", "Use the lab reference range, symptoms, and clinician context.");
  }

  return neutral("Logged", "Saved for trend review.");
}

function getUrgentItems() {
  const items = [];
  SYMPTOMS.forEach(([key, label]) => {
    if (state.symptoms[key]) items.push({ type: "symptom", message: `${label} is checked.` });
  });
  state.results.forEach((result) => {
    const interpretation = interpretResult(result);
    if (interpretation.level === "danger") {
      items.push({ type: "result", message: `${TESTS[result.type]?.label || result.type}: ${interpretation.message}` });
    }
  });
  return items;
}

function saveProfileFromForm() {
  state.profile.name = els.profileName.value.trim() || "Mother";
  state.profile.deliveryDate = els.deliveryDate.value;
  state.profile.deliveryType = els.deliveryType.value;
  state.profile.feedingStatus = els.feedingStatus.value;
  state.profile.lastPeriodDate = els.lastPeriodDate.value;
  state.profile.doctorName = els.doctorName.value.trim();
  state.profile.clinicalContext = els.clinicalContext.value.trim();
  if (state.profile.deliveryType === "c-section") state.profile.riskFlags.cSection = true;
  saveState();
  renderAll();
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    return mergeState(DEFAULT_STATE, JSON.parse(raw));
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function mergeState(base, saved) {
  return {
    profile: {
      ...base.profile,
      ...(saved.profile || {}),
      riskFlags: { ...base.profile.riskFlags, ...(saved.profile?.riskFlags || {}) }
    },
    symptoms: { ...base.symptoms, ...(saved.symptoms || {}) },
    results: Array.isArray(saved.results) ? saved.results : [],
    notes: Array.isArray(saved.notes) ? saved.notes : []
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state, null, 2));
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `postpartum-care-${todayISO()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importState(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = mergeState(DEFAULT_STATE, JSON.parse(reader.result));
      saveState();
      renderAll();
    } catch {
      showInlineNotice("Import failed. Please use a JSON export from this dashboard.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function applySharedUpdateFromHash() {
  const payload = readSharedUpdatePayload();
  if (!payload) return "";

  let addedResults = 0;
  let addedNotes = 0;

  if (payload.riskFlags && typeof payload.riskFlags === "object") {
    state.profile.riskFlags = {
      ...state.profile.riskFlags,
      ...payload.riskFlags
    };
  }

  if (typeof payload.clinicalContextAppend === "string" && payload.clinicalContextAppend.trim()) {
    const contextLine = payload.clinicalContextAppend.trim();
    if (!state.profile.clinicalContext.includes(contextLine)) {
      state.profile.clinicalContext = [state.profile.clinicalContext, contextLine].filter(Boolean).join("\n");
    }
  }

  if (Array.isArray(payload.results)) {
    payload.results.forEach((entry) => {
      const result = normalizeSharedResult(entry);
      if (result && !hasResult(result)) {
        state.results.push(result);
        addedResults += 1;
      }
    });
  }

  if (Array.isArray(payload.notes)) {
    payload.notes.forEach((entry) => {
      const note = normalizeSharedNote(entry);
      if (note && !hasNote(note)) {
        state.notes.push(note);
        addedNotes += 1;
      }
    });
  }

  saveState();
  clearSharedUpdateHash();

  if (!addedResults && !addedNotes) {
    return "This Telegram update is already listed in this browser.";
  }
  return `Added ${addedResults} result${addedResults === 1 ? "" : "s"} and ${addedNotes} care note${addedNotes === 1 ? "" : "s"} from Telegram.`;
}

function readSharedUpdatePayload() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return null;
  const params = new URLSearchParams(hash);
  const encoded = params.get("add") || params.get("update");
  if (!encoded) return null;

  try {
    const base64 = encoded.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(encoded.length / 4) * 4, "=");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}

function normalizeSharedResult(entry) {
  if (!entry || typeof entry !== "object" || !entry.type || !entry.value) return null;
  const test = TESTS[entry.type] || { label: entry.type, unit: "" };
  return {
    id: String(entry.id || `shared-result-${entry.date || todayISO()}-${entry.type}`),
    date: entry.date || todayISO(),
    type: entry.type,
    label: entry.label || test.label,
    value: String(entry.value).trim(),
    unit: entry.unit ?? test.unit,
    note: entry.note || ""
  };
}

function normalizeSharedNote(entry) {
  if (!entry || typeof entry !== "object" || (!entry.title && !entry.text)) return null;
  return {
    id: String(entry.id || `shared-note-${entry.date || todayISO()}-${Date.now()}`),
    date: entry.date || todayISO(),
    type: entry.type || "general",
    title: entry.title || noteTypeLabel(entry.type),
    text: entry.text || ""
  };
}

function hasResult(result) {
  return state.results.some((item) => {
    return item.id === result.id
      || (item.date === result.date && item.type === result.type && item.value === result.value && item.note === result.note);
  });
}

function hasNote(note) {
  return state.notes.some((item) => {
    return item.id === note.id
      || (item.date === note.date && item.type === note.type && item.title === note.title && item.text === note.text);
  });
}

function clearSharedUpdateHash() {
  if (!window.history?.replaceState) return;
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

function postpartumDay() {
  if (!state.profile.deliveryDate) return null;
  const start = new Date(`${state.profile.deliveryDate}T00:00:00`);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(0, Math.floor((today - start) / 86400000));
}

function getLatest(type) {
  return [...state.results]
    .filter((result) => result.type === type)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))[0];
}

function getResults(type) {
  return [...state.results]
    .filter((result) => result.type === type)
    .sort((a, b) => (a.date || "").localeCompare(b.date || ""));
}

function latestResult() {
  return [...state.results].sort((a, b) => (b.date || "").localeCompare(a.date || ""))[0];
}

function activeRiskLabels() {
  return RISK_FLAGS
    .filter(([key]) => state.profile.riskFlags[key])
    .map(([, label]) => label);
}

function timelinePhase(day) {
  if (day <= 3) return "early recovery";
  if (day <= 14) return "first fortnight";
  if (day <= 42) return "six-week window";
  if (day <= 84) return "12-week care window";
  return "first-year follow-up";
}

function analyzeHcgTrend() {
  const results = getResults("beta_hcg");
  if (!results.length) {
    return {
      level: state.profile.riskFlags.positivePregnancyTest ? "warning" : "info",
      label: state.profile.riskFlags.positivePregnancyTest ? "Test due" : "Not started",
      title: "No quantitative beta-hCG saved",
      displayValue: "-",
      shortMessage: state.profile.riskFlags.positivePregnancyTest ? "Blood beta-hCG is due now" : "No hCG concern selected",
      message: "No beta-hCG blood value is saved yet.",
      nextStep: state.profile.riskFlags.positivePregnancyTest
        ? "Order quantitative serum beta-hCG, then repeat at about 48 hours if pregnancy location is not confirmed."
        : "Enable the positive/faint urine test risk flag or add a beta-hCG result if hCG tracking is needed."
    };
  }

  const latest = results[results.length - 1];
  const latestValue = Number.parseFloat(latest.value);
  const persistentPostpartum = postpartumDay() !== null && postpartumDay() > 21 && latestValue > 5;

  if (results.length === 1) {
    const dueDate = addDays(latest.date, 2);
    return {
      level: persistentPostpartum ? "warning" : "warning",
      label: "Repeat needed",
      title: "Only one beta-hCG value saved",
      displayValue: `${latest.value}${latest.unit ? ` ${latest.unit}` : ""}`,
      shortMessage: `Repeat around ${formatDate(dueDate)}`,
      message: `Latest beta-hCG is ${latest.value} ${latest.unit || ""} on ${formatDate(latest.date)}.`,
      nextStep: `${persistentPostpartum ? "Because hCG is still positive after the usual postpartum clearance window, discuss new pregnancy, retained tissue, or other causes. " : ""}Repeat quantitative beta-hCG after about 48 hours, same lab if possible.`
    };
  }

  const previous = results[results.length - 2];
  const previousValue = Number.parseFloat(previous.value);
  const deltaPercent = previousValue ? ((latestValue - previousValue) / previousValue) * 100 : null;
  const deltaText = deltaPercent === null ? "trend unavailable" : `${deltaPercent > 0 ? "+" : ""}${deltaPercent.toFixed(0)}%`;
  const displayValue = `${latest.value}${latest.unit ? ` ${latest.unit}` : ""}`;

  // NICE PUL guidance uses 48-hour hCG movement for triage; it still cannot exclude ectopic pregnancy by itself.
  if (deltaPercent !== null && deltaPercent > 63) {
    return {
      level: latestValue >= 1500 || persistentPostpartum ? "warning" : "success",
      label: "Rising",
      title: "Beta-hCG rose more than 63%",
      displayValue,
      shortMessage: `${deltaText} from prior value`,
      message: `hCG changed ${deltaText} from ${previous.value} to ${latest.value}. This pattern can fit a developing intrauterine pregnancy, but ectopic pregnancy is not excluded.`,
      nextStep: `${latestValue >= 1500 ? "Discuss earlier transvaginal ultrasound because hCG is at/above 1500 IU/L. " : "Plan ultrasound timing with clinician. "}${persistentPostpartum ? "Because this is after the usual postpartum clearance window, review promptly. " : ""}`
    };
  }

  if (deltaPercent !== null && deltaPercent < -50) {
    return {
      level: persistentPostpartum ? "warning" : "info",
      label: "Falling",
      title: "Beta-hCG fell more than 50%",
      displayValue,
      shortMessage: `${deltaText} from prior value`,
      message: `hCG changed ${deltaText} from ${previous.value} to ${latest.value}. NICE treats this as unlikely to continue, but this still needs safety-netting.`,
      nextStep: "Follow clinician instructions and seek urgent care for pain, fainting, heavy bleeding, or worsening symptoms."
    };
  }

  return {
    level: "warning",
    label: "Indeterminate",
    title: "Beta-hCG trend needs clinical review",
    displayValue,
    shortMessage: `${deltaText} from prior value`,
    message: `hCG changed ${deltaText} from ${previous.value} to ${latest.value}. This is not a clearly reassuring trend.`,
    nextStep: "Arrange gyne/early-pregnancy review. Further hCG testing or transvaginal ultrasound may be needed based on symptoms and hCG level."
  };
}

function isFlagged(result) {
  if (!result) return false;
  return ["danger", "warning"].includes(interpretResult(result).level);
}

function parseBP(value) {
  const match = String(value).match(/(\d{2,3})\s*\/\s*(\d{2,3})/);
  if (!match) return null;
  return { systolic: Number(match[1]), diastolic: Number(match[2]) };
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(value, amount) {
  const date = new Date(`${value}T00:00:00`);
  date.setDate(date.getDate() + amount);
  return date.toISOString().slice(0, 10);
}

function daysBetween(start, end) {
  const startDate = new Date(`${start}T00:00:00`);
  const endDate = new Date(`${end}T00:00:00`);
  return Math.floor((endDate - startDate) / 86400000);
}

function normalizeDate(value) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  const parts = value.split(/[\/\-]/).map(Number);
  if (parts.length !== 3) return todayISO();
  const [first, second, yearRaw] = parts;
  const year = yearRaw < 100 ? 2000 + yearRaw : yearRaw;
  const day = first > 12 ? first : second;
  const month = first > 12 ? second : first;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatDate(value) {
  if (!value) return "-";
  return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(`${value}T00:00:00`));
}

function windowLabel([start, end]) {
  if (start === end) return `Day ${start}`;
  if (end < 30) return `Days ${start}-${end}`;
  return `Days ${start}-${end}`;
}

function statusLabel(status) {
  return {
    due: "Due now",
    overdue: "Overdue",
    upcoming: "Upcoming",
    past: "Past window",
    complete: "Logged",
    unknown: "Needs date",
    warning: "Review",
    danger: "Urgent",
    success: "OK",
    info: "Info"
  }[status] || status;
}

function statusClass(status) {
  if (["danger", "overdue"].includes(status)) return "danger";
  if (["warning", "due"].includes(status)) return "warn";
  if (["success", "complete"].includes(status)) return "success";
  return "";
}

function noteTypeLabel(type) {
  return {
    report: "Report/result",
    doctor: "Doctor advice",
    symptom: "Symptom update",
    food: "Food/supplement",
    test: "Next test plan",
    general: "General note"
  }[type] || "General note";
}

function danger(label, message) {
  return { level: "danger", label, message };
}

function warning(label, message) {
  return { level: "warning", label, message };
}

function success(label, message) {
  return { level: "success", label, message };
}

function neutral(label, message) {
  return { level: "info", label, message };
}

function showInlineNotice(message, title = "Check input") {
  els.urgentPanel.classList.add("is-visible");
  els.urgentPanel.innerHTML = `<strong>${escapeHTML(title)}</strong><span>${escapeHTML(message)}</span>`;
  window.setTimeout(() => renderUrgentPanel(getUrgentItems()), 3500);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
