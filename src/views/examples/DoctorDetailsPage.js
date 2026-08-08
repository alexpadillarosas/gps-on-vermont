import React, { useMemo } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import BookingButton from "../../components/General/BookingButton";

const slugify = (value = "") =>
    String(value)
        .toLowerCase()
        .trim()
        .replace(/['’]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

const DoctorDetailsPage = ({ staffData = [] }) => {
    const { doctorId } = useParams();
    const location = useLocation();

    // Extract state doctor to a separate variable for static check validation
    const stateDoctor = location?.state?.doctor;

    /*
     * IMPORTANT:
     * This filtering must match DoctorsTeam so that URLs such as
     * /doctor-details/5 point to the same doctor.
     */
    const doctors = useMemo(
        () =>
            (Array.isArray(staffData) ? staffData : []).filter(
                (person) =>
                    person &&
                    person.enabled !== false &&
                    person.doctor === true
            ),
        [staffData]
    );

    const doctor = useMemo(() => {
        /*
         * If DoctorsTeam passed the complete person object,
         * use that exact doctor.
         */
        if (stateDoctor) {
            return stateDoctor;
        }

        /*
         * Otherwise use the number in:
         *
         * /doctor-details/5
         *
         * as the index in the filtered doctors array.
         */
        const index = Number(doctorId);

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < doctors.length
        ) {
            return doctors[index];
        }

        /*
         * Also support bookingDoctorId/name slugs if you decide
         * to use them in the URL later.
         */
        const key = String(doctorId || "").toLowerCase();

        if (key) {
            return (
                doctors.find((person) => {
                    const bookingId = String(
                        person?.bookingDoctorId ||
                            person?.displayBookingButtonDrId ||
                            person?.bookingButtonDrId ||
                            person?.doctorId ||
                            person?.hotdocId ||
                            ""
                    ).toLowerCase();

                    const nameSlug = slugify(person?.name || "");

                    const titleSlug = slugify(
                        person?.titleAbr
                            ? `${person.titleAbr} ${person.name || ""}`
                            : person?.name || ""
                    );

                    return (
                        bookingId === key ||
                        nameSlug === key ||
                        titleSlug === key
                    );
                }) || null
            );
        }

        return null;
    }, [doctorId, doctors, stateDoctor]);

    /*
     * Doctor not found
     */
    if (!doctor) {
        return (
            <>
                <style>{`
                    .doctor-details-not-found {
                        min-height: 70vh;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 40px 20px;
                        text-align: center;
                        background: #f7f9fb;
                    }

                    .doctor-details-not-found h1 {
                        margin: 0 0 12px;
                        color: #2f3136;
                        font-size: 32px;
                        font-weight: 700;
                    }

                    .doctor-details-not-found p {
                        margin: 0 0 22px;
                        color: #6b7280;
                    }

                    .doctor-details-not-found a {
                        color: #5c18b4;
                        font-weight: 700;
                        text-decoration: none;
                    }
                `}</style>

                <div className="doctor-details-not-found">
                    <h1>Doctor not found</h1>

                    <p>
                        The requested doctor could not be found.
                    </p>

                    <Link to="/">
                        <i
                            className="fa fa-angle-left"
                            aria-hidden="true"
                        />{" "}
                        Back
                    </Link>
                </div>
            </>
        );
    }

    /*
     * Actual fields from staffData
     */
    const {
        titleAbr = "",
        name = "Doctor",
        image = "",
        accreditations = [],
        descriptions = [],
        speaks = [],
        booking = false,
        bookingDoctorId = null
    } = doctor;

    const qualifications = Array.isArray(accreditations)
        ? accreditations.filter(Boolean)
        : [];

    const languages = Array.isArray(speaks)
        ? speaks.filter(Boolean)
        : [];

    const biography = Array.isArray(descriptions)
        ? descriptions.filter(Boolean)
        : [];

    return (
        <>
            <style>{`

                /* ==========================================
                   PAGE
                ========================================== */

                .doctor-details-page {
                    min-height: 100vh;
                    background: #f7f9fb;
                    color: #2b2b2b;
                }


                /* ==========================================
                   HEADER / PROFILE AREA
                ========================================== */

                .doctor-details-header {
                    position: relative;
                    overflow: hidden;
                    padding: 30px 0 72px;
                    background: #f7f9fb;
                }


                /*
                 * Subtle decorative background shape
                 */
                .doctor-details-header::before {
                    content: "";
                    position: absolute;

                    width: 260px;
                    height: 260px;

                    top: -110px;
                    right: 28%;

                    transform: rotate(45deg);

                    background: rgba(255, 255, 255, 0.58);
                }


                /* ==========================================
                   MAIN CONTAINER
                ========================================== */

                .doctor-details-container {
                    width: min(1120px, calc(100% - 48px));
                    margin: 0 auto;

                    position: relative;
                    z-index: 1;
                }


                /* ==========================================
                   BACK LINK
                ========================================== */

                .doctor-details-back {
                    display: inline-flex;
                    align-items: center;

                    gap: 8px;

                    margin-bottom: 44px;

                    color: #5c18b4;

                    font-size: 14px;
                    font-weight: 700;

                    text-decoration: none;
                }

                .doctor-details-back:hover {
                    color: #44108a;
                    text-decoration: none;
                }

                .doctor-details-back i {
                    color: #ff4f61;
                    font-size: 20px;
                }


                /* ==========================================
                   PROFILE LAYOUT
                ========================================== */

                .doctor-details-layout {
                    display: block;
                }

                .doctor-details-profile {
                    width: 100%;
                    max-width: 760px;
                    min-width: 0;
                }


                /* ==========================================
                   DOCTOR IMAGE
                ========================================== */

                .doctor-details-avatar {
                    width: 128px;
                    height: 128px;

                    overflow: hidden;

                    border-radius: 50%;

                    background: #7d73d8;

                    box-shadow:
                        0 0 0 7px rgba(125, 115, 216, 0.12);

                    margin-bottom: 28px;
                }

                .doctor-details-avatar img {
                    width: 100%;
                    height: 100%;

                    object-fit: cover;

                    display: block;
                }

                .doctor-details-avatar-fallback {
                    width: 100%;
                    height: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    color: #ffffff;

                    font-size: 34px;
                    font-weight: 800;
                }


                /* ==========================================
                   NAME
                ========================================== */

                .doctor-details-name {
                    margin: 0;

                    color: #252525;

                    font-size: 44px;
                    font-weight: 800;

                    line-height: 1.08;

                    letter-spacing: -0.035em;
                }


                /* ==========================================
                   ACCREDITATIONS
                ========================================== */

                .doctor-details-accreditations {
                    margin-top: 10px;

                    color: #80838a;

                    font-size: 15px;
                    line-height: 1.5;
                }


                /* ==========================================
                   LANGUAGES
                ========================================== */

                .doctor-details-languages {
                    display: flex;
                    align-items: center;
                    flex-wrap: wrap;

                    gap: 7px;

                    margin-top: 20px;
                }

                .doctor-details-language-icon {
                    display: inline-flex;

                    align-items: center;
                    justify-content: center;

                    width: 22px;

                    margin-right: 2px;

                    color: #16b8b0;

                    font-size: 20px;
                }

                .doctor-details-language-pill {
                    display: inline-flex;
                    align-items: center;

                    min-height: 30px;

                    padding: 5px 11px;

                    border-radius: 999px;

                    background: #dff7f4;

                    color: #267b77;

                    font-size: 13px;
                    font-weight: 600;

                    white-space: nowrap;
                }


                /* ==========================================
                   BOOK APPOINTMENT
                ========================================== */

                .doctor-details-booking {
                    margin-top: 20px;
                }

                .doctor-details-booking-button {
                    min-width: 170px !important;
                }


                /* ==========================================
                   BIOGRAPHY
                ========================================== */

                .doctor-details-biography {
                    margin-top: 34px;

                    max-width: 760px;

                    color: #34363a;

                    font-size: 18px;
                    line-height: 1.65;
                }

                .doctor-details-biography p {
                    margin: 0 0 22px;
                }


                /* ==========================================
                   TABLET
                ========================================== */

                @media (max-width: 991px) {

                    .doctor-details-name {
                        font-size: 38px;
                    }

                    .doctor-details-profile {
                        max-width: 680px;
                    }
                }


                /* ==========================================
                   MOBILE
                ========================================== */

                @media (max-width: 767px) {

                    .doctor-details-container {
                        width: calc(100% - 28px);
                    }

                    .doctor-details-header {
                        padding: 22px 0 54px;
                    }

                    .doctor-details-back {
                        margin-bottom: 30px;
                    }

                    .doctor-details-avatar {
                        width: 104px;
                        height: 104px;
                    }

                    .doctor-details-name {
                        font-size: 32px;
                    }

                    .doctor-details-biography {
                        font-size: 16px;
                    }
                }
            `}</style>

            <div className="doctor-details-page">

                <section className="doctor-details-header">

                    <div className="doctor-details-container">

                        {/* Back */}
                        <Link
                            to="/"
                            className="doctor-details-back"
                        >
                            <i
                                className="fa fa-angle-left"
                                aria-hidden="true"
                            />

                            Back to all clinicians
                        </Link>


                        <div className="doctor-details-layout">

                            <main className="doctor-details-profile">

                                {/* Doctor image */}
                                <div className="doctor-details-avatar">

                                    {image ? (
                                        <img
                                            src={require(
                                                `../../assets/img/staff/${image}`
                                            )}
                                            alt={name}
                                        />
                                    ) : (
                                        <span className="doctor-details-avatar-fallback">
                                            {name.charAt(0)}
                                        </span>
                                    )}

                                </div>


                                {/* Name */}
                                <h1 className="doctor-details-name">

                                    {titleAbr
                                        ? `${titleAbr} `
                                        : ""}

                                    {name}

                                </h1>


                                {/* Qualifications */}
                                {qualifications.length > 0 ? (

                                    <div className="doctor-details-accreditations">

                                        {qualifications.join(", ")}

                                    </div>

                                ) : null}


                                {/* Languages */}
                                {languages.length > 0 ? (

                                    <div className="doctor-details-languages">

                                        <span
                                            className="doctor-details-language-icon"
                                            aria-hidden="true"
                                        >
                                            <i className="fa fa-globe" />
                                        </span>

                                        {languages.map((language) => (

                                            <span
                                                key={`${name}-${language}`}
                                                className="doctor-details-language-pill"
                                            >
                                                {language}
                                            </span>

                                        ))}

                                    </div>

                                ) : null}


                                {/* Booking */}
                                {booking && bookingDoctorId ? (

                                    <div className="doctor-details-booking">

                                        <BookingButton
                                            doctorId={bookingDoctorId}
                                            size="medium"
                                            label="Book Appointment"
                                            className="doctor-details-booking-button"
                                            mode="doctor"
                                        />

                                    </div>

                                ) : null}


                                {/* Biography */}
                                <div className="doctor-details-biography">

                                    {biography.length > 0 ? (

                                        biography.map(
                                            (paragraph, index) => (

                                                <p
                                                    key={`${name}-bio-${index}`}
                                                >
                                                    {paragraph}
                                                </p>

                                            )
                                        )

                                    ) : (

                                        <p>
                                            No biography is currently available.
                                        </p>

                                    )}

                                </div>

                            </main>

                        </div>

                    </div>

                </section>

            </div>
        </>
    );
};

export default DoctorDetailsPage;