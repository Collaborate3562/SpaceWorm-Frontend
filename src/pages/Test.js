import "../assets/css/templates/home.scss";
import Button from "../components/atoms/Button";
import { CarouselScreenshotSlider } from "../components/molecules/CarouselSlider";
import video from "./../assets/img/game-video.mp4";
import SpaceWormsLogo from "./../assets/img/20.png";
import homefirstimg5 from "./../assets/img/1.png";
import homebuttonimg1 from "./../assets/img/b_1.png";
import homebuttonimg2 from "./../assets/img/b2.png";
import homebuttonimg3 from "./../assets/img/b3.png";
import homesecondimg1 from "./../assets/img/5.png";
import roadmapH from "./../assets/img/ROADMAPHORIZONTAL.png";
import roadmapV from "./../assets/img/ROADMAPVERTICAL.png";
import Logo from "components/atoms/Logo";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../util/interact.js";
import { Link, useNavigate } from "react-router-dom";
import CrossIcon from "components/atoms/icons/cross";
import HamburguerIcon from "components/atoms/icons/hamburguer";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "assets/css/templates/header-home.scss";
import "assets/css/templates/footer-home.scss";
import screenshot1 from "assets/img/ss1.png";
import screenshot2 from "assets/img/ss2.png";
import screenshot3 from "assets/img/ss3.png";
import screenshot4 from "assets/img/ss4.png";
import teamMember1 from "assets/img/t1.png";
import teamMember2 from "assets/img/t2.png";
import teamMember3 from "assets/img/t3.png";
import developersLogo from "assets/img/NT-Logo-med.png";
import awsLogo from "assets/img/awslogo.png";
import footerimg7 from "assets/img/12.png";
import footerimg8 from "assets/img/13.png";
import footerimg9 from "assets/img/21.png";
import dcBlack from "assets/img/dc_black.png";
import tgBlack from "assets/img/telegram_black.png";
import twBlack from "assets/img/tw_black.png";
import ytBlack from "assets/img/youtube_black.png";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";
import ReactVisibilitySensor from "react-visibility-sensor";

import sdLogo from "assets/img/sd.png";

import useWindowDimensions from "./../components/atoms/useWindowsDimensions";
import YouTube from "react-youtube";

export const TestPage = () => {
  const { height, width } = useWindowDimensions();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const [isOpenSS, setOpenSS] = useState(0);

  const [socialMediaVisible, setSocialMediaVisible] = useState(false);
  function handleClickSS(value) {
    setOpenSS(value);
    setModalOpen(true);
  }
  // the Modal
  const ShowSSModal = () => {
    return (
      <>
        <div className="modal-wrapper">
          <div className="grid place-center">
            {isOpenSS === 1 ? (
              <>
                <div className="fs-screenshot">
                  <div className="close-action">
                    <button onClick={() => setModalOpen(false)}>X</button>
                  </div>
                  <img src={screenshot1} alt="screenshot1" />
                </div>
              </>
            ) : isOpenSS === 2 ? (
              <>
                <div className="fs-screenshot">
                  <div className="close-action">
                    <button onClick={() => setModalOpen(false)}>X</button>
                  </div>
                  <img src={screenshot2} alt="screenshot2" />
                </div>
              </>
            ) : isOpenSS === 3 ? (
              <>
                <div className="fs-screenshot">
                  <div className="close-action">
                    <button onClick={() => setModalOpen(false)}>X</button>
                  </div>
                  <img src={screenshot3} alt="screenshot3" />
                </div>
              </>
            ) : isOpenSS === 4 ? (
              <>
                <div className="fs-screenshot">
                  <div className="close-action">
                    <button onClick={() => setModalOpen(false)}>X</button>
                  </div>
                  <img src={screenshot4} alt="screenshot4" />
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  };

  //
  function onChange(isVisible) {
    isVisible ? setSocialMediaVisible(false) : setSocialMediaVisible(true);
  }
  return (
    <>
      {modalOpen ? <ShowSSModal /> : ""}

      <main>
        {/* inicio */}
        <div className="hero">
          <header>
            <div className="header-container">
              <div className="header flex-wrapper">
                <div className="header-left">
                  <Logo alt="SPACE WORMS" className="img-logo" />
                </div>
                <div className="header-right flex-wrapper direction-column">
                  <div className="ml-auto mr-2 topnav-area">
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Próximamente</span>}
                    >
                      <Link to="/#0" className="topnav-button">
                        Marketplace
                      </Link>
                    </Tooltip>
                  </div>
                  <nav>
                    <ul>
                      <li className="desktop-only header-link">
                        <AnchorLink href="/" rel="author">
                          Inicio
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#intro" rel="author">
                          Introduccion
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#trailer" rel="author">
                          Trailer
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#roadmap" rel="author">
                          Roadmap
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#screenshots" rel="author">
                          Screenshots
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <AnchorLink href="#team" rel="author">
                          Equipo
                        </AnchorLink>
                      </li>
                      <li className="desktop-only header-link">
                        <a
                          href="https://docs.spaceworms.app/"
                          rel="author"
                          target={"blank"}
                        >
                          Whitepaper
                        </a>
                      </li>
                      <li>
                        <Tooltip
                          placement="bottom"
                          trigger={["click"]}
                          overlay={<span>Juego Próximamente!</span>}
                        >
                          <Button>
                            JUGAR AHORA <BsFillArrowRightCircleFill />
                          </Button>
                        </Tooltip>
                      </li>
                      <li className="mobile-only">
                        <Button
                          onClick={handleToggle}
                          className="buttonHamburguerStyles"
                        >
                          {navbarOpen ? <CrossIcon /> : <HamburguerIcon />}
                        </Button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div className="left-right-flex ">
            <div className="left">
              <div className="leftrightinnerdiv">
                <img
                  src={SpaceWormsLogo}
                  className="home-img"
                  alt="spaceworms"
                  style={{ width: height - 150 }}
                />
                <p className="homeparag1">
                  Videojuego blockchain inspirado en slither.io
                </p>
                <p>Conviertete en el gusano Nº1 y obten grandes recompensas</p>
                <div className="homefirstbuttondiv">
                  <div className="mx-auto devices-container">
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Juego Próximamente!</span>}
                    >
                      <Button className="homefirstbutton1">
                        <img src={homebuttonimg1} alt="mobile, windows, mac" />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Juego Próximamente!</span>}
                    >
                      <Button className="homefirstbutton1">
                        <img src={homebuttonimg2} alt="mobile, windows, mac" />
                      </Button>
                    </Tooltip>
                    <Tooltip
                      placement="bottom"
                      trigger={["click"]}
                      overlay={<span>Juego Próximamente!</span>}
                    >
                      <Button className="homefirstbutton1">
                        <img src={homebuttonimg3} alt="mobile, windows, mac" />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
            <div className="right homesecondarea">
              <div className="leftrightinnerdiv">
                <img
                  src={homefirstimg5}
                  className="home-img"
                  alt=""
                  style={{ width: height - 150 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* intro */}
        <div className={`box-with-borders2 grid place-center intro`}>
          {/*  */}
          <div className="container second-section">
            <div className="left-right-flex" id="intro">
              <div className="left">
                <img src={homesecondimg1} className="homesecondimg1" alt="" />
              </div>
              <div className="right">
                <h2 className="hidden">Introduccion</h2>
                <p>
                  Una peligrosa raza Alienígena amenaza con destruir todo a su
                  paso para controlar la Fuerza Cósmica y la última esperanza
                  para enfrentarlos son los Gusanos Espaciales.
                </p>
                <p className="mt-2">
                  En Space Worms podrás ser parte de esta Guerra Espacial contra
                  los Loriks en un videojuego que te brindará horas
                  interminables de diversión además de generar ingresos
                  ilimitados. No te pierdas la oportunidad de unirte a esta
                  lucha para salvar al Universo usando la fuerza del Sol y las
                  Estrellas, mejorando a tu gusano, resolviendo misiones
                  diarias, o sencillamente enfréntate a otros.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="homethirdarea grid place-center trailer" id="trailer">
          <div className="container third-area">
            <div className="left-right-flex small-container-for-mobiles">
              <div className="left">
                <h2 className="hidden">Trailer</h2>
                <p className="thirdareatitle">
                  Salva el universo y obten grandes recompensas
                </p>
              </div>
              <div className="right video-right">
                <Video />
              </div>
            </div>
          </div>
        </div>
        {/* roadmap */}
        <div className="homefourtharea roadmap" id="roadmap">
          <div className="container ">
            <div
              className="small-container-for-mobiles"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h2 className="text-shadow">ROAD MAP</h2>
              <div className="m-auto px-1 roadmap-mobile-flex">
                <div className="">
                  <div className="roadmapqinfo-top large-devices">
                    <div>
                      <ul>
                        <li>Idea y economía del juego</li>
                        <li>Contratación de equipo</li>
                        <li>Diseño e ilustración</li>
                        <li className="h2 mt-1">2021</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Staking</li>
                        <li>Marketplace</li>
                        <li>Sistema de clanes o gremios</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>Minijuegos</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                  </div>
                  <div className="roadmapqinfo-left small-and-medium-devices">
                    <div>
                      <ul>
                        <li>Lanzamiento sitio web</li>
                        <li>Preventa de NFT</li>
                        <li>Auditorías</li>
                        <li>Preventa de token</li>
                        <li>Alpha del juego</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Salas personalizadas</li>
                        <li>Eventos</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>Alquiler de NFT</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                  </div>
                  <img
                    src={roadmapH}
                    alt="roadmap"
                    className=" img-fluid large-devices"
                  />
                  <img
                    src={roadmapV}
                    alt="roadmap"
                    className="small-and-medium-devices roadmap-vertical-img"
                  />
                  <div className="roadmapqinfo-right small-and-medium-devices">
                    <div>
                      <ul>
                        <li>Idea y economía del juego</li>
                        <li>Contratación de equipo</li>
                        <li>Diseño e ilustración</li>
                        <li className="h2 mt-1">2021</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Staking</li>
                        <li>Marketplace</li>
                        <li>Sistema de clanes o gremios</li>
                        <li className="h2 mt-1">2022</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li>Minijuegos</li>
                        <li className="h2 mt-1">2022</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                  </div>
                  <div className="roadmapqinfo-bottom large-devices">
                    <div>
                      <ul>
                        <li className="h2 mt-1">2022</li>
                        <li>Lanzamiento sitio web</li>
                        <li>Preventa de NFT</li>
                        <li>Auditorías</li>
                        <li>Preventa de token</li>
                        <li>Alpha del juego</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="h2 mt-1">2022</li>
                        <li>Salas personalizadas</li>
                        <li>Eventos</li>
                      </ul>
                    </div>
                    <div>
                      <ul>
                        <li className="h2 mt-1">2022</li>
                        <li>Alquiler de NFT</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* screenshots */}
        <div className="  homefiftharea screenshots" id="screenshots">
          <div className="container">
            <div className="">
              <h2 className="hidden">Screenshots</h2>
              <div className="text-shadow">Screenshots</div>
              <div className="slider-two">
                <CarouselScreenshotSlider
                  handleImageClickSS1={() => handleClickSS(1)}
                  handleImageClickSS2={() => handleClickSS(2)}
                  handleImageClickSS3={() => handleClickSS(3)}
                  handleImageClickSS4={() => handleClickSS(4)}
                />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </main>
      <footer className="">
        {/*  */}
        <div className="footerfirstarea container team" id="team">
          <span className=" text-shadow">Equipo</span>
          <div className="footerimgsdiv my-3">
            <div className="footerimgs">
              <img src={teamMember2} alt="john doe" />
              <div>Brayan Suniaga</div>
              <div>Inversor y creador de contenido</div>
            </div>
            <div className="footerimgs">
              <img src={teamMember3} alt="john doe" />
              <div>Neydua Sierra</div>
              <div>Ingeniero e inversor de NFT</div>
            </div>
            <div className="footerimgs sm-my-3">
              <img src={teamMember1} alt="john doe" />
              <div>Abraham Leon</div>
              <div>Empresario y entusiasta de las criptomonedas</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footersecondarea">
          <div className="container">
            <div className="footersecondchilddivs">
              <p>Partners</p>
              <img src={sdLogo} alt="partner" style={{ marginTop: "-25px" }} />
            </div>
            <div className="footersecondchilddivs">
              <p>Developers</p>
              <img src={developersLogo} alt="N&T Negocios y Tecnologías" />
              <div>Desarrollado por N&T Negocios y Tecnologías s.r.l.</div>
            </div>
          </div>
        </div>
        <div className="footerthirdarea">
          <div className="footerthirdimgs1 ">
            <div className="mx-auto">
              <img src={awsLogo} alt="Amazon Web Store" />
              <img src={footerimg7} alt="partner" />
              <img src={footerimg8} className="thirdimg" alt="partner" />
              <img src={footerimg9} alt="partner" />
            </div>
          </div>
          <ReactVisibilitySensor onChange={onChange}>
            <div className="footerthirdimgs2">
              <a href="https://discord.com/invite/spaceworms" target={"blank"}>
                <img src={dcBlack} alt="discord" />
              </a>
              <a href="https://t.me/spaceworms" target={"blank"}>
                <img src={tgBlack} alt="telegram" />
              </a>
              <a href="https://twitter.com/spacewormsnft" target={"blank"}>
                <img src={twBlack} alt="twitter" />
              </a>
              <a href="https://www.youtube.com/c/TioDiamond" target={"blank"}>
                <img src={ytBlack} alt="Youtube" />
              </a>
            </div>
          </ReactVisibilitySensor>
        </div>
        <div className="legal">
          <a href="/condiciones" alt="terms">
            Condiciones de uso
          </a>{" "}
          /{" "}
          <a href="/privacidad" alt="terms">
            Política de privacidad
          </a>
        </div>
      </footer>
    </>
  );
};
const Video = () => {
  return (
    <>
      {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Sf8jxnV87kE"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen={true}
          style={{ minHeight: "365px" }}
        ></iframe> */}
      <YouTube videoId={"Sf8jxnV87kE"} />
    </>
  );
};
