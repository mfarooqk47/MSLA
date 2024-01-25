/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "castle.jpg";

const imageAltText = "black castle image in mountains";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Act of kindness🎉",
    description:
      "My blog on Medium.com regarding the Act of kindness.",
    url: "https://medium.com/@muhammadfarooqk/act-of-kindness-375fc09d6f4c",
  },
  {
    title: "Photo Journal",
    description:
      "My Photo Journal while I was a fellow",
    url: "https://medium.com/@muhammadfarooqk/photo-journal-4f0ba83c1971",
  },
  {
    title: "My Resume",
    description:
      "Here is my resume that showcase the skills and past expreience that I gained in the previous years.",
    url: "https://drive.google.com/file/d/1fnDVY8d_aopAQQU_wdai9kMPEFrbAQlF/view?usp=drive_link",
  },
  {
    title: "Hope That Drives",
    description:
      "I wrote a short story on the importance of hope",
    url: "https://drive.google.com/file/d/1SNe7z6muxU07L2h_3JRdUopTLMIQzdu0/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
