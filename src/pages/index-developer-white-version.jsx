import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-01";
import Footer from "@layout/footer/layout-02";
import HeroArea from "@containers/hero/layout-05";
import ExperienceArea from "@containers/experience/layout-02";
import EducationArea from "@containers/education/layout-02";
import PortfolioArea from "@containers/portfolio/layout-04";

const IndexDeveloperPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout pageTitle="Home Developer" className="white-version">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="main-page-wrapper">
                <HeroArea data={content["hero-section"]} />
                <ExperienceArea data={content["experience-section"]} />
                <EducationArea data={content["education-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
            </main>
            <Footer
                data={{
                    ...data.footer,
                    socials: data.site.siteMetadata.socials,
                }}
            />
        </Layout>
    );
};

export const query = graphql`
    query DeveloperWhitePageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-1-white" }) {
            ...Header01
        }
        navigation: general(section: { eq: "menu-3" }) {
            menu {
                ...Menu01
            }
        }
        footer: general(section: { eq: "footer-2-white" }) {
            ...Footer02
        }
        homePage(title: { eq: "developer-home" }) {
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

IndexDeveloperPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
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

export default IndexDeveloperPage;
