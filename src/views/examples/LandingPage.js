import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import ScrollUpButton from "react-scroll-up-button";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

import DarkFooter from "../../components/Footers/DarkFooter";
import BarButtonsLandPageHeader from "../../components/General/BarButtonsLandPageHeader";
import NewsCardsPreview from "../../components/General/NewsCardsPreview";
import OpeningHours2 from "../../components/General/OpeninHours2";
import OurTeam from "../../components/General/OurTeam";
import ServiceCardBlock from "../../components/General/ServiceCardBlock";
import LandingPageHeader from "../../components/Headers/LandingPageHeader.js";
import HomeNavbar from "../../components/NavBars/HomeNavbar";
import newsContent from "../../data/news-content";
import staffContent from "../../data/staff-content";
import { headerScrolling } from "./commons";
import TeleHealth from "../../components/General/TeleHealth";
import SearchNews from "../../components/General/SearchNews";
import BookingButton from "../../components/General/BookingButton";
import DoctorsTeam from "../../components/General/DoctorsTeam";

function BookIllustration() {
    return (
        <svg viewBox="0 0 520 260" className="landing-tile-illustration" aria-hidden="true">
            <defs>
                <linearGradient id="bookBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8fff3" />
                    <stop offset="100%" stopColor="#9ce7bf" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="520" height="260" rx="26" fill="url(#bookBg)" />
            <circle cx="396" cy="74" r="52" fill="rgba(255,255,255,0.28)" />
            <rect x="120" y="54" width="122" height="152" rx="18" fill="#ffffff" opacity="0.96" />
            <rect x="146" y="80" width="70" height="18" rx="9" fill="#2ca8ff" opacity="0.82" />
            <rect x="146" y="112" width="82" height="12" rx="6" fill="#dff3ff" />
            <rect x="146" y="132" width="62" height="12" rx="6" fill="#dff3ff" />
            <rect x="146" y="152" width="74" height="12" rx="6" fill="#dff3ff" />
            <rect x="282" y="78" width="140" height="16" rx="8" fill="#ffffff" opacity="0.78" />
            <rect x="282" y="104" width="120" height="12" rx="6" fill="#ffffff" opacity="0.72" />
            <rect x="282" y="124" width="146" height="12" rx="6" fill="#ffffff" opacity="0.72" />
            <rect x="282" y="144" width="108" height="12" rx="6" fill="#ffffff" opacity="0.72" />
            <rect x="214" y="192" width="150" height="16" rx="8" fill="#ffffff" opacity="0.9" />
        </svg>
    );
}

function SearchIllustration() {
    return (
        <svg viewBox="0 0 520 260" className="landing-tile-illustration" aria-hidden="true">
            <defs>
                <linearGradient id="searchBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#eef5ff" />
                    <stop offset="100%" stopColor="#b7d4ff" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="520" height="260" rx="26" fill="url(#searchBg)" />
            <circle cx="392" cy="76" r="54" fill="rgba(255,255,255,0.24)" />
            <rect x="114" y="64" width="248" height="132" rx="18" fill="#ffffff" opacity="0.96" />
            <rect x="138" y="88" width="122" height="14" rx="7" fill="#dfeaff" />
            <rect x="138" y="114" width="160" height="12" rx="6" fill="#edf4ff" />
            <rect x="138" y="134" width="130" height="12" rx="6" fill="#edf4ff" />
            <rect x="138" y="154" width="150" height="12" rx="6" fill="#edf4ff" />
            <circle cx="374" cy="112" r="36" fill="#ffffff" opacity="0.95" />
            <circle cx="370" cy="108" r="14" fill="none" stroke="#2ca8ff" strokeWidth="7" />
            <path d="M380 118l16 16" stroke="#2ca8ff" strokeWidth="7" strokeLinecap="round" />
            <rect x="220" y="194" width="150" height="16" rx="8" fill="#ffffff" opacity="0.9" />
        </svg>
    );
}

function TelehealthIllustration() {
    return (
        <svg viewBox="0 0 520 260" className="landing-tile-illustration" aria-hidden="true">
            <defs>
                <linearGradient id="teleBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dff1ff" />
                    <stop offset="100%" stopColor="#7fc5ff" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="520" height="260" rx="26" fill="url(#teleBg)" />
            <circle cx="392" cy="76" r="54" fill="rgba(255,255,255,0.22)" />
            <rect x="116" y="42" width="258" height="154" rx="18" fill="#ffffff" opacity="0.96" />
            <rect x="136" y="62" width="94" height="94" rx="47" fill="#d6f3ff" />
            <circle cx="183" cy="100" r="28" fill="#ffffff" />
            <circle cx="172" cy="96" r="4" fill="#2ca8ff" />
            <circle cx="193" cy="96" r="4" fill="#2ca8ff" />
            <path d="M170 114c5 5 14 5 20 0" stroke="#2ca8ff" strokeWidth="3" strokeLinecap="round" fill="none" />
            <rect x="250" y="72" width="112" height="16" rx="8" fill="#e9f7ff" />
            <rect x="250" y="98" width="96" height="12" rx="6" fill="#e9f7ff" />
            <rect x="250" y="118" width="122" height="12" rx="6" fill="#e9f7ff" />
            <rect x="220" y="190" width="150" height="16" rx="8" fill="#ffffff" opacity="0.88" />
            <path d="M406 54h70v70h-70z" fill="#ffffff" opacity="0.96" rx="18" />
            <path d="M422 88h38M441 69v38" stroke="#2ca8ff" strokeWidth="6" strokeLinecap="round" />
        </svg>
    );
}

function HoursIllustration() {
    return (
        <svg viewBox="0 0 520 260" className="landing-tile-illustration" aria-hidden="true">
            <defs>
                <linearGradient id="hoursBg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ebf0ff" />
                    <stop offset="100%" stopColor="#7d94e8" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="520" height="260" rx="26" fill="url(#hoursBg)" />
            <circle cx="396" cy="74" r="52" fill="rgba(255,255,255,0.18)" />
            <rect x="92" y="46" width="336" height="168" rx="18" fill="rgba(255,255,255,0.14)" />
            <text x="120" y="92" fill="#ffffff" fontSize="20" fontWeight="700">Monday</text>
            <text x="378" y="92" fill="#ffffff" fontSize="20" fontWeight="700" textAnchor="end">7:45 am to 5:30 pm</text>
            <text x="120" y="124" fill="#ffffff" fontSize="20" fontWeight="700">Tuesday</text>
            <text x="378" y="124" fill="#ffffff" fontSize="20" fontWeight="700" textAnchor="end">7:45 am to 5:30 pm</text>
            <text x="120" y="156" fill="#ffffff" fontSize="20" fontWeight="700">Wednesday</text>
            <text x="378" y="156" fill="#ffffff" fontSize="20" fontWeight="700" textAnchor="end">7:45 am to 8:00 pm</text>
            <text x="120" y="188" fill="#ffffff" fontSize="20" fontWeight="700">Thursday</text>
            <text x="378" y="188" fill="#ffffff" fontSize="20" fontWeight="700" textAnchor="end">7:45 am to 8:00 pm</text>
            <text x="120" y="220" fill="#ffffff" fontSize="20" fontWeight="700">Friday</text>
            <text x="378" y="220" fill="#ffffff" fontSize="20" fontWeight="700" textAnchor="end">7:45 am to 5:30 pm</text>
        </svg>
    );
}

function LandingPage() {
    const messageTitle = "GPs On Vermont Medical Centre";
    const bulkBilled = "gpv-bulk-billed-medical-centre.png";
    const privateBilled = "gpv-private-billed-medical-centre.png";

    const imageTest1 = "yellow-fever-badge.png";
    const imageTest2 = "q-fever-badge.png";
    const imageTest3 = "travel-immunisation-badge.png";
    const imageTest4 = "flu-vaccines-badge.png";

    const consultationTypes = [
        "Standard consultation",
        "Long consultation",
        "Extended consultation",
        "Short consultation",
        "Walk In consultation",
        "Telehealth"
    ];

    const landingPagePreviewNews = newsContent.filter((news) => news.enabled);

    useEffect(() => {
        headerScrolling();
    }, []);

    const seeMoreComponent = (
        <div className="landing-see-more">
            <Link to="/news">
                <Button color="info" className="landing-see-more-button">
                    See More News
                </Button>
            </Link>
        </div>
    );

    const taskCards = [
        {
            title: "Book Appointment",
            text: "Jump straight to the booking flow.",
            link: "/booking",
            action: "Book now",
            illustration: <BookIllustration />
        },
        {
            title: "Find a Service",
            text: "See what the clinic offers and choose the right service.",
            link: "#services",
            action: "View services",
            illustration: <SearchIllustration />
        },
        {
            title: "Telehealth",
            text: "Connect with a doctor online when you do not need to visit.",
            link: "#telehealth",
            action: "Learn more",
            illustration: <TelehealthIllustration />
        },
        {
            title: "Opening Hours",
            text: "Check consultation times before you plan your visit.",
            link: "#hours",
            action: "See hours",
            illustration: <HoursIllustration />
        }
    ];

    return (
        <>
            <ScrollUpButton style={{ bottom: 87 }} />

            <style>{`
                html {
                    scroll-behavior: smooth;
                }

                .landing-section {
                    padding: 64px 0;
                }

                .landing-section-soft {
                    background: #f7f9fb;
                }

                .landing-section-heading {
                    max-width: 850px;
                    margin: 0 auto 32px auto;
                    text-align: center;
                }

                .landing-section-title {
                    margin: 0 0 12px 0;
                    color: #66717c;
                    font-size: 34px;
                    font-weight: 600;
                    line-height: 1.25;
                    text-transform: none;
                }

                .landing-section-description {
                    max-width: 760px;
                    margin: 0 auto;
                    color: #7a838c;
                    font-size: 16px;
                    line-height: 1.7;
                }

                .landing-hero {
                    padding-top: 44px;
                    padding-bottom: 56px;
                }

                .landing-hero-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    padding: 8px 14px;
                    border-radius: 999px;
                    background: rgba(44, 168, 255, 0.12);
                    color: #2ca8ff;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    margin-bottom: 14px;
                }

                .landing-hero-title {
                    margin: 0 0 16px 0;
                    color: #5f6b78;
                    font-size: 40px;
                    font-weight: 700;
                    line-height: 1.12;
                    letter-spacing: -0.03em;
                }

                .landing-hero-copy {
                    margin: 0 0 22px 0;
                    color: #747e88;
                    font-size: 17px;
                    line-height: 1.85;
                    max-width: 58ch;
                }

                .landing-hero-left {
                    display: flex;
                    flex-direction: column;
                    align-self: stretch;
                }

                .landing-hero-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    align-items: center;
                    margin-bottom: 18px;
                }

                .landing-hero-actions .btn {
                    min-width: 160px;
                    border-radius: 999px;
                    padding-left: 22px;
                    padding-right: 22px;
                    font-weight: 600;
                }

                .landing-hero-secondary {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    align-items: center;
                    margin-top: 14px;
                }

                .landing-hero-chip {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 8px 14px;
                    border-radius: 999px;
                    background: #eff6ff;
                    color: #1d4ed8;
                    font-size: 13px;
                    font-weight: 600;
                }

                .landing-chip-check {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: #2563eb;
                    color: #ffffff;
                    font-size: 10px;
                }

                .landing-hero-contact-actions {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 10px;
                    margin-top: 18px;
                }

                .landing-hero-billing-stack {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    width: 100%;
                    max-width: 500px;
                    margin-top: 18px;
                }

                .landing-hero-billing-stack .landing-billing-feature {
                    min-height: 130px;
                    max-width: 245px;
                    padding: 12px 14px;
                    gap: 4px;
                }

                .landing-hero-billing-stack .landing-billing-pip {
                    padding: 4px 8px;
                    font-size: 10px;
                }

                .landing-hero-billing-stack .landing-billing-title {
                    font-size: 15px;
                }

                .landing-hero-billing-stack .landing-billing-text {
                    font-size: 12px;
                    line-height: 1.45;
                }

                .landing-contact-action {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    min-height: 44px;
                    padding: 7px 15px 7px 8px;
                    border-radius: 999px;
                    background: #ffffff;
                    border: 1px solid #dce7f5;
                    color: #3569b8;
                    font-size: 14px;
                    font-weight: 700;
                    text-decoration: none;
                    box-shadow: 0 3px 10px rgba(15, 23, 42, 0.06);
                    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
                }

                .landing-contact-action:hover {
                    color: #2457a5;
                    text-decoration: none;
                    transform: translateY(-2px);
                    border-color: #b9d2f4;
                    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.10);
                }

                .landing-contact-action-icon {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                    background: #3f83f8;
                    color: #ffffff;
                    font-size: 14px;
                }

                .landing-hero-panel {
                    background: #ffffff;
                    border-radius: 18px;
                    box-shadow: 0 3px 18px rgba(0, 0, 0, 0.08);
                    padding: 18px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .landing-billing-summary {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                }

                .landing-billing-feature {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    padding: 16px;
                    border-radius: 18px;
                    border: 1px solid rgba(148, 163, 184, 0.16);
                    box-shadow: 0 3px 14px rgba(15, 23, 42, 0.04);
                    position: relative;
                    overflow: hidden;
                }

                .landing-billing-feature::before {
                    content: "";
                    position: absolute;
                    inset: 0 auto 0 0;
                    width: 6px;
                    border-radius: 18px 0 0 18px;
                }

                .landing-billing-feature-bulk {
                    background: linear-gradient(135deg, #f4fff8 0%, #e3fbe9 100%);
                }

                .landing-billing-feature-bulk::before {
                    background: linear-gradient(180deg, #16a34a 0%, #22c55e 100%);
                }

                .landing-billing-feature-private {
                    background: linear-gradient(135deg, #f4f8ff 0%, #e4efff 100%);
                }

                .landing-billing-feature-private::before {
                    background: linear-gradient(180deg, #2563eb 0%, #3b82f6 100%);
                }

                .landing-billing-top {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 10px;
                    margin-top: auto;
                    align-self: flex-end;
                }

                .landing-billing-pip {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 8px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.85);
                    color: #64748b;
                    font-size: 11px;
                    font-weight: 700;
                    white-space: nowrap;
                }

                .landing-billing-title {
                    margin: 0;
                    color: #5f6b78;
                    font-size: 18px;
                    font-weight: 800;
                    line-height: 1.25;
                }

                .landing-billing-text {
                    margin: 0;
                    color: #66707c;
                    font-size: 14px;
                    line-height: 1.65;
                }

                .landing-hero-social {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 4px;
                }

                .landing-bar-buttons {
                    margin-top: 20px;
                    margin-bottom: 8px;
                }

                .landing-task-col {
                    display: flex;
                    margin-bottom: 24px;
                }

                .landing-task-card {
                    width: 100%;
                    height: 100%;
                    border: 0;
                    border-radius: 18px;
                    overflow: hidden;
                    background: #ffffff;
                    box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .landing-task-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
                }

                .landing-tile-illustration {
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                .landing-task-image-wrap {
                    width: 100%;
                    aspect-ratio: 2 / 1;
                    max-height: 145px;
                    overflow: hidden;
                    flex-shrink: 0;
                    line-height: 0;
                }

                .landing-task-card .card-body {
                    display: flex;
                    flex-direction: column;
                    flex: 1 1 auto;
                    min-height: 200px;
                    padding: 22px 22px 22px;
                }

                .landing-task-title {
                    margin: 0 0 10px 0;
                    color: #5f6b78;
                    font-size: 19px;
                    font-weight: 700;
                    line-height: 1.25;
                }

                .landing-task-text {
                    margin: 0;
                    color: #7a8390;
                    font-size: 15px;
                    line-height: 1.65;
                }

                .landing-task-link {
                    margin-top: auto;
                    padding-top: 18px;
                    text-align: center;
                }

                .landing-task-link .btn {
                    min-width: 140px;
                    border-radius: 999px;
                    font-weight: 600;
                }

                .landing-badge-grid {
                    margin-top: 10px;
                }

                .landing-badge-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 24px;
                }

                .landing-badge-link {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    min-height: 150px;
                    padding: 12px;
                    border-radius: 14px;
                    background: #ffffff;
                    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.05);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .landing-badge-link:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
                }

                .landing-badge-link img {
                    width: 100%;
                    max-width: 190px;
                    max-height: 135px;
                    object-fit: contain;
                }

                .landing-info-panel {
                    height: 100%;
                    padding: 24px;
                    background: #ffffff;
                    border-radius: 18px;
                    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.07);
                    border: 1px solid rgba(148, 163, 184, 0.12);
                }

                .landing-info-panel-header {
                    margin-bottom: 20px;
                }

                .landing-info-panel-kicker {
                    display: inline-flex;
                    align-items: center;
                    margin-bottom: 10px;
                    padding: 8px 12px;
                    border-radius: 999px;
                    background: rgba(44, 168, 255, 0.10);
                    color: #2ca8ff;
                    font-size: 13px;
                    font-weight: 700;
                    letter-spacing: 0.03em;
                    text-transform: uppercase;
                }

                .landing-info-panel-title {
                    margin: 0;
                    color: #5f6b78;
                    font-size: 26px;
                    font-weight: 700;
                    line-height: 1.2;
                }

                .landing-info-panel-copy {
                    margin: 10px 0 0;
                    color: #7a8390;
                    font-size: 15px;
                    line-height: 1.7;
                }

                .landing-info-panel .telehealth-container,
                .landing-info-panel .opening-hours-container {
                    margin-top: 10px;
                }

                .landing-info-actions {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 18px;
                }

                .landing-info-actions .btn {
                    border-radius: 999px;
                    min-width: 150px;
                }

                .landing-news-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 24px;
                    margin-bottom: 28px;
                }

                .landing-news-header-copy {
                    flex: 1;
                }

                .landing-news-header .landing-section-title {
                    margin-bottom: 6px;
                    text-align: left;
                }

                .landing-news-header .landing-section-description {
                    margin: 0;
                    text-align: left;
                }

                .landing-news-search {
                    flex-shrink: 0;
                }

                .landing-see-more {
                    display: flex;
                    justify-content: center;
                    margin-top: 14px;
                }

                .landing-see-more-button {
                    min-width: 170px;
                    padding-left: 24px;
                    padding-right: 24px;
                    border-radius: 999px;
                }

                .landing-services-wrapper {
                    margin-top: 10px;
                }

                .landing-team-wrapper {
                    margin-top: 12px;
                }

                .landing-mobile-sticky {
                    display: none;
                }

                @media (max-width: 991px) {
                    .landing-section {
                        padding: 54px 0;
                    }

                    .landing-hero-title {
                        font-size: 34px;
                    }

                    .landing-hero-panel {
                        margin-top: 28px;
                    }

                    .landing-info-panel {
                        margin-bottom: 24px;
                    }

                    .landing-hero-billing-stack {
                        grid-template-columns: 1fr;
                        max-width: 100%;
                    }

                    .landing-hero-billing-stack .landing-billing-feature {
                        max-width: 100%;
                    }

                    .landing-task-card .card-body {
                        min-height: 0;
                    }
                }

                @media (max-width: 767px) {
                    .landing-section {
                        padding: 44px 0;
                    }

                    .landing-hero {
                        padding-top: 34px;
                        padding-bottom: 44px;
                    }

                    .landing-section-title {
                        font-size: 28px;
                    }

                    .landing-hero-title {
                        font-size: 30px;
                    }

                    .landing-hero-copy {
                        font-size: 16px;
                    }

                    .landing-hero-actions {
                        justify-content: center;
                    }

                    .landing-hero-secondary {
                        justify-content: center;
                    }

                    .landing-hero-contact-actions {
                        justify-content: center;
                    }

                    .landing-hero-billing-stack {
                        grid-template-columns: 1fr;
                    }

                    .landing-billing-feature {
                        padding: 16px;
                    }

                    .landing-hero-social {
                        padding-top: 8px;
                    }

                    .landing-news-header {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .landing-news-header .landing-section-title,
                    .landing-news-header .landing-section-description {
                        text-align: center;
                    }

                    .landing-info-panel {
                        padding: 20px 18px;
                    }

                    .landing-info-panel-title {
                        font-size: 24px;
                    }

                    .landing-task-card .card-body {
                        padding: 20px 18px 20px;
                    }

                    .landing-task-image-wrap {
                        max-height: 130px;
                    }

                    .landing-mobile-sticky {
                        display: flex;
                        position: sticky;
                        bottom: 0;
                        z-index: 1020;
                        gap: 10px;
                        padding: 10px;
                        background: rgba(255, 255, 255, 0.96);
                        backdrop-filter: blur(10px);
                        border-top: 1px solid rgba(148, 163, 184, 0.22);
                    }

                    .landing-mobile-sticky .btn {
                        flex: 1 1 0;
                        border-radius: 999px;
                        font-weight: 700;
                    }
                }
            `}</style>

            <div className="wrapper">
                <HomeNavbar />

                <LandingPageHeader
                    title={messageTitle}
                    imageClassName={"page-header page-header-small"}
                    contentClassName={"content-center"}
                    titleClassName={"title-landing-page"}
                />

                <section className="landing-section landing-hero">
                    <Container>
                        <Row className="align-items-start g-4">
                            <Col lg="6" className="landing-hero-left">
                                <span className="landing-hero-eyebrow">
                                    Bookings and information first
                                </span>

                                <h1 className="landing-hero-title">
                                    Find the right care quickly and book with confidence.
                                </h1>

                                <p className="landing-hero-copy">
                                    Start here to book an appointment, check consultation times,
                                    explore services, or connect with the clinic through telehealth.
                                </p>

                                <div className="landing-hero-actions">
                                    <BookingButton
                                        size="large"
                                        label="Book Appointment"
                                    />

                                    <a href="#services">
                                        <Button color="info" outline size="lg">
                                            Find a Service
                                        </Button>
                                    </a>

                                    <Link to="/fees-page">
                                        <Button color="info" outline size="lg">
                                            View Fees
                                        </Button>
                                    </Link>
                                </div>

                                <div className="landing-hero-secondary">
                                    {consultationTypes.map((type) => (
                                        <span key={type} className="landing-hero-chip">
                                            <span className="landing-chip-check">
                                                <i className="fa fa-check" />
                                            </span>
                                            {type}
                                        </span>
                                    ))}
                                </div>

                                

                                <div className="landing-hero-billing-stack">
                                    <div className="landing-billing-feature landing-billing-feature-bulk">
                                        <h3 className="landing-billing-title">
                                            Bulk billed options available
                                        </h3>

                                        <p className="landing-billing-text">
                                            Selected consultations may be bulk billed. Check the Fees page for more information.
                                        </p>

                                        <div className="landing-billing-top">
                                            <span className="landing-billing-pip">
                                                Eligible visits
                                            </span>
                                        </div>
                                    </div>

                                    <div className="landing-billing-feature landing-billing-feature-private">
                                        <h3 className="landing-billing-title">
                                            Private billing available
                                        </h3>

                                        <p className="landing-billing-text">
                                            Transparent pricing and fee information for other appointments.Check the Fees page for more information.
                                        </p>

                                        <div className="landing-billing-top">
                                            <span className="landing-billing-pip">
                                                Clear fees
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="landing-hero-contact-actions">
                                    <a
                                        href="https://www.facebook.com/gpsonvermont/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="landing-contact-action"
                                        aria-label="Follow GPs on Vermont on Facebook"
                                    >
                                        <span className="landing-contact-action-icon">
                                            <i className="fa fa-facebook" />
                                        </span>
                                        <span>Follow us</span>
                                    </a>

                                    <a
                                        href="tel:0260252189"
                                        className="landing-contact-action"
                                        aria-label="Call GPs on Vermont on 02 6025 2189"
                                    >
                                        <span className="landing-contact-action-icon">
                                            <i className="fa fa-phone" />
                                        </span>
                                        <span>Call us</span>
                                    </a>

                                    <a
                                        href="https://goo.gl/maps/1Uy3tyShraVWj6MP7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="landing-contact-action"
                                        aria-label="Find GPs on Vermont on Google Maps"
                                    >
                                        <span className="landing-contact-action-icon">
                                            <i className="fa fa-map-marker" />
                                        </span>
                                        <span>Find us</span>
                                    </a>
                                </div>

                            </Col>

                            <Col lg="6">
                                {/* <div className="landing-hero-panel"> */}
                                    {/* <div className="landing-billing-summary"> */}
                                        <OpeningHours2 />
                                    {/* </div> */}
                                {/* </div> */}
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="landing-section landing-section-soft">
                    <Container>
                        <div className="landing-section-heading">
                            <h2 className="landing-section-title">
                                Accredited Vaccination Centre
                            </h2>

                            <p className="landing-section-description">
                                GPs on Vermont provides vaccination and travel health
                                services including Yellow Fever, travel immunisation,
                                influenza and Q Fever support.
                            </p>
                        </div>

                        <Row className="landing-badge-grid">
                            <Col sm="6" lg="3" className="landing-badge-item">
                                <Link to="/service-details/17" className="landing-badge-link">
                                    <img
                                        src={require(`../../assets/img/${imageTest1}`)}
                                        alt="Yellow Fever vaccination"
                                    />
                                </Link>
                            </Col>

                            <Col sm="6" lg="3" className="landing-badge-item">
                                <Link to="/service-details/3" className="landing-badge-link">
                                    <img
                                        src={require(`../../assets/img/${imageTest3}`)}
                                        alt="Travel immunisation"
                                    />
                                </Link>
                            </Col>

                            <Col sm="6" lg="3" className="landing-badge-item">
                                <Link to="/service-details/2" className="landing-badge-link">
                                    <img
                                        src={require(`../../assets/img/${imageTest4}`)}
                                        alt="Flu vaccinations"
                                    />
                                </Link>
                            </Col>

                            <Col sm="6" lg="3" className="landing-badge-item">
                                <Link to="/service-details/16" className="landing-badge-link">
                                    <img
                                        src={require(`../../assets/img/${imageTest2}`)}
                                        alt="Q Fever vaccination"
                                    />
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="landing-section">
                    <Container>
                        <div className="landing-news-header">
                            <div className="landing-news-header-copy">
                                <h2 className="landing-section-title">
                                    Latest News
                                </h2>

                                <p className="landing-section-description">
                                    Clinic updates, health information and important
                                    announcements.
                                </p>
                            </div>

                            <div className="landing-news-search">
                                <SearchNews />
                            </div>
                        </div>

                        <NewsCardsPreview
                            news={landingPagePreviewNews}
                            start={0}
                            quantity={3}
                            bottomComponent={seeMoreComponent}
                        />
                    </Container>
                </section>

                <section className="landing-section landing-section-soft" id="services">
                    <Container>
                        <div className="landing-section-heading">
                            <h2 className="landing-section-title">
                                Medical Services
                            </h2>

                            <p className="landing-section-description">
                                Medical services provided by doctors consulting at
                                GPs on Vermont Medical Centre.
                            </p>
                        </div>

                        <div className="landing-services-wrapper">
                            <ServiceCardBlock />
                        </div>
                    </Container>
                </section>

                <section className="landing-section">
                    <Container>
                        <div className="landing-section-heading">
                            <h2 className="landing-section-title">
                                The Doctors and Support Team
                            </h2>

                            <p className="landing-section-description">
                                Meet the doctors and support team consulting and
                                working at GPs on Vermont Medical Centre.
                            </p>
                        </div>

                        <div className="landing-team-wrapper">
                            <DoctorsTeam
                                staffData={staffContent}
                                columns={3}
                                showBookingButton={true}
                            />
                        </div>
                    </Container>
                </section>

                <div className="landing-mobile-sticky d-md-none">
                    <Link to="/booking" className="w-100">
                        <Button color="info" className="w-100">
                            Book
                        </Button>
                    </Link>
                    <a href="#services" className="w-100">
                        <Button color="info" outline className="w-100">
                            Services
                        </Button>
                    </a>
                    <a href="#hours" className="w-100">
                        <Button color="info" outline className="w-100">
                            Hours
                        </Button>
                    </a>
                </div>

                <DarkFooter />
            </div>
        </>
    );
}

export default LandingPage;