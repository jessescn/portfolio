import { Subtitle } from "../design/Subtitle";
import { ContributorWrapper } from "./styles";

type Contributor = {
  username: string,
  avatar: string,
  link: string,
}

interface ContributorsProps {
  contributors: Contributor[]
}

const Contributors = ({ contributors }: ContributorsProps) => {
  
  return (
    <ContributorWrapper>
      <Subtitle>Contributors</Subtitle>
      <div>
        {
          contributors.map(({ avatar, link, username }) => (
            <a href={link} key={username} target="_blank">
              <img src={avatar} alt={`avatar ${username}`} />
            </a>
          ))
        }
      </div>
    </ContributorWrapper>
  )
}

export default Contributors;