const STORAGE_KEY = "postpartum-care-tracker-v1";

const TESTS = {
  urine_pregnancy_test: {
    label: "Home urine pregnancy test",
    unit: "qualitative",
    guide: "A home urine test can show hCG presence, but it does not measure the level or confirm pregnancy location. A faint line should be confirmed with quantitative serum beta-hCG when timing/context matters.",
    food: "No food or supplement decision should be based on a urine test line. Use it to trigger confirmation and clinician questions."
  },
  urine_leukocyte_esterase: {
    label: "Urine leukocyte esterase",
    unit: "",
    guide: "A positive leukocyte esterase result can point to urine inflammation or UTI risk. In pregnancy, culture confirmation matters.",
    food: "Do not use diet or cranberry as treatment. Ask the gyne about urine culture and pregnancy-safe treatment if needed."
  },
  urine_pus_cells: {
    label: "Urine pus cells",
    unit: "/HPF",
    guide: "Pus cells above the lab range can suggest pyuria. It is not the same as a culture-proven UTI.",
    food: "Hydration can support comfort, but pregnancy UTI decisions need culture/symptom review."
  },
  urine_nitrite: {
    label: "Urine nitrite",
    unit: "",
    guide: "Nitrite can support bacterial UTI suspicion when positive, but a negative result does not fully exclude UTI.",
    food: "Do not self-start antibiotics. Culture/sensitivity and clinician review decide treatment."
  },
  urine_bacteria: {
    label: "Urine bacteria",
    unit: "",
    guide: "Bacteria seen on urine microscopy supports infection/contamination review and should be matched with symptoms and culture.",
    food: "Food changes do not treat bacteriuria in pregnancy."
  },
  urine_epithelial_cells: {
    label: "Urine epithelial cells",
    unit: "/HPF",
    guide: "Epithelial cells can reflect sample quality/contamination when high, so interpret with urine culture and symptoms.",
    food: "No food action. Use clean-catch collection if repeating urine tests."
  },
  urine_rbc: {
    label: "Urine RBC",
    unit: "/HPF",
    guide: "Blood cells in urine need clinician context, especially with pain, fever, stones, or UTI symptoms.",
    food: "No food action. Do not ignore visible blood or flank pain."
  },
  urine_protein: {
    label: "Urine protein",
    unit: "",
    guide: "Protein in urine is interpreted with BP, kidney markers, symptoms, and pregnancy week.",
    food: "No diet-only fix. Abnormal protein needs clinician review."
  },
  urine_ketones: {
    label: "Urine ketones",
    unit: "",
    guide: "Ketones can appear with poor intake, vomiting, dehydration, or fasting and need pregnancy context.",
    food: "Regular meals and fluids help, but severe vomiting/dehydration needs medical care."
  },
  urine_culture: {
    label: "Urine culture + sensitivity",
    unit: "",
    guide: "Culture identifies significant bacteriuria and antibiotic sensitivity. It is the decision-grade urine test in pregnancy.",
    food: "Do not use supplements or home remedies instead of clinician-directed pregnancy-safe antibiotics when culture/symptoms require treatment."
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
  hematocrit: {
    label: "Hematocrit",
    unit: "%",
    guide: "CBC marker used with hemoglobin and RBC indices to understand anemia or hemodilution.",
    food: "Interpret with hemoglobin, ferritin, iron studies, symptoms, and the clinician's pregnancy range."
  },
  wbc: {
    label: "WBC count",
    unit: "10^3/uL",
    guide: "Part of CBC. It can support infection review but must be interpreted with postpartum timing, symptoms, and lab range.",
    food: "Fever or infection signs need clinician review; diet is supportive only."
  },
  absolute_neutrophils: {
    label: "Absolute neutrophils",
    unit: "10^3/uL",
    guide: "CBC differential marker. Mild elevation can happen in pregnancy but should be matched with symptoms and lab comments.",
    food: "No food action. Review with fever, urine findings, pain, or clinician concern."
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
  folate: {
    label: "Folate",
    unit: "ng/mL",
    guide: "Folate status matters for early pregnancy neural tube risk, but supplementation decisions depend on prenatal plan and clinician advice.",
    food: "Continue clinician-approved folic acid/prenatal plan; food sources are supportive."
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
  ["anemia", "Known anemia/low iron", "Adds CBC/ferritin discussion"],
  ["gallstones", "Gallstones possible", "Keeps diet lower fat and flags RUQ pain"]
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

const DAILY_DONT_ITEMS = [
  {
    title: "Do not self-medicate",
    text: "Do not start, stop, or double medicines, thyroid tablets, hormones, painkillers, herbs, or high-dose supplements without the gyne/doctor."
  },
  {
    title: "Avoid pregnancy food risks",
    text: "No alcohol. Limit caffeine to 200 mg/day. Avoid raw/undercooked meat or seafood, unpasteurized dairy, liver/pate, high-mercury fish, uncooked sprouts, and unwashed produce."
  },
  {
    title: "Avoid risky activity",
    text: "No contact sports, fall-risk activities, scuba diving, overheating workouts, heavy lifting beyond comfort, or long flat-on-back exercise later in pregnancy."
  },
  {
    title: "Do not ignore warning signs",
    text: "Seek urgent care for heavy bleeding, severe belly/shoulder pain, fainting, severe headache, vision changes, fever, chest pain, trouble breathing, one-sided leg swelling, or self-harm thoughts."
  }
];

const SUPPLEMENT_PLAN = [
  {
    nutrient: "Prenatal multivitamin",
    dailyDose: "1 pregnancy-specific prenatal daily; label should include folic acid, iodine, B vitamins, zinc, and pregnancy-safe vitamin A.",
    timing: "With a meal. Do not double with another multivitamin.",
    why: "Covers baseline micronutrients while labs decide targeted add-ons.",
    brand: "Buy a pregnancy-specific prenatal from Tata 1mg, Apollo, Netmeds, or an official brand store. Avoid a general women's multivitamin unless the gyne confirms it is safe for pregnancy.",
    tests: "CBC, B12, vitamin D, TSH, and current medicines help personalize the final stack.",
    level: "baseline"
  },
  {
    nutrient: "Folic acid / folate",
    dailyDose: "400-800 mcg daily now; 5 mg only if the gyne prescribes high-dose folic acid.",
    timing: "Any time daily; consistency matters most in early pregnancy.",
    why: "Most important early nutrient for neural tube, brain, and spine development.",
    brand: "Use the folic acid inside the prenatal if it meets dose. If separate, buy the exact gyne-prescribed brand from Tata 1mg or a licensed pharmacy.",
    tests: "Usually started without waiting for labs; check B12 in vegans so folate does not mask B12 deficiency.",
    level: "baseline"
  },
  {
    nutrient: "Vitamin B12",
    dailyDose: "At least pregnancy RDA coverage; vegans often need a separate B12 plan such as daily or weekly methylcobalamin per clinician.",
    timing: "Morning or with food if nausea occurs.",
    why: "Vegan diet raises B12 deficiency risk; B12 supports red blood cells and fetal nervous-system development.",
    brand: "Tata 1mg B12 or any reputable methylcobalamin brand is acceptable if the label, dose, and doctor plan match.",
    tests: "Serum B12, CBC with MCV; add methylmalonic acid/homocysteine only if the doctor needs clarification.",
    level: "lab"
  },
  {
    nutrient: "Iron",
    dailyDose: "30-60 mg elemental iron daily is common in pregnancy; treatment doses depend on Hb, ferritin, and tolerance.",
    timing: "Keep away from calcium, tea, coffee, and antacids. Pair with vitamin C if tolerated.",
    why: "Supports maternal blood volume and reduces anemia risk; anemia can worsen fatigue and pregnancy risk.",
    brand: "Choose the gyne-prescribed iron salt/brand with elemental iron clearly listed. Do not self-start IV iron.",
    tests: "CBC, ferritin, serum iron, TIBC, transferrin saturation; repeat as advised after starting treatment.",
    level: "lab"
  },
  {
    nutrient: "Iodine",
    dailyDose: "About 220 mcg/day total intake in pregnancy; many prenatals provide 150 mcg.",
    timing: "Daily through iodized salt and/or prenatal. Avoid high-dose kelp or seaweed capsules.",
    why: "Supports fetal brain development and thyroid hormone production.",
    brand: "Prefer prenatal iodine plus normal iodized salt. Buy only label-clear products from licensed sellers.",
    tests: "TSH and Free T4 guide thyroid safety; urinary iodine is not a normal individual test.",
    level: "baseline"
  },
  {
    nutrient: "Vitamin D",
    dailyDose: "600 IU/day is a common baseline; deficiency correction needs a doctor-set dose.",
    timing: "With food containing fat. Do not stack multiple D3 products unknowingly.",
    why: "Supports bone health, calcium handling, and deficiency correction.",
    brand: "For vegan use, prefer lichen-based vegan D3 if available; many D3 products are lanolin-based. Tata 1mg can be used as seller if the label fits.",
    tests: "25-OH vitamin D, calcium if high-dose therapy is planned.",
    level: "lab"
  },
  {
    nutrient: "Calcium + vitamin D",
    dailyDose: "Aim for about 1000 mg/day calcium from diet plus supplements; Indian public guidance often uses 500 mg elemental calcium twice daily from mid-pregnancy.",
    timing: "Take after meals and separate from iron by at least 2 hours.",
    why: "Supports maternal and fetal bone needs and may help in low-calcium diets.",
    brand: "Tata 1mg Calcium + D3 can be considered only if the label's elemental calcium and D3 match the doctor's plan.",
    tests: "Diet review, 25-OH vitamin D; kidney stone history changes the plan.",
    level: "lab"
  },
  {
    nutrient: "DHA omega-3",
    dailyDose: "200-300 mg DHA daily is commonly used in pregnancy.",
    timing: "With a meal; stop only if clinician advises for bleeding risk or intolerance.",
    why: "Supports fetal brain and eye development.",
    brand: "For vegan, look specifically for algae-based DHA. Fish-oil DHA is not vegan.",
    tests: "No routine lab needed; confirm product safety, dose, and other medicines.",
    level: "baseline"
  },
  {
    nutrient: "Choline",
    dailyDose: "Target intake is about 450 mg/day in pregnancy from food plus supplements.",
    timing: "With meals if using a supplement.",
    why: "Supports neural development; many prenatal vitamins contain little or no choline.",
    brand: "Use soy, legumes, quinoa, peanuts, and a label-clear choline supplement only if the doctor agrees.",
    tests: "No routine lab; use diet review and prenatal label check.",
    level: "baseline"
  },
  {
    nutrient: "Avoid unless prescribed",
    dailyDose: "No high-dose vitamin A retinol, herbal blends, ashwagandha, detox products, or duplicate prenatals.",
    timing: "Review every supplement bottle with the gyne.",
    why: "Some products are unsafe in pregnancy or can push nutrients above safe upper limits.",
    brand: "Do not buy from marketplace sellers with unclear batch, expiry, import, or FSSAI/drug details.",
    tests: "Bring photos of labels and current medicines to the appointment.",
    level: "avoid"
  }
];

const SUPPLEMENT_TESTS = [
  {
    title: "Confirm pregnancy progress and location",
    tests: "Repeat quantitative beta-hCG in about 48 hours; plan transvaginal ultrasound when the gyne says timing/hCG level is appropriate.",
    why: "Supplements support pregnancy, but hCG and ultrasound confirm whether it is progressing safely and where it is located.",
    priority: "Now"
  },
  {
    title: "Anemia and iron dosing",
    tests: "CBC with indices, ferritin, serum iron, TIBC, transferrin saturation.",
    why: "Decides whether normal prenatal iron is enough, oral treatment is needed, or IV iron should be discussed.",
    priority: "Now"
  },
  {
    title: "Vegan nutrient baseline",
    tests: "Vitamin B12, 25-OH vitamin D, CBC/MCV; add folate only if clinician wants it.",
    why: "Vegan diet makes B12 and vitamin D planning more important for embryo nervous-system and maternal blood health.",
    priority: "Now"
  },
  {
    title: "Thyroid and iodine safety",
    tests: "TSH and Free T4; anti-TPO if thyroid history or clinician suspects autoimmune thyroid disease.",
    why: "Early fetal brain development depends on maternal thyroid hormone; iodine should not be blindly overdosed.",
    priority: "Now"
  },
  {
    title: "Baseline antenatal screen",
    tests: "Blood group/Rh, antibody screen, urine routine and culture, fasting glucose or HbA1c, HIV, HBsAg, HCV, VDRL/RPR, rubella IgG, and thalassemia screen/Hb electrophoresis if CBC suggests it or family risk exists.",
    why: "These are not all supplement tests, but they change pregnancy safety planning and first-trimester care.",
    priority: "Gyne visit"
  },
  {
    title: "Age 35 first-pregnancy screening",
    tests: "Dating scan, NT scan with first-trimester screen at 11-13+6 weeks, and discuss NIPT/genetic counseling.",
    why: "This supports fetal-risk assessment; it does not replace nutrition but belongs on the same early pregnancy checklist.",
    priority: "Schedule"
  }
];

const BUYING_RULES = [
  {
    title: "Use Tata 1mg as seller, not as automatic brand",
    text: "Tata 1mg is a reasonable purchase source. Pick pregnancy-specific or doctor-prescribed products, not random wellness products."
  },
  {
    title: "Match elemental dose on the label",
    text: "For iron and calcium, the important number is elemental iron/calcium, not just the salt weight."
  },
  {
    title: "Separate iron and calcium",
    text: "Calcium reduces iron absorption. Keep them at least 2 hours apart and avoid tea/coffee around iron."
  },
  {
    title: "Check vegan status",
    text: "DHA should be algae-based. Vitamin D3 is often lanolin-based unless labelled vegan/lichen D3."
  },
  {
    title: "Authenticate the pack",
    text: "Use sealed packs, batch number, expiry, invoice, licensed pharmacy seller, and intact QR/scratch verification if present."
  }
];

const MEAL_TIMELINE = [
  {
    time: "7:00-8:00",
    title: "Wake and hydration",
    food: "Warm water or room-temperature water. If nausea is present, add a small dry snack like roasted makhana or plain toast before standing for long.",
    ayurveda: "Gentle dinacharya start; avoid strong tea/coffee before food.",
    gallstone: "No oil-heavy morning snack."
  },
  {
    time: "8:30-9:30",
    title: "Breakfast",
    food: "Moong dal chilla with little oil + mint/coriander chutney, or oats/dalia with fortified soy/pea milk, chia, fruit, and roasted seeds in small quantity.",
    ayurveda: "Light, warm, easy-to-digest first meal for Grishma heat.",
    gallstone: "Keep nuts/cashew small; avoid coconut-heavy smoothies."
  },
  {
    time: "11:00",
    title: "Mid-morning cooling snack",
    food: "Fruit + protein support: guava/orange/papaya or apple with roasted chana, sprouts only if well-cooked, or fortified plant curd if tolerated.",
    ayurveda: "Madhura-drava style cooling without ice-cold extremes.",
    gallstone: "Avoid fried namkeen and high-fat nut milk."
  },
  {
    time: "13:00-14:00",
    title: "Main lunch",
    food: "Rice/roti + moong/masoor/toor dal + sabzi + salad + lemon. Rotate tofu/soy chunks/rajma/chana when digestion is comfortable.",
    ayurveda: "Largest meal when agni is strongest; keep it freshly cooked.",
    gallstone: "Use measured oil, avoid ghee, butter, cream, pakora, puri."
  },
  {
    time: "16:30-17:30",
    title: "Iron-friendly snack",
    food: "Roasted chana, sattu drink, sprouts cooked as chaat, poha with peas, or hummus with phulka. Pair iron foods with lemon/amla/guava.",
    ayurveda: "Prevents long fasting and evening craving.",
    gallstone: "Keep tahini/peanut portions small."
  },
  {
    time: "19:30-20:30",
    title: "Dinner",
    food: "Khichdi with moong dal + vegetables, clear dal soup + roti, tofu vegetable bowl, or idli/sambar. Keep dinner lighter than lunch.",
    ayurveda: "Early, warm, simple dinner to support sleep and digestion.",
    gallstone: "Avoid late oily restaurant food."
  },
  {
    time: "22:30-23:00",
    title: "Pre-sleep if hungry",
    food: "Small fortified soy/pea milk, banana, or plain toast. Shift sleep earlier gradually toward 23:00-23:30 if possible.",
    ayurveda: "Sleep rhythm matters for digestion and pregnancy fatigue.",
    gallstone: "Avoid cashew-heavy milk at night; use diluted/low-fat fortified milk."
  }
];

const NUTRIENT_MATRIX = [
  {
    nutrient: "Protein",
    target: "Discuss about 70 g/day as pregnancy target",
    veganFoods: "Moong/masoor dal, chana, rajma, tofu, soy chunks, tempeh, fortified soy/pea milk, sattu, peanuts in small portions.",
    timing: "Split across breakfast, lunch, snack, dinner.",
    watch: "Increase slowly if gas/nausea; choose moong/tofu first."
  },
  {
    nutrient: "Iron",
    target: "Food daily; supplement only by Hb/ferritin plan",
    veganFoods: "Dal, chana, rajma, soy, sesame, garden cress, greens, jaggery only as food not treatment.",
    timing: "Pair with lemon, amla, orange, guava.",
    watch: "Keep tea/coffee away from iron meals."
  },
  {
    nutrient: "B12",
    target: "Must be reliable in strict vegan diet",
    veganFoods: "Fortified foods help, but B12 supplement is commonly needed in vegans.",
    timing: "Morning or with meal if nausea.",
    watch: "Check B12/CBC; folate can mask B12 deficiency signs."
  },
  {
    nutrient: "Calcium",
    target: "About 1000 mg/day total intake",
    veganFoods: "Calcium-set tofu, fortified soy/pea/oat milk, sesame/tahini small portions, greens except spinach as main source.",
    timing: "Separate calcium supplement from iron by 2+ hours.",
    watch: "If high-dose vitamin D/calcium, review kidney stone risk."
  },
  {
    nutrient: "Vitamin D",
    target: "Baseline or correction dose by lab",
    veganFoods: "Sun exposure and fortified plant milks; vegan D3 should be lichen-based.",
    timing: "With meal containing some fat.",
    watch: "Do not stack multiple D products."
  },
  {
    nutrient: "Iodine",
    target: "Pregnancy needs steady iodine",
    veganFoods: "Iodized salt plus prenatal iodine if prescribed.",
    timing: "Daily; do not use kelp capsules.",
    watch: "Check TSH/Free T4, especially in early pregnancy."
  },
  {
    nutrient: "DHA / omega-3",
    target: "Discuss algae DHA 200-300 mg/day",
    veganFoods: "Chia/flax/walnut provide ALA; algae DHA is the direct vegan DHA source.",
    timing: "With food.",
    watch: "Keep nut portions modest for gallstone comfort."
  },
  {
    nutrient: "Choline",
    target: "Often missed in vegan prenatals",
    veganFoods: "Soy foods, quinoa, legumes, peanuts small portion, broccoli.",
    timing: "Spread in meals.",
    watch: "Check prenatal label; discuss add-on if intake is low."
  }
];

const SEASONAL_DIET_RULES = [
  {
    title: "Delhi / Grishma lens",
    text: "Prefer freshly cooked, light, hydrating meals: rice, moong, cucumber, lauki, tori, pumpkin, coconut water only if tolerated, lemon water, seasonal fruit. Avoid overheating, long fasting, and very spicy/sour/fried food."
  },
  {
    title: "Garbhini Paricharya adaptation",
    text: "Classical texts emphasize congenial, liquid, sweet/cooling, easy-to-digest nourishment early in pregnancy. For her vegan/lactose-intolerant context, dairy/ghee ideas are adapted to fortified plant milk, dal soups, khichdi, and low-oil foods."
  },
  {
    title: "Gallstone-safe pattern",
    text: "Use smaller, regular meals and measured oil. Avoid large fat loads from fried foods, nut-heavy drinks, coconut cream, vegan cheese, and restaurant gravies. Do not do crash dieting or long fasting."
  },
  {
    title: "Sleep correction",
    text: "Current sleep 12:30-2:00 AM is late. Shift 15 minutes earlier every 3-4 nights, keep dinner earlier, and stop caffeine after lunch."
  }
];

const DIET_LAB_CHECKS = [
  {
    priority: "Now",
    test: "Quantitative beta-hCG, repeat in about 48 hours if gyne asks",
    purpose: "Confirms pregnancy trend; urine test and missed period are not enough."
  },
  {
    priority: "Now",
    test: "CBC with indices, ferritin, serum iron/TIBC/transferrin saturation",
    purpose: "Sets iron food and supplement intensity."
  },
  {
    priority: "Now",
    test: "Vitamin B12, 25-OH vitamin D",
    purpose: "Strict vegan diet makes these high-priority."
  },
  {
    priority: "Now",
    test: "TSH and Free T4",
    purpose: "Early fetal development depends on maternal thyroid hormone; iodine should not be overdosed blindly."
  },
  {
    priority: "Gyne visit",
    test: "Blood group/Rh, antibody screen, urine routine/culture, fasting glucose or HbA1c",
    purpose: "Baseline antenatal safety and early risk planning."
  },
  {
    priority: "If symptoms",
    test: "LFT, bilirubin, abdominal ultrasound / gastro review",
    purpose: "For right-upper-abdominal pain, fever, vomiting, jaundice, or suspected gallstone flare."
  }
];

const DIAGNOSTIC_TEST_WINDOWS = [
  {
    id: "first-visit-physical",
    startDay: 28,
    endDay: 42,
    window: "Now / first gyne visit",
    category: "Physical + history",
    tests: "BP, pulse, weight/BMI, symptom review, medicine/supplement review, abdominal/pelvic exam only if clinically needed.",
    purpose: "Sets baseline risk, catches urgent symptoms, and decides whether scan or emergency review is needed.",
    priority: "Must do now"
  },
  {
    id: "first-visit-blood-urine",
    startDay: 28,
    endDay: 56,
    window: "Now / booking labs",
    category: "Blood + urine baseline",
    tests: "CBC with platelets, blood group/Rh, antibody screen, fasting glucose or HbA1c, TSH, urine routine/microscopy, urine culture.",
    purpose: "Screens anemia, Rh/antibody risk, early glucose risk, thyroid risk, UTI/asymptomatic bacteriuria, and baseline safety.",
    priority: "Must do now"
  },
  {
    id: "infection-immunity",
    startDay: 28,
    endDay: 56,
    window: "Now / booking labs",
    category: "Infection + immunity",
    tests: "HIV, HBsAg, HCV, VDRL/RPR for syphilis, rubella IgG, varicella IgG if history/vaccine status is unclear.",
    purpose: "Finds treatable infections and immunity gaps that can change pregnancy and baby-protection planning.",
    priority: "Must do now"
  },
  {
    id: "vegan-anemia-nutrition",
    startDay: 28,
    endDay: 56,
    window: "Now / nutrition baseline",
    category: "Vegan nutrition + anemia",
    tests: "Ferritin, serum iron, TIBC/transferrin saturation, vitamin B12, 25-OH vitamin D; calcium only if high-dose D/calcium or symptoms are being considered.",
    purpose: "Vegan diet and pregnancy raise B12, iron, and vitamin D planning importance; labs decide targeted dosing.",
    priority: "Must do now"
  },
  {
    id: "hormone-viability",
    startDay: 28,
    endDay: 49,
    window: "Now if not confirmed",
    category: "Hormone / viability",
    tests: "Urine pregnancy test if not done; quantitative serum beta-hCG if confirmation, dating, ectopic, or viability uncertainty exists; repeat in about 48 hours only if gyne asks.",
    purpose: "Confirms level/trend, but hCG alone cannot prove location; scan and symptoms guide safety.",
    priority: "Must do now"
  },
  {
    id: "gallstone-liver",
    startDay: 28,
    endDay: 56,
    window: "Now / symptom-based",
    category: "Liver + gallstone context",
    tests: "Baseline LFT and bilirubin are reasonable to discuss; abdominal ultrasound and gastro/surgical review if right-upper-abdominal pain, fever, jaundice, vomiting, or fat-triggered pain returns.",
    purpose: "Past gallstone pain changes diet safety and needs fast review if biliary symptoms come back.",
    priority: "Ask gyne"
  },
  {
    id: "dating-viability-scan",
    startDay: 42,
    endDay: 56,
    window: "6w0d - 8w0d",
    category: "Dating / viability scan",
    tests: "Transvaginal ultrasound when gyne says timing is appropriate.",
    purpose: "Confirms intrauterine pregnancy, heartbeat when visible, number of pregnancies, and revises dating/EDD if needed.",
    priority: "Book next"
  },
  {
    id: "nipt-nt-first-trimester",
    startDay: 70,
    endDay: 97,
    window: "10w0d - 13w6d",
    category: "Chromosomal screening",
    tests: "Discuss NIPT from 10w; NT ultrasound with dual marker / first-trimester screen in the 11w-13w6d window.",
    purpose: "Age 35 makes aneuploidy screening discussion important. NIPT is screening, not diagnostic.",
    priority: "Plan ahead"
  },
  {
    id: "carrier-hemoglobinopathy",
    startDay: 70,
    endDay: 112,
    window: "10w - 16w",
    category: "Genetic carrier risk",
    tests: "Hb electrophoresis/HPLC if not already done; partner testing if abnormal; discuss SMA/CF or expanded carrier screening based on family history and local availability.",
    purpose: "Finds inherited carrier risks that may need partner testing or fetal-medicine counseling.",
    priority: "Plan ahead"
  },
  {
    id: "diagnostic-invasive",
    startDay: 77,
    endDay: 154,
    window: "11w - 22w",
    category: "Diagnostic fetal testing",
    tests: "CVS or amniocentesis only if screening is high risk, ultrasound is concerning, or family/genetic history indicates it.",
    purpose: "Diagnostic tests can confirm chromosome/genetic conditions; they are not routine for every pregnancy.",
    priority: "Conditional"
  },
  {
    id: "afp-quad",
    startDay: 105,
    endDay: 154,
    window: "15w0d - 22w0d",
    category: "Second-trimester screen",
    tests: "AFP or quad screen if first-trimester screening/NIPT was missed or gyne wants neural-tube-risk screening.",
    purpose: "Adds screening coverage when earlier screening was incomplete; anatomy scan remains essential.",
    priority: "Conditional"
  },
  {
    id: "anatomy-scan-detail",
    startDay: 126,
    endDay: 146,
    window: "18w0d - 20w6d",
    category: "Level-II anomaly scan",
    tests: "Detailed fetal anatomy scan; placenta location, cervix length if indicated, fetal growth and structures.",
    purpose: "Major structural screening window; abnormal findings need fetal-medicine review.",
    priority: "Book"
  },
  {
    id: "every-visit",
    window: "Every antenatal visit",
    category: "Physical monitoring",
    tests: "BP, weight trend, symptoms, edema, urine dip when indicated, fetal heart later in pregnancy, fundal height after 24w, fetal movement after quickening.",
    purpose: "Catches hypertension, growth concerns, preeclampsia clues, symptom escalation, and visit-to-visit changes.",
    priority: "Active",
    always: true
  },
  {
    id: "gdm-screen",
    startDay: 168,
    endDay: 196,
    window: "24w0d - 28w0d",
    category: "Gestational diabetes",
    tests: "OGTT / glucose screening as local gyne protocol advises; earlier testing if high-risk or early glucose/HbA1c is abnormal.",
    purpose: "Screens gestational diabetes and changes diet, growth monitoring, and delivery planning.",
    priority: "Pending"
  },
  {
    id: "third-trimester-review",
    startDay: 196,
    endDay: 224,
    window: "28w0d - 32w0d",
    category: "Third-trimester labs",
    tests: "Repeat CBC; ferritin/B12/vitamin D if low or treated; repeat antibody screen if Rh negative; Anti-D plan if Rh negative per gyne.",
    purpose: "Finds anemia/nutrient gaps and Rh/antibody issues before late pregnancy.",
    priority: "Pending"
  },
  {
    id: "growth-risk-review",
    startDay: 224,
    endDay: 252,
    window: "32w0d - 36w0d",
    category: "Growth + complication checks",
    tests: "Growth scan if indicated; BP/proteinuria review; platelets, creatinine, AST/ALT if BP/preeclampsia concern; bile acids + LFT if itching palms/soles.",
    purpose: "Targets fetal growth, preeclampsia/HELLP, cholestasis, and symptom-triggered risks.",
    priority: "Risk-based"
  },
  {
    id: "birth-readiness",
    startDay: 252,
    endDay: 265,
    window: "36w0d - 37w6d",
    category: "Birth readiness",
    tests: "Presentation check, BP/urine/symptoms, GBS swab if local protocol uses it, delivery facility and blood-group/Rh document review.",
    purpose: "Prepares delivery plan without deciding C-section vs normal delivery too early.",
    priority: "Pending"
  },
  {
    id: "red-flag-triggered",
    window: "Any time",
    category: "Urgent symptom-triggered",
    tests: "Bleeding, one-sided/severe pain, fainting, shoulder-tip pain, fever, severe vomiting/dehydration, jaundice, severe RUQ pain, severe headache/vision symptoms, high BP, or later reduced fetal movement need same-day gyne/emergency review.",
    purpose: "Symptoms override the schedule. Tests may include exam, ultrasound, CBC, blood group/Rh, urine, LFT, kidney tests, or fetal assessment depending on presentation.",
    priority: "Emergency if present",
    conditional: true
  }
];

const HORMONE_TEST_RULES = [
  {
    group: "Routine / first-line",
    tests: "TSH early; Free T4 if TSH is abnormal or thyroid disease is suspected. Quantitative beta-hCG only when pregnancy confirmation, trend, ectopic, dating, or viability is unclear.",
    when: "Now / first gyne visit; hCG repeat about 48 hours only if gyne asks.",
    note: "These can change early safety decisions."
  },
  {
    group: "Conditional",
    tests: "Progesterone, TPO antibody, repeat thyroid tests, HbA1c/OGTT, bile acids.",
    when: "Bleeding, recurrent miscarriage history, known thyroid disease/raised TSH, glucose risk, or later itching palms/soles.",
    note: "Useful only when the clinical context points to them."
  },
  {
    group: "Not routine in stable pregnancy",
    tests: "AMH, FSH, LH, estradiol, prolactin, testosterone, DHEAS, cortisol.",
    when: "Only if a specific endocrine disorder, infertility context, pituitary/adrenal symptoms, or gyne/endocrine reason exists.",
    note: "These do not monitor a normal early pregnancy and can create noise."
  }
];

const DIAGNOSTIC_NOW_GROUPS = [
  {
    title: "First gyne booking visit",
    tests: "BP, pulse, weight/BMI, symptom review, medicine/supplement review.",
    why: "Sets baseline risk and decides whether anything needs same-day review.",
    type: "Routine"
  },
  {
    title: "Baseline blood tests",
    tests: "CBC with platelets, blood group/Rh, antibody screen, TSH, fasting glucose or HbA1c.",
    why: "Checks anemia/platelets, Rh-antibody risk, thyroid status, and early glucose risk.",
    type: "Routine"
  },
  {
    title: "Urine tests",
    tests: "Urine routine/microscopy and urine culture.",
    why: "Looks for UTI or asymptomatic bacteriuria, which may need treatment even without symptoms.",
    type: "Routine"
  },
  {
    title: "Infection and immunity screen",
    tests: "HIV, HBsAg, HCV, VDRL/RPR for syphilis, rubella IgG; varicella IgG only if immunity is unclear.",
    why: "Finds treatable infections or immunity gaps that change pregnancy and newborn protection planning.",
    type: "Routine"
  },
  {
    title: "Vegan nutrition baseline",
    tests: "Ferritin + iron profile, vitamin B12, 25-OH vitamin D.",
    why: "Vegan diet makes iron, B12, and vitamin D decisions more important; labs prevent blind high-dose supplements.",
    type: "Patient-specific"
  }
];

const DIAGNOSTIC_NEXT_GROUPS = [
  {
    sourceId: "dating-viability-scan",
    title: "Dating / viability TVS",
    tests: "Transvaginal ultrasound when the gyne says timing is right.",
    why: "Confirms pregnancy location, dating, number of pregnancies, and heartbeat when visible."
  },
  {
    sourceId: "nipt-nt-first-trimester",
    title: "First-trimester screening",
    tests: "Discuss NIPT from 10w; NT scan + dual marker in 11w-13w6d window.",
    why: "Age 35 makes chromosomal screening discussion important; these are screening tests, not diagnosis."
  },
  {
    sourceId: "anatomy-scan-detail",
    title: "Level-II anatomy scan",
    tests: "Detailed fetal anatomy scan.",
    why: "Main structural screening window."
  },
  {
    sourceId: "gdm-screen",
    title: "Glucose screening",
    tests: "OGTT / glucose screening as local gyne protocol advises.",
    why: "Finds gestational diabetes, which changes diet, growth monitoring, and delivery planning."
  }
];

const DIAGNOSTIC_CONDITIONAL_GROUPS = [
  {
    title: "Quantitative beta-hCG",
    tests: "Do only if pregnancy confirmation, trend, ectopic/location, dating, or viability is unclear; repeat after about 48 hours only if the gyne asks.",
    why: "Useful for early uncertainty, but hCG alone cannot prove pregnancy location."
  },
  {
    title: "Free T4 / thyroid antibodies",
    tests: "Free T4 if TSH is abnormal or thyroid disease is suspected; TPO antibody only if gyne/endocrine reason exists.",
    why: "Targets thyroid decisions without adding unnecessary endocrine noise."
  },
  {
    title: "Progesterone",
    tests: "Only if bleeding, recurrent miscarriage history, fertility treatment/luteal support, or gyne-directed reason.",
    why: "Not a routine monitoring test for every stable pregnancy."
  },
  {
    title: "Gallbladder/liver checks",
    tests: "LFT/bilirubin and abdominal ultrasound if right-upper-abdominal pain, fever, jaundice, vomiting, or fat-triggered pain returns.",
    why: "Past gallstone pain matters, but scans/labs should be symptom-triggered unless the gyne wants a baseline."
  },
  {
    title: "CVS / amniocentesis",
    tests: "Only after high-risk screening, concerning ultrasound, or family/genetic indication.",
    why: "These are diagnostic fetal tests, not routine screening for every pregnancy."
  }
];

const DIAGNOSTIC_NOT_ROUTINE = [
  "AMH, FSH, LH, estradiol, prolactin, testosterone, DHEAS, cortisol unless a specific endocrine disorder points to them.",
  "Repeated beta-hCG after pregnancy location and viability are clear, unless the gyne asks.",
  "Broad vitamin/mineral panels without symptoms, deficiency risk, or a treatment decision.",
  "Abdominal ultrasound for gallstones if there are no biliary symptoms and no clinician reason.",
  "Invasive fetal diagnostic tests without high-risk screen, ultrasound concern, or family history."
];

const PREGNANCY_MILESTONES = [
  {
    id: "missed-period",
    startDay: 28,
    endDay: 28,
    title: "Missed period reference",
    tests: ["Missed period date", "Home urine test if not done"],
    reason: "This anchors the provisional LMP estimate when the exact LMP is not saved."
  },
  {
    id: "beta-hcg",
    startDay: 28,
    endDay: 42,
    title: "Confirm pregnancy with blood beta-hCG",
    tests: ["Quantitative serum beta-hCG", "Repeat in about 48 hours if gyne asks"],
    reason: "Blood hCG confirms the level and trend; it does not confirm pregnancy location by itself."
  },
  {
    id: "first-visit",
    startDay: 28,
    endDay: 56,
    title: "First gyne visit and baseline labs",
    tests: ["CBC", "B12", "Vitamin D", "TSH/Free T4", "Blood group/Rh", "Urine routine/culture"],
    reason: "Age 35, vegan diet, and possible gallstones make early review useful."
  },
  {
    id: "dating-scan",
    startDay: 42,
    endDay: 56,
    title: "Dating / viability ultrasound window",
    tests: ["Early ultrasound when gyne says timing is appropriate"],
    reason: "A first-trimester scan can confirm/revise dates and pregnancy location."
  },
  {
    id: "nt-screen",
    startDay: 77,
    endDay: 97,
    title: "NT scan and first-trimester screening",
    tests: ["NT scan", "Dual marker or NIPT discussion"],
    reason: "Usually planned around 11w to 13w6d; age 35 makes screening discussion important."
  },
  {
    id: "anatomy-scan",
    startDay: 126,
    endDay: 154,
    title: "Anomaly / anatomy scan",
    tests: ["Detailed fetal anatomy scan"],
    reason: "Common mid-pregnancy structural screening window."
  },
  {
    id: "glucose-screen",
    startDay: 168,
    endDay: 196,
    title: "Glucose screening window",
    tests: ["Fasting glucose / OGTT as doctor advises"],
    reason: "Screens for gestational diabetes risk."
  },
  {
    id: "third-trimester-labs",
    startDay: 196,
    endDay: 224,
    title: "Third-trimester blood and nutrition review",
    tests: ["CBC", "Ferritin if needed", "BP", "Weight trend", "Supplement review"],
    reason: "Checks anemia, BP, and nutrient plan before late pregnancy."
  },
  {
    id: "growth-position",
    startDay: 224,
    endDay: 252,
    title: "Growth, position, and birth planning",
    tests: ["Growth/position review", "BP", "Symptoms", "Birth plan discussion"],
    reason: "Prepares for late-pregnancy monitoring and delivery planning."
  },
  {
    id: "term-window",
    startDay: 259,
    endDay: 279,
    title: "Term window begins",
    tests: ["Weekly/doctor-directed follow-up", "Movement and BP/symptom watch"],
    reason: "37w onward is the term period; care becomes more visit-driven."
  },
  {
    id: "edd",
    startDay: 280,
    endDay: 280,
    title: "Expected date of birth",
    tests: ["EDD check", "Post-date plan if still pregnant"],
    reason: "EDD is an estimate, not a fixed delivery deadline."
  }
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
    age: "35",
    height: "5 ft 6 in",
    heightCm: "168",
    weightKg: "74",
    deliveryDate: "",
    deliveryType: "unknown",
    feedingStatus: "unknown",
    lastPeriodDate: "2026-05-13",
    missedPeriodDate: "2026-06-10",
    city: "New Delhi, India",
    sleepWindow: "12:30-2:00 AM",
    wakeWindow: "7-8 AM",
    dietPattern: "Vegan, lactose intolerant; honey acceptable",
    gallstoneStatus: "Gallstones may still be present; no surgery; pain last noted around 17 Dec 2025",
    doctorName: "",
    clinicalContext: "Missed period first noted 10 Jun 2026. Approximate LMP estimate 13 May 2026 if 28-day cycle. Pregnancy timing must be confirmed with beta-hCG/gyne review.",
    riskFlags: {
      positivePregnancyTest: true,
      gdm: false,
      hypertension: false,
      thyroid: false,
      cSection: false,
      heavyBleeding: false,
      anemia: false,
      gallstones: true
    }
  },
  symptoms: {},
  results: [],
  notes: []
};

const PERSONAL_PROFILE_DEFAULT_KEYS = [
  "age",
  "height",
  "heightCm",
  "weightKg",
  "lastPeriodDate",
  "missedPeriodDate",
  "city",
  "sleepWindow",
  "wakeWindow",
  "dietPattern",
  "gallstoneStatus",
  "clinicalContext"
];

const HEALTHIANS_20260612_UPDATE = {
  d: "2026-06-12",
  f: { positivePregnancyTest: true, gallstones: true },
  c: "Healthians report 12 Jun 2026 09:37: beta-hCG 68.93 mIU/mL; urine LE 1+, pus cells 8-10/HPF, nitrite negative, bacteria absent; CBC Hb 11.6, Hct 33.9, TLC 11.0, ANC 7.77, platelets 509; vitamin D 17.01. No urine culture/sensitivity found in the PDF.",
  r: [
    ["beta_hcg", "68.93", "mIU/mL", "Positive early pregnancy hormone; one value does not confirm location/viability.", "h12-hcg"],
    ["urine_leukocyte_esterase", "1+", "", "Urine routine; possible inflammation/UTI screen.", "h12-ule"],
    ["urine_pus_cells", "8-10", "/HPF", "High vs report range 0-5; not culture-confirmed UTI.", "h12-pus"],
    ["urine_nitrite", "Negative", "", "Urine routine.", "h12-nitrite"],
    ["urine_bacteria", "Absent", "", "Urine routine microscopy.", "h12-bacteria"],
    ["urine_epithelial_cells", "4-5", "/HPF", "Urine routine microscopy.", "h12-epi"],
    ["urine_rbc", "Nil", "/HPF", "Urine routine microscopy.", "h12-rbc"],
    ["urine_protein", "Negative", "", "Urine routine.", "h12-protein"],
    ["urine_ketones", "Negative", "", "Urine routine.", "h12-ketones"],
    ["urine_culture", "Not found in PDF", "", "Ask gyne whether urine culture + sensitivity is needed.", "h12-culture"],
    ["hemoglobin", "11.6", "g/dL", "Borderline/low depending on pregnancy/lab range.", "h12-hb"],
    ["hematocrit", "33.9", "%", "Low in report.", "h12-hct"],
    ["wbc", "11.0", "10^3/uL", "Mildly high; report comment mentions neutrophilic leukocytosis.", "h12-wbc"],
    ["absolute_neutrophils", "7.77", "10^3/uL", "Mildly high; interpret with symptoms/urine findings.", "h12-anc"],
    ["platelets", "509", "10^3/uL", "High; report comment mentions thrombocytosis.", "h12-plt"],
    ["ferritin", "34.2", "ng/mL", "Iron reserve okay but not high.", "h12-ferritin"],
    ["serum_iron", "61", "ug/dL", "Iron profile.", "h12-iron"],
    ["transferrin_saturation", "16.99", "%", "Low available iron marker by many ranges.", "h12-tsat"],
    ["vitamin_d", "17.01", "ng/mL", "Deficient by many cutoffs.", "h12-vitd"],
    ["b12", "345", "pg/mL", "Saved for vegan nutrition review.", "h12-b12"],
    ["folate", "19.38", "ng/mL", "Saved.", "h12-folate"],
    ["fasting_glucose", "97", "mg/dL", "Normal in report but review in pregnancy context.", "h12-glucose"]
  ],
  n: [[
    "Healthians report summary",
    "Early pregnancy beta-hCG positive. Urine routine has LE 1+ and pus cells 8-10/HPF but no culture/sensitivity found, so ask gyne about urine culture + sensitivity. Also review Hb/Hct, platelets 509, mild neutrophilic leukocytosis, vitamin D deficiency, iron/B12 plan, repeat hCG/scan timing.",
    "report",
    "h12-summary"
  ]]
};

let state = loadState();

const els = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setupForms();
  const sharedUpdateNotice = applySharedUpdateFromHash();
  renderAll();
  scrollToHashSection();
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
    "timelineTitle",
    "timelinePill",
    "dueDatePanel",
    "diagnosticStageSummary",
    "careBriefTitle",
    "careBriefText",
    "careWorkflow",
    "copyTestsTopBtn",
    "copyTestList",
    "copyTestsBtn",
    "copyTestsStatus",
    "copyDoctorBriefBtn",
    "printDoctorBriefBtn",
    "doctorBriefTitle",
    "doctorBriefIntro",
    "doctorSnapshotGrid",
    "doctorVitalsGrid",
    "doctorConcernList",
    "doctorReportFlags",
    "doctorHistoryList",
    "doctorBriefText",
    "copyDoctorBriefStatus",
    "dueTestGrid",
    "nextWindowList",
    "conditionalTestList",
    "notRoutineList",
    "diagnosticTimeline",
    "hormoneRules",
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
    "addHealthiansReportBtn",
    "clearResultsBtn",
    "nutritionAdvice",
    "supplementPlan",
    "supplementTests",
    "buyingRules",
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
    "drivingCard",
    "dontList",
    "dietSummary",
    "mealTimeline",
    "seasonalDiet",
    "nutrientMatrix",
    "labChecklist",
    "noteForm",
    "noteDate",
    "noteType",
    "noteTitle",
    "noteText",
    "clearNotesBtn",
    "caseSummary",
    "noteCount",
    "noteList",
    "profileAge",
    "profileHeight",
    "profileWeight",
    "lastPeriodDate",
    "missedPeriodDate",
    "profileCity",
    "sleepWindow",
    "wakeWindow",
    "dietPattern",
    "gallstoneStatus",
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

  els.addHealthiansReportBtn?.addEventListener("click", () => {
    const message = applyUpdatePayload(expandSharedUpdatePayload(HEALTHIANS_20260612_UPDATE), "Healthians report");
    renderAll();
    showInlineNotice(message, "Dashboard updated");
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

  els.copyTestsBtn?.addEventListener("click", () => copyDiagnosticText());
  els.copyTestsTopBtn?.addEventListener("click", () => copyDiagnosticText({ fromTop: true }));
  els.copyDoctorBriefBtn?.addEventListener("click", () => copyDoctorBriefText());
  els.printDoctorBriefBtn?.addEventListener("click", printDoctorBrief);

  els.saveProfileBtn.addEventListener("click", saveProfileFromForm);
  els.profileForm.addEventListener("change", saveProfileFromForm);

  els.exportBtn.addEventListener("click", exportState);
  els.importInput.addEventListener("change", importState);

  setupNavigation();
}

async function copyTextToClipboard(text, fallbackInput) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    console.warn("Clipboard copy failed", error);
  }
  if (!fallbackInput) return false;
  fallbackInput.focus();
  fallbackInput.select();
  fallbackInput.setSelectionRange(0, text.length);
  try {
    return document.execCommand("copy");
  } catch (error) {
    console.warn("Fallback copy failed", error);
    return false;
  }
}

function setupNavigation() {
  const links = [...document.querySelectorAll(".nav-link, .jump-link")];
  const sections = [...document.querySelectorAll(".section[id]")];

  const setActive = (id) => {
    let activeLink = null;
    links.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive && (!activeLink || link.classList.contains("nav-link"))) {
        activeLink = link;
      }
      if (link.classList.contains("nav-link")) {
        if (isActive) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      }
    });
    revealActiveLink(activeLink);
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href")?.slice(1);
      const target = targetId ? document.getElementById(targetId) : null;
      if (!targetId || !target) return;
      event.preventDefault();
      if (window.location.hash !== `#${targetId}`) {
        window.history.pushState(null, "", `#${targetId}`);
      }
      setActive(targetId);
      scrollToSection(target);
    });
  });

  const initialId = window.location.hash?.slice(1);
  if (initialId && document.getElementById(initialId)) {
    setActive(initialId);
  }

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActive(visible.target.id);
  }, {
    rootMargin: "-28% 0px -58% 0px",
    threshold: [0.12, 0.24, 0.48]
  });

  sections.forEach((section) => observer.observe(section));
}

function scrollToHashSection() {
  const id = window.location.hash?.slice(1);
  if (!id || id.includes("=")) return;
  const target = document.getElementById(id);
  if (!target) return;
  scrollToSection(target);
  requestAnimationFrame(() => scrollToSection(target));
  setTimeout(() => scrollToSection(target), 120);
}

function scrollToSection(target) {
  const sidebar = document.querySelector(".sidebar");
  const topbar = document.querySelector(".topbar");
  const sidebarIsFixed = sidebar && getComputedStyle(sidebar).position === "fixed";
  const topbarIsSticky = topbar && getComputedStyle(topbar).position === "sticky";
  // Anchor links need to clear whichever navigation layer is actually fixed on the current viewport.
  const headerOffset = sidebarIsFixed ? sidebar.offsetHeight + 10 : topbarIsSticky ? topbar.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  window.scrollTo(0, Math.max(0, top));
  root.style.scrollBehavior = previousScrollBehavior;
}

function revealActiveLink(link) {
  if (!link) return;
  const scroller = link.closest(".nav-list, .jump-rail");
  if (!scroller) return;
  const reveal = () => {
    const left = link.offsetLeft - ((scroller.clientWidth - link.offsetWidth) / 2);
    scroller.scrollLeft = Math.max(0, left);
  };
  reveal();
  requestAnimationFrame(reveal);
  setTimeout(reveal, 120);
}

function renderAll() {
  renderProfileForm();
  renderRiskFlags();
  renderSymptoms();
  renderHeader();
  renderStatusStrip();
  renderCareWorkbench();
  renderMetrics();
  renderTrendGrid();
  renderDoctorBrief();
  renderTimeline();
  renderDiagnosticPlan();
  renderResults();
  renderNotes();
  renderCaseSummary();
  renderAdvisor();
  renderHcgPanel();
  renderDailyRules();
  renderDietPlan();
  renderSupplements();
  renderTestGuide();
  saveState();
}

function renderProfileForm() {
  els.profileName.value = state.profile.name || "";
  els.profileAge.value = state.profile.age || "";
  els.profileHeight.value = state.profile.height || "";
  els.profileWeight.value = state.profile.weightKg || "";
  els.deliveryDate.value = state.profile.deliveryDate || "";
  els.deliveryType.value = state.profile.deliveryType || "unknown";
  els.feedingStatus.value = state.profile.feedingStatus || "unknown";
  els.lastPeriodDate.value = state.profile.lastPeriodDate || "";
  els.missedPeriodDate.value = state.profile.missedPeriodDate || "";
  els.profileCity.value = state.profile.city || "";
  els.sleepWindow.value = state.profile.sleepWindow || "";
  els.wakeWindow.value = state.profile.wakeWindow || "";
  els.dietPattern.value = state.profile.dietPattern || "";
  els.gallstoneStatus.value = state.profile.gallstoneStatus || "";
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
  els.profileTitle.textContent = `${name} care plan`;
  const day = postpartumDay();
  const estimate = pregnancyEstimate();
  els.daysPostpartum.textContent = day !== null
    ? `Day ${day} postpartum`
    : estimate
      ? `Est. ${estimate.weeks}w ${estimate.extraDays}d pregnant`
      : "Set date";
}

function renderStatusStrip() {
  const day = postpartumDay();
  const stage = stageSummary();
  const latest = latestResult();
  const riskLabels = activeRiskLabels();
  const noteCount = state.notes.length;

  els.timelineStatus.textContent = day === null ? `${stage.value}, ${stage.hint}` : `Day ${day}, ${timelinePhase(day)}`;
  els.lastSubmitted.textContent = latest
    ? `${formatDate(latest.date)} · ${TESTS[latest.type]?.label || latest.type}`
    : "No results yet";
  els.contextStatus.textContent = riskLabels.length ? riskLabels.join(", ") : "Baseline only";
  els.historyStatus.textContent = `${noteCount} ${noteCount === 1 ? "note" : "notes"}`;
}

function renderCareWorkbench() {
  const estimate = pregnancyEstimate();
  const urgent = getUrgentItems();
  const latest = latestResult();
  const dueTestWindow = estimate ? diagnosticSourceDate("dating-viability-scan", estimate) : "after LMP/missed-period is saved";

  if (urgent.length) {
    els.careBriefTitle.textContent = "Urgent symptom/value entered";
    els.careBriefText.textContent = "Do not wait for the checklist. Use the warning panel and contact the gyne/emergency care first.";
  } else if (estimate) {
    els.careBriefTitle.textContent = "Copy the first-visit test list, then book the dating scan";
    els.careBriefText.textContent = `Current estimate is ${estimate.weeks}w ${estimate.extraDays}d. Do the routine booking checks now, and plan the dating/viability TVS around ${dueTestWindow}.`;
  } else if (latest) {
    els.careBriefTitle.textContent = "Add pregnancy dates, then review the test plan";
    els.careBriefText.textContent = "A report is saved, but the pregnancy timeline still needs LMP or missed-period date to show exact windows.";
  } else {
    els.careBriefTitle.textContent = "Start with profile dates and the copy-ready test list";
    els.careBriefText.textContent = "Set LMP/missed-period if known, then copy the minimum useful tests for the gyne or lab. Avoid broad panels unless a doctor asks.";
  }

  const workflow = [
    {
      step: "1",
      title: "Copy tests",
      text: "Use the WhatsApp list. It includes why each test is needed.",
      level: "current"
    },
    {
      step: "2",
      title: "Book time windows",
      text: estimate ? `Dating scan: ${dueTestWindow}. Later screening appears in Calendar.` : "Dates appear after LMP/missed-period is saved.",
      level: estimate ? "current" : "pending"
    },
    {
      step: "3",
      title: "Add reports",
      text: "Paste lab text or enter values so the dashboard can explain trends.",
      level: latest ? "done" : "pending"
    }
  ];

  els.careWorkflow.innerHTML = workflow.map((item) => `
    <article class="workflow-step ${item.level === "current" ? "is-current" : ""}">
      <span>${escapeHTML(item.step)}</span>
      <div>
        <strong>${escapeHTML(item.title)}</strong>
        <p>${escapeHTML(item.text)}</p>
      </div>
    </article>
  `).join("");
}

function renderMetrics() {
  const stage = stageSummary();
  const tasks = getTasks();
  const openTasks = tasks.filter((task) => ["due", "overdue"].includes(task.status));
  const urgent = getUrgentItems();
  const riskCount = Object.values(state.profile.riskFlags).filter(Boolean).length;
  const latestBp = getLatest("blood_pressure");
  const latestMood = getLatest("epds");

  const metrics = [
    {
      icon: "event_available",
      label: stage.label,
      value: stage.value,
      hint: stage.hint
    },
    {
      icon: "task_alt",
      label: "Open actions",
      value: openTasks.length,
      hint: openTasks.length ? "Due or overdue windows" : "No due windows today"
    },
    {
      icon: "health_metrics",
      label: "Risk factors",
      value: riskCount,
      hint: riskCount ? "Used to personalize tests" : "Baseline schedule only"
    },
    {
      icon: "monitor_heart",
      label: "Latest BP / mood",
      value: `${latestBp ? latestBp.value : "-"} / ${latestMood ? latestMood.value : "-"}`,
      hint: urgent.length ? "Urgent flag present" : "Most recent entered values"
    }
  ];

  els.metricGrid.innerHTML = metrics
    .map((metric) => `
      <article class="metric">
        <div class="metric-top">
          <span>${metric.label}</span>
          <span class="metric-icon material-symbols-rounded" aria-hidden="true">${metric.icon}</span>
        </div>
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

function renderDoctorBrief() {
  const profile = state.profile;
  const stage = stageSummary();
  const estimate = pregnancyEstimate();
  const bmi = profileBmi();
  const latestBp = getLatest("blood_pressure");
  const latestWeight = getLatest("weight");
  const snapshot = [
    ["Name", profile.name || "Mother"],
    ["Age", profile.age ? `${profile.age} years` : "Needs entry"],
    ["Stage", estimate ? `${estimate.weeks}w ${estimate.extraDays}d pregnant` : stage.value],
    ["EDD", estimate ? `${formatDate(estimate.edd)} (estimate)` : "Needs dating"],
    ["Height / weight", `${profile.height || "-"} / ${latestWeight ? `${latestWeight.value} ${latestWeight.unit || "kg"}` : profile.weightKg ? `${profile.weightKg} kg` : "-"}`],
    ["BMI", bmi ? `${bmi.toFixed(1)} from saved height/weight` : "Needs height and weight"],
    ["Doctor / clinic", profile.doctorName || "Not set"],
    ["Local storage", "Private to this browser"]
  ];

  els.doctorBriefTitle.textContent = `${profile.name || "Mother"} visit summary`;
  els.doctorBriefIntro.textContent = "Show this section at the appointment. It pulls profile, pregnancy dates, past concerns, latest vitals/labs, and recent notes from this browser only.";
  els.doctorSnapshotGrid.innerHTML = snapshot.map(([label, value]) => `
    <div>
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  const vitals = [
    buildDoctorResultCard("Blood pressure", latestBp, "Add BP before visit"),
    buildDoctorResultCard("Temperature", getLatest("temperature"), "Add if fever or illness"),
    buildDoctorResultCard("Weight", latestWeight || (profile.weightKg ? { value: profile.weightKg, unit: "kg", date: "", type: "weight" } : null), "Saved profile weight"),
    buildDoctorResultCard("Beta-hCG", getLatest("beta_hcg"), "Pending / not saved"),
    buildDoctorResultCard("Hemoglobin", getLatest("hemoglobin"), "Pending / not saved"),
    buildDoctorResultCard("Fasting glucose", getLatest("fasting_glucose"), "Pending / not saved")
  ];
  els.doctorVitalsGrid.innerHTML = vitals.map((item) => `
    <article class="doctor-vital-card">
      <span>${escapeHTML(item.label)}</span>
      <strong>${escapeHTML(item.value)}</strong>
      <p>${escapeHTML(item.meta)}</p>
    </article>
  `).join("");

  const concerns = buildDoctorConcerns();
  els.doctorConcernList.innerHTML = concerns.length
    ? concerns.map((item) => renderDoctorListItem(item)).join("")
    : `<div class="empty">No risk flags or symptoms are selected. Add concerns in Profile, Safety, or Care log before the visit.</div>`;

  const reportFlags = buildDoctorReportFlags();
  els.doctorReportFlags.innerHTML = reportFlags.length
    ? reportFlags.map((item) => renderDoctorListItem(item)).join("")
    : `<div class="empty">No warning-level report values are saved. Add reports or use the Healthians import button if relevant.</div>`;

  const history = [...state.notes]
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, 5)
    .map((note) => ({
      level: "soft",
      label: `${formatDate(note.date)} · ${noteTypeLabel(note.type)}`,
      title: note.title || noteTypeLabel(note.type),
      text: note.text || "No detail saved"
    }));
  els.doctorHistoryList.innerHTML = history.length
    ? history.map((item) => renderDoctorListItem(item)).join("")
    : `<div class="empty">No care history notes yet. Add symptoms, doctor advice, medicines, concerns, and planned tests in Care log.</div>`;

  const text = buildDoctorBriefText();
  if (els.doctorBriefText) els.doctorBriefText.value = text;
}

function buildDoctorResultCard(label, result, emptyText) {
  if (!result) {
    return { label, value: "-", meta: emptyText };
  }
  const interpretation = interpretResult(result);
  const dateText = result.date ? formatDate(result.date) : emptyText;
  return {
    label,
    value: `${result.value}${result.unit ? ` ${result.unit}` : ""}`,
    meta: `${dateText} · ${interpretation.label}`
  };
}

function buildDoctorConcerns() {
  const items = [];
  const riskLabels = activeRiskLabels();
  if (riskLabels.length) {
    items.push({
      level: "warning",
      label: "Known risks",
      title: "Risk flags",
      text: riskLabels.join(", ")
    });
  }
  if (state.profile.gallstoneStatus) {
    items.push({
      level: "warning",
      label: "Past concern",
      title: "Gallstone context",
      text: state.profile.gallstoneStatus
    });
  }
  if (state.profile.clinicalContext) {
    items.push({
      level: "info",
      label: "Clinical context",
      title: "Saved background",
      text: state.profile.clinicalContext
    });
  }
  const symptoms = SYMPTOMS
    .filter(([key]) => state.symptoms[key])
    .map(([, label]) => label);
  if (symptoms.length) {
    items.unshift({
      level: "danger",
      label: "Current symptoms checked",
      title: "Urgent symptom review",
      text: symptoms.join(", ")
    });
  }
  const openTasks = getTasks().filter((task) => ["due", "overdue"].includes(task.status)).slice(0, 3);
  openTasks.forEach((task) => {
    items.push({
      level: task.status === "overdue" ? "danger" : "warning",
      label: task.statusLabel,
      title: task.title,
      text: `${task.tests.join(", ")}. ${task.reason}`
    });
  });
  return items.slice(0, 8);
}

function buildDoctorReportFlags() {
  return [...state.results]
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .map((result) => ({ result, interpretation: interpretResult(result) }))
    .filter(({ interpretation }) => ["danger", "warning"].includes(interpretation.level))
    .slice(0, 8)
    .map(({ result, interpretation }) => ({
      level: interpretation.level,
      label: `${formatDate(result.date)} · ${interpretation.label}`,
      title: `${TESTS[result.type]?.label || result.label || result.type}: ${result.value}${result.unit ? ` ${result.unit}` : ""}`,
      text: interpretation.message
    }));
}

function renderDoctorListItem(item) {
  return `
    <article class="doctor-list-item">
      <span class="chip ${statusClass(item.level)}">${escapeHTML(item.label)}</span>
      <strong>${escapeHTML(item.title)}</strong>
      <p>${escapeHTML(item.text)}</p>
    </article>
  `;
}

async function copyDoctorBriefText() {
  const text = buildDoctorBriefText();
  if (!text) return;
  if (els.doctorBriefText) els.doctorBriefText.value = text;
  const copied = await copyTextToClipboard(text, els.doctorBriefText);
  if (els.copyDoctorBriefStatus) {
    els.copyDoctorBriefStatus.textContent = copied
      ? "Copied. Paste this into WhatsApp, Notes, or show it to the doctor."
      : "Select the summary text and copy manually if the browser blocks clipboard access.";
  }
}

function printDoctorBrief() {
  document.body.classList.add("printing-doctor-brief");
  window.print();
  window.setTimeout(() => document.body.classList.remove("printing-doctor-brief"), 500);
}

function buildDoctorBriefText() {
  const profile = state.profile;
  const estimate = pregnancyEstimate();
  const bmi = profileBmi();
  const riskLabels = activeRiskLabels();
  const vitals = [
    ["BP", getLatest("blood_pressure")],
    ["Temp", getLatest("temperature")],
    ["Weight", getLatest("weight") || (profile.weightKg ? { value: profile.weightKg, unit: "kg", date: "", type: "weight" } : null)],
    ["Beta-hCG", getLatest("beta_hcg")],
    ["Hb", getLatest("hemoglobin")],
    ["Glucose fasting", getLatest("fasting_glucose")]
  ].map(([label, result]) => `${label}: ${result ? `${result.value}${result.unit ? ` ${result.unit}` : ""}${result.date ? ` (${formatDate(result.date)})` : ""}` : "not saved"}`);
  const reportFlags = buildDoctorReportFlags().map((item) => `- ${item.title} [${item.label}]: ${item.text}`);
  const history = [...state.notes]
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, 5)
    .map((note) => `- ${formatDate(note.date)} · ${note.title || noteTypeLabel(note.type)}: ${note.text || "No detail saved"}`);

  return [
    `Patient visit summary - ${profile.name || "Mother"}`,
    `Generated: ${formatDate(todayISO())}`,
    "",
    "Profile",
    `Age: ${profile.age || "not set"}`,
    `Height/weight: ${profile.height || "not set"} / ${profile.weightKg ? `${profile.weightKg} kg` : "not set"}`,
    `BMI: ${bmi ? bmi.toFixed(1) : "not available"}`,
    `Diet/context: ${profile.dietPattern || "not set"}`,
    `City: ${profile.city || "not set"}`,
    `Doctor/clinic: ${profile.doctorName || "not set"}`,
    "",
    "Pregnancy timing",
    estimate
      ? `Estimated stage: ${estimate.weeks}w ${estimate.extraDays}d; EDD ${formatDate(estimate.edd)}; LMP ${formatDate(estimate.lmp)} (${estimate.source}); pending ultrasound confirmation.`
      : `Stage: ${stageSummary().value}; add LMP/missed period or dating scan if pregnancy timing is needed.`,
    "",
    "Past/current concerns",
    `Risk flags: ${riskLabels.length ? riskLabels.join(", ") : "none selected"}`,
    `Gallstone context: ${profile.gallstoneStatus || "not set"}`,
    `Clinical context: ${profile.clinicalContext || "not set"}`,
    "",
    "Current vitals/latest values",
    ...vitals,
    "",
    "Recent report flags",
    ...(reportFlags.length ? reportFlags : ["- No warning-level report values saved."]),
    "",
    "Recent care history",
    ...(history.length ? history : ["- No care history notes saved."]),
    "",
    "Safety note: This dashboard is a local care-prep summary only. Doctor/clinical judgement overrides dashboard estimates."
  ].join("\n");
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
  const estimate = pregnancyEstimate();
  if (estimate) {
    renderPregnancyTimeline(estimate);
    return;
  }

  els.timelineTitle.textContent = "Care test timeline";
  els.timelinePill.textContent = "ACOG, WHO, FOGSI anchored";
  els.dueDatePanel.innerHTML = `
    <div>
      <p class="label">Timeline setup</p>
      <h3>Set delivery date or pregnancy dates</h3>
      <p>Add a delivery date for postpartum windows, or keep the missed-period/LMP fields for pregnancy timeline estimates.</p>
    </div>
  `;

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

function renderPregnancyTimeline(estimate) {
  const milestones = getPregnancyMilestones(estimate);
  const counts = milestones.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  els.timelineTitle.textContent = "Pregnancy timeline";
  els.timelinePill.textContent = `EDD ${formatDate(estimate.edd)}`;
  els.dueDatePanel.innerHTML = `
    <div class="due-date-hero">
      <div>
        <p class="label">Expected date of birth</p>
        <h3>${formatDate(estimate.edd)}</h3>
        <p>Calculated as 40 weeks / 280 days from ${formatDate(estimate.lmp)}. This is an estimate and should be confirmed or revised by the gyne with early ultrasound.</p>
      </div>
      <div class="due-date-grid">
        <div>
          <span>Current stage</span>
          <strong>${estimate.weeks}w ${estimate.extraDays}d</strong>
        </div>
        <div>
          <span>Trimester</span>
          <strong>${escapeHTML(estimate.trimester)}</strong>
        </div>
        <div>
          <span>Remaining</span>
          <strong>${weekDayLabel(estimate.daysRemaining)}</strong>
        </div>
        <div>
          <span>Dating source</span>
          <strong>${escapeHTML(estimate.source)}</strong>
        </div>
      </div>
    </div>
    <div class="timeline-counts" aria-label="Pregnancy timeline status counts">
      <span><strong>${counts.passed || 0}</strong> passed</span>
      <span><strong>${counts.due || 0}</strong> due now</span>
      <span><strong>${counts.pending || 0}</strong> pending</span>
    </div>
  `;

  els.timelineList.innerHTML = milestones.map((item) => `
    <article class="timeline-row pregnancy-row">
      <div class="timeline-date">
        <span>${escapeHTML(item.windowText)}</span>
        <small>${escapeHTML(item.dateText)}</small>
      </div>
      <div>
        <strong>${escapeHTML(item.title)}</strong>
        <p>${item.tests.map(escapeHTML).join(", ")}. ${escapeHTML(item.reason)}</p>
      </div>
      <span class="chip ${statusClass(item.status)}">${statusLabel(item.status)}</span>
    </article>
  `).join("");
}

function renderDiagnosticPlan() {
  const estimate = pregnancyEstimate();
  const timelineRows = DIAGNOSTIC_TEST_WINDOWS.map((item) => ({
    ...item,
    status: diagnosticWindowStatus(item, estimate),
    dateText: diagnosticDateText(item, estimate)
  }));
  const bmi = profileBmi();
  const summaryFacts = [
    ["Stage", estimate ? `${estimate.weeks}w ${estimate.extraDays}d` : "Needs LMP or missed period"],
    ["EDD", estimate ? formatDate(estimate.edd) : "Needs dating"],
    ["Risk lens", `Age ${state.profile.age || "-"} · vegan · possible gallstones`],
    ["BMI", bmi ? `${bmi.toFixed(1)} · avoid crash dieting` : "Height/weight needed"]
  ];

  els.diagnosticStageSummary.innerHTML = summaryFacts.map(([label, value]) => `
    <div>
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  els.copyTestList.value = buildDiagnosticCopyText(estimate);
  els.copyTestsStatus.textContent = "";

  els.dueTestGrid.innerHTML = DIAGNOSTIC_NOW_GROUPS.map((item) => `
    <article class="test-priority-card">
      <div>
        <span class="chip success">${escapeHTML(item.type)}</span>
        <small>Do now</small>
      </div>
      <strong>${escapeHTML(item.title)}</strong>
      <p><b>Tests:</b> ${escapeHTML(item.tests)}</p>
      <p><b>Why:</b> ${escapeHTML(item.why)}</p>
    </article>
  `).join("");

  els.nextWindowList.innerHTML = DIAGNOSTIC_NEXT_GROUPS.map((item) => `
    <article class="decision-row">
      <div>
        <strong>${escapeHTML(item.title)}</strong>
        <span>${escapeHTML(diagnosticSourceDate(item.sourceId, estimate))}</span>
      </div>
      <p><b>Tests:</b> ${escapeHTML(item.tests)}</p>
      <p><b>Why:</b> ${escapeHTML(item.why)}</p>
    </article>
  `).join("");

  els.conditionalTestList.innerHTML = DIAGNOSTIC_CONDITIONAL_GROUPS.map((item) => `
    <article class="decision-row">
      <div>
        <strong>${escapeHTML(item.title)}</strong>
        <span>Only if this applies</span>
      </div>
      <p><b>Tests:</b> ${escapeHTML(item.tests)}</p>
      <p><b>Why:</b> ${escapeHTML(item.why)}</p>
    </article>
  `).join("");

  els.notRoutineList.innerHTML = DIAGNOSTIC_NOT_ROUTINE.map((item) => `
    <div class="not-routine-item"><span class="material-symbols-rounded" aria-hidden="true">do_not_disturb_on</span>${escapeHTML(item)}</div>
  `).join("");

  els.diagnosticTimeline.innerHTML = `
    <table class="diagnostic-table responsive-table">
      <thead>
        <tr>
          <th>Window</th>
          <th>Category</th>
          <th>Tests / checks</th>
          <th>Why it matters</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${timelineRows.map((item) => `
          <tr>
            <td data-label="Window">
              <strong>${escapeHTML(item.window)}</strong>
              <small>${escapeHTML(item.dateText)}</small>
            </td>
            <td data-label="Category">${escapeHTML(item.category)}</td>
            <td data-label="Tests">${escapeHTML(item.tests)}</td>
            <td data-label="Why">${escapeHTML(item.purpose)}</td>
            <td data-label="Status"><span class="chip ${statusClass(item.status)}">${diagnosticStatusLabel(item.status)}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  els.hormoneRules.innerHTML = `
    ${HORMONE_TEST_RULES.map((item) => `
      <article class="hormone-rule-card">
        <span>${escapeHTML(item.group)}</span>
        <strong>${escapeHTML(item.tests)}</strong>
        <p><b>When:</b> ${escapeHTML(item.when)}</p>
        <p><b>Rule:</b> ${escapeHTML(item.note)}</p>
      </article>
    `).join("")}
  `;
}

async function copyDiagnosticText(options = {}) {
  const text = els.copyTestList?.value || buildDiagnosticCopyText(pregnancyEstimate());
  if (!text) return;
  const copied = await copyTextToClipboard(text, els.copyTestList);
  if (els.copyTestsStatus) {
    els.copyTestsStatus.textContent = copied
      ? "Copied. Paste this into WhatsApp or send it to the gyne."
      : "Select the text and copy manually if the browser blocks clipboard access.";
  }
  if (options.fromTop && els.copyTestList) {
    els.copyTestList.value = text;
  }
}

function diagnosticSourceDate(sourceId, estimate) {
  const source = DIAGNOSTIC_TEST_WINDOWS.find((item) => item.id === sourceId);
  return source ? diagnosticDateText(source, estimate) : "Timing to confirm";
}

function buildDiagnosticCopyText(estimate) {
  const stage = estimate
    ? `Current estimate: ${estimate.weeks}w ${estimate.extraDays}d; EDD ${formatDate(estimate.edd)} pending dating scan.`
    : "Current estimate: needs LMP/missed-period or dating scan confirmation.";
  const nowLines = DIAGNOSTIC_NOW_GROUPS.map((item, index) =>
    `${index + 1}. ${item.title}: ${item.tests}\n   Why: ${item.why} (${item.type})`
  );
  const datingWindow = diagnosticSourceDate("dating-viability-scan", estimate);
  return [
    "Pregnancy tests/checks to discuss now",
    stage,
    "",
    ...nowLines,
    "",
    `Next scan: Dating/viability transvaginal ultrasound around ${datingWindow}.`,
    "Only if gyne says/if symptoms: quantitative beta-hCG repeat, progesterone, Free T4/TPO antibody, LFT/bilirubin/abdominal ultrasound, CVS/amniocentesis.",
    "Not routine in stable pregnancy: AMH, FSH, LH, estradiol, prolactin, testosterone, DHEAS, cortisol, random broad panels."
  ].join("\n");
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
  const stage = stageSummary();
  const bmi = profileBmi();
  const summary = [
    ["Profile", `${profile.name || "Mother"} · ${profile.age || "age not set"} years · ${profile.height || "height not set"} · ${profile.weightKg ? `${profile.weightKg} kg` : "weight not set"}`],
    ["Current stage", `${stage.value} · ${stage.hint}`],
    ["Diet context", `${profile.dietPattern || "Diet not set"} · ${profile.city || "city not set"} · sleep ${profile.sleepWindow || "not set"}`],
    ["Gallstone context", profile.gallstoneStatus || "Not set"],
    ["BMI snapshot", bmi ? `${bmi.toFixed(1)} based on saved height/weight; no crash dieting in pregnancy` : "Height/weight needed"],
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
      text: "Ask whether CBC/ferritin show iron deficiency and whether iron treatment is needed. Vegan food support: dal, chana, rajma, greens, tofu/soy, and vitamin C with meals."
    });
  }

  if (state.profile.riskFlags.gallstones) {
    suggestions.set("gallstones", {
      title: "Gallstone-safe eating",
      text: "Keep meals regular and lower oil. Avoid fried foods, heavy nut/coconut drinks, vegan cheese, and crash dieting. Review RUQ pain, fever, vomiting, or jaundice urgently."
    });
  }

  if ((state.profile.dietPattern || "").toLowerCase().includes("vegan")) {
    suggestions.set("vegan", {
      title: "Vegan pregnancy nutrients",
      text: "Prioritize protein each meal and verify B12, vitamin D, iodine, iron, calcium, DHA, and choline through labs, prenatal label, and doctor review."
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

function renderDailyRules() {
  const driving = buildDrivingGuidance();
  els.drivingCard.innerHTML = `
    <div class="panel-header">
      <h3>Can she drive?</h3>
      <span class="chip ${statusClass(driving.level)}">${escapeHTML(driving.label)}</span>
    </div>
    <div class="driving-decision">
      <span class="material-symbols-rounded" aria-hidden="true">${escapeHTML(driving.icon)}</span>
      <div>
        <strong>${escapeHTML(driving.title)}</strong>
        <p>${escapeHTML(driving.text)}</p>
      </div>
    </div>
    <div class="rule-mini-grid">
      ${driving.checks.map((check) => `
        <span>${escapeHTML(check)}</span>
      `).join("")}
    </div>
  `;

  els.dontList.innerHTML = DAILY_DONT_ITEMS.map((item) => `
    <li>
      <strong>${escapeHTML(item.title)}</strong>
      <p>${escapeHTML(item.text)}</p>
    </li>
  `).join("");
}

function buildDrivingGuidance() {
  const stopSymptoms = [
    ["severe_headache", "severe headache"],
    ["vision", "vision changes"],
    ["chest", "chest pain or breathing trouble"],
    ["bleeding", "heavy bleeding"],
    ["fever", "fever or chills"],
    ["leg", "one-sided leg swelling/pain"],
    ["fainting", "fainting or dizziness"],
    ["self_harm", "self-harm thoughts"]
  ].filter(([key]) => state.symptoms[key]).map(([, label]) => label);
  const severeResult = state.results.some((result) => interpretResult(result).level === "danger");
  const cSection = state.profile.deliveryType === "c-section" || state.profile.riskFlags.cSection;
  const day = postpartumDay();

  if (stopSymptoms.length || severeResult) {
    const reason = stopSymptoms.length
      ? stopSymptoms.join(", ")
      : "an urgent result is saved";
    return {
      level: "danger",
      label: "No driving",
      icon: "emergency",
      title: "Do not drive herself right now",
      text: `Because ${reason} is present, she should not drive herself. Use a companion/driver and seek urgent medical review if symptoms are current.`,
      checks: ["Use a driver", "Call doctor/ER", "Do not travel alone"]
    };
  }

  if (cSection && day !== null && day <= 42) {
    return {
      level: "warning",
      label: "Ask doctor first",
      icon: "local_hospital",
      title: "Post-C-section driving needs clearance",
      text: "After a C-section or while taking sedating pain medicines, driving should wait until the doctor clears her and she can twist, brake hard, and react normally without pain.",
      checks: ["No sedating tablets", "Can emergency brake", "Doctor clearance"]
    };
  }

  return {
    level: "success",
    label: "Yes, if well",
    icon: "directions_car",
    title: "Short answer: she can drive",
    text: "If this is an uncomplicated pregnancy/early follow-up and she is alert, not dizzy, not vomiting badly, not bleeding, not in pain, and not on sedating medicine, short driving is okay with a proper seat belt.",
    checks: ["Seat belt under bump", "Short trips", "Breaks + water"]
  };
}

function renderDietPlan() {
  const estimate = pregnancyEstimate();
  const bmi = profileBmi();
  const profileFacts = [
    ["Stage", estimate ? `Est. ${estimate.weeks}w ${estimate.extraDays}d` : "Confirm pregnancy timing"],
    ["Reference", estimate ? `LMP ${formatDate(estimate.lmp)} (${estimate.source})` : "Missed period / LMP needed"],
    ["Age / body", `${state.profile.age || "-"} years · ${state.profile.height || "-"} · ${state.profile.weightKg ? `${state.profile.weightKg} kg` : "-"}`],
    ["BMI", bmi ? `${bmi.toFixed(1)} · avoid crash dieting` : "Add height/weight"],
    ["Diet", state.profile.dietPattern || "Vegan/lactose status not set"],
    ["Gallstones", state.profile.gallstoneStatus || "Status not set"],
    ["Place", state.profile.city || "City not set"],
    ["Sleep", `${state.profile.sleepWindow || "-"} / wake ${state.profile.wakeWindow || "-"}`]
  ];

  els.dietSummary.innerHTML = profileFacts.map(([label, value]) => `
    <div>
      <span>${escapeHTML(label)}</span>
      <strong>${escapeHTML(value)}</strong>
    </div>
  `).join("");

  els.mealTimeline.innerHTML = `
    <table class="diet-timeline-table responsive-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Meal</th>
          <th>Food plan</th>
          <th>Ayurveda lens</th>
          <th>Gallstone guard</th>
        </tr>
      </thead>
      <tbody>
        ${MEAL_TIMELINE.map((item) => `
          <tr>
            <td data-label="Time" class="value-cell">${escapeHTML(item.time)}</td>
            <td data-label="Meal"><strong>${escapeHTML(item.title)}</strong></td>
            <td data-label="Food">${escapeHTML(item.food)}</td>
            <td data-label="Ayurveda">${escapeHTML(item.ayurveda)}</td>
            <td data-label="Gallstone">${escapeHTML(item.gallstone)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  els.seasonalDiet.innerHTML = SEASONAL_DIET_RULES.map((item) => `
    <div class="advice-card diet-rule">
      <strong>${escapeHTML(item.title)}</strong>
      <p>${escapeHTML(item.text)}</p>
    </div>
  `).join("");

  els.nutrientMatrix.innerHTML = `
    <table class="nutrition-table responsive-table">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Target</th>
          <th>Vegan foods</th>
          <th>Timing</th>
          <th>Watch-outs</th>
        </tr>
      </thead>
      <tbody>
        ${NUTRIENT_MATRIX.map((item) => `
          <tr>
            <td data-label="Nutrient"><strong>${escapeHTML(item.nutrient)}</strong></td>
            <td data-label="Target">${escapeHTML(item.target)}</td>
            <td data-label="Foods">${escapeHTML(item.veganFoods)}</td>
            <td data-label="Timing">${escapeHTML(item.timing)}</td>
            <td data-label="Watch">${escapeHTML(item.watch)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  els.labChecklist.innerHTML = `
    <table class="compact-table responsive-table">
      <thead>
        <tr>
          <th>Priority</th>
          <th>Test</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${DIET_LAB_CHECKS.map((item) => `
          <tr>
            <td data-label="Priority"><span class="chip ${item.priority === "Now" ? "warn" : item.priority === "If symptoms" ? "danger" : "soft"}">${escapeHTML(item.priority)}</span></td>
            <td data-label="Test"><strong>${escapeHTML(item.test)}</strong></td>
            <td data-label="Purpose">${escapeHTML(item.purpose)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderSupplements() {
  const supplementRows = SUPPLEMENT_PLAN.map((item) => {
    const chipClass = item.level === "avoid" ? "danger" : item.level === "lab" ? "warn" : "success";
    const chipLabel = item.level === "avoid" ? "Avoid" : item.level === "lab" ? "Lab based" : "Daily";
    return `
      <tr>
        <td data-label="Item">
          <div class="table-item-title">
            <strong>${escapeHTML(item.nutrient)}</strong>
            <span class="chip ${chipClass}">${chipLabel}</span>
          </div>
          <small>${escapeHTML(item.why)}</small>
        </td>
        <td data-label="Dose">${escapeHTML(item.dailyDose)}</td>
        <td data-label="Timing">${escapeHTML(item.timing)}</td>
        <td data-label="Brand/source">${escapeHTML(item.brand)}</td>
        <td data-label="Tests">${escapeHTML(item.tests)}</td>
      </tr>
    `;
  }).join("");

  els.supplementPlan.innerHTML = `
    <table class="supplement-table responsive-table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Daily dose</th>
          <th>Timing</th>
          <th>Brand/source</th>
          <th>Tests needed</th>
        </tr>
      </thead>
      <tbody>${supplementRows}</tbody>
    </table>
  `;

  els.supplementTests.innerHTML = `
    <table class="compact-table responsive-table">
      <thead>
        <tr>
          <th>Priority</th>
          <th>Purpose</th>
          <th>Tests</th>
          <th>Why it matters</th>
        </tr>
      </thead>
      <tbody>
        ${SUPPLEMENT_TESTS.map((item) => `
          <tr>
            <td data-label="Priority"><span class="chip ${item.priority === "Now" ? "warn" : ""}">${escapeHTML(item.priority)}</span></td>
            <td data-label="Purpose"><strong>${escapeHTML(item.title)}</strong></td>
            <td data-label="Tests">${escapeHTML(item.tests)}</td>
            <td data-label="Why">${escapeHTML(item.why)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;

  els.buyingRules.innerHTML = `
    <table class="compact-table responsive-table">
      <thead>
        <tr>
          <th>Rule</th>
          <th>What to check</th>
        </tr>
      </thead>
      <tbody>
        ${BUYING_RULES.map((item) => `
          <tr>
            <td data-label="Rule"><strong>${escapeHTML(item.title)}</strong></td>
            <td data-label="What to check">${escapeHTML(item.text)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
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

  const urineInflammation = ["urine_leukocyte_esterase", "urine_pus_cells", "urine_nitrite", "urine_bacteria"]
    .some((type) => getResults(type).some((result) => interpretResult(result).level === "warning"));
  const cultureDone = getResults("urine_culture")
    .some((result) => !/not found|not done|missing|pending/i.test(String(result.value || "")));

  if (urineInflammation && !cultureDone) {
    tasks.push({
      id: "urine-culture-follow-up",
      window: [0, 365],
      windowText: "Now",
      title: "Urine culture + sensitivity",
      tests: ["Urine culture + antibiotic sensitivity"],
      reason: "Urine routine suggests inflammation/possible UTI, but the dashboard has no culture-confirmed result saved.",
      status: "due"
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
      || labels.includes("urine culture") && result.type === "urine_culture"
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
    ["hematocrit", /\b(?:hct|hematocrit)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
    ["wbc", /\b(?:wbc|white blood cells?)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
    ["absolute_neutrophils", /\b(?:anc|absolute neutrophils?|neutrophils absolute)\s*[:\-]?\s*(\d{1,2}(?:\.\d+)?)/i],
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
    ["urine_leukocyte_esterase", /\b(?:leucocyte|leukocyte)\s+esterase\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_pus_cells", /\bpus cells?\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_nitrite", /\bnitrite\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_bacteria", /\bbacteria\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_epithelial_cells", /\bepithelial cells?\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_rbc", /\burine\s+rbc\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_protein", /\burine\s+protein\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_ketones", /\burine\s+ketones?\s*[:\-]?\s*([^\n,;]+)/i],
    ["urine_culture", /\burine culture(?:\s*\+\s*sensitivity)?\s*[:\-]?\s*([^\n,;]+)/i],
    ["alt_ast", /\b(?:alt|ast|sgpt|sgot)\s*[:\-]?\s*(\d{1,4}(?:\.\d+)?)/i],
    ["vitamin_d", /\b(?:vitamin d|25-oh d)\s*[:\-]?\s*(\d{1,3}(?:\.\d+)?)/i],
    ["b12", /\b(?:b12|vitamin b12)\s*[:\-]?\s*(\d{2,5}(?:\.\d+)?)/i],
    ["folate", /\bfolate\s*[:\-]?\s*(\d{1,3}(?:\.\d+)?)/i],
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

function isNegativeLike(value) {
  return /negative|absent|nil|not\s+detected|not\s+seen|none/i.test(String(value || ""));
}

function isPositiveLike(value) {
  const text = String(value || "");
  if (isNegativeLike(text)) return false;
  return /positive|present|detected|seen|\+/i.test(text);
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

  if (result.type === "urine_leukocyte_esterase") {
    if (isPositiveLike(value)) return warning("Culture check", "Leukocyte esterase is positive. In pregnancy, ask the gyne about urine culture + sensitivity; this is not culture-proven UTI by itself.");
    if (isNegativeLike(value)) return success("Negative", "No leukocyte esterase flag from this value.");
    return neutral("Logged", "Interpret with urine microscopy, symptoms, and culture.");
  }

  if (result.type === "urine_pus_cells") {
    if (numeric > 5) return warning("High", "Pus cells are above the common urine microscopy range. In pregnancy, culture + sensitivity is the useful follow-up if not already done.");
    return neutral("Logged", "Use the lab range, clean-catch quality, symptoms, and culture.");
  }

  if (result.type === "urine_nitrite") {
    if (isPositiveLike(value)) return warning("Positive", "Positive nitrite supports bacterial UTI suspicion. Review with symptoms and urine culture.");
    if (isNegativeLike(value)) return neutral("Negative", "Negative nitrite lowers suspicion for some bacteria, but it does not fully exclude UTI.");
    return neutral("Logged", "Interpret with the full urine routine and culture.");
  }

  if (result.type === "urine_bacteria") {
    if (isPositiveLike(value)) return warning("Seen", "Bacteria seen on microscopy needs culture/symptom correlation in pregnancy.");
    if (isNegativeLike(value)) return neutral("Absent", "No bacteria seen on microscopy, but pyuria can still need culture review.");
    return neutral("Logged", "Interpret with clean-catch quality, symptoms, and culture.");
  }

  if (result.type === "urine_epithelial_cells") {
    if (numeric > 10) return warning("Sample review", "Epithelial cells are high and may suggest sample contamination. Consider clean-catch repeat if gyne asks.");
    return neutral("Logged", "Use with clean-catch quality and other urine markers.");
  }

  if (["urine_rbc", "urine_protein", "urine_ketones"].includes(result.type)) {
    if (isPositiveLike(value) || (numeric && numeric > 0)) return warning("Review", `${TESTS[result.type].label} is not negative. Review with symptoms, BP, hydration, and clinician context.`);
    if (isNegativeLike(value)) return success("Negative", `No ${TESTS[result.type].label.toLowerCase()} flag from this report value.`);
    return neutral("Logged", "Use the lab range and clinician context.");
  }

  if (result.type === "urine_culture") {
    if (/not found|not done|missing/i.test(value)) return warning("Needed", "No urine culture/sensitivity result is saved. With urine inflammation in pregnancy, ask the gyne whether to do culture + sensitivity now.");
    if (/pending/i.test(value)) return neutral("Pending", "Track the final culture organism, colony count, and antibiotic sensitivity when available.");
    if (/no growth|sterile|negative/i.test(value)) return success("No growth", "Culture wording suggests no significant growth; confirm with the report and symptoms.");
    return warning("Review", "Culture result is saved. Review organism, colony count, and sensitivity with the gyne before any antibiotic decision.");
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
    if (pregnancyEstimate() && numeric >= 92) return warning("Pregnancy review", "Fasting glucose is in a range that should be reviewed in pregnancy context. Ask the gyne about HbA1c/OGTT timing and local criteria.");
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

  if (result.type === "hematocrit") {
    if (numeric && numeric < 36) return warning("Low", "Hematocrit is below many adult lab ranges. Interpret with hemoglobin, iron studies, pregnancy hemodilution, and symptoms.");
    return neutral("Logged", "Use with CBC indices and lab reference range.");
  }

  if (result.type === "wbc") {
    if (pregnancyEstimate() && numeric && numeric > 10.5) return warning("Mildly high", "WBC is mildly elevated by many lab ranges. Pregnancy can raise WBC, but match this with fever, urine findings, pain, and the lab comment.");
    if (numeric && numeric > 15) return warning("Review", "WBC may be elevated, but postpartum timing and infection symptoms matter. Review with clinician if fever/pain/discharge.");
    return neutral("Logged", "Use lab reference range and symptoms for CBC interpretation.");
  }

  if (result.type === "absolute_neutrophils") {
    if (numeric && numeric > 7.5) return warning("Mildly high", "Absolute neutrophils are mildly high by many lab ranges. Review with CBC comment, urine findings, and symptoms.");
    return neutral("Logged", "Use lab reference range and symptoms.");
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
    if (numeric && numeric > 450) return warning("High", "Platelets are above many lab ranges. Review with CBC comment, inflammation/infection context, and iron status.");
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

  if (result.type === "vitamin_d") {
    if (numeric && numeric < 20) return warning("Deficient", "Vitamin D is in a deficient range by many lab cutoffs. Ask the gyne for a pregnancy-safe dose plan.");
    if (numeric && numeric < 30) return warning("Low", "Vitamin D may be insufficient by many lab cutoffs. Review supplementation plan.");
    return neutral("Logged", "Use lab reference range and clinician context.");
  }

  if (result.type === "b12") {
    if (numeric && numeric < 300) return warning("Low/borderline", "B12 may be low or borderline, especially with vegan diet. Discuss supplementation and anemia context.");
    return neutral("Logged", "B12 is saved. Vegan pregnancy usually still needs a confirmed B12 supplementation plan.");
  }

  if (result.type === "folate") {
    if (numeric && numeric < 4) return warning("Low", "Folate appears low by many lab ranges. Discuss pregnancy folic-acid plan promptly.");
    return neutral("Logged", "Use lab reference range and clinician-approved prenatal folate plan.");
  }

  if (["alt_ast", "free_t4", "blood_group_rh", "weight"].includes(result.type)) {
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
  state.profile.age = els.profileAge.value.trim();
  state.profile.height = els.profileHeight.value.trim();
  state.profile.heightCm = String(parseHeightCm(state.profile.height) || state.profile.heightCm || "");
  state.profile.weightKg = els.profileWeight.value.trim();
  state.profile.deliveryDate = els.deliveryDate.value;
  state.profile.deliveryType = els.deliveryType.value;
  state.profile.feedingStatus = els.feedingStatus.value;
  state.profile.lastPeriodDate = els.lastPeriodDate.value;
  state.profile.missedPeriodDate = els.missedPeriodDate.value;
  if (!state.profile.lastPeriodDate && state.profile.missedPeriodDate) {
    state.profile.lastPeriodDate = estimateLmpFromMissedPeriod(state.profile.missedPeriodDate);
  }
  state.profile.city = els.profileCity.value.trim();
  state.profile.sleepWindow = els.sleepWindow.value.trim();
  state.profile.wakeWindow = els.wakeWindow.value.trim();
  state.profile.dietPattern = els.dietPattern.value.trim();
  state.profile.gallstoneStatus = els.gallstoneStatus.value.trim();
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
  const savedProfile = saved.profile || {};
  const profile = {
    ...base.profile,
    ...savedProfile,
    riskFlags: { ...base.profile.riskFlags, ...(savedProfile.riskFlags || {}) }
  };

  // Existing users may have saved blank profile fields before pregnancy details existed.
  PERSONAL_PROFILE_DEFAULT_KEYS.forEach((key) => {
    if (!profile[key]) profile[key] = base.profile[key];
  });
  profile.riskFlags.positivePregnancyTest = Boolean(profile.riskFlags.positivePregnancyTest || base.profile.riskFlags.positivePregnancyTest);
  profile.riskFlags.gallstones = Boolean(profile.riskFlags.gallstones || base.profile.riskFlags.gallstones);

  return {
    profile,
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

  const message = applyUpdatePayload(payload, payload.sourceLabel || "Telegram");
  clearSharedUpdateHash();
  return message;
}

function applyUpdatePayload(payload, sourceLabel = "update") {
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

  if (!addedResults && !addedNotes) {
    return `This ${sourceLabel} is already listed in this browser.`;
  }
  return `Added ${addedResults} result${addedResults === 1 ? "" : "s"} and ${addedNotes} care note${addedNotes === 1 ? "" : "s"} from ${sourceLabel}.`;
}

function readSharedUpdatePayload() {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return null;
  const params = new URLSearchParams(hash);
  const preset = params.get("preset");
  if (preset === "healthians-20260612") {
    return {
      ...expandSharedUpdatePayload(HEALTHIANS_20260612_UPDATE),
      sourceLabel: "Healthians report"
    };
  }

  const encoded = params.get("add") || params.get("update");
  if (!encoded) return null;

  try {
    const base64 = encoded.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(encoded.length / 4) * 4, "=");
    const binary = atob(base64);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    return expandSharedUpdatePayload(JSON.parse(new TextDecoder().decode(bytes)));
  } catch {
    return null;
  }
}

function expandSharedUpdatePayload(payload) {
  if (!payload || typeof payload !== "object") return null;
  const date = payload.d || todayISO();
  const expanded = { ...payload };

  if (!expanded.riskFlags && payload.f && typeof payload.f === "object") expanded.riskFlags = payload.f;
  if (!expanded.clinicalContextAppend && typeof payload.c === "string") expanded.clinicalContextAppend = payload.c;

  if (!expanded.results && Array.isArray(payload.r)) {
    expanded.results = payload.r.map((entry) => {
      if (!Array.isArray(entry)) return entry;
      const [type, value, unit = "", note = "", id = ""] = entry;
      return {
        id: id || `shared-${date}-${type}`,
        date,
        type,
        value,
        unit,
        note
      };
    });
  }

  if (!expanded.notes && Array.isArray(payload.n)) {
    expanded.notes = payload.n.map((entry, index) => {
      if (!Array.isArray(entry)) return entry;
      const [title, text, type = "report", id = ""] = entry;
      return {
        id: id || `shared-note-${date}-${index}`,
        date,
        type,
        title,
        text
      };
    });
  }

  return expanded;
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

function pregnancyEstimate() {
  if (state.profile.deliveryDate) return null;
  const lmp = state.profile.lastPeriodDate || estimateLmpFromMissedPeriod(state.profile.missedPeriodDate);
  if (!lmp) return null;
  const start = new Date(`${lmp}T00:00:00`);
  if (Number.isNaN(start.getTime())) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const days = Math.max(0, Math.floor((today - start) / 86400000));
  const weeks = Math.floor(days / 7);
  const edd = addDays(lmp, 280);
  const daysRemaining = Math.max(0, 280 - days);
  const missedEstimate = estimateLmpFromMissedPeriod(state.profile.missedPeriodDate);
  const source = missedEstimate && missedEstimate === lmp
    ? "estimated from missed period"
    : "entered/estimated LMP";
  return {
    days,
    weeks,
    extraDays: days % 7,
    edd,
    daysRemaining,
    lmp,
    trimester: trimesterForDays(days),
    source
  };
}

function estimateLmpFromMissedPeriod(missedDate) {
  if (!missedDate) return "";
  const date = new Date(`${missedDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "";
  date.setDate(date.getDate() - 28);
  return toISODate(date);
}

function stageSummary() {
  const day = postpartumDay();
  if (day !== null) return { label: "Postpartum", value: `Day ${day}`, hint: timelinePhase(day) };
  const estimate = pregnancyEstimate();
  if (estimate) {
    return {
      label: "Pregnancy estimate",
      value: `${estimate.weeks}w ${estimate.extraDays}d`,
      hint: `LMP ${formatDate(estimate.lmp)} · confirm with beta-hCG/gyne`
    };
  }
  return { label: "Stage", value: "-", hint: "Add delivery date or pregnancy reference date" };
}

function profileBmi() {
  const kg = parseFloat(state.profile.weightKg);
  const cm = parseHeightCm(state.profile.height) || parseFloat(state.profile.heightCm);
  if (!kg || !cm) return null;
  return kg / ((cm / 100) ** 2);
}

function getPregnancyMilestones(estimate) {
  return PREGNANCY_MILESTONES.map((item) => {
    let status = pregnancyMilestoneStatus(item, estimate.days);
    if (item.id === "beta-hcg" && getResults("beta_hcg").length) status = "complete";
    const startDate = addDays(estimate.lmp, item.startDay);
    const endDate = addDays(estimate.lmp, item.endDay);
    return {
      ...item,
      status,
      windowText: pregnancyWindowLabel(item),
      dateText: item.startDay === item.endDay
        ? formatDate(startDate)
        : `${formatDate(startDate)} - ${formatDate(endDate)}`
    };
  });
}

function pregnancyMilestoneStatus(item, currentDay) {
  if (currentDay > item.endDay) return "passed";
  if (currentDay >= item.startDay) return "due";
  return "pending";
}

function diagnosticWindowStatus(item, estimate) {
  if (item.conditional) return "conditional";
  if (item.always) return "active";
  if (!estimate || item.startDay === undefined || item.endDay === undefined) return "pending";
  if (estimate.days > item.endDay) return "passed";
  if (estimate.days >= item.startDay) return "due";
  return "pending";
}

function diagnosticDateText(item, estimate) {
  if (item.conditional || item.always || !estimate || item.startDay === undefined || item.endDay === undefined) {
    return item.window;
  }
  const startDate = addDays(estimate.lmp, item.startDay);
  const endDate = addDays(estimate.lmp, item.endDay);
  return item.startDay === item.endDay
    ? formatDate(startDate)
    : `${formatDate(startDate)} - ${formatDate(endDate)}`;
}

function diagnosticStatusLabel(status) {
  return {
    active: "Every visit",
    conditional: "Symptom-triggered",
    due: "Due now",
    pending: "Pending",
    passed: "Passed"
  }[status] || statusLabel(status);
}

function pregnancyWindowLabel(item) {
  const start = weekDayLabel(item.startDay);
  const end = weekDayLabel(item.endDay);
  return item.startDay === item.endDay ? start : `${start} - ${end}`;
}

function trimesterForDays(days) {
  if (days < 98) return "First trimester";
  if (days < 196) return "Second trimester";
  if (days < 280) return "Third trimester";
  return "EDD reached / post-date";
}

function weekDayLabel(days) {
  const safeDays = Math.max(0, Number(days) || 0);
  return `${Math.floor(safeDays / 7)}w ${safeDays % 7}d`;
}

function parseHeightCm(value) {
  if (!value) return 0;
  const cmMatch = String(value).match(/(\d+(?:\.\d+)?)\s*cm/i);
  if (cmMatch) return parseFloat(cmMatch[1]);
  const feetMatch = String(value).match(/(\d+)\s*(?:ft|feet|')\s*(\d+)?/i);
  if (!feetMatch) return 0;
  const feet = Number(feetMatch[1] || 0);
  const inches = Number(feetMatch[2] || 0);
  return (feet * 12 + inches) * 2.54;
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
  return toISODate(new Date());
}

function toISODate(date) {
  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function addDays(value, amount) {
  const date = new Date(`${value}T00:00:00`);
  date.setDate(date.getDate() + amount);
  return toISODate(date);
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
    pending: "Pending",
    passed: "Passed",
    active: "Active",
    conditional: "If symptoms",
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
  if (["danger", "overdue", "conditional"].includes(status)) return "danger";
  if (["warning", "due"].includes(status)) return "warn";
  if (["success", "complete", "active"].includes(status)) return "success";
  if (["pending", "passed", "upcoming", "past", "unknown", "info"].includes(status)) return "soft";
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
