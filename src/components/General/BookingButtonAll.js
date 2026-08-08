import React from "react";

const SIZE_STYLES = {
    tiny: {
        fontSize: "10px",
        padding: "4px 10px",
        minHeight: "22px"
    },
    small: {
        fontSize: "11px",
        padding: "6px 12px",
        minHeight: "28px"
    },
    medium: {
        fontSize: "13px",
        padding: "9px 16px",
        minHeight: "36px"
    },
    large: {
        fontSize: "15px",
        padding: "12px 28px",
        minHeight: "44px"
    }
};

const BookingButton = ({
    doctorId,
    size = "tiny",
    className = "",
    label = "Book Appointment",
    mode = "all"
}) => {
    const safeSize = SIZE_STYLES[size] ? size : "tiny";
    const sizeStyle = SIZE_STYLES[safeSize];

    const baseUrl =
        "https://www.hotdoc.com.au/medical-centres/wodonga-VIC-3690/gps-on-vermont";

    const bookingUrl =
        mode === "doctor" && doctorId
            ? `${baseUrl}/doctors/${doctorId}`
            : `${baseUrl}/doctors`;

    return (
        <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={className}
            data-hotdoc-widget="lightbox"
            data-hotdoc-button
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#3b82f6",
                color: "#ffffff",
                fontWeight: "700",
                fontSize: sizeStyle.fontSize,
                padding: sizeStyle.padding,
                minHeight: sizeStyle.minHeight,
                borderRadius: "999px",
                border: "none",
                textDecoration: "none",
                textTransform: "none",
                whiteSpace: "nowrap",
                cursor: "pointer",
                transition: "background-color 0.15s ease-in-out, transform 0.15s ease-in-out",
                boxSizing: "border-box"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
                e.currentTarget.style.transform = "translateY(0)";
            }}
        >
            {label}
        </a>
    );
};

export default BookingButton;