import React from 'react';
import MyContext from './MyContext';
import './App.css';

const CardItem = (props) => {
  return (
      <MyContext.Consumer>
				{(context) => {
					const episodes = context.state.episodes.episodes;
					return episodes && episodes.map((episode, i) => (
					<React.Fragment key={i}>
						<div className= 'card'>
							<h2 className="title">{episode.title}</h2>
							<h3 className="airdate">{episode.airdate}</h3>
							<a href={episode.episodeLink}>
								<img className='image' src={episode.image} alt={episode.title} />
							</a>
							<p>{episode.description}</p>
						</div>
						</React.Fragment>
					))
				}}
      </MyContext.Consumer>
	)
}

export default CardItem;
