#include <iostream>

class Appliance {
public:
    virtual void turnOn() = 0; 
    virtual ~Appliance() {} 
};
class WashingMachine : public Appliance {
public:
    void turnOn() override {
        std::cout << "Washing machine is turning on..." << std::endl;
        std::cout << "Filling water..." << std::endl;
        std::cout << "Starting wash cycle..." << std::endl;
    }
};

class Refrigerator : public Appliance {
public:
    void turnOn() override {
        std::cout << "Refrigerator is turning on..." << std::endl;
        std::cout << "Cooling system activated..." << std::endl;
        std::cout << "Temperature set to 40°F..." << std::endl;
    }
};
int main() {
    WashingMachine washingMachine;
    Refrigerator refrigerator;

    washingMachine.turnOn();
    std::cout << std::endl;
    refrigerator.turnOn();

    return 0;
}