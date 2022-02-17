import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "../../layouts/header/layout-01";
import Footer from "../../layouts/footer/layout-01";
import HeroArea from "../../containers/hero/layout-cs";
import ServicesArea from "../../containers/service/layout-cs";
import logoImage from "../../data/images/logo/logo.png";
import data from "../../data/homepages/case-study-kaus.json";
import CaseStudySection from "../../layouts/CaseStudy/CaseStudiesSection";
import kausIntroImage from "../../data/images/portfolio/kaus-thumbnail.png";

const CaseStudyKaus = () => {
    const content = normalizedData(data?.content || []);
    console.log(content);
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
                    section={{
                        title: "Kaus Insurance Co.",
                        subtitle: "The Brief & the Problem",
                    }}
                    bodyComponent={
                        <>
                            <p className="csdescription">
                                Kaus has been in the health insurance business
                                for over 30 years. To keep pace with competitors
                                and better provide for their customers, Kaus
                                wanted to rebrand and bring their services
                                online.
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
                                    Pick a fresh, friendly palette that draws
                                    the eye
                                </li>
                                <li>
                                    Create a modern logo that conveys Kaus’
                                    values
                                </li>
                                <li>
                                    Design a clear and accessible online portal
                                    that anyone can use
                                </li>
                            </ul>
                        </>
                    }
                    images={{
                        src: kausIntroImage,
                        alt: "Kaus Insurance Co. branding",
                    }}
                />
                <ServicesArea data={content["service-section"]} />
                <div className="section-separator">
                    <CaseStudySection
                        id="research"
                        section={{
                            title: "Research",
                            subtitle: "Studying Competition & Potential Users",
                        }}
                        bodyComponent={
                            <>
                                <p className="csdescription">
                                    To determine how users shop for insurance
                                    online, the following goals were set:
                                </p>
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
                                <p className="csdescription">
                                    In order to define what top Insurance
                                    companies have in common as well as what
                                    made them stand out, an analysis of five of
                                    these companies was conducted. After
                                    analyzing these companies, user archetypes
                                    were created.
                                </p>
                            </>
                        }
                        images={{
                            src: kausIntroImage,
                            alt: "Kaus Insurance Co. branding",
                        }}
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
                            <>
                                <p className="csdescription">
                                    Before any prototyping could be done, I
                                    created task flows and a site navigation
                                    diagram to determine the different paths
                                    users may take.
                                </p>
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
                            </>
                        }
                        images={{
                            src: kausIntroImage,
                            alt: "Kaus Insurance Co. branding",
                        }}
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
                            <>
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
                                <p className="csdescription">
                                    From these tests, users had a positive
                                    experience and enjoyed the clean,
                                    easy-to-use site. However, the design was
                                    not without flaws as only about half of the
                                    users were able to understand the plan
                                    comparison feature at a glance.
                                </p>
                                <p className="csdescription">
                                    With feedback in hand, I created an affinity
                                    map and priority matrix to better see
                                    potential improvements to the site’s design.
                                    Then, I added the highest priority, most
                                    impactful improvements to the prototype.
                                </p>
                            </>
                        }
                        images={{
                            src: kausIntroImage,
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
                            <>
                                <p className="csdescription">
                                    Flaws aside, the positive feedback
                                    highlighted the fact that Kaus’ goals for
                                    their new storefront would be met by the new
                                    design. However, I strongly believe that
                                    having a subject matter expert involved in
                                    the process would help elevate the design to
                                    the next level.
                                </p>
                                <p className="csdescription">
                                    Modern, uncluttered, and easy to use, a
                                    marketplace that anyone can navigate could
                                    change expectations for other health
                                    insurance marketplaces in the future.
                                </p>
                            </>
                        }
                        images={{
                            src: kausIntroImage,
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
