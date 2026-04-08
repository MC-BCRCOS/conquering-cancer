---
title: "Introduction"
subtitle: ""
category: "regulatory"
date: "April 2026"
---

Building Cancer and Disease Detection Algorithms from Routine Blood Tests A Technical and Economic Roadmap

Ratner Early Detection Initiative (REDI) · March 2026


The central claim of the REDI research program is that machine learning algorithms can detect cancer and chronic disease from routine blood work, months to years before conventional diagnosis. Two such algorithms are already deployed in clinical practice. Nine additional cancer algorithms and more than a dozen non-cancer disease algorithms remain to be built. This paper describes exactly what that process requires: the data, the methodology, the technical steps, and the costs.

Step 1: Define the Target and the Training Signal

Before any data is collected or any model is trained, the team must specify two things precisely: the disease being targeted and the blood panels most likely to carry a signal.

For each target cancer or disease, a clinical informatics team reviews published literature to establish which standard blood panel values are known to change in the years preceding diagnosis. For colorectal cancer, that signal lies primarily in the complete blood count (CBC): hemoglobin falls, mean corpuscular volume (MCV) shrinks, and red blood cell distribution width (RDW) rises as the tumor bleeds slowly into the gastrointestinal tract.[<sup>1</sup>](#ref-1)For lung cancer, the signal is an inflammatory CBC signature: rising neutrophils, falling lymphocytes, and rising platelets.[<sup>2</sup>](#ref-2)For pancreatic cancer, bile duct compression raises alkaline phosphatase and bilirubin in the comprehensive metabolic panel (CMP) 6 to 18 months before clinical diagnosis.[<sup>3</sup>](#ref-3)
This biological mapping step is not modeling; it is a literature review. It determines which of the six standard panels (CBC, CMP, liver function tests, kidney function tests, thyroid-stimulating hormone (TSH), hemoglobin A1C) to prioritize for a given target, and it defines the feature space the algorithm will learn from.

Step 2: Assemble and Qualify the Dataset

The training dataset must meet five criteria before any modeling begins.

## Sufficient Sample Size

The ColonFlag algorithm was trained on 606,403 patients.[<sup>1</sup>](#ref-1)The LungFlag algorithm used 6,505 cancer cases against 189,597 controls.[<sup>2</sup>](#ref-2)For rarer cancers, meaningful training requires at a minimum 1,000 confirmed cases matched against 10,000 to 50,000 controls; the larger the case count, the more stable the model. For common diseases like type 2 diabetes and cardiovascular disease, datasets in the hundreds of thousands exist at most major health systems.

## Longitudinal Blood Records

A single blood draw produces a snapshot. The detection window of 6 to 24 months requires multiple draws per patient over time. The dataset must include at least two, and ideally three or more, blood panels per patient spanning a multi-year pre-diagnosis window. Patients with only one draw are excluded from training.

## Confirmed Diagnostic Outcomes

Every patient in the training set must have a known outcome: diagnosed with the target disease, diagnosed with something else, or confirmed healthy. Outcomes are drawn from ICD-10 diagnostic codes in the electronic medical record (EMR), pathology reports for cancers, or claims data. Ambiguous records (patients who left the health system before outcome confirmation) are excluded.

## Sufficient Follow-Up Time

For early detection, the algorithm must be trained on blood work drawn before diagnosis, not at the time of diagnosis. Records are time-shifted so the label (cancer: yes or no) is linked only to blood draws collected at least six months prior to diagnosis. Blood drawn within six months of a confirmed diagnosis is excluded from the training set to prevent the model from learning the presentation-stage signal rather than the pre-clinical signal.

## Demographic Representation

A model trained only on patients from one demographic group will underperform in others. The dataset must include representation across age, sex, and, where possible, race and ethnicity to ensure the algorithm generalizes across populations. External validation in an independent, demographically distinct population (as ColonFlag was validated in the United Kingdom after initial development in Israel) is a prerequisite before deployment.[<sup>1</sup>](#ref-1)
Step 3: Data Cleaning

Raw EMR data is not modeling-ready. Cleaning is the most labor-intensive step and consumes a substantial portion of the data science team's time.

## Unit Harmonization

The same blood value is measured in different units at different institutions (mg/dL versus mmol/L for glucose; g/dL versus g/L for hemoglobin). All values must be converted to a single standard unit before training.

## Reference Range Normalization

Laboratory instruments differ. A CBC analyzer at one hospital may report slightly different absolute values than one at another for the same blood sample. Values are converted to z-scores relative to each institution's reference-range distributions, thereby neutralizing instrument bias.

## Outlier Removal

Physiologically implausible values (a hemoglobin of 0.3 g/dL or a glucose of 4,000 mg/dL) are transcription errors or instrument malfunctions. Standard practice is to remove values more than five standard deviations from the population mean and manually review values between three and five standard deviations.

## Missing Data Handling

Not every patient has every panel drawn at every visit. The algorithm must handle missingness without discarding records that have partial data. Standard approaches include median imputation for randomly missing values and indicator variables that flag whether a value was not drawn, which itself carries clinical information: a physician who did not order a TSH may have had a reason.

## De-identification

Before any data leaves a partner institution, all direct identifiers (name, date of birth, address, Social Security number, and medical record number) must be removed in accordance with HIPAA Safe Harbor or Expert Determination standards. A unique research identifier replaces the medical record number, allowing longitudinal linkage within the dataset without identifying the patient.

Step 4: Feature Engineering

Raw blood values are the starting point. The modeling team constructs additional features that capture the signals the literature review identified.

## Rate-of-Change Features

A hemoglobin of 12.8 g/dL may be normal in isolation. A hemoglobin that has declined from 14.1 to 13.4 to 12.8 g/dL over 18 months in an otherwise healthy 50-year-old is a different signal. For every value with at least two sequential measurements, a slope feature is computed.

## Cross-Panel Ratios

The neutrophil-to-lymphocyte ratio (NLR) outperforms either value alone for detecting inflammatory cancers. The aspartate transaminase (AST) to alanine transaminase (ALT) ratio distinguishes liver disease patterns. The literature on pre-diagnostic blood chemistry identifies dozens of such ratios; each becomes an engineered feature.

## Age and Sex Interaction Terms

Blood chemistry reference ranges differ by age and sex. Features are constructed as deviations from age- and sex-specific expected values, so the model learns to interpret a given blood value in its demographic context rather than against a universal reference.

Step 5: Model Training and Validation

The REDI methodology uses gradient-boosted decision trees, the same class of algorithm used in both ColonFlag and LungFlag.[<sup>12</sup>](#ref-12)Gradient boosting combines hundreds of weak predictive signals into a single strong prediction, which matches the structure of the problem: no single blood value predicts cancer, but the ensemble of subtle shifts does.

Training follows a standard pipeline. The dataset is split 70/20/10: 70 percent for training, 20 percent for validation (used to tune hyperparameters and prevent overfitting), and 10 percent held out entirely for final performance evaluation. The model never sees the held-out test set until training is complete.

Performance is evaluated using the area under the curve (AUC). An AUC of 0.50 is a coin flip; 1.0 is a perfect prediction. The two deployed algorithms achieved AUCs of 0.82 (colorectal) and 0.856 (lung).[<sup>12</sup>](#ref-12)An AUC of 0.75 or above at a clinically acceptable false-positive rate is the working threshold for proceeding to external validation.

External validation replicates the entire evaluation on an independent patient population at a different institution. A model that performs well only on its training data is not a medical product; it is an overfit artifact. This step cannot be skipped.

Step 6: Clinical Validation and Regulatory Clearance

Before deployment, each algorithm must demonstrate performance in a prospective or retrospective real-world clinical setting. ColonFlag was deployed at Geisinger Health System, where it achieved an eightfold improvement in cancer detection among patients who completed colonoscopy.[<sup>4</sup>](#ref-4)Regulatory clearance in the United States follows the US Food and Drug Administration (FDA) 510(k) pathway for software as a medical device (SaMD), analyzing existing laboratory results without producing a standalone diagnosis. This pathway requires a technical file documenting training data, validation performance, intended use, risk analysis, and clinical evidence. Preparation, submission, and FDA review typically require 12 to 18 months.

Estimated Costs (Assuming Dataset Access at No Cost)


For the full program of nine remaining cancer algorithms, the total cost ranges from approximately $15M to $41M. Including non-cancer disease algorithms and shared infrastructure, the $30M to $50M total program estimate in the REDI papers is accurate and conservative. For comparison, the average cost to develop a single new cancer drug is $2.6 billion, including the capital cost of the many candidates that fail.[<sup>5</sup>](#ref-5)The entire algorithmic detection program for all 13 cancers could be completed for less than 2 percent of that figure, using data that already exists, on diseases whose blood signatures are already documented in peer-reviewed literature.

What This Is Not

This program does not require new blood tests, new clinical workflows, or a change in patient behavior. The six panels it analyzes are already drawn at more than 200 million annual physicals in the United States. The data are stored in EMRs at institutions that have already agreed in principle to collaborate on research. The bottleneck is not science; it is the institutional will and the $30 to $50 million required to build the software that reads what the blood is already saying.


Endnotes

<span id="ref-1"></span>

1.Kinar Y, Kalkstein N, Akiva P, et al. "Development and Validation of a Predictive Model for Detection of Colorectal Cancer in Primary Care by Analysis of Complete Blood Counts: A Binational Retrospective Study." *JAMIA*. 2016;23(5):879–890.


*ColonFlag development and validation across 606,403 Israeli and 30,674 UK patients; AUC 0.82 for colorectal cancer prediction from CBC parameters with odds ratios of 26 (Israel) and 40 (UK) at 0.5% false- positive rate and 6- to 24-month detection lead time.*

<span id="ref-2"></span>

2.Gould MK, Huang BZ, Tammemagi MC, Kinar Y, Shiff R. "Machine Learning for Early Lung Cancer Identification Using Routine Clinical and Laboratory Data." *Am J Respir Crit Care Med*. 2021;204(4):445–453.


*LungFlag validation across 6,505 non-small cell lung cancer cases at Kaiser Permanente; AUC 0.856 with 9- to 12-month detection lead time, outperforming USPSTF criteria and the PLCOm2012 quantitative risk model.*

<span id="ref-3"></span>

3.Sharma C, Eltawil KM, Renfrew PD, Walsh MJ, Molinari M. "Advances in Diagnosis, Treatment and Palliation of Pancreatic Carcinoma: 1990–2010." *World JGastroenterol*. 2011;17(7):867–897.


*Documents the pre-diagnostic blood signature of pancreatic cancer: alkaline phosphatase, GGT, and bilirubin rising from bile duct compression, with glucose rising from pancreatic cell damage, 6 –18 months before clinical diagnosis.*

<span id="ref-4"></span>

4.Hornbrook MC, Goshen R, Choman E, et al. "Early Colorectal Cancer Detected by Machine Learning Model Using Gender, Age, and Complete Blood Count Data." *Dig Dis Sci*. 2017;62(10):2719–2727. [https://pubmed.ncbi.nlm.nih.gov/28836087/](https://pubmed.ncbi.nlm.nih.gov/28836087/)

*Geisinger Health System deployment of ColonFlag; among flagged patients completing colonoscopy, 8% had confirmed cancer versus 1% in standard screening, an eightfold improvement with no new tests or equipment required.*

<span id="ref-5"></span>

5.DiMasi JA, Grabowski HG, Hansen RW. "Innovation in the Pharmaceutical Industry: New Estimates of R&D Costs." *J Health Econ*. 2016;47:20–33.


*Published analysis of pharmaceutical R&D costs establishing the $2.6 billion average cost per approved cancer drug, including $1.4 billion in direct costs and $1.2 billion in opportunity cost of capital over 12–15 -year development timelines.*