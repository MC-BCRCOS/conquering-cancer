---
title: "Executive Summary"
subtitle: ""
category: "strategic"
date: "April 2026"
---

A SALIVA TEST THAT CATCHES CANCER BEFORE IT STARTS 
*How InnoTech Precision Medicine's Multi-Omics Platform Could Transform Early Detection of Head and Neck Cancer*

A White Paper Prepared for the Ratner Early Detection Initiative (REDI)


Head and neck cancer kills more than 11,000 Americans every year. Most of those deaths share the same cause: the disease is caught too late. By the time a patient notices a sore throat that won't go away or a lump in the neck, the cancer has usually spread to regional lymph nodes, and the five-year survival rate falls below 40 percent. Detect the same cancer at Stage I, and roughly 9 in 10 patients survive.

InnoTech Precision Medicine, a Boston-area biotechnology startup, has developed a point-of-care diagnostic device that may fundamentally change that outcome. A patient spits into a collection tube at a dentist's or doctor's office, and within thirty minutes, an AI-driven system returns a result. The device searches saliva simultaneously for three categories of biological evidence: the genetic fingerprint of the human papillomavirus (HPV) that causes most of these cancers; the downstream messenger ribonucleic acid (mRNA) signals that indicate whether the virus has already begun hijacking cell growth; and the cancer-promoting proteins that appear as malignant transformation advances. Fusing those three independent data streams is what the company calls multi-omics.

In the company's initial blinded validation study of 81 samples, the platform achieved 98 percent overall accuracy, a 96 percent positive predictive value (PPV), and a 100 percent negative predictive value (NPV).[<sup>3</sup>](#ref-3)No test is perfect, and that sample size remains small; a large prospective clinical trial has not yet been completed. However, the early numbers are striking, and the scientific rationale behind the approach is robust.

This white paper explains how the technology works in plain language, what those performance figures mean in practical terms, what the platform currently cannot do, and how a research partnership with an academic medical center such as Weill Cornell Medicine could generate the clinical evidence needed to move this from laboratory innovation to standard-of-care screening.


<span id="ref-1"></span>

1.The Problem: A Cancer That Hides in Plain Sight

Head and neck cancers encompass malignancies of the mouth, tongue, tonsils, oropharynx (back of the throat), larynx (voice box), and salivary glands. Together, they account for roughly 54,540 new diagnoses and 11,580 deaths in the United States each year.[<sup>1</sup>](#ref-1)Most arise in the oropharynx, the region that includes the base of the tongue and the tonsils.

For decades, heavy tobacco and alcohol consumption contributed to the majority of these diagnoses; that picture has shifted significantly. Today, over 70 percent of oropharyngeal cancers are attributable to HPV, specifically HPV-16.2 The Centers for Disease Control and Prevention (CDC) estimates that roughly 80 percent of sexually active people will contract some strain of HPV during their lifetime. The immune system usually clears most infections within two years. However, in a small fraction of people, the virus integrates its genetic material into the host cell's deoxyribonucleic acid (DNA). That integration can activate cancer-promoting oncogenes and silence tumor suppressor genes, triggering a cascade of malignant changes over months to years.

The insidious feature of HPV-driven oropharyngeal cancer is that it rarely hurts in its early stages. Tumors grow silently in the back of the throat until they are large enough to cause a persistent sore throat, a neck lump, or difficulty swallowing. By that point, roughly 60 percent of patients already have regionally advanced disease. Treatment for late-stage head and neck cancer is aggressive: surgery, radiation, and chemotherapy, often combined, leaving many survivors with lasting difficulties swallowing, speaking, or breathing. Even with that treatment, five-year survival for Stage IV disease is under 40 percent.

Approximately 16.6 million Americans are considered high-risk for head and neck cancer based on HPV exposure history, tobacco use, or prior precancerous lesions.[<sup>3</sup>](#ref-3)None of them currently has access to a reliable, non-invasive screening test to determine whether early cellular transformation is underway.


<span id="ref-2"></span>

2.The Science: Why Saliva, Why Multi-Omics

## 2.1 Saliva as a Biological Mirror

The mouth and throat are bathed continuously in saliva. As cells in the oropharynx shed DNA, release mRNA transcripts, and secrete proteins into the surrounding fluid, those molecular signatures accumulate in saliva. Oncologists have long recognized that saliva carries cancer biomarkers, but traditional laboratory techniques could detect only one marker at a time. A single marker is rarely specific enough for clinical use. For example, HPV DNA alone is present in the saliva of many people who are simply carrying the virus without any cancer developing. Testing for HPV DNA in isolation generates false-positive rates high enough to make routine screening impractical and potentially harmful due to unnecessary follow-up procedures.

The conceptual breakthrough that InnoTech's platform offers is the ability to simultaneously measure three independent classes of molecular evidence. This multi-omics approach is increasingly recognized in the cancer research literature as the appropriate strategy for early detection because malignant transformation is not a single molecular event but a sequential cascade of events spanning genomics, transcriptomics, and proteomics.[<sup>4</sup>](#ref-4)
## 2.2 The Three Streams of Evidence

### Stream 1: Genomics—HPV Gene Integration

The first layer of the test examines the DNA in the saliva sample for the presence and integration status of HPV-16. There is a critical distinction here that separates InnoTech's approach from simpler HPV tests: the platform does not merely detect the presence of HPV. It looks for evidence that the virus has integrated its genetic material into the host genome, which is the event that activates cancer progression markers. Episomal (free-floating) HPV in cells that will clear the infection naturally has a very different molecular signature from integrated HPV in cells that have begun transforming toward malignancy. Capturing the integration status substantially reduces false positives from benign HPV carriage.

This genomic layer also has the potential to detect somatic mutations in the tumor suppressor and oncogene landscapes of the sampled cells, though the company's current primary focus is on HPV-specific genomic markers. Purely mutation-driven head and neck cancers (those not caused by HPV, associated primarily with heavy tobacco and alcohol use) represent a smaller but real fraction of the disease burden; expanding the genomic panel to capture those cases is a logical extension of the platform.

### Stream 2: Transcriptomics—mRNA Expression Profiling

When HPV integrates into the host genome and begins driving cancer, the cell's gene-expression program changes. Specific mRNA transcripts that should be switched off become active, and others that should be running are silenced. The test's second layer measures this mRNA signature in the saliva sample. mRNA expression profiling adds a temporal dimension that DNA testing cannot provide: it indicates not just the presence of an oncogenic virus but whether it is actively altering the cell's behavior. This is the difference between a smoldering fuse and an active explosion.

The scientific literature on multi-omics approaches to cancer biomarker discovery supports the use of transcriptomic data as a powerful complement to genomic testing.[<sup>4</sup>](#ref-4)In ovarian cancer research, for example, combining mRNA expression profiles with genomic and proteomic data has identified biomarker signatures that outperform any single-omics approach for early diagnosis.

### Stream 3: Proteomics—Cancer Progression Proteins

The third layer detects specific proteins in the saliva sample that are elevated as cancer develops and progresses. These include proteins associated with cellular proliferation, angiogenesis (the formation of new blood vessels to feed the tumor), and immune evasion. Measuring proteins provides a functional readout: by the time a cell secretes these proteins into the surrounding fluid, cancer biology is unambiguously underway.

The combination of these three data streams is what makes the platform's AI algorithm so powerful. Each layer independently has limitations in sensitivity or specificity. Integrating all three, and training a machine-learning model on the combined signal, substantially reduces both false positives and false negatives.

## 2.3 The AI Decision Layer

The device includes an on-board AI decision algorithm that processes the combined genomic, transcriptomic, and proteomic data in real time and returns a binary result: positive or negative, with a confidence score. The algorithm was trained on blinded randomized samples spanning positive and negative cases across HPV infection stages and cancer stages. The ROC (receiver operating characteristic) curve reported for the combined dataset shows near-ideal discriminative performance, hugging the upper-left corner of the plot, corresponding to high sensitivity at low false-positive rates.[<sup>3</sup>](#ref-3)
The AI layer also means the system can be continuously improved as more clinical data accumulate, a feature that distinguishes this platform from traditional laboratory assays that are fixed at the time of regulatory clearance.


<span id="ref-3"></span>

3.Performance: What the Numbers Mean

## 3.1 Reading the Accuracy Statistics

The company has published the following performance data from a blinded, randomized validation study of 81 simulated specimens:3


What do these numbers mean for a patient or a clinician?

 Positive Predictive Value (96 percent): If the test returns a positive result, there is a 96 percent chance that cancer or precancerous disease is genuinely present. Only 4 percent of positive results are false positives, meaning the test indicates cancer when there is none. This is critically important because false positives in cancer screening generate anxiety, unnecessary biopsies, and sometimes unnecessary treatment. A PPV of 96 percent is exceptionally strong for a non-invasive screening test.

 Negative Predictive Value (100 percent): If the test returns a negative result, the current data show zero false negatives in the 81-sample validation set. A false negative is a missed cancer, which is often more dangerous than a false positive because it can provide false reassurance. The 100 percent NPV, if it holds in larger trials, would mean that a negative result can be trusted with high confidence.

 Overall Accuracy (98 percent): The test correctly classified 98 percent of all specimens. One in 50 specimens would be miscategorized.

## 3.2 The Limits of a Small Sample and the Path to Clinical Confidence

Science demands honesty about what these numbers do and do not yet prove. The 81-specimen validation was performed on simulated (laboratory-prepared) specimens, not on saliva collected from real patients with known clinical outcomes confirmed by biopsy and follow-up. This is a standard early-stage validation methodology in diagnostic development, but it means the numbers cannot yet be taken as definitive performance in clinical practice.

The key unknowns that a clinical trial at a site like Weill Cornell Medicine would address include:

Performance across the full spectrum of clinical presentation, including very early Stage I lesions, pre-malignant dysplasia, and HPV integration without clear malignancy

Sensitivity in patients with low tumor burden, where shedding of markers into saliva may be minimal

Specificity in patients with concurrent viral infections, inflammatory oral disease, or other conditions that might elevate one or more of the three marker streams independently

Performance across demographic subgroups, including various age ranges, smoking histories, and immunocompromised patients

Longitudinal stability: whether repeated testing of the same high-risk patient over time can detect the transition from HPV carriage to early transformation

No validated large-cohort prospective data have been published to date. The company's roadmap calls for submission to the US Food and Drug Administration (FDA) following completion of multi-center clinical studies, with a targeted commercial launch of 2027.

## 3.3 Sensitivity: What the Test Misses and What to Do About It

Sensitivity, the test's ability to detect disease when it is present, is the flip side of the NPV. The 100 percent NPV in the 81-sample set implies 100 percent sensitivity within that study. In clinical reality, no early-detection cancer test achieves 100 percent sensitivity across all patient populations and all disease stages.

The most likely sources of false negatives in a broader clinical population are:

Stage 0 or pre-Stage I lesions with insufficient cellular shedding into saliva to reach the detection threshold for any of the three marker streams

Purely mutation-driven (non-HPV) head and neck cancers in which the HPV genomic and transcriptomic layers contribute nothing, and the proteomic layer alone must carry the diagnostic signal

Anatomically posterior lesions (base of tongue, hypopharynx) may shed fewer cells into the oral saliva pool than anterior lesions

The appropriate response to these known limitations is not to abandon non-invasive screening but to use it as a triage layer within a risk-stratified protocol. A negative InnoTech test result in a low-risk patient provides strong reassurance. A negative result in a high-risk patient—someone with a persistent sore throat, significant HPV exposure history, or a prior precancerous diagnosis—should trigger clinical follow-up, including endoscopic examination rather than routine reassurance alone.

## 3.4 Distinguishing Viral Carriage from Cancer

One of the most important clinical questions for any HPV-based test is whether it can reliably distinguish patients who are merely carrying HPV (a very common and usually self-resolving condition) from those whose cells are undergoing malignant transformation. This is precisely where the multi-omics architecture provides its key advantage over single-layer HPV DNA tests:

HPV DNA present + HPV gene integration detected + mRNA activation markers elevated + cancer progression proteins present: High probability of malignant or pre-malignant transformation. Clinical referral warranted.

HPV DNA present + no integration detected + mRNA markers absent + proteins normal: High probability of benign viral carriage likely to resolve spontaneously. Watchful waiting with interval repeat testing.

HPV DNA absent + all markers negative: Very low probability of HPV-driven cancer. Standard clinical follow-up interval.

This multi-layer architecture means the test is designed not to generate a false positive simply because a patient is HPV-positive. The cascading biological logic of HPV carriage, integration, transcriptional activation, and protein expression must be coherent across all three streams before the AI algorithm returns a positive result. That coherence requirement is the primary mechanism by which the platform achieves its 96 percent PPV.


<span id="ref-4"></span>

4.Risk Stratification: Who Should Be Tested

Not everyone needs this test. Intelligent deployment of any cancer screening tool requires a framework for identifying who benefits most. For the InnoTech platform, a clinically rational risk stratification protocol would follow a tiered structure:


Risk stratification of this kind is consistent with the approach recommended for other HPV-related malignancies. For cervical cancer, tiered screening intensity based on HPV testing and cytology results is now the standard of care. An analogous framework for oropharyngeal cancer is scientifically sound and may help maximize the program’s cost-effectiveness while keeping false-positive rates manageable.

For a partnership with Weill Cornell Medicine, a pilot program might begin with the high-risk tier, recruiting patients from the otolaryngology and head-and-neck surgery practices who are already under surveillance for precancerous disease. These patients have the highest prevalence of positive findings, which means the pilot would generate the most informative performance data in the shortest time with the smallest sample size.


<span id="ref-5"></span>

5.Current Stage of Development

## 5.1 Where InnoTech Stands Today

InnoTech Precision Medicine is a pre-commercial stage company that has completed the following milestones as of late 2024:

Issued a United States patent for systems, apparatus, and methods for the detection of pathogens (January 2023)

Pending patent applications filed in Canada, China, the European Union, Japan, and Taiwan

Non-dilutive funding secured from RADx-rad, National Institutes of Health (NIH) SEED, NIH National Institute of Dental and Craniofacial Research, the CDC, and the Massachusetts Life Sciences Center, totaling approximately $2 million

Pre- investigational device exemption (IDE) engagement with the FDA initiated

Multi-site clinical partnerships established with Beth Israel Deaconess Medical Center, Tufts School of Medicine, Harvard Medical School Teaching Hospital, Atrium Health Wake Forest Baptist, Miami Cancer Institute, and Memorial Sloan Kettering Cancer Alliance

Validation study of 81 simulated blinded specimens completed with 98 percent accuracy

The company is currently seeking $3 million to fund pivotal clinical studies and finalize the design lock of the integrated system. Total capital needed to reach commercial launch is estimated at $19 million.

The planned 2027 commercial launch targets oral surgeons and ENT (Ear, Nose, and Throat) specialists as the initial customer base, with subsequent expansion to general dentists and primary care physicians.

## 5.2 What Remains to Be Established

Clinical readiness for use in a formal early detection program requires the following additional validation steps, which a research partnership could help facilitate:

Multi-center prospective cohort study with real patient saliva samples, biopsy-confirmed outcomes, and minimum follow-up of two years

Analytical sensitivity testing to identify the lowest tumor burden (number of dysplastic cells) detectable above background noise

Head-to-head comparison with existing HPV testing methods to measure the incremental diagnostic value of the multi-omics approach versus DNA-only testing

Sub-group analyses by age, sex, smoking status, immunocompromised status, and anatomic subsite

Longitudinal testing of high-risk patients to evaluate the test's ability to detect transformation over time

Health economic modeling of cost per quality-adjusted life year (QALY) gained under different deployment scenarios


<span id="ref-6"></span>

6.Multi-Omics in Context: The Supporting Science

The multi-omics approach that InnoTech employs is not unique to head and neck cancer. It reflects a broader revolution in molecular diagnostics that has been demonstrated across multiple cancer types. The scientific literature provides strong validation for the core principles underlying this platform.

In rare disease diagnosis, a landmark 2023 study published in *Nature Medicine* demonstrated the power of integrating genomic, transcriptomic, and proteomic data streams. The Australian Acute Care Genomics program used whole-genome sequencing combined with RNA sequencing and functional proteomics to diagnose critically ill children with suspected genetic conditions. The average time to diagnosis was 2.9 days, and multi-omics integration increased the overall diagnostic yield from 47 percent with standard genomic analysis alone to 54 percent.[<sup>5</sup>](#ref-5)The principle—that combining multiple omics layers captures disease biology that any single layer misses—is directly applicable to cancer diagnostics.

In ovarian cancer, arguably the gynecologic malignancy most in need of better early detection, a comprehensive 2022 review in *eBioMedicine* found that multi-omics approaches combining genomics, transcriptomics, proteomics, and metabolomics substantially outperform single-modality biomarker strategies for early diagnosis.[<sup>4</sup>](#ref-4)The review noted that the sensitivity of circulating tumor DNA detection in ovarian cancer improves from 43 to 63 percent when mutation analysis is combined with aneuploidy profiling—a direct parallel to the philosophy of combining HPV genomics with mRNA and protein markers in the InnoTech platform.

For the head and neck cancer application specifically, salivary diagnostics research has demonstrated that individual biomarker classes, whether HPV DNA, mRNA, or protein, each have significant limitations when used alone. The scientific case for integrating all three is strong.


<span id="ref-7"></span>

7.A Path Forward with Weill Cornell Medicine

## 7.1 Why Academic Medical Center Partnership Matters

The gap between a promising early-stage diagnostic and a clinically validated tool that changes patient outcomes is bridged by rigorous, peer-reviewed clinical research. An academic medical center with strong programs in head and neck oncology, otolaryngology, and translational research, such as Weill Cornell Medicine, offers exactly the institutional infrastructure needed to close that gap.

A partnership with Weill Cornell would provide:

Access to a high-risk patient population already under clinical surveillance for head and neck pathology

Biopsy and pathology infrastructure for confirming test outcomes against a gold-standard reference

Biostatistical expertise to design the trial and analyze results in a manner suitable for regulatory submission and peer-reviewed publication

Credibility with the FDA, payers, and the medical community that accelerates adoption after approval

## 7.2 Proposed Pilot Structure

An initial pilot study of approximately 200 to 300 patients could be structured as follows:

Population: High-risk patients from Weill Cornell's head and neck surgery and otolaryngology clinics, including those with known HPV-positive precancerous lesions and those presenting with suspicious symptoms

Protocol: Single saliva collection at enrollment; AI-platform result returned within 30 minutes; clinical follow-up, including endoscopy and biopsy, as clinically indicated, regardless of test result

Endpoints: Sensitivity and specificity versus biopsy-confirmed diagnosis; time from positive test result to treatment initiation compared with historical controls; patient acceptability of the non-invasive collection method

Timeline: 18 to 24 months from ethics approval to primary data analysis

This pilot would generate the kind of prospective clinical data that transforms an investor deck into a peer-reviewed publication, accelerates FDA De Novo authorization, and positions REDI as a co-developer of a new standard of care in head and neck cancer screening.


<span id="ref-8"></span>

8.Conclusion

Early detection is the most powerful lever available for reducing cancer mortality. For head and neck cancer—a disease that kills quietly, strikes a growing population of otherwise healthy adults, and is almost always curable when caught early—a non-invasive, point-of-care screening test is precisely the kind of intervention the Ratner Early Detection Initiative aims to advance.

InnoTech Precision Medicine's multi-omics saliva platform has yet to be validated in a large clinical trial; this is a clear-eyed assessment, not a dismissal. The early performance data are compelling. The scientific foundation—simultaneous detection of HPV gene integration, mRNA activation, and cancer-progression proteins, fused by an AI decision algorithm—is sophisticated and addresses the core limitation of every previous single-marker approach. The regulatory pathway is mapped. The clinical partnerships are established. The remaining step is the pivotal clinical study that will either confirm this technology's place in the standard of care or clarify where it falls short.

That is exactly the kind of work that a REDI partnership with Weill Cornell Medicine is positioned to do.


Endnotes

<span id="ref-1"></span>

1.Siegel RL, Miller KD, Wagle NS, Jemal A. "Cancer Statistics, 2023." *CA Cancer J Clin*. 2023;73(1):17–48. [https://doi.org/10.3322/caac.21763](https://doi.org/10.3322/caac.21763)

*Annual American Cancer Society statistics report providing incidence and mortality data for all major cancer types ,* including head and neck cancers. Source for the estimate of 54,540 new cases and 11, 58**0 deaths from oral cavity and pharynx cancers* annually in the United States.*


<span id="ref-2"></span>

2.Chaturvedi AK, Engels EA, Pfeiffer RM, et al. "Human papillomavirus and rising oropharyngeal cancer incidence in the United States." *J Clin Oncol*. 2011;29(32):4294–4301. [https://doi.org/10.1200/JCO.2011.36.4596](https://doi.org/10.1200/JCO.2011.36.4596)

*Landmark epidemiological study establishing that the majority of oropharyngeal squamous cell carcinomas in the United States are attributable to HPV-16, with the proportion exceeding 70% in contemporary cohorts. Foundation for the HPV-centric focus of the InnoTech platform.*


<span id="ref-3"></span>

3.Khosravi-Far R et al. InnoTech Precision Medicine Investor Deck. Boston: InnoTech Precision Medicine; September 2024.


*Company presentation disclosing the 81-sample blinded validation results , including 98% overall accuracy, 96% positive predictive value, and 100% negative predictive value, as well as the market size estimates and regulatory pathway information cited throughout this white paper.*


<span id="ref-4"></span>

4.Xiao Y, Bi M, Guo H, Li M. "Multi-omics approaches for biomarker discovery in early ovarian cancer diagnosis." *eBioMedicine*. 2022;79:104001.


*Comprehensive peer-reviewed review demonstrating that integration of genomic, transcriptomic, proteomic, and metabolomic data substantially outperforms single-omics approaches for early cancer diagnosis. Directly validates the multi-omics architecture underlying the InnoTech platform and includes evidence that combining ctDNA mutation analysis with aneuploidy profiling raises sensitivity from 43% to 63% , a conceptual parallel to the three-stream InnoTech approach.*


<span id="ref-5"></span>

5.Lunke S, Bouffler SE, Patel CV, et al. "Integrated multi-omics for rapid rare disease diagnosis on a national scale." *Nature Medicine*. 2023;29:1681–1691.


*Prospective national cohort study (N=290) from the Australian Acute Care Genomics program demonstrating that integration of whole-genome sequencing, RNA sequencing, and functional proteomics increases diagnostic yield from 47% to 54% compared with standard genomic analysis alone. Provides rigorous peer-reviewed evidence that multi-omics data integration captures clinically actionable findings that single-omics approaches miss ,** supporting the scientific rationale for InnoTech's** three-stream platform.*


<span id="ref-6"></span>

6.Ang KK, Harris J, Wheeler R, et al. "Human papillomavirus and survival of patients with oropharyngeal cancer." *N Engl J Med*. 2010;363(1):24–35.


*Pivotal RTOG 0129 trial analysis establishing that HPV-positive oropharyngeal cancer has a substantially better prognosis than HPV-negative disease, with three-year overall survival rates of 82.4% versus 57.1%. Supports the clinical importance of HPV-specific detection and stage-shift strategies through early screening.*


<span id="ref-7"></span>

7.8. National Cancer Institute. "Head and Neck Cancers." NCI Fact Sheet. Bethesda: National Institutes of Health; updated 2022.


*Authoritative NCI summary of head and neck cancer epidemiology, risk factors, staging, and survival statistics. Source for stage-specific five-year survival rates cited in the clinical context sections of this white paper.*