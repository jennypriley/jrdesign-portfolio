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
import { ArrowLeft } from "react-feather";
import kausIntroImage from "../../data/images/portfolio/kaus-mac.png";
import kausUserPersonas from "../../data/images/portfolio/kaus-user-personas.png";
import kausFlow from "../../data/images/portfolio/kaus-flow.png";
import kausUserTest from "../../data/images/portfolio/kaus-user-test.png";
import kausFamily from "../../data/images/portfolio/kaus-family.png";
import SubSectionHeading from "../../components/sub-section-heading";
import ServiceCard from "@components/service-card/layout-01";

const CaseStudyKaus = () => {
    const researchCards = [
        {
            id: "kaus-research-card-1",
            title: "Card1",
            description: "Card1",
            path: "#!",
            icon: "Tool",
        },
        {
            id: "kaus-research-card-2",
            title: "Card2",
            description: "Card2",
            path: "#!",
            icon: "Tool",
        },
        {
            id: "kaus-research-card-3",
            title: "Card3",
            description: "Card3",
            path: "#!",
            icon: "Tool",
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
                                <p className="csdescription">
                                    Kaus has been in the health insurance
                                    business for over 30 years. To keep pace
                                    with competitors and better provide for
                                    their customers, Kaus wanted to rebrand and
                                    bring their services online.
                                </p>
                                <p className="csdescription">
                                    Kaus’ brand identity:
                                </p>
                                <ul className="csdescription">
                                    <li>Trustworthy</li>
                                    <li>Modern and fresh</li>
                                    <li>Clean and clear</li>
                                </ul>
                                <br></br>
                                <br></br>
                                <p className="csdescription">
                                    To achieve Kaus’ goals of providing a better
                                    customer experience and representing their
                                    brand, the following goals were set:
                                </p>
                                <ul className="csdescription">
                                    <li>
                                        Pick a fresh, friendly palette that
                                        draws the eye
                                    </li>
                                    <li>
                                        Create a modern logo that conveys Kaus’
                                        values
                                    </li>
                                    <li>
                                        Design a clear and accessible online
                                        portal that anyone can use
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                    images={{
                        src: kausIntroImage,
                        alt: "Kaus Insurance Co. branding",
                    }}
                />
                <ServicesArea
                    data={{
                        items: [
                            {
                                id: "kaus-home-card-1",
                                title: "Card1",
                                description: "Card1",
                                path: "!#",
                                icon: "Tool",
                            },
                            {
                                id: "kaus-home-card-2",
                                title: "Card2",
                                description: "Card2",
                                path: "!#",
                                icon: "Tool",
                            },
                            {
                                id: "kaus-home-card-3",
                                title: "Card3",
                                description: "Card3",
                                path: "!#",
                                icon: "Tool",
                            },
                        ],
                    }}
                />
                <div className="section-separator">
                    <CaseStudySection
                        id="branding"
                        section={{
                            title: "Branding",
                            subtitle: "Visual Identity and Aethetic",
                        }}
                        bodyComponent={
                            <div className="col-lg-auto order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <SubSectionHeading>
                                    Brand Description
                                </SubSectionHeading>
                                <p className="csdescription">
                                    To determine how users shop for insurance
                                    online, the following goals were set:
                                </p>
                                <br></br>
                                <br></br>
                                <SubSectionHeading>
                                    Logo Design
                                </SubSectionHeading>
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
                                <SubSectionHeading>UI Kit</SubSectionHeading>
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
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
                            <div className="col-lg-auto order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <div
                                    styles={{
                                        marginBottom: "120px !important",
                                    }}
                                >
                                    <SubSectionHeading>
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
                                <SubSectionHeading>
                                    Competitor Analysis
                                </SubSectionHeading>
                                <p className="csdescription">
                                    To determine how users shop for insurance
                                    online, the following goals were set:
                                </p>
                                <SubSectionHeading>
                                    Research Goals
                                </SubSectionHeading>
                                <ul className="csdescription">
                                    <li>
                                        Determine what influences customer’s
                                        decisions on purchasing a plan sites
                                    </li>
                                    <li>
                                        Find what trends amongst popular online
                                        insurance
                                    </li>
                                    <li>
                                        Understand what features and information
                                        need to be prioritized over others
                                    </li>
                                </ul>
                                <br></br>
                                <br></br>
                                <SubSectionHeading>
                                    User Survey
                                </SubSectionHeading>
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
                                <SubSectionHeading>
                                    User Personas
                                </SubSectionHeading>
                                <img
                                    src={kausUserPersonas}
                                    alt="Kaus Insurance Co. branding"
                                />
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
                                <SubSectionHeading>
                                    Project Goals
                                </SubSectionHeading>
                                <img
                                    src={kausUserPersonas}
                                    alt="Kaus Insurance Co. branding"
                                />
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
                                <SubSectionHeading>
                                    Project Requirements
                                </SubSectionHeading>
                                <img
                                    src={kausUserPersonas}
                                    alt="Kaus Insurance Co. branding"
                                />
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
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
                            <div className="col-lg-auto order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <SubSectionHeading>
                                    Card Sorting
                                </SubSectionHeading>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
                                <SubSectionHeading>Task Flow</SubSectionHeading>
                                <img
                                    src={kausFlow}
                                    alt="Kaus Insurance Co. Task Flow"
                                />
                                <p className="csdescription">
                                    With requirements, branding, and site
                                    architecture in mind, I got to work on
                                    low-fidelity wireframes to focus on the
                                    general layout while adhering to a 12-column
                                    grid. Then, I moved on to high-fidelity
                                    mockups of each page before building a
                                    prototype of the main task flow of finding
                                    and purchasing a new plan.
                                </p>
                                <SubSectionHeading>Site Map</SubSectionHeading>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
                                <SubSectionHeading>
                                    User Flow Diagram
                                </SubSectionHeading>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
                                <SubSectionHeading>
                                    Low Fidelity Mockups
                                </SubSectionHeading>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
                                <SubSectionHeading>
                                    High Fidelity Mockups
                                </SubSectionHeading>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
                                <SubSectionHeading>
                                    High Fidelity Prototype
                                </SubSectionHeading>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
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
                            <div className="col-lg-auto order-lg-1 order-2 mt_md--50 mt_sm--50 mt_lg--30">
                                <SubSectionHeading>
                                    User Test Goals
                                </SubSectionHeading>
                                <p className="csdescription">
                                    To ensure that the site was friendly,
                                    intuitive, and provided a better insurance
                                    shopping experience than similar sites, I
                                    conducted a round of user tests. In each of
                                    these user tests, I asked participants to
                                    complete a series of tasks, rating how easy
                                    each task was to complete, and giving their
                                    honest thoughts on the layout and task flows
                                    throughout.
                                </p>
                                <SubSectionHeading>
                                    Methodologies
                                </SubSectionHeading>
                                <p className="csdescription">
                                    From these tests, users had a positive
                                    experience and enjoyed the clean,
                                    easy-to-use site. However, the design was
                                    not without flaws as only about half of the
                                    users were able to understand the plan
                                    comparison feature at a glance.
                                </p>
                                <SubSectionHeading>
                                    Test Results
                                </SubSectionHeading>
                                <p className="csdescription">
                                    With feedback in hand, I created an affinity
                                    map and priority matrix to better see
                                    potential improvements to the site’s design.
                                    Then, I added the highest priority, most
                                    impactful improvements to the prototype.
                                </p>
                                <SubSectionHeading>
                                    Affinity Map
                                </SubSectionHeading>
                                <p className="csdescription">
                                    With feedback in hand, I created an affinity
                                    map and priority matrix to better see
                                    potential improvements to the site’s design.
                                    Then, I added the highest priority, most
                                    impactful improvements to the prototype.
                                </p>
                                <SubSectionHeading>
                                    Priority Matrix
                                </SubSectionHeading>
                                <p className="csdescription">
                                    With feedback in hand, I created an affinity
                                    map and priority matrix to better see
                                    potential improvements to the site’s design.
                                    Then, I added the highest priority, most
                                    impactful improvements to the prototype.
                                </p>
                                <SubSectionHeading>Iteration</SubSectionHeading>
                                <p className="csdescription">
                                    With feedback in hand, I created an affinity
                                    map and priority matrix to better see
                                    potential improvements to the site’s design.
                                    Then, I added the highest priority, most
                                    impactful improvements to the prototype.
                                </p>
                            </div>
                        }
                        images={{
                            src: kausUserTest,
                            alt: "Kaus Insurance Co. branding",
                        }}
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
                                    <p className="csdescription">
                                        Flaws aside, the positive feedback
                                        highlighted the fact that Kaus’ goals
                                        for their new storefront would be met by
                                        the new design. However, I strongly
                                        believe that having a subject matter
                                        expert involved in the process would
                                        help elevate the design to the next
                                        level.
                                    </p>
                                    <p className="csdescription">
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
