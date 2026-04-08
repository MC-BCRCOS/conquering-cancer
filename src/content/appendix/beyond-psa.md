---
title: "Beyond PSA"
subtitle: "Prostate Cancer Leaves a Distinct Pattern in Routine CBC and Chemistry—Machine Learning Improves on PSA Alone"
category: "cancer"
date: "April 2026"
---

Prostate cancer is the most common non-skin cancer in American men, with approximately 300,000 new diagnoses annually. Caught while still localized, the five-year survival rate is essentially 100 percent. Once it has spread to distant organs, that figure falls to 34 percent.1 Current screening relies on prostate-specific antigen (PSA), a marker with well-documented specificity limitations. The complete blood count (CBC) and comprehensive metabolic panel (CMP) ordered at the same annual physical contain complementary signals that machine learning can exploit.

**Near 100% survival when caught locally, but 34% once spread. PSA alone misses the picture. The CBC holds an additional signal. ## The Signature in the Blood

A prospective analysis of 209,686 male United Kingdom Biobank participants found that higher red blood cell (RBC) count (hazard ratio [HR] 1.09 per standard deviation [SD]), higher platelet count (HR 1.07), and higher mean corpuscular hemoglobin (MCH) were associated with increased prostate cancer risk over a mean 6.8-year follow-up.2 Elevated alkaline phosphatase (ALP) on the CMP reflects osteoblast activity in bone metastases; a meta-analysis of 33 studies found high baseline ALP associated with significantly worse overall survival (HR 1.74).3

The neutrophil-to-lymphocyte ratio (NLR) is independently prognostic across all stages of prostate cancer. A meta-analysis of 16,266 patients found elevated NLR predicted poor overall survival (HR 1.38) and poor progression-free survival (HR 1.24), and the association is measurable on the CBC at the time of standard blood draws ordered for unrelated indications.4

## The Machine Learning Case

A gradient-boosting machine (GBM) trained on 11 routine laboratory features—PSA, free PSA ratio, hemoglobin, neutrophils, platelets, NLR, glucose, platelet-to-lymphocyte ratio (PLR), lymphocytes, and age—achieved an area under the curve (**AUC) of 0.72 versus 0.64 for PSA alone and 0.68 for the free PSA/PSA ratio alone.5 Adding standard CBC-derived markers to PSA produced a statistically significant improvement in discriminative performance. The pattern is consistent with the ColonFlag and LungFlag paradigm: no single marker suffices; the weighted composite read by a gradient-boosting model outperforms any individual test.

## What This Proves

Prostate cancer's CBC and CMP signature is validated in large prospective cohorts and improves on PSA alone when processed by a gradient-boosting classifier. The science is established. A population-scale primary care algorithm that passively collects CBC and CMP values with PSA trends to risk-stratify men for biopsy referral has not yet been deployed.



## Endnotes

1. National Cancer Institute. "Cancer Stat Facts: Prostate Cancer." SEER, 2024.



SEER data reporting five-year relative survival approaching 100% for localized prostate cancer versus approximately 37.9% for distant-stage disease. Nearly 69% of cases are diagnosed at the localized stage, but the distant-stage mortality represents a preventable annual toll.

2. Watts EL, Perez-Cornago A, Kothari J, Allen Ne, Travis RC, Key TJ. "Hematologic Markers and Prostate Cancer Risk: A Prospective Analysis in UK Biobank." *Cancer Epidemiol Biomarkers Prev*. 2020;29(8):1615–1626.



Prospective analysis of 209,686 male UK Biobank participants with 5,723 prostate cancer diagnoses. Higher RBC count, platelet count, and MCH were independently associated with increased prostate cancer risk. Establishes the prospective pre-diagnostic CBC signal in a large population cohort.

3. Li D, Lv H, Hao X, Hu B, Song Y. "Prognostic value of serum alkaline phosphatase in the survival of prostate cancer: evidence from a meta-analysis." *Cancer Manag Res*. 2018;10:3125–3139.

DOI: 10.2147/CMAR.S174237

Meta-analysis of 33 observational studies found high baseline ALP associated with significantly worse overall survival (HR 1.74, 95% CI 1.47–2.06) in prostate cancer. ALP from the standard CMP reflects bone metastasis activity and provides prognostic signal routinely available without additional testing.

4. Gu X, Gao X, Li X, et al. "Prognostic significance of neutrophil-to-lymphocyte ratio in prostate cancer: evidence from 16,266 patients." *Sci Rep*. 2016;6:22089.



Meta-analysis of 14 publications (16,266 patients) confirming elevated NLR predicts poor OS (HR 1.38) and poor PFS (HR 1.24) in prostate cancer. NLR is derived from standard CBC differential counts and is consistently prognostic across prostate cancer stages and treatment settings.

5. Satır A, Ustundag Y, Yesil MR, Huysal K. "Prediction of Prostate Cancer From Routine Laboratory Markers With Automated Machine Learning." *J Clin Lab Anal*. 2025;39(3):e25143.



GBM model trained on 11 routine lab features, including CBC-derived markers (hemoglobin, NLR, PLR, platelets), achieved AUC 0.72 versus 0.64 for PSA alone. Demonstrates that adding standard blood count parameters to PSA significantly improves prostate cancer detection by machine learning classification.