const fees = [
    {
        title: "Dr Carmen Padilla, Angela Ramsay, and Elena Douse : Private Billing Fees",
        bookingDoctorId: "",
        header: [
            [""],
            ["Amount Payable", "on the day"],
            ["Medicare Rebate", "on the day"],
            ["Out of pocket", "cost"]
        ],
        row: [
            {
                rownum: 1,
                data: [
                    ["Standard Consult / Telehealth", "(less than 20 minutes)"],
                    "$87.00",
                    "$42.85",
                    "$44.15"
                ]

            },
            {
                rownum: 2,
                data: [
                    ["Long Consult / Telehealth", "(more than 20 minutes)"],
                    "$130.00",
                    "$82.90",
                    "$47.10"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["Extended Consult", " "],
                    "$170.00",
                    "$122.15",
                    "$47.85"
                ]

            },
            // {
            //     rownum: 5,
            //     data: [
            //         ["Saturday After Hours"],
            //         "$172.25",
            //         "$137.25",
            //         "$35.00"
            //     ]

            // },
            {
                rownum: 7,
                data: [
                    ["Pensioner Standard Consult / Telehealth", "(less than 20 minutes)"],
                    "Bulk Billed",
                    "Bulk Billed",
                    "Bulk Billed"
                ]

            },
            {
                rownum: 8,
                data: [
                    ["Pensioner Long Consult / Telehealth", "(more than 20 minutes)"],
                    "Bulk Billed",
                    "Bulk Billed",
                    "Bulk Billed"
                ]

            },
            {
                rownum: 9,
                data: [
                    ["Pensioner Extended Consult", " "],
                    "Bulk Billed",
                    "Bulk Billed",
                    "Bulk Billed"
                ]

            },
            // {
            //     rownum: 11,
            //     data: [
            //         ["Pensioner Saturday After Hours"],
            //         "157.25",
            //         "137.25",
            //         "20.00"
            //     ]

            // },
            {
                rownum: 13,
                data: [
                    ["DVA Patients"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            }
        ]
    },
    {
        title: "Dr Buddhi, Tharuka, Sampath and Virajinee Fees",
        bookingDoctorId: "",
        header: [
            [""],
            ["Amount Payable", "on the day"],
            ["Medicare Rebate", "on the day"],
            ["Out of pocket", "cost"]
        ],
        row: [
            {
                rownum: 1,
                data: [
                    ["Pensioners Health", "Card Holders"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 2,
                data: [
                    ["Children under 16 yrs", "Adolescents 16-25 yrs"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["DVA Patients"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 4,
                data: [
                    ["Standard Consultation 10 minutes"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            },
            {
                rownum: 5,
                data: [
                    ["Long Consultation 20 minutes"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            }
        ]
    },
    // {
    //     title: "Dr Ramsay: Private Billing Fees",
    //     bookingDoctorId: "dr-angela-ramsay",
    //     header: [
    //         [""],
    //         ["Amount Payable", "on the day"],
    //         ["Medicare Rebate", "on the day"],
    //         ["Out of pocket", "cost"]
    //     ],
    //     row: [
    //         {
    //             rownum: 1,
    //             data: [
    //                 ["Standard Consult / Telehealth", "(less than 20 minutes)"],
    //                 "$79.00",
    //                 "$41.20",
    //                 "$37.80"
    //             ]

    //         },
    //         {
    //             rownum: 2,
    //             data: [
    //                 ["Long Consult / Telehealth", "(more than 20 minutes)"],
    //                 "$120.00",
    //                 "$79.70",
    //                 "$37.80"
    //             ]

    //         },
    //         {
    //             rownum: 3,
    //             data: [
    //                 ["Extended Consult", "(more than 20 minutes)"],
    //                 "$154.00",
    //                 "$117.40",
    //                 "$36.60"
    //             ]

    //         },
    //         {
    //             rownum: 3,
    //             data: [
    //                 ["Pensioner Standard Consult / Telehealth", "(less than 20 minutes)"],
    //                 "$63.00",
    //                 "$41.20",
    //                 "$22.30"
    //             ]

    //         },
    //         {
    //             rownum: 4,
    //             data: [
    //                 ["Pensioner Long Consult / Telehealth", "(more than 20 minutes)"],
    //                 "$102.00",
    //                 "$79.70",
    //                 "$21.30"
    //             ]

    //         },
    //         {
    //             rownum: 4,
    //             data: [
    //                 ["Extended Consult"],
    //                 "$139.00",
    //                 "$117.40",
    //                 "$22.60"
    //             ]

    //         },
    //         {
    //             rownum: 5,
    //             data: [
    //                 ["DVA Patients"],
    //                 "Bulk Billed",
    //                 "Not Applicable",
    //                 "Not Applicable"
    //             ]

    //         }
    //     ]
    // }
    

]

export default fees;

/*
{
    headers: [
        "",
        "Amount Payable on the day",
        "Medicare Rebate on the day",
        "Out of pocket cost"
    ],
    values: [ 
        { label: "Pensioners Health Card Holders", value1: "Bulk Billed", value2: "Not Applicable", value3: "Not Applicable" },
        { label: "Children under 16 yrs Adolescents 16-25 yrs", value1: "Bulk Billed", value2: "Not Applicable", value3: "Not Applicable" },
        { label: "DVA Patients", value1: "Bulk Billed", value2: "Not Applicable", value3: "Not Applicable" },
        { label: "Standard Consultation 10 minutes", value1: "$63.20", value2: "$38.20", value3: "$25.00" },
        { label: "Long Consultation 20 minutes", value1: "$98.95", value2: "$73.95", value3: "$25.00" }
    ]

}

*/