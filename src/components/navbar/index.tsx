import Title from "@/components/ui/title";
import { PATH_NAMES } from "@/router/paths";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate(PATH_NAMES.home);
  };
  return (
    <div className="flex justify-between p-4 bg-brand-main">
      <img
        onClick={handleGoHome}
        src="/logo.png"
        className="object-contain hover:cursor-pointer"
      />
      <Title
        text="Centro de monitoreo - Centro de distribución - La Matanza"
        seo="h3"
        size="1"
      />
    </div>
  );
};

export default Navbar;
