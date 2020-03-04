const staff = [
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Carmen Padilla",
    image: "dr-carmen.jpg",
    accreditations: ["FRACGP", "MBBS", "Diploma of Child Heath"],
    descriptions: [
      "Dr Padilla has been a General Practitioner in the Wodonga area for 10 years.",
      "Carmen has a special interest in women’s health, child health, chronic disease management, men’s health.",
      "Dr Padilla speaks Spanish as well as English."
    ],
    availability: [
      { day: "M", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "W", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "F", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "S", desc: "Saturday", from: "9:00", to: "12:30", notes: "" }
    ],
    speaks: ["English", "Spanish"],
    booking: true,
    bookingDoctorId: "dr-carmen-padilla-1",
    socialMedia: [],
    enabled: true
  },
  {
    titleAbr: "Pm",
    title: "Practice Manager",
    name: "Annette Baumgarten",
    image: "Annette.jpg",
    accreditations: [
      "Diploma of Business",
      "Graduate of the Institute of company Directors Australia",
      "Certificate of Community engagement with the Australian and International Participation"
    ],
    descriptions: [
      "Our administration Team is managed by our Practice Manager Annette.",
      "She has a vast background in Business Management and has been a Practice Manager in other Practices."
    ],
    availability: [
      { day: "M", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "W", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "F", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "S", desc: "Saturday", from: "9:00", to: "12:30", notes: "" }
    ],
    speaks: ["English"],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "facebook",
        link: "https://www.facebook.com/gpsonvermont/"
      },
      {
        id: "phone",
        link: "0260252189"
      }
    ],
    enabled: true
  },
  {
    titleAbr: "Pm",
    title: "Nursing Manager",
    name: "Megan Chick",
    image: "avatar.jpg",
    accreditations: [
      "Registered nurse Division 1",
      "Clinical Nurse Specialist",
      "Midwife",
      "Childhood Immuniser"
    ],
    availability: [
      { day: "M", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "W", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "F", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "S", desc: "Saturday", from: "9:00", to: "12:30", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      " Megan has been nursing for over 20 years and has extensive experience in clinical care in General Practice",
      "She looks forward to meeting the new patients to the clinic."
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [],
    enabled: true
  },
  {
    titleAbr: "Nr",
    title: "Practice Nurse",
    name: "Lara Hopkins",
    image: "Lara.jpg",
    accreditations: [
      "Bachelor of Nursing",
      "Credentialed immunisation provider"
    ],
    availability: [
      { day: "M", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "T", desc: "Thursday", from: "8:30", to: "5:20", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      "Lara shares a high passion for primary health care.  She has worked in this environment for the past five years after successfully completing her studies of ‘Bachelor of Nursing’ in 2015.",
      "Our nurse Lara is very passionate about general practice and enjoys all aspects of practice nursing. She is a strong advocate for whole patient care, health and wellbeing. Lara also holds a strong interest in Immunisation since becoming a credentialed immunisation provider in 2016.  She also has extensive experience with the skin since having worked in specialised skin clinics for many years.",
      "Outside of work Lara has three gorgeous children and in her spare time she enjoys trips to the snow, drinking coffee, catching up with friends, walking and spending time with her family."
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [],
    enabled: true
  },
  {
    titleAbr: "Pm",
    title: "Mental Health Social Worker",
    name: "Jen Walker",
    image: "Jen.jpg",
    accreditations: [],
    availability: [
      { day: "i", desc: "call for an appointment", from: "", to: "", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      "I am an Accredited Mental Health Social Worker and have been in this field for nearly 20 years.",
      "In this time I have worked in the homeless sector, drug and alcohol, education, young people, children with challenging behaviours, forensic drug and alcohol and with the Veteran community.",
      "My passion is working with trauma affected people as trauma can and does underpin many mental health problems and I see this often in my practice.",
      "I use Cognitive Behaviour Therapy, Narrative Therapy and Acceptance Commitment Therapy and have trained in Cognitive Processing Therapy.",
      "I like to stay up to date with new emerging ways to support those with mental health issues and undertake training and academic study on a regular basis."
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "phone",
        link: "0260252189"
      }
    ],
    enabled: true
  }
];

export default staff;
