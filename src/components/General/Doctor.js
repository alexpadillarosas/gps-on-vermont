// Generated: 2026-08-09 14:18 AEST
// Doctor.jsx
//
// Displays ONE doctor.
//
// Presentation sizes:
//
// size="tiny"
//   Compact presentation intended for areas such as the Fees page.
//
// size="small"
//   Current/default Doctor presentation.
//
// size="medium"
//   Reserved for future configuration.
//   Currently uses the small presentation.
//
// size="large"
//   Reserved for future configuration.
//   Currently uses the small presentation.
//
// Example:
//
// <Doctor
//     person={doctor}
//     index={0}
//     size="tiny"
//     showBookingButton={true}
// />

import React from "react";
import { Link } from "react-router-dom";
import BookingButton from "./BookingButton";

const MAX_VISIBLE_LANGUAGES = 2;

const PRESENTATION_SIZES = [
    "tiny",
    "small",
    "medium",
    "large"
];

const SingleLineName = ({ text }) => {
    const safeText = text || "Doctor";
    const targetWidth = Math.max(safeText.length * 10, 160);

    return (
        <svg
            viewBox={`0 0 ${targetWidth} 24`}
            className="doctor-team-name-svg"
            aria-label={safeText}
            role="img"
            preserveAspectRatio="xMinYMid meet"
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
                textAnchor="start"
            >
                {safeText}
            </text>
        </svg>
    );
};

const getName = (person) =>
    person?.name || "Doctor";

const getTitleAbr = (person) =>
    person?.titleAbr || "";

const getImage = (person) =>
    person?.image || "";

const getLanguages = (person) => {
    const languages = person?.speaks || [];

    return Array.isArray(languages)
        ? languages.filter(Boolean)
        : [];
};

const getBookingDoctorId = (person) =>
    person?.bookingDoctorId ||
    person?.displayBookingButtonDrId ||
    person?.bookingButtonDrId ||
    person?.doctorId ||
    person?.hotdocId ||
    null;

const getDetailsHref = (person, index) => {
    if (person?.profileLink) {
        return person.profileLink;
    }

    if (person?.profileUrl) {
        return person.profileUrl;
    }

    if (person?.href) {
        return person.href;
    }

    if (person?.link) {
        return person.link;
    }

    return `/doctor-details/${index}`;
};

const isExternalHref = (href) =>
    typeof href === "string" &&
    (
        href.startsWith("http://") ||
        href.startsWith("https://")
    );

const Doctor = ({
    person,
    index,
    showBookingButton = true,
    size = "small"
}) => {
    const name = getName(person);
    const titleAbr = getTitleAbr(person);

    const fullName =
        `${titleAbr ? `${titleAbr} ` : ""}${name}`;

    const image = getImage(person);

    const languages = getLanguages(person);

    const visibleLanguages =
        languages.slice(0, MAX_VISIBLE_LANGUAGES);

    const hasMoreLanguages =
        languages.length > MAX_VISIBLE_LANGUAGES;

    const detailsHref =
        getDetailsHref(person, index);

    const external =
        isExternalHref(detailsHref);

    const bookingDoctorId =
        getBookingDoctorId(person);

    const imageSrc = image
        ? require(`../../assets/img/staff/${image}`)
        : null;

    /*
     * Validate requested presentation size.
     *
     * Unknown values fall back to "small".
     */
    const requestedSize = PRESENTATION_SIZES.includes(size)
        ? size
        : "small";

    /*
     * At the moment only "tiny" has its own presentation.
     *
     * medium and large are reserved for future use and
     * currently inherit the small presentation.
     */
    const presentationSize =
        requestedSize === "tiny"
            ? "tiny"
            : "small";

    /*
     * Booking button can be controlled globally through
     * the component prop:
     *
     * showBookingButton={false}
     *
     * Or individually through staff data:
     *
     * {
     *     name: "Dr Example",
     *     showBookingButton: false
     * }
     */
    const shouldShowBookingButton =
        showBookingButton &&
        person?.showBookingButton !== false &&
        Boolean(bookingDoctorId);

    return (
        <>
            <style>{`
                /*
                 * ============================================
                 * SHARED DOCTOR PRESENTATION
                 * ============================================
                 */

                .doctor-team-item {
                    width: 100%;
                    min-width: 0;
                    box-sizing: border-box;
                }

                .doctor-team-row {
                    width: 100%;
                    min-width: 0;
                    min-height: 165px;

                    display: grid;

                    grid-template-columns:
                        104px minmax(0, 1fr) 24px;

                    gap: 14px;

                    align-items: stretch;

                    padding: 16px 0 12px;

                    box-sizing: border-box;
                }

                /*
                 * --------------------------------------------
                 * Avatar
                 * --------------------------------------------
                 */

                .doctor-team-avatar {
                    width: 104px;
                    height: 104px;

                    border-radius: 50%;

                    overflow: hidden;

                    background: #7d73d8;

                    box-shadow:
                        0 0 0 2px rgba(125, 115, 216, 0.12);

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

                /*
                 * --------------------------------------------
                 * Doctor information
                 * --------------------------------------------
                 *
                 * IMPORTANT:
                 *
                 * align-items: flex-start
                 * text-align: left
                 *
                 * ensure names/content remain left aligned
                 * regardless of the surrounding page styles.
                 */

                .doctor-team-meta {
                    min-width: 0;
                    width: 100%;
                    height: 100%;

                    display: flex;
                    flex-direction: column;

                    align-items: flex-start;

                    text-align: left;

                    padding-top: 2px;

                    box-sizing: border-box;
                }

                /*
                 * --------------------------------------------
                 * Doctor name
                 * --------------------------------------------
                 */

                .doctor-team-name {
                    width: 100%;

                    margin: 0 0 6px;

                    padding: 0;

                    line-height: 1.18;

                    text-align: left !important;
                }

                .doctor-team-name-svg {
                    width: 100%;
                    height: 24px;

                    display: block;

                    margin: 0;
                    padding: 0;

                    text-align: left;
                }

                /*
                 * --------------------------------------------
                 * Languages
                 * --------------------------------------------
                 */

                .doctor-team-languages {
                    display: flex;

                    align-items: center;

                    gap: 6px;

                    min-width: 0;

                    flex-wrap: nowrap;

                    white-space: nowrap;

                    margin: 0;
                    padding: 0;
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

                    margin: 0;
                    padding: 0;
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

                /*
                 * --------------------------------------------
                 * Booking
                 * --------------------------------------------
                 */

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

                /*
                 * --------------------------------------------
                 * Details arrow
                 * --------------------------------------------
                 */

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

                    transition:
                        transform 0.2s ease,
                        color 0.2s ease;

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


                /*
                 * ============================================
                 * TINY PRESENTATION
                 * ============================================
                 *
                 * Intended for compact areas such as the
                 * Fees page.
                 */

                .doctor-team-item.doctor-size-tiny {
                    min-width: 0;
                }

                .doctor-size-tiny .doctor-team-row {
                    min-height: 108px;

                    grid-template-columns:
                        72px minmax(0, 1fr) 20px;

                    gap: 10px;

                    padding: 9px 0;

                    align-items: start;
                }

                /*
                 * Tiny avatar
                 */

                .doctor-size-tiny .doctor-team-avatar {
                    width: 72px;
                    height: 72px;

                    box-shadow:
                        0 0 0 2px rgba(125, 115, 216, 0.10);
                }

                .doctor-size-tiny .doctor-team-avatar-fallback {
                    font-size: 21px;
                }

                /*
                 * Tiny content
                 */

                .doctor-size-tiny .doctor-team-meta {
                    padding-top: 0;

                    align-items: flex-start;

                    text-align: left;
                }

                /*
                 * Tiny name
                 */

                .doctor-size-tiny .doctor-team-name {
                    width: 100%;

                    margin: 0 0 3px;

                    text-align: left !important;
                }

                .doctor-size-tiny .doctor-team-name-svg {
                    width: 100%;
                    height: 21px;

                    margin: 0;

                    display: block;
                }

                /*
                 * Tiny languages
                 */

                .doctor-size-tiny .doctor-team-languages {
                    gap: 4px;

                    margin: 0;

                    padding: 0;
                }

                .doctor-size-tiny .doctor-team-language-icon {
                    width: 14px;
                    min-width: 14px;

                    font-size: 12px;
                }

                .doctor-size-tiny .doctor-team-language-pills {
                    gap: 4px;
                }

                .doctor-size-tiny .doctor-team-language-pill {
                    height: 19px;

                    padding: 0 6px;

                    font-size: 9px;
                }

                /*
                 * IMPORTANT:
                 *
                 * Previously this used:
                 *
                 * margin-top: auto;
                 * padding-top: 7px;
                 *
                 * That pushed the button towards the bottom
                 * of the card and created the large visual
                 * gap shown in the screenshot.
                 *
                 * Tiny mode now keeps the booking button
                 * directly underneath the languages.
                 */

                .doctor-size-tiny .doctor-team-booking {
                    margin-top: 3px;

                    padding-top: 0;

                    display: flex;

                    align-items: center;
                }

                .doctor-size-tiny .doctor-team-booking-button {
                    min-width: 118px !important;

                    min-height: 28px !important;
                    height: 28px !important;

                    padding: 0 11px !important;

                    font-size: 10px !important;
                }

                /*
                 * Tiny arrow
                 */

                .doctor-size-tiny .doctor-team-arrow {
                    width: 20px;
                    height: 20px;

                    margin-top: 0;
                }

                .doctor-size-tiny .doctor-team-arrow i {
                    font-size: 18px;
                }


                /*
                 * ============================================
                 * MOBILE
                 * ============================================
                 */

                @media (max-width: 767px) {

                    /*
                     * Normal/small doctor
                     */

                    .doctor-team-row {
                        grid-template-columns:
                            88px minmax(0, 1fr) 24px;

                        gap: 12px;

                        min-height: 150px;

                        padding: 14px 0 12px;
                    }

                    .doctor-team-avatar {
                        width: 88px;
                        height: 88px;
                    }

                    .doctor-team-booking-button {
                        min-width: 130px !important;

                        min-height: 30px !important;
                        height: 30px !important;

                        padding: 0 14px !important;

                        font-size: 11px !important;
                    }


                    /*
                     * Tiny doctor on mobile
                     */

                    .doctor-size-tiny .doctor-team-row {
                        grid-template-columns:
                            64px minmax(0, 1fr) 20px;

                        min-height: 98px;

                        gap: 9px;

                        padding: 8px 0;
                    }

                    .doctor-size-tiny .doctor-team-avatar {
                        width: 64px;
                        height: 64px;
                    }

                    .doctor-size-tiny .doctor-team-booking {
                        margin-top: 3px;
                        padding-top: 0;
                    }

                    .doctor-size-tiny .doctor-team-booking-button {
                        min-width: 112px !important;

                        min-height: 27px !important;
                        height: 27px !important;

                        padding: 0 10px !important;

                        font-size: 10px !important;
                    }
                }
            `}</style>

            <div
                className={`doctor-team-item doctor-size-${presentationSize}`}
                data-doctor-size={requestedSize}
            >
                <div className="doctor-team-row">

                    {/* Doctor photo */}
                    <div className="doctor-team-avatar">
                        {imageSrc ? (
                            <img
                                src={imageSrc}
                                alt={name}
                            />
                        ) : (
                            <span className="doctor-team-avatar-fallback">
                                {name?.[0] || "D"}
                            </span>
                        )}
                    </div>


                    {/* Doctor information */}
                    <div className="doctor-team-meta">

                        {/* Doctor name */}
                        <h3 className="doctor-team-name">
                            <SingleLineName text={fullName} />
                        </h3>


                        {/* Languages */}
                        {languages.length > 0 && (
                            <div className="doctor-team-languages">

                                <span
                                    className="doctor-team-language-icon"
                                    aria-hidden="true"
                                >
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

                                    {hasMoreLanguages && (
                                        <span className="doctor-team-language-pill more">
                                            More...
                                        </span>
                                    )}

                                </div>
                            </div>
                        )}


                        {/* Booking */}
                        {shouldShowBookingButton && (
                            <div className="doctor-team-booking">
                                <BookingButton
                                    doctorId={bookingDoctorId}
                                    size="small"
                                    label="Book Appointment"
                                    className="doctor-team-booking-button"
                                    mode="doctor"
                                />
                            </div>
                        )}

                    </div>


                    {/* Doctor details link */}
                    {detailsHref !== "#" ? (
                        external ? (
                            <a
                                className="doctor-team-arrow"
                                href={detailsHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View details for ${name}`}
                            >
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </a>
                        ) : (
                            <Link
                                className="doctor-team-arrow"
                                to={detailsHref}
                                aria-label={`View details for ${name}`}
                            >
                                <i
                                    className="fa fa-angle-right"
                                    aria-hidden="true"
                                />
                            </Link>
                        )
                    ) : (
                        <span
                            className="doctor-team-arrow"
                            aria-hidden="true"
                        >
                            <i className="fa fa-angle-right" />
                        </span>
                    )}

                </div>
            </div>
        </>
    );
};

export default Doctor;