import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "@layout";
import Header from "../../layouts/header/layout-01";
import Footer from "../../layouts/footer/layout-01";
import ServicesArea from "../../containers/service/layout-cs";
import logoImage from "../../data/images/logo/logo.png";
import data from "../../data/homepages/case-study-kaus.json";
import CaseStudySection from "../../layouts/CaseStudy/CaseStudiesSection";
import { AlignCenter, ArrowLeft } from "react-feather";
import kausIntroImage from "../../data/images/portfolio/kaus-mac.png";
import kausUserPersonas from "../../data/images/portfolio/kaus-user-personas.png";
import kausFlow from "../../data/images/portfolio/kaus-flow.png";
import kausFamily from "../../data/images/portfolio/kaus-family.png";
import SubSectionHeading from "../../components/sub-section-heading";
import ServiceCard from "@components/service-card/layout-01";

const CaseStudyKaus = () => {
    const researchCards = [
        {
            id: "kaus-rmethod-1",
            title: "Competitor Analysis",
            description: "Comparing popular health insurance carriers",
            path: "!#",
            icon: "Search",
        },
        {
            id: "kaus-rmethod-2",
            title: "Survey",
            description: "Ask beneficiaries what they look for when shopping",
            path: "!#",
            icon: "Users",
        },
        {
            id: "kaus-rmethod-3",
            title: "User Testing",
            description:
                "Give users tasks to complete while observing their behavior",
            path: "!#",
            icon: "Monitor",
        },
    ];
    return (
        <Layout pageTitle="Kaus Case Study">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    logo: [{ src: logoImage }],
                }}
            />
            <main className="main-page-wrapper">
                <br />
                <br />
                <CaseStudySection
                    id="home"
                    backComponent={
                        <>
                            <a href="/" className="back-link">
                                <ArrowLeft /> Back to Homepage
                            </a>
                            <br />
                            <br />
                            <br />
                        </>
                    }
                    section={{
                        title: "Kaus Insurance Co.",
                        subtitle: "The Brief & the Problem",
                    }}
                    bodyComponent={
                        <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                            <div className="content">
                                <p>
                                    Kaus has been in the health insurance
                                    business for over 30 years. To keep pace
                                    with competitors and better provide for
                                    their customers, Kaus wanted to rebrand and
                                    bring their services online.
                                </p>
                                <br />
                                <p>
                                    Kaus strives to to keep their costs low and
                                    provide plan options for every customer.
                                    Because of this, they provide packages for
                                    people with similar situations. They don’t
                                    offer much in the way of customization or a
                                    la carte selections, but provide bundles.
                                </p>
                                <br />
                                <p>
                                    They also believe in providing a great
                                    experience to their customers, knowing how
                                    complex insurance can be. To achieve an
                                    intuitive and hassle-free experience, Kaus
                                    is willing to break industry standards and
                                    consider a unique approach to Information
                                    Architecture.
                                </p>
                                <br />
                                <p>
                                    Due to the complex nature of their products,
                                    Kaus’ main priority is to have an online
                                    storefront that’s easily browsable with the
                                    ability to filter by aspects of a plan that
                                    may be important from user to user.
                                </p>
                                <br />
                            </div>
                        </div>
                    }
                    images={{
                        src: kausIntroImage,
                        alt: "Kaus website on a laptop screen",
                    }}
                />
                <ServicesArea
                    data={{
                        items: [
                            {
                                id: "kaus-research-roles",
                                title: "Roles",
                                description: "UI/UX & Brand Designer",
                                path: "#!",
                                icon: "Briefcase",
                            },
                            {
                                id: "kaus-research-tools",
                                title: "Tools",
                                description: "Figma, Illustrator, Photoshop",
                                path: "#!",
                                icon: "Tool",
                            },
                            {
                                id: "kaus-research-duration",
                                title: "Duration",
                                description: "8 weeks",
                                path: "#!",
                                icon: "Clock",
                            },
                        ],
                    }}
                />
                <div className="section-separator">
                    <CaseStudySection
                        id="branding"
                        section={{
                            title: "Branding",
                            subtitle: "Visual Identity & Aesthetic",
                        }}
                        bodyComponent={
                            <div className="col-lg-cs order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <p>Kaus’ brand identity:</p>
                                <ul className="csdescription">
                                    <li>Trustworthy</li>
                                    <li>Modern and fresh</li>
                                    <li>Clean and clear</li>
                                </ul>
                                <br></br>
                                <br></br>
                                <SubSectionHeading>
                                    Logo Design
                                </SubSectionHeading>
                                <br />
                                <p>
                                    I began with ideas that resonated with
                                    health insurance as well as Kaus’ values,
                                    sketching some simple logos. From there, I
                                    decided that the imagery of a parent and
                                    child under a tree fit best and worked on
                                    vectoring it in Illustrator. During this
                                    process, I realized that the concept could
                                    be shaped into the letter “K.”
                                </p>
                                <br />
                                <img
                                    src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauslogos.png"
                                    alt="All logo types"
                                />
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>UI Kit</SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/v6RKIkxaEZgFMjEcNyvHQO/Kaus-UI-Kit?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kausuikit.png"
                                        alt="UI Kit"
                                    />
                                </a>
                                <br />
                                <br />
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="research"
                        section={{
                            title: "Research",
                            subtitle: "Studying Competition & Potential Users",
                        }}
                        bodyComponent={
                            <div className="order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <div
                                    styles={{
                                        marginBottom: "120px !important",
                                    }}
                                >
                                    <SubSectionHeading>
                                        Research Goals
                                    </SubSectionHeading>
                                    <br />
                                    <p>
                                        To determine how users shop for
                                        insurance online, the following goals
                                        were set:
                                    </p>
                                    <ul>
                                        <li>
                                            Determine what influences customer’s
                                            decisions on purchasing a plan sites
                                        </li>
                                        <li>
                                            Find what trends amongst popular
                                            online insurance
                                        </li>
                                        <li>
                                            Understand what features and
                                            information need to be prioritized
                                            over others
                                        </li>
                                    </ul>
                                    <br></br>
                                    <br></br>
                                    <SubSectionHeading className="col-lg-auto">
                                        Methodologies
                                    </SubSectionHeading>
                                </div>
                                <div className="row row--25 mt_md--10 mt_sm--10 cs-card-gap">
                                    {researchCards.map((item) => (
                                        <div
                                            key={item.id}
                                            data-aos="fade-up"
                                            data-aos-duration="500"
                                            data-aos-delay="100"
                                            data-aos-once="true"
                                            className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30"
                                        >
                                            <ServiceCard
                                                title={item.title}
                                                description={item.description}
                                                path={item.path}
                                                icon={item.icon}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="col-lg-cs">
                                    <SubSectionHeading>
                                        Competitor Analysis
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauscompetitors.png"
                                        alt="Competitor analysis"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        Survey
                                    </SubSectionHeading>
                                    <br />
                                    <p>
                                        To better understand how users approach
                                        shopping for insurance, 10 participants
                                        were surveyed who:
                                    </p>
                                    <ul>
                                        <li>
                                            Had any type of health insurance
                                        </li>
                                        <li>
                                            Were asked for their experiences
                                            shopping for insurance
                                        </li>
                                        <li>
                                            Were asked for their demographics
                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    <p>
                                        From surveying these participants, I
                                        noticed some trends in their responses.
                                        As a whole, respondents wanted good
                                        coverage and prescriptions at an
                                        affordable rate. However, parsing the
                                        exhaustive amount of insurance jargon
                                        while shopping makes it difficult for
                                        them to find the right plan. And, while
                                        some found coverage that they were very
                                        satisfied with, others found that their
                                        current coverage or customer support
                                        options were lacking.
                                    </p>
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        User Personas
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kaususer1.png"
                                        alt="Kaus persona Tamika"
                                    />
                                    <br />
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kaususer2.png"
                                        alt="Kaus persona Luis"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        Project Goals
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauspgoals.png"
                                        alt="Kaus project goals"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <SubSectionHeading>
                                        Priority Features
                                    </SubSectionHeading>
                                    <br />
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauspfeatures.png"
                                        alt="Feature priority list"
                                    />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="prototyping"
                        section={{
                            title: "Prototyping",
                            subtitle: "Mockups & Interactive Demo",
                        }}
                        bodyComponent={
                            <div className="col-lg-cs order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <p>
                                    Before any prototyping could be done, I took
                                    the steps necessary to determine the site’s
                                    architecture and flows that would be most
                                    intuitive to new users.
                                </p>
                                <br />
                                <SubSectionHeading>
                                    Card Sorting
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauscardsort.png"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauscardsort.png"
                                        alt="Category card sorting"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>Task Flow</SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/1VJJUCcjnO91GYCvsDT2nJ/Kaus-Task-Flow?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kaustaskflow.png"
                                        alt="Plan purchase task flow"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>Site Map</SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/xPy1slBWGPOWjXarBnjC0a/Kaus-Sitemap?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kaussitemap.png"
                                        alt="Site map"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    User Flow Diagram
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/OdcxMKTa34kck2a3eiZboC/Kaus-User-Flow?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kaususerflow.png"
                                        alt="User flow diagram"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Low Fidelity Mockups
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/skwX23LWiG4aoD6ZLEhNO2/Kaus-Responsive-Wireframes?node-id=33%3A2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauslowfid.png"
                                        alt="Low fidelity screens"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    High Fidelity Mockups
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/skwX23LWiG4aoD6ZLEhNO2/Kaus-Responsive-Wireframes?node-id=49%3A2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kaushighfid.png"
                                        alt="High fidelity screens"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    High Fidelity Prototype
                                </SubSectionHeading>
                                <br />
                                <p>
                                    This is the final prototype including
                                    changes made after the user test:
                                </p>
                                <br />
                                <iframe
                                    title="kaus-prototype"
                                    style={{
                                        border: "1px solid rgba(0, 0, 0, 0.1)",
                                    }}
                                    width="850"
                                    height="500"
                                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FskwX23LWiG4aoD6ZLEhNO2%2FKaus-Responsive-Wireframes%3Fnode-id%3D299%253A10790%26scaling%3Dscale-down%26page-id%3D299%253A2522%26starting-point-node-id%3D299%253A10790"
                                    allowFullScreen
                                />
                                <br />
                                <br />
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="user-testing"
                        section={{
                            title: "User Testing",
                            subtitle: "Site Testing & User Feedback",
                        }}
                        bodyComponent={
                            <div className="col-lg-cs order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <p>
                                    Everyone out of the five participants,
                                    excluding Participant 4, viewed the
                                    prototype, completed tasks, and gave their
                                    thoughts and opinions over Discord calls
                                    which were recorded via NVIDIA ShadowPlay
                                    for later review.
                                </p>
                                <p>
                                    Participant 4 shared her screen over
                                    Microsoft Teams, but was unable to view the
                                    Figma prototype correctly, likely due to her
                                    screen resolution or other software/hardware
                                    issues. To remedy this, I shared my screen
                                    with the prototype open while she directed
                                    me to interact with it the same way she
                                    would if it were on her screen. Because she
                                    did not want to be recorded for my
                                    note-taking, I wrote her statements,
                                    feedback, and task results on a sheet of
                                    paper instead.
                                </p>
                                <br />
                                <br />
                                <SubSectionHeading>
                                    User Test Goals
                                </SubSectionHeading>
                                <br />
                                <p>The goals of the user test were to:</p>
                                <ul>
                                    <li>
                                        Determine whether health insurance
                                        experts and novices alike could quickly
                                        understand the interface
                                    </li>
                                    <li>
                                        Gauge whether the experience of shopping
                                        with Kaus was easier than their past
                                        health insurance shopping experiences
                                    </li>
                                    <li>
                                        Hear feedback on the current flow and
                                        learn what features users would expect
                                        or enjoy seeing in future iterations
                                    </li>
                                </ul>
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Test Results
                                </SubSectionHeading>
                                <br />
                                <p>
                                    As a whole, users agreed that the interface
                                    was clean, easy to understand, and felt much
                                    less overwhelming than their previous
                                    experiences. However, some users felt that
                                    this ease of use could scare some of them
                                    away and doubt the legitimacy of the site.
                                </p>
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Affinity Map
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/dqJfr1XUrg401gOKZuC398/Kaus-User-Test-Affinity-Map?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kausaffinity.png"
                                        alt="Affinity map"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>
                                    Priority Matrix
                                </SubSectionHeading>
                                <br />
                                <a
                                    href="https://www.figma.com/file/fYlwjjFtUdxtCxVlZGbVL8/Kaus-User-Test-Priority-Matrix?node-id=0%3A1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="https://jrportfoliosite.s3.us-west-1.amazonaws.com/kauspmatrix.png"
                                        alt="Priority matrix"
                                    />
                                </a>
                                <br />
                                <br />
                                <br />
                                <br />
                                <SubSectionHeading>Iteration</SubSectionHeading>
                                <br />
                                <p>
                                    The biggest change made after the user test
                                    was revamping the flow of the plan
                                    comparison feature, since only 50% of users
                                    were able to seamlessly complete a plan
                                    comparison their first time. More visual
                                    feedback on adding a plan to the cart was
                                    also added with a cart column on the
                                    right-hand side since many users stated that
                                    they would not notice the numbered bubble on
                                    the cart, and would prefer to see an
                                    itemized list on the plan search screen.
                                </p>
                                <br />
                            </div>
                        }
                    />
                </div>
                <div className="section-separator">
                    <CaseStudySection
                        id="conclusion"
                        section={{
                            title: "Conclusion",
                            subtitle: "My Takeaway",
                        }}
                        bodyComponent={
                            <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                                <div className="content">
                                    <p>
                                        Flaws aside, the positive feedback
                                        highlighted the fact that Kaus’ goals
                                        for their new storefront would be met by
                                        the new design. However, I strongly
                                        believe that having a subject matter
                                        expert involved in the process would
                                        help elevate the design to the next
                                        level.
                                    </p>
                                    <p>
                                        Modern, uncluttered, and easy to use, a
                                        marketplace that anyone can navigate
                                        could change expectations for other
                                        health insurance marketplaces in the
                                        future.
                                    </p>
                                </div>
                            </div>
                        }
                        images={{
                            src: kausFamily,
                            alt: "Kaus Insurance Co. branding",
                        }}
                    />
                </div>
            </main>
            <Footer
                data={{ ...data.footer, logo: [{ src: logoImage }] }}
                className="section-separator"
            />
        </Layout>
    );
};

export const query = graphql`
    query KausPageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-1" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-1" }) {
            ...Footer01
        }
        homePage(title: { eq: "default-home" }) {
            content {
                ...Content01
            }
        }
        allArticle(limit: 3) {
            nodes {
                ...Article
            }
        }
    }
`;

CaseStudyKaus.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default CaseStudyKaus;
