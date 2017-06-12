// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  S,
  Image,
  Layout,
  Fill
} from "spectacle";
import FlipExplanation from "./flip-explanation";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  browserflow: require("../assets/webkitflow.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "#222222",
    secondary: "#b7e770",
    tertiary: "#FFFFFF",
    quaternary: "#777777"
  },
  {
    primary: "Montserrat",
    secondary: {
      name: "Open Sans Condensed",
      googleFont: true,
      styles: ["400", "700i"]
    }
  }
);

theme.screen.components.heading.h1.color = theme.screen.colors.secondary;
theme.screen.components.heading.h1.lineHeight = 1.3;
theme.screen.components.heading.h2.color = theme.screen.colors.secondary;
theme.screen.components.heading.h2.lineHeight = 1.3;
theme.screen.components.heading.h3.color = theme.screen.colors.secondary;
theme.screen.components.heading.h3.lineHeight = 1.3;
theme.screen.components.text.color = theme.screen.colors.tertiary;
theme.print.components.text.color = theme.print.colors.tertiary;

const appearDuration = 100;
const transitionDuration = 80;

const parentColor = "#777";
const childColor = "#b7e770";
const grandChildColor = "#fff";

const layoutWidth = 16;
const marginWidth = 16;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["fade"]}
        transitionDuration={transitionDuration}
        theme={theme}
        controls={false}
        progress="none"
      >
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading caps textSize="3em">
            Animations performantes
          </Heading>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="1.5em">
            Julien Pradet
          </Heading>
          <Heading
            textSize="0.8em"
            textColor="quaternary"
            margin="1.4em 0 1em 0"
          >
            <a
              href="https://www.julienpradet.fr/"
              style={{ color: "inherit", display: "block" }}
            >
              https://www.julienpradet.fr/
            </a>
            <a
              href="https://twitter.com/JulienPradet"
              style={{ color: "inherit", display: "block", marginTop: "0.6em" }}
            >
              @JulienPradet
            </a>
          </Heading>
          <Heading textSize="0.8em" textColor="quaternary">
            <a href="https://occitech.fr/" style={{ color: "inherit" }}>
              @Occitech
            </a>
          </Heading>
        </Slide>
        <Slide
          margin="1em 0 0 0"
          maxWidth="auto"
          align="center flex-start"
          notes="ce retard est historique"
        >
          <Heading textSize="1.4em" textColor="secondary">
            Pourquoi ça m'intéresse ?
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
              Dernier levier vs les Apps natives
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="1em" margin="2em 0 0 0">
              Choisir en fonction du besoin<br />
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="1em" margin="0.3em 0 0 0">
              Pas en fonction des possibilités
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary">
            Animations
          </Heading>
          <Heading textColor="tertiary" textSize="2.5em" margin="0 0 0 0">
            Performantes
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="1em" margin="1em 0 0 0">
              = 60fps
              <div
                style={{
                  fontSize: "0.8em",
                  marginTop: "0.3em",
                  color: "#777777"
                }}
              >
                = 60 images / 1 s
              </div>
              <div
                style={{
                  fontSize: "0.8em",
                  marginTop: "0.3em",
                  color: "#777777"
                }}
              >
                = 1 image / 16.67 ms
              </div>
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Text textColor="tertiary">Solution :</Text>
          <Heading textSize="1.5em" margin="0.6em 0 0 0" textColor="secondary">
            Devenir pote<br />avec le navigateur
          </Heading>
        </Slide>
        <Slide margin="1em 0 0 0" align="center flex-start" maxWidth="auto">
          <Heading textSize="1.5em" textColor="secondary" margin="0 0 0.6em 0">
            Comment fonctionne un navigateur ?
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="quaternary" textSize="0.8em" margin="0.6em 0 0 0">
              <a
                style={{ color: "inherit" }}
                href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/"
              >
                <Image src={images.browserflow} width="20em" /><br />
                Source&nbsp;: html5rocks
              </a>
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" align="center flex-start" maxWidth="auto">
          <Heading textSize="1.5em" textColor="secondary">
            Important pour animer&nbsp;?
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" margin="0.6em 0 0 0">
              Layout
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" margin="0.6em 0 0 0">
              Painting
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="1.5em">
            Layout
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 2em 0">
            = calcul de la position du DOM
          </Text>
          <Layout>
            <Fill>
              <Appear transitionDuration={appearDuration}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={`${layoutWidth}em`}
                  height={`${layoutWidth * 181 / 581}em`}
                  viewBox="0 0 581 181"
                >
                  <g transform="translate(.5 .5)" pointerEvents="none">
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M96 44L65.16 66.27"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M60.91 69.35l3.62-6.94.63 3.86 3.47 1.81z"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M124 44l40.46 22.87"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M169.03 69.45l-7.82-.4 3.25-2.18.19-3.91z"
                    />
                    <ellipse
                      cx="110"
                      cy="30"
                      fill={parentColor}
                      rx="20"
                      ry="20"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M46 104l-21.5 21.5"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M20.79 129.21l2.48-7.43 1.23 3.72 3.72 1.23z"
                    />
                    <ellipse
                      cx="60"
                      cy="90"
                      fill={childColor}
                      rx="20"
                      ry="20"
                    />
                    <ellipse
                      cx="20"
                      cy="150"
                      fill={grandChildColor}
                      rx="20"
                      ry="20"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M156 104l-21.5 21.5"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M130.79 129.21l2.48-7.43 1.23 3.72 3.72 1.23z"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M184 104l21.5 21.5"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M209.21 129.21l-7.43-2.48 3.72-1.23 1.23-3.72z"
                    />
                    <ellipse
                      cx="170"
                      cy="90"
                      fill={childColor}
                      rx="20"
                      ry="20"
                    />
                    <ellipse
                      cx="130"
                      cy="150"
                      fill={grandChildColor}
                      rx="20"
                      ry="20"
                    />
                    <ellipse
                      cx="210"
                      cy="150"
                      fill={grandChildColor}
                      rx="20"
                      ry="20"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M250 90h23.63"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M278.88 90l-7 3.5 1.75-3.5-1.75-3.5z"
                    />
                    <path fill={parentColor} d="M310 0h270v180H310z" />
                    <path
                      fill={childColor}
                      d="M325 20h235v50H325zm0 70h235v70H325z"
                    />
                    <path
                      fill={grandChildColor}
                      d="M340 30h200v30H340zm0 70h100v50H340zm105 0h100v50H445z"
                    />
                  </g>
                </svg>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="1.5em">
            Layout
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
            C'est
            {" "}
            <strong style={{ color: "#b7e770" }}>couteux</strong>
            {" "}
            et
            {" "}
            <strong style={{ color: "#b7e770" }}>à éviter</strong>
          </Text>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 2em 0">
              `margin`, `padding`, `width`, `height`, `float`, etc.
            </Text>
          </Appear>
          <Layout>
            <Fill>
              <Appear transitionDuration={appearDuration}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={`${marginWidth}em`}
                  height={`${marginWidth * 181 / 551}em`}
                  viewBox="0 0 551 181"
                >
                  <g pointerEvents="none">
                    <path fill={parentColor} d="M.5.5h240v130H.5z" />
                    <path
                      fill={childColor}
                      d="M15.5 15.5h75v100h-75zm95 0h110v100h-110z"
                    />
                    <path fill={parentColor} d="M310.5.5h240v180h-240z" />
                    <path
                      fill={childColor}
                      d="M355.5 15.5h75v100h-75zm90 0h85v145h-85z"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M260.5 60.5h23.63"
                    />
                    <path
                      stroke="#777"
                      strokeMiterlimit="10"
                      d="M289.38 60.5l-7 3.5 1.75-3.5-1.75-3.5z"
                    />
                  </g>
                </svg>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="1.5em">
            Layout
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
            Solution :
          </Text>
          <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 2em 0">
            `transform`
          </Text>
          <Layout>
            <Fill>
              <Appear transitionDuration={appearDuration}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={`${marginWidth}em`}
                  height={`${marginWidth * 151 / 551}em`}
                  viewBox="0 0 551 151"
                >
                  <g pointerEvents="none">
                    <path fill={parentColor} d="M.5.5h240v130H.5z" />
                    <path
                      fill={childColor}
                      d="M15.5 15.5h75v100h-75zm95 0h110v100h-110z"
                    />
                    <path
                      fill="none"
                      stroke="#777"
                      stroke-miterlimit="10"
                      d="M260.5 60.5h23.63"
                    />
                    <path
                      stroke="#777"
                      stroke-miterlimit="10"
                      d="M289.38 60.5l-7 3.5 1.75-3.5-1.75-3.5z"
                    />
                    <path fill={parentColor} d="M310.5.5h240v130h-240z" />
                    <path fill={childColor} d="M370.5 50.5h75v100h-75z" />
                    <path fill={childColor} d="M420.5 15.5h110v100h-110z" />
                  </g>
                </svg>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary" margin="0 0 0.5em 0">
            Painting
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
              = mettre à jour l'écran
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary" margin="0 0 0.5em 0">
            Painting
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
            Ca <strong style={{ color: "#b7ee70" }}>peut</strong> être évité
          </Text>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary" margin="0 0 0.5em 0">
            Painting
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
            Solution :
          </Text>
          <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
            `opacity` et `transform`
          </Text>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              + `will-change`
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" margin="0 0 0 0">
            Animation performante
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
            = `transform` + `opacity`
          </Text>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="quaternary" textSize="0.8em" margin="0.6em 0 0 0">
              <a
                href="https://www.julienpradet.fr/posts/des-animations-performantes-1"
                style={{ color: "inherit" }}
              >
                Détails
              </a>
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" margin="0 0 0 0">
            Animation performante
          </Heading>
          <Text textColor="tertiary" textSize="1em" margin="0.6em 0 0 0">
            C'est quand même très limitant !
          </Text>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Text textColor="tertiary" textSize="0.8em" margin="0 0 0.6em 0">
            Une solution pragmatique :
          </Text>
          <Heading textSize="3em" textColor="secondary">
            FLIP
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textSize="1em" textColor="tertiary" margin="0.6em 0 0 0">
              First, Last, Invert, Play
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="quaternary" textSize="0.6em" margin="1em 0 0 0">
              <a
                href="https://aerotwist.com/blog/flip-your-animations/"
                style={{ color: "inherit" }}
              >
                Post originel
              </a>
              <a
                href="https://www.julienpradet.fr/posts/introduction-aux-animations-flips/"
                style={{
                  color: "inherit",
                  display: "block",
                  marginTop: "0.6em"
                }}
              >
                Ou ma version FR
              </a>
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Layout>
            <Fill>
              <FlipExplanation />
            </Fill>
          </Layout>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="3em" textColor="secondary">
            Demo
          </Heading>
          <Text textColor="quaternary" textSize="0.8em" margin="0.6em 0 0 0">
            TODO Lien Github
          </Text>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary">
            Avantages
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Pas besoin de gérer l'animation
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Pratique pour les transitions
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Performant par défaut
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary">
            Inconvénients
          </Heading>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Animer la création/suppression
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Redimensionnements
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Adapter à la structure de son DOM
            </Text>
          </Appear>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
              Animations séquencées
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary">
            Exemples
          </Heading>
          <Text textColor="tertiary" textSize="0.8em" margin="0.6em 0 0 0">
            <a
              href="https://googlechrome.github.io/flipjs/"
              style={{ color: "inherit" }}
            >
              @aerotwist
            </a>
          </Text>
          <Appear transitionDuration={appearDuration}>
            <Text textColor="quaternary" textSize="0.8em" margin="0.6em 0 0 0">
              <a
                href="https://julienpradet.github.io/react-flip/#/complex-transition/1"
                style={{ color: "inherit" }}
              >
                @moi
              </a>
            </Text>
          </Appear>
        </Slide>
        <Slide margin="1em 0 0 0" maxWidth="auto" align="center flex-start">
          <Heading textSize="2em" textColor="secondary">
            Merci
          </Heading>
          <Text textSize="1em" margin="0.6em 0 0 0" textColor="tertiary">
            Des questions ? :)
          </Text>
          <Text textSize="0.6em" textColor="quaternary" margin="1em 0 0 0">
            <a
              href="https://www.julienpradet.fr/"
              style={{ color: "inherit", display: "block" }}
            >
              https://www.julienpradet.fr/
            </a>
            <a
              href="https://twitter.com/JulienPradet"
              style={{ color: "inherit", display: "block", marginTop: "0.6em" }}
            >
              @JulienPradet
            </a>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
