---
title: "The Blood Behind the Bladder"
subtitle: "Bladder Cancer Leaves Pre-Diagnostic Signals in Routine Blood Tests Months Before Diagnosis—Machine Learning Achieves AUC 0.92"
category: "cancer"
date: "April 2026"
---

Bladder cancer is diagnosed in approximately 82,000 Americans each year. Caught while still localized, the five-year survival rate is 70 percent. Once it has spread to distant organs, fewer than 9 percent of patients survive five years.1 Most early bladder cancers are caught incidentally through hematuria investigations. Yet routine blood tests ordered for unrelated reasons at annual physicals already contain detectable signals.

**70% survival when caught early, under 9% once spread. Routine blood tests show the signal six to eight months before diagnosis. ## The Signature in the Blood

The same 2022 *British Journal of General Practice* study that documented pre-diagnostic blood test abnormalities in renal cancer analyzed  4,533 patients** with bladder and renal cancer combined. For bladder cancer patients, raised inflammatory markers, such as C-reactive protein (CRP) and erythrocyte sedimentation rate (ESR), were present in 43 to 45 percent, low hemoglobin in 35 percent, and high creatinine in 32 percent of patients in the year before diagnosis. Statistically significant inflection points in complete blood count (CBC) abnormalities began  six to eight months before clinical diagnosis.**2

Elevated inflammatory markers (CRP, ESR, plasma viscosity) on routine blood tests were associated with a one-year cancer incidence of  3.53 percent** versus 1.50 percent with normal markers in a study of 160,000 United Kingdom primary care patients, with bladder cancer among the cancers driving the elevated incidence.3 The mechanism aligns with other solid tumors: tumor-driven systemic inflammation elevates neutrophils and CRP; local invasion or obstruction impairs kidney function, elevating creatinine; chronic occult blood loss may cause mild anemia.

## The Machine Learning Case

A LightGBM model trained on routine laboratory data from 1,336 patients in Taiwan achieved an area under the curve ( AUC) of 0.88 to 0.92** for bladder cancer detection, with an accuracy of 84.8 to 86.9 percent, sensitivity of 84 to 87.8 percent, and specificity of 82.9 to 86.7 percent.4 The model's top features—calcium, alkaline phosphatase, albumin, creatinine, alanine transaminase (ALT), and urine occult blood—are all standard outputs of a comprehensive metabolic panel (CMP) and routine urinalysis. No specialty testing was required.

## What This Proves

Bladder cancer's pre-diagnostic blood signature is documented, and the machine learning methodology achieves clinically useful discrimination using only routine laboratory inputs. The science is established. A population-scale passive screening algorithm that processes every CMP and CBC in the electronic health record to flag bladder cancer risk has not yet been implemented in primary care.



## Endnotes

1. National Cancer Institute. "Cancer Stat Facts: Bladder Cancer." SEER, 2024.



SEER data reporting five-year relative survival of approximately 73% for localized bladder cancer versus 9% for distant-stage disease. Overall survival is 79% because most cases (84%) are diagnosed either in-situ or at the localized stage, but the distant-stage cases represent a preventable annual mortality burden.

2. Zhou Y, Walter FM, Mounce L, et al. "Identifying opportunities for timely diagnosis of bladder and renal cancer via abnormal blood tests." *Br J Gen  Pract*. 2022;72(714):e19–e25.



Longitudinal linked data study of 4,533 patients documenting that raised inflammatory markers (CRP/ESR), low hemoglobin, and high creatinine appeared in 32 to 45% of bladder cancer patients in the year before diagnosis, with CBC inflection points six to eight months pre-diagnosis. Core evidence for the pre-diagnostic blood signal.

3. Watson J, Salisbury C, Banks J, Whiting P, Hamilton W. "Predictive value of inflammatory markers for cancer diagnosis in primary care: a prospective cohort study using electronic health records." *Br J Cancer*. 2019;120(11):1045–1051.



Prospective cohort of 160,000 UK primary care patients with inflammatory marker testing. Raised CRP, ESR, or plasma viscosity was associated with 3.53% one-year cancer incidence versus 1.50% with normal markers. Bladder cancer contributed to the elevated cancer incidence in the abnormal-marker cohort.

4. Tsai IJ, Shen WC, Lee CL, Wang HD, Lin CY. "Machine Learning in Prediction of Bladder Cancer on Clinical Laboratory Data." *Diagnostics*. 2022;12(1):203.



LightGBM model trained on routine laboratory data from 1,336 patients, achieving AUC 0.88–0.92 for bladder cancer detection. Top features: calcium, alkaline phosphatase, albumin, creatinine, ALT—all standard CMP outputs. Demonstrates that routine chemistry alone achieves clinically useful machine learning discrimination.