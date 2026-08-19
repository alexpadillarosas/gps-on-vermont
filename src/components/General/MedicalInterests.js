import React, { useMemo, useState } from "react";

const MedicalInterests = ({
  interests = [],
  title = "Medical Interests",
}) => {
  const safeInterests = useMemo(
    () =>
      (Array.isArray(interests) ? interests : []).filter(
        (interest) => interest && interest.name
      ),
    [interests]
  );

  const [activeId, setActiveId] = useState(
    safeInterests.length > 0 ? safeInterests[0].id : null
  );

  if (safeInterests.length === 0) {
    return null;
  }

  const activeInterest =
    safeInterests.find(
      (interest) => String(interest.id) === String(activeId)
    ) || safeInterests[0];

  return (
    <>
      <style>{`
        .medical-interest-panel {
          width: 100%;
          margin-top: 24px;
          padding: 22px;
          background: #ffffff;
          border: 1px solid #e5edf5;
          border-radius: 22px;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.05);
        }

        .medical-interest-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 7px;
          color: #334155;
          font-size: 1.12rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .medical-interest-heading i {
          width: 20px;
          text-align: center;
          color: #2f7fff;
        }

        .medical-interest-intro {
          margin: 0 0 17px;
          color: #7a8596;
          font-size: 14px;
          line-height: 1.55;
        }

        .medical-interest-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 12px;
          width: 100%;
        }

        .medical-interest-button {
          appearance: none;
          display: flex;
          align-items: center;
          gap: 11px;
          width: 100%;
          min-height: 58px;
          padding: 8px 12px 8px 8px;
          border: 1px solid #d7e8fb;
          border-radius: 16px;
          background: #f7fbff;
          color: #294563;
          font-family: inherit;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.2;
          text-align: left;
          cursor: pointer;
          transition:
            background-color 0.18s ease,
            border-color 0.18s ease,
            color 0.18s ease,
            transform 0.18s ease,
            box-shadow 0.18s ease;
        }

        .medical-interest-button:hover {
          transform: translateY(-2px);
          background: #f4f9ff;
          border-color: #bddbf8;
          color: #205a9e;
          box-shadow: 0 7px 18px rgba(15, 23, 42, 0.07);
        }

        .medical-interest-button:focus-visible {
          outline: 3px solid rgba(47, 127, 255, 0.2);
          outline-offset: 2px;
        }

        .medical-interest-button.active {
          background: #2f7fff;
          border-color: #2f7fff;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(47, 127, 255, 0.18);
        }

        .medical-interest-button-icon {
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #e5f2ff;
          color: #2374e1;
          font-size: 17px;
          transition:
            transform 0.18s ease,
            background-color 0.18s ease,
            color 0.18s ease;
        }

        .medical-interest-button:hover .medical-interest-button-icon {
          transform: scale(1.06);
        }

        .medical-interest-button.active .medical-interest-button-icon {
          background: rgba(255, 255, 255, 0.18);
          color: #ffffff;
        }

        .medical-interest-button-name {
          min-width: 0;
          line-height: 1.35;
        }

        .medical-interest-detail {
          margin-top: 15px;
          padding: 15px 16px;
          border-radius: 16px;
          background:
            linear-gradient(135deg, #f5faff 0%, #f9fcff 100%);
          border: 1px solid #e0eefc;
        }

        .medical-interest-detail-title {
          margin: 0 0 5px;
          color: #294563;
          font-size: 14px;
          font-weight: 800;
        }

        .medical-interest-detail-text {
          margin: 0;
          color: #66778a;
          font-size: 14px;
          line-height: 1.6;
        }

        .medical-interest-hint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          color: #8a96a5;
          font-size: 12px;
          font-weight: 600;
        }

        @media (max-width: 767px) {
          .medical-interest-panel {
            padding: 17px;
            border-radius: 18px;
          }

          .medical-interest-list {
            grid-template-columns: 1fr;
          }

          .medical-interest-button {
            font-size: 12px;
          }
        }
      `}</style>

      <section
        className="medical-interest-panel"
        aria-labelledby="medical-interest-heading"
      >
        <h2
          id="medical-interest-heading"
          className="medical-interest-heading"
        >
          <i className="fa fa-heartbeat" aria-hidden="true" />
          {title}
        </h2>

        <p className="medical-interest-intro">
          Select an area below to learn more about this doctor&apos;s interests.
        </p>

        <div
          className="medical-interest-list"
          role="tablist"
          aria-label="Medical interests"
        >
          {safeInterests.map((interest) => {
            const isActive =
              String(interest.id) === String(activeInterest.id);

            return (
              <button
                key={interest.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`medical-interest-panel-${interest.id}`}
                className={`medical-interest-button${
                  isActive ? " active" : ""
                }`}
                onClick={() => setActiveId(interest.id)}
              >
                <span
                  className="medical-interest-button-icon"
                  aria-hidden="true"
                >
                  <i className={interest.icon || "fas fa-stethoscope"} />
                </span>

                <span className="medical-interest-button-name">
                  {interest.name}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`medical-interest-panel-${activeInterest.id}`}
          className="medical-interest-detail"
          role="tabpanel"
        >
          <h3 className="medical-interest-detail-title">
            {activeInterest.name}
          </h3>

          {activeInterest.description ? (
            <p className="medical-interest-detail-text">
              {activeInterest.description}
            </p>
          ) : (
            <p className="medical-interest-detail-text">
              This is one of the doctor&apos;s areas of medical interest.
            </p>
          )}

          {safeInterests.length > 1 ? (
            <span className="medical-interest-hint">
              <i className="fa fa-hand-pointer-o" aria-hidden="true" />
              Select another area to learn more.
            </span>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default MedicalInterests;