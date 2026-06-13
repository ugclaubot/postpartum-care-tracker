# Postpartum Care Tracker

A local-first dashboard for tracking postpartum tests, symptoms, lab results, clinician questions, nutrition prompts, and next-step suggestions.

This project is intentionally conservative. It is a tracking and preparation tool, not a doctor. It flags urgent patterns, explains common test meanings, and helps prepare doctor follow-ups.

## Open

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 4177 --directory Projects/Postpartum-Care-Tracker
```

Then visit `http://localhost:4177`.

## What It Does

- Builds a postpartum timeline from delivery date, or an estimated pregnancy timeline from LMP/missed-period data.
- Shows a dedicated antenatal diagnostic plan: blood tests, urine tests, infection screening, genetic screening, ultrasound windows, physical checks, and hormone-test rules.
- Tracks risk factors such as gestational diabetes, hypertension, thyroid history, C-section, heavy bleeding, and anemia history.
- Recommends regular follow-up windows and test categories.
- Accepts manual lab entries and pasted report text.
- Generates a dashboard with urgent flags, due tests, beta-hCG repeat prompts, trend summaries, and food or supplement discussion prompts.
- Keeps a care-history log for doctor advice, symptoms, food/supplement changes, and planned tests.
- Stores data only in browser `localStorage`.
- Exports a JSON snapshot for backup or sharing with a clinician.

## Medical Boundary

Use this alongside an obstetrician, physician, or qualified clinician. Do not start, stop, or dose medicines or supplements from this dashboard alone. Seek urgent medical care for severe symptoms such as heavy bleeding, chest pain, trouble breathing, severe headache, vision changes, fainting, fever, severe blood pressure values, seizures, or thoughts of self-harm or harming the baby.

## Evidence Anchors

- ACOG, Optimizing Postpartum Care: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care
- ACOG, Perinatal mental health screening: https://www.acog.org/programs/perinatal-mental-health/patient-screening
- ACOG, Gestational Diabetes FAQ: https://www.acog.org/womens-health/faqs/gestational-diabetes
- ACOG, Healthy Eating During Pregnancy: https://www.acog.org/womens-health/faqs/healthy-eating-during-pregnancy
- ACOG, Routine Tests During Pregnancy: https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy
- ACOG, Prenatal Genetic Screening Tests: https://www.acog.org/womens-health/faqs/prenatal-genetic-screening-tests
- ACOG, Methods for Estimating the Due Date: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date
- CDC, Pregnancy infection screening: https://www.cdc.gov/pregnancy-hiv-std-tb-hepatitis/php/screening/index.html
- WHO, imaging ultrasound before 24 weeks of pregnancy: https://www.who.int/publications/i/item/9789240051461
- ADA Standards of Care in Diabetes 2026, diabetes in pregnancy: https://diabetesjournals.org/care/article/49/Supplement_1/S321/163918/15-Management-of-Diabetes-in-Pregnancy-Standards
- NICE NG126, ectopic pregnancy and pregnancy of unknown location: https://www.nice.org.uk/guidance/ng126/chapter/recommendations
- WHO, daily iron and folic acid supplementation during pregnancy: https://www.who.int/tools/elena/interventions/daily-iron-pregnancy
- NIH Office of Dietary Supplements, Pregnancy: https://ods.od.nih.gov/factsheets/Pregnancy-HealthProfessional/
- NHM/MoHFW India, calcium supplementation during pregnancy and lactation: https://nhsrcindia.org/sites/default/files/2021-03/Guidelines%20for%20Calcium%20Supplementation%20during%20Pregnancy%20and%20Lactation.pdf
- PubMed postpartum hCG clearance study: https://pubmed.ncbi.nlm.nih.gov/2436389/
- CDC, pregnancy and postpartum complications: https://www.cdc.gov/maternal-infant-health/pregnancy-complications/index.html
- CDC Hear Her warning signs mirror: https://restoredcdc.org/www.cdc.gov/hearher/maternal-warning-signs/index.html
- WHO postnatal care guideline: https://www.who.int/publications/i/item/9789240045989
- FOGSI hyperglycemia in pregnancy guidance: https://www.fogsi.org/wp-content/uploads/2024/08/Binder_Hyperglycemia-in-Pregnancy.pdf
- NATA postpartum anemia consensus: https://onlinelibrary.wiley.com/doi/full/10.1111/tme.12443
- American Thyroid Association postpartum thyroiditis: https://www.thyroid.org/postpartum-thyroiditis/

## Next Backend Step

When ready, the Telegram bot can parse submitted reports, append them to a project JSON store, and regenerate the dashboard data. For now, the dashboard has a paste parser so results can be copied from chat or lab PDFs manually.
