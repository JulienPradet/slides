import React from 'react'
import {Spectacle, Deck, Slide, Heading, Appear, Text, CodePane} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import preloader from 'spectacle/lib/utils/preloader'
import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
}

preloader(images)

const theme = createTheme({
  green: '#b7e770',
  dark: '#222222',
  primary: '#222222',
  light: '#ffffff'
})

export default class Presentation extends React.Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} transitionDuration={500}>
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;HOC&nbsp;
            </Heading>
            <Heading size={1} fit textColor='light'>
              Higher Order Components
            </Heading>
          </Slide>
          {/* Intro fonctionnelle */}
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;HOF&nbsp;
            </Heading>
            <Heading size={1} fit textColor='light'>
              Higher Order Functions
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              (f) => g
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Mais on s'en fout
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Donc on va coder
              </Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/array.example')}
            ranges={[
              { loc: [0, 6] },
              { loc: [7, 8] },
              { loc: [9, 21] },
              { loc: [22, 23] },
              { loc: [24, 37] },
              { loc: [38, 39] },
              { loc: [40, 46] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              On vient de faire un HOA
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Higher Order Array
              </Text>
            </Appear>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                (BaseArray) => EnhancedArray
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='grey'>
              Même si pour les puristes, HOA est un non-sens
            </Text>
          </Slide>
          {/* Intro composant */}
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;HOC&nbsp;
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              (BaseComponent) => EnhancedComponent
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Loader
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/loader.example')}
            ranges={[
              { loc: [0, 7] },
              { loc: [3, 6] },
              { loc: [8, 13] },
              { loc: [14, 19] },
              { loc: [20, 29] },
              { loc: [30, 37] },
              { loc: [38, 47] },
              { loc: [38, 54] },
              { loc: [55, 56] },
              { loc: [57, 68] },
              { loc: [69, 74] },
            ]}
          />
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Requêtes API
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Refaire react-refetch
              </Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/fetcher.example')}
            ranges={[
              { loc: [0, 5] },
              { loc: [5, 6] },
              { loc: [6, 23] },
              { loc: [24, 32] },
              { loc: [35, 44] },
              { loc: [36, 38] },
              { loc: [38, 42] },
              { loc: [42, 43] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Récap'
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/simpleLoggedUser.example')}
            ranges={[
              { loc: [0, 5] },
              { loc: [6, 11] },
              { loc: [12, 21] },
              { loc: [22, 23] },
              { loc: [24, 29] },
              { loc: [30, 35] },
              { loc: [36, 42] },
              { loc: [43, 47] }
            ]}
          />
          {/* Exemple MemoizedFetcher */}
          {/* Recompose */}
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;Recompose&nbsp;
            </Heading>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Une lib' de HOCs bas niveau
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              (params) => (BaseComponent) => EnhancedComponent
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/recompose.example')}
            ranges={[
              { loc: [0, 5] },
              { loc: [6, 10] },
              { loc: [11, 16] },
              { loc: [17, 22] },
              { loc: [23, 24] },
              { loc: [24, 35] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='light'>
              Pour s'y mettre, transformer une classe en une série de HOC
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;Bonnes pratiques&nbsp;
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='light'>
              Toujours respecter la signature
            </Text>
            <Text size={1} lineHeight={1.5} textColor='light'>
              (...params) => (BaseComponent) => EnhancedComponent
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='light'>
              Nommer ses paramètres en utilisant un objet
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='light'>
              Regrouper les parties et les nommer
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;Pourquoi c'est cool ?&nbsp;
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              DRY
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Sans le risque de trop coupler les composants
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Lisible
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                A condition de nommer convenablement
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Testable
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Avec des BaseComponent très dumbs
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Prototypage rapide
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                En réduisant le boilerplate
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Separation des responsabilités
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                La vue peut ne plus jamais avoir besoin de class
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;&nbsp;&nbsp;&nbsp;Et en vrai ?&nbsp;&nbsp;&nbsp;&nbsp;
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Gymnastique intellectuelle
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                C'est le même effort à fournir que pour<br />
                Impératif => Fonctionnel
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Magique
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Les props viennent de nul part
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Performance ?
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Si on va trop loin, beaucoup de niveaux d'indirection<br />
                Et un arbre React qui explose (notamment pour débugger)
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Mais on ne peut plus s'en passer
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Quand on a compris le fonctionnement
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={1} fit caps textColor='green'>
              &nbsp;&nbsp;&nbsp;&nbsp;Et sinon ?&nbsp;&nbsp;&nbsp;&nbsp;
            </Heading>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Function as Children
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                C'est le même concept<br />mais on le fait directement dans le JSX
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text size={1} lineHeight={1.5} textColor='green'>
              Avec des Observables et mapPropsStream
            </Text>
            <Appear>
              <Text size={1} lineHeight={1.5} textColor='light'>
                Pour le code qui n'est pas en rapport avec la vue
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Heading size={1} lineHeight={1.1} caps textColor='green'>
              Merci
            </Heading>
            <Heading size={1} lineHeight={1.1} textColor='light'>
              Questions ?
            </Heading>
            <Text size={1} lineHeight={5} textColor='light'>
              Julien Pradet - @JulienPradet
            </Text>
          </Slide>
          {/* Bonnes pratiques => Curry + params + fonction pour ajouter aux props */}
          {/* Goods */}
            {/* Static -> et donc analysable (Relay/Fetcher SSR) + perf (initialisation de la page only) */}
            {/* DRY + reuse 4 free */}
            {/* Lisible (peut être pas tout de suite) */}
            {/* Testable (avec code pour le montrer) */}
            {/* Prototypage rapide (withState, withHandlers, withProps = bonheur) */}
            {/* Isolation du code métier et du code de vue */}
            {/* Split des fonctionnalités renforcé */}
          {/* Bads */}
            {/* Il faut s'y habituer. C'est une philosophie différente. */}
            {/* Un peu magique => D'où viennent les props (à nuancer si on utilise les bonnes pratiques) */}
            {/* React debugger bloat / Perf a cause de la quantité de composants ? */}
          {/* Alternative : function as children */}
          {/* Bonus : Et si je fais pas de React ? */}
        </Deck>
      </Spectacle>
    )
  }
}
