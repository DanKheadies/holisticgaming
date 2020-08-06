import React from 'react';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';

const AntiInflammatoryAgents = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Anti-inflammatory Agents on Major Depressive Disorder"
    >
        <p>
            Posted: Nov 2019
        </p>
        <p>
            <a href="https://jnnp.bmj.com/content/early/2019/08/29/jnnp-2019-320912" alt="Anti-inflammatory Agents on Major Depressive Disorder" class="primary-link">
            Efficacy and safety of anti-inflammatory agents for the treatment of major depressive disorder: a systematic review and meta-analysis of randomised controlled trials
            </a>
            <br />
            Shuang Bai, Wenliang Guo, Yangyang Feng, Hong Deng, Gaigai Li, Hao Nie, Guangyu Guo, Haihan Yu, Yang Ma, Jiahui Wang, Shiling Chen, Jie Jing, Jingfei Yang, Yingxin Tang &amp; Zhouping Tang
            <br />
            Published: Oct 2019
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Reducing inflammation helps treat depression.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            If a highway gets damaged, construction crews come to fix it. Them fixing the highway causes traffic to build up and annoys people. By minimizing their presence on the highway while they fix the road, traffic can flow normally and people are less upset. Likewise, when your body gets damaged, inflammation and white blood cells work to repair the problem at the cost of your body working normally. Reducing the inflammation allows things to flow normally and your are less upset and depressed.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Major depressive disorder is one of the most common mental diseases, and it affects roughly 6&#37; of adults worldwide. A systematic review was conducted on the current research of anti-inflammatory drugs vs. a placebo on patients with major depressive disorder. A group of researchers found 30 randomized controlled trails that looked how out effective anti-inflammatory agents were at quantitatively changing patient depression as well as the qualitative response of the patient, remission rates, and overall quality of life. The studies were further broken down into sub-groups based on type of treatment, type of anti-inflammatory agent, sex, sponsor type, and the quality of the studies reviewed. The results of this meta-analysis indicate that anti-inflammatory drugs play a antidepressant role in patentors with major depressive disorders.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            (from the paper’s abstract)
        </p>
        <p>
            Objectives: To systematically review the efficacy and safety of anti-inflammatory agents for patients with major depressive disorders.
        </p>
        <p>
            Methods: We searched the literature to identify potentially relevant randomised controlled trials (RCTs) up to 1 January 2019. The primary outcome was efficacy, measured by mean changes in depression score from baseline to endpoint. Secondary outcomes included response and remission rates and quality of life (QoL). Safety was evaluated by incidence of classified adverse events. Heterogeneity was examined using the I2 and Q statistic. Pooled standard mean differences (SMDs) and risk ratios (RRs) were calculated. Subgroup meta-analyses were conducted based on type of treatment, type of anti-inflammatory agents, sex, sponsor type and quality of studies.
        </p>
        <p>
            Results: Thirty RCTs with 1610 participants were included in the quantitative analysis. The overall analysis pooling from 26 of the RCTs suggested that anti-inflammatory agents reduced depressive symptoms (SMD −0.55, 95% CI −0.75 to −0.35, I2=71%) compared with placebo. Higher response (RR 1.52, 95% CI 1.30 to 1.79, I2=29%) and remission rates (RR 1.79, 95% CI 1.29 to 2.49, I2=41%) were seen in the group receiving anti-inflammatory agents than in those receiving placebo. Subgroup analysis showed a greater reduction in symptom severity in both the monotherapy and adjunctive treatment groups. Subgroup analysis of non-steroidal anti-inflammatory drugs, omega-3 fatty acids, statins and minocyclines, respectively, disclosed significant antidepressant effects for major depressive disorder (MDD). For women-only trials, no difference in changes of depression severity was found between groups. Subanalysis stratified by sponsor type and study quality led to the same outcomes in favour of anti-inflammatory agents in both subgroups. Changes of QoL showed no difference between the groups. Gastrointestinal events were the only significant differences between groups in the treatment periods.
        </p>
        <p>
            Conclusions: Results of this systematic review suggest that anti-inflammatory agents play an antidepressant role in patients with MDD and are reasonably safe.
        </p>
    </AccordionCard>
);

export default AntiInflammatoryAgents;