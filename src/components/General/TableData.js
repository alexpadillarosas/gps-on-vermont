// Generated: 2026-08-09 15:28 AEST

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

        .fee-table-desktop {
          margin-bottom: 0;
        }

        .fee-table-desktop thead th {
          background: #f8fbff;
          color: #2f3136;
          font-size: 1rem;
          font-weight: 700;
          border-color: #d9e2ec;
          vertical-align: middle;
        }

        .fee-table-desktop tbody th {
          font-weight: 700;
          color: #2f3136;
          vertical-align: middle;
        }

        .fee-table-desktop tbody td {
          color: #4b5563;
          vertical-align: middle;
        }

        .fee-table-desktop tbody tr:nth-of-type(odd) {
          background-color: #fcfdff;
        }

        .fee-table-desktop tbody tr:hover {
          background-color: #f5f9ff;
        }

        .fee-table-desktop thead th:first-child {
          width: 42%;
        }

        .fee-table-mobile {
          display: none;
          padding: 14px;
          background: #ffffff;
        }

        .fee-mobile-row {
          border: 1px solid #d9e2ec;
          border-radius: 14px;
          overflow: hidden;
          margin-bottom: 12px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .fee-mobile-row-label {
          padding: 12px 14px;
          background: #f8fbff;
          border-bottom: 1px solid #e5edf5;
          font-weight: 700;
          color: #2f3136;
          line-height: 1.35;
        }

        .fee-mobile-row-values {
          display: grid;
          grid-template-columns: 1fr;
        }

        .fee-mobile-value-item {
          padding: 12px 14px;
          border-top: 1px solid #eef2f7;
        }

        .fee-mobile-value-item:first-child {
          border-top: none;
        }

        .fee-mobile-value-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1e3a8a;
          margin-bottom: 4px;
        }

        .fee-mobile-value {
          font-size: 0.98rem;
          color: #374151;
          line-height: 1.4;
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
          <Table striped bordered responsive className="fee-table-desktop">
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
                        <div>{rec?.[0] || ""}</div>
                        {rec?.[1] ? <div>{rec[1]}</div> : null}
                      </th>
                    ) : (
                      <td key={i} style={{ verticalAlign: "middle" }}>
                        {rec}
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
                    {rowLabel?.[1] ? <div>{rowLabel[1]}</div> : null}
                  </div>

                  <div className="fee-mobile-row-values">
                    {values.map((value, idx) => (
                      <div key={idx} className="fee-mobile-value-item">
                        <div className="fee-mobile-value-label">
                          {mobileColumnHeaders[idx]}
                        </div>
                        <div className="fee-mobile-value">{value}</div>
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