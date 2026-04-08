---
title: "The CBC Already Signals the Infection Before the Doctor Does"
subtitle: "Three Machine Learning Algorithms Are Deployed in United States Hospitals—TREWS Cut Sepsis Mortality by 18.7% in a Prospective Multi-Site Study"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series • Sepsis (Early Warning)

Sepsis kills at least **350,000 Americans in hospitals annually** and costs $62 billion each year. For every hour of delayed diagnosis and treatment, mortality increases by 4 to 9 percent.[<sup>1</sup>](#ref-1) The complete blood count (CBC) changes that precede clinical sepsis recognition—rising or paradoxically falling white blood cell (WBC) count, shifting neutrophil-lymphocyte ratios (NLRs), declining platelet counts—are present in routine blood work hours to days before the patient meets diagnostic criteria. Three machine learning algorithms are already deployed in United States hospitals, and one, TREWS at Johns Hopkins, has produced prospective evidence of an 18.7 percent relative mortality reduction. Sepsis represents the most mature machine learning deployment story in this disease series.

**TREWS at Johns Hopkins cut sepsis mortality by 18.7% across five hospitals in a prospective study published in *Nature Medicine*. 89% of providers adopted the alert. The algorithm reads the same CBC that every patient receives.**

## The Treatment Effect That Makes Early Detection Urgent

The Surviving Sepsis Campaign's Hour-1 Bundle (blood cultures, broad-spectrum antibiotics, and fluid resuscitation) reduces mortality by approximately **25 to 30 percent when initiated within the first hour** versus delayed beyond six hours.[<sup>2</sup>](#ref-2) Earlier recognition means earlier bundle initiation and lower mortality—a direct, well-quantified causal chain. The Adams et al. prospective study of TREWS at Johns Hopkins precisely quantified this relationship: deployment of the machine-learning alert led to sepsis being recognized a median of 1.85 hours earlier, an 18.7 percent relative reduction in mortality, and a number needed to treat of approximately 17 to prevent 1 death.[<sup>3</sup>](#ref-3)

## The Signature in the Blood

The CBC in early sepsis tells a highly informative story that unfolds hours to days before clinical recognition. **Leukocytosis (WBC >12,000) or paradoxical leukopenia (WBC <4,000)** are SIRS criteria, but the more sensitive early signal is a shift in differential: **neutrophilia with absolute lymphopenia,** producing a rising NLR as innate immune activation precedes adaptive suppression.[<sup>4</sup>](#ref-4) Thrombocytopenia from consumptive coagulopathy and endothelial damage is an early finding. Elevated red blood cell distribution width (RDW) independently predicts sepsis mortality.

From the metabolic panel, rising lactate (when measured), elevated creatinine indicating early organ dysfunction, a rise in bilirubin from hepatic involvement, and glucose dysregulation all contribute. A CBC-only machine learning model achieves an area under the curve (AUC) of 0.87 for sepsis prediction from blood counts taken within six hours of ICU admission, declining to 0.72 for CBCs collected 28+ days before, demonstrating a clear temporal signal in the routine hematological panel alone.

## The Machine Learning Case

Henry and colleagues developed TREWScore, a supervised Weibull-Cox mixture model on vital signs and laboratory data. Validated on approximately 69,000 ICU admissions, it achieved an **AUC of 0.83 to 0.85 with a median 28.2-hour lead time** before septic shock onset.[<sup>5</sup>](#ref-5) The prospective TREWS deployment study published in *Nature Medicine* in 2022 remains the most rigorous evidence in deployed machine learning sepsis literature: **18.7 percent relative mortality reduction** across five Johns Hopkins hospitals with 89 percent provider adoption, 82 percent sensitivity, and 97 percent negative predictive value.[<sup>3</sup>](#ref-3)

The Dascena InSight gradient boosting model, validated across 684,443 patient encounters, achieved an AUC exceeding 0.90 using vital signs and laboratory data.[<sup>6</sup>](#ref-6) The Epic Sepsis Model is deployed at hundreds of United States hospitals, though external validation found an AUC of only 0.63—a cautionary example that AUC on development sets does not guarantee real-world performance and that algorithmic transparency is essential for responsible clinical deployment.

## What This Proves

Sepsis is the furthest advanced of all 11 diseases in deployment maturity. TREWS is operational at Johns Hopkins with evidence of prospective mortality reduction. InSight is approved by the US Food and Drug Administration. The blood signature, shifting WBC differential, rising NLR, declining platelets, and RDW elevation, is present hours before clinical diagnosis. An 18.7 percent mortality reduction from reading the same CBC that every hospitalized patient receives represents real lives saved. The remaining challenge is separating effective deployed systems from commercial algorithms with poor external validity—a quality-of-evidence problem, not a scientific one.

## Endnotes

<span id="ref-1"></span>

1.Dantes RB, Kaur H, Bouwkamp BA, et al. Sepsis Program Activities in Acute Care Hospitals — National Healthcare Safety Network, United States, 2022. MMWR Morb Mortal Wkly Rep 2023;72:907–911..


Sepsis-3 consensus definitions establishing the modern clinical framework. Documents approximately 1.7 million US annual sepsis cases and approximately 350,000 in-hospital deaths. Primary epidemiological reference and the diagnostic standard that machine learning algorithms are designed to anticipate.

<span id="ref-2"></span>

2.Evans L, Rhodes A, Alhazzani W, et al. "Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021." *Intensive Care Med*. 2021;47(11):1181–1247.


SSC 2021 guidelines documenting 25–30% mortality reduction with Hour-1 bundle and the time-dependent treatment effect. Establishes the causal chain that makes earlier machine learning-based recognition directly actionable: earlier alert = earlier bundle = lower mortality.

<span id="ref-3"></span>

3.Adams R, Henry KE, Sridharan A, et al. "Prospective, Multi-Site Study of Patient Outcomes After Implementation of the TREWS Machine Learning-Based Early Warning System for Sepsis." *Nat Med*. 2022;28(7):1455–1460.


Prospective study of TREWS across five Johns Hopkins hospitals demonstrating 18.7% relative mortality reduction, 89% provider adoption, 82% sensitivity, and 97% NPV. The strongest clinical evidence in deployed machine learning sepsis literature, demonstrating that routine blood-based machine learning alerts produce measurable mortality reduction in real hospital settings.

<span id="ref-4"></span>

4.Seymour CW, Kennedy JN, Wang S, et al. "Derivation, Validation, and Potential Treatment Implications of Novel Clinical Phenotypes for Sepsis." *JAMA*. 2019;321(20):2003–2017.


Machine learning-derived sepsis phenotyping on 63,858 patients, identifying 4 subtypes with mortality 5–39% using 29 variables, including CBC/CMP. Demonstrates that unsupervised machine learning on routine blood values reveals clinically meaningful and prognostically distinct sepsis sub-populations.

<span id="ref-5"></span>

5.Henry KE, Hager DN, Pronovost PJ, Saria S. "A Targeted Real-Time Early Warning Score (TREWScore) for Septic Shock." *Sci **Transl** Med*. 2015;7(299):299ra122.


Original TREWScore development, achieving AUC 0.83 with median 28.2-hour lead time before septic shock onset on approximately 69,000 ICU admissions. Foundational publication for the TREWS system, subsequently deployed at Johns Hopkins with proven mortality reduction.

<span id="ref-6"></span>

6.Mao Q, Jay M, Hoffman JL, et al. “Multicentre validation of a sepsis prediction algorithm using only vital sign data in the emergency department, general ward and ICU.” *BMJ Open.* 2018;8:e017833.


The Dascena InSight gradient boosting model, validated across 684,443 patient encounters, achieved AUC values approaching or exceeding 0.90 using only routinely collected vital sign data. FDA-cleared and commercially deployed. Primary reference for InSight algorithm performance and the basis for its FDA clearance.