import React from 'react';
import MyContext from './MyContext';

const CardItem = (props) => {
  return (
      <MyContext.Consumer>
				{(context) => {
					const episodes = context.state.episodes.episodes;
					return episodes && episodes.map((episode, i) => (
					<React.Fragment key={i}>
						<div className= 'card'>
							<div className="title">{episode.title}</div>
							<div className="airdate">{episode.airdate}</div>
							<a href={episode.episodeLink}>
								<img src={episode.image} alt={episode.title} />
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
