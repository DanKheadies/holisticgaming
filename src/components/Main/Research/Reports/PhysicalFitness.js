import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImagePhysicalFitness1 from '../../../../assets/images/research/physical-fitness-091219-01.png';

const PhysicalFitness = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Physical Fitness's Effect on White Matter Microstructures"
    >
        <p>
            Posted: Sep 2019
        </p>
        <p>
            <a href="https://www.nature.com/articles/s41598-019-49301-y" alt="Physical Fitness's Effect on White Matter Microstructures" class="primary-link">
                White matter microstructure mediates the association between physical fitness and cognition in healthy, young adults
            </a>
            <br />
            Nils Opel, Stella Martin, Susanne Meinert, Ronny Redlich, Verena Enneking, Maike Richter, Janik Goltermann, Andreas Johnen, Udo Dannlowski &amp; Jonathan Repple
            <br />
            Published: Sep 2019
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Physical fitness provides benefits to brain structure and cognition.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Like cars on roads, you send information on roads in your brain. When people spend more time physically maintaining the roads, like putting up signs, traffic lights, fixing pot holes, adding ramps, bridges, and more lanes, then cars can move more easily and quickly. Likewise, if you physically work out, you make the roads in your brain better, and so your brain can send information more easily and quickly.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Physical fitness affects the structure of the brain. Using a rich dataset and an MRI-based neuroimaging technique, researchers saw that individuals that were more physically fit had their neurons structured with more unity and direction. In other words, the way neurons send signals was more consolidated and coordinated to one direction. These healthy, young adults also showed higher mental abilities in nearly all cognitive domains and more-so for novel problem solving, transitioning between problems, and processing speed. This association between the neuronal microstructures and mental abilities reinforces a positive relationship between physical fitness and brain structure. Using a variety of reliable, statistical models and software, the researchers accounted for gender, age, education, BMI, diabetes, and blood pressure to avoid biases in participant characteristics. 
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            A number of studies have looked at the relationship between physical fitness and brain physiology, e.g. white matter structure and gray matter volume; however, less is known about physical fitness’s effect on white matter microstructure, i.e. the diffusion or alignment of myelinated neurons along one axis and restricted along other directions. Through the open-access brain imaging data from the Human Connectome Project (HCP), these researchers analyzed the data available on 1200 individuals&mdash;55.5% female with an average age of 28.8 and an ‘overweight' BMI. This dataset contained an extensive breakdown of tests and scores, which included the NIH Cognition Total Composite Score (i.e. “global condition score”) from subtests in the NIH Toolbox Cognition Battery, as well as physical tests and measurements, such as a walking endurance test.
        </p>
        <p>
            Through the HPC, the data had been collected and processed for easy access and research (<a href="https://www.humanconnectome.org/study/hcp-young-adult/document/1200-subjects-data-release" class="primary-link" alt="HPC">https://www.humanconnectome.org/study/hcp-young-adult/document/1200-subjects-data-release</a>). This included processing such as with their MR Diffusion Pipeline to normalize parts of the images, remove distortions, and mask the data amongst other techniques. The researchers followed suit by performing hierarchical linear regressions using a statistical software program from IMB (SPSS), and from the dataset, they created a baseline of all 1200 individuals and a complete, i.e. “full,” model to account for covariates such as sex, age, years of completed formal education, BMI, HbA1c (i.e. diabetes), and systolic blood pressure, which consisted of 800 individuals. Additionally, the researchers carried out a mediation analysis for walking endurance, white matter microstructure, and global cognitive performance using the SPSS macro PROCESS.
        </p>
        <div class="center-content">
            <Image 
                alt="Physical Fitness's Effect on White Matter Microstructures Figure 1"
                fluid
                src={ImagePhysicalFitness1}
            />
            <div className="image-notes">
                Regression analyses of endurance and fractional anisotropy.
            </div>
        </div>
        <p>
            The research shows a positive relationship between physical fitness, white matter microstructure, and cognitive performance&mdash;specifically in the domains of fluid intelligence, cognitive flexibility, and processing speed. As the researchers note, this study was conducted on relatively young, healthy adults, and it excluded individuals with neurodevelopment and neurological disorders. These findings are consistent with previous research and meta-analytical evidence on similar associations between physical activity, executive function, and brain physiology, i.e. fractional anisotropy as a measure of white matter integrity.
        </p>
        <p>
            Further research would investigate the effects of physical fitness on brain physiology and mental abilities over longitudinal and interventional studies.
        </p>
    </AccordionCard>
);

export default PhysicalFitness;