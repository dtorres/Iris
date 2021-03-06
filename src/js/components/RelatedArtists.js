
import React, { memo } from 'react';
import Thumbnail from './Thumbnail';
import URILink from './URILink';

export default memo((props) => {
  if (!props.artists) {
    return null;
  }

  return (
    <div className="related-artists">
      {
				props.artists.map((artist, index) => {
				  let { images } = artist;
				  if (Array.isArray(images)) {
				    images = images[0];
				  }

				  if (artist.uri) {
				    return (
  <URILink type="artist" uri={artist.uri} key={artist.uri} className="related-artists__item related-artists__item--link">
    <Thumbnail className="related-artists__item__thumbnail" circle size="small" images={images} />
    <span className="related-artists__item__name">{ artist.name }</span>
  </URILink>
				    );
				  }
				  return (
  <span key={artist.uri} className="related-artists__item">
    <Thumbnail className="related-artists__item__thumbnail" circle size="small" images={images} />
    <span className="related-artists__item__name">{ artist.name }</span>
  </span>
				  );
				})
			}
    </div>
  );
});
