---
title: "Iron Overload, Written in Your Blood"
subtitle: "Haemochromatosis Leaves a Decades-Long Metabolic Signature That Machine Learning Reads with 94% Accuracy"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series • Hemochromatosis

Hereditary hemochromatosis affects approximately 1 in 200 to 1 in 300 adults of Northern European descent in the United States, making it one of the most common genetic disorders on the continent. Most patients are diagnosed only after irreversible organ damage has occurred. Yet the blood signature of iron overload is measurable on routine metabolic and hematological panels for decades before cirrhosis, diabetes, or cardiomyopathy develops. Treatment is phlebotomy: simple, inexpensive, and fully curative when started before organ damage.1

Patients diagnosed before cirrhosis achieve normal life expectancy. Those diagnosed after face a 219-fold increased risk of liver cancer. The difference is when the blood was read. ## The Treatment Effect That Makes Early Detection Urgent

Niederau and colleagues demonstrated in a landmark *New England Journal of Medicine* cohort study that patients with haemochromatosis treated before the development of cirrhosis had survival equivalent to that of age-matched controls. Those diagnosed after cirrhosis had liver cancer risk 219 times higher and cardiomyopathy risk 306 times higher.2 The HEIRS Study, screening more than 100,000 individuals across North America, confirmed that transferrin saturation and serum ferritin identify C282Y homozygotes with 75 percent sensitivity at a specificity that supports population-level screening.3 Phlebotomy removes 200 to 250 mg of iron per session and costs less than $50, preventing every downstream complication when started early.

## The Signature in the Blood

Iron overload writes a progressive trail into routine lab work. Transferrin saturation above 45 percent is the earliest change, often detectable four to five decades before symptoms. Serum ferritin climbs above 300 ng/mL in men and 200 ng/mL in women, tracking total body iron burden. ALT (alanine aminotransferase) and AST (aspartate aminotransferase) become elevated in approximately 75 percent of symptomatic patients as hepatic iron accumulates. Fasting glucose rises as iron damages pancreatic beta cells. MCV (mean corpuscular volume) may drift upward. Calcium may decline from iron-induced hypoparathyroidism.

The mechanism is a single point of failure: *HFE* gene mutations impair hepcidin production, removing the brake on intestinal iron absorption and allowing iron to silently accumulate in the liver, pancreas, heart, and joints over decades. No single lab value triggers an alert, but the multi-marker trajectory—rising ferritin alongside drifting ALT, glucose, and MCV—constitutes a pattern that machine learning reads as pre-cirrhotic haemochromatosis.

## The Machine Learning Case

Martins Conde and colleagues applied XGBoost to 254 hereditary haemochromatosis cases and 701 controls from the HEIRS family study, using serum iron, ferritin, transferrin saturation, MCV, ALT, AST, and *HFE* genotype as features. The algorithm achieved an area under the curve (AUC) of 0.94 in 10-fold stratified cross-validation, significantly outperforming the IRON screening score, the only previously available clinical tool.4 The multi-variable approach captures what thresholds cannot: a ferritin of 310 ng/mL with a rising trajectory, concurrently with drifting ALT and glucose, signals iron overload risk far more reliably than any single value alert.

## What This Proves

Haemochromatosis leaves a measurable, progressive signature on routine metabolic and hematological panels for decades before organ damage occurs. A published XGBoost algorithm achieves AUC 0.94. Treatment is curative when applied early. Algorithmically reading ferritin trajectories alongside concurrent metabolic shifts from annual blood work would identify iron overload carriers before cirrhosis, converting a genetic sentence into a preventable condition.


## Endnotes

1. Powell LW, Seckington RC, Deugnier Y. "Haemochromatosis." *Lancet*. 2016;388(10045):706–716.


Comprehensive Lancet review of hereditary haemochromatosis. Establishes prevalence in Northern European populations, the decades-long pre-clinical window in which transferrin saturation is measurable, and that phlebotomy initiated before cirrhosis restores normal life expectancy. Primary reference for disease biology and the *HFE* mutation mechanism.

2. Niederau C, Fischer R, Sonnenberg A, Stremmel W, Trampisch HJ, Strohmeyer G. "Survival and Causes of Death in Cirrhotic and in Noncirrhotic Patients with Primary Hemochromatosis." *N Engl J Med*. 1985;313(20):1256–1262.


Landmark cohort demonstrating that hereditary haemochromatosis patients treated before cirrhosis achieve normal life expectancy, while those diagnosed after face 219-fold elevated liver cancer risk and 306-fold elevated cardiomyopathy risk. The foundational evidence that detection timing, not disease severity, determines outcome in haemochromatosis.

3. Adams PC, Barton JC, McLaren GD, et al. "Screening for Iron Overload: Lessons from the HEmochromatosis and IRon Overload Screening (HEIRS) Study." *Can J Gastroenterol*. 2009;23(11):769–772.


HEIRS Study screening >100,000 individuals confirming transferrin saturation sensitivity of 75% for C282Y homozygotes. Establishes the feasibility of population-level iron overload screening and provides the dataset used for the Martins Conde machine learning algorithm validation.

4. Martins Conde P, Sauter T, Nguyen TP. "An Efficient Machine Learning-Based Approach for Screening Individuals at Risk of Hereditary Haemochromatosis." *Sci Rep*. 2020;10:20613.


XGBoost achieving AUC 0.94 on HEIRS family study data (254 cases, 701 controls) using ferritin, transferrin saturation, MCV, ALT, AST, serum iron, and *HFE* genotype. Outperforms the IRON screening score. The primary peer-reviewed machine learning evidence for haemochromatosis detection from routine blood parameters.