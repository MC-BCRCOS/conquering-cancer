---
title: "The Cholestatic Fingerprint No Algorithm Has Learned to Read"
subtitle: "PBC Leaves a Distinctive Alkaline Phosphatase Signature in Routine Metabolic Panels, and No Machine Learning Algorithm Has Been Built to Find It"
category: "non-cancer-disease"
date: "April 2026"
---

Disease Detection Series • Primary Biliary Cholangitis

Primary biliary cholangitis (PBC) is a progressive autoimmune liver disease affecting approximately 105,000 adults in the United States, predominantly women in their fifth decade of life. Without treatment, median transplant-free survival from diagnosis is 7 to 16 years. With ursodeoxycholic acid (UDCA) initiated early enough to achieve full biochemical response, survival becomes comparable to the age- and sex-matched general population.1 The blood signature of PBC, a distinctive cholestatic pattern driven primarily by alkaline phosphatase (ALP), is present years before cirrhosis. It is a signal in every routine metabolic panel, waiting for an algorithm to read it systematically at the population scale.

UDCA reduces PBC mortality hazard by 43%. The ALP signature that identifies who needs it is present years before cirrhosis, on standard blood tests already being drawn. ## The Treatment Effect That Makes Early Detection Urgent

Treatment benefit in PBC is tightly linked to timing and depth of biochemical response. Lammers and colleagues demonstrated in a meta-analysis of 4,845 patients across 15 international cohorts that ALP normalization on UDCA predicted transplant-free survival comparable to the general population, whereas patients who failed to achieve a biochemical response retained a substantially elevated risk.2 Second-line agents, obeticholic acid and bezafibrate, significantly improve response rates in UDCA non-responders. The earlier the diagnosis, the lower the baseline fibrosis stage from which treatment begins, and the more treatment options remain available.

## The Signature in the Blood

PBC produces the most diagnostically distinctive cholestatic pattern of any liver disease. ALP at ≥1.5 × ULN (upper limit of normal) is the hallmark, often the first and only laboratory abnormality for years. Gamma-glutamyl transferase (GGT) is elevated, confirming hepatic origin; total cholesterol rises from impaired bile acid-mediated excretion. Bilirubin is initially normal; its subsequent rise is the single strongest prognostic laboratory marker.2

Albumin and platelet count are initially normal, then decline progressively as fibrosis advances and portal hypertension develops. Aspartate aminotransferase (AST) and alanine transaminase (ALT) are only mildly elevated, a critical distinguishing feature from hepatocellular diseases. Anti-mitochondrial antibody (AMA) is positive in 90 to 95 percent of cases, but it is not part of the standard annual panel. The cholestatic pattern of elevated ALP and GGT with near-normal transaminases is what routine blood work reveals.

## The Machine Learning Case

No published machine learning algorithm specifically targets PBC detection from routine blood tests at the population scale—this is one of the clearest research gaps across all 11 diseases in this series. The absence is striking because the signature is so distinctive: elevated ALP, elevated GGT, elevated cholesterol, normal-to-mildly elevated transaminases in middle-aged women. An algorithm trained on this combination would identify PBC candidates for AMA testing with high specificity.

General liver fibrosis machine learning models using the same liver function test markers—AST/ALT ratios, albumin, bilirubin, platelet count—achieve areas under the curve (AUCs) of 0.82 to 0.91 for detecting advanced fibrosis,3 demonstrating that the target markers are machine-readable. The GLOBE Score and UK-PBC Risk Score use multivariate combinations of bilirubin, ALP, albumin, platelet count, and AST to predict outcomes in PBC with high precision—they are regression models, not machine learning algorithms, but they confirm that the multi-marker pattern is statistically tractable.

## What This Proves

PBC presents one of the most compelling unsolved opportunities in blood-based disease detection. The cholestatic signature is present years before cirrhosis, UDCA reduces mortality by 43 percent, and the blood markers are on every standard metabolic panel. No machine learning algorithm targeting this signature at the population scale has been published. Building one requires only a training dataset of confirmed PBC cases, standard live function test inputs, and the gradient-boosting methodology already proven in cancer and chronic kidney disease detection. The biology is documented, the methodology is established, but the algorithm has not been built.


## Endnotes

1. Lindor KD, Bowlus CL, Boyer J, Levy C, Mayo M. "Primary Biliary Cholangitis: 2018 Practice Guidance from the American Association for the Study of Liver Diseases." *Hepatology*. 2019;69(1):394–419.


AASLD practice guidance documenting PBC prevalence, natural history, and treatment. Establishes that UDCA with adequate biochemical response normalizes survival to age-/sex-matched population rates. Primary reference for disease epidemiology, the ALP/GGT cholestatic signature, and the evidence base for treatment.

2. Lammers WJ, van Buuren HR, Hirschfield GM, et al. "Levels of Alkaline Phosphatase and Bilirubin Are Surrogate End Points of Outcomes of Patients With Primary Biliary Cirrhosis: An International Follow-up Study." *Gastroenterology*. 2014;147(6):1338–1349.e5.


Meta-analysis of 4,845 PBC patients from 15 cohorts validating ALP and bilirubin as surrogate endpoints for transplant-free survival. Patients achieving ALP normalization on UDCA have population-equivalent survival. Establishes the biological and statistical rationale for ALP/bilirubin as the primary machine learning target features in PBC.

3. Siddiqui MS, Yamada G, Vuppalanchi R, et al. "Diagnostic Accuracy of Noninvasive Fibrosis Models to Detect Change in Fibrosis Stage." *Clin Gastroenterol Hepatol*. 2019;17(9):1877–1885.


Validation study of noninvasive fibrosis models using ALP-containing markers for detecting fibrosis progression; AUC 0.82 for advanced fibrosis. Demonstrates that the live function test markers most relevant to PBC are readable by machine learning algorithms, supporting the feasibility of PBC-specific model development.