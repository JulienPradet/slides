/* eslint-disable import/no-webpack-loader-syntax */
// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Appear,
  CodePane,
  Code
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  carbonStorybook: require("./assets/carbon-storybook.png"),
  listeStorybook: require("./assets/liste-storybook.png"),
  specsStorybook: require("./assets/specs.png"),
  infoaddon: require("./assets/infoaddon.png"),
  knobs: require("./assets/knobs.png")
};

// Require CSS
require("normalize.css");
require("./custom.css");
require("./prism-vs.css");

const primary = "#222222";
const secondary = "#b7e770";
const theme = createTheme(
  {
    primary: primary,
    secondary: secondary,
    tertiary: "#FFFFFF"
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
theme.screen.global.body.color = theme.screen.colors.secondary;
theme.screen.components.code.color = theme.screen.colors.secondary;
theme.screen.components.code.background = "#545454";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={0}
        theme={theme}
        progress="none"
        controls={false}
      >
        <Slide align="center center">
          <Heading textSize="2.2em" fit>
            <span style={{ color: "#fff" }}>Passer de</span> Storybook
            <br />
            <span style={{ color: "#fff" }}>à un</span> Design System
          </Heading>
        </Slide>
        <Slide align="center center">
          <Heading textSize="2em">Julien Pradet</Heading>
          <Text textSize="1.1em" textColor="tertiary" margin="2em 0 0.5em 0">
            <a
              href="https://twitter.com/JulienPradet"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <span role="img" aria-label="Twitter :">
                🐦
              </span>{" "}
              @JulienPradet{" "}
              <span role="img" aria-label="">
                🐦
              </span>
            </a>
          </Text>
          <Text textSize="1.1em" textColor="tertiary" margin="0.5em 0 0.5em 0">
            <a
              href="https://www.julienpradet.fr/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <span role="img" aria-label="Blog :">
                📖
              </span>{" "}
              https://www.julienpradet.fr/{" "}
              <span role="img" aria-label="">
                📖
              </span>
            </a>
          </Text>
          <Text textSize="0.9em" textColor="tertiary">
            <a
              href="https://occitech.fr/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              @Occitech
            </a>{" "}
            /{" "}
            <a
              href="https://developers.front-commerce.com/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              @Front-Commerce
            </a>
          </Text>
        </Slide>
        <Slide align="center center">
          <Text textSize="2.2em">
            <span style={{ color: "#fff" }}>Pourquoi vous parler de</span>{" "}
            Storybook ?
          </Text>
        </Slide>
        <Slide>
          <Text textSize="1.5em">Référence de l'écosystème React</Text>
          <Image
            height="60vh"
            alt="Screenshot of the storybook of Lonely Planet"
            src={images.listeStorybook}
          />
          <Text>
            <Appear>
              <span>IBM</span>
            </Appear>
            <Appear>
              <span>, Airbnb</span>
            </Appear>
            <Appear>
              <span>, Uber</span>
            </Appear>
            <Appear>
              <span>, Algolia</span>
            </Appear>
            <Appear>
              <span>, ...</span>
            </Appear>
          </Text>
        </Slide>
        <Slide>
          <Text textSize="2em" textColor="secondary" margin="0 0 1em 0">
            Et parce qu'on l'utilise
          </Text>
          <Appear>
            <Text textSize="2em">
              Sur tous nos projets clients
              <br />
            </Text>
          </Appear>
          <Appear>
            <Text textSize="2em">Sur Front-Commerce</Text>
          </Appear>
        </Slide>
        <Slide bgColor="primary" textColor="tertiary">
          <List ordered>
            <ListItem>
              <span style={{ color: secondary }}>Storybook</span>, comment ça
              marche ?
            </ListItem>
            <Appear>
              <ListItem>
                Est-ce vraiment un{" "}
                <span style={{ color: secondary }}>Design System</span> ?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Comment <span style={{ color: secondary }}>faire mieux</span> ?
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text textSize="2em" margin="0 0 0.5em 0">
            Storybook
          </Text>
          <Image
            height="60vh"
            alt="Screenshot of the storybook of Lonely Planet"
            src={images.carbonStorybook}
          />
          <Cite>Lonely Planet UI</Cite>
        </Slide>
        <Slide>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/story.example").default}
            />
          </div>
        </Slide>
        <Slide>
          <Text textSize="2em">Storybook :</Text>
          <Text textSize="1.6em">
            une giga{" "}
            <span style={{ color: secondary }}>liste de composants</span>
            <br />
            qu'on utilise <span style={{ color: secondary }}>un par un</span>.
          </Text>
          <Appear>
            <Text textSize="2.5em" weight="bold" margin="1em 0 0 0">
              Et alors ?
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="2em">
            <span style={{ color: secondary }}>Lister les composants :</span>
            <br />
            plus facile à trouver,
            <br />
            on évite la dupplication
          </Text>
        </Slide>
        <Slide>
          <Text textSize="2em">
            <span style={{ color: secondary }}>Développer en sandbox :</span>
            <br />
            plus robuste
            <br />
            plus réutilisable
          </Text>
        </Slide>
        <Slide>
          <Text textSize="2em">
            Hot reload gratuit
            <br />
            <span style={{ color: secondary }}>D</span>eveloper E
            <span style={{ color: secondary }}>X</span>perience++
          </Text>
        </Slide>
        <Slide align="center center">
          <Text textSize="1.6em">
            Quand j'ai découvert tout ça,
            <br />
            j'ai eu des p'tits guilis au ventre.
          </Text>
          <Text textSize="2em" margin="0.5em 0 0">
            <span role="img" aria-label="">
              😊
            </span>
          </Text>
        </Slide>
        <Slide align="center center">
          <Text textSize="1.6em">Mais est-ce qu'on peut faire plus ?</Text>
        </Slide>
        <Slide>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/story.example").default}
            />
          </div>
        </Slide>
        <Slide align="center center">
          <Text textSize="2em" textColor="secondary">
            Des tests !
          </Text>
          <Text textSize="1.6em">
            Pour chaque <Code>story</Code>,<br /> on attend un résultat précis.
          </Text>
          <Appear>
            <Text textSize="2em" textColor="secondary">
              Automatisons cela ! :)
            </Text>
          </Appear>
        </Slide>
        <Slide align="center center">
          <Text textSize="2em" textColor="secondary">
            Avec des{" "}
            <a
              href="https://github.com/storybooks/storybook/tree/next/addons/storyshots/storyshots-core"
              style={{ color: "currentColor" }}
            >
              snapshots
            </a>
          </Text>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/storyshots.example").default}
            />
          </div>
        </Slide>
        <Slide align="center center">
          <Text textSize="2em" textColor="secondary">
            Ou des{" "}
            <a
              href="https://github.com/storybooks/storybook/tree/next/addons/storyshots/storyshots-puppeteer"
              style={{ color: "currentColor" }}
            >
              tests visuels
            </a>
          </Text>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/storyshots-puppeteer.example").default}
            />
          </div>
        </Slide>
        <Slide align="center center">
          <Text textSize="2em" textColor="secondary">
            Et des{" "}
            <a
              href="https://github.com/mthuret/storybook-addon-specifications"
              style={{ color: "currentColor" }}
            >
              tests d'intéraction
            </a>{" "}
            ?
          </Text>
          <div style={{ fontSize: "1.5em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/specs.example").default}
            />
          </div>
        </Slide>
        <Slide>
          <Image
            height="60vh"
            alt="Screenshot of the storybook of Lonely Planet"
            src={images.specsStorybook}
          />
          <Text textSize="2em" margin="0.5em 0 0">
            <span role="img" aria-label="Youpi!">
              🎉
            </span>
          </Text>
        </Slide>
        <Slide>
          <Text textSize="2em" margin="0 0 0.5em">
            Storybook <span style={{ color: secondary }}>customisé :</span>
          </Text>
          <Text textSize="1.6em">
            une giga{" "}
            <span style={{ color: secondary }}>liste de composants</span>
            <br />
            qui définit les <span style={{ color: secondary }}>use cases</span>
            <br />
            et <span style={{ color: secondary }}>évite les régressions</span>
          </Text>
        </Slide>
        <Slide>
          <Text textSize="2em">
            Mais est-ce on a un
            <br />
            <span style={{ color: secondary }}>Design System ?</span>
          </Text>
        </Slide>
        <Slide>
          <Text textSize="1.8em" textColor="secondary">
            C'est quoi un Design System ?
          </Text>
          <Appear>
            <Text textSize="1.4em" margin="0.5em 0 0 0">
              Un outil de communication pour que chaque intervenant puisse
              identifier les méthodes et outils existants pour continuer de
              développer une application.
            </Text>
          </Appear>
          <Appear>
            <Text
              textSize="0.8em"
              margin="0.5em 0 0 0"
              style={{ fontStyle: "italic" }}
            >
              &ndash; Moi, dans mon salon
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="1.8em" textColor="secondary">
            C'est quoi un Design System ?
          </Text>
          <Text textSize="1.4em" margin="0.5em 0 0 0">
            Un outil de communication pour que{" "}
            <span style={{ color: secondary }}>chaque intervenant</span> puisse
            identifier les méthodes et outils existants pour continuer de
            développer une application.
          </Text>
          <Text
            textSize="0.8em"
            margin="0.5em 0 0 0"
            style={{ fontStyle: "italic" }}
          >
            &ndash; Moi, dans mon salon
          </Text>
        </Slide>
        <Slide>
          <Text textSize="1.7em" margin="0 0 0.5em 0">
            Beaucoup plus large qu'une (giga) liste de composants React
          </Text>
          <Text textSize="1.4em" textColor="secondary">
            <Appear>
              <span>Tokens</span>
            </Appear>
            <Appear>
              <span>, Valeurs</span>
            </Appear>
            <Appear>
              <span>, Principes</span>
            </Appear>
            <Appear>
              <span>, Bonnes pratiques</span>
            </Appear>
            <Appear>
              <span>, Composants</span>
            </Appear>
            <Appear>
              <span>, Cas d'usages</span>
            </Appear>
            <Appear>
              <span>, ...</span>
            </Appear>
          </Text>
          <Appear>
            <Text margin="0.5em 0 0 0">
              Tout ce qui peut être utile à l'élaboration de de votre produit.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="1.7em" margin="0.5em 0 0 0">
            Mais notre Storybook est très centré sur les devs.
            <br />
            <span role="img" aria-label="">
              😕
            </span>
          </Text>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            Comment on fait pour changer ?
          </Text>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              On demande.
            </Text>
          </Appear>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              On fait preuve d'empathie.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            Pour les concepteur&sdot;rice&sdot;s ?
          </Text>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Impliquer lors de la création des composants.
            </Text>
          </Appear>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Bien séparer les composants d'UI des composants métiers.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            Pour les décideur&sdot;se&sdot;s ?
          </Text>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Impliquer sur les guidelines générales.
            </Text>
          </Appear>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Régulièrement utiliser le design system comme base de discussion.
            </Text>
          </Appear>
          <Appear>
            <Text textSize="1.4em" margin="0.5em 0 0 0">
              C'est difficile.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            De manière générale
          </Text>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Faciliter la navigation
            </Text>
          </Appear>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Documenter les décisions
            </Text>
          </Appear>
          <Appear>
            <Text textSize="1.4em" margin="0 0 0 0">
              Documenter l'utilisation
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            Comment faire tout ça dans Storybook ?
          </Text>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            <a
              style={{ color: "currentColor" }}
              href="https://github.com/storybooks/storybook/tree/master/addons/info"
            >
              Info Addon
            </a>

            <Image
              height="60vh"
              alt="Infoaddon example"
              src={images.infoaddon}
            />
          </Text>
        </Slide>
        <Slide>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/infoaddon.example").default}
            />
          </div>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            <a
              style={{ color: "currentColor" }}
              href="https://github.com/storybooks/storybook/tree/master/addons/knobs"
            >
              Knobs Addon
            </a>

            <Image height="60vh" alt="Infoaddon example" src={images.knobs} />
          </Text>
        </Slide>
        <Slide>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/knobs.example").default}
            />
          </div>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            <a
              style={{ color: "currentColor" }}
              href="https://github.com/storybooks/storybook/tree/master/addons/links"
            >
              Links Addon
            </a>
          </Text>
        </Slide>
        <Slide>
          <div style={{ fontSize: "2em" }}>
            <CodePane
              fit
              theme="external"
              lang="js"
              source={require("./assets/links.example").default}
            />
          </div>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            <a
              style={{ color: "currentColor" }}
              href="https://github.com/tuchk4/storybook-readme"
            >
              Readme Addon
              <Appear>
                <span> ?</span>
              </Appear>
            </a>
          </Text>
          <Appear>
            <Text textColor="tertiary" textSize="1.7em" margin="0 0 0.5em 0">
              Plutôt une story avec du markdown (ou{" "}
              <a style={{ color: "#fff" }} href="https://github.com/mdx-js/mdx">
                mdx
              </a>
              )
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            Intégration d'un système de commentaire ?
          </Text>
          <Text textColor="tertiary" textSize="1.7em" margin="0 0 0.5em 0">
            Disqus (ou isso)
          </Text>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            <a
              style={{ color: "#fff", textDecoration: "none" }}
              href="https://storybook.js.org/addons/addon-gallery/"
            >
              Potentiellement plein d'autres
            </a>
          </Text>
        </Slide>
        <Slide>
          <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
            Pas de recette miracle
          </Text>
          <Text textColor="tertiary" textSize="1.7em" margin="0 0 0.5em 0">
            Il faut du temps.
            <br />
            Rédiger, confronter, itérer.
          </Text>
          <Appear>
            <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
              Y réfléchir, c'est déjà cool !
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="1.7em" margin="0 0 0.5em 0">
            Un Design System dépend de votre équipe.
          </Text>
          <Appear>
            <Text textColor="secondary" textSize="1.7em" margin="0 0 0.5em 0">
              Trouvez votre fonctionnement.
            </Text>
          </Appear>
        </Slide>
        <Slide>
          <Text textSize="1.7em" textColor="secondary" margin="0 0 0.5em 0">
            Références pour aller plus loin
          </Text>
          <List textColor="tertiary">
            <ListItem textSize="1em" margin="0 0 0.5em 0²²²²">
              @yaili -{" "}
              <a
                style={{ color: "currentColor" }}
                href="https://youtu.be/Z7vapa6p92k?t=5603"
              >
                Encouraging participation and contributions to your design
                system
              </a>
            </ListItem>
            <ListItem textSize="1em">
              @brad_frost -{" "}
              <a
                style={{ color: "currentColor" }}
                href="http://bradfrost.com/blog/post/style-guide-guide-gatsby-edition/"
              >
                style guide guide, gatsby edition
              </a>
            </ListItem>
          </List>
        </Slide>
        <Slide bgColor="dark">
          <Text textSize="4em" textColor="secondary">
            Merci
          </Text>
          <Text textSize="1em" textColor="light">
            Des questions ?<br />
            <br />
            <span role="img" aria-label="">
              🐼
            </span>
          </Text>
          <Text textSize="1em" margin="2em 0 0 0" textColor="light">
            Julien Pradet - @JulienPradet
          </Text>
        </Slide>
      </Deck>
    );
  }
}
