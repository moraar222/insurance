import { Icons } from "@/components/icons";

const cards = [
  {
    text: "Customer Targeting",
    subtext: "Identify high-value customers",
    icon: "target",
  },
  {
    text: "Customer Retention",
    subtext: "Predict retention rates",
    icon: "retention",
  },
  {
    text: "Customer LTV",
    subtext: "Estimate lifetime value",
    icon: "dollarSign",
  },
];

const FeatureCards = () => {
  return (
    <div className="container mx-auto py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Monitor Customer Lifetime Value with Ease</h1>
        <p className="text-lg text-gray-600">
          Track, predict, and optimize the lifetime value of your customers with advanced insights and real-time data
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition">
          Build My Office
        </button>
      </div>

      {/* Features Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">Why Choose CLV Monitoring?</h2>
        <p className="text-gray-500 mt-2">Enhance your strategies with cutting-edge insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const IconComponent = Icons[card.icon as keyof typeof Icons];

          return (
            <div key={index} className="text-center shadow-lg p-6 rounded-md">
              {IconComponent && <IconComponent className="text-black text-4xl mb-4 mx-auto" />}
              <h3 className="text-xl font-semibold mb-2">{card.text}</h3>
              <p className="text-gray-500">{card.subtext}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureCards;
