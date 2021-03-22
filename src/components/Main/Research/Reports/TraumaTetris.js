import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImageTraumaTetris1 from '../../../../assets/images/research/trauma-and-tetris-032221-01.png';

const TraumaTetris = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Trauma and Tetris"
    >
        <p>
            Posted: Mar 2021
        </p>
        <p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/28348380/" alt="Trauma and Tetris" className="primary-link">
                Preventing intrusive memories after trauma via a brief intervention involving Tetris computer game play in the emergency department: a proof-of-concept randomized controlled trial
            </a>
            <br />
            L Iyadurai, S E Blackwell, R Meiser-Stedman, P C Watson, M B Bonsall, J R Geddes, A C Nobre, E A Holmes
            <br />
            Published: Mar 2017
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Videos games help prevent traumatic memories when administered soon after the event.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            If you fall and hurt yourself, an adult might yell out “Whoopsie, what a silly!” and start laughing. Usually, they’re trying to distract you from your pain and help you forget that you just got hurt. If you manage to laugh with them or at least not break down crying, you move past the pain more quickly and don’t dwell on it. Using video games to distraction someone when they hurt themselves, like in a car accident, works in a similar way.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Traumatic events are a time-sensitive problem that video games can provide preventative-treatment for. Trauma causes people to reflect on what happened to them, and memories of the event are typically called and cataloged early on in the experience. By providing a high, visuospatial distraction, i.e. a game, researchers found that they could reduce these intrusive, traumatic memories significantly. By providing emergency department patients in the UK with ~20 minutes of Tetris after motor vehicle accident, patients were less likely to experience intrusive, unprovoked memories than a control group that filled out an activity log instead of playing Tetris. This brief, cheap, ’therapist-free’ intervention shows a lot of potential for other types of traumatic situations, and more research is needed to pin-point the exact “why” and “what” as well as how long such an intervention helps.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            Intrusive memories after a psychologically traumatic event are clinical features of acute stress disorder and post-traumatic stress disorder (PTSD). Current preventative interventions after trauma are either ineffective, unappealing, or inaccessible; however, these researchers attempt to use a low-intensity, simple intervention to target and prevent the onset of intrusive memories. Specifically, they incorporate ideas about memory consolidation that indicate doing a cognitive task with high visuospatial demands, i.e. Tetris, will disrupt visual-sensory aspects of memory due to competition for limited cognitive resources.
        </p>
        <p>
            A large number of potential participants were assessed at a hospital emergency department in the UK. Amongst several criteria and vetting, seventy one patients were identified as experiencing or witnessing a motor vehicle accident, met the criteria for a traumatic event, or reported memory of a (recent) accident. After basic questionnaires and consent forms, participants were randomly split into two parallel treatment conditions: the behavioral intervention of playing Tetris vs the attention placebo of writing in an activity log. One month after the interaction, researchers followed up with the participants, who were also debriefed on the study.
        </p>
        <p>
            Details of each participants’ traumatic event, emergency department treatment, and previous visits were recorded and rated for severity, perceived life threat, dissociative symptoms, and emotional responses to the event(s) along with prior psychological trauma, mental illness, and family history of mental illness. Participants recorded number of intrusive memories, i.e. image-based memories of the accident that appear without warning, along with a 13-item questionnaire about their experience in the study. All participants received typical medical care in the emergency department; however, half were asked to think of the accident and tell the researcher the worst moments of it before playing Tetris for 10 uninterrupted minutes, twice. The other half filled out a simple activity log of things they had done at the emergency department, which took roughly 20 minutes.
        </p>
        <div className="center-content">
            <Image 
                alt="Trauma and Tetris Figure 1"
                fluid
                src={ImageTraumaTetris1}
            />
            <div className="image-notes">
                Number of intrusive memories of the traumatic event.
            </div>
        </div>
        <p>
            After analyzing participant background information and relevant traumatic event data, the researchers plotted intrusive memory occurrence over the first week, and they found that participants who played Tetris recorded significantly fewer intrusive memories, i.e. a 62% reduction, as well as overall less distress from the intrusion symptoms than the control group. These results are consistent with previous laboratory-based trauma simulation studies, and they suggest that a larger trial is warranted. Participants were more willing to engage in this brief, ’therapist-free’ technological intervention, and no adverse effects were observed or reported. This intervention is brief, low cost, simple to train and deliver, and flexible, all of which make it a successful prevention strategy toward intrusive memories after an accident. This type of cognitive ’therapeutic vaccine’ could help with other traumatic events, but further research is needed on the exact mechanisms as to how it blocks intrusive memories, i.e. high visuospatial demands coupled with memory reminder of the incident, as well as the temporal constraints this type of intervention may have, i.e. extending to 1 month or having more / multiple ‘doses’ of game play.
        </p>
    </AccordionCard>
);

export default TraumaTetris;