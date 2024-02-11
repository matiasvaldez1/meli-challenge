import { mockDistributionControlCenterCards } from "@/lib/mock";
import { useState, useEffect } from "react";

const useDistributionControlCenterCards = () => {
  const [cards, setCards] = useState<
    typeof mockDistributionControlCenterCards | []
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setTimeout(() => {
          const response =
            mockDistributionControlCenterCards; /* await apiCall() */
          setCards(response);
          setLoading(false);
        }, 1000);
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        setError(message);
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return { cards, loading, error };
};

export default useDistributionControlCenterCards;
