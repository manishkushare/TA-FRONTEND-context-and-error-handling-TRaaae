import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ErrorBoundary1 from "./ErrorBoundaries1";
// import { ErrorBoundary as ErrorBoudary2 } from "./ErrorBoundary2";
// import { ErrorBoundary as ErrorBoundary3 } from "./ErrorBoundary3";
import ErrorBoundary2 from "./ErrorBoundary2";
import ErrorBoundary3 from "./ErrorBoundary3";
function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary1>
          <SectionOne />
        </ErrorBoundary1>
        <ErrorBoundary2>
          <SectionTwo />
        </ErrorBoundary2>
        <ErrorBoundary3>
          <Location />
        </ErrorBoundary3>
      </div>
    </section>
  );
}

export default Main;
