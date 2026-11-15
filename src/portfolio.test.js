import {
  greeting,
  educationInfo,
  workExperiences,
  bigProjects,
  openSource,
  socialMediaLinks,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails
} from "./portfolio";

it("presents Divya's resume content rather than the template identity", () => {
  expect(greeting.username).toBe("Divya");
  expect(workExperiences.experience.map(job => job.company)).toEqual([
    "Dataflake | Freddie Mac",
    "Accenture",
    "Cognizant"
  ]);
  expect(educationInfo.schools.map(school => school.schoolName)).toEqual([
    "University of Cincinnati",
    "Anurag Group of Institutions"
  ]);
  expect(bigProjects.projects).toHaveLength(3);
  expect(
    JSON.stringify({greeting, educationInfo, workExperiences, bigProjects})
  ).not.toMatch(/Saad|Pasta|Lorem ipsum|Harvard|Stanford/);
});

it("does not display unverified accounts or template-only publications", () => {
  expect(socialMediaLinks.github).toBe("");
  expect(socialMediaLinks.linkedin).toBe(
    "https://www.linkedin.com/in/divya-reddy-s/"
  );
  expect(socialMediaLinks.gmail).toBe("divyasheelam.d@gmail.com");
  [
    openSource,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    twitterDetails
  ].forEach(section => {
    expect(section.display).toBe(false);
  });
});
