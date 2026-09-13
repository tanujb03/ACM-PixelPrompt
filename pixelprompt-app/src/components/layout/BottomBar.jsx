import { Link } from "react-router-dom";

export default function BottomBar() {
  return (
    <div className="bottom-bar hidden md:flex">
      <Link to="/" viewTransition className="bottom-bar-section">
        <span className="bottom-bar-dot" />
        <span>
          Open: <strong>Menu</strong>
        </span>
      </Link>

      <Link
        to="/contact"
        viewTransition
        className="bottom-bar-cta"
      >
        join the chapter
      </Link>

      <Link to="/events" viewTransition className="bottom-bar-section">
        <span>
          View: <strong>Events</strong>
        </span>
        <span className="bottom-bar-dot" />
      </Link>
    </div>
  );
}
