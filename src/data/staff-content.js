const staff = [
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Carmen Padilla",
    image: "dr-carmen-padilla.jpg",
    accreditations: ["FRACGP", "MBBS", "Diploma of Child Heath"],
    descriptions: [
      "Dr Padilla has been a General Practitioner in the Wodonga area for 10 years.",
      "Carmen has a special interest in women’s health, children's health, chronic disease management and men’s health.",
      "Dr Padilla speaks Spanish as well as English."
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "4:20", notes: "" }
    ],
    speaks: ["English", "Spanish"],
    booking: true,
    bookingDoctorId: "dr-carmen-padilla-1",
    socialMedia: [],
    enabled: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Angela Ramsay",
    image: "dr-ramsay.jpg",
    accreditations: ["MBChB(Bristol)", "Diploma of Obstetric", "Diploma Anaesthetic"],
    descriptions: [
      "Dr Ramsay has been a General Practitioner in the Albury Wodonga area since 1988.",
      "She is one of our Doctors at GPs on Vermont Medical Centre",
      "Dr Ramsay has a special interest in Women Health, Family Planning and Antenatal Care."
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "4:20", notes: "" }
    ],
    speaks: ["English"],
    booking: true,
    bookingDoctorId: "dr-angela-ramsay",
    socialMedia: [],
    enabled: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Richard Barkas",
    image: "avatar.jpg",
    accreditations: ["MBBS", "FRACGP", "DRANZCOG(Adv)"],
    descriptions: [
      "Dr Barkas has been working as a General Practitioner across the border communities for many years and will be working at GPs on Vermont on a part-time basis.",
      "Dr Barkas has a special interest in Men’s Health Family Health and Skin Checks."
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "4:20", notes: "" }
    ],
    speaks: ["English"],
    booking: true,
    bookingDoctorId: "dr-richard-barkas-5",
    socialMedia: [],
    enabled: true
  },
  {
    titleAbr: "Pm",
    title: "Practice Manager",
    name: "Annette Baumgarten",
    image: "Annette-Baumgarten.jpg",
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
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "12:30", notes: "" }
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
        id: "landline",
        link: "tel: 0260252189"
      },
      {
        id: "mobile",
        link: "tel: 0477413700"
      }
    ],
    enabled: true
  },
  {
    titleAbr: "Pm",
    title: "Nursing Manager",
    name: "Megan Chick",
    image: "Megan-Chick.jpg",
    accreditations: [
      "Registered nurse Division 1",
      "Clinical Nurse Specialist",
      "Midwife",
      "Childhood Immuniser"
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "12:30", notes: "" }
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
    image: "Lara-Hopkins.jpg",
    accreditations: [
      "Bachelor of Nursing",
      "Credentialed immunisation provider"
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" }
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
    image: "Jen-Walker.jpg",
    accreditations: [],
    availability: [
      { day: "Call", desc: "call for an appointment", from: "", to: "", notes: "" }
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
        link: "tel: 0260252189"
      }
    ],
    enabled: true
  },
  {
    titleAbr: "Ms",
    title: "Receptionist",
    name: "Evie Frawley",
    image: "Evie-Frawley.jpg",
    accreditations: [],
    availability: [
      { day: "Call", desc: "call for an appointment", from: "", to: "", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      "Evie is one of our two very friendly and caring receptionists who will either greet you over the phone or from behind the front desk upon entering into the clinic.",
      "She will assist you in scheduling your appointments and try her best to answer your questions.",
      "She may also send a text or call with a reminder of an upcoming appointment.",
      "She enjoys helping people and interacting with our patients and their loved ones. She can’t wait to meet you!"
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "phone",
        link: "tel: 0260252189"
      }
    ],
    enabled: true
  },
  {
    titleAbr: "Ms",
    title: "Receptionist",
    name: "Rebecca Smith",
    image: "Rebecca-Smith.jpg",
    accreditations: [],
    availability: [
      { day: "Call", desc: "call for an appointment", from: "", to: "", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      "Rebecca is one of our two very friendly and professional receptionists.",
      "She will either greet you from behind the front desk upon entering into the clinic or on the phone when you call us.",
      "She is also available to answer your queries and help with your check out once your appointment is completed.",
      "She enjoys helping people and giving support and guidance as needed. Come in and say hello!"   
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "phone",
        link: "tel: 0260252189"
      }
    ],
    enabled: true
  }
];

export default staff;
