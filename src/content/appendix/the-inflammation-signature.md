---
title: "The Inflammation Signature"
subtitle: "Breast Cancer Produces a Measurable CBC Inflammatory Pattern Before Diagnosis—Machine Learning on 396,000 Women Has Already Proven It"
category: "cancer"
date: "April 2026"
---

There are approximately 300,00 breast cancer diagnoses in the United States annually. Caught while still localized, the five-year survival rate reaches 100 percent. Once it has spread to distant organs, that figure falls to 31 percent.[<sup>1</sup>](#ref-1) Existing screening programs target imaging, not blood. Yet a large-scale machine learning study on nearly 400,000 women has shown that the complete blood count (CBC) ordered at a routine physical already contains a detectable breast cancer signal.

**100% survival when caught locally, but 31% once spread. A 400,000-woman study shows the CBC already carries the signal.**

## The Signature in the Blood

Breast cancer produces a systemic inflammatory signature through immune crosstalk with the tumor microenvironment. The neutrophil-to-lymphocyte ratio (NLR), platelet-to-lymphocyte ratio (PLR), and systemic immune-inflammation index (SII) are all derived from standard CBC differentials. A meta-analysis of NLR across breast cancer studies found elevated pre-treatment NLR associated with worse overall survival (hazard ratio [HR] 2.56) and disease-free survival (HR 1.74).[<sup>2</sup>](#ref-2)

A United Kingdom Biobank analysis of 4,237 new breast cancer cases among 440,000 participants found that pre-diagnostic SII, NLR, and PLR showed measurable links to breast cancer risk, with effect sizes **increasing as diagnosis approached**, indicating a systemic immune response to an undetected tumor growth.[<sup>3</sup>](#ref-3)

## The Machine Learning Case

A retrospective study of **396,848 women** aged 40 to 70 across 309 clinical laboratory sites in Brazil trained a ridge regression classifier on CBC parameters alone. The model achieved an area under the curve (AUC) of 0.64, with the high-risk group (10 percent of the population) capturing **19.8 percent of all cancers** (relative risk [RR] 1.99), and the low-risk group (30 percent of the population) containing only 12.6 percent of cancers (RR 0.42).[<sup>4</sup>](#ref-4) Key features were NLR, red blood cell (RBC) count, and age. Hemoglobin, mean corpuscular hemoglobin (MCH), and mean corpuscular volume (MCV) were significantly higher in cancer cases; lymphocyte counts were significantly lower.

While the AUC of 0.64 is modest compared to ColonFlag (0.82) or LungFlag (0.86), the study population of nearly 400,000 women and the consistent directional signal across all CBC markers confirm that breast cancer leaves a measurable imprint in routine blood work. Improved feature engineering, longitudinal trajectory analysis, and comprehensive metabolic panel (CMP) integration would be expected to increase discriminative performance.

## What This Proves

Breast cancer's CBC signature is real, directionally consistent, and detectable in the largest CBC-based cancer machine learning study published to date. The science is established, but a population-scale algorithm with prospective validation and longitudinal blood-trajectory features has not yet been developed.

## Endnotes

<span id="ref-1"></span>

1.National Cancer Institute. "Cancer Stat Facts: Female Breast Cancer." SEER, 2024.


SEER data reporting five-year relative survival of 100% for localized female breast cancer versus approximately 32.6% for distant-stage disease. Approximately 64% of cases are diagnosed at the localized stage, underscoring the importance of maintaining and expanding early detection approaches.

<span id="ref-2"></span>

2.Ethier JL, Desautels D, Templeton A, Shah PS, Amir E. "Prognostic role of neutrophil-to-lymphocyte ratio in breast cancer: A systematic review and meta-analysis." *Breast Cancer Res*. 2017;19:2.


Systematic review confirming that elevated pre-treatment NLR is associated with worse OS (HR 2.56), DFS (HR 1.74). PLR was also prognostic. Establishes the CBC inflammatory ratio signature as a clinically validated marker of breast cancer biology.

<span id="ref-3"></span>

3.Nøst TH, Alcala K, Urbarova I, et al. "Systemic inflammation markers and cancer incidence in the UK Biobank." *Eur J Epidemiol*. 2021;36:841–848.


UK Biobank analysis of 440,000 participants found that pre-diagnostic SII, NLR, and PLR levels showed measurable associations with breast cancer incidence in 4,237 incident cases, with effect sizes increasing as diagnosis approached. Validates the pre-diagnostic nature of the CBC signal.

<span id="ref-4"></span>

4.Araujo DC, Rocha BA, Gomes KB, et al. "Unlocking the complete blood count as a risk stratification tool for breast cancer using machine learning: a large scale retrospective study." *Sci Rep*. 2024;14:10841.


Ridge regression classifier trained on CBC parameters in 396,848 women across 309 laboratory sites in Brazil. AUC 0.64; high-risk group (10% of population) captured 19.8% of cancers. Largest published CBC-based breast cancer machine learning study, confirming a consistent signal despite modest discriminative performance.