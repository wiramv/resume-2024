export interface working{
    company : String,
    position : String,
    workingTime : number[][] | "",
    achievement : string[]
}

const workingData : working[]= [
    {
        company : "Binc",
        position : "Frontend Developer & UI UX Designer",
        workingTime : [[11,7,2022],[2,3,2024]],
        achievement : [
            "Successfully increased website traffic by 20% through the implementation of dynamic dApp listing on the side menu, resulting in a higher number of unique user IP addresses.",
            "Achieved a reduction in load time by 320ms by optimizing with Chrome Lighthouse and implementing techniques such as next image sharp and lazy loading.",
            "Enhanced responsiveness across four additional display screens through rigorous testing with device screen simulation, while simultaneously refining the design by eliminating distracting elements.",
            "Recognized for improving the basic design and enhancing overall hierarchy and spacing in the Solana Sandstorm , as evidenced by jury scores and getting the 1st human readable award.",
            "Successfully reduced analytics page load time from hours to less than 30 minutes and prevented refresh by implementing socket instead of REST API, verified through manual testing of load time.",
            "Enhanced the design and color scheme based on user feedback by implementing changes such as altering the color scheme and making the call-to-action more prominent.",
            "Improved design and color scheme further, resulting in a 14% increase in positive feedback from users, based on user feedback, by refining the color scheme and enhancing the visibility of the call-to-action."
        ]
    },
    {
        company : "tekape",
        position : "Social media Designer & Frontend Developer",
        workingTime : [[4, 22, 2021], [8, 13, 2022]],
        achievement : [
            "Successfully improved social media traffic by 7% within one month by increasing Instagram followers and implementing custom Instagram post designs aligned with new branding guidelines.",
            "Achieved a reduction in web load time by 300ms, as measured by Chrome Lighthouse, through the migration from WordPress to Next.js."
        ]
    },
    {
        company : "prismpods",
        position : "Freelance Social media designer",
        workingTime : [[10, 21, 2019],[8, 10, 2020]],
        achievement : ["Enhanced social media traffic by 17% over a three-month period by increasing Instagram followers and fostering greater user interactions by implementing custom Instagram post designs in accordance with new branding guidelines to optimize user engagement and brand consistency."]
    },
    {
        company : "Iconic Photography",
        position : "Freelance web and graphic designer",
        workingTime : "",
        achievement : ["Designed logo, web interface, and functional landing page within an 11-day timeframe through effective collaboration with clients."]
    },
    {
        company : "Dawn Design",
        position : "Graphic designer",
        workingTime : "",
        achievement : ["Developed a comprehensive branding guideline PDF consisting of 20 pages within a 12-day timeframe."]
    },
    {
        company : "Hijrah Bank",
        position : "Graphic designer",
        workingTime : "",
        achievement : ["Crafted a logo, developed a branding guideline, and designed a landing page within an impressive two-day timeframe."]
    },
    {
        company : "Parrot Maniaque",
        position : "Graphic designer",
        workingTime : "",
        achievement : ["Designed a logo, developed a branding guideline, and created packaging solutions within a 12-day timeframe."]
    },
    {
        company : "Rihlah Tour",
        position : "Business Consultant",
        workingTime : "",
        achievement : ["Secured Rp 1.000.000.000,- funding from investors by meticulously crafting a comprehensive investment plan tailored to the company's needs."]
    },
    {
        company : "Tas Batam",
        position : "Business Consultant",
        workingTime : "",
        achievement : ["Enhanced productivity by 5%, as measured by the average merchandise shipped, through strategic optimization of the company's working schedule and fostering improved work-life balance, as outlined in the business plan."]
    }
]

export default workingData