import React from "react";
import IconCheckList from "./IconCheckList";
import IconSocialMediaList from "./IconSocialMediaList";
import DescriptionList from "./DescriptionList";
import BookingButton from "./BookingButton";
import {
  Card,
  CardBody,
  CardImg,
  CardHeader,
  CardTitle,
  CardText,
  Badge
} from "reactstrap";

const BusinessCard = ({ emp, cardClassName, headerClassName, cardImageClassName, cardBodyClassName }) => {
  
  let path = emp.image;

  if (!cardImageClassName)
    cardImageClassName = "rounded-circle img-fluid business-card-image";

  return (
    <>
      {/* 
        Outer Card Grid Mechanics:
        Forced h-100 and flex column height behavior so it naturally stretches 
        to match the row layout track height seamlessly across all devices.
      */}
      <Card 
        className={cardClassName}
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          height: "100%",
          textTransform: "none",
          backgroundColor: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          boxShadow: "0 4px 25px rgba(0, 0, 0, 0.02)",
          overflow: "hidden"
        }}
      >
        {/* Soft, premium medical teal accent indicator bar across the top edge */}
        <div style={{ height: "6px", backgroundColor: "#0f766e", width: "100%" }} />

        {/* 
          1. RESTORED UNTOUCHED CARDHEADER:
          Kept completely original to preserve your blue-to-peach backgrounds, 
          avatar sizes, and native text positioning perfectly.
        */}
        <CardHeader className={headerClassName}>
          <CardImg
            className={cardImageClassName}
            alt={emp.name}
            src={require(`../../assets/img/staff/${path}`)}
            top
          />
        </CardHeader>

        {/* 
          2. ENHANCED CARDBODY CONTENT TRAIL:
          Kept your original cardBodyClassName hook intact to maintain internal checkmark margins,
          but forced a vertical flex column layout to allow for dynamic panel grouping.
        */}
        <CardBody 
          className={cardBodyClassName}
          style={{ 
            display: "flex", 
            flexDirection: "column", 
            flexGrow: 1,
            paddingTop: "24px"
          }}
        >
          {/* Main Title Section */}
          <CardTitle tag="h4" className="business-card-name text-muted">
            {emp.name}
          </CardTitle>
          <CardText tag="h4" className="business-card-title text-primary">
            {emp.title}
          </CardText>

          {/* Spoken Languages badging tray */}
          <div className="spoken-languages">
            {emp.speaks.map((lang, index) => (
              <Badge key={index} className="language-pill" pill>
                {lang}
              </Badge>
            ))}
          </div>
          
          <hr />
          
          {/* 
            3. THE UI PREMIUM UPGRADE:
            Placing the variable length descriptions inside a soft, clean, modern gray sub-panel panel. 
            This groups the paragraph text together beautifully and creates a high-end medical software look.
          */}
          <div style={{ backgroundColor: "#f8fafc", padding: "16px", borderRadius: "12px", marginBottom: "16px", border: "1px solid #f1f5f9" }}>
            <DescriptionList
              list={emp.descriptions}
              includeNewLine={false}
              className="text-justified font-paragraph text-muted mb-0"
              style={{ fontSize: "0.92rem", lineHeight: "1.55" }}
            />
          </div>
          
          <div className="new-line"></div>
          
          {/* 
            Accreditations Checklist wrapper block:
            Using flex-grow-1 creates a dynamic spacing cushion to balance out text discrepancies,
            keeping lower button elements perfectly flat across the entire row.
          */}
          <div className="flex-grow-1 d-flex align-items-center mt-2 mb-3">
            <IconCheckList
              list={emp.accreditations}
              className="text-left font-paragraph text-muted w-100"
              ulClassName="fa-ul"
              liClassName="fa-li"
              iconClassName="fa fa-check-circle fa-lg"
            />
          </div>
        </CardBody>

        {/* 
          4. PINNED BOTTOM ACTION TRAY:
          Uses a standard marginTop: "auto" layout variable to lock the booking elements 
          and social loops down onto a unified, matching bottom baseline with ample padding.
        */}
        <div style={{ marginTop: "auto", width: "100%", paddingBottom: "24px", textAlign: "center" }}>
          <div className="mb-2">
            <IconSocialMediaList list={emp.socialMedia} size="lg" color="info" target="_blank" rel="noopener noreferrer" />
          </div>
          {emp.booking ? (
            <div className="px-4">
              <BookingButton doctorId={emp.bookingDoctorId} size="large" />
            </div>
          ) : null}
        </div>

      </Card>
    </>
  );
};

export default BusinessCard;
