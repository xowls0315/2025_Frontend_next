import Container from "../common/layout/Container";

const CoffeeMenu = () => {
  const coffeeData = [
    {
      id: 1,
      title: "Black Coffee",
      price: 1.5,
      image:
        "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Caramel Latte",
      price: 2,
      image:
        "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Machiatto",
      price: 2.1,
      image:
        "https://images.pexels.com/photos/5097056/pexels-photo-5097056.jpeg",
    },
    {
      id: 7,
      title: "Mocha",
      price: 2.5,
      image:
        "https://images.pexels.com/photos/15021332/pexels-photo-15021332/free-photo-of-black-coffee-in-cup-in-cozy-decor.jpeg",
    },
    {
      id: 9,
      title: "Chai Latte",
      price: 3,
      image:
        "https://www.teaheritage.fr/cdn/shop/articles/fbfd23eb1812c26fe623eebd7b4a5249.jpg?v=1674638932",
    },
    {
      id: 10,
      title: "Matcha Latte",
      price: 5,
      image:
        "https://images.pexels.com/photos/28704749/pexels-photo-28704749/free-photo-of-cozy-matcha-latte-with-autumn-decor-on-rustic-table.jpeg",
    },
    {
      id: 5,
      title: "Espresso",
      price: 1.2,
      image:
        "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 11,
      title: "Hot Chocolate",
      price: 1.3,
      image:
        "https://images.pexels.com/photos/6119123/pexels-photo-6119123.jpeg",
    },
    {
      id: 2,
      title: "Latte",
      price: 1.3,
      image: "https://i.imgur.com/L3r6o58.jpeg",
    },
    {
      id: 4,
      title: "Cappuccino",
      price: 2,
      image:
        "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Container className="py-10 px-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {coffeeData.map((item) => (
          <div
            key={item.id}
            className="border rounded overflow-hidden shadow hover:shadow-lg transition text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CoffeeMenu;
