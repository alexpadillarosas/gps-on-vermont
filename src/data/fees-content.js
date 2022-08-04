const fees = [
    {
        title: "Dr Padilla: Private Billing Fees",
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
                    "$74.75",
                    "$39.75",
                    "$35.00"
                ]

            },
            {
                rownum: 2,
                data: [
                    ["Long Consult / Telehealth", "(more than 20 minutes)"],
                    "$111.95",
                    "$76.95",
                    "$35.00"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["Extended Consult", " "],
                    "$148.30",
                    "$113.30",
                    "$35.00"
                ]

            },
            {
                rownum: 5,
                data: [
                    ["Saturday After Hours"],
                    "$172.25",
                    "$137.25",
                    "$35.00"
                ]

            },
            {
                rownum: 7,
                data: [
                    ["Pensioner Standard Consult / Telehealth", "(less than 20 minutes)"],
                    "$59.75",
                    "$39.75",
                    "$20.00"
                ]

            },
            {
                rownum: 8,
                data: [
                    ["Pensioner Long Consult / Telehealth", "(more than 20 minutes)"],
                    "$96.95",
                    "$76.95",
                    "$20.00"
                ]

            },
            {
                rownum: 9,
                data: [
                    ["Pensioner Extended Consult", " "],
                    "$133.30",
                    "$113.30",
                    "$20.00"
                ]

            },
            {
                rownum: 11,
                data: [
                    ["Pensioner Saturday After Hours"],
                    "157.25",
                    "137.25",
                    "20.00"
                ]

            },
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
        title: "Dr Manthi and Dr Barkas Fees",
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
    {
        title: "Dr Ramsay: Private Billing Fees",
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
                    "$74.75",
                    "$39.75",
                    "$35.00"
                ]

            },
            {
                rownum: 2,
                data: [
                    ["Long Consult / Telehealth", "(more than 20 minutes)"],
                    "$111.95",
                    "$76.95",
                    "$35.00"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["Extended Consult", "(more than 20 minutes)"],
                    "$148.30",
                    "$113.30",
                    "$35.00"
                ]

            },
            {
                rownum: 3,
                data: [
                    ["Pensioner Standard Consult / Telehealth", "(less than 20 minutes)"],
                    "$59.75",
                    "$39.75",
                    "$20.00"
                ]

            },
            {
                rownum: 4,
                data: [
                    ["Pensioner Long Consult / Telehealth", "(more than 20 minutes)"],
                    "$96.95",
                    "$76.95",
                    "$20.00"
                ]

            },
            {
                rownum: 4,
                data: [
                    ["Extended Consult"],
                    "$133.30",
                    "$113.30",
                    "$20.00"
                ]

            },
            {
                rownum: 5,
                data: [
                    ["DVA Patients"],
                    "Bulk Billed",
                    "Not Applicable",
                    "Not Applicable"
                ]

            }
        ]
    }
    

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