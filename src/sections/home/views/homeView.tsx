import DistributionControlCard from "../homeCard";
import useDistributionControlCenterCards from "../hooks/use-distribution-control-center-cards";
import LoadingScreen from "@/components/loading-screen";

const HomeView = () => {
  const { cards, loading } = useDistributionControlCenterCards();

  if (loading) return <LoadingScreen />;

  return (
    <div className="2xl:flex 2xl:flex-row 2xl:justify-evenly 2xl:w-10/12 2xl:mx-auto py-20 gap-8 mb-16 phone:grid xl:grid-cols-3 md:grid-cols-2 phone:grid-cols-1">
      {cards.map((card) => (
        <DistributionControlCard key={card.title} card={card} />
      ))}
    </div>
  );
};

export default HomeView;
