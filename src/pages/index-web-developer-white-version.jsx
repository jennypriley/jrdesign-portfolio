import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Header from "@layout/header/layout-02";
import Footer from "@layout/footer/layout-01";
import HeroArea from "@containers/hero/layout-06";
import ServiceArea from "@containers/service/layout-04";
import PortfolioArea from "@containers/portfolio/layout-01";
import ContactArea from "@containers/contact/layout-01";

const IndexWebDeveloperPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout pageTitle="Web Developer" className="white-version">
            <Header
                data={{
                    ...data.header,
                    ...data.navigation,
                    socials: data.site.siteMetadata.socials,
                }}
            />
            <main className="page-wrapper-two">
                <HeroArea data={content["hero-section"]} />
                <ServiceArea data={content["service-section"]} />
                <PortfolioArea data={content["portfolio-section"]} />
                <ContactArea
                    data={{
                        ...content["contact-section"],
                        socials: data.site.siteMetadata.socials,
                        phone: data.site.siteMetadata?.contact?.phone,
                        email: data.site.siteMetadata?.contact?.email,
                        getform_url: data.site.siteMetadata?.getform_url,
                    }}
                />
                <Footer
                    className="section-separator"
                    data={{ ...data.footer }}
                />
            </main>
        </Layout>
    );
};

export const query = graphql`
    query WebDeveloperWhitePageQuery {
        site {
            ...Site
        }
        header: general(section: { eq: "header-6-white" }) {
            ...Header02
        }
        navigation: general(section: { eq: "menu-2" }) {
            menu {
                ...Menu02
            }
        }
        footer: general(section: { eq: "footer-3-white" }) {
            ...Footer01
        }
        homePage(title: { eq: "web-developer-home-white" }) {
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

IndexWebDeveloperPage.propTypes = {
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

export default IndexWebDeveloperPage;
