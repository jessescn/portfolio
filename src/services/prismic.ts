import { RichText } from "prismic-dom";
import Prismic from "@prismicio/client";
import { formatLocaleDate } from "../utils/format";
import { Job } from "../models/Job";

export function getPrismicClient() {
  const prismic = Prismic.client(process.env.NEXT_PUBLIC_PRISMIC_URL);

  return prismic;
}

export const getjobs = async () => {
  const prismic = getPrismicClient();
  let jobs: Job[] = [];

  try {
    const response = await prismic.query(
      Prismic.Predicates.at("document.type", "jobs"),
      { orderings: "[my.jobs.end]", pageSize: 20 }
    );

    jobs = response.results.map((job) => {
      const { uid, data } = job;
      return {
        slug: uid,
        role: RichText.asText(data.role),
        at: RichText.asText(data.at),
        startDate: formatLocaleDate(data.start),
        endDate: data.end ? formatLocaleDate(data.end) : null,
        summary: RichText.asText(data.summary),
        experiences: data.experiences.map((exp: { text: string }) => exp.text),
      };
    });
  } catch (e) {
    console.log("prismic jobs request error");
  }

  return jobs;
};
