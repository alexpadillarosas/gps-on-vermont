import React from "react";

const CallUsButton = ({ phoneNumber, locationName, size = "large", className: passedClasses }) => {
  
  const getCleanNumber = (num) => num.replace(/[^0-9+]/g, '');
  
  // These are the exact heights (in pixels) used by the HotDoc widget sizes
  const hotDocSizes = {
    small: { height: '21px', fontSize: '12px', iconWidth: '21px' },
    medium: { height: '31px', fontSize: '14px', iconWidth: '31px' },
    large: { height: '41px', fontSize: '16px', iconWidth: '40px' } // This is usually the standard large
  };

  const config = hotDocSizes[size] || hotDocSizes.large;

  return (
    <a 
      href={`tel:${getCleanNumber(phoneNumber)}`}
      // We keep these classes so it inherits the project-wide font style
      className={`btn-font btn-weight ${passedClasses || ''}`} 
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: '#FF6333', 
        color: '#FFFFFF',
        height: config.height,      // Matches Book Appointment height exactly
        lineHeight: config.height,  // Ensures text is vertically centered
        borderRadius: '3px',        // HotDoc uses a very small radius
        textDecoration: 'none',
        overflow: 'hidden',
        padding: '0',
        border: 'none',
        verticalAlign: 'middle',    // Prevents "jumping" when next to each other
        boxSizing: 'border-box'
      }}
    >
      {/* Icon Section - Darker Orange Box */}
      <span style={{
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        width: config.iconWidth,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <i className="fas fa-phone-alt" style={{ fontSize: '0.9rem' }}></i>
      </span>

      {/* Text Section */}
      <span style={{
        padding: '0 15px',
        fontSize: config.fontSize,
        fontWeight: 'inherit',     // Inherits from btn-weight class
        fontFamily: 'inherit',     // Inherits from btn-font class
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        whiteSpace: 'nowrap'
      }}>
        {locationName}
      </span>
    </a>
  );
};

export default CallUsButton;