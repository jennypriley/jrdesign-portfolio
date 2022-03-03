module.exports = {
    siteMetadata: {
        siteUrl: "https://jennyriley.design",
        title: "Design Portfolio",
        description: "I use visual design to create unique brands.",
        author: "Jenny Riley",
        siteLanguage: "en",
        image: "meta-image.png",
        titleTemplate: "JRdesign",
        getform_url:
            "https://getform.io/f/968dd638-15fd-4b91-8217-139867d7727a",
        socials: [
            {
                id: 1,
                title: "linkedin",
                path: "https://www.linkedin.com/in/jril/",
                icon: "Linkedin",
            },
            // {
            //     id: 2,
            //     title: "dribbble",
            //     path: "https://dribbble.com/jennyrileydesign",
            //     icon: "Dribbble",
            // },
        ],
        contact: {
            phone: "01234567890",
            email: "admin@example.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Inbio",
                short_name: "inbio",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
