import React from 'react'
import {Spectacle, Deck, Slide, Heading, Appear, Text} from 'spectacle'
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
        <Deck transition={['slide']} transitionDuration={400} progress='bar' controls={false}>
          <Slide align='center center'>
            <Heading fit caps textColor='green'>
              &nbsp;HOC&nbsp;
            </Heading>
            <Heading fit textColor='light'>
              Higher Order Components
            </Heading>
          </Slide>
          <Slide align='center center'>
            <Heading caps textColor='green'>
              &nbsp;Julien Pradet&nbsp;
            </Heading>
            <Heading textSize='1.1em' textColor='light' margin='2em 0 1em 0'>
              <a href='https://twitter.com/JulienPradet' style={{color: '#fff', textDecoration: 'none'}}>@JulienPradet</a> - <a href='https://julienpradet.github.io/' style={{color: '#fff', textDecoration: 'none'}}>https://julienpradet.github.io/</a>
            </Heading>
            <Heading textSize='1.1em' textColor='light'>
              @Occitech
            </Heading>
          </Slide>
          <Slide align='center center'>
            <Heading fit caps textColor='green'>
              &nbsp;HOC&nbsp;
            </Heading>
            <Heading fit textColor='light'>
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
            <Text textSize='4em' textColor='green'>
              (f) => g
            </Text>
            <Appear>
              <Text textSize='2em' textColor='light' margin='1.5em 0 0 0'>
                (param) => f
              </Text>
            </Appear>
            <Appear>
              <Text textSize='2em' textColor='light' margin='0.5em 0 0 0'>
                (f, data) => result
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Mais c'est compliqué
            </Text>
            <Text textSize='2em' textColor='light' margin='1.5em 0 0 0'>
              Donc on va coder des tableaux
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/array.example')}
            ranges={[
              { loc: [0, 6] },
              { loc: [7, 13] },
              { loc: [14, 20] },
              { loc: [21, 27] },
              { loc: [21, 34] },
              { loc: [35, 37] },
              { loc: [38, 45] },
              { loc: [46, 53] },
              { loc: [54, 59] },
              { loc: [60, 67] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              On vient de faire un HOA
            </Text>
            <Text textSize='4em' textColor='green'>
              Higher Order Array
            </Text>
            <Appear>
              <Text textSize='2em' margin='1em 0 0 0' textColor='light'>
                (BaseArray) => EnhancedArray
              </Text>
            </Appear>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/array.example')}
            ranges={[
              { loc: [54, 59] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              Même si pour les puristes
            </Text>
            <Text textSize='4em' textColor='green'>
              HOA est un non-sens
            </Text>
            <Appear>
              <Text textSize='2em' margin='1em 0 0 0' textColor='light'>
                un array n'est pas une fonction
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              Ce qui est important ici
            </Text>
            <Text textSize='4em' textColor='green'>
              (Base) => Enhanced
            </Text>
          </Slide>
          {/* Intro composant */}
          <Slide bgColor='dark'>
            <Text textSize='12em' textColor='green'>
              HOC
            </Text>
            <Text fit lineHeight={1.5} textColor='light'>
              (BaseComponent) => EnhancedComponent
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' lineHeight={1.5} textColor='green'>
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
              { loc: [8, 21] },
              { loc: [16, 33] },
              { loc: [24, 43] },
              { loc: [36, 55] },
              { loc: [46, 60] },
              { loc: [56, 64] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Requêtes API
            </Text>
            <Text textSize='2em' margin='1em 0 0 0' textColor='light'>
              Un HOC qui fait un fetch<br />
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/fetcher.example')}
            ranges={[
              { loc: [0, 5] },
              { loc: [0, 6] },
              { loc: [5, 24] },
              { loc: [14, 32] },
              { loc: [34, 44] },
              { loc: [35, 38] },
              { loc: [38, 42] },
              { loc: [42, 43] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Récap'
            </Text>
          </Slide>
          <CodeSlide
            transition={[]}
            lang='jsx'
            code={require('raw!../assets/code/simpleLoggedUser.example')}
            ranges={[
              { loc: [0, 5] },
              { loc: [6, 10] },
              { loc: [11, 22] },
              { loc: [23, 24] },
              { loc: [25, 34] },
              { loc: [35, 43] },
              { loc: [44, 52] },
              { loc: [53, 58] },
              { loc: [59, 66] }
            ]}
          />
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              Pour s'y mettre
            </Text>
            <Text textSize='4em' textColor='green'>
              Classe > HOCs
            </Text>
          </Slide>
          {/* Exemple MemoizedFetcher */}
          {/* Recompose */}
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              &nbsp;Recompose&nbsp;
            </Text>
            <Appear>
              <Text textSize='2em' lineHeight={1.5} textColor='light'>
                des HOCs bas niveau
              </Text>
            </Appear>
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
            <Text textSize='4em' textColor='green'>
              &nbsp;Bonnes pratiques&nbsp;
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              Respecter la signature
            </Text>
            <Text textSize='2em' margin='0.5em 0 0 0' textColor='green'>
              (...params) => (BaseComponent) => EnhancedComponent
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              Les paramètres doivent être des objets
            </Text>
            <Text textSize='2em' margin='0.5em 0 0 0' textColor='green'>
              {'({optionA, optionB, optionC})'}
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='2em' textColor='light'>
              Penser à découper et nommer vos `compose`
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              &nbsp;Pourquoi c'est cool ?&nbsp;
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Lisible
            </Text>
              <Text textSize='2em' margin='0.5em 0 0 0' textColor='light'>
                A condition de nommer convenablement
              </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              SRP
            </Text>
              <Text textSize='2em' margin='0.5em 0 0 0' textColor='light'>
                Fini les classes avec 12 options dans le state
              </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Testable
            </Text>
              <Text textSize='2em' margin='0.5em 0 0 0' textColor='light'>
                Avec des BaseComponent très dumbs
              </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              &nbsp;&nbsp;&nbsp;&nbsp;Et en vrai ?&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Premiers pas difficiles
            </Text>
              <Text textSize='2em' margin='0.5em 0 0 0' textColor='light'>
                C'est le même effort à fournir que pour<br />
                Impératif => Fonctionnel
              </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Magique
            </Text>
              <Text textSize='2em' margin='0.5em 0 0 0' textColor='light'>
                Les props viennent de nul part
              </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Mais ça sauve des vies
            </Text>
            <Appear>
              <Text textSize='2em' margin='0.5em 0 0 0' textColor='light'>
                Quand on a compris le fonctionnement
              </Text>
            </Appear>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Et surtout
            </Text>
              <Text textSize='1.9em' margin='0.5em 0 0 0' textColor='light'>
                Maîtriser la composition vous sera utile partout<br />
                React ou pas. Front ou Back.
              </Text>
          </Slide>
          <Slide bgColor='dark'>
            <Text textSize='4em' textColor='green'>
              Merci
            </Text>
            <Text textSize='2em' textColor='light'>
              Des questions ?
            </Text>
            <Text margin='2em 0 0 0' textColor='light'>
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
