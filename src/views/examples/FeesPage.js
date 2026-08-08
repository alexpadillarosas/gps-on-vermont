import React, { useEffect } from "react";
import OtherNavbar from "../../components/NavBars/OtherNavbar";
import { headerScrolling } from "./commons";
import { Container } from "reactstrap"; 
import TableData from "../../components/General/TableData";
import feeContent from "../../data/fees-content";
import DarkFooter from "../../components/Footers/DarkFooter";
import BookingButton from "../../components/General/BookingButton";
import LandingPageHeader from "../../components/Headers/LandingPageHeader";

const FeesPage = () => {
  const message = "";

  useEffect(() => {
    headerScrolling();
  });

  // Helper method for handling native smooth scrolling down to target tables
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Badges array updated with structural target IDs
  const consultationBadges = [
    { label: "Standard Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Short Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Long Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Extended Consult", targetId: "fee-section-0", type: "standard" },
    { label: "Telehealth", targetId: "fee-section-0", type: "standard" },
    // Dedicated Bulk Billing tag configured to snap straight down to your second data index card row
    { label: "✨ Bulk Billing / Pensioner", targetId: "fee-section-1", type: "promo" },
  ];

  return (
    <>
      <OtherNavbar />
      <div className="wrapper">
        <LandingPageHeader
          title={message}
          imageClassName={"page-header page-header-xsmall"}
          contentClassName={"content-center-other-pages"}
          titleClassName={"title-small-header"}
        />
        <div className="section pt-4 pb-0">
          
          {/* Main layout container tracking the table spacing rules */}
          <Container className="mb-5">
            <div className="row mx-0"> 
              <div className="col-12 px-0"> 
                
                {/* Visual Banner Block */}
                <div 
                  className="p-4 border-0 rounded text-left shadow-sm" 
                  style={{ 
                    backgroundColor: "#f0f7ff",
                    borderLeft: "6px solid #2c7be5", 
                    width: "100%",
                    textTransform: "none"
                  }}
                >
                  {/* Header Title */}
                  <h4 
                    className="font-weight-bold mb-2" 
                    style={{ 
                      color: "#1e3a8a", 
                      fontSize: "1.45rem", 
                      textTransform: "none",
                      letterSpacing: "-0.3px"
                    }}
                  >
                    Available Consultation Types & Fees
                  </h4>

                  <p 
                    className="text-dark mb-3" 
                    style={{ fontSize: "1.05rem", fontWeight: "500", textTransform: "none" }}
                  >
                    We provide a comprehensive range of clinical services tailored to your schedule. Click any service type below to view its specific billing structural metrics immediately:
                  </p>

                  {/* Horizontal Interactive Badges Wrapper Block */}
                  <div className="d-flex flex-wrap align-items-center my-3" style={{ gap: "10px" }}>
                    {consultationBadges.map((badge, idx) => {
                      // Apply high-contrast emphasis styles if it's the premium bulk-billing badge
                      const isPromo = badge.type === "promo";
                      
                      return (
                        <button
                          key={idx}
                          onClick={() => scrollToSection(badge.targetId)}
                          className="btn font-weight-bold px-3 py-2 border-0 shadow-sm"
                          style={{
                            backgroundColor: isPromo ? "#e6f4ea" : "#ffffff", // Fresh medical light-green background for emphasis
                            color: isPromo ? "#137333" : "#2c7be5", // Crisp green text pairing
                            border: isPromo ? "1px solid #ceead6" : "none",
                            borderRadius: "20px",
                            fontSize: "0.9rem",
                            textTransform: "none",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = isPromo ? "#137333" : "#2c7be5";
                            e.currentTarget.style.color = "#ffffff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = isPromo ? "#e6f4ea" : "#ffffff";
                            e.currentTarget.style.color = isPromo ? "#137333" : "#2c7be5";
                          }}
                        >
                          {badge.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Subtle Divider Hint */}
                  <div 
                    className="d-flex align-items-center pt-3 mt-3" 
                    style={{ borderTop: "1px solid rgba(44, 123, 229, 0.15)" }}
                  >
                    <span className="mr-2" style={{ fontSize: "1.2rem" }}>👇</span>
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

          {/* Tables Loop */}
          {feeContent.map((fee, index) => (
            /* Added an explicit dynamic wrapper id attribute to track target anchors cleanly */
            <div id={`fee-section-${index}`} key={index} style={{ scrollMarginTop: "100px" }}>
              <Container className="text-muted mb-4">
                <TableData
                  feeData={fee}
                  index={index}
                  headerRightContent={
                    <BookingButton
                      doctorId={fee.bookingDoctorId}
                      className="btn-weight"
                      size="large"
                    />
                  }
                />
              </Container>
            </div>
          ))}
        </div>
      </div>
      <DarkFooter />
    </>
  );
};

export default FeesPage;
