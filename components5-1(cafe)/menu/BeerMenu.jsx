import Container from "../common/layout/Container";

const BeerMenu = () => {
  const beerData = [
    {
      price: "$16.99",
      name: "Guinness Extra Stout",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/h50/h90/11996630056990.png",
      id: 3,
    },
    {
      price: "$8.99",
      name: "Guinness Extra Stout",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/h35/he7/11996577726494.png",
      id: 4,
    },
    {
      price: "$15.49",
      name: "Sierra Nevada Pale Ale",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/h19/h43/11735160193054.png",
      id: 5,
    },
    {
      price: "$15.49",
      name: "Sierra Nevada Pale Ale",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/h0a/h17/11589987434526.png",
      id: 6,
    },
    {
      price: "$15.99",
      name: "Lagunitas IPA",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/hd2/hfd/11348869382174.png",
      id: 7,
    },
    {
      price: "$11.99",
      name: "Dogfish Head 120-Minute IPA",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/hf7/h2e/8814407614494.png",
      id: 8,
    },
    {
      price: "$15.49",
      name: "Sierra Nevada Torpedo Extra IPA",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/ha5/h01/8799883329566.png",
      id: 9,
    },
    {
      price: "$15.99",
      name: "Sierra Nevada Hazy Little Thing IPA",
      image:
        "https://www.totalwine.com/media/sys_master/cmsmedia/hff/h0e/8979036078110.png",
      id: 10,
    },
    {
      price: "$14.99",
      name: "New Holland Dragon's Milk",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/hf1/hef/11388243083294.png",
      id: 11,
    },
    {
      price: "$12.99",
      name: "New Belgium Oakspire Bourbon Barrel Ale",
      image:
        "https://www.totalwine.com/media/sys_master/twmmedia/h8b/h8f/11475320012830.png",
      id: 12,
    },
  ];

  return (
    <Container className="py-10 px-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {beerData.map((item) => (
          <div
            key={item.id}
            className="border rounded overflow-hidden shadow hover:shadow-lg transition text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BeerMenu;
