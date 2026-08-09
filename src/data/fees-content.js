// Generated: 2026-08-09 15:28 AEST

export const doctors = [
  {
    id: 1,
    titleAbr: "Dr",
    name: "Carmen Padilla",
    bookingDoctorId: "dr-carmen-padilla-1",
    image: "dr-carmen-padilla.jpg",
    profileLink: "/doctor-details/carmen-padilla",
    speaks: ["English", "Spanish"],
    accreditations: ["MBBS", "FRACGP"],
  },
  {
    id: 2,
    titleAbr: "Dr",
    name: "Angela Ramsay",
    bookingDoctorId: "dr-angela-ramsay",
    image: "dr-ramsay.jpg",
    profileLink: "/doctor-details/angela-ramsay",
    speaks: ["English"],
    accreditations: ["MBBS", "FRACGP"],
  },
  {
    id: 3,
    titleAbr: "Dr",
    name: "Elena Douse",
    bookingDoctorId: "dr-elena-douse-1",
    image: "dr-douse.jpg",
    profileLink: "/doctor-details/elena-douse",
    speaks: ["English"],
    accreditations: ["MBBS", "FRACGP"],
  },
  {
    id: 4,
    titleAbr: "Dr",
    name: "Buddhi Lokuketagoda",
    bookingDoctorId: "dr-buddhi-lokuketagoda",
    image: "dr-lokuketagoda.jpg",
    profileLink: "/doctor-details/buddhi-lokuketagoda",
    speaks: ["English"],
    accreditations: ["MBBS"],
  },
  {
    id: 5,
    titleAbr: "Dr",
    name: "Tharuka Gunasekara",
    bookingDoctorId: "dr-tharuka-gunasekara",
    image: "dr-tharuka.jpg",
    profileLink: "/doctor-details/tharuka-gunasekara",
    speaks: ["English", "Sinhalese"],
    accreditations: ["MBBS"],
  },
  {
    id: 6,
    titleAbr: "Dr",
    name: "Sampath Aluthge",
    bookingDoctorId: "dr-sampath-aluthge",
    image: "dr-sampath.jpg",
    profileLink: "/doctor-details/sampath-aluthge",
    speaks: ["English", "Sinhalese"],
    accreditations: ["MBBS"],
  },
  {
    id: 7,
    titleAbr: "Dr",
    name: "Virajinee",
    bookingDoctorId: "dr-virajinee-rathnayake",
    image: "dr-virajinee.jpg",
    profileLink: "/doctor-details/virajinee-rathnayake",
    speaks: ["English"],
    accreditations: ["MBBS"],
  },
];

export const fees = [
  {
    title: "Dr Carmen Padilla, Angela Ramsay, and Elena Douse: Private Billing Fees",
    doctorIds: [1, 2, 3],
    header: [
      [""],
      ["Amount Payable", "on the day"],
      ["Medicare Rebate", "on the day"],
      ["Out of pocket", "cost"],
    ],
    row: [
      {
        rownum: 1,
        data: [
          ["Standard Consult / Telehealth", "(less than 20 minutes)"],
          "$91.00",
          "$45.05",
          "$42.85",
        ],
      },
      {
        rownum: 2,
        data: [
          ["Long Consult / Telehealth", "(more than 20 minutes)"],
          "$140.00",
          "$87.10",
          "$52.90",
        ],
      },
      {
        rownum: 3,
        data: [
          ["Extended Consult", " "],
          "$180.00",
          "$128.35",
          "$51.65",
        ],
      },
      {
        rownum: 7,
        data: [
          ["Pensioner Standard Consult / Telehealth", "(less than 20 minutes)"],
          "Bulk Billed",
          "Bulk Billed",
          "Bulk Billed",
        ],
      },
      {
        rownum: 8,
        data: [
          ["Pensioner Long Consult / Telehealth", "(more than 20 minutes)"],
          "Bulk Billed",
          "Bulk Billed",
          "Bulk Billed",
        ],
      },
      {
        rownum: 9,
        data: [
          ["Pensioner Extended Consult", " "],
          "Bulk Billed",
          "Bulk Billed",
          "Bulk Billed",
        ],
      },
      {
        rownum: 13,
        data: [
          ["DVA Patients"],
          "Bulk Billed",
          "Not Applicable",
          "Not Applicable",
        ],
      },
    ],
  },
  {
    title: "Dr Buddhi, Tharuka, Sampath and Virajinee Fees",
    doctorIds: [4, 5, 6, 7],
    header: [
      [""],
      ["Amount Payable", "on the day"],
      ["Medicare Rebate", "on the day"],
      ["Out of pocket", "cost"],
    ],
    row: [
      {
        rownum: 1,
        data: [
          ["Pensioners Health", "Card Holders"],
          "Bulk Billed",
          "Not Applicable",
          "Not Applicable",
        ],
      },
      {
        rownum: 2,
        data: [
          ["Children under 16 yrs", "Adolescents 16-25 yrs"],
          "Bulk Billed",
          "Not Applicable",
          "Not Applicable",
        ],
      },
      {
        rownum: 3,
        data: [
          ["DVA Patients"],
          "Bulk Billed",
          "Not Applicable",
          "Not Applicable",
        ],
      },
      {
        rownum: 4,
        data: [
          ["Standard Consultation 10 minutes"],
          "Bulk Billed",
          "Not Applicable",
          "Not Applicable",
        ],
      },
      {
        rownum: 5,
        data: [
          ["Long Consultation 20 minutes"],
          "Bulk Billed",
          "Not Applicable",
          "Not Applicable",
        ],
      },
    ],
  },
];

export default fees;