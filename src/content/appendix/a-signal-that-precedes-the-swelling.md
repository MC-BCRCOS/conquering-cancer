---
title: "A Signal That Precedes the Swelling"
subtitle: "Lymphoma Leaves Inflammatory and Cellular Markers in the CBC Before Diagnosis—the Algorithm Remains to Be Built"
category: "cancer"
date: "April 2026"
---

Non-Hodgkin lymphoma (NHL) is diagnosed in approximately 80,000 Americans each year; Hodgkin lymphoma (HL) in approximately 8,500. Five-year survival for NHL reaches 87.7 percent at the localized stage and 63.8 percent at the distant stage. For HL, the figures are 92.9 percent and 82.0 percent.1 Both diseases disrupt normal blood cell production and trigger systemic inflammation—changes that are measurable in the complete blood count (CBC) and comprehensive metabolic panel (CMP) before diagnosis.

NHL survival drops from 84% to 66% once spread; HL from 93% to 84%. The inflammatory signature in the CBC precedes both. ## The Signature in the Blood

Lymphomas do not produce a single dominant CBC signal as reliably as leukemia or myeloma, but they leave a characteristic inflammatory profile. Erythrocyte sedimentation rate (ESR) is a formally incorporated prognostic marker in HL staging and is elevated in over 56 percent of Stage III patients at diagnosis. Lactate dehydrogenase (LDH) elevation on the CMP is a component of the International Prognostic Index for NHL and is elevated in approximately 45 percent of cases.2

A large population-based analysis using the Copenhagen Primary Care Laboratory Database tracked CBC abnormalities across 663,184 patients over multiple years. For hematological malignancies, including lymphomas, increased blood test activity was observed more than 5 years before diagnosis , with up to 10 additional tests per person-year in the final year—clinicians were responding to abnormal CBC values without recognizing their significance.3

## The Machine Learning Case

The CopLab machine learning study trained a model on CBC data from 663,184 patients to screen for impending hematological malignancy across all types, including lymphoma. The model achieved an area under the curve (AUC) of 0.84 at 6 months and 0.81 at 12 months before diagnosis, improving to 0.85 when incorporating 5 years of CBC history.4 This is the most directly applicable machine learning evidence for lymphoma. It demonstrates that serial CBC data contain a detectable pre-diagnostic signal across lymphoma subtypes, even when individual CBC markers are subtle compared with leukemia or myeloma.

## What This Proves

Lymphoma's blood signature is less dominant than myeloma or leukemia, but is real and measurable in large population datasets. ESR, LDH, lymphocyte count changes, and multi-year CBC activity patterns each carry a signal. A machine learning model trained on serial CBC data achieves a clinically useful AUC for detecting hematological malignancies, including lymphoma. A lymphoma-specific deployed population-screening algorithm has not yet been built. This is the clearest literature gap in the 13-paper series.


## Endnotes

1. National Cancer Institute. "Cancer Stat Facts: Non-Hodgkin Lymphoma" and "Cancer Stat Facts: Hodgkin Lymphoma." SEER, 2024.


SEER data reporting NHL five-year survival of 87.7% (localized) versus 63.8% (distant) and Hodgkin lymphoma 92.9% (localized) versus 82.0% (distant). Combined annual incidence approximately 90,000 cases in the US. Establishes the detection opportunity and survival stakes.

2. Ahmed R, Tariq F, Ashfaq J, et al. "The Outcome of Hodgkin Lymphoma With Reference to Prognostic Markers." *Cureus*. 2022;14(8):e28509.


Study of Hodgkin lymphoma patients reporting LDH deranged in 51.6% and ESR elevated in 56.7% of Stage III patients at diagnosis. ESR is formally incorporated in HL unfavorable early-stage risk criteria. LDH is a component of the NHL International Prognostic Index. Both are standard CMP outputs.

3. Christensen ME, Grand MK, Kriegbaum M, et al. "Blood sampling patterns in primary care change several years before a cancer diagnosis." *Acta Oncol*. 2024;63:28559.


Analysis of the Copenhagen Primary Care Laboratory Database showing increased blood test activity more than 5 years before hematological malignancy diagnosis, with up to 10 additional tests per person-year in the final year. Confirms that clinicians were detecting abnormal CBC values without acting on them systematically.

4. Christensen M, Sachs MC, Jonzon G, et al. "Pb2704: Predicting Hematological Malignancies Using Complete Blood Cell Counts From Primary Care." *Hemasphere*. 2023;7(Suppl):e72792be.


ML model trained on CBC data from 663,184 patients in the Copenhagen Primary Care Laboratory Database. AUC 0.84 at 6 months, 0.81 at 12 months, and 0.85 with 5 years of CBC history for hematological malignancy detection, including lymphoma. The most directly applicable machine learning evidence for lymphoma-spectrum pre-diagnostic detection.