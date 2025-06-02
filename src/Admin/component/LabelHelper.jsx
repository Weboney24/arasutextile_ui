export const LabelHelper = ({ title, white = false }) => {
  return <h1 className={`capitalize tracking-wider !font-primary ${!white ? "!text-primary" : "!text-primary"}  !font-medium`}>{title}</h1>;
};
