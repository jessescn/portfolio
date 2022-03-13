import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { PageContainer } from "../../components/design/PageContainer";
import { Title } from "../../components/design/Title";
import { getjobs } from "../../services/prismic";
import { Experiences } from "../../styles/resume/styles";
import ResumeItem from "../../components/Resume/Item";
import { Job } from "../../models/Job";

interface ResumeProps {
  jobs: Job[];
  setShowMenu: (show: boolean) => void;
}

export default function Resume({ jobs, setShowMenu }: ResumeProps) {
  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <PageContainer>
      <Head>
        <title>Resume | Jessé Souza</title>
      </Head>
      <Title fontSize={2.2}>Until Now</Title>
      {jobs.length ? (
        <Experiences data-testid="job-container">
          {jobs.map((job) => (
            <ResumeItem key={job.slug} job={job} />
          ))}
          <a href="/files/CV - Jessé Souza.pdf" download>
            Download CV
          </a>
        </Experiences>
      ) : (
        <h2>Something go wrong</h2>
      )}
    </PageContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const jobs: Job[] = await getjobs();

  return {
    props: {
      jobs,
    },
    revalidate: 60, // 1 minute
  };
};
