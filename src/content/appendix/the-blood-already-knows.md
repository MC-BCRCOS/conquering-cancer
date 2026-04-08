---
title: "The Blood Already Knows"
subtitle: "How a Machine Learning Algorithm Built on Routine Blood Tests Has Already Proven It Can Catch Colorectal Cancer Months Before Diagnosis"
category: "cancer"
date: "April 2026"
---

Colorectal cancer kills approximately 53,000 Americans each year. Caught while still confined to the colon or rectum, the five-year survival rate is 91 percent. Once it has spread to distant organs, that figure collapses to 16 percent.1 The gap between those two numbers is not a treatment problem; it is a detection problem. And for colorectal cancer, a machine learning algorithm trained entirely on routine blood work has already demonstrated it can close that gap.

91% survival when caught early. 16% once it spreads. ColonFlag identifies the difference from a routine blood draw months before symptoms appear. ## The Signature in the Blood

Colorectal tumors produce a detectable blood signature driven by two mechanisms: chronic occult gastrointestinal bleeding and tumor-associated systemic inflammation. The bleeding causes a gradual, progressive decline in hemoglobin that begins two to four years before diagnosis , yet remains within normal reference ranges throughout, invisible to standard clinical review.2 As iron stores deplete, the complete blood count (CBC) records the consequences: falling mean corpuscular volume (MCV), mean corpuscular hemoglobin (MCH), and rising red blood cell distribution width (RDW).

Simultaneously, the tumor drives systemic inflammation: the white cell and neutrophil counts rise, lymphocytes decline, the neutrophil-to-lymphocyte ratio (NLR) increases progressively, and platelets elevate as tumor-secreted interleukin-6 stimulates thrombopoietin production.3 No single marker is diagnostic. The pattern across the panel—read over time, not at a single point—is the signal.

## The Algorithm That Works

ColonFlag, developed by Kinar et al. and first published in the *Journal of the American Medical Informatics Association* in 2016, is a machine learning algorithm trained on 20 CBC parameters—hemoglobin, MCV, MCH, mean corpuscular hemoglobin concentration (MCHC), RDW, white blood cells, platelets, neutrophils, lymphocytes, monocytes, eosinophils, and basophils, each by count and percentage—plus age, sex, and longitudinal trends computed over 18 and 36 months.4 The model is an ensemble of gradient boosting and random forest classifiers trained on 606,000 individuals from Maccabi Healthcare Services in Israel and externally validated on United Kingdom data from the THIN database.

The results are unambiguous. The algorithm achieved an area under the ROC curve (AUC) of 0.82 in the Israeli validation and 0.81 in the United Kingdom validation, identifying colorectal cancer from blood draws taken 180 to 360 days before clinical diagnosis. In a United States validation at Kaiser Permanente Northwest, ColonFlag was 34 percent more accurate than hemoglobin alone and identified individuals with a tenfold higher risk* of undiagnosed cancer at curable stages. For 66 percent of flagged patients, there was no indication in the medical chart that cancer was suspected.5

## Deployed and Working

ColonFlag is not a hypothesis; it is operational. Maccabi Healthcare Services in Israel runs it passively across its entire patient population. Kaiser Permanente and Geisinger Health System in the United States have deployed it. Roche Diagnostics has integrated it into the navify® Algorithm Suite.6 The software installs on existing infrastructure and processes every new CBC automatically, requires no patient action, and generates a risk score that triggers a clinician alert when a threshold is crossed. No new laboratory test, no additional specimen, no added cost per screen.

## What This Proves

ColonFlag establishes the foundational case for this entire 13-paper series. If a routine blood draw can train a machine learning model to identify colorectal cancer up to a year before it would otherwise be caught—at a scale of hundreds of thousands of patients, validated across three countries—then the question for every other cancer on this list is not whether the methodology works (it does). The question is whether a comparable blood signature exists. For each of the 12 cancers that follow, the evidence says it does.


## Endnotes

1. National Cancer Institute. "Cancer of the Colon and Rectum — Cancer Stat Facts." SEER, 2024.


SEER population data based on US diagnoses 2015 through 2021 reporting five-year relative survival of 91.5% for localized colorectal cancer versus 16.2% for distant-stage disease, with approximately 34% of cases diagnosed at the localized stage. Establishes the survival differential that is the paper’s central policy argument and demonstrates that most patients are still diagnosed too late.

2. Goldshtein I, Neeman U, Chodick G, Shalev V. "Variations in hemoglobin before colorectal cancer diagnosis." *Eur J Cancer Prev*. 2010;19(5):342–344.


Retrospective analysis of 1,074 colorectal cancer patients at Maccabi Healthcare Services showed that hemoglobin begins declining approximately four years before cancer diagnosis, progressing at 0.28 g/dL per six-month period in a logarithmic pattern while remaining within the normal reference range. Establishes the pre-diagnostic hemoglobin trajectory as the primary CBC signal exploited by the ColonFlag algorithm.

3. Virdee PS, Marian IR, Mansouri A, et al. "The Full Blood Count Blood Test for Colorectal Cancer Detection: A Systematic Review, Meta-Analysis, and Critical Appraisal." *Cancers*. 2020;12(9):2348.


Systematic review and meta-analysis of 53 studies confirming 6 CBC components associated with colorectal cancer: decreased RBC, decreased hemoglobin, decreased MCV, increased RDW, increased white blood cells, and increased platelets. Provides the comprehensive evidentiary basis for the multi-marker inflammatory and anemia signature described in the paper, including the biological mechanisms of tumor-driven thrombocytosis via interleukin-6 stimulation.

4. Kinar Y, Kalkstein N, Akiva P, et al. "Development and validation of a predictive model for detection of colorectal cancer in primary care by analysis of complete blood counts: a binational retrospective study." *J Am Med Inform Assoc*. 2016;23(5):879–890.


Original derivation and binational validation of ColonFlag using a gradient boosting and random forest ensemble trained on 20 CBC parameters plus age, sex, and 18- and 36-month trends. Dataset of 606,403 individuals from Maccabi Healthcare Services (Israel) and the UK THIN database. Achieved AUC 0.82 in Israeli validation and 0.81 in UK validation, with detection performance maintained for CBCs taken two years before diagnosis.

5. Hornbrook MC, Goshen R, Choman E, et al. "Early Colorectal Cancer Detected by Machine Learning Model Using Gender, Age, and Complete Blood Count Data." *Dig Dis Sci*. 2017;62(10):2719–2727.


US validation of ColonFlag in 900 colorectal cancer cases and 16,195 cancer-free controls at Kaiser Permanente Northwest. Achieved AUC 0.80, identified individuals with tenfold higher risk of undiagnosed cancer at curable stages, and outperformed hemoglobin alone by 34% at the 180–360-day pre-diagnosis window. Confirmed that 66% of flagged patients had no clinical suspicion of cancer at the time of the triggering blood test.

6. Goshen R, et al. "Computer-Assisted Flagging of Individuals at High Risk of Colorectal Cancer in a Large Health Maintenance Organization Using the ColonFlag Test." *JCO Clin Cancer Inform*. 2018;2:1–8.


Prospective deployment study of ColonFlag at Maccabi Healthcare Services applied to 79,671 patients who had not undergone colonoscopy or FOBT. Among 254 high-risk individuals who received colonoscopy, 19 colorectal cancers (7.5%) and 15 additional non-colorectal cancers were identified. Documents the real-world passive EHR integration model that requires no new specimens, no patient action, and no additional cost per screen, and which has since been replicated at US health systems, including Kaiser Permanente and Geisinger.