from models import Product, Phone, Laptop

def main():
    products = [
        Product("Basic Charger", "Anker", 19.99),
        Phone("iPhone 15", "Apple", 999.99, 128, True),
        Phone("Galaxy S24", "Samsung", 849.99, 256, True),
        Laptop("MacBook Air", "Apple", 1299.99, 16, 13.6),
        Laptop("XPS 15", "Dell", 1099.99, 32, 15.6),
    ]

    print("All Products:")
    for p in products:
        print(p)

    print("\nProduct Info (Polymorphism):")
    for p in products:
        print(p.info())

    print("\nDiscounts (10%):")
    for p in products:
        print(f"{p.name}: was ${p.price} → now ${p.discount(10)}")

    print("\nUnique Methods:")
    for p in products:
        if isinstance(p, Phone):
            print(p.call("+7 777 123 4567"))
        elif isinstance(p, Laptop):
            print(p.run_program("VS Code"))

    
    print("\nStock Status:")
    products[1].in_stock = False  
    for p in products:
        print(p.info())


if __name__ == "__main__":
    main()
