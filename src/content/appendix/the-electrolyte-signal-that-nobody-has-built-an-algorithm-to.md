---
title: "The Electrolyte Signal That Nobody Has Built an Algorithm to Read"
subtitle: "84% of Addison's Patients Have Hyponatremia at Diagnosis—a Canine Machine Learning Algorithm Already Achieves 99% Accuracy on the Same Biochemistry"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series  •  Addison's Disease

Primary adrenal insufficiency affects approximately **10**** to 1****4**** per 100,000 individuals**, but its consequences when missed are catastrophic: adrenal crisis is fatal without immediate corticosteroid treatment, and more than 50 percent of first crises occur in patients with no prior diagnosis. Two-thirds of patients receive at least one incorrect diagnosis before Addison's is identified, and less than 30 percent of women are diagnosed within six months of symptom onset.1 The electrolyte and metabolic changes that precede crisis are present in routine blood work for months to years before collapse. The algorithm that could flag this pattern has been proven in a closely related biological system, but it has not yet been built for humans.

**84% of Addison's patients have hyponatremia at diagnosis. The electrolyte signal precedes adrenal crisis by months. A canine algorithm on identical biochemistry achieves 99%+ accuracy. The human version has not been built.**

## The Treatment Effect That Makes Early Detection Urgent

Addison's disease treated with hydrocortisone and fludrocortisone replacement is a manageable condition with a near-normal quality of life and life expectancy. The barrier is diagnosis: symptoms, including fatigue, weight loss, nausea, salt craving, are so non-specific that the average time from symptom onset to diagnosis exceeds **two years,** with multiple physician visits and misdiagnoses intervening.1 Adrenal crisis mortality is 0.5 per 100 patient-years; the highest-risk period is the pre-diagnosis interval, when no hydrocortisone stress-dosing protocol is in place.

## The Signature in the Blood

Sævik and colleagues characterized the metabolic panel at diagnosis in 247 autoimmune Addison's disease patients, yielding findings that challenge standard clinical teaching.2 Hyponatremia (Na+ <135 mEq/L) was present in **84**** percent** of patients at diagnosis—the most consistent biochemical finding, from aldosterone deficiency impairing renal sodium retention. Hyperkalemia was present in only 33 percent, far less common than most textbooks suggest. Elevated thyroid-stimulating hormone (TSH) was present in 52 percent, attributable to coexisting autoimmune thyroid disease or direct cortisol effects. Hypoglycemia was present in approximately 10 percent.

The biological mechanism: progressive autoimmune destruction of the adrenal cortex over months to years reduces aldosterone (causing sodium loss), cortisol (causing glucose instability), and dehydroepiandrosterone (DHEA). This produces a trajectory of declining sodium, potentially rising potassium, and glucose instability that is measurable on the comprehensive metabolic panel (CMP) in the months before crisis, alongside elevated blood urea nitrogen (BUN) from hypovolemia and a complete blood count (CBC) showing normocytic anemia and eosinophilia.

## The Machine Learning Case

No published machine learning study exists that uses routine blood tests to detect Addison's disease in humans—the most significant research gap in this entire series. The closest evidence comes from veterinary medicine, where canine hypoadrenocorticism is biologically essentially identical to human Addison's disease.

Reagan and colleagues applied AdaBoost to more than 1,000 dogs using routine CBC and serum biochemistry parameters, achieving **>99**** percent**** accuracy for diagnosing canine Addison's disease,** outperforming all individual laboratory markers, including sodium, potassium, and sodium/potassium ratio.3 A subsequent validation study confirmed robust performance across an independent clinical population. The authors are collaborating with physicians to extend this approach to human medicine. The training data for a human version—sodium, potassium, glucose, creatinine, BUN, and TSH from patients eventually diagnosed with Addison's—sits in electronic medical records of every health system that has seen even a handful of cases.

## What This Proves

Addison's disease is rare, diagnosis-resistant, and potentially fatal—the combination that makes a machine learning screening algorithm most urgent. The blood signature is documented in 247 human patients: hyponatremia in 84 percent, elevated TSH in 52 percent. A canine AdaBoost algorithm achieves over 99 percent accuracy on nearly identical biochemistry. No human machine learning algorithm has been built. This paper argues that it should be created using the same retrospective electronic health record methodology that produced ColonFlag, LungFlag, and Klinrisk, with training data already sitting in the records of patients who were eventually diagnosed after years of misdiagnosis.



## Endnotes

**1.  **Bornstein SR, Allolio B, Arlt W, et al. "Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline." *J Clin Endocrinol **Metab*. 2016;101(2):364–389.



Endocrine Society clinical guideline documenting prevalence (10-14/100,000), >2-year average time to diagnosis, majority of first crises occurring pre-diagnosis, and crisis mortality rate. Establishes the clinical context and treatment evidence throughout this paper.

**2.  **Sævik ÅB, Åkerman AK, Grøning K, et al. "Clues for Early Detection of Autoimmune Addison's Disease — Myths and Realities." *J Intern Med*. 2018;283(2):190–199.



Prospective characterization of metabolic panel at diagnosis in 247 autoimmune Addison’s disease patients: hyponatremia in 84%, elevated TSH in 52%, hyperkalemia in only 33%. Overturns textbook teaching and establishes hyponatremia, not hyperkalemia, as the dominant detectable CMP signal, providing the target features for any machine learning algorithm.

**3.  **Reagan KL, Reagan BA, Gilor C. "Machine Learning Algorithm as a Diagnostic Tool for Hypoadrenocorticism in Dogs." *Domest** Anim Endocrinol*. 2020;72:106396.



AdaBoost achieving >99% accuracy for canine Addison’s disease from routine CBC and serum biochemistry in >1,000 dogs. Canine adrenal physiology and electrolyte pathophysiology are essentially identical to human Addison’s disease, providing direct proof of concept for the approach. Authors are collaborating with physicians to extend to human medicine.