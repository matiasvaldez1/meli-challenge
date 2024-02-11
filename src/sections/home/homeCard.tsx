import Title from "@/components/ui/title";
import { TDistributionControlCard } from "@/types";
import { useNavigate } from "react-router-dom";

const DistributionControlCard = ({
  card,
}: {
  card: TDistributionControlCard;
}) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    if (!card.redirectPath) return;
    navigate(card.redirectPath);
  };
  return (
    <div
      onClick={handleRedirect}
      className="hover:cursor-pointer group flex flex-col p-4 bg-brand-bg rounded-xl min-w-[270px] max-w-[280px] gap-6 phone:mx-auto"
    >
      <Title
        seo="h2"
        size="1.3rem"
        className="font-semibold"
        text={card.title}
      />
      <img className="w-[150px] mx-auto" src={card.iconPath} />
      <Title seo="h4" size="11" text={card.description} className="group-hover:text-brand-primary" />
    </div>
  );
};

export default DistributionControlCard;
