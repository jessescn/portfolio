import { mocked } from "ts-jest/utils";
import { render, screen } from "../../jest";
import { Job } from "../../models/Job";
import Resume, { getStaticProps } from "../../pages/resume";
import { getPrismicClient } from "../../services/prismic";

const fakeJobs: Job[] = [
  {
    slug: "fake-slug",
    role: "developer",
    at: "Company",
    startDate: "fake-start-date",
    endDate: "fake-end-date",
    summary: "a little about the job",
    experiences: [],
  },
];

const renderPage = (jobs = fakeJobs) => {
  render(<Resume jobs={jobs} setShowMenu={jest.fn()} />);
};

jest.mock("../../services/prismic");

describe("Resume Page", () => {
  it("should render component correctly", () => {
    renderPage();

    expect(screen.getByText("Until Now")).toBeInTheDocument();
  });

  it("should render job", () => {
    renderPage();

    expect(
      screen.getByText("fake-start-date - fake-end-date")
    ).toBeInTheDocument();
  });

  it("should render error message if no jobs received", () => {
    renderPage([]);

    expect(screen.getByText("Something go wrong")).toBeInTheDocument();
  });
});
