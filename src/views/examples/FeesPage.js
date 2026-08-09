// Generated: 2026-08-09 15:28 AEST

import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { headerScrolling } from "./commons";
import TableData from "../../components/General/TableData";
import fees, { doctors } from "../../data/fees-content";
import DarkFooter from "../../components/Footers/DarkFooter";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";
import Doctor from "../../components/General/Doctor";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

const FeesPage = () => {
  const message = "";

  useEffect(() => {
    headerScrolling();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const consultationBadges = [
    { label: "Standard Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Short Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Long Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Extended Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Walk In Consultation", targetId: "fee-section-0", type: "standard" },
    { label: "Telehealth", targetId: "fee-section-0", type: "telehealth" },
    { label: "Private Billing", targetId: "fee-section-0", type: "private" },
    { label: "Bulk Billing", targetId: "fee-section-1", type: "promo" },
    { label: "Pensioners", targetId: "fee-section-1", type: "pensioner" },
  ];

  const getDoctorById = (doctorId) =>
    (Array.isArray(doctors) ? doctors : []).find((doctor) => doctor?.id === doctorId);

  const getDoctorsForFee = (fee) =>
    (Array.isArray(fee?.doctorIds) ? fee.doctorIds : [])
      .map(getDoctorById)
      .filter(Boolean);

  const renderHeaderDoctors = (doctorList) => {
    return (
      <div
        className="fee-table-doctors-strip"
        style={{
          "--doctor-count": doctorList.length || 1,
          width: "100%",
        }}
      >
        {doctorList.map((person) => (
          <Doctor
            key={person.id}
            person={person}
            index={person.id}
            size="tiny"
            showBookingButton={true}
          />
        ))}
      </div>
    );
  };

  const tableTitles = {
    0: "Choose a Doctor for Private Billing Fees",
    1: "Choose a Doctor for Bulk Billing GPs",
  };

  return (
    <>
      <OtherNavbar />

      <style>{`
        .fees-page-intro {
          width: 100%;
        }

        .fees-page-intro-banner {
          background-color: #f0f7ff;
          border-left: 6px solid #2c7be5;
        }

        .fees-page-intro-banner h4 {
          color: #1e3a8a;
        }

        @media (max-width: 767px) {
          .fees-page-intro-banner {
            padding: 16px !important;
          }

          .fees-page-intro-banner h4 {
            font-size: 1.2rem !important;
          }

          .fees-page-intro-banner p {
            font-size: 0.98rem !important;
          }

          .fees-page-intro-banner .btn {
            font-size: 0.82rem !important;
            padding: 0.45rem 0.8rem !important;
          }
        }
      `}</style>

      <LandingPageHeader
        title={message}
        imageClassName={"page-header page-header-xsmall"}
        contentClassName={"content-center-other-pages"}
        titleClassName={"title-small-header"}
      />

      <Container className="mb-4">
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div
              className="fees-page-intro fees-page-intro-banner p-4 border-0 rounded text-left shadow-sm"
              style={{
                width: "100%",
                textTransform: "none",
              }}
            >
              <h4
                className="font-weight-bold mb-2"
                style={{
                  fontSize: "1.45rem",
                  textTransform: "none",
                  letterSpacing: "-0.3px",
                }}
              >
                Available Consultation Types & Fees
              </h4>

              <p
                className="text-dark mb-3"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: "500",
                  textTransform: "none",
                }}
              >
                Select a consultation type or choose a doctor below to view the relevant fee structure.
              </p>

              <div
                className="d-flex flex-wrap align-items-center my-3"
                style={{ gap: "12px" }}
              >
                {consultationBadges.map((badge, idx) => {
                  const isPromo = badge.type === "promo";
                  const isPrivate = badge.type === "private";
                  const isTelehealth = badge.type === "telehealth";
                  const isPensioner = badge.type === "pensioner";

                  return (
                    <button
                      key={idx}
                      onClick={() => scrollToSection(badge.targetId)}
                      className="btn font-weight-bold px-3 py-2 border-0 shadow-sm"
                      style={{
                        background: isPromo
                          ? "linear-gradient(135deg, #e6f4ea 0%, #d8f0df 100%)"
                          : isTelehealth
                          ? "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)"
                          : isPrivate
                          ? "linear-gradient(135deg, #fff7e6 0%, #ffe9c2 100%)"
                          : isPensioner
                          ? "linear-gradient(135deg, #f3f0ff 0%, #e8e1ff 100%)"
                          : "#ffffff",
                        color: isPromo
                          ? "#137333"
                          : isTelehealth
                          ? "#4338ca"
                          : isPrivate
                          ? "#a15c00"
                          : isPensioner
                          ? "#6b21a8"
                          : "#2c7be5",
                        border: isPromo
                          ? "1px solid #bfe3c7"
                          : isTelehealth
                          ? "1px solid #c7d2fe"
                          : isPrivate
                          ? "1px solid #ffd08a"
                          : isPensioner
                          ? "1px solid #d8c7ff"
                          : "1px solid rgba(44, 123, 229, 0.12)",
                        borderRadius: "999px",
                        fontSize: "0.92rem",
                        textTransform: "none",
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                        boxShadow: isPromo
                          ? "0 8px 18px rgba(19, 115, 51, 0.14)"
                          : isTelehealth
                          ? "0 8px 18px rgba(67, 56, 202, 0.14)"
                          : isPrivate
                          ? "0 8px 18px rgba(161, 92, 0, 0.12)"
                          : isPensioner
                          ? "0 8px 18px rgba(107, 33, 168, 0.12)"
                          : "0 4px 10px rgba(44, 123, 229, 0.08)",
                        letterSpacing: "0.1px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-1px)";
                        e.currentTarget.style.background = isPromo
                          ? "#137333"
                          : isTelehealth
                          ? "#4338ca"
                          : isPrivate
                          ? "#a15c00"
                          : isPensioner
                          ? "#6b21a8"
                          : "#2c7be5";
                        e.currentTarget.style.color = "#ffffff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = isPromo
                          ? "linear-gradient(135deg, #e6f4ea 0%, #d8f0df 100%)"
                          : isTelehealth
                          ? "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)"
                          : isPrivate
                          ? "linear-gradient(135deg, #fff7e6 0%, #ffe9c2 100%)"
                          : isPensioner
                          ? "linear-gradient(135deg, #f3f0ff 0%, #e8e1ff 100%)"
                          : "#ffffff";
                        e.currentTarget.style.color = isPromo
                          ? "#137333"
                          : isTelehealth
                          ? "#4338ca"
                          : isPrivate
                          ? "#a15c00"
                          : isPensioner
                          ? "#6b21a8"
                          : "#2c7be5";
                      }}
                    >
                      {badge.label}
                    </button>
                  );
                })}
              </div>

              <div
                className="d-flex align-items-center pt-3 mt-3"
                style={{ borderTop: "1px solid rgba(44, 123, 229, 0.15)" }}
              >
                <span
                  className="text-muted font-weight-bold"
                  style={{ fontSize: "0.95rem", textTransform: "none" }}
                >
                  Please review the complete fee structures and out-of-pocket costs below:
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {fees.map((fee, index) => {
        const doctorList = getDoctorsForFee(fee);

        return (
          <div
            id={`fee-section-${index}`}
            key={index}
            style={{ scrollMarginTop: "100px" }}
          >
            <Container className="text-muted mb-4">
              <TableData
                feeData={fee}
                index={index}
                headerRightContent={renderHeaderDoctors(doctorList)}
                headerTitle={tableTitles[index] || fee.title}
                showDoctorLabel={false}
              />
            </Container>
          </div>
        );
      })}

      <DarkFooter />
    </>
  );
};

export default FeesPage;