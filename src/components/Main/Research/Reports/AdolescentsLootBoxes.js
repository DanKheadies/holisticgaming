import React from 'react';
import { Image } from 'react-bootstrap';

import AccordionCard from '../../../UI/AccordionCard/AccordionCard';
import ImageAdoLootBox1 from '../../../../assets/images/research/ado-loot-box-031521-01.png';
import ImageAdoLootBox2 from '../../../../assets/images/research/ado-loot-box-031521-02.png';

const AdolescentsLootBoxes = props => (
    <AccordionCard
        eventKey={props.eventKey}
        title="Adolescents and Loot Boxes"
        param={props.param}
    >
        <p>
            Posted: Mar 2021
        </p>
        <p>
            <a href="https://royalsocietypublishing.org/doi/10.1098/rsos.190049" alt="Adolescents and loot boxes: links with problem gambling and motivations for purchase" className="primary-link">
            Adolescents and loot boxes: links with problem gambling and motivations for purchase
            </a>
            <br />
            David Zendle, Rachel Meyer, and Harriet Over
            <br />
            Published: Jun 2019
        </p>
        <h6>
            tl;dr
        </h6>
        <p>
            There is a relationship between loot box spending and gambling behavior problems.
        </p>
        <h6>
            eli5
        </h6>
        <p>
            If you eat too much of a good thing, you can get sick. The problem occurs when your mouth says “more" and your stomach says “no more” and only one of them can be the winner. Having too much of a good thing can happen in video games where you can buy things. Your brain thinks “more” and your wallet says “no more” and again, there can only be one winner. Loot boxes in video games trick kids brains into thinking they are a good thing when really they can cause problems.
        </p>
        <h6>
            elevator sum
        </h6>
        <p>
            The microtransactionization of video games have a sweeping affect on players, and a number of adolescents have become susceptible to their effects. Loot boxes are a prime example of microtransactions that mirror gambling tendencies, and while the types and versions of loot boxes differ amongst and within games, their central premise remains constant: adolescents who spend money on loot boxes exhibit symptoms of problem gambling behaviors. It is unclear if adolescents with gambling problems are more susceptible to devices like loot boxes or if features like loot boxes lead to problem gambling, but a relationship between the two exists.
        </p>
        <p>
            This study looked at adolescent behaviors and purchases of loot boxes, and through their various hypotheses and online-survey questions, they concluded that 1) a relationship exists and 2) the more they spend, the worse their problem gaming behaviors are. The researchers suggest conducting more research, i.e. repeating, breadth, and depth, in this area to be assured of their conclusions.
        </p>
        <h6>
            3 min dissertation
        </h6>
        <p>
            A loot box is a “randomized," pay-for-goods video game enticement. By paying small amounts of real money for a random enhancement in-game, players gamble on receiving a specific, rare, and/or prestigious reward, or they end up with commonly average rewards. Players do not know what the loot boxes contain when they purchase them, and several international regulatory authorities have likened this behavior to gambling. The main concern is children and adolescents falling into a pattern of “problem gambling” which is linked to depression, anxiety, bankruptcy, and suicide. Exposure to problem gambling and gambling activities in childhood and adolescence is an important predictor of adult gambling problems. The various types of loot boxes can affect the specifics of how or why a player purchases it, but the fundamental concerns circle back to the nature of loot boxes mirroring gambling.
        </p>
        <p>
            This research investigated the links between loot box spending and problem gambling in adolescents. Using an online survey, 1155 responses from 16-18 year olds were collected with 88% identifying as male. Participants indicated when they opened loot boxes and if real-world money was involved in the last month. For example, less than 5% indicated that they purchased their first loot box one day or one week after playing a new game, and 80% indicated that they purchased their first loot box more than a month after starting a new game. The researchers transformed the monetary amount into US dollars and applied a rank transformation pre-analysis to help handle outliers. Participants were asked about the frequency of their problem-gambling-related behaviors through the Canadian Adolescent Gambling Inventory’s (CAGI) Problem Gambling subscale. Impulsivity and measured along with frequency and immediacy of loot box purchasing as well as questions about purchased loot box features. Finally, motivation to buy loot boxes was measured.
        </p>
        <p>
            The researchers hypothesized several outcomes of opening loot boxes, specifically the features inherent to them, as well as impulsivity. Using several tests, e.g. Spearman rank correlation and Mann-Whitney U-test, across their different hypotheses, e.g. there will be a significant positive correlation between loot box spending and problem gambling, the researchers found that there was a statistically significant effect of problem gambling on loot box spending. Moderation analysis was used to test the specific loot box features hypotheses, and only two features significantly strengthened the links between loot box spending and problem gambling: loot box contents limited time availability and free loot box giveaways.
        </p>
        <div className="center-content">
            <Image 
                alt="Adolescents and Loot Boxes Table 1"
                fluid
                src={ImageAdoLootBox1}
            />
            <div className="image-notes">
                Moderation of the relationship between loot box spending and problem gambling by various factors.
            </div>
        </div>
        <p>
            A Spearman rank correlation result showed some correlation between loot box spending and impulsivity as well as a significant relationship between microtransactions spending and problem gambling; however, there are some caveats for both results. The researchers conducted a qualitative analysis of the motivations behind participants who purchased a loot box in the past month, i.e. 468, and below is a table of their motivations to purchase a loot box as well as their frequency.
        </p>
        <div className="center-content">
            <Image 
                alt="Adolescents and Loot Boxes Table 2"
                fluid
                src={ImageAdoLootBox2}
            />
            <div className="image-notes">
                Prevalence of motivations for buying loot boxes within the sample of older adolescents.
            </div>
        </div>
        <p>
            The evidence establishes a link between loot box spending and problem gambling in older adolescents. While these results are statistically significant, their true importance lies in the effect size associated with them, i.e. the relationship between loot box spending and problem gambling is of moderate-to-large magnitude which is an order of magnitude larger than the relationship between problem gambling and risk factors such as alcohol dependence. The effect size is what commonly indicates practical, real-world significance. The researchers also point out that the severity of this relationship appears larger than in adult populations. Ultimately, this is correlational analysis, and experimental and longitudinal work is needed to understand the ‘chicken-or-the-egg’ relationship between spending on loot boxes and problem gambling behaviors. The researchers also suggest ways to mitigate problem gambling risks, such as through rating agency restrictions or national and federal authorities placing regulations on loot boxes.
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

export default AdolescentsLootBoxes;