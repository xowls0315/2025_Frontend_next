import Container from "../common/layout/Container";

const WineMenu = () => {
  const wineData = [
    {
      winery: "Maselva",
      wine: "Emporda 2012",
      rating: {
        average: "4.9",
        reviews: "88 ratings",
      },
      location: "Spain · Empordà",
      image:
        "https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg",
      id: 1,
    },
    {
      winery: "Ernesto Ruffo",
      wine: "Amarone della Valpolicella Riserva N.V.",
      rating: {
        average: "4.9",
        reviews: "75 ratings",
      },
      location: "Italy · Amarone della Valpolicella",
      image:
        "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
      id: 2,
    },
    {
      winery: "Cartuxa",
      wine: "Pêra-Manca Tinto 1990",
      rating: {
        average: "4.9",
        reviews: "72 ratings",
      },
      location: "Portugal · Alentejo",
      image:
        "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      id: 3,
    },
    {
      winery: "Schrader",
      wine: "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2015",
      rating: {
        average: "4.9",
        reviews: "72 ratings",
      },
      location: "United States · Oakville",
      image:
        "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      id: 4,
    },
    {
      winery: "Hundred Acre",
      wine: "Wraith Cabernet Sauvignon 2013",
      rating: {
        average: "4.9",
        reviews: "68 ratings",
      },
      location: "United States · Napa Valley",
      image:
        "https://images.vivino.com/thumbs/PBhGMcRNQ7aVnVNr7VgnWA_pb_x300.png",
      id: 5,
    },
    {
      winery: "Sine Qua Non",
      wine: "Ratsel Syrah N.V.",
      rating: {
        average: "4.9",
        reviews: "68 ratings",
      },
      location: "United States · California",
      image:
        "https://images.vivino.com/thumbs/ZzMKzqFqRO-6oI3ys3gGgQ_pb_x300.png",
      id: 6,
    },
    {
      winery: "Del Dotto",
      wine: "The Beast Cabernet Sauvignon 2012",
      rating: {
        average: "4.9",
        reviews: "60 ratings",
      },
      location: "United States · Rutherford",
      image:
        "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      id: 7,
    },
    {
      winery: "Darioush",
      wine: "Darius II Cabernet Sauvignon 2016",
      rating: {
        average: "4.9",
        reviews: "59 ratings",
      },
      location: "United States · Napa Valley",
      image:
        "https://images.vivino.com/thumbs/U19RXtSdRMmoAesl2CBygA_pb_x300.png",
      id: 8,
    },
    {
      winery: "Garbole",
      wine: "Hurlo 2009",
      rating: {
        average: "4.9",
        reviews: "55 ratings",
      },
      location: "Italy · Veneto",
      image:
        "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
      id: 9,
    },
    {
      winery: "Scarecrow",
      wine: "Cabernet Sauvignon 2016",
      rating: {
        average: "4.9",
        reviews: "54 ratings",
      },
      location: "United States · Rutherford",
      image:
        "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      id: 10,
    },
  ];

  return (
    <Container className="py-10 px-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {wineData.map((item) => (
          <div
            key={item.id}
            className="border rounded overflow-hidden shadow hover:shadow-lg transition text-center"
          >
            <img
              src={item.image}
              alt={item.wine}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.wine}</h3>
              <p className="text-sm text-gray-600">⭐{item.rating.reviews}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WineMenu;
