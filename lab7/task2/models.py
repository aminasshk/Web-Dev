class Product:
    def __init__(self, name, brand, price):
        self.name = name       
        self.brand = brand     
        self.price = price      
        self.in_stock = True    

    def discount(self, percent):
        discounted = self.price - (self.price * percent / 100)
        return round(discounted, 2)

    def info(self):
        status = "In stock" if self.in_stock else "Out of stock"
        return f"{self.brand} {self.name} — ${self.price} [{status}]"

    def __str__(self):
        return f"Product({self.brand}, {self.name}, ${self.price})"


class Phone(Product):
    def __init__(self, name, brand, price, storage_gb, has_5g):
        super().__init__(name, brand, price)  
        self.storage_gb = storage_gb          
        self.has_5g = has_5g                  

    def info(self):
        base = super().info()
        g = "5G" if self.has_5g else "4G"
        return f"{base} | {self.storage_gb}GB, {g}"

    def call(self, number):
        return f"{self.brand} {self.name} is calling {number}..."

    def __str__(self):
        return f"Phone({self.brand}, {self.name}, {self.storage_gb}GB)"



class Laptop(Product):
    def __init__(self, name, brand, price, ram_gb, screen_inch):
        super().__init__(name, brand, price)
        self.ram_gb = ram_gb              
        self.screen_inch = screen_inch    

    def info(self):
        base = super().info()
        return f"{base} | RAM: {self.ram_gb}GB, Screen: {self.screen_inch}\""

    def run_program(self, program_name):
        return f"{self.brand} {self.name} is running {program_name}..."

    def __str__(self):
        return f"Laptop({self.brand}, {self.name}, {self.ram_gb}GB RAM)"
