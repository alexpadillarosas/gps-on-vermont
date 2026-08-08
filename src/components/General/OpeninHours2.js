import React from "react";
import { Link } from "react-router-dom";

const OpeningHours2 = () => {
    const hours = [
        { day: "Monday", time: "7:45 am to 5:30 pm" },
        { day: "Tuesday", time: "7:45 am to 5:30 pm" },
        { day: "Wednesday — Opening Late", time: "7:45 am to 8:00 pm" },
        { day: "Thursday — Opening Late", time: "7:45 am to 8:00 pm" },
        { day: "Friday", time: "7:45 am to 5:30 pm" },
        { day: "Saturday", time: "closed", closed: true },
        { day: "Sunday", time: "closed", closed: true }
    ];

    return (
        <>
            <style>{`
                .opening-hours-panel {
                    background: #ffffff;
                    border-radius: 24px;
                    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
                    border: 1px solid rgba(226, 232, 240, 0.9);
                    padding: 30px;
                }

                .opening-hours-label {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 9px 14px;
                    border-radius: 999px;
                    background: #eef5ff;
                    color: #2590ff;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }

                .opening-hours-title {
                    margin: 0;
                    color: #68717f;
                    font-size: 30px;
                    font-weight: 800;
                    line-height: 1.15;
                    letter-spacing: -0.03em;
                }

                .opening-hours-text {
                    margin: 12px 0 24px;
                    color: #8a93a3;
                    font-size: 16px;
                    line-height: 1.55;
                }

                .opening-hours-list {
                    display: grid;
                    gap: 0;
                    margin-top: 6px;
                    border-top: 1px solid #edf1f5;
                }

                .opening-hours-row {
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) auto;
                    gap: 18px;
                    align-items: start;
                    padding: 14px 0;
                    border-bottom: 1px solid #edf1f5;
                }

                .opening-hours-day {
                    color: #2b313a;
                    font-size: 17px;
                    font-weight: 700;
                    line-height: 1.35;
                }

                .opening-hours-day-note {
                    display: block;
                    margin-top: 3px;
                    color: #7e8796;
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 1.25;
                }

                .opening-hours-time {
                    color: #526071;
                    font-size: 16px;
                    font-weight: 700;
                    text-align: right;
                    white-space: nowrap;
                }

                .opening-hours-row.closed .opening-hours-day,
                .opening-hours-row.closed .opening-hours-time {
                    color: #93a0b3;
                }

                .opening-hours-footer {
                    margin-top: 22px;
                    display: flex;
                    justify-content: flex-start;
                }

                .opening-hours-link {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 42px;
                    padding: 0 18px;
                    border-radius: 999px;
                    background: #eef5ff;
                    color: #2f7fff;
                    font-size: 14px;
                    font-weight: 700;
                    text-decoration: none;
                    border: 1px solid rgba(47, 127, 255, 0.18);
                    transition: transform 0.15s ease, background-color 0.15s ease;
                }

                .opening-hours-link:hover {
                    background: #e6f0ff;
                    transform: translateY(-1px);
                    text-decoration: none;
                    color: #266df2;
                }

                @media (max-width: 991px) {
                    .opening-hours-panel {
                        padding: 24px;
                    }

                    .opening-hours-title {
                        font-size: 26px;
                    }
                }

                @media (max-width: 767px) {
                    .opening-hours-panel {
                        padding: 20px;
                        border-radius: 20px;
                    }

                    .opening-hours-title {
                        font-size: 22px;
                    }

                    .opening-hours-text {
                        font-size: 14px;
                        margin-bottom: 18px;
                    }

                    .opening-hours-row {
                        grid-template-columns: 1fr;
                        gap: 8px;
                        padding: 12px 0;
                    }

                    .opening-hours-time {
                        text-align: left;
                        font-size: 15px;
                    }

                    .opening-hours-day {
                        font-size: 15px;
                    }

                    .opening-hours-link {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="opening-hours-panel">
                <div className="opening-hours-label">Consultation Hours</div>

                <h2 className="opening-hours-title">
                    Plan your visit at a glance
                </h2>

                <p className="opening-hours-text">
                    Check opening times before you travel to the clinic.
                </p>

                <div className="opening-hours-list">
                    {hours.map((item) => (
                        <div
                            key={item.day}
                            className={`opening-hours-row${item.closed ? " closed" : ""}`}
                        >
                            <div className="opening-hours-day">
                                {item.day}
                            </div>

                            <div className="opening-hours-time">
                                {item.time}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="opening-hours-footer">
                    <Link to="/afterhours-page" className="opening-hours-link">
                        Check after hours care
                    </Link>
                </div>
            </div>
        </>
    );
};

export default OpeningHours2;