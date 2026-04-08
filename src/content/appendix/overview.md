---
title: "Overview"
subtitle: ""
category: "regulatory"
date: "April 2026"
---

Ratner Early Detection Initiative (REDI)

Licensable & Partnerable CBC-Based Cancer Detection Algorithms The following algorithms operate on the same foundational principle that underlies REDI's work: routine blood data, analyzed with machine learning, carries a cancer signal that conventional clinical interpretation misses. Each entry below is either commercially licensable, academically partnerable, or already deployed at health systems and therefore available as a reference or collaboration target. No algorithm here relies on specialized specimens, proprietary assays, or novel biomarker panels. They all utilize complete blood count (CBC) values, standard chemistry panels, electronic health record (EHR) lab data, or clinically available protein markers.

This landscape excludes liquid biopsy platforms (Galleri, CancerSEEK/Cancerguard, Guardant Shield), cell-free deoxyribonucleic acid (cfDNA)-based tests, and imaging AI. Only blood chemistry and EHR-based algorithms are covered.

## Algorithm Landscape at a Glance

## 1. Medial EarlySign: ColonFlag and LungFlag

Entity: Medial EarlySign, Tel Aviv, Israel. Founded in 2009 with approximately 20 employees and approximately $3.8 million in annual revenue.

Distribution partners: Roche Diagnostics (navify Algorithm Suite); Lucem Health (United States deployment of LungFlag as 'Reveal for Lung Cancer'); Geisinger Health System (development partner).

ColonFlag is the most validated CBC-based cancer detection algorithm. It performs gradient boosting on age, sex, and 20 CBC parameters to generate a colorectal cancer risk score.1 ColonFlag was validated across more than 30 peer-reviewed studies and 20 million patients. ColonFlag has demonstrated odds ratios for colorectal cancer ranging from approximately 21.8 to 34.7 across studies at high-specificity thresholds.1 Real-world deployment at Capital Digestive Care via Roche navify found that roughly 70 percent of flagged patients had a significant finding on colonoscopy, 8 percent had colorectal cancer, and 22 percent had advanced adenomas.

In the United States, ColonFlag is marketed as LGI-Flag for lower gastrointestinal disorders to operate as non-device clinical decision support rather than as a regulated diagnostic.2

LungFlag, commercialized as Reveal for Lung Cancer by Lucem Health, analyzes EHR data, including CBC, demographics, medications, and diagnoses, to flag ever-smokers aged 40 to 89 at increased risk of lung cancer.3 Lucem Health projects that a provider using Reveal for two years across 50,000 United States Preventive Services Task Force (USPSTF)-eligible patients will identify approximately 140 more early-stage lung cancers.

Relevance for REDI: Medial EarlySign has not developed algorithms for pancreatic, ovarian, bladder, or kidney cancer. Their horizontal expansion into non-cancer conditions (diabetes, AAA, flu) rather than additional cancer types leaves the four REDI target cancers entirely open. A licensing or co-development discussion with EarlySign or Lucem Health is plausible—EarlySign's Innovation Collaborative is specifically designed to include external partners.

## 2. PRISM: MIT/Harvard Pancreatic Cancer Risk Model

Entity: MIT CSAIL (Principal Investigator: Martin Rinard) and Harvard Medical School/Beth Israel Deaconess Medical Center (Senior Author: Lisa Appelbaum). Supported by DARPA, NSF, Boeing, Aarno Labs, Prevent Cancer Foundation, and TriNetX.

Current status: Published in *eBioMedicine* (Lancet group) in November 2023. There is a prospective validation trial registered and underway.

PRISM uses two model architectures, a neural network (PrismNN) and logistic regression (PrismLR), trained on EHR data from 55 United States health care organizations via the TriNetX federated network, covering over 1.5 million pancreatic ductal adenocarcinoma (PDAC) cases and controls.4 The 87 input features include lab results (such as CBC), diagnoses, medications, and demographics. Models predict PDAC risk 6 to 18 months before diagnosis in patients aged 40 and older. Using the same relative risk threshold as current PDAC screening guidelines, PRISM identifies 3.5 times as many patients.

A separate prospective validation study, registered with the National Pancreatic Cancer Foundation, is currently deploying PRISM on real-time EHR data to assess performance and the time from prediction to diagnosis.

 Relevance for REDI: PRISM is an academic model built on open infrastructure (TriNetX). The MIT and Harvard teams have explicitly stated their goal is clinical deployment. A partnership, licensing arrangement, or collaborative expansion with REDI's hospital network is very feasible. REDI's INSIGHT and Northwell connections are precisely the kind of institutional nodes that could accelerate PRISM's prospective validation and give REDI access to a validated pancreatic cancer algorithm without starting from scratch.

## 3. VA Transformer Model (Zheng et al.)

 Entity: Veterans Affairs (VA) research team.

 Current status: Published in *iScience*/*Cell Reports Medicine* in September 2025. No commercial entity; no licensing mechanism has been announced.

This transformer-based deep learning model was trained on longitudinal EHR data from 19,426 PDAC cases and approximately 15.9 million controls drawn from the VA Corporate Data Warehouse.5 It explicitly captures the sequential order and timing of clinical events (diagnoses, medications, lab values) rather than treating EHR data as a static feature vector (the key methodological advance over PRISM). Among the top 1,000 highest-risk patients in a simulated cohort of 1 million, three-year PDAC incidence was 115 times higher than the age- and sex-adjusted baseline.

 Relevance for REDI: The VA dataset is the largest single-institution PDAC EHR training set published. The model is not commercially available, but VA researchers routinely partner with academic medical centers and philanthropic initiatives. A data-sharing or co-development agreement that aligns REDI's hospital data with the VA cohort would substantially strengthen prospective validation.

## 4. Roche navify Algorithm Suite

 Entity: Roche Diagnostics, Rotkreuz, Switzerland. Launched in April 2023.

 Current status: Live commercial platform. Available to hospitals and laboratory networks globally. Algorithms are licensed from third-party developers and hosted on a single integration layer.

Roche's navify Algorithm Suite is a secure digital ecosystem that connects physicians to a library of medical algorithms via a single integration point into laboratory information system/hospital information system (LIS/HIS) and EHR/electronic medical record (EMR) systems.6 Current cancer-relevant algorithms include ColonFlag (from EarlySign) for colorectal cancer risk using CBC, and GAAD for early-stage hepatocellular carcinoma detection using AFP and PIVKA-II protein assays combined with age and sex. GAAD is CE-marked but not available in the United States. Roche announced that lung and gastric cancer algorithms are in the pipeline via the EarlySign partnership.

 Relevance for REDI: navify provides a ready-made deployment and distribution channel. Roche explicitly invites universities and algorithm developers to list in the navify marketplace. If REDI develops and validates an algorithm, navify offers a faster route to health system deployment than building a proprietary integration. It also signals the business model that Roche sees working: third-party algorithm IP distributed through a common platform. REDI should investigate whether navify partnership terms allow for the cancer types currently missing from the library.

## 5. Lucem Health Innovation Collaborative

 Entity: Lucem Health, Davidson, NC. Series A: $7.7 million. Commercially deployed at Mercyhealth.

 Current status: Active commercialization. Reveal product family includes lung cancer, colorectal cancer, liver disease, arrhythmias, and type 1 diabetes. Openly recruiting new algorithm partners.

Lucem Health describes itself as a platform for deploying clinical AI models developed by third parties.7 Their Innovation Collaborative is a formal partner program designed to help algorithm developers integrate, deploy, and commercialize models through Lucem's health system relationships. Their existing CBC/EHR-based cancer work runs through the EarlySign licensing relationship, but the Collaborative is open to new model developers.

 Relevance for REDI: Lucem is one of the few United States entities with live commercial infrastructure for CBC-based cancer risk algorithms deployed within health systems. A partnership where REDI develops the algorithms and Lucem deploys them commercially is a viable go-to-market structure. Their existing Mercyhealth deployment and $7.7 million in funding demonstrate that they are a real operating company, not just a concept.


Strategic Implications for REDI

The landscape above shows a clear gap and an accessible infrastructure. The gap: no deployed, validated algorithm exists for pancreatic, ovarian, bladder, or kidney cancer using CBC or routine EHR blood data. The four cancers in REDI's current white paper series are completely unaddressed by any commercial or near-commercial product.

The infrastructure: Medial EarlySign, Lucem Health, Roche navify, and MIT's PRISM team have collectively built the deployment channels, regulatory positioning, and partnership models that REDI would otherwise need to create from scratch. The simplest approach is not to compete with these entities, but to build what they have not yet developed and deploy it through the channels they have already established.

PRISM's prospective validation window presents the most urgent opportunity. Collaborating with the MIT/Harvard team now, while their model is still in prospective validation and before a commercial partner claims exclusive rights, positions REDI to co-develop the pancreatic extension that PRISM's authors explicitly said they want to pursue.


Endnotes

NICE. "ColonFlag for identifying people at risk of colorectal cancer." Medtech innovation briefing [MIB142]. 2018.


*Summarizes multiple large cohort validation studies of ColonFlag demonstrating odds ratios of 21.8 to 34.7 for colorectal cancer at high-specificity thresholds (~99%), supporting CBC-based machine learning as a viable population-level risk stratification tool across diverse populations.*

Tsai IJ, Shen WC, Lee CL, Wang HD, Lin CY. "Machine Learning in Prediction of Bladder Cancer on Clinical Laboratory Data." *Diagnostics (Basel)*. 2022;12(1):203.

https://doi.org/10.3390/diagnostics12010203

*Documents the US regulatory positioning of CBC-based cancer risk algorithms as clinical decision support rather than diagnostic devices, allowing deployment without FDA clearance. Contextualizes EarlySign**’ s** LGI-Flag labeling strategy and its implications for similar algorithms.*

Lucem Health. “Lucem Health Launches Reveal for Lung Cancer, A New AI-Driven Solution to Accelerate Lung Cancer Screening for At-Risk Patients.” Press release. May 2, 2024.


*Announces commercial launch of Reveal for Lung Cancer, powered by EarlySign'sLungFlag**, at Mercyhealth**. Projects approximately 60% improvement in early-stage lung cancer identification over standard USPSTF criteria. Describes Lucem's Innovation Collaborative partnership model.*

Jia K, Kundrot S, Palchuk MB, et al. "A pancreatic cancer risk prediction model (Prism) developed and validated on large-scale US clinical data." *EBioMedicine*. 2023;98:104888.

https://doi.org/10.1016/j.ebiom.2023.104888

*Develops and validates PRISM neural network and logistic regression models on 55-institution TriNetX EHR data. Identifies 3.5 times more PDAC cases than current screening criteria at equivalent risk thresholds. Includes prospective deployment roadmap and explicit goal of clinical integration.*

Zheng C, Khan A, Ritter D, et al. "Pancreatic cancer risk prediction using deep sequential modeling of longitudinal diagnostic and medication records." *Cell Rep Med*. 2025;6(9):102359


*Transformer model trained on 19,426 VA PDAC cases achieves 115-fold enrichment for pancreatic cancer in the top 1,000 highest-risk patients per cohort of 1 million. Incorporates sequential ordering of clinical events and medication trajectories, advancing beyond static feature-vector approaches.*

Roche Diagnostics. "Roche introduces navify Algorithm Suite, a digital library of medical algorithms." Press release. April 11, 2023.


*Launches navify Algorithm Suite as a commercial platform hosting third-party cancer detection algorithms ,* including ColonFlag and GAAD. Describes the open ecosystem model that allows universities and external developers to distribute validated algorithms through Roche's health system infrastructure.*

Lucem Health. "Lucem Health Announces Innovation Collaborative to Bring AI/ML to the Front Lines of Healthcare." Press release. June 9, 2022.


*Establishes Lucem Health's Innovation Collaborative as an open partner program for external algorithm developers. Details Lucem's platform approach to integrating, deploying, and commercializing clinical AI models through existing health system relationships, including its long-term partnership with Medial EarlySign.*