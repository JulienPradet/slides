// Import React
import React from 'react';

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
	Image
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
	spotify: require('../assets/spotify.png')
};

preloader(images);

const theme = createTheme(
	{
		primary: '#222222',
		secondary: '#b7e770',
		tertiary: '#FFFFFF'
	},
	{
		primary: 'Montserrat',
		secondary: {
			name: 'Open Sans Condensed',
			googleFont: true,
			styles: ['400', '700i']
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

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck transition={['slide']} transitionDuration={500} theme={theme}>
				<Slide align="center center">
					<Heading caps textSize="2.2em">
						Comment séparer ses
					</Heading>
					<Heading caps textSize="3.45em">
						composants ?
					</Heading>
				</Slide>
				<Slide align="center center">
					<Heading textSize="2em">
						Julien Pradet
					</Heading>
					<Heading textSize="1.1em" textColor="tertiary" margin="2em 0 1em 0">
						<a
							href="https://twitter.com/JulienPradet"
							style={{ color: '#fff', textDecoration: 'none' }}
						>
							@JulienPradet
						</a>
						{' '}
						-
						{' '}
						<a
							href="https://www.julienpradet.fr/"
							style={{ color: '#fff', textDecoration: 'none' }}
						>
							https://www.julienpradet.fr/
						</a>
					</Heading>
					<Heading textSize="1.1em" textColor="tertiary">
						<a
							href="https://occitech.fr/"
							style={{ color: '#fff', textDecoration: 'none' }}
						>
							@Occitech
						</a>
					</Heading>
				</Slide>
				<Slide>
					<Heading textSize="2em" textColor="secondary">
						React<br />le V de MVC ?
					</Heading>
					<Appear>
						<Heading textColor="tertiary" textSize="6em" margin="0.3em 0 0 0">
							Nope.
						</Heading>
					</Appear>
				</Slide>
				<Slide>
					<Heading textSize="2em" textColor="secondary">
						React<br /><S type="strikethrough">le V de MVC ?</S>
					</Heading>
					<Heading textColor="tertiary" textSize="3em" margin="0.6em 0 0 0">
						Orienté Composant
					</Heading>
				</Slide>
				<Slide>
					<Text textSize="2em">
						Il n'y a pas
						{' '}
						<strong style={{ color: '#b7e770' }}>une</strong>
						{' '}
						application
					</Text>
					<Appear>
						<Text textSize="2em" margin="0.5em 0 0 0">
							Il y a
							{' '}
							<strong style={{ color: '#b7e770' }}>plusieurs</strong>
							{' '}
							applications
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<Image width="100%" src={images.spotify} />
				</Slide>
				<Slide>
					<Heading textSize="2em">
						Quelle granularité ?
					</Heading>
				</Slide>
				<Slide>
					<Heading textSize="2em" textColor="secondary" margin="0 0 0.5em 0">
						Avec quels outils ?
					</Heading>
					<Appear>
						<Text>
							<span style={{ color: '#b7e770' }}>Stateless :</span>
							{' '}
							<span>f(props) =&gt; view</span>
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							<span style={{ color: '#b7e770' }}>Stateful :</span>
							{' '}
							<span>
								f(props, state) =&gt; view
							</span>
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						Définition formelle
					</Heading>
					<Text>Ca fait sérieux.</Text>
				</Slide>
				<Slide>
					<Heading textSize="2em" textColor="secondary">
						Smart vs Dumb
					</Heading>
					<Appear>
						<Text textColor="tertiary" margin="1em 0 0 0">
							≠ Stateful vs Stateless
						</Text>
					</Appear>
					<Appear>
						<Text textColor="tertiary" margin="0.5em 0 0 0">
							Et trop restrictif
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<Heading textSize="2em">4 types</Heading>
				</Slide>
				<Slide>
					<Heading textSize="2em">Présentateur UI</Heading>
					<List textColor="tertiary">
						<Appear>
							<ListItem>assure l'homogénité de l'UI</ListItem>
						</Appear>
					</List>
				</Slide>
				<Slide>
					<Image width="100%" src={images.spotify} />
				</Slide>
				<Slide>
					<Heading textSize="2em">Controlleur UI</Heading>
					<List textColor="tertiary">
						<Appear>
							<ListItem>fait évoluer l'UI</ListItem>
						</Appear>
						<Appear>
							<ListItem>isolé du reste de l'appli</ListItem>
						</Appear>
					</List>
				</Slide>
				<Slide>
					<Image width="100%" src={images.spotify} />
				</Slide>
				<Slide>
					<Heading textSize="2em">Controlleur Métier</Heading>
					<List textColor="tertiary">
						<Appear>
							<ListItem>
								récupère et envoie de données via API
							</ListItem>
						</Appear>
						<Appear>
							<ListItem>
								fait évoluer l'application
							</ListItem>
						</Appear>
						<Appear>
							<ListItem>
								utilisation unique
							</ListItem>
						</Appear>
						<Appear>
							<ListItem>0 DOM</ListItem>
						</Appear>
					</List>
				</Slide>
				<Slide>
					<Image width="100%" src={images.spotify} />
				</Slide>
				<Slide>
					<Heading textSize="2em">Présentateur Métier</Heading>
					<List textColor="tertiary">
						<Appear>
							<ListItem>gère l'organisation de l'UI</ListItem>
						</Appear>
						<Appear>
							<ListItem>utilisation unique</ListItem>
						</Appear>
						<Appear>
							<ListItem>0 DOM</ListItem>
						</Appear>
					</List>
				</Slide>
				<Slide>
					<Image width="100%" src={images.spotify} />
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						Oui mais concrètement ?
					</Heading>
					<Appear>
						<Text>Quelles sont les alarmes ?</Text>
					</Appear>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						render() trop long
					</Heading>
					<Appear>
						<Text>Difficile à lire</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Risque d'erreur plus grand
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<CodePane lang="jsx">{`
						render () {
							return <div className="content">
								<div className="content__title">
									<h3>{this.props.title} ({this.state.list.length})</h3>
								</div>
								<div className="content__description">
									<ul>
										{this.state.list.map(item => (
											<li key={item.title}>
												<div>{item.title}</div>
												{item.active &&
													<div>
														{item.description}
													</div>}
												<button onClick={this.onDelete.bind(this, item)}>
													Delete
												</button>
											</li>
										))}
									</ul>
								</div>
							</div>
						}
          `}</CodePane>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						Métier qui a du DOM
					</Heading>
					<Appear>
						<Text>
							Ce n'est pas le bon endroit
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Difficile de rester homogène
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Difficile de passer à React Native
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<CodePane lang="jsx">{`
              <div>
                <h3>{this.state.category.title}</h3>
                <ul>
                  {this.state.category.children.map((child) => (
                    <li key={child.href}>
                      <a href={child.href}>{child.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
          `}</CodePane>
				</Slide>
				<Slide>
					<CodePane lang="jsx">{`
              <Category>
                <CategoryTitle>{this.state.category.title}</CategoryTitle>
                <CategoryChildren list={this.state.category.children} />
              </Category>
          `}</CodePane>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						State avec beaucoup de clés
					</Heading>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Impossible à réutiliser
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							On revient à de grosses applications
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							render() forcément long
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<CodePane lang="js">{`{
  list: [{ id: 349 }, { id: 512 }],
  active: true,
  previous: null,
  next: { id: 349 },
  loading: false
}`}</CodePane>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						Des propriétés en cascade
					</Heading>
					<Appear>
						<Text>
							C'est pas rigolo
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Symptôme d'un state trop gros
						</Text>
					</Appear>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Il existe d'autres moyens de communication
							{' '}
							<S type="" textSize="0.7em">(Redux ?)</S>
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<CodePane lang="jsx">{`<Composant
  onAdd={this.props.onAdd}
  onRemove={this.props.onRemove}
  onEdit={this.props.onEdit}
  item={this.props.item}
  list={this.props.list}
  loading={this.props.loading}
  {...this.props.additionalProps}
/>`}</CodePane>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						render() fait de ifs
					</Heading>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Mérite des présentateurs séparé
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<CodePane lang="jsx">{`
              <div>
                <h3>{this.state.category.title}</h3>
                {this.state.category.children.length === 0
                  ? <p>Come back later !</p>
                  : <ul>
                    {this.state.category.children.map((child) => (
                      <li key={child.href}>
                        <a href={child.href}>{child.name}</a>
                      </li>
                    ))}
                  </ul>
                }
              </div>
          `}</CodePane>
				</Slide>
				<Slide>
					<CodePane lang="jsx">{`
              <Component>
                <ComponentTitle>{this.state.category.title}</CategoryTitle>
                <ComponentContent list={this.state.category.children} />
              </Component>
          `}</CodePane>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						Trop de props obligatoires
					</Heading>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Difficulté de réutilisation
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<Heading textSize="2em" margin="0 0 1em 0">
						Du code copier/coller
					</Heading>
					<Appear>
						<Text margin="0.5em 0 0 0">
							Ce n'est pas une alarme
						</Text>
					</Appear>
				</Slide>
				<Slide>
					<Heading textSize="3em">React Storybook</Heading>
				</Slide>
				<Slide>
					<Text>
						Utiliser vos composants de manière
						{' '}
						<S type="bold" textColor="secondary">isolée</S>
					</Text>
					<Text>
						vous permet de les rendre
						{' '}
						<S type="bold" textColor="secondary">plus utilisables</S>
					</Text>
				</Slide>
				<Slide>
					<Text>
						<a
							style={{ color: '#b7e770', textDecoration: 'none' }}
							target="_blank"
							href="http://airbnb.io/react-dates/?selectedKind=DRP%20-%20Calendar%20Props&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel"
						>
							Demo
						</a>
					</Text>
					<Text>
						<a
							style={{ color: '#b7e770', textDecoration: 'none' }}
							target="_blank"
							href="https://github.com/airbnb/react-dates/tree/master/stories"
						>
							Code
						</a>
					</Text>
				</Slide>
				<Slide>
					<Heading textSize="2em">Living Documentation</Heading>
					<Text>
						<a
							style={{ color: '#ffffff', textDecoration: 'none' }}
							target="_blank"
							href="https://github.com/storybooks/react-storybook-addon-info"
						>
							Info Addon
						</a>
					</Text>
				</Slide>
				<Slide>
					<Heading textSize="2em">Edition des propriétés</Heading>
					<Text>
						<a
							style={{ color: '#ffffff', textDecoration: 'none' }}
							target="_blank"
							href="https://github.com/storybooks/storybook/tree/master/packages/addon-knobs"
						>
							Knob addon
						</a>
					</Text>
				</Slide>
				<Slide>
					<Heading textSize="2em">Snapshot testing</Heading>
					<Text>
						<a
							style={{ color: '#ffffff', textDecoration: 'none' }}
							target="_blank"
							href="https://github.com/storybooks/storybook/tree/master/packages/storyshots"
						>
							Storyshots
						</a>
					</Text>
				</Slide>
				<Slide>
					<Heading textSize="2em">Documentation via des Tests</Heading>
					<Text>
						<a
							style={{ color: '#ffffff', textDecoration: 'none' }}
							target="_blank"
							href="https://github.com/mthuret/storybook-addon-specifications"
						>
							React Specification
						</a>
					</Text>
				</Slide>
				<Slide>
					<Text textSize="4em" textColor="secondary">
						Merci
					</Text>
					<Text textSize="2em" textColor="tertiary">
						Des questions ?
					</Text>
					<Text margin="2em 0 0 0" textColor="tertiary">
						Julien Pradet - @JulienPradet
					</Text>
				</Slide>
			</Deck>
		);
	}
}
