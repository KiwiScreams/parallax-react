import "./Panel.css";
const Panel = () => {
  return (
    <>
      <div className="panel-container flex">
        <div className="panel">
          <div className="panel-content">
            <h2>Join the Fear:</h2>
            <p>
              Are you ready to confront your fears and embark on a journey into
              darkness? Sign up now and become part of an exclusive group of
              testers who will help us shape the future of horror gaming. Dare
              to test our new horror game—it's an experience you won't soon
              forget.
            </p>
          </div>
        </div>
        <div className="panel rotate">
          <div className="panel-content">
            <h2>Stay Updated:</h2>
            <p>
              Follow us on social media and subscribe to our newsletter for the
              latest updates on the game's development, release dates, and more
              spine-chilling announcements. Don't miss out on this opportunity
              to be part of the terror—join us in our quest to redefine horror
              gaming!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Panel;
