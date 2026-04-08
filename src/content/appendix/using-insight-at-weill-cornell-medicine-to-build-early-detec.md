---
title: "Using INSIGHT at Weill Cornell Medicine to Build Early Detection Algorithms"
subtitle: "A practical assessment of data availability, scientific workforce, costs, and timeline for developing machine learning algorithms across 25 cancers and diseases."
category: "strategic"
date: "April 2026"
---

*Ratner Early Detection Initiative ( REDI) · March 2026*


## The Target Disease Portfolio

The REDI program targets 25 conditions in total: 13 cancers and 12 non-cancer diseases. The cancers are colorectal, lung, gastric, liver, pancreatic, ovarian, kidney, bladder, esophageal, multiple myeloma, leukemia, lymphoma, and prostate. Two algorithms (for colorectal and lung) are already built and deployed. Two more, for gastric and liver, are in the final validation stages. Nine algorithms remain to be built.


The 12 non-cancer diseases are cardiovascular disease, type 2 diabetes, chronic kidney disease, non-alcoholic fatty liver disease (NAFLD)/liver fibrosis, heart failure, hypothyroidism, familial hypercholesterolemia, hemochromatosis, Wilson disease, primary biliary cholangitis, Addison’s disease, and sepsis. Of these diseases, two (familial hypercholesterolemia and sepsis) have deployed algorithms, and chronic kidney disease received European regulatory approval in October 2025. However, nine algorithms remain at the research stage.


Every condition on this list produces a detectable signature in one or more of six standard panels: complete blood count (CBC), comprehensive metabolic panel (CMP), lipid panel, liver function tests, HbA1c, and thyroid-stimulating hormone (TSH). The signal is not a single abnormal value; rather, it is a gradual shift across multiple markers over months or years, the kind of signal that human eyes reading a single annual report cannot detect, but that machine learning can reliably identify at a population scale.


## Does INSIGHT Have Enough Records?

INSIGHT now holds approximately 23 million de-identified electronic health records (EHRs) spanning eight major academic medical centers: Weill Cornell Medicine, NewYork-Presbyterian, Columbia University Irving Medical Center, Montefiore Health System, Mount Sinai Health System, NYU Langone Health, Houston Methodist, and Stony Brook Medicine. The data include laboratory results, ICD-10 diagnostic codes, medical history, and claims data, the exact combination required for algorithm training: blood test values linked to confirmed outcomes.


The question of whether there are enough records must be answered on a disease-by-disease basis, as rarer conditions require special attention.


### Common Cancers

For common cancers such as colorectal, lung, and prostate, INSIGHT’s 23 million records likely include tens of thousands of confirmed cases with longitudinal blood draw histories. The LungFlag algorithm was trained on 6,505 cases against 189,597 controls. ColonFlag used 606,403 patients in total. INSIGHT can supply those numbers many times over.


### Moderately Rare Cancers

For kidney, bladder, ovarian, pancreatic, and gastric cancers, published case counts of 1,000 to 5,000 confirmed cases are sufficient for initial model training, provided those patients have at least two or three blood draws in the years before diagnosis. INSIGHT’s scale makes this achievable for all these targets.


### Rare Diseases

For the rarest conditions in the portfolio, such as Wilson disease, Addison’s disease, and primary biliary cholangitis, case counts across the 23 million records may be limited. Wilson disease affects approximately 1 in 30,000 people, implying perhaps 750 cases in the entire INSIGHT database. This is at the lower limit of what is usable for gradient-boosted modeling and may require augmentation through external datasets or a federated query across additional PCORnet partner institutions, which INSIGHT can access as part of the national network.


### Non-Cancer Diseases

For cardiovascular disease, type 2 diabetes, chronic kidney disease, and NAFLD, the record counts are more than sufficient. These are among the most prevalent conditions in the United States, and training datasets with hundreds of thousands to millions of records can be built entirely within INSIGHT.


 One critical qualification: raw record counts are not the same as clean, usable training records. A patient who appears in the INSIGHT database but has only one blood draw, whose records span less than two years, or who left the health system before a diagnostic outcome was confirmed cannot be used. The effective usable dataset is typically 40 to 60 percent of the nominal record count after applying longitudinal, outcome, and quality filters. For INSIGHT’s 23 million records, that still leaves a very large and sufficient training pool for the vast majority of targets.


## Data Quality and Cleaning

INSIGHT data is not immediately modeling-ready. The Epic EHR system used across Weill Cornell and NewYork-Presbyterian is more standardized than most, which reduces one major source of inconsistency. However, cleaning remains necessary and labor-intensive.


Unit harmonization is the first task. Different laboratories within the INSIGHT network may report identical analytes in different units. Glucose reported as mg/dL at one site and mmol/L at another is a straightforward conversion, but this must be identified and systematically corrected before any modeling begins.


Reference range normalization follows: different analyzers at various hospitals calibrate slightly differently, and values must be converted to z-scores relative to each institution’s own distributions to neutralize instrument bias. Outlier removal eliminates transcription errors and equipment malfunctions. Record completeness filtering excludes patients with only a single blood draw or no confirmed outcome.


The ARCH (Architecture for Research Computing in Health) infrastructure at Weill Cornell is specifically designed to support this work. ARCH has already built tools for cohort discovery, EHR data extraction, and statistical analysis on Epic data, supporting over 1,200 unique investigators through more than 4,000 consultations. A formal feasibility query submitted to ARCH can return patient counts, generate frequency statistics, and offer data-density estimates for any specific target disease before a single line of modeling code is written. This is the natural first step.


## Machine Learning Methods

The methodology is standardized, validated, and thoroughly documented in published literature. The tools a REDI data science team would use are as follows.


In practice, every algorithm development project runs several of these methods in parallel during the initial training phase and selects the one that best balances predictive performance (area under the curve [AUC]), clinical interpretability, and stability across validation folds. Gradient boosting generally performs best in most published comparisons on blood panel data, but this should be confirmed empirically on each target disease.


## The Scientific Workforce: Who Does This Work?

Weill Cornell and INSIGHT have valuable assets here. The ARCH group employs clinical informaticists, biostatisticians, and data engineers who focus specifically on this kind of EHR data work. Dr. Rainu Kaushal’s team at the Department of Population Health Sciences is experienced in machine learning on EHR data, having co-led the RECOVER long COVID initiative across 40 institutions.


What REDI would need, beyond what ARCH provides, is a dedicated machine learning team for actual algorithm development. The published benchmark is 3 to 5 researchers working for 12 to 18 months per algorithm. The roles are: Clinical Informatics Lead. Understands the biology of the target disease, maps the relevant blood panel features, and interprets model outputs in clinical terms. This person bridges the data scientists and the clinicians. Machine Learning Engineers (two to three). Responsible for data pipeline construction, feature engineering, model training, hyperparameter tuning, and validation. Familiarity with XGBoost, scikit-learn, and survival analysis libraries in Python or R is the baseline requirement. Biostatistician. Responsible for validation study design, AUC confidence interval analysis, and preparation of the statistical sections required for peer-reviewed publication and U.S. Food and Drug Administration (FDA) submission. Regulatory Affairs Specialist. Required for the FDA 510(k) pathway once a model achieves target performance. This role is typically contracted rather than hired full-time.


Weill Cornell’s academic medical center setting is a benefit for recruitment. The concentration of talent in computational biomedicine in New York City, along with a meaningful research mission and access to one of the largest urban EHR repositories in the country, makes this a competitive opportunity for strong candidates.


## Costs

The cost structure for each algorithm includes six components: the data science team, cloud computing, data cleaning and feature engineering, clinical validation, FDA regulatory clearance, and project management.


The lower end pertains to common cancers with abundant training data and a straightforward single-panel signal: colorectal, lung, prostate, and leukemia. The upper end applies to cancers requiring cross-panel feature engineering, larger validation studies, or external dataset augmentation: pancreatic and ovarian cancers, as well as the rarest non-cancer conditions.


For the full portfolio of 21 remaining algorithms (9 cancer, 12 non-cancer, net of those already built or in late validation), the aggregate cost ranges from approximately $35 million to $96 million. Using shared infrastructure across algorithms, a common data pipeline, a standardized validation framework, and a single regulatory affairs team working concurrently significantly reduces this cost. A realistic program estimate, assuming serial production with shared tooling and INSIGHT data contributed at no per-record cost, is $40 million to $65 million total.


For context: the average cost to develop a single new cancer drug is $2.6 billion. This entire program, which covers 25 conditions and has the potential to save hundreds of thousands of lives per year, can be completed for less than 3 percent of that figure.


## Timeline

This is a multi-year program. Timelines depend heavily on how many algorithms are built in parallel versus serially, and on how quickly Institutional Review Board (IRB) approvals and data use agreements are executed.


Individual algorithms for common diseases with abundant INSIGHT records could be completed and submitted for regulatory clearance within 24 months of program launch. The full program, from first IRB submission to last FDA clearance, realistically spans four to five years for the complete portfolio.


## The Strategic Advantage

The combination of INSIGHT’s 23 million records, Weill Cornell’s ARCH infrastructure, Dr. Kaushal’s machine learning expertise, and REDI’s disease-by-disease scientific roadmap places this program in a remarkably strong position. Most institutions attempting this work face a fundamental bottleneck at the data stage: assembling millions of labeled, longitudinal records across dozens of disease categories takes years and enormous independent resources. INSIGHT has already done that work.


The data are there; the infrastructure for querying the data is established; the scientific workforce to execute the analysis is either in place or readily recruitable.


What is needed is a formal institutional partnership between REDI and the INSIGHT leadership, a dedicated data science team for algorithm development, and the funding to sustain the program through to FDA clearance and clinical deployment. All other components are already in place.


## Practical Next Steps

Request a formal feasibility consultation with the ARCH group at Weill Cornell Information Technology & Services to obtain patient counts, blood draw density, and data quality estimates for the highest-priority target diseases.

Initiate a conversation with Dr. Rainu Kaushal’s team at the Department of Population Health Sciences regarding a formal research partnership under the INSIGHT Clinical Research Network.

Draft a data use agreement framework and IRB protocol for the initial algorithm cohort (recommended targets: kidney cancer, bladder cancer, pancreatic cancer, type 2 diabetes, chronic kidney disease).

Begin recruitment or designation of the core data science team: clinical informatics lead, two to three machine learning engineers, and one biostatistician.

Identify a regulatory affairs specialist or firm experienced with the FDA 510(k) Software as a Medical Device (SaMD) pathway.

