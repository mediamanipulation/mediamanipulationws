import React from "react";
// import QuoteAndAuthor from "./QuoteAndAuthor";
import Typography from "@material-ui/core/Typography";
import ArtQuotes from "./ArtQuotes";
// import "./Quote.css";
import Fade from "@material-ui/core/Fade";

const durationText2 = 2500;

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: ArtQuotes[0].quote,
      author: ArtQuotes[0].author
    };
  }
  componentDidMount() {
    this.handleClick();
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * ArtQuotes.length);
    return ArtQuotes[randomNumber];
  }
  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(ArtQuotes);
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div>
        <Typography variant="h5" align="right" color="textSecondary">
          <div>
            {this.state.quote} - {this.state.author}
          </div>
        </Typography>
      </div>
    );
  }
}

export default Quote;
