import fetch from "jest-fetch-mock";
import { render, screen } from "../../jest";
import { Project } from "../../models/Project";
import Projects, { getStaticProps } from "../../pages/projects";

const fakeProjects: Project[] = [
  {
    id: 1,
    description: "testing fake project",
    name: "Jest React Guide",
    link: "fake-link",
    contributors: [],
    commits: [],
    languages: [
      { id: "javascript", value: 100 },
      { id: "node", value: 100 },
      { id: "python", value: 100 },
    ],
  },
];

beforeEach(() => {
  fetch.resetMocks();
});

const renderPage = (projects = fakeProjects) => {
  render(<Projects projects={projects} setShowMenu={jest.fn()} />);
};

describe("Projects Page", () => {
  it("should render correctly", () => {
    renderPage();

    expect(screen.getByText("What i've been doing")).toBeInTheDocument();
  });

  it("should render project card", () => {
    renderPage();

    expect(screen.getByText("Jest React Guide")).toBeInTheDocument();
  });

  it("should render error message when github fetch fails", () => {
    renderPage([]);

    expect(screen.getByText("No projects found")).toBeInTheDocument();
  });
});
