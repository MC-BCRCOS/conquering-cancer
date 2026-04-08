---
title: "The Fibrosis Is Already in the Blood Work"
subtitle: "Machine Learning on Routine Metabolic and Hematological Panels Detects Advanced Liver Fibrosis with AUC 0.91—Better Than the Clinical Tool Already in Use"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series  •  NAFLD and Liver Fibrosis

Non-alcoholic fatty liver disease (NAFLD) affects approximately **38 percent of United States adults, roughly 100 million people, making it the most prevalent chronic liver disease worldwide. The 15 to 25 percent who progress to nonalcoholic steatohepatitis (NASH) face rising risks of cirrhosis, liver failure, and hepatocellular carcinoma. Identifying which patients are on this trajectory, while still in the fibrosis-free or early fibrosis stage, is the central challenge of NAFLD management.1 The routine metabolic and hematological panel contains the information needed. Machine learning trained on aspartate aminotransferase (AST)/alanine transaminase (ALT) ratios, platelet counts, albumin, and metabolic markers achieves an area under the curve (AUC) of 0.91 for detecting advanced fibrosis; this is meaningfully better than FIB-4, the tool currently deployed in clinical guidelines.

**Fibrosis stage is the strongest predictor of NAFLD-related mortality. F3 to F4 carries 5 to 12 times the liver-related event risk of F0 to F2. Machine learning identifies the trajectory before the threshold is crossed. ## The Treatment Effect That Makes Early Detection Urgent

NAFLD fibrosis stage determines prognosis with striking precision. Golabi and colleagues demonstrated in NHANES III with 27-year follow-up that NAFLD accounts for **24 to 30 percent of liver-specific and >7 percent of all-cause mortality. F3 to F4 fibrosis carries a 5- to 12-fold increased risk of liver-related events compared to F0 to F2.2 Resmetirom (US Food and Drug Administration approved in 2024) reduces liver fat and improves fibrosis in NASH patients. Identifying patients at F1 to F2 enables lifestyle intervention, metabolic optimization, and pharmacological therapy before advanced fibrosis forecloses options.

## The Signature in the Blood

The metabolic panel contains a well-characterized NAFLD fibrosis signal. **As fibrosis advances, the AST/ALT ratio inverts from <1 to >1 , reflecting progressive mitochondrial damage relative to cytosolic injury. Platelet count declines with portal hypertension. ALT may paradoxically normalize in advanced 'burnt-out' NASH while fibrosis continues, making ALT-only monitoring dangerously misleading.3

Gamma-glutamyl transferase (GGT) levels increase due to hepatic oxidative stress. Triglycerides rise, and high-density lipoprotein (HDL) is depressed from co-existing insulin resistance. Fasting glucose and HbA1c are elevated. Albumin declines with synthetic failure in advanced disease. These markers, when combined and tracked over time, provide a more comprehensive fibrosis signal than what FIB-4's formula captures, and machine learning exploits the multi-panel relationships and longitudinal trajectories that FIB-4 cannot accommodate.

## The Machine Learning Case

Tacke and colleagues applied XGBoost to 618 biopsy-confirmed metabolic dysfunction-associated steatotic liver disease (MASLD) patients and validated it on 540 primary care patients. The algorithm achieved an **AUC of 0.91 compared with FIB-4 at 0.78 and NAFLD fibrosis score (NFS) at 0.81,  representinga substantial improvement from the same routine lab inputs. GGT and HbA1c were the top two predictive features, neither of which is included in the FIB-4 formula.4

Lim and colleagues applied a random survival forest to 25,599 patients (development) and 16,173 (validation) to predict time-to-NAFLD onset from routine laboratory data, demonstrating that the metabolic shift preceding fatty liver—rising triglycerides, falling HDL, rising glucose, rising GGT—is detectable in blood years before hepatic steatosis reaches diagnostic threshold.5 This temporal detection model is directly analogous to cancer detection algorithms: reading the blood trajectory before the disease is clinically diagnosable.

## What This Proves

NAFLD fibrosis is detectable in routine blood work, and machine learning already improves on FIB-4 by 0.10 to 0.13 AUC points using the same inputs plus GGT and HbA1c. FIB-4 is already deployed in clinical guidelines, making this the disease for which the machine-learning enhancement requires the smallest translation step. Adding GGT, HbA1c, and longitudinal trend data to a FIB-4-like algorithm and applying machine learning in place of a fixed formula is a straightforward engineering problem with a published proof-of-concept AUC of 0.91. For a disease affecting 100 million Americans, that improvement matters.



## Endnotes

1. Younossi ZM, Koenig AB, Abdelatif D, et al. "Global Epidemiology of Non-Alcoholic Fatty Liver Disease—Meta‐analytic assessment of prevalence, incidence, and outcomes." *Hepatology*. 2016;64(1):73–84.



Meta-analytic assessment confirming 38% US adult NAFLD prevalence and 100M+ Americans affected. Documents progression risk from steatosis to NASH to cirrhosis, establishing NAFLD as the most prevalent chronic liver disease—the clinical context for machine learning-based fibrosis stratification.

2. Alvarez CS, Graubard BI, Thistle JE, Petrick JL, McGlynn KA. "Attributable Fractions of Nonalcoholic Fatty Liver Disease for Mortality in the United States: Results From the Third National Health and Nutrition Examination Survey With 27 Years of Follow-up." *Hepatology*. 2020;72(2):430–440.



NHANES III cohort with 27-year follow-up quantifying NAFLD-attributable mortality fractions and documenting the 5- to 12-fold increased liver-related event risk at F3–F4 versus F0–F2. Establishes why fibrosis stage identification is the central clinical objective.

3. Sterling RK, Lissen E, Clumeck N, et al. "Development of a Simple Noninvasive Index to Predict Significant Fibrosis in Patients with HIV/HCV Coinfection." *Hepatology*. 2006;43(6):1317–1325.



Original FIB-4 derivation study achieving AUC 0.80 for advanced fibrosis. Establishes the FIB-4 formula as the clinical baseline against which machine learning models are compared and documents the AST/ALT ratio inversion as the primary marker of advancing fibrosis.

4. Dabbah S, Mishani I, Davidov Y, Ari ZB. "Implementation of Machine Learning Algorithms to Screen for Advanced Liver Fibrosis in Metabolic Dysfunction-Associated Steatotic Liver Disease: An In-Depth Explanatory Analysis." *Digestion*. 2025;106(3):189–202.



XGBoost achieved AUC 0.91 vs FIB-4 (0.78) and NFS (0.81) for advanced fibrosis in 618 biopsy-confirmed MASLD patients, plus 540 primary care validation. GGT and HbA1c identified as top features absent from FIB-4. Primary machine learning evidence for improved NAFLD fibrosis detection from routine labs.

5. Lim DYZ, Chung GE, Cher PH, Chockalingam R, Kim W, Tan CK. "Use of Machine Learning to Predict Onset of NAFLD in an All-Comers Cohort-Development and Validation in 2 Large Asian Cohorts." *Gastro Hep Adv*. 2024;3(7):1005–1011.



Random survival forest on 25,599 plus 16,173 patients predicting time-to-NAFLD onset from routine labs, including triglycerides, HDL, glucose, and GGT. Demonstrates the metabolic trajectory preceding fatty liver is detectable in blood before steatosis reaches diagnostic thresholds—directly analogous to the ColonFlag cancer detection paradigm.