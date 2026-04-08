---
title: "Already in the Data"
subtitle: "Kidney Cancer Leaves a Detectable Blood Signature Months Before Diagnosis, Yet the Algorithm Has Not Been Built"
category: "cancer"
date: "April 2026"
---

Kidney cancer kills approximately 15,000 Americans each year. Caught while still confined to the kidney, the five-year survival rate is 93 percent. Once it has spread to distant organs, that figure falls to 19 percent.[<sup>1</sup>](#ref-1)No universal screening program exists. Yet the raw data needed to build one is already being collected at routine physicals across the country.

93% survival when caught early, 19% once spread. The blood already carries the signal months before any symptom appears.

## The Signature in the Blood

Renal cell carcinoma produces a consistent, multi-marker pattern in the complete blood count (CBC) and comprehensive metabolic panel (CMP) months before clinical diagnosis. A retrospective cohort study of 4,533 patients published in the *British Journal of General Practice* found that eight blood test abnormalities rose above baseline six to eight months before kidney cancer diagnosis: low hemoglobin, elevated creatinine, raised C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR), high platelet count, elevated white cell count, and abnormal liver enzymes.[<sup>2</sup>](#ref-2)A United Kingdom Biobank prospective analysis of 466,994 individuals identified five CBC-derived markers—mean corpuscular hemoglobin concentration (MCHC), red blood cell distribution width (RDW), platelet distribution width (PDW), systemic immune-inflammation index (SII), and platelet-neutrophil product—as independent risk factors for future kidney cancer development.[<sup>3</sup>](#ref-3)
The biological logic is direct: tumors suppress erythropoietin, driving normocytic anemia. They impair renal filtration, elevating creatinine; they provoke systemic inflammation, raising CRP, ESR, and neutrophil-to-lymphocyte ratios. Each marker in isolation is ambiguous, but if read as a weighted composite over time, they define a recognizable pre-diagnostic profile.

## The Machine Learning Case

A random forest classifier trained on eight standard blood indicators from routine physical examinations in patients with early-stage renal cell carcinoma achieved an area under the curve ( AUC) of 0.932, sensitivity of 88.2 percent, and specificity of 86.3 percent.[<sup>4</sup>](#ref-4)The inputs—hemoglobin, creatinine, albumin-to-globulin ratio, BUN (blood urea nitrogen), potassium, uric acid, high-sensitivity CRP (hs-CRP), and total protein—are all standard CBC and CMP outputs. The same gradient boosting and random forest methodology used to build ColonFlag (AUC 0.82) and the XGBoost architecture behind LungFlag (AUC 0.86) apply directly here.

## What This Proves

The blood signature for kidney cancer is documented in peer-reviewed literature. The machine learning methodology capable of reading it is validated. The science is established. What has not yet been built is the population-scale deployed algorithm—the equivalent of ColonFlag or LungFlag—that would passively process every CBC and CMP in the electronic health record and flag high-risk patients for renal imaging. The training data exists in hospital systems today.

## Endnotes

<span id="ref-1"></span>

1.National Cancer Institute. "Cancer Stat Facts: Kidney and Renal Pelvis Cancer." SEER, 2024.


SEER population data (2015–2021) reporting five-year relative survival of 93.3% for localized kidney cancer versus 19.1% for distant-stage disease. Establishes the survival differential that makes early detection the decisive clinical variable.

<span id="ref-2"></span>

2.Zhou Y, Walter FM, Mounce L, et al. "Identifying opportunities for timely diagnosis of bladder and renal cancer via abnormal blood tests: a longitudinal linked data study." *Br J Gen Pract*. 2022;72(714):e19–e25.


Retrospective cohort of 4,533 patients showing 8 routine blood test abnormalities, including low hemoglobin, elevated creatinine, and raised inflammatory markers, increased 6 to 8 months before kidney cancer diagnosis. Establishes the pre-diagnostic CBC/CMP signal timeline.

<span id="ref-3"></span>

3.He Q, Wei C, Cao L, Zhang P, Zhuang W, Cai F. "Blood cell indices and inflammation-related markers with kidney cancer risk: a large-population prospective analysis in UK Biobank." *Front Oncol*. 2024;14:1366449.


Prospective analysis of 466,994 UK Biobank participants identifying MCHC, RDW, PDW, SII, and platelet-neutrophil count as independent CBC-derived risk factors for kidney cancer over 12.4 years of follow-up. Provides prospective validation of the blood signature.

<span id="ref-4"></span>

4.Li H, Wang F, Huang W. "A Novel, Simple, and Low-Cost Approach for Machine Learning Screening of Kidney Cancer: An Eight-Indicator Blood Test Panel with Predictive Value for Early Diagnosis." *Curr Oncol*. 2022;29(12):9135–9149.


Random forest classifier trained on eight routine blood markers in 743 renal cell carcinoma patients and 500 controls, achieving AUC 0.932, sensitivity 88.2%, specificity 86.3%. Establishes the proof-of-concept machine learning model for kidney cancer detection from a standard blood draw.