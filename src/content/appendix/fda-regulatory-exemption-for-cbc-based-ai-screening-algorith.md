---
title: "FDA Regulatory Exemption for CBC-Based AI Screening Algorithms"
subtitle: ""
category: "regulatory"
date: "April 2026"
---

## Why Qualifying Clinical Decision Support Software Does Not Require FDA Premarket Review



## Overview

Machine learning algorithms that analyze routine complete blood count (CBC) data to identify patients who need further clinical evaluation operate in a regulatory space that Congress intentionally carved out of the U.S. Food and Drug Administration’s (FDA's) medical device jurisdiction. Under the Federal Food, Drug, and Cosmetic Act (FDCA), software satisfying four statutory criteria is classified as Non-Device Clinical Decision Support (CDS) software and requires no FDA submission, 510(k) clearance, or premarket approval.[3]

This document summarizes the legal framework and applies it to CBC-based AI screening tools, referencing a formal legal opinion rendered by regulatory counsel and the primary statutory and regulatory authorities on which that opinion rests.[10]



## Legal Framework

### The Statutory Definition of a Medical Device

The FDCA defines a medical device as any instrument, apparatus, implement, machine, contrivance, or similar article intended for use in the diagnosis, cure, mitigation, treatment, or prevention of disease.[2] Historically, clinical decision support software fell within this definition. The 21st Century Cures Act amended the FDCA in 2016 to create an explicit carve-out for certain software functions.[4]

### The Four-Criterion Test

Under FDCA § 520(o)(1)(E), software is excluded from the definition of a medical device and is therefore exempt from FDA regulation when it satisfies all four of the following criteria.[3] The FDA's 2026 Clinical Decision Support Software Guidance elaborates on how each criterion applies in practice.[1]



## Application of the Four Criteria

### Criterion One: Data Inputs

Software that acquires, processes, or analyzes medical images, signals from in vitro diagnostic devices, or patterns from signal acquisition systems (such as electrocardiogram [ECG] waveforms or continuous glucose monitor signals) remains a regulated device regardless of any other features it may have. CBC-based algorithms that rely solely on demographic and structured laboratory data already stored in a patient's electronic health record (EHR) do not process any such signals. The input (a standard blood count result) is considered equivalent to a blood pressure reading or a lab value in an EHR, both of which the FDA explicitly acknowledges as acceptable Criterion One inputs in its 2026 Guidance.[1]

### Criterion Two: Type of Medical Information

The statute requires that qualifying software display, analyze, or print medical information about a patient, which the FDA defines as information normally communicated between clinicians or between a clinician and a patient in the context of a clinical decision. CBC values, age, sex, body mass index (BMI), and diagnostic codes are paradigmatic examples of this category. Software analyzing these inputs satisfies Criterion Two because the clinical relevance of this information is well understood and accepted within the medical community.[1]

### Criterion Three: Recommendations, Not Directives

This is the most analytically significant criterion. Software that provides a specific preventive, diagnostic, or treatment output or directive fails Criterion Three and remains a regulated device. By contrast, qualifying Non-Device CDS software supports physician decision-making without replacing or directing clinical judgment.[7]

The FDA draws a concrete distinction: software that identifies a risk probability or assigns a risk score for a specific condition provides a specific preventive or diagnostic output and therefore fails Criterion Three; software that generates a list of patients who may need an initial or repeat screening appointment does not. CBC-based algorithms designed to flag patients for follow-up evaluation, without assigning a probability score or recommending a specific intervention, fall on the qualifying side of this line. Automation bias concerns are minimal in this context because the output is a scheduling prompt reviewed by a clinician, not a time-critical directive.[5,6]

### Criterion Four: Independent Physician Review

The statute requires that the software enable the healthcare professional to independently review the basis for its recommendation, ensuring that the clinician does not rely primarily on the software output when making a clinical diagnosis or treatment decision. This is primarily a design and labeling requirement.[8,9]

Compliant labeling must describe: (1) the intended use of the product; (2) the specific input data the algorithm uses; (3) the development and validation methodology of the underlying algorithm; and (4) any data quality flags, including missing, corrupted, or unexpected input values. When these disclosures are provided, the physician receives the basis for the flag alongside the flag itself, preserving independent clinical judgment.[1]



## Conclusion

CBC-based AI screening algorithms that are designed to flag patients for follow-up evaluation (rather than to diagnose, score risk, or direct treatment) satisfy all four statutory criteria under FDCA § 520(o)(1)(E). They qualify as Non-CDS software and are not subject to FDA premarket review or 510(k) clearance.[3,10]

The regulatory path depends on maintaining fidelity to this design logic: inputs limited to routine EHR and lab data; outputs limited to patient identification lists for clinician review; and labeling that discloses the algorithm's basis, allowing the physician to exercise independent judgment. So long as those design constraints are preserved, the software operates outside the scope of FDA medical device regulation.



## Endnotes

1.**  **U.S. Food and Drug Administration. “Clinical Decision Support Software: Guidance for Industry and Food and Drug Administration Staff.” January 29, 2026 .

*The FDA's 202**6** CDS Guidance clarifies the four statutory criteria under FDCA § 520(o)(1)(E) that distinguish Non-Device CDS **software **from regulated medical device software, providing the framework applied throughout this analysis.*

2.**  **Federal Food, Drug, and Cosmetic Act § 201(h), 21 U.S.C. § 321(h). .

*The statutory definition of a medical device under the FDCA, which the CDS software exemption carves out of for qualifying Non-Device CDS products. Central to determining whether FDA regulatory jurisdiction applies.*

3.**  **Federal Food, Drug, and Cosmetic Act § 520(o)(1)(E), 21 U.S.C. § 360j(o)(1)(E). .

*The specific statutory section, added by the 21st Century Cures Act, that carves out Non-Device CDS from the definition of medical device. Software satisfying all four enumerated criteria requires no 510(k) clearance or premarket approval.*

4.**  **21st Century Cures Act, Pub. L. No. 114-255, § 3060, 130 Stat. 1033 (2016). .

*Landmark legislation that amended the FDCA to exclude certain health software functions, including qualifying CDS, from the definition of medical device. Established the four-criterion test codified at § 520(o)(1)(E).*

5.**  **Babic B, Gerke S, Evgeniou T, Cohen IG. “Beware Explanations from AI in Health Care.” *Science*. 2021;373(6552):284–286. 

.

*Examines how algorithmic explanations can create automation bias in clinical decision-making, supporting the regulatory logic behind Criterion Four's requirement that physicians independently review the basis for CDS recommendations rather than rely primarily on outputs.*

6.**  **Sendak M, Elish MC, Gao M, et al. “‘The Human Body is a Black Box’: Supporting Clinical Decision-Making with Deep Learning.” *Proceedings of the ACM Conference on Fairness, Accountability, and Transparency (FAT*).* 2020:99–109. .

*Documents how health systems implement CDS outputs in practice, showing that software generating patient lists for follow-up (rather than risk scores or diagnoses) reduces automation bias—consistent with Criterion Three compliance.*

7.**  **Maddox TM, Rumsfeld JS, Payne PRO. “Questions for Artificial Intelligence in Health Care.” *JAMA.* 2019;321(1):31–32. 

.

*Frames key regulatory and clinical validation questions for AI-based health software, including the distinction between software that supports clinical judgment versus software that substitutes for it—directly relevant to the Criterion Three analysis.*

8.**  **Cohen IG, Amarasingham R, Shah A, Xie B, Lo B. “The Legal and Ethical Concerns That Arise from Using Complex Predictive Analytics in Health Care.” *Health Affairs.* 2014;33(7):1139–1147. 

.

*Surveys legal and ethical frameworks governing algorithmic health tools, including the role of physician oversight as a safeguard against over-reliance—the very concern Criterion Four addresses through independent review requirements.*

9.**  **Char DS, Shah NH, Magnus D. “Implementing Machine Learning in Health Care — Addressing Ethical Challenges.” *N Engl J Med.* 2018;378(11):981–983. 

*NEJM perspective identifying transparency, accountability, and physician control as central ethical requirements for clinical AI deployment—aligning with the labeling and independent-review requirements of Criteria Three and Four.*

10.**  **Karl M. Nobert, Regulatory Counsel, Michael Best & Friedrich LLP. Legal Opinion Letter to Lucem Health. August 1, 2023.



*Eight-page legal opinion concluding that Lucem Health's CBC-based machine learning solutions qualify as Non-Device CDS under FDCA § 520(o)(1)(E) and are not subject to FDA premarket review, based on application of all four statutory criteria.*