import React from "react";
import { useQuery, gql } from "@apollo/client";

import Loading from "../components/Loading";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Map from "../components/Map";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";
import Downloads from "../components/Downloads";
import MultiYards from "../components/MultiYards";

const Home = () => {
  const HOME_QUERY = gql`
    query GetLocations {
      pageBy(uri: "home") {
        id
        homePage {
          fieldGroupName

          skillSet {
            skillSetLogos {
              skillLogo {
                altText
                sourceUrl(size: LARGE)
              }
              skillName
            }
            skillSetTitle
          }

          previousProjects {
            backgroundImage {
              altText
              sourceUrl(size: LARGE)
            }
            websiteLink
            websiteName
            year
            workDone
          }

          music {
            youtubeMix
          }

          bio {
            about
            images {
              bioImages {
                altText
                sourceUrl(size: LARGE)
              }
            }
            location
            name
          }
        }
        slug
      }
    }
  `;
  const { loading, error, data } = useQuery(HOME_QUERY);
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      <Loading loading={loading} />
      <Navigation />
      <Hero trigger={loading} />
      <Intro />
      <MultiYards />
      <Map />
      <Downloads />
      <Contact />
    </div>
  );
};

export default Home;
