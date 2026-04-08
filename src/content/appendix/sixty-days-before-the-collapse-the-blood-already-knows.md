---
title: "Sixty Days Before the Collapse, the Blood Already Knows"
subtitle: "Declining Hemoglobin, Rising RDW, and Falling Sodium Precede Heart Failure Hospitalization—Machine Learning Reads the Trajectory with AUC Up to 0.93"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series  •  Heart Failure

Heart failure kills approximately **425,000 Americans annually and affects 6.7 million more, with prevalence projected to reach 11.4 million by 2050. The five-year survival rate after diagnosis is approximately 50 percent (worse than many cancers).1 The hematological and metabolic changes that precede decompensation begin weeks to months before clinical symptoms appear, measurable on the routine complete blood count (CBC) and metabolic panel. Machine learning that tracks declining hemoglobin, rising red blood cell distribution width (RDW), falling sodium, and worsening creatinine predicts hospitalization and death from heart failure at an area under the curve (AUC) of 0.74 to 0.93.

**Hemoglobin, RDW, sodium, creatinine, and BUN begin shifting 60 days before heart failure re-hospitalization. Machine learning reads these trajectories. Static thresholds do not. ## The Treatment Effect That Makes Early Detection Urgent

The four-pillar combination of ACE inhibitor/angiotensin II receptor blocker (ARB), beta-blocker, magnetic resonance angiogram (MRA), and SGLT2 inhibitor reduces heart failure hospitalization by **approximately 50 percent and mortality by 25 to 30 percent in patients with reduced ejection fraction.2 These therapies are most effective when initiated before extensive myocardial remodeling and before chronic volume overload damages renal and hepatic function. Earlier identification via blood-based pattern detection expands the window for maximally effective intervention.

## The Signature in the Blood

Nozaki and colleagues characterized pre-hospitalization laboratory trajectories in 709 heart failure patients, demonstrating that **B-type natriuretic peptide (BNP), creatinine, and uric acid increase while **hemoglobin, hematocrit, and serum sodium decrease approximately 60 days before re-hospitalization—changes detectable in standard blood work before the patient notices any worsening symptoms.3

RDW elevation is among the earliest and most consistent CBC findings: values above 14.5 percent are independently associated with mortality, with hazard ratios of 1.4 to 1.9 in heart failure cohorts, reflecting inflammation and neurohormonal activation before frank anemia appears. Serum sodium declining toward 135 mEq/L reflects fluid retention and neurohormonal activation. Rising BUN signals reduced kidney perfusion from decreasing cardiac output—the cardiorenal syndrome that precedes overt acute kidney injury.

## The Machine Learning Case

Adler and colleagues applied ensemble deep learning to 52,265 heart failure patients across multiple institutions, achieving an **AUC of 0.91 for predicting one-year death or surgical intervention. Standard laboratory values such as BNP, BUN, sodium, creatinine, and hemoglobin were among the key predictive features, confirming that the routine blood panel carries the prognostic signal.4

A random forest model applied to routine CBC parameters alone—leukocyte count, neutrophil count, red blood cell (RBC) count, hemoglobin, and platelet count—achieved an AUC of **0.948 in validation across 226 patients,5 demonstrating that even the basic hematological panel without metabolic or cardiac biomarkers carries substantial heart failure predictive information. A Geisinger electronic health record study using a random forest on 1,684 cases and 13,525 matched controls found an AUC of 0.74 at the 60-day prediction window, a clinically actionable lead time from readily available lab inputs.

## What This Proves

Heart failure kills 425,000 Americans annually, and its blood precursors, declining hemoglobin, rising RDW, falling sodium, and worsening creatinine, appear in routine labs 60 days or more before re-hospitalization. Multiple machine learning models that read these signals achieve an AUC of 0.74 to 0.93. Guideline-directed therapy, when fully implemented, reduces hospitalization by 50 percent. Earlier identification via blood-based pattern recognition translates treatment efficacy into preventable deaths—if the pattern is read systematically rather than only when a patient presents acutely.



## Endnotes

1. Tsao CW, Aday AW, Almarzooq ZI, et al. "Heart Disease and Stroke Statistics—2023 Update: A Report From the American Heart Association." *Circulation*. 2023;147(8):e93–e621.



Annual AHA statistical update documenting approximately 425,000 annual US heart failure deaths, 6.7 million affected Americans, and 11.4 million projected by 2050. Primary source for heart failure epidemiology and the 1-in-5 lifetime risk statistic.

2. McDonagh TA, Metra M, Adamo M, et al. "2021 ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure." *Eur Heart J*. 2021;42(36):3599–3726.



ESC heart failure guidelines establishing the four-pillar treatment framework and documenting approximately 50% hospitalization reduction and 25–30% mortality reduction with full guideline-directed therapy. Establishes the treatment benefit that early blood-based detection enables.

3. Nozaki A, Kondo T, Nagai S, et al. "Trajectories of Biomarkers Before and After Hospitalization for Heart Failure in Patients With Heart Failure." *Circ J*. 2026;90(2):185–192.



Prospective trajectory analysis of 709 HF patients demonstrating BNP, creatinine, and uric acid rise while hemoglobin and sodium decline approximately 60 days before re-hospitalization. Primary evidence establishing the temporal blood signature of impending decompensation detectable from routine laboratory values.

4. McGilvray MM, Heaton J, Guo A, et al. "Electronic Health Record-Based Deep Learning Prediction of Death or Severe Decompensation in Heart Failure Patients." *JACC Heart Fail*. 2022;10(9):637–647.



Ensemble deep learning on 52,265 heart failure patients, achieving AUC 0.91 for 1-year death or surgical intervention. BNP, BUN, sodium, creatinine, and hemoglobin are key features—all present in routine labs—validating the blood-based machine learning detection argument at large scale.

5. Pu J, Yao Y, Wang X. "Development and validation of a machine learning model for online predicting the risk of in heart failure: based on the routine blood test and their derived parameters." *FrontCardiovasc Med*. 2025;12:1539966.



Random forest on CBC parameters alone, achieving AUC 0.948 in 226 patients. Demonstrates that even a basic CBC without metabolic or cardiac biomarkers carries substantial heart failure predictive information. Note: small sample size requires replication in larger cohorts before deployment.