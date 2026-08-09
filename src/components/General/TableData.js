import React from "react";
import { Table, Card, CardHeader, CardBody } from "reactstrap";

const TableData = ({
  feeData,
  index,
  headerRightContent,
  headerTitle,
  showDoctorLabel = false,
}) => {
  const rows = Array.isArray(feeData?.row) ? feeData.row : [];
  const headers = Array.isArray(feeData?.header) ? feeData.header : [];

  const mobileColumnHeaders = [
    headers?.[1]?.[0] || "",
    headers?.[2]?.[0] || "",
    headers?.[3]?.[0] || "",
  ];

  const renderValueContent = (value) => {
    if (React.isValidElement(value)) return value;

    if (value === null || value === undefined || value === "") {
      return <span className="fee-value-empty">—</span>;
    }

    if (typeof value !== "string") {
      return <span className="fee-value-text">{String(value)}</span>;
    }

    const trimmed = value.trim();
    const lower = trimmed.toLowerCase();

    if (lower === "bulk billed") {
      return (
        <span className="fee-value-badge fee-value-badge--bulk">
          Bulk Billed
        </span>
      );
    }

    if (lower === "not applicable") {
      return (
        <span className="fee-value-badge fee-value-badge--na">
          Not Applicable
        </span>
      );
    }

    if (trimmed.startsWith("$")) {
      return <span className="fee-value-money">{trimmed}</span>;
    }

    return <span className="fee-value-text">{trimmed}</span>;
  };

  return (
    <>
      <style>{`
        .fee-table-card {
          border: none;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
          background: #ffffff;
        }

        .fee-table-header {
          border-bottom: none !important;
          padding: 0 !important;
          background: linear-gradient(135deg, #2f6fe4 0%, #3f83f8 100%);
          color: #ffffff;
        }

        .fee-table-header-inner {
          padding: 16px 18px 18px;
        }

        .fee-table-title-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .fee-table-title-icon {
          color: #ff8a3d;
          flex-shrink: 0;
          margin-top: 4px;
          font-size: 1.1rem;
        }

        .fee-table-title {
          margin: 0;
          color: #ffffff;
          font-size: 1.55rem;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .fee-table-doctors-wrap {
          margin-top: 14px;
          padding: 12px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
        }

        .fee-table-doctors-label {
          margin-bottom: 10px;
          color: #1e3a8a;
          font-size: 0.84rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .fee-table-doctors-strip {
          display: grid;
          grid-template-columns: repeat(var(--doctor-count, 1), minmax(0, 1fr));
          gap: 10px;
          width: 100%;
        }

        .fee-table-body {
          padding: 0;
          background: #ffffff;
        }

        /* DESKTOP TABLE */
        .fee-table-desktop {
          width: 100%;
          margin-bottom: 0;
          border-collapse: collapse !important;
          border-spacing: 0 !important;
        }

        .fee-table-desktop thead th {
          padding: 16px 18px;

          background: #f4f8ff;
          color: #334155;

          border-top: 1px solid #dbe6f3 !important;
          border-bottom: 1px solid #dbe6f3 !important;
          border-right: 1px solid #dbe6f3 !important;
          border-left: 0 !important;

          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          line-height: 1.4;

          vertical-align: middle;
          text-transform: uppercase;
          text-align: center;
        }

        .fee-table-desktop thead th:first-child {
          width: 42%;
          text-align: left;
          border-left: 1px solid #dbe6f3 !important;
        }

        .fee-table-desktop thead th:last-child {
          border-top-right-radius: 0 !important;
        }

        .fee-table-desktop tbody th,
        .fee-table-desktop tbody td {
          padding: 16px 18px;

          background: #ffffff;

          border: 0 !important;
          border-right: 1px solid #e2e8f0 !important;
          border-bottom: 1px solid #e2e8f0 !important;

          vertical-align: middle;

          transition: background-color 0.15s ease;
        }

        .fee-table-desktop tbody th:first-child {
          border-left: 1px solid #e2e8f0 !important;
          text-align: left;
        }

        .fee-table-desktop tbody th,
        .fee-table-desktop tbody td,
        .fee-table-desktop tbody tr th:first-child,
        .fee-table-desktop tbody tr td:last-child {
          border-radius: 0 !important;
        }

        .fee-table-desktop tbody tr:nth-child(even) th,
        .fee-table-desktop tbody tr:nth-child(even) td {
          background: #fbfdff;
        }

        .fee-table-desktop tbody tr:hover th,
        .fee-table-desktop tbody tr:hover td {
          background: #f5f9ff;
        }

        .fee-table-desktop tbody th {
          color: #1f2937;
          font-weight: 800;
        }

        .fee-row-main {
          font-size: 1rem;
          font-weight: 800;
          line-height: 1.35;
          color: #1f2937;
        }

        .fee-row-sub {
          margin-top: 3px;
          color: #64748b;
          font-size: 0.86rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .fee-value-text {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1.35;
          color: #334155;
          font-weight: 600;
          text-align: center;
          width: 100%;
        }

        .fee-value-money {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: #1f2937;
          font-size: 1.03rem;
          font-weight: 800;
          line-height: 1.2;
          text-align: center;
        }

        .fee-value-empty {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          color: #94a3b8;
          font-weight: 700;
          text-align: center;
        }

        .fee-value-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 11px;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
        }

        .fee-value-badge--bulk {
          background: #eaf7ef;
          color: #137333;
          border: 1px solid #cfead7;
        }

        .fee-value-badge--na {
          background: #f3f4f6;
          color: #475569;
          border: 1px solid #e5e7eb;
        }

        /* MOBILE TABLE */
        .fee-table-mobile {
          display: none;
          padding: 14px;
          background: #ffffff;
        }

        .fee-mobile-row {
          border: 1px solid #e5edf5;
          border-radius: 18px;
          overflow: hidden;
          margin-bottom: 14px;
          background: #ffffff;
          box-shadow: 0 6px 16px rgba(15, 23, 42, 0.05);
        }

        .fee-mobile-row-label {
          padding: 14px 16px;
          background: linear-gradient(180deg, #f8fbff 0%, #f4f8ff 100%);
          border-bottom: 1px solid #e5edf5;
          font-weight: 800;
          color: #1f2937;
          line-height: 1.35;
        }

        .fee-mobile-row-values {
          display: grid;
          grid-template-columns: 1fr;
        }

        .fee-mobile-value-item {
          padding: 12px 16px;
          border-top: 1px solid #eef2f7;
        }

        .fee-mobile-value-item:first-child {
          border-top: none;
        }

        .fee-mobile-value-label {
          font-size: 0.74rem;
          font-weight: 800;
          color: #2563eb;
          margin-bottom: 4px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }

        .fee-mobile-value {
          font-size: 0.98rem;
          color: #334155;
          line-height: 1.45;
          font-weight: 600;
        }

        @media (max-width: 767px) {
          .fee-table-title {
            font-size: 1.18rem;
          }

          .fee-table-header-inner {
            padding: 14px 14px 14px;
          }

          .fee-table-doctors-wrap {
            padding: 8px;
          }

          .fee-table-doctors-label {
            font-size: 0.8rem;
          }

          .fee-table-doctors-strip {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }

          .fee-table-desktop {
            display: none;
          }

          .fee-table-mobile {
            display: block;
          }
        }

        @media (min-width: 768px) {
          .fee-table-mobile {
            display: none !important;
          }
        }
      `}</style>

      <Card className="fee-table-card mb-4">
        <CardHeader className="fee-table-header">
          <div className="fee-table-header-inner">
            <div className="fee-table-title-row">
              <span className="fee-table-title-icon" aria-hidden="true">
                <i className="fas fa-tags" />
              </span>
              <h3 className="fee-table-title">{headerTitle || feeData.title}</h3>
            </div>

            {headerRightContent ? (
              <div className="fee-table-doctors-wrap">
                {showDoctorLabel ? (
                  <div className="fee-table-doctors-label">
                    Choose a doctor for this fee table
                  </div>
                ) : null}
                <div
                  className="fee-table-doctors-strip"
                  style={{
                    "--doctor-count": React.Children.count(headerRightContent) || 1,
                  }}
                >
                  {headerRightContent}
                </div>
              </div>
            ) : null}
          </div>
        </CardHeader>

        <CardBody className="fee-table-body">
          <Table responsive className="fee-table-desktop">
            <thead className="fees-table-row">
              <tr>
                <th>{headers?.[0]?.[0] || ""}</th>
                <th>
                  <div>{headers?.[1]?.[0] || ""}</div>
                  <div>{headers?.[1]?.[1] || ""}</div>
                </th>
                <th>
                  <div>{headers?.[2]?.[0] || ""}</div>
                  <div>{headers?.[2]?.[1] || ""}</div>
                </th>
                <th>
                  <div>{headers?.[3]?.[0] || ""}</div>
                  <div>{headers?.[3]?.[1] || ""}</div>
                </th>
              </tr>
            </thead>

            <tbody className="fees-table-row">
              {rows.map((record) => (
                <tr key={record.rownum}>
                  {(record.data || []).map((rec, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="text-left">
                        <div className="fee-row-main">{rec?.[0] || ""}</div>
                        {rec?.[1] ? <div className="fee-row-sub">{rec[1]}</div> : null}
                      </th>
                    ) : (
                      <td key={i} style={{ verticalAlign: "middle", textAlign: "center" }}>
                        {renderValueContent(rec)}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="fee-table-mobile">
            {rows.map((record) => {
              const rowLabel = record?.data?.[0] || [];
              const values = [record?.data?.[1], record?.data?.[2], record?.data?.[3]];

              return (
                <div key={record.rownum} className="fee-mobile-row">
                  <div className="fee-mobile-row-label">
                    <div>{rowLabel?.[0] || ""}</div>
                    {rowLabel?.[1] ? <div className="fee-row-sub">{rowLabel[1]}</div> : null}
                  </div>

                  <div className="fee-mobile-row-values">
                    {values.map((value, idx) => (
                      <div key={idx} className="fee-mobile-value-item">
                        <div className="fee-mobile-value-label">
                          {mobileColumnHeaders[idx]}
                        </div>
                        <div className="fee-mobile-value">
                          {renderValueContent(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default TableData;