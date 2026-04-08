---
title: "Hidden in Plain Sight"
subtitle: "Routine Clinical Blood Data Contains a Lung Cancer Signal, and a Machine Learning Algorithm Has Already Learned to Read It"
category: "cancer"
date: "April 2026"
---

Lung cancer is the leading cause of cancer death in the United States, killing approximately 125,000 Americans annually. Caught while still localized, the five-year survival rate is 65 percent. Diagnosed at the distant stage, where more than half of all cases are first detected, it falls to under 10 percent.1 Current United States Preventive Services Task Force (USPSTF) screening criteria, which require a specific age range and smoking history, miss roughly two-thirds of all lung cancer patients.2 The data needed to find them earlier already exist in the routine blood work ordered at annual physicals.

65% survival when caught early, under 10% once spread. Yet two-thirds of lung cancer patients never qualify for screening—even under updated guidelines. ## The Signature in the Blood

Lung cancer produces a measurable inflammatory blood signature months to years before clinical diagnosis, driven not by bleeding but by the tumor’s own biochemistry. Tumors secrete colony-stimulating factors, granulocyte colony-stimulating factor (G-CSF) and granulocyte-macrophage colony-stimulating factor (GM-CSF), that drive leukocytosis. They secrete interleukin-6, which stimulates thrombopoietin production and elevates platelet counts.3 They suppress erythropoiesis through hepcidin-mediated iron sequestration, producing anemia in more than half of patients at diagnosis.

The consequence is a progressive, multi-marker pattern in the complete blood count (CBC). Neutrophils rise while lymphocytes fall, driving an accelerating neutrophil-to-lymphocyte ratio (NLR). A landmark study tracking annual CBCs over 80 months in lung cancer screening participants found that patients who developed lung cancer showed NLR annual progression of 2.56 percent versus 0.27 percent in matched controls, with baseline values identical between the two groups.4 Red blood cell distribution width (RDW) is independently elevated and has been shown to predict lung cancer mortality with an area under the curve (AUC) of 0.753 from a standard CBC alone.5

## The Algorithm That Works

LungFlag, the machine learning model published by Gould et al. in the *American Journal of Respiratory and Critical Care Medicine* in 2021, was trained on routine clinical and laboratory data from Kaiser Permanente Southern California using XGBoost—the same gradient-boosting architecture that underlies ColonFlag. Input features included CBC values, standard laboratory panels, smoking history, diagnoses, and other electronic health record (EHR) data routinely recorded at primary care visits.6

Applied to 6,505 non-small cell lung cancer cases and 189,597 controls, the model identified cancer 9 to 12 months before clinical diagnosis** with an AUC of 0.86, significantly outperforming the standard PLCOm2012 risk model (AUC 0.79) and USPSTF screening criteria. At USPSTF’s own operating specificity of 91.4 percent, LungFlag captured 53 percent of cancers,** compared with 26.6 percent under USPSTF criteria alone. Among the model’s most influential novel predictors were white blood cell count and platelet count—both standard CBC outputs.

## What This Proves

LungFlag demonstrates that the same machine learning methodology that produced ColonFlag for colorectal cancer translates directly to lung cancer. The blood signature is different, inflammatory rather than anemic, but the principle is identical: the CBC and routine labs contain a cancer-specific pattern, and a trained XGBoost model can read it months before a physician would have reason to suspect disease.

USPSTF screening criteria are age- and smoking-based. They are static. They miss never-smokers, former smokers who quit more than 15 years ago, and anyone outside the eligible age range. LungFlag works continuously and passively on every blood draw. A cost-effectiveness analysis projected that LungFlag, as an adjunct to USPSTF screening, would identify 17 additional early-stage lung cancers per year within a single health system, resulting in 22 fewer deaths and $2.87 million in net cost savings over five years.7

The science is established. The algorithm exists and has been externally validated. For the 11 remaining cancers in this series, the key question is not whether machine learning can read a blood signature—ColonFlag and LungFlag already answered that. The question is whether a comparable signature exists. For each, the peer-reviewed evidence shows that it does.


## Endnotes

1. National Cancer Institute. "Cancer Stat Facts: Lung and Bronchus Cancer." SEER, 2024.


SEER population data for US lung and bronchus cancer diagnoses 2015–2021, reporting five-year relative survival of 64.7% for localized disease versus 9.7% for distant-stage disease. More than half of cases (52%) are diagnosed at the distant stage. Approximately 226,650 new cases and 124,730 deaths are projected for 2025, making lung cancer the leading cause of cancer mortality in the United States. Establishes the survival differential and late-detection pattern that frames the detection argument.

2. Yang HC, Chang A, Visa M, et al. "Age-Based Screening for Lung Cancer Surveillance in the US." *JAMA Netw Open*. 2025;8(11):e2546222.


Analysis of 997 lung cancer patients at Northwestern University (2018–2023) finding that only 35.1% met 2021 USPSTF LDCT screening criteria. Among the 65% who were excluded, 25% were never-smokers, 13% had quit more than 15 years prior, 7% had fewer than 20 pack-years, and 4% fell outside the eligible age range. The excluded group was disproportionately female and Asian. Documents the fundamental population-coverage gap that blood-based ML screening is positioned to address.

3. Maraz A, Furak J, Varga Z, Kahan Z, Tiszlavicz L, Hideghety K. "Thrombocytosis Has a Negative Prognostic Value in Lung Cancer." *Anticancer Res*. 2013;33(4):1725–1729.


Study of 1,407 lung cancer patients demonstrating that thrombocytosis (platelets >400 × 10⁹/L) occurs in approximately 17–29% of cases, depending on stage, and is associated with worse prognosis. Supports the presence of a systemic inflammatory blood signature in lung cancer.

4. Sanchez-Salcedo P, Gonzalez J, Martinez-Urbistondo D, et al. "Exploring the Neutrophil/Lymphocyte and Platelet/Lymphocyte Ratios as Biomarkers for Lung Cancer Development." *Eur Respir J*. 2015;46(Suppl 59):PA4241.

DOI: 10.1183/13993003.congress-2015.PA4241

Longitudinal study tracking annual CBCs over a median of 80 months in participants in the Pamplona Lung Cancer Screening Program. Subjects who developed lung cancer showed NLR annual progression of 2.56% versus 0.27% in matched controls, and PLR annual progression of 3.75% versus 0.33%, with baseline values identical between groups. Establishes that the CBC captures a pre-diagnostic temporal signal, the rate of inflammatory marker change, that distinguishes future cancer patients from controls years before diagnosis.

5. Song B, Shi P, Xiao J, et al. "Utility of Red Cell Distribution Width as a Diagnostic and Prognostic Marker in Non-Small Cell Lung Cancer." *Sci Rep*. 2020;10(1):15717.


Study demonstrating that red cell distribution width (RDW), a standard CBC parameter, alone achieved AUC 0.753 for distinguishing non-small cell lung cancer patients from healthy subjects, with 76.3% sensitivity at 76.2% specificity. Also showed RDW independently predicted mortality. A subsequent Mendelian randomization study confirmed a causal association between higher RDW and lung cancer risk (OR 1.11, P = 0.006), establishing RDW as a biologically grounded CBC-derived lung cancer signal.

6. Gould MK, Huang BZ, Tammemagi MC, Kinar Y, Shiff R. "Machine Learning for Early Lung Cancer Identification Using Routine Clinical and Laboratory Data." *Am J Respir Crit Care Med*. 2021;204(4):445–453.


Development and validation of LungFlag using XGBoost trained on routine clinical and laboratory EHR data from 6,505 NSCLC cases and 189,597 controls at Kaiser Permanente Southern California. Achieved AUC 0.86 at 9–12 months pre-diagnosis, outperforming PLCOm2012 (AUC 0.79) and USPSTF criteria. At USPSTF specificity, LungFlag captured 53% of cancers versus 26.6% for criteria alone. Novel influential CBC predictors included WBC and platelet count. The model has since been approved for UK CPRD validation.

7. Gould MK, Choman EN, Olghi N, Obradovic M, Ogale S, Sanmartin CH. "Budget Impact Model for LungFlag , a predictive risk model for lung cancer screening." *J Clin Oncol*. 2024;42(16_suppl):10534.


Five-year budget impact analysis modeling LungFlag as an adjunct to USPSTF LDCT screening in a health system of 36,803 eligible persons. Projected 17 additional early-stage NSCLC diagnoses per year, 33 fewer Stage III/IV diagnoses, 22 fewer deaths, and net cost savings of $2.87 million over five years. Demonstrates that passive machine learning-based pre-screening using routine blood data is not only clinically effective but cost-saving at the health system level, a critical argument for policy adoption.