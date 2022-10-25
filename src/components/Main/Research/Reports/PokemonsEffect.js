import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImagePokemonsEffect1 from '../../../../assets/images/research/pokemon-07092019-01.jpg';
import ImagePokemonsEffect2 from '../../../../assets/images/research/pokemon-07092019-02.jpg';
import ImagePokemonsEffect3 from '../../../../assets/images/research/pokemon-07092019-03.jpg';

const PokemonsEffect = props => (
    <AccordionCard
        id="derp"
        eventKey={props.eventKey}
        title="Pokemon's Effect on the Visual Cortex"
        param={props.param}
    >
        <p>
            Posted: Jul 2019
        </p>
        <p>
            <a href="https://doi.org/10.1038/s41562-019-0592-8" alt="Pokemon's Effect on the Visual Cortex" className="primary-link">
            Extensive childhood experience with Pokémon suggests eccentricity drives organization of visual cortex
            </a>
            <br />
            Jesse Gomez, Michael Barnett &amp; Kalanit Grill-Spector
            <br />
            Published: Jun 2019
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            Pokemon games show that people learn things for life.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            Human brains are like buildings with lots of rooms to do stuff in. Certain areas in the brain “light up” for certain things just like certain rooms in a house turn on when you have to do stuff in em. People who played Pokemon a lot as kids lit up certain rooms in their brains more than people who didn’t play it, but they both had a lot of lights on for faces and words.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            Twenty two people&mdash;11 experienced Pokemon players and 11 novices&mdash;had their brains monitored while they looked at images. Both groups showed high, consistent activity in a particular brain region when they looked at pictures of faces and words. This occurred in an area of the brain that deals largely with visual recognition. In that same area of the brain, they both showed less activity for things like cars. But with Pokemon, the experienced group showed more activity in that brain region than novices. This means the brain is malleable. Due to the visual characteristics of Pokémon, the researchers were able to show that doing something frequently&mdash;playing Pokémon&mdash;and for a long time&mdash;since childhood&mdash;had a physical impact on the brain and how it organizes visual information.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            These researchers showed that novel stimuli, like Pokemon, make meaningful and impactful changes on the human brain. In other words, sustained focus and attention on certain attributes pairs with neural networks and localized regions of activity within the brain. Twenty two adults&mdash;half experienced with the Nintendo Gameboy game Pokemon and half novices&mdash;were tested via fMRI: shown 8 types of images while the researchers mapped neural activity.
        </p>
        <div className="center-content">
            <Image 
                alt="Pokemon's Effect on the Visual Cortex Figure 1"
                fluid
                src={ImagePokemonsEffect1}
            />
            <div className="image-notes">
                <div className="figure-credits">
                    Reprinted by permission from CCC RightsLink: Springer Nature, Nature Human Behavior, <a href="https://doi.org/10.1038/s41562-019-0592-8" alt="Pokemon's Effect on the Visual Cortext" className="primary-link"> Extensive childhood experience with Pokémon suggests eccentricity drives organization of visual cortex </a>, J. Gomez, M. Barnett &amp; K. Grill-Spector, 2019.
                </div>
                Example stimuli from each of the categories used in the fMRI experiment.
            </div>
        </div>
        <p>
            The researchers used [sophisticated science] to make [meaningful charts] as well as provide [insightful insight].
        </p>
        <div className="center-content">
            <Image 
                alt="Pokemon's Effect on the Visual Cortex Figure 2"
                fluid
                src={ImagePokemonsEffect2}
            />
            <div className="image-notes">
                <div className="figure-credits">
                    Reprinted by permission from CCC RightsLink: Springer Nature, Nature Human Behavior, <a href="https://doi.org/10.1038/s41562-019-0592-8" alt="Pokemon's Effect on the Visual Cortext" className="primary-link"> Extensive childhood experience with Pokémon suggests eccentricity drives organization of visual cortex </a>, J. Gomez, M. Barnett &amp; K. Grill-Spector, 2019.
                </div>
                ANOVA quantified brain response activity in experienced and novel Pokemon players across stimuli groups.
            </div>
        </div>
        <div className="center-content">
            <Image 
                alt="Pokemon's Effect on the Visual Cortex Figure 3"
                fluid
                src={ImagePokemonsEffect3}
            />
            <div className="image-notes">
                <div className="figure-credits">
                    Reprinted by permission from CCC RightsLink: Springer Nature, Nature Human Behavior, <a href="https://doi.org/10.1038/s41562-019-0592-8" alt="Pokemon's Effect on the Visual Cortext" className="primary-link"> Extensive childhood experience with Pokémon suggests eccentricity drives organization of visual cortex </a>, J. Gomez, M. Barnett &amp; K. Grill-Spector, 2019.
                </div>
                Neuronal activity in the ventral temporal cortex (VTC), occipito-temporal sulcus (OTS), fusiform gyrus (FG), and collateral sulcus (CoS). Group A (top) reflects activity in novice Pokemon players, and Group B (bottom) is experienced players.
            </div>
        </div>
        <p>
            A continuation of this research would investigate how 21st century tools, such as user interfaces and virtual environments, are shaping our minds today.
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

export default PokemonsEffect;