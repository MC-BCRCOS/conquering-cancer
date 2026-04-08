---
title: "The Liver Announces Itself"
subtitle: "Routine Blood Chemistry Contains an Early Hepatocellular Carcinoma Signal, and Machine Learning Has Already Learned to Read It"
category: "cancer"
date: "April 2026"
---

Liver cancer kills approximately 29,000 Americans each year. Caught while still localized, the five-year survival rate is 38 percent. Once it has spread, that figure collapses to under 4 percent.[<sup>1</sup>](#ref-1) Most hepatocellular carcinoma (HCC) arises on a background of cirrhosis or chronic liver disease, meaning the organ is already under routine metabolic surveillance. The standard blood draw ordered for that surveillance already encodes the signal.

**38% survival when caught early, under 4% once spread. The liver chemistry panel ordered every six months already contains the early warning.**

## The Signature in the Blood

Liver function tests ordered routinely in patients with hepatitis B, hepatitis C, fatty liver, or alcohol use contain the earliest detectable markers of HCC development. The **FIB-4 index**—calculated from aspartate aminotransferase (AST), alanine aminotransferase (ALT), platelet count, and age, all standard comprehensive metabolic panel (CMP) outputs—has been validated as a pre-diagnostic HCC predictor in a prospective cohort of 44,215 cancer-free participants. Patients in the highest FIB-4 quartile carried a hazard ratio of **18.58** compared to the lowest quartile.[<sup>2</sup>](#ref-2)

Serial changes in FIB-4 are more powerful than a single measurement. A nationwide cohort study using Taiwan's National Health Insurance database (810,698 patients with metabolic liver disease) found that the transition from low-risk FIB-4 (<1.45) to high-risk FIB-4 (>2.67) over three years was independently associated with future HCC, even in patients without cirrhosis.[<sup>3</sup>](#ref-3) The mechanism involves the gradual accumulation of hepatic fibrosis, which can be observed through a decline in platelets (splenic sequestration), increasing AST/ALT ratios, and decreasing albumin levels—all standard CMP components.

## The Machine Learning Case

A comprehensive AI study across Hong Kong developed a LightGBM model trained solely on **routine blood tests**—complete blood count (CBC), liver function tests, renal function tests, and clotting profiles—to screen for HCC. It achieved an area under the curve (**AUC) of 0.894** on the test cohort and 0.871 on the validation cohort, outperforming α-fetoprotein (AFP) for early-stage detection across all BCLC (Barcelona Clinic Liver Cancer) stages.[<sup>4</sup>](#ref-4) A second model, trained on data from the United Kingdom Biobank and the National Institutes of Health All of Us, involving over 900,000 individuals, achieved an area under the curve (AUC) of 0.88 years before HCC diagnosis, using routine blood tests among its inputs.[<sup>5</sup>](#ref-5)

## What This Proves

For liver cancer, the clinical monitoring infrastructure is already in place. Patients at risk are already having their blood drawn at regular intervals. The CMP values used to monitor liver disease show a clear HCC trajectory. The science is well established. However, a population-scale algorithm that processes these values longitudinally and flags increased risk has not yet been developed for routine use in primary care.

## Endnotes

<span id="ref-1"></span>

1.National Cancer Institute. "Cancer Stat Facts: Liver and Intrahepatic Bile Duct." SEER, 2024.


SEER data reporting five-year relative survival of 37.6% for localized liver cancer versus approximately 3.5% for distant-stage disease. The disparity is among the widest across all cancer types, underscoring why pre-diagnostic detection is the decisive variable.

<span id="ref-2"></span>

2.Zhang Z, Li S, Zhang D, et al. "Value of GPR, APPRI and FIB-4 in the early diagnosis of hepatocellular carcinoma: a prospective cohort study." *Jpn J Clin Oncol*. 2024. 54(2):129-136.


Prospective cohort of 44,215 cancer-free participants in the Jinchang Cohort Study. FIB-4 achieved AUC 0.81 for HCC prediction; highest-quartile FIB-4 carried hazard ratio 18.58 versus lowest quartile. Confirms that standard CMP-derived indices predict liver cancer years before diagnosis.

<span id="ref-3"></span>

3.Yeo YH, Ho HJ, Huang TW, et al. "Dynamic FIB-4 Score Changes and HCC Risk in Patients with MASLD and Elevated Liver Enzymes**: **A Nationwide Cohort Study." *Liver Cancer*. 2026.


Nationwide cohort study (810,698 MASLD patients, Taiwan national insurance database) demonstrating that transition from low to high FIB-4 over three years independently predicted future HCC. Establishes that serial trajectory of routine liver blood markers is more powerful than a single reading.

<span id="ref-4"></span>

4.Kwok KN, Chueng KM, Lam SJ, et al. "Development of a novel routine blood-based AI model for hepatocellular carcinoma screening—a territory-wide study." *ESMO GIO*. 2025. 10:100241.


LightGBM model trained on routine CBC, liver function, renal function, and clotting profiles. AUC 0.894 (test) and 0.871 (validation), outperforming AFP. Top features: MCV, RDW, WBC, INR, albumin, bilirubin. Demonstrates that routine-only blood inputs suffice for HCC screening.

<span id="ref-5"></span>

5.Clusmann J, Koop PH, Zhang DY, et al. "Machine learning predicts liver cancer risk from routine clinical data: a large population-based multicentric study." *medRxiv*. 2024.


Random forest model on 900,000+ individuals from UK Biobank and NIH All of Us cohorts, achieving AUC 0.88 for HCC prediction years before diagnosis. Demonstrates cross-cohort generalizability of the machine learning framework at population scale. Note: preprint, peer review pending.