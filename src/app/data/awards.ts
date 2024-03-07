export interface awardType{
    id : string,
    name : string,
    url : string, 
    path : string, 
    period : number[][],
    cover : string,
    rank : "1st" | "2nd" | "3rd",
    category : string,
    task : string[],
    team : {name : string, position : string, linkdin : string, phone : string, email : string, photo : string}[],
    photo : {path :string, name : string}[],
    media : {name : string, url : string}[],
    skill : {icon : string, name : string, url : string, desc:string}[] 
}

const awards : awardType[] = [
    {
        id : "sandstorm",
        name : "Solana Sandstorm",
        url : "https://www.sandstormhackathon.com/",
        path : "/awards/sandstorm",
        period : [[1,10, 2023], [1, 23, 2023]],
        cover : "",
        rank : "1st",
        category : "Human Readable",
        task : [
            "Perfecting the initial concept design involves tailoring it to precisely meet user needs while enhancing it’s accessibility for beginners. This process requires meticulous attention to user feedback and understanding their requirements, refining the design to ensure it is intuitive and easy for newcomers to grasp. By incorporating user-friendly features, simplifying complex elements and providing clear guidance, the concept design can be optimized to cater to a broader audience, empowering beginners to engage with it more effectively and fostering a positive user experience.",
            "Utilize tailwind css to ensure that Crossbow possess both flexibility and ease of use. With tailwind css, I can effortlessly design and style elements, including the Crossbow component, leveraging it’s utility-first approach to streamline the development process. By employing tailwind existence set of pre-defined utility classes, you can swiftly adjust styles, responsiveness and layouts, providing the desired flexibility while maintaining a lightweight structure. This enabled developers to quickly iterate and customize the appearance and functionality of the Crossbow component without the need for writing custom css, thereby enhancing productivity and ensuring a seamless user experience.",
            "Using next js instead of React js for Crossbow  can significantly improve it’s SEO by enabling server-side rendering and statically generated pages. These features generate HTML files for each page at build time, making it easier for google crawling bot to crawl and index the site quickly. Additionally , next js provide build-in tools for implementing SEO optimizations such as meta tags and canonical URLs, enhancing the site's visibility and ranking in search engine results.",
            "I transformed a JSON-based dataset into an interactive chart using Chart.js. It was a rewarding process, as I enjoyed manipulating the data and experimenting with different chart options. The transformation allowed me to visualize the information in a more engaging and user-friendly way, which I believe will be beneficial for understanding the data and making informed decisions. Overall, it was a satisfying experience to see the data come to life in the form of an interactive chart."
        ],
        team : [
            {
                name : "Wira Mahatvavirya",
                position : "Frontend Developer",
                linkdin : "https://www.linkedin.com/in/wiramv/",
                phone : "+62 8515-6600-229",
                email : "wiramv@gmail.com",
                photo : ""
            }
        ],
        photo : [
            {
                path : "",
                name : ""
            }
        ],
        media : [
            {
                name : "Superteam",
                url : " https://blog.superteam.fun/p/inside-solana-sandstorm"
            },
            {
                name : "Mesari",
                url : "https://messari.io/report/solana-analyzing-downtimes-statistics-and-ecosystem-development",
            },
            {
                name : "Threadreader",
                url : "https://threadreaderapp.com/thread/1621786471178072066.html"
            }
        ],
        skill : [
            {
                icon : "",
                name : "Next Js",
                url : "",
                desc : "A react framework for building server-side rendering and statically generated web applications."
            }
        ]
    }
]