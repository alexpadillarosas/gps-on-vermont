const staff = [
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Carmen Padilla",
    image: "dr-carmen-padilla.jpg",
    accreditations: ["FRACGP", "MBBS", "Diploma of Child Heath"],
    descriptions: [
      "Dr. Padilla has been a General Practitioner in the Wodonga area for 10 years.",
      "Carmen has a special interest in women’s health, children's health, chronic disease management and men’s health.",
      "Dr. Padilla speaks Spanish as well as English."
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
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Angela Ramsay",
    image: "dr-ramsay.jpg",
    accreditations: ["MBChB(Bristol)", "Diploma of Obstetric", "Diploma Anaesthetic"],
    descriptions: [
      "Dr. Ramsay has been a General Practitioner in the Albury Wodonga area since 1988.",
      "Dr. Ramsay has a special interest in Women Health, Family Planning and Antenatal Care."
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
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Buddhi Lokuketagoda",
    image: "dr-lokuketagoda.jpg",
    accreditations: ["MBBS", "MD"],
    descriptions: [
      "Buddhi worked as a Clinician in hospital settings, General Practice and preventive health sector for 20 years in Sri Lanka.",
      "She came to Australia in March 2021 and has worked in General Practice.",
      "Dr Lokuketagoda is trained both as a clinician and a researcher in the Medical Field.",
      "Buddhi has been trained to work in several fields including Antenatal care, Women’s Health, Paediatrics, non-communicable diseases & Mental health.",
      "Buddhi's special interests are non-communicable diseases, women’s health, and paediatrics."
    ],
    availability: [
      // { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "9:30", to: "11:30", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:00", to: "2:50", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:15", to: "3:45", notes: "" },
      // { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      // { day: "Sat", desc: "Saturday", from: "9:00", to: "4:20", notes: "" }
    ],
    speaks: ["English"],
    booking: true,
    bookingDoctorId: "dr-buddhi-lokuketagoda",
    socialMedia: [],
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Elena Douse",
    image: "dr-douse.jpg",
    accreditations: ["MBBS, BSc (Hons)", "DRCOG", "FRACGP"],
    descriptions: [
      "Dr Elena Douse trained and qualified at Guys, Kings and St Thomas’s Hospital in London, UK.",
      "She and her husband emigrated to Australia in 2012, working in both rural Victoria as well as the Gold Coast.",
      "Dr Douse brings a wealth of knowledge and experience in complex chronic disease with interests in Cardiology and Diabetes management.",
      "She also has extensive experience in medicinal cannabis prescribing - successfully managing a range of chronic pain conditions, anxiety, and other neurological presentations.",
      "Outside of medicine Dr Douse loves travel, particularly to Greece, as well as participating in winter snow sports with her two young children."
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
    bookingDoctorId: "dr-elena-douse-1",
    socialMedia: [],
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Richard Barkas",
    image: "dr-barkas.jpg",
    accreditations: ["MBBS", "FRACGP", "DRANZCOG(Adv)"],
    descriptions: [
      "Dr. Barkas has been working as a General Practitioner across the border communities for many years.",
      "Dr. Barkas consults at GPs on Vermont on a part-time basis."
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
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Joyce Manthi",
    image: "avatar.jpg",
    accreditations: ["MBChB (Nairobi) ", "Dip. Emergency Med (Rome, Italy)", "MPH (Liverpool, UK)"],
    descriptions: [
      "Dr. Joyce Manthi graduated with a medical degree from the University of Nairobi, Kenya. Before recently relocating to Australia, Dr. Joyce had been practising as a medical doctor in Kenya for over 8 years.",
      "Joyce has special interests in women’s health, infectious diseases, lifestyle and preventive medicine."
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "4:20", notes: "" }
    ],
    speaks: ["English", "Swahili"],
    booking: true,
    bookingDoctorId: "dr-joyce-manthi",
    socialMedia: [],
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Tharuka Gunasekara",
    image: "dr-tharuka.jpg",
    accreditations: [],
    descriptions: [
      "Dr. Tharuka is a dedicated General Practitioner with a rich background in medicine, bringing extensive international experience to her role at GPs in Vermont. She graduated from the University of Science and Technology, Bangladesh in 2017, and has since built a diverse career across several medical settings in Bangladesh, Sri Lanka (Army Hospital), as well as Queensland Health.",
      "Dr. Tharuka has worked across various medicine subspecialties and emergency units in different hospital environments, developing a comprehensive skill set and a deep understanding of patient care. Her special interest lies in enhancing general practice in regional areas, with a focus on improving primary care and the overall health and wellbeing of communities.",
      "Outside of her professional commitments, Dr. Tharuka enjoys traveling, watching sports, and discovering great cafes, reflecting her enthusiasm for new experiences and cultural exploration. Her diverse background and commitment to community health make her a valuable addition to the team at GPs in Vermont."
    ],
    availability: [
      { day: "Mon", desc: "Monday", from: "8:30", to: "5:20", notes: "" },
      { day: "Tue", desc: "Tuesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Wed", desc: "Wednesday", from: "8:30", to: "5:20", notes: "" },
      { day: "Thu", desc: "Thursday", from: "8:30", to: "5:20", notes: "" },
      { day: "Fri", desc: "Friday", from: "8:30", to: "5:20", notes: "" },
      { day: "Sat", desc: "Saturday", from: "9:00", to: "4:20", notes: "" }
    ],
    speaks: ["English", "Sinhalese","Hindi","Bengali"],
    booking: false,
    bookingDoctorId: "dr-joyce-manthi",
    socialMedia: [],
    enabled: true,
    doctor: true
  },
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Hooman Pio",
    image: "dr-hooman.jpg",
    accreditations: ["Master of Public Health"],
    descriptions: [
      "Dr. Hooman Mohammadi is a medical doctor with M.P.H degree, with over 15 years experience in General Family Practice.",
      "He has special interests in in Mens Health, Communicable and Chronic Disease prevention and management. Mental Health issues, interested in susceptible age groups ( older persons, children, women) with issues related to their quality of life, such as workplace and school safety, related health education and promotion, and long term improvement in all social and medical aspects ."
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
    booking: false,
    bookingDoctorId: "dr-joyce-manthi",
    socialMedia: [],
    enabled: false,
    doctor: true
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
    enabled: false,
    doctor: false
  },
  {
    titleAbr: "Pm",
    title: "Practice Manager",
    name: "Liz Caunt",
    image: "Liz-Caunt.jpg",
    accreditations: [
      "Advanced Diploma in Business Management ",
      "Justice of the Peace."
    ],
    descriptions: [
      "Our administration Team is managed by our Practice Manager Liz.",
      "Liz has extensive experience working in health management, and believes that patient care is a priority of the practice.",
      "She is very passionate about maintaining a high level of Customer Service for the patients of doctos we support and will maintain open lines of communication."
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
      }
    ],
    enabled: true,
    doctor: false
  },
  {
    titleAbr: "Pm",
    title: "Nursing Manager",
    name: "Megan",
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
      "She looks forward to meeting the new patients of the doctors we support."
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [],
    enabled: true,
    doctor: false
  },
  {
    titleAbr: "Nr",
    title: "Practice Nurse",
    name: "Lara",
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
      "Lara shares a high passion for primary health care. She has worked in this environment for the past 8 years after successfully completing her studies of ‘Bachelor of Nursing’ in 2015.",
      "Our nurse Lara is very passionate about general practice and enjoys all aspects of practice nursing. She is a strong advocate for whole patient care, health and wellbeing.",
      "Lara also holds a strong interest in school nursing and attends currently two schools weekly (alongside a GP) to see students. She also has extensive experience with the skin since having worked in specialised skin clinics for many years."
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [],
    enabled: true,
    doctor: false
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
    enabled: false,
    doctor: false
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
    enabled: false,
    doctor: false
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
    enabled: false,
    doctor: false
  },
  {
    titleAbr: "Ms",
    title: "Receptionist",
    name: "Bayleigh Reedy",
    image: "Bayleigh-Reedy.jpg",
    accreditations: [],
    availability: [
      { day: "Call", desc: "call for an appointment", from: "", to: "", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      "Rebecca is one of our friendly and professional receptionists.",
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
    enabled: false,
    doctor: false
  },
  {
    titleAbr: "Ms",
    title: "Receptionist",
    name: "Summer Matthews",
    image: "Summer-Matthews.jpg",
    accreditations: [],
    availability: [
      { day: "Call", desc: "call for an appointment", from: "", to: "", notes: "" }
    ],
    speaks: ["English"],
    descriptions: [
      "Summer is one of our friendly and professional receptionists.",
      "She will assist you in scheduling your appointments and try her best to answer your questions.",
      "She is also available to answer your queries and help with your check out once your appointment is completed.",
      "She can’t wait to meet you!"   
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "phone",
        link: "tel: 0260252189"
      }
    ],
    enabled: false,
    doctor: false
  }
];

export default staff;
