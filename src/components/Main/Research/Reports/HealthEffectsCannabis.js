import React from 'react';
import { Accordion } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';

const HealthEffectsCannabis = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Health Effects of Cannabis and Cannabinoids: The Current State"
        param={props.param}
    >
        <p>
            Posted: Apr 2020
        </p>
        <p>
            <a href="https://doi.org/10.17226/24625" alt="Health Effects of Cannabis and Cannabinoids: The Current State" className="primary-link">
            Efficacy and safety of anti-inflammatory agents for the treatment of major depressive disorder: a systematic review and meta-analysis of randomised controlled trials
            </a>
            <br />
            Committee on the Health Effects of Marijuana: An Evidence Review and Research Agenda; Board on Population Health and Public Health Practice; Health and Medicine Division; National Academies of Sciences, Engineering, and Medicine
            <br />
            Published: Jan 2017
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            There’s a LOT more to find out and do for cannabis research, but some claims can be made about its effects or lack thereof.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            The plant cannabis has a long and weird history with people. In order to know what it does to people, we need to do more research on it, but that’s been hard. We’re learning more about cannabis, but we need to learn a LOT more. The good news is that we do know some things about it, like it stops people from puking after cancer treatment or that pregnant mothers who smoke cannabis have smaller babies. But the bigger, badder news is that we don’t have reliable evidence about a LOT of other things, like getting cancer from cannabis or dying from too much cannabis.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            There’s a LOT more to find out and do for cannabis research, but some claims can be made for its therapeutic effects, cancer associations, heart-circulatory risks, respiratory effects, immunity, mortality, prenatal exposure, psychosocial and mental health effects as well as abuse and problem behavior towards cannabis. This includes conclusive or substantial evidence supporting or refuting cannabis claims as well as distinctions on moderate, limited, or no / insufficient evidence between cannabis-cannabinoids and its purported treatment, effectivity, ineffectively, chronic conditioning, and general use. We know a good bit about the distinctions in cannabis associations, i.e. statistical vs. conventional, as well as cannabis use, i.e. smoking vs oral vs topical, but more research is needed. For more specifics, you’ll need to take a minute to see what’s known, barely known, and unknown.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            Cannabis research has been lacking due to various reasons, but we need a comprehensive evidence based approach to the health effects of cannabis use, e.g. various populations, pharmacodynamic properties, and various modes like edibles and vaporized cannabis, as well as health policies, economic impact, educational information, and public awareness. In addition to standards and benchmarks to guide and influence high-quality cannabis research, the researchers recommend improving local, state, and federal health surveillance systems and the overall infrastructure of cannabis research.
        </p>
        <p>
            This review presents a summary of its conclusions in the Annex section; however, these results do not fully illustrate the context, constraints, and considerations incorporated in the various studies of this meta-analysis. A number of these conclusions were drawn from meta-analyses and primary studies that provided valuable insight on specific situations with hard-to-generalize outcomes, such as the amount and type of cannabis used, like dronabinol a synthetic cannabis derivative, a lack of diverse populations and control groups, or participant self-reporting. Below are the results of this analysis, but a more in-depth understanding of the report is merited before these results should be immortalized into a sheet of facts and truths.
        </p>
        <Accordion>
            <AccordionCard
                eventKey="0"
                title="Chapter 4 Conclusions&mdash;Therapeutic Effects of Cannabis and Cannabinoids"
            >
                <div className="sub-heading">
                    There is conclusive or substantial evidence that cannabis or cannabinoids are effective:
                </div>
                <ul>
                    <li>
                        For the treatment of chronic pain in adults (cannabis) (4-1)
                    </li>
                    <li>
                        As antiemetics in the treatment of chemotherapy-induced nausea and vomiting (oral cannabinoids) (4-3)
                    </li>
                    <li>
                        For improving patient-reported multiple sclerosis spasticity symptoms (oral cannabinoids) (4-7a)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence that cannabis or cannabinoids are effective for:
                </div>
                <ul>
                    <li>
                        Improving short-term sleep outcomes in individuals with sleep disturbance associated with obstructive sleep apnea syndrome, fibromyalgia, chronic pain, and multiple sclerosis (cannabinoids, primarily nabiximols) (4-19)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence that cannabis or cannabinoids are effective for:
                </div>
                <ul>
                    <li>
                        Increasing appetite and decreasing weight loss associated with HIV/AIDS (cannabis and oral cannabinoids) (4-4a)
                    </li>
                    <li>
                        Improving clinician-measured multiple sclerosis spasticity symptoms (oral cannabinoids) (4-7a)
                    </li>
                    <li>
                        Improving symptoms of Tourette syndrome (THC capsules) (4-8)
                    </li>
                    <li>
                        Improving anxiety symptoms, as assessed by a public speaking test, in individuals with social anxiety disorders (cannabidiol) (4-17)
                    </li>
                    <li>
                        Improving symptoms of posttraumatic stress disorder (nabilone; a single, small fair-quality trial) (4-20)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabinoids and:
                </div>
                <ul>
                    <li>
                        Better outcomes (i.e., mortality, disability) after a traumatic brain injury or intracranial hemorrhage (4-15)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence that cannabis or cannabinoids are <em>ineffective</em> for:
                </div>
                <ul>
                    <li>
                        Improving symptoms associated with dementia (cannabinoids) (4-13)
                    </li>
                    <li>
                        Improving intraocular pressure associated with glaucoma (cannabinoids) (4-14)
                    </li>
                    <li>
                        Reducing depressive symptoms in individuals with chronic pain or multiple sclerosis (nabiximols, dronabinol, and nabilone) (4-18)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no or insufficient evidence to support or refute the conclusion that cannabis or cannabinoids are an effective treatment for:
                </div>
                <ul>
                    <li>
                        Cancers, including glioma (cannabinoids) (4-2)
                    </li>
                    <li>
                        Cancer-associated anorexia cachexia syndrome and anorexia nervosa (cannabinoids) (4-4b)
                    </li>
                    <li>
                        Symptoms of irritable bowel syndrome (dronabinol) (4-5)
                    </li>
                    <li>
                        Epilepsy (cannabinoids) (4-6)
                    </li>
                    <li>
                        Spasticity in patients with paralysis due to spinal cord injury (cannabinoids) (4-7b)
                    </li>
                    <li>
                        Symptoms associated with amyotrophic lateral sclerosis (cannabinoids) (4-9)
                    </li>
                    <li>
                        Chorea and certain neuropsychiatric symptoms associated with Huntington’s disease (oral cannabinoids) (4-10)
                    </li>
                    <li>
                        Motor system symptoms associated with Parkinson’s disease or the levodopa-induced dyskinesia (cannabinoids) (4-11)
                    </li>
                    <li>
                        Dystonia (nabilone and dronabinol) (4-12)
                    </li>
                    <li>
                        Achieving abstinence in the use of addictive substances (cannabinoids) (4-16)
                    </li>
                    <li>
                        Mental health outcomes in individuals with schizophrenia or schizophreniform psychosis (cannabidiol) (4-21)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="1"
                title="Chapter 5 Conclusions&mdash;Cancer"
            >
                <div className="sub-heading">
                    There is moderate evidence of <em>no</em> statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Incidence of lung cancer (cannabis smoking) (5-1)
                    </li>
                    <li>
                        Incidence of head and neck cancers (5-2)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Non-seminoma-type testicular germ cell tumors (current, frequent, or chronic cannabis smoking) (5-3)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no or insufficient evidence to support or refute a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Incidence of esophageal cancer (cannabis smoking) (5-4)
                    </li>
                    <li>
                        Incidence of prostate cancer, cervical cancer, malignant gliomas, non-Hodgkin lymphoma, penile cancer, anal cancer, Kaposi’s sarcoma, or bladder cancer (5-5)
                    </li>
                    <li>
                        Subsequent risk of developing acute myeloid leukemia/acute non-lymphoblastic leukemia, acute lymphoblastic leukemia, rhabdomyosarcoma, astrocytoma, or neuroblastoma in offspring (parental cannabis use) (5-6)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="2"
                title="Chapter 6 Conclusions&mdash;Cardiometabolic Risk"
            >
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        The triggering of acute myocardial infarction (cannabis smoking) (6-1a)
                    </li>
                    <li>
                        Ischemic stroke or subarachnoid hemorrhage (6-2)
                    </li>
                    <li>
                        Decreased risk of metabolic syndrome and diabetes (6-3a)
                    </li>
                    <li>
                        Increased risk of prediabetes (6-3b)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no evidence to support or refute a statistical association between <em>chronic effects</em> of cannabis use and:
                </div>
                <ul>
                    <li>
                        The increased risk of acute myocardial infarction (6-1b)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="3"
                title="Chapter 7 Conclusions&mdash;Respiratory Disease"
            >
                <div className="sub-heading">
                    There is substantial evidence of a statistical association between cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Worse respiratory symptoms and more frequent chronic bronchitis episodes (long-term cannabis smoking) (7-3a)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Improved airway dynamics with acute use, but not with chronic use (7-1a)
                    </li>
                    <li>
                        Higher forced vital capacity (FVC) (7-1b)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between <em>the cessation</em> of cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Improvements in respiratory symptoms (7-3b)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis smoking and:
                </div>
                <ul>
                    <li>
                        An increased risk of developing chronic obstructive pulmonary disease (COPD) when controlled for tobacco use (occasional cannabis smoking) (7-2a)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no or insufficient evidence to support or refute a statistical association between cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Hospital admissions for COPD (7-2b)
                    </li>
                    <li>
                        Asthma development or asthma exacerbation (7-4)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="4"
                title="Chapter 8 Conclusions&mdash;Immunity"
            >
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis smoking and:
                </div>
                <ul>
                    <li>
                        A decrease in the production of several inflammatory cytokines in healthy individuals (8-1a)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of <em>no</em> statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        The progression of liver fibrosis or hepatic disease in individuals with viral hepatitis C (HCV) (daily cannabis use) (8-3)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no or insufficient evidence to support or refute a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Other adverse immune cell responses in healthy individuals (cannabis smoking) (8-1b)
                    </li>
                    <li>
                        Adverse effects on immune status in individuals with HIV (cannabis or dronabinol use) (8-2)
                    </li>
                    <li>
                        Increased incidence of oral human papilloma virus (HPV) (regular cannabis use) (8-4)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="5"
                title="Chapter 9 Conclusions&mdash;Injury and Death"
            >
                <div className="sub-heading">
                    There is substantial evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Increased risk of motor vehicle crashes (9-3)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Increased risk of overdose injuries, including respiratory distress, among pediatric populations in U.S. states where cannabis is legal (9-4b)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no or insufficient evidence to support or refute a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        All-cause mortality (self-reported cannabis use) (9-1)
                    </li>
                    <li>
                        Occupational accidents or injuries (general, nonmedical cannabis use) (9-2)
                    </li>
                    <li>
                        Death due to cannabis overdose (9-4a)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="6"
                title="Chapter 10 Conclusions&mdash;Prenatal, Perinatal, and Neonatal Exposure"
            >
                <div className="sub-heading">
                    There is substantial evidence of a statistical association between maternal cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Lower birth weight of the offspring (10-2)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between maternal cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Pregnancy complications for the mother (10-1)
                    </li>
                    <li>
                        Admission of the infant to the neonatal intensive care unit (NICU) (10-3)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is insufficient evidence to support or refute a statistical association between maternal cannabis smoking and:
                </div>
                <ul>
                    <li>
                        Later outcomes in the offspring (e.g., sudden infant death syndrome, cognition/academic achievement, and later substance use) (10-4)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="7"
                title="Chapter 11 Conclusions&mdash;Psychosocial"
            >
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        The impairment in the cognitive domains of learning, memory, and attention (acute cannabis use) (11-1a)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Impaired academic achievement and education outcomes (11-2)
                    </li>
                    <li>
                        Increased rates of unemployment and/or low income (11-3)
                    </li>
                    <li>
                        Impaired social functioning or engagement in developmentally appropriate social roles (11-4)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between <em>sustained abstinence from</em> cannabis use and:
                </div>
                <ul>
                    <li>
                        Impairments in the cognitive domains of learning, memory, and attention (11-1b)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="8"
                title="Chapter 12 Conclusions&mdash;Mental Health"
            >
                <div className="sub-heading">
                    There is substantial evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        The development of schizophrenia or other psychoses, with the highest risk among the most frequent users (12-1)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Better cognitive performance among individuals with psychotic disorders and a history of cannabis use (12-2a)
                    </li>
                    <li>
                        Increased symptoms of mania and hypomania in individuals diagnosed with bipolar disorders (regular cannabis use) (12-4)
                    </li>
                    <li>
                        A small increased risk for the development of depressive disorders (12-5)
                    </li>
                    <li>
                        Increased incidence of suicidal ideation and suicide attempts with a higher incidence among heavier users (12-7a)
                    </li>
                    <li>
                        Increased incidence of suicide completion (12-7b)
                    </li>
                    <li>
                        Increased incidence of social anxiety disorder (regular cannabis use) (12-8b)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence of <em>no</em> statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Worsening of negative symptoms of schizophrenia (e.g., blunted affect) among individuals with psychotic disorders (12-2c)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        An increase in positive symptoms of schizophrenia (e.g., hallucinations) among individuals with psychotic disorders (12-2b)
                    </li>
                    <li>
                        The likelihood of developing bipolar disorder, particularly among regular or daily users (12-3)
                    </li>
                    <li>
                        The development of any type of anxiety disorder, except social anxiety disorder (12-8a)
                    </li>
                    <li>
                        Increased symptoms of anxiety (near daily cannabis use) (12-9)
                    </li>
                    <li>
                        Increased severity of posttraumatic stress disorder symptoms among individuals with posttraumatic stress disorder (12-11)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is no evidence to support or refute a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        Changes in the course or symptoms of depressive disorders (12-6)
                    </li>
                    <li>
                        The development of posttraumatic stress disorder (12-10)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="9"
                title="Chapter 13 Conclusions&mdash;Problem Cannabis Use"
            >
                <div className="sub-heading">
                    There is substantial evidence that:
                </div>
                <ul>
                    <li>
                        Stimulant treatment of attention deficit hyperactivity disorder (ADHD) during adolescence is <em>not</em> a risk factor for the development of problem cannabis use (13-2e)
                    </li>
                    <li>
                        Being male and smoking cigarettes are risk factors for the progression of cannabis use to problem cannabis use (13-2i)
                    </li>
                    <li>
                        Initiating cannabis use at an earlier age is a risk factor for the development of problem cannabis use (13-2j)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is substantial evidence of a statistical association between:
                </div>
                <ul>
                    <li>
                        Increases in cannabis use frequency and the progression to developing problem cannabis use (13-1)
                    </li>
                    <li>
                        Being male and the severity of problem cannabis use, but the recurrence of problem cannabis use does not differ between males and females (13-3b)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence that:
                </div>
                <ul>
                    <li>
                        Anxiety, personality disorders, and bipolar disorders are <em>not</em> risk factors for the development of problem cannabis use (13-2b)
                    </li>
                    <li>
                        Major depressive disorder is a risk factor for the development of problem cannabis use (13-2c)
                    </li>
                    <li>
                        Adolescent ADHD is <em>not</em> a risk factor for the development of problem cannabis use (13-2d)
                    </li>
                    <li>
                        Being male is a risk factor for the development of problem cannabis use (13-2f)
                    </li>
                    <li>
                        Exposure to the combined use of abused drugs is a risk factor for the development of problem cannabis use (13-2g)
                    </li>
                    <li>
                        Neither alcohol nor nicotine dependence alone are risk factors for the progression from cannabis use to problem cannabis use (13-2h)
                    </li>
                    <li>
                        During adolescence the frequency of cannabis use, oppositional behaviors, a younger age of first alcohol use, nicotine use, parental substance use, poor school performance, anti-social behaviors, and childhood sexual abuse are risk factors for the development of problem cannabis use (13-2k)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between:
                </div>
                <ul>
                    <li>
                        A persistence of problem cannabis use and a history of psychiatric treatment (13-3a)
                    </li>
                    <li>
                        Problem cannabis use and increased severity of posttraumatic stress disorder symptoms (13-3c)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence that:
                </div>
                <ul>
                    <li>
                    Childhood anxiety and childhood depression are risk factors for the development of problem cannabis use (13-2a)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="10"
                title="Chapter 14 Conclusions&mdash;Cannaabis Use and the Abuse of Other Substances"
            >
                <div className="sub-heading">
                    There is moderate evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        The development of substance dependence and/or a substance abuse disorder for substances, including alcohol, tobacco, and other illicit drugs (14-3)
                    </li>
                </ul>
                <div className="sub-heading">
                    There is limited evidence of a statistical association between cannabis use and:
                </div>
                <ul>
                    <li>
                        The initiation of tobacco use (14-1)
                    </li>
                    <li>
                        Changes in the rates and use patterns of other licit and illicit substances (14-2)
                    </li>
                </ul>
            </AccordionCard>
            <AccordionCard
                eventKey="11"
                title="Chapter 15 Conclusions&mdash;Challenges and Barriers in Conducting Cannabis
                Research"
            >
                <div className="sub-heading">
                    There are several challenges and barriers in conducting cannabis and cannabinoid research, including
                </div>
                <ul>
                    <li>
                        There are specific regulatory barriers, including the classification of cannabis as a Schedule I substance, that impede the advancement of cannabis and cannabinoid research (15-1)
                    </li>
                    <li>
                        It is often difficult for researchers to gain access to the quantity, quality, and type of cannabis product necessary to address specific research questions on the health effects of cannabis use (15-2)
                    </li>
                    <li>
                        A diverse network of funders is needed to support cannabis and cannabinoid research that explores the beneficial and harmful health effects of cannabis use (15-3)
                    </li>
                    <li>
                        To develop conclusive evidence for the effects of cannabis use on short- and long-term health outcomes, improvements and standardization in research methodology (including those used in controlled trials and observational studies) are needed (15-4)
                    </li>
                </ul>
            </AccordionCard>
        </Accordion>
        <br/>
        <p>
            Thanks for your time! Feel free to&nbsp;
            <a href={'/research?' + props.eventKey} alt="Share this Review" className="primary-link">
                share this review.
            </a>
        </p>
    </AccordionCard>
);

export default HealthEffectsCannabis;