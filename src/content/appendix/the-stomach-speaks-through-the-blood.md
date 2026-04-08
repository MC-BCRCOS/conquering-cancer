---
title: "The Stomach Speaks Through the Blood"
subtitle: "Gastric Cancer Produces a Detectable CBC and CMP Signature Before Diagnosis—the XHGC20 XGBoost Algorithm Achieves AUC 0.91"
category: "cancer"
date: "April 2026"
---

Gastric cancer kills approximately 11,000 Americans each year. Caught while still localized, the five-year survival rate is 77 percent. Once it has spread to distant organs, that figure falls to under 7 percent.[<sup>1</sup>](#ref-1) Like colorectal cancer, gastric tumors bleed slowly, generating iron-deficiency anemia that predates clinical symptoms by months. Unlike colorectal cancer, a deployed population-scale algorithm does not yet exist.

**77% survival when caught early, under 7% once spread. The blood signature is documented. A deployed algorithm exists in research, not in practice.**

## The Signature in the Blood

Iron-deficiency anemia from chronic occult blood loss is the dominant gastric cancer signal. A German primary care study of **122,502 iron-deficiency anemia patients** found a statistically significant excess of subsequent gastric cancer diagnoses versus matched controls.[<sup>2</sup>](#ref-2) The complete blood count (CBC) pattern mirrors colorectal cancer: falling hemoglobin, declining mean corpuscular volume (MCV), and elevated red blood cell distribution width (RDW). However, gastric cancer adds an inflammatory overlay: a study of 2,606 gastric cancer patients and 3,219 controls found that neutrophil-to-lymphocyte (NLR) and platelet-to-lymphocyte (PLR) were **superior to carcinoembryonic antigen (CEA) and carbohydrate antigen 19-9 (CA19-9)** for early gastric cancer screening, with NLR area under the curve (AUC) 0.715 and PLR AUC 0.707.[<sup>3</sup>](#ref-3)

Albumin decline on the comprehensive metabolic panel (CMP) reflects cancer-related cachexia and impaired protein synthesis. NLR, PLR, and hemoglobin together distinguish gastric cancer from intestinal metaplasia (a precancerous state), enabling detection during the Correa cascade before malignant transformation.[<sup>4</sup>](#ref-4)

## The Machine Learning Case

The XHGC20 model, an XGBoost classifier trained on 20 routine hematological indicators from **4,400 patients** at Xinhua Hospital, Shanghai, achieved a validation **AUC of 0.901** and a test AUC of 0.907. For tumor marker-negative patients, those who would be missed by conventional screening, AUC reached 0.970.[<sup>5</sup>](#ref-5) A second GBDT model trained at Zhejiang Provincial People's Hospital on routine blood chemistry (including NLR, hemoglobin, albumin, CEA, and CBC parameters) achieved an **AUC of 0.91** with sensitivity 87.0 percent and specificity 84.1 percent.[<sup>6</sup>](#ref-6)

## What This Proves

Gastric cancer's blood signature—iron-deficiency anemia, NLR and PLR elevation, albumin decline, and RDW increase—is documented in peer-reviewed literature. Two independent XGBoost/GBDT models trained on standard blood inputs achieve an AUC above 0.90. The XHGC20 algorithm exists in research form. What has not been built is its deployment as a passive, electronic health record-integrated screening tool operating on every routine blood draw in primary care—the final step in closing the detection gap.

## Endnotes

<span id="ref-1"></span>

1.National Cancer Institute. "Cancer Stat Facts: Stomach Cancer." SEER, 2024.


SEER data reporting five-year relative survival of 76.5% for localized gastric cancer versus approximately 6.8% for distant-stage disease. Only about 30% of cases are diagnosed at the localized stage, establishing the detection gap that blood-based machine learning screening could address.

<span id="ref-2"></span>

2.Krieg S, Loosen S, Krieg A, Luedde T, Roderburg C, Kostev K. "Association between iron deficiency anemia and subsequent stomach and colorectal cancer diagnosis in Germany." *J Cancer Res Clin Oncol*. 2024;150(2):53.


Population study of 122,502 iron-deficiency anemia patients versus matched controls in German primary care (2005–2021), confirming statistically significant excess of subsequent gastric cancer diagnoses. Establishes IDA on routine CBC as a pre-diagnostic gastric cancer signal driven by chronic occult tumor bleeding.

<span id="ref-3"></span>

3.Fang T, Wang Y, Yin X, et al. "Diagnostic Sensitivity of NLR and PLR in Early Diagnosis of Gastric Cancer." *J Immunol Res*. 2020;2020(1):9146042.


Large study of 2,606 gastric cancer patients and 3,219 controls showing NLR AUC 0.715 and PLR AUC 0.707 for early gastric cancer, both superior to CEA and CA19-9. Inflammatory ratios derived from the routine CBC differential outperform conventional tumor markers for early-stage detection.

<span id="ref-4"></span>

4.Aksoy EK, Kantarci S, Torgutalp M, et al. "The importance of complete blood count parameters in the screening of gastric cancer." *Gastroenterol Rev*. 2019;14(3):183–187.


Study of 73 gastric cancer patients, 79 intestinal metaplasia patients, and 70 controls. NLR, PLR, and MLR distinguished gastric cancer from precancerous intestinal metaplasia—the Correa cascade intermediate state—demonstrating that CBC inflammatory markers detect malignant transformation before it becomes clinically evident.

<span id="ref-5"></span>

5.Ke X, Cai X, Bian B, et al. "Predicting early gastric cancer risk using machine learning: A population-based retrospective study." *Digit Health*. 2024;10.


XGBoost model XHGC20 trained on 20 routine hematological indicators from 4,400 patients at Xinhua Hospital, Shanghai. Validation AUC 0.901, test AUC 0.907, and AUC 0.970 for tumor marker-negative patients. Top features: total protein, fibrin degradation products, CRP, RDW. The most advanced gastric cancer machine learning model from routine blood inputs.

<span id="ref-6"></span>

6.Zhu SL, Dong J, Zhang C, Huang YB, Pan W. "Application of machine learning in the diagnosis of gastric cancer based on noninvasive characteristics." *PLOS One*. 2020;15(12):e0244869.


GBDT model trained at Zhejiang Provincial People’s Hospital on 709 patients (398 with gastric cancer, 311 controls). Features: NLR, hemoglobin, albumin, CEA, CA125, CA199, and CBC parameters. AUC 0.91, sensitivity 87.0%, specificity 84.1%. Independent validation of the XGBoost paradigm for gastric cancer detection from routine blood inputs.