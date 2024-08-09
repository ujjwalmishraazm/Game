import seriesData from './api/seriesData.json'

const Netflix = () => {
  // Define the styles for the card container and individual cards
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px', // Space between cards
    justifyContent: 'center', // Center cards horizontally
    padding: '16px', // Add padding around the container
    boxSizing: 'border-box',
  };
  
  const cardStyle = {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: '16px',
    textAlign: 'center',
    boxSizing: 'border-box',
    color: '#333', // Ensure text color is dark enough to be visible
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderBottom: '1px solid #ddd',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: '10px',
  };
    const super_hit= {
    backgroundColor: 'black'
   }

   const average = {
     
   }
  return (
    <div style={containerStyle}>
      {seriesData.map((curElem) => {
     
        return (
          <div key={curElem.id} style={cardStyle}>
            <img
              src={curElem.img_url}
              alt={curElem.name}
              style={imgStyle}
            />
            <div>
              <h2>Name: {curElem.name}</h2>
              <h3>Rating: <span className={curElem.rating >8.5?'super_hit':'average'}>
                {curElem.rating} </span>
                </h3>
              <p>Description: {curElem.description}</p>
              <p>Cast: {curElem.cast}</p>
              <p>Genre: {curElem.genre}</p>
              <a href={curElem.watch_url} target='_blank' rel='noopener noreferrer'>
                <button style={buttonStyle}>Watch Now</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Netflix;
