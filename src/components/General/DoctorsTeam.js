// Generated: 2026-08-09 13:17 AEST
// DoctorsTeam.jsx
//
// Example usage:
//
// <div className="landing-team-wrapper">
//     <DoctorsTeam
//         staffData={staffContent}
//         columns={3}
//         showBookingButton={true}
//     />
// </div>
//
// columns={3} = 3 doctors per row on desktop.
// columns={2} = 2 doctors per row on desktop.
// columns={1} = 1 doctor per row.
//
// showBookingButton controls whether Doctor.jsx displays booking buttons.

import React from "react";
import Doctor from "./Doctor";

const DEFAULT_COLUMNS = 1;

const DoctorsTeam = ({
    staffData = [],
    columns = DEFAULT_COLUMNS,
    showBookingButton = true,
    className = ""
}) => {
    const visibleStaff = (Array.isArray(staffData) ? staffData : []).filter(
        (person) =>
            person &&
            person.enabled !== false &&
            person.doctor === true
    );

    /*
     * Make sure columns is always a valid positive integer.
     *
     * If:
     *     columns={3}
     *
     * safeColumns will be:
     *     3
     */
    const parsedColumns = Number(columns);

    const safeColumns =
        Number.isFinite(parsedColumns) && parsedColumns > 0
            ? Math.floor(parsedColumns)
            : DEFAULT_COLUMNS;

    return (
        <>
            <style>{`
                /*
                 * IMPORTANT:
                 * This element contains the Doctor components directly.
                 *
                 * We deliberately do NOT use:
                 * table
                 * tbody
                 * tr
                 * td
                 *
                 * because those elements prevent the Doctor components
                 * from behaving as normal CSS Grid items.
                 */
                .doctors-team-grid {
                    width: 100%;
                    display: grid;
                    align-items: stretch;
                    gap: 0 24px;
                    box-sizing: border-box;
                }

                /*
                 * Doctor.jsx outer container
                 */
                .doctor-team-item {
                    width: 100%;
                    min-width: 0;
                    box-sizing: border-box;
                    border-bottom: 1px solid #ececec;
                }

                /*
                 * Internal layout of ONE doctor.
                 */
                .doctor-team-row {
                    width: 100%;
                    min-width: 0;
                    min-height: 165px;

                    display: grid;
                    grid-template-columns: 104px minmax(0, 1fr) 24px;
                    gap: 14px;

                    align-items: stretch;

                    padding: 16px 0 12px;
                    box-sizing: border-box;
                }

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
                 * Tablet
                 *
                 * The inline gridTemplateColumns controls the desktop
                 * column count.
                 *
                 * On smaller screens we intentionally override it.
                 */
                @media (max-width: 991px) {
                    .doctors-team-grid {
                        grid-template-columns:
                            repeat(2, minmax(0, 1fr)) !important;
                    }
                }

                /*
                 * Mobile
                 */
                @media (max-width: 767px) {
                    .doctors-team-grid {
                        grid-template-columns: 1fr !important;
                        column-gap: 0;
                    }

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
                }
            `}</style>

            <div
                className={`doctors-team-grid ${className}`.trim()}
                style={{
                    /*
                     * THIS IS THE COLUMN FIX.
                     *
                     * columns={3}
                     *
                     * becomes:
                     *
                     * grid-template-columns:
                     * repeat(3, minmax(0, 1fr))
                     *
                     * Because this is inline CSS, it has priority over
                     * ordinary external CSS rules.
                     */
                    display: "grid",
                    width: "100%",
                    gridTemplateColumns: `repeat(${safeColumns}, minmax(0, 1fr))`,
                    columnGap: "24px",
                    rowGap: "0"
                }}
            >
                {visibleStaff.map((person, index) => (
                    <Doctor
                        key={
                            person?.bookingDoctorId ||
                            person?.name ||
                            index
                        }
                        person={person}
                        index={index}
                        // size="tiny"
                        showBookingButton={showBookingButton}
                    />
                ))}
            </div>
        </>
    );
};

export default DoctorsTeam;