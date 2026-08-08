import React from "react";
import { Link } from "react-router-dom";
import BookingButton from "./BookingButton";

const DEFAULT_COLUMNS = 4;
const MAX_VISIBLE_LANGUAGES = 2;

// SVG Text Wrapper component to dynamically compress text to 1 line
const SingleLineName = ({ text }) => {
    const targetWidth = Math.max(text.length * 10, 160);
    
    return (
        <svg
            viewBox={`0 0 ${targetWidth} 24`}
            className="doctor-team-name-svg"
            aria-label={text}
            role="img"
        >
            <text
                x="0"
                y="18"
                textLength={targetWidth}
                lengthAdjust="spacingAndGlyphs"
                fill="#2f3136"
                fontSize="18"
                fontWeight="700"
                fontFamily="inherit"
            >
                {text}
            </text>
        </svg>
    );
};

const DoctorsTeam = ({
    staffData = [],
    columns = DEFAULT_COLUMNS,
    className = ""
}) => {
    const visibleStaff = (Array.isArray(staffData) ? staffData : []).filter(
        (person) => person && person.enabled !== false && person.doctor === true
    );

    const gridStyle = {
        "--doctor-team-columns": String(columns)
    };

    const getName = (person) => person?.name || "Doctor";
    const getTitleAbr = (person) => person?.titleAbr || "";
    const getImage = (person) => person?.image || "";

    const getLanguages = (person) => {
        const languages = person?.speaks || [];
        return Array.isArray(languages) ? languages.filter(Boolean) : [];
    };

    const getBookingDoctorId = (person) =>
        person?.bookingDoctorId ||
        person?.displayBookingButtonDrId ||
        person?.bookingButtonDrId ||
        person?.doctorId ||
        person?.hotdocId ||
        null;

    const getDetailsHref = (person, index) => {
        if (person?.profileLink) return person.profileLink;
        if (person?.profileUrl) return person.profileUrl;
        if (person?.href) return person.href;
        if (person?.link) return person.link;

        return `/doctor-details/${index}`;
    };

    const isExternalHref = (href) =>
        typeof href === "string" &&
        (href.startsWith("http://") || href.startsWith("https://"));

    return (
        <>
            <style>{`
                .doctors-team-grid {
                    display: grid;
                    grid-template-columns: repeat(var(--doctor-team-columns, 4), minmax(0, 1fr));
                    column-gap: 24px;
                    row-gap: 0;
                    align-items: stretch;
                }

                .doctor-team-item {
                    min-height: 165px;
                    height: 100%;
                    padding: 16px 0 12px;
                    border-bottom: 1px solid #ececec;
                    display: flex;
                    align-items: stretch;
                }

                .doctor-team-row {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 104px minmax(0, 1fr) 24px;
                    gap: 14px;
                    align-items: stretch;
                }

                .doctor-team-avatar {
                    width: 104px;
                    height: 104px;
                    border-radius: 50%;
                    overflow: hidden;
                    background: #7d73d8;
                    box-shadow: 0 0 0 2px rgba(125, 115, 216, 0.12);
                    flex-shrink: 0;
                    align-self: start;
                }

                .doctor-team-avatar img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .doctor-team-avatar-fallback {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    font-size: 28px;
                    font-weight: 800;
                }

                .doctor-team-meta {
                    min-width: 0;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    padding-top: 2px;
                }

                .doctor-team-name {
                    margin: 0 0 6px;
                    line-height: 1.18;
                }

                .doctor-team-name-svg {
                    width: 100%;
                    height: 24px;
                    display: block;
                }

                .doctor-team-languages {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    min-width: 0;
                    flex-wrap: nowrap;
                    white-space: nowrap;
                }

                .doctor-team-language-icon {
                    width: 16px;
                    min-width: 16px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    color: #20a86b;
                    font-size: 14px;
                }

                .doctor-team-language-pills {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    flex-wrap: nowrap;
                    min-width: 0;
                }

                .doctor-team-language-pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    height: 22px;
                    padding: 0 7px;
                    border-radius: 999px;
                    background: #e4f7ec;
                    color: #2c8651;
                    font-size: 10px;
                    font-weight: 600;
                    line-height: 1;
                    white-space: nowrap;
                }

                .doctor-team-language-pill.more {
                    background: #d9f3e4;
                    color: #267747;
                }

                /* Reduced gap between languages and booking button */
                .doctor-team-booking {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    padding-top: 0;
                }

                .doctor-team-booking-button {
                    min-width: 140px !important;
                    width: auto !important;
                    min-height: 33px !important;
                    height: 33px !important;
                    padding: 0 16px !important;
                    margin: 0 !important;
                    border-radius: 999px !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    font-size: 12px !important;
                    font-weight: 700 !important;
                    line-height: 1 !important;
                    white-space: nowrap !important;
                    box-sizing: border-box !important;
                    text-decoration: none !important;
                }

                .doctor-team-arrow {
                    width: 24px;
                    height: 24px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    justify-self: end;
                    align-self: center;
                    color: #8a1fff;
                    text-decoration: none;
                    transition: transform 0.2s ease, color 0.2s ease;
                    margin-top: 2px;
                }

                .doctor-team-arrow:hover {
                    color: #6d12d9;
                    text-decoration: none;
                    transform: translateX(2px);
                }

                .doctor-team-arrow i {
                    font-size: 22px;
                    line-height: 1;
                }

                @media (max-width: 1199px) {
                    .doctors-team-grid {
                        grid-template-columns: repeat(min(3, var(--doctor-team-columns, 4)), minmax(0, 1fr));
                    }
                }

                @media (max-width: 991px) {
                    .doctors-team-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 767px) {
                    .doctors-team-grid {
                        grid-template-columns: 1fr;
                    }

                    .doctor-team-item {
                        min-height: 150px;
                        padding: 14px 0 12px;
                    }

                    .doctor-team-row {
                        grid-template-columns: 88px minmax(0, 1fr) 24px;
                        gap: 12px;
                    }

                    .doctor-team-avatar {
                        width: 88px;
                        height: 88px;
                    }

                    .doctor-team-meta {
                        padding-top: 2px;
                    }

                    .doctor-team-booking-button {
                        min-width: 130px !important;
                        min-height: 30px !important;
                        height: 30px !important;
                        padding: 0 14px !important;
                        font-size: 11px !important;
                    }
                }
            `}</style>

            <div className={`doctors-team-grid ${className}`.trim()} style={gridStyle}>
                {visibleStaff.map((person, index) => {
                    const name = getName(person);
                    const titleAbr = getTitleAbr(person);
                    const fullName = `${titleAbr ? `${titleAbr} ` : ""}${name}`;
                    const image = getImage(person);
                    const languages = getLanguages(person);
                    const visibleLanguages = languages.slice(0, MAX_VISIBLE_LANGUAGES);
                    const hasMoreLanguages = languages.length > MAX_VISIBLE_LANGUAGES;
                    const detailsHref = getDetailsHref(person, index);
                    const external = isExternalHref(detailsHref);
                    const bookingDoctorId = getBookingDoctorId(person);

                    return (
                        <div key={person?.bookingDoctorId || person?.name || index} className="doctor-team-item">
                            <div className="doctor-team-row">
                                <div className="doctor-team-avatar">
                                    {image ? (
                                        <img
                                            src={require(`../../assets/img/staff/${image}`)}
                                            alt={name}
                                        />
                                    ) : (
                                        <span className="doctor-team-avatar-fallback">
                                            {name?.[0] || "D"}
                                        </span>
                                    )}
                                </div>

                                <div className="doctor-team-meta">
                                    <h3 className="doctor-team-name">
                                        <SingleLineName text={fullName} />
                                    </h3>

                                    {languages.length > 0 ? (
                                        <div className="doctor-team-languages">
                                            <span className="doctor-team-language-icon" aria-hidden="true">
                                                <i className="fa fa-globe" />
                                            </span>

                                            <div className="doctor-team-language-pills">
                                                {visibleLanguages.map((language) => (
                                                    <span
                                                        key={`${name}-${language}`}
                                                        className="doctor-team-language-pill"
                                                    >
                                                        {language}
                                                    </span>
                                                ))}

                                                {hasMoreLanguages ? (
                                                    <span className="doctor-team-language-pill more">
                                                        More...
                                                    </span>
                                                ) : null}
                                            </div>
                                        </div>
                                    ) : null}

                                    {bookingDoctorId ? (
                                        <div className="doctor-team-booking">
                                            <BookingButton
                                                doctorId={bookingDoctorId}
                                                size="small"
                                                label="Book Appointment"
                                                className="doctor-team-booking-button"
                                                mode="doctor"
                                            />
                                        </div>
                                    ) : null}
                                </div>

                                {detailsHref !== "#" ? (
                                    external ? (
                                        <a
                                            className="doctor-team-arrow"
                                            href={detailsHref}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View details for ${name}`}
                                        >
                                            <i className="fa fa-angle-right" aria-hidden="true" />
                                        </a>
                                    ) : (
                                        <Link
                                            className="doctor-team-arrow"
                                            to={`/doctor-details/${index}`}
                                            aria-label={`View details for ${name}`}
                                        >
                                            <i className="fa fa-angle-right" aria-hidden="true" />
                                        </Link>
                                    )
                                ) : (
                                    <span className="doctor-team-arrow" aria-hidden="true">
                                        <i className="fa fa-angle-right" />
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default DoctorsTeam;