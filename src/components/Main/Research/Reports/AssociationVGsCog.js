import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImageAssVGsCog1 from '../../../../assets/images/research/ass-vgs-cog-102622-1.png';
import ImageAssVGsCog2 from '../../../../assets/images/research/ass-vgs-cog-102622-2.png';

const AssociationVGsCog = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Association of Video Gaming With Cognitive Performance Among Children"
        param={props.param}
    >
        <p>
            Posted: Oct 2022
        </p>
        <p>
            <a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2797596" alt="Association of Video Gaming With Cognitive Performance Among Children" className="primary-link">
            Association of Video Gaming With Cognitive Performance Among Children
            </a>
            <br />
            Bader Chaarani, PhD; Joseph Ortigara, MS; DeKang Yuan, MS; Hannah Loso, PhD; Alexandra Potter, PhD; Hugh P. Garavan, PhD
            <br />
            Published: Oct 2022
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Video gaming improves kids' working memory and response inhibition.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Games make you think about certain things. The more you play a game, then the more you get better at thinking a specific way. Like in red-light, green-light. You have to respond quickly and then hold back at certain times. The more you play red-light, green-light, the better you'll be at responding and purposefully waiting. On a big-picture scale, videos games do that too. We looked at peoples brains and we can SEE the differences.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Do you need to be able to inhibit extraneous stimuli and focus on a specific task? Do you need to be able to hold information in your head for longer and with more certainty? Well then you should be playing games, specifically, video games. But you may want to do it sooner rather than later. A study looking at 9-10 year olds found that kids who play video games appear to have a greater capacity to suppress or disregard irrelevant stimuli, and they do better on a range of cognitive tasks and intelligence measures. Using credible data from a large dataset, several analytical methods, and fMRI, the researchers have numerical and visual proof that video game players out perform their peers. Do you think you should step your game up too?
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            Children and adolescents undergo substantial brain development, and the activities they engage with play a large role in that development. Researchers have been investigating the associations between gaming, cognition, and mental health. Several studies suggest that video game training paradigms enhance cognitive control-related functions, like working memory. Task-based functional magnetic resonance imaging (fMRI) studies have shown physiological differences, e.g. more blood oxygen level-dependent (BOLD) activity in the prefrontal cortex, across multiple frontoparietal regions with different activation patterns across brain regions. However, the list of studies comparing video game players (VGs) against non-video game players (NVGs) continues to provide affirmative and contradictory evidence that video game play enhances cognitive control-related functions, like working memory, as well as activation changes in prefrontal areas, such as the prefrontal and orbitofrontal cortexes. To address concerns of sample size, methods, and a lack of replication across studies, this study uses a large data set of 9-10 year old children from the Adolescent Brain Cognitive Development (ABCD) study to assess the effect video games have on cognitive performance and brain activation—specifically during response inhibition and working memory tasks via task-based fMRI. The ABCD study is the largest long-term study of brain development and children's health in 21 sites across the US. The researchers hypothesize that VGs would perform better on tasks and show different neuronal activity from NVGs in brain areas involved with inhibition control and working memory.
        </p>
        <p>
            Using data from the 2019 release of the ABCD study (2.0.1), the researchers analyzed 2217 records and grouped relevant datasets based on one main factor and two tasks: a Stop Signal task and n-Back task. For each task, the participant sample divided into NVGs with 0 gaming hours per week and VGs with 21+ hours per week. This data included neuroimaging and behavioral information on the children involved, and the quality and ethical review of the ABCD study is well reviewed and procedurally sound; so the data is trust-worthy and efficacious for this research project. The Stop Signal task is a test of inhibition, like a motor response. For example, there's a screen with a vanishing arrow that points left or right. Participants must tap left or right when the arrow appears and points. If they hear a beep before the arrow appears, they are to do nothing. The n-Back task is a continuous performance task to assess working memory. For example, there are a series of numbers, like 4-7-1-3, and the subject must identify the nth number back, for example the 3rd number back is 7. Numbers are added and n changes.
        </p>
        <div className="center-content">
            <Image 
                alt="Table 1 - Demographic Characteristics and Task Performance Measures in NVGs and VGs in the SST and n-Back Samples"
                fluid
                src={ImageAssVGsCog1}
            />
            <div className="image-notes">
                Demographic Characteristics and Task Performance Measures in NVGs and VGs in the SST and n-Back Samples
            </div>
        </div>
        <p>
            Presented above are the results of several statistical analysis methods comparing and presenting the demographic characteristics, task-specific BOLD signals, and other performance measures through variance, chi-squared tests, permutation analysis like PALM, and modeling with R software. The findings show that on the Stop Signal task VGs (679) our performed NVGs (1,128) and likewise on the n-Back task VGs (800) outperformed NVGs (1,278) too. The fMRI findings show greater BOLD signals in the VGs precuneus (superior parietal lobe) during the Stop Signal task, smaller BOLD signals in the VGs occipital cortex and calcimine sulcus during the n-Back task, and more activation in the cingulate, sub parietal, middle gyri, frontal gyri, and precuneus during the n-Back working memory task. These results show that VGs are less susceptible to attentional distraction and outperform NVGs on both selection-baed and response-based tasks. The researchers believe that the VGs may have a greater capacity to suppress or disregard irrelevant stimuli. This enhanced cognitive performance on both the Stop Signal and n-back tasks supports previous studies that show VGs outperforming NVGs on a range of cognitive tasks and on crystallized and fluid intelligence measures. However, some results contradict other studies with different design and outcome measures as well.
        </p>
        <div className="center-content">
            <Image 
                alt="Figure 2 - Differences of Behavioral Task Performance and Child Behavior Checklist (CBCL) Measures Between Video Gamers and Non-Video Gamers in the Stop Signal Task and n-Back Task"
                fluid
                src={ImageAssVGsCog2}
            />
            <div className="image-notes">
                Differences of Behavioral Task Performance and Child Behavior Checklist (CBCL) Measures Between Video Gamers and Non-Video Gamers in the Stop Signal Task and n-Back Task
            </div>
        </div>
        <p>
            The figure above reflects the Child Behavior Checklist (CBCL), which evaluates mental health symptoms, and task performance results for participants in the study. VGs are generally higher across the board on these than NVGs, which leave open the possibility that VGs may be on a trajectory to show larger effects with time and more exposure to video gaming.
        </p>
        <p>
            For the Stop Signal task, the increased brain activity in the fMRI results are consistent with previous response inhibition-task studies that show more activation in the VGs parietal areas, which supports an enhanced overall recruitment of a range of attentional control areas during response inhibition tasks. As for the n-Back task's decreased activation in VGs occipital areas, they agree with previous findings that suggest a reduction in viscometer cognitive costs as a consequence of video gaming practice.
        </p>
        <p>
            The main limitation the authors identify is a lack of clarity amongst time spent in various gaming categories, such as action-adventures vs puzzle solving and single vs multiplayer games. This specificity could drive deeper insight into neuronal activation and cognitive performance differences. They also note that a longitudinal design of the ABCD study would shift the connections from association towards causation.
        </p>
        <br/>
        <p>
            Thanks for your time! Feel free to&nbsp;
            <a href={'/research?' + props.eventKey} alt="Share this Review" className="primary-link">
                share this review.
            </a>
        </p>
    </AccordionCard>
);

export default AssociationVGsCog;