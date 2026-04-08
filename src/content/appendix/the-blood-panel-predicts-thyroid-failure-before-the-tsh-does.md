---
title: "The Blood Panel Predicts Thyroid Failure Before the TSH Does"
subtitle: "An XGBoost Algorithm Detects Hypothyroidism with AUC 0.91 Using Only Routine Lab Tests—No Thyroid Function Tests Required"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series  •  Hypothyroidism

Subclinical hypothyroidism affects **4 to 8.5**** percent**** of the U****nited ****S****tates**** population**, approximately 13 to 28 million Americans, and progresses to overt hypothyroidism at a rate of 2 to 6 percent per year. When thyroid-stimulating hormone (TSH) exceeds 10 mIU/L, 75 percent of untreated patients will develop overt hypothyroidism within four years.1 Untreated overt hypothyroidism causes hypercholesterolemia, cardiovascular disease, cognitive impairment, and, rarely but fatally, myxedema coma. The TSH trajectory toward thyroid failure is measurable on routine annual blood work years before symptoms appear. Applying machine learning to routine laboratory panels can identify thyroid dysfunction without ordering a TSH test, achieving an area under the curve (AUC) of 0.91 using typical metabolic, hematological, and lipid values alone.

**An ****XGBoost**** model on multi-institutional Japanese EHR data detected hypothyroidism with AUC 0.91 using 11 routine laboratory tests****,**** with no thyroid function tests included.**

## The Treatment Effect That Makes Early Detection Urgent

Levothyroxine replacement in overt hypothyroidism is among the simplest and most effective treatments in medicine: a once-daily tablet restores euthyroidism and eliminates virtually all complications when initiated before irreversible end-organ damage. Subclinical hypothyroidism with TSH 7 to 10 mIU/L is associated with an **18**** to ****28**** percent**** increased risk of coronary heart disease events and ****a ****27**** percent**** increased risk of heart failure hospitali****z****ation.** Intervention at this stage, before overt hypothyroidism, prevents the hypercholesterolemia, diastolic dysfunction, and cognitive decline that accumulate with years of untreated thyroid failure.2

## The Signature in the Blood

The blood signature of evolving hypothyroidism spans multiple panels simultaneously. **TSH ****progressively ****drifts upward** from 2.5 to 3.5 to 5.0 mIU/L, still within the normal reference range (0.5 to 4.5) for years before crossing the diagnostic threshold. Intra-individual TSH variation is minimal, making any upward trend clinically meaningful even within the normal range.1

From the complete blood count (CBC), **normocytic normochromic anemia** develops as thyroid hormone stimulation of erythropoiesis declines, with hemoglobin falling 1 to 2 g/dL from baseline. **Total cholesterol and ****low-density lipoprotein (****LDL****)**** rise** from reduced hepatic LDL receptor expression and decreased conversion of cholesterol to bile acids under low T3—increases of 10 to 30 mg/dL from baseline are typical.3 Serum sodium may decline mildly from impaired free water excretion. Creatinine may rise slightly from reduced renal glomerular filtration rate (GFR). No individual change triggers an alert, but together, they form a thyroid-deficiency signature across panels that machine learning recognizes without requiring TSH.

## The Machine Learning Case

Hu and colleagues developed XGBoost, Random Forest, LightGBM, and logistic regression models on multi-institutional electronic health record (EHR) data from four Japanese hospitals. Using **11 routine laboratory tests****,**** with no thyroid function tests included,** the best model achieved an **AUC ****of ****0.909 for hypothyroidism detection and 0.938 for hyperthyroidism.** The top predictive features for hypothyroidism were serum creatinine, lactate dehydrogenase (LDH), and total cholesterol—all on the standard CMP and lipid panel.4

The biological logic is sound: hypothyroidism raises cholesterol through reduced LDL receptor expression, raises creatinine through reduced GFR, and raises LDH through generalized metabolic slowing. An algorithm that sees these three values rising simultaneously, while a patient's hemoglobin declines and their prior TSH was 3.1 mIU/L, has access to a multi-panel, longitudinal signal that is more informative than any single test result.

## What This Proves

Hypothyroidism is extraordinarily common; its blood signature spans the CBC, comprehensive metabolic panel (CMP), and lipid panel simultaneously, and levothyroxine is one of the most effective and inexpensive treatments in medicine. A published XGBoost algorithm already achieves an AUC of 0.91 from routine labs without TSH. The immediate clinical application is integrating longitudinal TSH trends with concurrent metabolic and lipid panel changes to flag patients for thyroid function testing before symptoms develop, precisely when treatment is most effective.



## Endnotes

**1.  **Garber JR, Cobin RH, Gharib H, et al. "Clinical Practice Guidelines for Hypothyroidism in Adults: Cosponsored by the American Association of Clinical Endocrinologists and the American Thyroid Association." *Endocr** **Pract*. 2012;18(6):988–1028.



AACE/ATA clinical practice guidelines, establishing prevalence (4.3 to 8.5% subclinical), progression rates (2 to 6%/year to overt), and TSH trajectory patterns. Primary reference for thyroid disease epidemiology, the TSH drift pattern, and the clinical rationale for earlier detection of subclinical hypothyroidism.

**2.  **Rodondi N, den Elzen WPJ, Bauer DC, et al. "Subclinical Hypothyroidism and the Risk of Coronary Heart Disease and Mortality." *JAMA*. 2010;304(12):1365–1374.



Individual participant meta-analysis (55,287 participants) documenting 18 to 28% increased coronary heart disease events and 27% increased heart failure risk with TSH 7 to 10 mIU/L subclinical hypothyroidism. Establishes the cardiovascular risk that early detection and treatment can prevent.

**3.  **Wopereis DM, Du Puy RS, van Heemst D, et al. "The Relation Between Thyroid Function and Anemia: A Pooled Analysis of Individual Participant Data." *J Clin Endocrinol **Metab*. 2018;103(10):3658–3667.



Pooled analysis documenting odds ratio (OR) 1.84 for anemia in overt hypothyroidism and OR 1.21 in subclinical hypothyroidism. Establishes the CBC hemoglobin decline as a detectable blood component of the hypothyroid signature that machine learning algorithms can incorporate alongside cholesterol and creatinine.

**4.  **Hu M, Asami C, Iwakura H, et al. "Development and Preliminary Validation of a Machine Learning System for Thyroid Dysfunction Diagnosis Based on Routine Laboratory Tests." *Commun Med*. 2022;2:9.



Multi-institutional XGBoost/Random Forest/LightGBM study achieving AUC 0.909 for hypothyroidism and 0.938 for hyperthyroidism from 11 routine laboratory tests without any thyroid function tests. Top predictors: serum creatinine, LDH, and total cholesterol. Primary machine learning evidence for thyroid dysfunction detection from routine blood work.