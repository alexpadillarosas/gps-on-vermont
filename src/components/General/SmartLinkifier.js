import React from 'react';
import Linkify from 'react-linkify';

/**
 * UPDATED REGEX: 
 * This now accounts for optional parentheses, spaces, and dashes.
 * It matches: (02) 6025 2189, 02 6025 2189, 0400 000 000, etc.
 */
const phoneRegex = /(?:\+?61|0[2-478]|\(0[2-478]\))[ -]?[0-9]{3,4}[ -]?[0-9]{3,4}/g;

const SmartLinkifier = ({ text }) => {

  const componentDecorator = (decoratedHref, decoratedText, key) => {
    const isEmail = decoratedHref.startsWith('mailto:');
    const isWeb = decoratedHref.startsWith('http');

    if (!isWeb && !isEmail) {
      // Clean the number for the dialer (strip brackets/spaces)
      // (02) 6025 2189 becomes 0260252189
      const cleanNumber = decoratedText.replace(/[^0-9+]/g, '');

      return (
        <a href={`tel:${cleanNumber}`} key={key} className="phone-link">
          {decoratedText}
        </a>
      );
    }

    return (
      <a href={decoratedHref} key={key} target="_blank" rel="noopener noreferrer">
        {decoratedText}
      </a>
    );
  };

  const processText = (rawText) => {
    if (!rawText) return null;
    
    const matches = rawText.match(phoneRegex);
    if (!matches) return [rawText];

    return rawText.split(phoneRegex).reduce((acc, part, i) => {
      if (i === 0) return [part];
      const match = matches[i - 1];
      // We wrap the match in an anchor so Linkify "sees" it as a link
    //   return [...acc, <a href={match} key={i}>{match}</a>, part];
      return [...acc, <a href={`tel:${match}`} key={i}>{match}</a>, part];
    }, []);
  };

  return (
    <Linkify componentDecorator={componentDecorator}>
      {processText(text)}
    </Linkify>
  );
};

export default SmartLinkifier;