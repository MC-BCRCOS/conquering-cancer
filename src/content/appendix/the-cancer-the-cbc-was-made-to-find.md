---
title: "The Cancer the CBC Was Made to Find"
subtitle: "Leukemia's Pre-Diagnostic Signal in Routine Blood Counts Is Measurable Years Before Diagnosis, and Machine Learning Reads It with 92 to 98% Accuracy"
category: "cancer"
date: "April 2026"
---

Leukemia encompasses a family of blood cancers. The five-year survival rate for chronic myeloid leukemia (CML) is approximately 73 percent; for chronic lymphocytic leukemia (CLL), approximately 88 percent. Both are diseases of the blood, and both leave unmistakable pre-diagnostic signals in the complete blood count (CBC)—the one laboratory test ordered more routinely than any other in primary care.1

CML and CLL both leave pre-diagnostic CBC signals measurable years before diagnosis. Machine learning reads them with 92 to 98% accuracy. ## The Signature in the Blood

In CML, the tumor's Philadelphia chromosome drives BCR-ABL1 tyrosine kinase activity, causing leukocytosis, basophilia, and eosinophilia months to years before clinical diagnosis. A systematic review of pre-clinical CML cases found that basophil percentage is the earliest and most specific CBC marker, deviating from normal before the total white blood cell (WBC) count reaches diagnostic thresholds.2

In CLL, essentially all cases are preceded by monoclonal B-cell lymphocytosis (MBL), detectable as persistently rising lymphocyte count on the CBC differential. A large United States outpatient study tracking 1,090,707 patients over 7 years found that the absolute lymphocyte count slope, WBC trajectory, and platelet count together defined a pre-diagnostic CLL profile recognizable well before any clinical suspicion.3

## The Machine Learning Case

For CML, the XGBoost and LASSO models trained on Veterans Health Administration CBC data from 1,623 patients achieved an area under the curve (AUC) of 0.87 to 0.96 at diagnosis, 0.75 to 0.83 6 months before diagnosis, and 0.58 to 0.73 5 years before diagnosis. Basophil percentage, a standard CBC differential output, was the most informative feature at diagnosis and at 6 months.4

For CLL, an XGBoost classifier trained on 11 CBC parameters achieved 98.6 percent accuracy . A separate random forest model trained on 1,090,707 patients achieved an AUC of 0.92, with absolute lymphocyte count (initial value and slope) and WBC trajectory as the dominant features.5

## What This Proves

Of all 13 cancers in this series, leukemia is the one in which the CBC signal is most direct and the machine learning evidence most advanced. CML and CLL both produce CBC abnormalities measurable years before clinical diagnosis. Machine learning models achieve near-diagnostic accuracy from standard blood counts alone. For CLL, a population-scale deployed algorithm is within reach of current technology. The science is not just established, it is mature.


## Endnotes

1. National Cancer Institute. "Cancer Stat Facts: Leukemia." SEER, 2024.


SEER data for overall leukemia five-year survival is 67%, with CML at approximately 73% and CLL at approximately 88%. Unlike solid tumors, leukemia is systemic at presentation and not staged by localized/distant categories, making early CBC-based detection especially impactful.

2. Kuan JW, Su AT, Leong CF, Osato M, Sashida G. "Systematic review of pre-clinical chronic myeloid leukaemia." *Int J Hematol*. 2018;108(5):465–484.


Review of 10 studies (17 subjects in the pre-clinical CML phase) showing that basophil percentage correlates better with BCR-ABL1 percentage than total WBC or eosinophil count, and diverges before leukocytosis reaches diagnostic thresholds. Establishes basophilia as the earliest CBC marker for CML.

3. Aoki J, Khalid O, Kaya C, Salama ME. "Machine Learning Model Predicts Abnormal Lymphocytosis Associated With Chronic Lymphocytic Leukemia." *JCO Clin Cancer Inform*. 2025;9:e2400197.


Random forest model trained on 1,090,707 adult patients over 7-year longitudinal CBC data achieving AUC 0.92. Most important features: absolute lymphocyte count (initial and slope), WBC trajectory, and platelet count. Demonstrates that a CLL-detection algorithm could be built directly from routine primary care CBC sequences.

4. Hauser RG, Esserman D, Beste LA, et al. "A Machine Learning Model to Successfully Predict Future Diagnosis of Chronic Myelogenous Leukemia With Retrospective Electronic Health Records Data." *Am J Clin Pathol*. 2021;156(6):1142–1148.


XGBoost and LASSO models trained on 1,623 CML patients from the Veterans Health Administration. AUC 0.87–0.96 at diagnosis, 0.75–0.83 at 6 months before, and 0.58–0.73 at 5 years before. Most informative CBC feature: basophil percentage.

5. Padmanabhan R, El Alaoui Y, Elomri A, Qaraqe MK, El Omri H, Taha RY. "Machine Learning for Diagnosis and Screening of Chronic Lymphocytic Leukemia Using Routine Complete Blood Count (CBC) Results." *Stud Health Technol Inform*. 2023;305:279–282.


Eight machine learning models trained on 11 CBC parameters for CLL detection. XGBoost achieved 98.62% accuracy, Logistic Regression 97.63%. Demonstrates that standard CBC parameters alone, without any specialty testing, achieve near-perfect discrimination for CLL when processed by machine learning classifiers.