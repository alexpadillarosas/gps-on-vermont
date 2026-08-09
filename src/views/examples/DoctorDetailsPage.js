import React, { useMemo } from "react";
import { Container } from "reactstrap";
import { useHistory, useLocation, useParams } from "react-router-dom";
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
  const history = useHistory();

  const stateDoctor = location?.state?.doctor;

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
    if (stateDoctor) {
      return stateDoctor;
    }

    const index = Number(doctorId);

    if (
      Number.isInteger(index) &&
      index >= 0 &&
      index < doctors.length
    ) {
      return doctors[index];
    }

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

          const profileSlug = slugify(
            String(person?.profileLink || "")
              .split("/")
              .filter(Boolean)
              .pop() || ""
          );

          return (
            bookingId === key ||
            nameSlug === key ||
            titleSlug === key ||
            profileSlug === key
          );
        }) || null
      );
    }

    return null;
  }, [doctorId, doctors, stateDoctor]);

  const handleBack = () => {
    history.goBack();
  };

  if (!doctor) {
    return (
      <>
        <style>{`
          .doctor-details-not-found-page {
            min-height: 100vh;
            background: #f7f9fb;
            padding: 24px 0 64px;
          }

          .doctor-details-not-found-card {
            width: min(760px, calc(100% - 32px));
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e5ecf4;
            border-radius: 24px;
            box-shadow: 0 14px 38px rgba(15, 23, 42, 0.08);
            padding: 36px 28px;
            text-align: center;
          }

          .doctor-details-not-found-card h1 {
            margin: 0 0 12px;
            color: #2f3136;
            font-size: 32px;
            font-weight: 800;
            letter-spacing: -0.03em;
          }

          .doctor-details-not-found-card p {
            margin: 0 0 22px;
            color: #6b7280;
            font-size: 16px;
            line-height: 1.6;
          }

          .doctor-details-back {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #5c18b4;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            padding: 0;
            border: 0;
            background: transparent;
            font-family: inherit;
            cursor: pointer;
          }

          .doctor-details-back:hover {
            color: #44108a;
            text-decoration: none;
          }

          .doctor-details-back i {
            color: #ff4f61;
            font-size: 20px;
          }
        `}</style>

        <div className="doctor-details-not-found-page">
          <Container>
            <div className="doctor-details-not-found-card">
              <h1>Doctor not found</h1>
              <p>The requested doctor could not be found.</p>

              <button
                type="button"
                className="doctor-details-back"
                onClick={handleBack}
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
                Back
              </button>
            </div>
          </Container>
        </div>
      </>
    );
  }

  const {
    titleAbr = "",
    name = "Doctor",
    image = "",
    accreditations = [],
    descriptions = [],
    speaks = [],
    booking = false,
    bookingDoctorId = null,
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
        .doctor-details-page {
          min-height: 100vh;
          background: #f7f9fb;
          color: #2b2b2b;
          padding: 24px 0 64px;
        }

        .doctor-details-container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .doctor-details-topbar {
          margin-bottom: 18px;
        }

        .doctor-details-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #5c18b4;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          padding: 0;
          border: 0;
          background: transparent;
          font-family: inherit;
          cursor: pointer;
        }

        .doctor-details-back:hover {
          color: #44108a;
          text-decoration: none;
        }

        .doctor-details-back i {
          color: #ff4f61;
          font-size: 20px;
        }

        .doctor-details-surface {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top right, rgba(125, 115, 216, 0.08), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          border: 1px solid #e5ecf4;
          border-radius: 30px;
          box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
          padding: 28px;
        }

        .doctor-details-surface::before {
          content: "";
          position: absolute;
          inset: auto -80px -80px auto;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 68%);
          pointer-events: none;
        }

        .doctor-details-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(280px, 340px);
          gap: 24px;
          align-items: start;
        }

        .doctor-details-profile {
          min-width: 0;
        }

        .doctor-details-hero {
          display: flex;
          align-items: flex-start;
          gap: 22px;
          padding-bottom: 22px;
          margin-bottom: 22px;
          border-bottom: 1px solid #edf2f7;
        }

        .doctor-details-avatar {
          width: 128px;
          height: 128px;
          flex: 0 0 auto;
          overflow: hidden;
          border-radius: 50%;
          background: #7d73d8;
          box-shadow: 0 0 0 7px rgba(125, 115, 216, 0.12);
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

        .doctor-details-name-block {
          min-width: 0;
          flex: 1 1 auto;
        }

        .doctor-details-name {
          margin: 0;
          color: #252525;
          font-size: 44px;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.035em;
        }

        .doctor-details-accreditations {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .doctor-details-accreditation-pill {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 5px 11px;
          border-radius: 999px;
          background: #f5f7fb;
          border: 1px solid #e3eaf2;
          color: #556070;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }

        .doctor-details-bio-card {
          background: #ffffff;
          border: 1px solid #e5edf5;
          border-radius: 22px;
          padding: 22px;
        }

        .doctor-details-bio-title {
          margin: 0 0 14px;
          color: #1f2937;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .doctor-details-biography {
          color: #34363a;
          font-size: 17px;
          line-height: 1.7;
        }

        .doctor-details-biography p {
          margin: 0 0 18px;
        }

        .doctor-details-sidebar {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .doctor-details-side-card {
          background: #ffffff;
          border: 1px solid #e5edf5;
          border-radius: 22px;
          padding: 18px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .doctor-details-side-label {
          margin: 0 0 12px;
          color: #64748b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .doctor-details-language-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
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
          font-weight: 700;
          white-space: nowrap;
        }

        .doctor-details-qualification-list {
          display: grid;
          gap: 10px;
        }

        .doctor-details-qualification-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #334155;
          font-size: 14px;
          line-height: 1.5;
        }

        .doctor-details-qualification-item i {
          color: #3f83f8;
          margin-top: 2px;
          flex: 0 0 auto;
        }

        .doctor-details-booking {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .doctor-details-booking-copy {
          margin: 0;
          color: #64748b;
          font-size: 14px;
          line-height: 1.55;
        }

        .doctor-details-booking-button {
          width: 100%;
          min-width: 170px !important;
        }

        .doctor-details-phone-card {
          background: #ffffff;
          border: 1px solid #e5edf5;
          border-radius: 22px;
          padding: 18px;
          box-shadow: 0 6px 18px rgba(15, 23, 42, 0.04);
        }

        .doctor-details-phone-top {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 14px;
        }

        .doctor-details-phone-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #2f6fe4;
          color: #ffffff;
          border-radius: 12px;
          font-size: 16px;
          box-shadow: 0 6px 14px rgba(47, 111, 228, 0.18);
        }

        .doctor-details-phone-copy {
          min-width: 0;
        }

        .doctor-details-phone-title {
          color: #334155;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.35;
        }

        .doctor-details-phone-subtitle {
          margin-top: 3px;
          color: #7c8a9d;
          font-size: 13px;
          line-height: 1.45;
        }

        .doctor-details-phone-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 46px;
          padding: 10px 14px;
          background: #2f6fe4;
          color: #ffffff !important;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none !important;
          transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
        }

        .doctor-details-phone-button:hover,
        .doctor-details-phone-button:focus {
          background: #2459c7;
          color: #ffffff !important;
          text-decoration: none !important;
          transform: translateY(-1px);
          box-shadow: 0 7px 16px rgba(47, 111, 228, 0.2);
        }

        @media (max-width: 991px) {
          .doctor-details-surface {
            padding: 24px;
          }

          .doctor-details-grid {
            grid-template-columns: 1fr;
          }

          .doctor-details-sidebar {
            grid-template-columns: 1fr 1fr;
          }

          .doctor-details-name {
            font-size: 38px;
          }
        }

        @media (max-width: 767px) {
          .doctor-details-page {
            padding: 18px 0 52px;
          }

          .doctor-details-container {
            width: calc(100% - 24px);
          }

          .doctor-details-surface {
            padding: 18px;
            border-radius: 22px;
          }

          .doctor-details-hero {
            flex-direction: column;
            gap: 16px;
            padding-bottom: 18px;
            margin-bottom: 18px;
          }

          .doctor-details-avatar {
            width: 104px;
            height: 104px;
          }

          .doctor-details-name {
            font-size: 32px;
          }

          .doctor-details-bio-card,
          .doctor-details-side-card,
          .doctor-details-phone-card {
            padding: 16px;
            border-radius: 18px;
          }

          .doctor-details-sidebar {
            grid-template-columns: 1fr;
          }

          .doctor-details-biography {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="doctor-details-page">
        <Container className="doctor-details-container">
          <div className="doctor-details-topbar">
            <button
              type="button"
              className="doctor-details-back"
              onClick={handleBack}
            >
              <i className="fa fa-angle-left" aria-hidden="true" />
              Back
            </button>
          </div>

          <div className="doctor-details-surface">
            <div className="doctor-details-grid">
              <main className="doctor-details-profile">
                <div className="doctor-details-hero">
                  <div className="doctor-details-avatar">
                    {image ? (
                      <img
                        src={require(`../../assets/img/staff/${image}`)}
                        alt={name}
                      />
                    ) : (
                      <span className="doctor-details-avatar-fallback">
                        {name.charAt(0)}
                      </span>
                    )}
                  </div>

                  <div className="doctor-details-name-block">
                    <h1 className="doctor-details-name">
                      {titleAbr ? `${titleAbr} ` : ""}
                      {name}
                    </h1>

                    {qualifications.length > 0 ? (
                      <div className="doctor-details-accreditations">
                        {qualifications.map((item) => (
                          <span
                            key={`${name}-${item}`}
                            className="doctor-details-accreditation-pill"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="doctor-details-bio-card">
                  <h2 className="doctor-details-bio-title">Biography</h2>

                  <div className="doctor-details-biography">
                    {biography.length > 0 ? (
                      biography.map((paragraph, index) => (
                        <p key={`${name}-bio-${index}`}>{paragraph}</p>
                      ))
                    ) : (
                      <p>No biography is currently available.</p>
                    )}
                  </div>
                </div>
              </main>

              <aside className="doctor-details-sidebar">
                {languages.length > 0 ? (
                  <div className="doctor-details-side-card">
                    <p className="doctor-details-side-label">Languages spoken</p>

                    <div className="doctor-details-language-list">
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
                  </div>
                ) : null}

                {booking && bookingDoctorId ? (
                  <div className="doctor-details-side-card">
                    <p className="doctor-details-side-label">Appointments</p>

                    <div className="doctor-details-booking">
                      <p className="doctor-details-booking-copy">
                        Book directly with this doctor when online booking is available.
                      </p>

                      <BookingButton
                        doctorId={bookingDoctorId}
                        size="medium"
                        label="Book Appointment"
                        className="doctor-details-booking-button"
                        mode="doctor"
                      />
                    </div>
                  </div>
                ) : null}

                <div className="doctor-details-phone-card">
                  <div className="doctor-details-phone-top">
                    <div className="doctor-details-phone-icon">
                      <i className="fa fa-phone" aria-hidden="true" />
                    </div>

                    <div className="doctor-details-phone-copy">
                      <div className="doctor-details-phone-title">
                        Prefer booking by phone?
                      </div>
                      <div className="doctor-details-phone-subtitle">
                        Our reception team is happy to help.
                      </div>
                    </div>
                  </div>

                  <a
                    href="tel:0260252189"
                    className="doctor-details-phone-button"
                    aria-label="Call GPs on Vermont on 02 6025 2189"
                  >
                    02 6025 2189
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default DoctorDetailsPage;