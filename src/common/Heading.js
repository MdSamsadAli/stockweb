const Heading = ({ subtitle, title, description }) => {
  return (
    <>
      <h4 className="text-primary">{title}</h4>
      <h1 className="display-5 mb-4">{subtitle}</h1>
      <p className="mb-4">{description}</p>
    </>
  );
};

export default Heading;
