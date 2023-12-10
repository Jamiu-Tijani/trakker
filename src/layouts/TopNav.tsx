import "../Styles/dashboard.css";

interface TopProps {
  title: string;
}

const TopNav = ({ title }: TopProps) => {
  return (
    <div className="top">
      <h2>{title}</h2>
      <div></div>
    </div>
  );
};

export default TopNav;
