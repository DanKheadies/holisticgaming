import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import { Player } from 'video-react';

import './PixaTool.scss';
import Aux from '../../../hoc/Aux/Aux';
import AccordionCard from '../../UI/AccordionCard/AccordionCard';
import CustomCarousel from '../../UI/CustomCarousel/CustomCarousel';
import GifDrone from '../../../assets/images/pixatool/gifs/Drone1-8bit.gif';
import GifHeroes from '../../../assets/images/pixatool/gifs/MoreHeroes-8bit.gif';
import GifMountains from '../../../assets/images/pixatool/gifs/Mountains-8bit.gif';
import GifTree from '../../../assets/images/pixatool/gifs/TreeTunnel-8bit.gif';
import PicDarthMauls from '../../../assets/images/pixatool/pictures/dank-maul.jpg';
import PicDarthMaul1a from '../../../assets/images/pixatool/pictures/maul-1a.jpg';
import PicDarthMaul1b from '../../../assets/images/pixatool/pictures/maul-1b.png';
import PicDarthMaul1c from '../../../assets/images/pixatool/pictures/maul-1c.png';
import PicDarthMaul2a from '../../../assets/images/pixatool/pictures/maul-2a.png';
import PicDarthMaul2b from '../../../assets/images/pixatool/pictures/maul-2b.png';
import PicDarthMaul2c from '../../../assets/images/pixatool/pictures/maul-2c.png';
import PicDarthMaul3a from '../../../assets/images/pixatool/pictures/maul-3a.png';
import PicDarthMaul3b from '../../../assets/images/pixatool/pictures/maul-3b.png';
import PicDarthMaul3c from '../../../assets/images/pixatool/pictures/maul-3c.png';
import PicDavid0 from '../../../assets/images/pixatool/pictures/david.jpg';
import PicDavid1 from '../../../assets/images/pixatool/pictures/david-pixel.png';
import PicFatTissue0 from '../../../assets/images/pixatool/pictures/adipose.jpg';
import PicFatTissue1 from '../../../assets/images/pixatool/pictures/adipose.png';
import PicJC0 from '../../../assets/images/pixatool/pictures/jc-small.JPG';
import PicJC1 from '../../../assets/images/pixatool/pictures/jc-small-pixel.png';
import PicJCColors0 from '../../../assets/images/pixatool/pictures/jc-colors.JPEG';
import PicJCColors1 from '../../../assets/images/pixatool/pictures/jc-colors-pixel.png';
import PicJennifer0 from '../../../assets/images/pixatool/pictures/face-og.jpg';
import PicJennifer1 from '../../../assets/images/pixatool/pictures/face-pixel.png';
import PicJennifer2 from '../../../assets/images/pixatool/pictures/face-pixel-index-13.png';
import PicJennifer3 from '../../../assets/images/pixatool/pictures/face-pixel-index-8.png';
import PicJennifer4 from '../../../assets/images/pixatool/pictures/face-pixel-index-5.png';
import PicJennifer5 from '../../../assets/images/pixatool/pictures/face-pixel-index-3.png';
import PicPokemon0 from '../../../assets/images/pixatool/pictures/pokemon-starts-0-og.jpg';
import PicPokemon1 from '../../../assets/images/pixatool/pictures/pokemon-starts-1-10x.jpg';
import PicPokemon2 from '../../../assets/images/pixatool/pictures/pokemon-starts-2-12x.jpg';
import PicPokemon3 from '../../../assets/images/pixatool/pictures/pokemon-starts-3-12x-simpleBucket.jpg';
import PicPokemon4 from '../../../assets/images/pixatool/pictures/pokemon-starts-4-12x-index24.jpg';
import PicPokemon5 from '../../../assets/images/pixatool/pictures/pokemon-starts-5-12x-index69.jpg';
import PicPokemon6 from '../../../assets/images/pixatool/pictures/pokemon-starts-6-12x-index&bucket.jpg';
import PicPokemon7 from '../../../assets/images/pixatool/pictures/pokemon-starts-7-12x-greyscale.jpg';
import PicTsarWars from '../../../assets/images/pixatool/pictures/tsar-wars.png';
import PicYusuke0 from '../../../assets/images/pixatool/pictures/face-0.jpg';
import PicYusuke1 from '../../../assets/images/pixatool/pictures/face-1.png';
import PicYusuke2 from '../../../assets/images/pixatool/pictures/face-2.png';
import PicYusuke3 from '../../../assets/images/pixatool/pictures/face-3.png';
import PicYusuke4 from '../../../assets/images/pixatool/pictures/face-4.png';
import PicYusuke5 from '../../../assets/images/pixatool/pictures/face-5.png';
import PicYusuke6 from '../../../assets/images/pixatool/pictures/face-6.png';
import PicYusuke7 from '../../../assets/images/pixatool/pictures/face-7.png';
import PicYusuke8 from '../../../assets/images/pixatool/pictures/face-8.png';
import PicYusuke9 from '../../../assets/images/pixatool/pictures/face-9.png';
import PicYusuke10 from '../../../assets/images/pixatool/pictures/face-10.png';
import PicYusuke11 from '../../../assets/images/pixatool/pictures/face-11.png';
import PicYusuke12 from '../../../assets/images/pixatool/pictures/face-12.png';
import QuotesBar from '../../UI/QuotesBar/QuotesBar';
import ScrollArrow from '../../UI/ScrollArrow/ScrollArrow';
import VidPoster2020 from '../../../assets/images/pixatool/video-posters/2020TheGame-8bit.png';
import VidPosterAdventure from '../../../assets/images/pixatool/video-posters/AdventureWave-8bit.png';
import VidPosterBotw from '../../../assets/images/pixatool/video-posters/botw-8bit.png';
import VidPosterDragonHouse from '../../../assets/images/pixatool/video-posters/DragonHouse-8bit.png';
import VidPosterEgg from '../../../assets/images/pixatool/video-posters/TheEgg-8bit.png';
import VidPosterHalo from '../../../assets/images/pixatool/video-posters/Halo-8bit.png';
import VidPosterMajora from '../../../assets/images/pixatool/video-posters/MajorasMask-8bit.png';
import VidPosterMarvel from '../../../assets/images/pixatool/video-posters/MarvelMashup-8bit.png';
import VidPosterSacrifice from '../../../assets/images/pixatool/video-posters/Sacrifice-8bit.png';
import VidPosterSmash from '../../../assets/images/pixatool/video-posters/SmashWars-8bit.png';
import VidPosterSUCCredits from '../../../assets/images/pixatool/video-posters/SUCCredits-8bit.png';
import VidPosterWaterwave from '../../../assets/images/pixatool/video-posters/Waterwave-8bit.png';
import VidPosterWest from '../../../assets/images/pixatool/video-posters/WesterosWorld-8bit.png';
import VidPosterWotLK1 from '../../../assets/images/pixatool/video-posters/WotLK-OG-8bit.png';
import VidPosterWotLK2 from '../../../assets/images/pixatool/video-posters/wotlk-8bit.png';

const PixaTool = () => (
    <Aux>
        <QuotesBar />
        <Container className="pixatool">
            <Row>
                <Col>
                    <p>
                        <a className="primary-link" href="../." alt="HolisticGaming">HolisticGaming.com</a> does not own the rights to any of the following video, music or content. They are for training with <a className="primary-link" href="https://kronbits.itch.io/pixatool" alt="PixaTool">PixaTool</a>. Ordered by creation date.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion>
                        <AccordionCard
                            centered
                            eventKey="0"
                            title="Videos"
                        >
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterBotw}
                                    src="/videos/botw-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=zw47_q9wbBE" alt="The Legend of Zelda: Breath of the Wild">The Legend of Zelda: Breath of the Wild</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterWotLK1}
                                    src="/videos/WotLK-OG-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=BCr7y4SLhck" alt="World of Warcraft: Wrath of the Lich King">World of Warcraft: Wrath of the Lich King</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterWotLK2}
                                    src="/videos/wotlk-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=BCr7y4SLhck" alt="World of Warcraft: Wrath of the Lich King">World of Warcraft: Wrath of the Lich King</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterDragonHouse}
                                    src="/videos/DragonHouse-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=Yr4g0jdaSC0" alt="The Tonight Show ft. Dragon House - Chuck E. Cheese Challenge">The Tonight Show ft. Dragon House - Chuck E. Cheese Challenge</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterMarvel}
                                    src="/videos/MarvelMashup-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=kVZSdyZ7Ft4" alt="BattleScones's Marvel Homage">BattleScones's Marvel Homage</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterMajora}
                                    src="/videos/MajorasMask-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=vbMQfaG6lo8" alt="EmberLab's Majora's Mask - Terrible Fate">EmberLab's Majora's Mask - Terrible Fate</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterWest}
                                    src="/videos/WesterosWorld-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.reddit.com/r/freefolk/comments/brm3ky/what_is_the_point_of_it_get_a_couple_of_cheap/" alt="EvilPlottingDinosaur's Westeros World">EvilPlottingDinosaur's Westeros World</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterSmash}
                                    src="/videos/SmashWars-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=YKL5tviGvIc" alt="PushingButtons's Super Smash Bros: Infinity War">PushingButtons's Super Smash Bros: Infinity War</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterHalo}
                                    src="/videos/Halo-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=wuSu6q7fuq4" alt="Halo's Main Menu">Halo's Main Menu</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterWaterwave}
                                    src="/videos/Waterwave-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=cZmJalYNLc0" alt="Akira the Don's What the Hell is Water? ft. David Foster Wallace">Akira the Don's What the Hell is Water? ft. David Foster Wallace</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterAdventure}
                                    src="/videos/AdventureWave-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=CW0tx_Ok63k&t=680s" alt="Akira the Don's AdventureWave">Akira the Don's AdventureWave</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterSacrifice}
                                    src="/videos/Sacrifice-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=Ll2gdKHXOYc" alt="Akira the Don's Sacrifice ft. Jordan Peterson">Akira the Don's Sacrifice ft. Jordan Peterson</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterEgg}
                                    src="/videos/TheEgg-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=h6fcK_fRYaI" alt="Kurzgesagt's The Egg by Andy Weir">Kurzgesagt's The Egg by Andy Weir</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPoster2020}
                                    src="/videos/2020TheGame-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.reddit.com/r/NatureIsFuckingLit/comments/f7v2at/puddle_that_looks_like_earth_from_space/" alt="Prob MrCheapCheap via Reddit">Prob MrCheapCheap via Reddit</a>
                            </div>
                            <div className="media-container">
                                <Player
                                    className="pixatool-media"
                                    playsInline
                                    poster={VidPosterSUCCredits}
                                    src="/videos/SUCCredits-8bit.mp4"
                                />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=UMoxeTVQgCs" alt="Steven Universe Car Credits by annapantsu">Steven Universe Car Credits by annapantsu</a>
                            </div>
                        </AccordionCard>
                        <AccordionCard
                            centered
                            eventKey="1"
                            title="Gifs"
                        >
                            <div className="media-container">
                                <Image
                                    alt="Psyklon's Tree Tunnel"
                                    className="pixatool-gif"
                                    src={GifTree}
                                />
                                <br />
                                <a className="primary-link" href="https://giphy.com/gifs/loop-trippy-psychedelic-3ohzdI93VXikuYs8Mw" alt="Psyklon's Tree Tunnel">Psyklon's Tree Tunnel</a>
                            </div>
                            <div className="media-container">
                                <Image
                                    alt="Xpotentialdesign's Mountains Flyover"
                                    className="pixatool-gif"
                                    src={GifMountains}
                                />
                                <br />
                                <a className="primary-link" href="https://giphy.com/gifs/kimPrHNUDksc14FXCB" alt="Xpotentialdesign's Mountains Flyover">Xpotentialdesign's Mountains Flyover</a>
                            </div>
                            <div className="media-container">
                                <Image
                                    alt="Dan Kheadies's DBS More Heroes Mashup"
                                    className="pixatool-gif"
                                    src={GifHeroes}
                                />
                                <br />
                                <a className="primary-link" href="https://www.youtube.com/watch?v=-2Js8lo4pKs" alt="Dan Kheadies's DBS More Heroes Mashup">Dan Kheadies's DBS More Heroes Mashup</a>
                            </div>
                            <div className="media-container">
                                <Image
                                    alt="Minchan Kim's Drone Piloting"
                                    className="pixatool-gif"
                                    src={GifDrone}
                                />
                                <br />
                                <a className="primary-link" href="https://www.instagram.com/p/BtLgPInnUW8/" alt="Minchan Kim's Drone Piloting">Minchan Kim's Drone Piloting</a>
                            </div>
                        </AccordionCard>
                        <AccordionCard
                            centered
                            eventKey="2"
                            title="Photos"
                        >
                            <CustomCarousel
                                class="carousel"
                                controls={false}
                                fade={false}
                                indicators={false}
                                interval={null}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "Tsar Wars": {
                                        image: PicTsarWars,
                                        caption: "Alleman's Jedi Templar Knight",
                                        link: "https://www.deviantart.com/alleman/art/Jedi-Templar-Knight-161108356"
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={5000}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "Darth Mauls": {
                                        image: PicDarthMauls,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul OG": {
                                        image: PicDarthMaul1a,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 1b": {
                                        image: PicDarthMaul1b,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 1c": {
                                        image: PicDarthMaul1c,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 2a": {
                                        image: PicDarthMaul2a,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 2b": {
                                        image: PicDarthMaul2b,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 2c": {
                                        image: PicDarthMaul2c,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 3a": {
                                        image: PicDarthMaul3a,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 3b": {
                                        image: PicDarthMaul3b,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    },
                                    "Darth Maul 3c": {
                                        image: PicDarthMaul3c,
                                        caption: "Bazaine's Darth Maul",
                                        link: "https://www.reddit.com/r/StarWars/comments/fu7nh4/i_just_drew_maul_with_this_one_i_took_quite_a_lot/"
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={4200}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "Fat Tissue OG": {
                                        image: PicFatTissue0,
                                        caption: "sciencephotolibrary's Fat tissue, SEM",
                                        link: "https://www.sciencephoto.com/media/439930/view"
                                    },
                                    "Fat Tissue Pixa": {
                                        image: PicFatTissue1,
                                        caption: "sciencephotolibrary's Fat tissue, SEM",
                                        link: "https://www.sciencephoto.com/media/439930/view"
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={4200}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "David": {
                                        image: PicDavid0,
                                        caption: "me",
                                        link: "../squad/david"
                                    },
                                    "David Pixel": {
                                        image: PicDavid1,
                                        caption: "me",
                                        link: "../squad/david"
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={4200}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "JC": {
                                        image: PicJC0,
                                        caption: "JC",
                                        link: ""
                                    },
                                    "JC Pixel": {
                                        image: PicJC1,
                                        caption: "JC",
                                        link: ""
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={4200}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "JC Colors": {
                                        image: PicJCColors0,
                                        caption: "JC Colors",
                                        link: ""
                                    },
                                    "JC Colors Pixel": {
                                        image: PicJCColors1,
                                        caption: "JC Colors",
                                        link: ""
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={2000}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "Yusuke 0": {
                                        image: PicYusuke0,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 1": {
                                        image: PicYusuke1,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 2": {
                                        image: PicYusuke2,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 3": {
                                        image: PicYusuke3,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 4": {
                                        image: PicYusuke4,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 5": {
                                        image: PicYusuke5,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 6": {
                                        image: PicYusuke6,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 7": {
                                        image: PicYusuke7,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 8": {
                                        image: PicYusuke8,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 9": {
                                        image: PicYusuke9,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 10": {
                                        image: PicYusuke10,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 11": {
                                        image: PicYusuke11,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    },
                                    "Yusuke 12": {
                                        image: PicYusuke12,
                                        caption: "markolios's Yusuke Urameshi",
                                        link: "https://www.deviantart.com/markolios/art/Yusuke-Urameshi-643390337"
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={2000}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "Jennifer 0": {
                                        image: PicJennifer0,
                                        caption: "jenniferannistn's jennifer aniston",
                                        link: "https://twitter.com/jenniferannistn/status/1011859750869274625"
                                    },
                                    "Jennifer 1": {
                                        image: PicJennifer1,
                                        caption: "jenniferannistn's jennifer aniston",
                                        link: "https://twitter.com/jenniferannistn/status/1011859750869274625"
                                    },
                                    "Jennifer 2": {
                                        image: PicJennifer2,
                                        caption: "jenniferannistn's jennifer aniston",
                                        link: "https://twitter.com/jenniferannistn/status/1011859750869274625"
                                    },
                                    "Jennifer 3": {
                                        image: PicJennifer3,
                                        caption: "jenniferannistn's jennifer aniston",
                                        link: "https://twitter.com/jenniferannistn/status/1011859750869274625"
                                    },
                                    "Jennifer 4": {
                                        image: PicJennifer4,
                                        caption: "jenniferannistn's jennifer aniston",
                                        link: "https://twitter.com/jenniferannistn/status/1011859750869274625"
                                    },
                                    "Jennifer 5": {
                                        image: PicJennifer5,
                                        caption: "jenniferannistn's jennifer aniston",
                                        link: "https://twitter.com/jenniferannistn/status/1011859750869274625"
                                    }
                                }}
                            />
                            <CustomCarousel
                                class="last-carousel"
                                controls={true}
                                fade={true}
                                indicators={false}
                                interval={3000}
                                keyboard={false}
                                slide={false}
                                items={{
                                    "Pokemon Starters 0": {
                                        image: PicPokemon0,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 1": {
                                        image: PicPokemon1,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 2": {
                                        image: PicPokemon2,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 3": {
                                        image: PicPokemon3,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 4": {
                                        image: PicPokemon4,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 5": {
                                        image: PicPokemon5,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 6": {
                                        image: PicPokemon6,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    },
                                    "Pokemon Starters 7": {
                                        image: PicPokemon7,
                                        caption: "Squiffybodge's Pokemon Starters",
                                        link: "https://www.reddit.com/r/gaming/comments/ec0y56/pokemon_starters_made_from_layers_of_paper/"
                                    }
                                }}
                            />
                        </AccordionCard>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        <ScrollArrow />
    </Aux>
);

export default PixaTool;