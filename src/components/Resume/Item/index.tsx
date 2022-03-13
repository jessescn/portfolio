import { memo } from "react";
import { Job } from "../../../models/Job";
import { Experience } from "./styles";

type Props = {
  job: Job;
};

const ResumeItem = (props: Props) => {
  return (
    <Experience>
      <h2>{props.job.role}</h2>
      <span>at {props.job.at}</span>
      <time>
        {props.job.startDate} - {props.job.endDate ?? "Present"}
      </time>
      <p>{props.job.summary}</p>
      <ul>
        {props.job.experiences.map((xp) => (
          <li key={xp}>{xp}</li>
        ))}
      </ul>
    </Experience>
  );
};

export default memo(ResumeItem);
