---
title: "From Blood Draw to Clinical Action"
subtitle: "How Maccabi and Geisinger Deploy Early Detection Algorithms, What the Blood Tests Cost, and How to Scale This Nationally and Globally."
category: "strategic"
date: "April 2026"
---

*Ratner Early Detection Initiative (REDI) · March 2026*

## Maccabi Healthcare Services: The World’s First Operational Deployment

Maccabi is Israel’s second-largest HMO, providing care and insurance to approximately 2.7 million members. It is an integrated organization in which Maccabi both insures its members and employs or contracts the physicians who care for them. The EHR, the blood draw, the attending physician, and the follow-up colonoscopy all live within one institution. There is no payer-provider split to navigate. This closed-loop structure is directly relevant to why ColonFlag could be deployed so cleanly: every element of the workflow, from the CBC result to the colonoscopy outcome, is visible within a single data environment.

ColonFlag was implemented at Maccabi in October 2015, with the explicit goal of identifying individuals who had not participated in the traditional fecal immunochemical test (FIT)-based colorectal cancer screening program but might still be harboring disease. The population targeted was screening-noncompliant: patients who, for whatever reason, had not completed recommended colonoscopy or FIT testing. Because those patients had routine blood draws on record, the algorithm could work on data already in the system without requiring any new clinical contact or specimen.

### The Technical Setup

Medial EarlySign installed its algorithm server as a component of Maccabi’s existing IT infrastructure. EarlySign’s software scans the EMR database on a defined schedule and flags individuals who meet the risk criteria set by Maccabi, at whatever threshold and resolution Maccabi chooses. No new equipment is required. No new blood draw is ordered. The algorithm reads CBC results that already exist in the EMR, computes a risk score from 0 to 100 based on age, sex, hemoglobin trends, red blood cell parameters, white blood cell parameters, and platelets, and identifies patients whose score exceeds the threshold as high risk.

The minimum CBC components required for a ColonFlag score are hemoglobin, red blood cell count, hematocrit, mean corpuscular volume (MCV), mean corpuscular hemoglobin (MCH), and mean corpuscular hemoglobin concentration (MCHC). Additional CBC components, particularly inflammatory cell parameters and platelets, improve performance and are included where available. Where parameters are missing, the algorithm imputes values based on age- and sex-specific population means.

### The Workflow, Step by Step Passive EMR scan. The algorithm runs against the CBC database on a scheduled basis, typically weekly or monthly. No clinical trigger is required. Risk scoring. Every eligible patient receives a score from 0 to 100. Patients scoring above the institution-set threshold are flagged. GP alert. The patient’s general practitioner receives an alert directly in the EMR interface. No separate login or system is involved. Clinical review. The GP reviews the flag, applies clinical judgment, and decides whether to refer for colonoscopy or specialist evaluation. Referral and procedure. If the GP agrees, a colonoscopy referral is placed within Maccabi’s system. The patient is contacted, counseled, and scheduled. Outcome and recycle. Results flow back into the EMR. The algorithm continues to monitor the patient on future CBC cycles.


The critical design principle is that the patient does nothing differently and the physician orders nothing new. The only addition is the software layer that reads the pattern the blood has already described.

### Results

In the prospective Maccabi deployment study published in *JCO Clinical Cancer Informatics* in 2018, 79,671 individuals determined to be noncompliant with colorectal cancer screening were identified in the Maccabi program. ColonFlag scored each patient using age, sex, and CBC results, and the algorithm identified 688 individuals in the highest 0.87 percentile of risk. Of those 688 flagged patients, 254 had colonoscopies performed by Maccabi physicians. Among those 254, 19 colorectal cancers were found, a detection rate of 7.5 percent. An additional 15 cancers, primarily identified outside Maccabi, were found through diagnostic code matching. Among the patients who saw their GP after being flagged, 85 percent were referred to colonoscopy or a GI specialist.

Over three years of deployment applied to approximately 220,000 patients aged 50 to 75, the program identified 1,913 patients at high risk. In two years of that period, 67 patients with confirmed malignancy and 254 patients with adenomatous polyps had been detected through the program.

## Geisinger Health System: The American Deployment

Geisinger Health System serves over three million patients across 45 counties of central, south-central, and northeastern Pennsylvania, operating ten hospitals and a medical school. Geisinger converted from paper to electronic health records in 1996, and its enterprise data warehouse now aggregates clinical, financial, and social determinants data from over 100 sources including its Epic EHR, with records on more than 5.5 million patients dating to 1996.

The ColonFlag deployment at Geisinger was a prospective real-world study, published in *Digestive Diseases and Sciences* in 2017. The algorithm was applied to patients overdue for colorectal cancer screening: patients who had not completed recommended colonoscopy or stool testing. The system flagged 706 patients from a pool of 25,610 who met that criterion. Of those 706, 104 completed colonoscopy. Among those 104 patients, 8 percent had confirmed colorectal cancer, compared to a 1 percent detection rate in standard screening. That is an eightfold improvement in cancer yield per colonoscopy performed.

The workflow at Geisinger followed the same passive integration model as Maccabi. ColonFlag ran against existing CBC data in the Epic EHR. Patients scoring above threshold were identified as high risk. The care team received an alert in the EHR. Outreach was made to patients overdue for screening. No new blood draw was required because the CBC already existed in the record.

Geisinger’s Epic infrastructure provided the necessary plumbing. Its EHR includes clinical decision support across all group-practice sites and is available to more than 2,000 users in non-Geisinger practices. That existing infrastructure, with its alert system and patient portal, carried ColonFlag’s outputs into the physician workflow without requiring a separate interface.

## Other Health Systems Currently Using These Algorithms

ColonFlag and LungFlag are now deployed at multiple institutions beyond Maccabi and Geisinger.

 Kaiser Permanente validated LungFlag across 6,505 lung cancer cases and 189,597 controls, achieving an AUC of 0.856 in the 9- to 12-month window before clinical diagnosis. Kaiser also validated ColonFlag separately at Kaiser Permanente Northwest, confirming an AUC of 0.80 and identifying individuals with a tenfold higher risk of undiagnosed cancer compared to standard screening.

 SLUCare Physician Group at Saint Louis University announced in early 2019 that it would deploy LGI-Flag, the US-marketed version of ColonFlag, across its patient population for lower gastrointestinal disorder risk identification. Roche navify® Algorithm Suite. In April 2023, Roche Diagnostics launched its navify Algorithm Suite at the HIMSS Global Conference, a cloud-based platform that integrates ColonFlag and other algorithms directly into EHR and Laboratory Information System (LIS) workflows at hospitals and labs worldwide. The suite offers fully cloud-based deployment, a hybrid cloud/on-premises option, and an on-premises integration component for institutions whose EHR cannot connect via API to the cloud. Integration uses HL7 v2-based interfaces for hybrid deployments and HTTPS/JSON-based APIs for direct cloud connections.

The navify model is currently the most fully operational commercial distribution channel for ColonFlag at scale. A health system that wants to deploy it today contacts Roche, selects the integration option that fits its infrastructure, and the algorithm becomes available as a module within the existing EHR or LIS workflow.

## How to Distribute New Algorithms Nationally and Globally

The Roche/navify model illustrates the most viable commercial distribution pathway currently operating: a large diagnostics partner that handles integration, sales, regulatory compliance, and software maintenance, in exchange for licensing fees or revenue sharing. Four realistic distribution models exist for a REDI algorithm portfolio.

### Model 1: Commercial Partnership with a Diagnostics Platform

Following the EarlySign/Roche template, REDI could license its algorithm portfolio to Roche Diagnostics, Siemens Healthineers, or Quest Diagnostics, each of which operates major laboratory information systems and clinical decision support platforms used by thousands of hospitals and independent labs. The algorithm developer provides the scientific core; the platform partner handles commercial infrastructure. The tradeoff is that the partner captures a significant share of commercial value, and deployment decisions are controlled by the partner’s sales priorities.

### Model 2: Direct EHR Integration Through Epic or Oracle Health

Epic and Oracle Health (formerly Cerner) together serve the overwhelming majority of US hospitals. Epic’s App Orchard marketplace allows third-party developers to build FHIR-compliant applications that integrate directly into Epic workflows and surface alerts alongside standard clinical decision support tools. An algorithm certified for the App Orchard reaches every Epic institution immediately, without requiring an individual contract with each health system. Oracle Health operates a comparable marketplace. This is the highest-leverage distribution model for the US market if REDI or a commercial partner is willing to invest in the certification process.

### Model 3: Network Deployment Through INSIGHT and PCORnet

Algorithms trained on INSIGHT data could be deployed first within the INSIGHT network itself, covering NewYork-Presbyterian, Weill Cornell, Columbia, Montefiore, Mount Sinai, NYU Langone, Houston Methodist, and Stony Brook Medicine. INSIGHT’s membership in PCORnet, the national network of clinical research networks, provides a pathway to extend deployment to over 40 additional health care institutions that are PCORnet partners. This model is most appropriate for an initial validation and deployment phase before full commercial rollout.

### Model 4: Public Health and Payer Channel

Engaging CMS and large commercial payers to include algorithmic screening analysis as a covered preventive service would drive health systems to deploy it as a matter of reimbursement optimization rather than institutional choice. Once a CPT code exists for algorithmic blood panel analysis and Medicare covers it, the market incentive for deployment is established. This is the most durable and scalable pathway, but it requires regulatory approval, clinical evidence publication, and a sustained policy engagement effort. The precedent for this pathway is the addition of low-dose CT lung cancer screening as a covered Medicare benefit following the National Lung Screening Trial.

## The Blood Tests: What Is Drawn, How Often, and at What Cost

### What Is Actually Drawn

The algorithms that REDI has developed or identified require no new blood tests. The full signal for 13 cancers and 12 non-cancer diseases is contained within panels already drawn at routine annual physicals: the CBC with differential, the CMP, the lipid panel, HbA1c, and TSH. These are drawn from a single venipuncture, typically one to two tubes of blood: a purple-top EDTA tube for the CBC and a gold-top serum separator tube for the chemistry panels. No additional specimens are required. The patient experiences a routine blood draw identical to what they would receive at any annual physical.

These five panels together cover approximately 50 to 60 individual analyte measurements. The CBC with differential produces 20 or more parameters including hemoglobin, MCV, MCH, MCHC, RDW, white cell count, neutrophils, lymphocytes, monocytes, eosinophils, basophils, and platelets. The CMP covers 14 chemistry analytes including glucose, creatinine, BUN, electrolytes, liver enzymes, albumin, and bilirubin. The lipid panel adds total cholesterol, LDL, HDL, and triglycerides. HbA1c and TSH add two critical metabolic and endocrine markers.

### How Often

Annual draws are the appropriate frequency. Annual testing provides the longitudinal trend data the algorithms require. ColonFlag specifically computes CBC trends over 18- and 36-month windows; a single draw is a snapshot, while three to five years of annual draws creates the trajectory the model reads. Annual blood testing is already the standard recommendation for adult preventive care under most clinical guidelines and is covered by virtually all insurance plans as part of the annual wellness visit.

### What the Tests Cost

 At LabCorp or Quest Diagnostics (self-pay, direct to consumer): LabCorp lists a CBC with differential at $29 on its OnDemand platform. A CMP plus lipid panel in a mid-range self-pay scenario runs approximately $110 to $180. HbA1c adds roughly $35 to $50 and TSH adds another $30 to $50 at self-pay rates. A bundled five-panel draw at LabCorp or Quest, ordered directly without a physician intermediary, would run approximately $100 to $175 out of pocket for most patients.

 At a hospital outpatient laboratory: Prices vary widely. Published research on Florida hospital pricing found that the cash price for a metabolic profile alone ranged from $13 to $2,943 across hospitals. Patients are always better served by using LabCorp, Quest, or a CLIA-certified independent lab rather than a hospital outpatient lab for routine annual panels.

 At CVS MinuteClinic or similar retail health settings: Blood draws and limited panel testing are available at retail clinics at pricing generally comparable to LabCorp and Quest for common panels. However, the full five-panel REDI draw may not be available at all retail locations. LabCorp and Quest operate over 2,000 patient service centers each across the United States and remain the most practical option for a standardized five-panel draw.

### Medicare Reimbursement

Under Original Medicare, most beneficiaries pay a monthly Part B premium of $185 in 2025 with an annual deductible of $257. Once that deductible is met, diagnostic blood tests at Medicare-approved labs typically cost nothing out of pocket, though a 20 percent coinsurance may apply for certain services. Both LabCorp and Quest Diagnostics accept Medicare assignment at most locations.

The Medicare Clinical Laboratory Fee Schedule (CLFS), updated annually by CMS, sets the reimbursement rates that Medicare pays to laboratories for these tests. The 2025 CLFS rates for the relevant CPT codes are approximately as follows:


When the CMP and lipid panel are ordered together, Medicare applies its Automated Multi-channel Chemistry (AMCC) bundling methodology, which strips overlapping analytes and pays a combined rate lower than the sum of individual panel rates. The all-in Medicare reimbursement to the lab for all five panels drawn at a single annual visit is in the range of $50 to $80.

 Medicaid reimbursement varies by state and generally runs approximately 80 to 90 percent of the Medicare CLFS rate, or roughly $40 to $65 for the five-panel draw depending on the state.

### The Reimbursement Gap That Needs to Be Closed

The blood draw and panel analysis are already paid for, once per year, for virtually every insured American. The panels are covered as part of the annual physical under most commercial plans, Medicare, and Medicaid. What is not yet covered is the algorithmic analysis layer on top of those results. Running a trained machine learning model on the CBC data to produce an early detection risk score currently has no CPT code and no Medicare reimbursement line.

That is the policy gap that needs to be closed: either through a new billing code for algorithmic screening analysis, inclusion of the algorithm output as a covered preventive service under the ACA, or through a quality measure that incentivizes health systems to deploy the algorithms under value-based care contracts. The precedent is the addition of low-dose CT lung cancer screening as a covered Medicare benefit, which followed directly from USPSTF recommendation and NCI trial evidence.

## The Complete End-to-End Workflow

The following describes the complete patient journey from blood draw to clinical action under a fully deployed REDI model.

 Annual physical. A 58-year-old patient comes in for a routine annual visit. The physician orders a CBC with differential, CMP, lipid panel, HbA1c, and TSH as part of the standard annual workup. One blood draw, two tubes. The patient goes to LabCorp, Quest, or has the draw done at the physician’s office.

 Results to EHR. Results return within 24 hours. They populate the physician’s EHR exactly as they do today.

 Algorithmic analysis. The CBC and chemistry values are automatically passed to the algorithm layer, either through an on-premises server, a cloud API connection, or an EHR-embedded decision support module. The algorithm compares current values to the patient’s prior values from previous annual draws, computes trends in hemoglobin, MCV, RDW, neutrophil-to-lymphocyte ratio, and platelet count, and produces a risk score.

 Alert to physician. If the risk score crosses the threshold, an alert appears in the physician’s workflow within the EHR interface. It does not require a separate login and is formatted identically to any other clinical decision support notification.

 Physician review and referral. The physician reviews the alert, applies clinical judgment, and decides whether to refer the patient for colonoscopy, specialist evaluation, or other follow-up. The referral is placed through the existing EHR order entry system.

 Follow-up procedure. The patient is contacted, counseled, and scheduled. If the colonoscopy finds cancer, it is caught at an early stage when it is curable. If it finds precancerous polyps, they are removed. If it finds nothing, the algorithm continues monitoring through future annual draws.

 No change for the patient. The patient did nothing differently. The physician ordered nothing new. The lab ran nothing extra. The only addition to the entire chain was the software layer that read the pattern the blood had already described.


At 200 million annual blood draws per year in the United States, this workflow, once embedded across major health systems and lab networks, would constitute the largest passive early detection program in the history of medicine.

## Endnotes

<span id="ref-1"></span>

1.Maccabi Healthcare Services. “Our Healthcare System.” [https://www.maccabi4u.co.il/en/46562/main_english/our-healthcare-system/](https://www.maccabi4u.co.il/en/46562/main_english/our-healthcare-system/)

*Maccabi Healthcare Services is Israel’s second-largest HMO, providing medical services to approximately 2.7 million members through a system of independent salaried physicians, nationwide facilities, and agreements with all major Israeli hospitals. Included to establish the organizational context for ColonFlag’s deployment.*

<span id="ref-2"></span>

2.Goshen R, Choman E, Ran A, et al. “Computer-Assisted Flagging of Individuals at High Risk of Colorectal Cancer in a Large Health Maintenance Organization Using the ColonFlag Test.” *JCO Clin Cancer Inform. *2018;2:1–8. [https://doi.org/10.1200/CCI.17.00130](https://doi.org/10.1200/CCI.17.00130)

*Prospective deployment of ColonFlag at Maccabi applied to 79,671 screening-noncompliant patients. Among 254 high-risk individuals who received colonoscopy, 19 colorectal cancers (7.5%) were found. Documents the real-world passive EHR integration model and the 85% physician referral rate following a ColonFlag alert.*

<span id="ref-3"></span>

3.Bio-IT World. “Patients Without Traditional Cancer Screening Find Allies in Maccabi and Medial EarlySign.” September 8, 2017. [https://www.bio-itworld.com/news/2017/09/08/patients-without-traditional-cancer-screening-find-allies-in-maccabi-and-medial-earlysign](https://www.bio-itworld.com/news/2017/09/08/patients-without-traditional-cancer-screening-find-allies-in-maccabi-and-medial-earlysign)

*Trade press account of the Maccabi deployment describing the on-premises server installation, the configurable alert threshold, and Medial EarlySign’s subscription/annual license fee structure. Provides technical and commercial detail on the implementation model.*

<span id="ref-4"></span>

4.Kinar Y, Kalkstein N, Akiva P, et al. “Development and Validation of a Predictive Model for Detection of Colorectal Cancer in Primary Care by Analysis of Complete Blood Counts: A Binational Retrospective Study.” *J Am Med Inform Assoc. *2016;23(5):879–890. [https://doi.org/10.1093/jamia/ocv195](https://doi.org/10.1093/jamia/ocv195)

*Original derivation and binational validation of ColonFlag using a gradient boosting and random forest ensemble trained on 20 CBC parameters plus age, sex, and 18- and 36-month trends. Dataset of 606,403 patients from Maccabi and the UK THIN database. AUC 0.82, with detection performance maintained for CBCs taken two years before diagnosis.*

<span id="ref-5"></span>

5.MedCity News. “This Israeli Startup Aims to Catch Disease Early with Data Not Diagnostic Tests.” May 2019. [https://medcitynews.com/2019/05/this-israeli-startup-aims-to-catch-disease-early-with-data-not-diagnostic-tests/](https://medcitynews.com/2019/05/this-israeli-startup-aims-to-catch-disease-early-with-data-not-diagnostic-tests/)

*Interview with Professor Varda Shalev of Maccabi reporting three-year deployment data: ColonFlag applied to approximately 220,000 patients aged 50–75, identifying 1,913 high-risk patients, and detecting 67 confirmed malignancies and 254 adenomatous polyps in the first two years.*

<span id="ref-6"></span>

6.Geisinger Health System. “About Geisinger.” [https://www.geisinger.org](https://www.geisinger.org)

*Official institutional profile of Geisinger Health System confirming service area of over three million patients across 45 Pennsylvania counties, operating ten hospitals and a medical school. Relevant to establishing the scale and integrated nature of the ColonFlag deployment setting.*

<span id="ref-7"></span>

7.Davis FD, et al. “Geisinger’s Effort to Realize Its Potential as a Learning Health System.” *Learn Health Syst. *2021;5(2):e10238. [https://doi.org/10.1002/lrh2.10238](https://doi.org/10.1002/lrh2.10238)

*Describes Geisinger’s enterprise data infrastructure: EHR records on more than 5.5 million patients dating to 1996, and a Hadoop-based data warehouse aggregating over 100 data sources including Epic. Documents the data environment that made ColonFlag deployment feasible.*

<span id="ref-8"></span>

8.Hornbrook MC, Goshen R, Choman E, et al. “Early Colorectal Cancer Detected by Machine Learning Model Using Gender, Age, and Complete Blood Count Data.” *Dig Dis Sci. *2017;62(10):2719–2727. [https://doi.org/10.1007/s10620-017-4722-8](https://doi.org/10.1007/s10620-017-4722-8)

*US validation and prospective deployment of ColonFlag at Geisinger Health System and Kaiser Permanente Northwest. Among flagged patients completing colonoscopy at Geisinger, 8% had confirmed colorectal cancer versus 1% in standard screening (eightfold improvement). Confirmed 66% of flagged patients had no clinical suspicion of cancer at the time of the triggering CBC.*

<span id="ref-9"></span>

9.Commonwealth Fund. “Geisinger Health System Case Study.” [https://www.commonwealthfund.org/sites/default/files/documents/___media_files_publications_case_study_2009_jun_mccarthy_geisinger_case_study_624_update.pdf](https://www.commonwealthfund.org/publications/case-study/2009/jun/geisinger-health-system)

*Describes Geisinger’s EHR infrastructure and clinical decision support capabilities, including availability across all group-practice sites and more than 2,000 affiliated providers. Documents the alert and patient portal infrastructure through which ColonFlag outputs reach physicians and patients.*

<span id="ref-10"></span>

10.Gould MK, Huang BZ, Tammemagi MC, Kinar Y, Shiff R. “Machine Learning for Early Lung Cancer Identification Using Routine Clinical and Laboratory Data.” *Am J Respir Crit Care Med. *2021;204(4):445–453. [https://doi.org/10.1164/rccm.202007-2791OC](https://doi.org/10.1164/rccm.202007-2791OC)

*LungFlag validation across 6,505 non-small cell lung cancer cases and 189,597 controls at Kaiser Permanente Southern California. AUC 0.856 in the 9–12-month pre-diagnosis window; 40.1% sensitivity at 95% specificity. Outperformed both USPSTF criteria and the PLCOm2012 risk model.*

<span id="ref-11"></span>

11.Roche Diagnostics. “Roche Introduces navify® Algorithm Suite.” Press release, April 11, 2023. [https://www.prnewswire.com/news-releases/roche-introduces-navify-algorithm-suite-a-digital-library-of-medical-algorithms-301793922.html](https://www.prnewswire.com/news-releases/roche-introduces-navify-algorithm-suite-a-digital-library-of-medical-algorithms-301793922.html). See also: navify Algorithm Suite product page: [https://navify.roche.com/marketplace/products/navify-algorithm-suite](https://navify.roche.com/marketplace/products/navify-algorithm-suite)

*Describes the navify Algorithm Suite as a cloud-based platform integrating ColonFlag and other partner algorithms into hospital and lab EHR/LIS workflows. Offers fully cloud-based, hybrid, and on-premises deployment modes using HL7 v2 and HTTPS/JSON-based APIs. ColonFlag is listed as a founding algorithm alongside GAAD for hepatocellular carcinoma.*

<span id="ref-12"></span>

12.Labcorp OnDemand. “Complete Blood Count Test.” Accessed March 2026. [https://www.ondemand.labcorp.com/lab-tests/complete-blood-count](https://www.ondemand.labcorp.com/lab-tests/complete-blood-count)

*Labcorp’s direct-to-consumer CBC with differential listed at $29 on the OnDemand platform as of early 2026. Establishes the baseline out-of-pocket cost for the primary REDI algorithm input panel when ordered without a physician intermediary.*

<span id="ref-13"></span>

13.Cost Digest. “Labcorp Blood Work Cost: Pricing to Expect.” [https://costdigest.org/labcorp-blood-work-cost-pricing-expect/](https://costdigest.org/labcorp-blood-work-cost-pricing-expect/)

*Provides regional out-of-pocket pricing ranges for Labcorp blood tests. CMP plus lipid panel mid-range scenario: approximately $110–$180. CBC in major metro areas: $25–$70. Useful for patient-facing cost estimates and program cost modeling.*

<span id="ref-14"></span>

14.Sehgal NL, et al. “Cost Comparisons of Physician-Ordered Versus Direct-to-Consumer Laboratory Testing.” *J Appl Lab Med. *2024;9(6). [https://doi.org/10.1093/jalm/jfae100](https://pmc.ncbi.nlm.nih.gov/articles/PMC11663041/)

*Florida hospital pricing data showing a 12-fold difference in cost between physician-ordered and direct-to-consumer CBC. Hospital cash prices for a metabolic profile ranged from $13 to $2,943 across institutions. Documents the extraordinary variation in laboratory pricing and supports the recommendation to use independent labs for self-pay patients.*

<span id="ref-15"></span>

15.Medicare.org. “Does Medicare Cover Blood Tests?” Updated 2025. [https://www.medicare.org/articles/does-medicare-cover-blood-tests-2/](https://www.medicare.org/articles/does-medicare-cover-blood-tests-2/)

*Describes 2025 Medicare Part B coverage for diagnostic blood tests: $185 monthly premium, $257 annual deductible, and zero out-of-pocket cost for most diagnostic lab tests at Medicare-approved facilities once the deductible is met. Confirms LabCorp and Quest accept Medicare assignment at most locations.*

<span id="ref-16"></span>

16.APS Medical Billing. “Medicare to Re-implement AMCC Lab Panel Claims.” [https://apsmedbill.com/sites/default/files/whitepaper/amcc_re-implementation.pdf](https://apsmedbill.com/sites/default/files/whitepaper/amcc_re-implementation.pdf) See also: CMS Clinical Laboratory Fee Schedule: [https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule-clfs](https://www.cms.gov/medicare/payment/fee-schedules/clinical-laboratory-fee-schedule-clfs)

*Explains Medicare’s Automated Multi-channel Chemistry (AMCC) bundling methodology, under which overlapping chemistry analytes across the CMP and lipid panel are not double-counted. Combined Medicare payment for CMP (80053) and lipid panel (80061) ordered together is lower than the sum of individual rates, illustrating the bundled cost structure relevant to REDI’s reimbursement modeling.*