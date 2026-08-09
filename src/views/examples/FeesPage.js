import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { headerScrolling } from "./commons";
import TableData from "../../components/General/TableData";
import fees, { doctors } from "../../data/fees-content";
import DarkFooter from "../../components/Footers/DarkFooter";
import Doctor from "../../components/General/Doctor";
import OtherNavbar from "../../components/NavBars/OtherNavbar";

const FeesPage = () => {
  useEffect(() => {
    headerScrolling();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const quickJumps = [
    {
      label: "Private billing",
      targetId: "fee-section-0",
      type: "private",
    },
    {
      label: "Bulk billing",
      targetId: "fee-section-1",
      type: "bulk",
    },
    {
      label: "Telehealth",
      targetId: "fee-section-0",
      type: "telehealth",
    },
    {
      label: "Pensioners",
      targetId: "fee-section-1",
      type: "pensioner",
    },
  ];

  const consultationTypes = [
    "Standard consult",
    "Short consult",
    "Long consult",
    "Extended consult",
    "Walk-in consultation",
  ];

  const getDoctorById = (doctorId) =>
    (Array.isArray(doctors) ? doctors : []).find(
      (doctor) => doctor?.id === doctorId
    );

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
        .fees-page {
          background: #ffffff;
          min-height: 100vh;
        }

        .fees-page-top-space {
          height: 105px;
        }

        .fees-page-shell {
          width: 100%;
        }

        .fees-hero-wrap {
          width: 100%;
          margin: 0;
        }

        .fees-hero-card {
          position: relative;
          overflow: hidden;
          padding: 30px;
          background:
            radial-gradient(circle at top right, rgba(59, 130, 246, 0.09), transparent 34%),
            linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid rgba(44, 123, 229, 0.10);
          border-radius: 26px;
          box-shadow: 0 12px 34px rgba(15, 23, 42, 0.06);
        }

        .fees-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.6fr) minmax(270px, 0.8fr);
          gap: 32px;
          align-items: start;
        }

        .fees-hero-eyebrow {
          display: inline-flex;
          align-items: center;
          margin-bottom: 14px;
          padding: 6px 12px;
          background: #eef5ff;
          color: #2563eb;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .fees-hero-title {
          margin: 0 0 12px;
          color: #1f2937;
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.035em;
          text-transform: none;
        }

        .fees-hero-copy {
          max-width: 680px;
          margin: 0;
          color: #64748b;
          font-size: 1rem;
          line-height: 1.75;
          text-transform: none;
        }

        .fees-consultation-types {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 20px;
        }

        .fees-type-pill {
          display: inline-flex;
          align-items: center;
          padding: 9px 14px;
          background: #ffffff;
          color: #475569;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          box-shadow: 0 2px 7px rgba(15, 23, 42, 0.035);
          font-size: 0.9rem;
          font-weight: 650;
          white-space: nowrap;
        }

        .fees-quick-panel {
          padding: 18px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(148, 163, 184, 0.16);
          border-radius: 20px;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
        }

        .fees-quick-label {
          display: block;
          margin-bottom: 5px;
          color: #334155;
          font-size: 0.9rem;
          font-weight: 800;
          text-transform: none;
        }

        .fees-quick-description {
          margin: 0 0 14px;
          color: #8491a3;
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .fees-quick-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
        }

        .fees-quick-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 46px;
          padding: 10px 12px;
          background: #f8fafc;
          color: #334155;
          border: 1px solid #e2e8f0;
          border-radius: 13px;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            background 0.18s ease,
            box-shadow 0.18s ease;
        }

        .fees-quick-button::after {
          content: "↓";
          margin-left: 8px;
          color: #94a3b8;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .fees-quick-button:hover {
          transform: translateY(-1px);
          background: #ffffff;
          border-color: #bfdbfe;
          box-shadow: 0 6px 15px rgba(15, 23, 42, 0.07);
        }

        .fees-quick-button:hover::after {
          color: #2563eb;
        }

        .fees-quick-button.private:hover {
          color: #a15c00;
        }

        .fees-quick-button.bulk:hover {
          color: #137333;
        }

        .fees-quick-button.telehealth:hover {
          color: #4338ca;
        }

        .fees-quick-button.pensioner:hover {
          color: #6b21a8;
        }

        .fees-phone-booking {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 10px 12px;
          align-items: center;
          margin-top: 16px;
          padding: 15px;
          background:
            linear-gradient(
              135deg,
              rgba(239, 246, 255, 0.95) 0%,
              rgba(248, 250, 252, 0.95) 100%
            );
          border: 1px solid #dbeafe;
          border-radius: 16px;
        }

        .fees-phone-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          grid-row: 1;
          background: #2563eb;
          color: #ffffff;
          border-radius: 12px;
          font-size: 15px;
          box-shadow: 0 5px 12px rgba(37, 99, 235, 0.18);
        }

        .fees-phone-content {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .fees-phone-label {
          color: #334155;
          font-size: 0.88rem;
          font-weight: 800;
          line-height: 1.35;
        }

        .fees-phone-help {
          margin-top: 2px;
          color: #7c8a9d;
          font-size: 0.78rem;
          line-height: 1.4;
        }

        .fees-phone-number {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 44px;
          margin-top: 2px;
          padding: 10px 14px;
          background: #2563eb;
          color: #ffffff !important;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          text-decoration: none !important;
          transition:
            transform 0.18s ease,
            background 0.18s ease,
            box-shadow 0.18s ease;
        }

        .fees-phone-number:hover,
        .fees-phone-number:focus {
          background: #1d4ed8;
          color: #ffffff !important;
          text-decoration: none !important;
          transform: translateY(-1px);
          box-shadow: 0 7px 16px rgba(37, 99, 235, 0.20);
        }

        .fees-phone-number:active {
          transform: translateY(0);
        }

        .fees-hero-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 20px;
          padding-top: 17px;
          border-top: 1px solid #edf1f5;
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .fees-note-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          width: 20px;
          height: 20px;
          margin-top: 1px;
          background: #eef5ff;
          color: #2563eb;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 800;
        }

        .fees-tables-wrap {
          margin-top: 26px;
        }

        .fees-table-section {
          scroll-margin-top: 95px;
        }

        @media (max-width: 991px) {
          .fees-page-top-space {
            height: 90px;
          }

          .fees-hero-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .fees-quick-panel {
            max-width: none;
          }

          .fees-quick-actions {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 767px) {
          .fees-page-top-space {
            height: 78px;
          }

          .fees-hero-card {
            padding: 20px 18px;
            border-radius: 20px;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.055);
          }

          .fees-hero-title {
            font-size: 1.35rem;
            line-height: 1.3;
          }

          .fees-hero-copy {
            font-size: 0.95rem;
            line-height: 1.65;
          }

          .fees-consultation-types {
            gap: 7px;
            margin-top: 17px;
          }

          .fees-type-pill {
            padding: 8px 11px;
            font-size: 0.82rem;
          }

          .fees-quick-panel {
            padding: 15px;
            border-radius: 17px;
          }

          .fees-quick-actions {
            grid-template-columns: 1fr 1fr;
          }

          .fees-quick-button {
            font-size: 0.82rem;
          }

          .fees-hero-note {
            font-size: 0.84rem;
          }

          .fees-tables-wrap {
            margin-top: 20px;
          }
        }

        @media (max-width: 400px) {
          .fees-quick-actions {
            grid-template-columns: 1fr;
          }

          .fees-type-pill {
            width: 100%;
          }
        }
      `}</style>

      <main className="fees-page">
        <div className="fees-page-top-space" />

        <Container className="fees-page-shell mb-4">
          <div className="fees-hero-wrap">
            <div className="fees-hero-card">
              <div className="fees-hero-grid">
                <div className="fees-hero-content">
                  <span className="fees-hero-eyebrow">Fees at a glance</span>

                  <h1 className="fees-hero-title">
                    Available Consultation Types &amp; Fees
                  </h1>

                  <p className="fees-hero-copy">
                    Review the consultation options available, then choose the
                    relevant billing section to see doctors, fees and
                    out-of-pocket costs.
                  </p>

                  <div className="fees-consultation-types">
                    {consultationTypes.map((type) => (
                      <span key={type} className="fees-type-pill">
                        {type}
                      </span>
                    ))}
                  </div>

                  <div className="fees-hero-note">
                    <span className="fees-note-icon">i</span>
                    <span>
                      Fees can vary depending on the doctor and consultation.
                      Please review the complete fee tables below.
                    </span>
                  </div>
                </div>

                <aside className="fees-quick-panel">
                  <span className="fees-quick-label">Find your fees</span>

                  <p className="fees-quick-description">
                    Jump directly to the relevant billing section.
                  </p>

                  <div className="fees-quick-actions">
                    {quickJumps.map((item) => (
                      <button
                        key={item.label}
                        className={`fees-quick-button ${item.type}`}
                        type="button"
                        onClick={() => scrollToSection(item.targetId)}
                      >
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="fees-phone-booking">
                    <div className="fees-phone-icon">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </div>

                    <div className="fees-phone-content">
                      <span className="fees-phone-label">
                        Prefer booking by phone?
                      </span>

                      <span className="fees-phone-help">
                        Our reception team is happy to help.
                      </span>
                    </div>

                    <a
                      href="tel:+61260252189"
                      className="fees-phone-number"
                      aria-label="Call GPs on Vermont on 02 6025 2189"
                    >
                      02 6025 2189
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </Container>

        <div className="fees-tables-wrap">
          {fees.map((fee, index) => {
            const doctorList = getDoctorsForFee(fee);

            return (
              <section
                id={`fee-section-${index}`}
                key={index}
                className="fees-table-section"
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
              </section>
            );
          })}
        </div>
      </main>

      <DarkFooter />
    </>
  );
};

export default FeesPage;