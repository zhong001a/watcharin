const checkDevice =  (device, price) => {
    let reduce = 0;
    if (device.includes("มีรอยนิดหน่อย")) {
        reduce = price * 0.1;
    } else if (device.includes("มีรอยมาก")) {
        reduce = price * 0.2;
    } else if (device.includes("มีรอยตก")) {
        reduce = price * 0.3;
    }
    return reduce;
};

const checkScreen = (screen, price) => {
    let reduce = 0;
    if (screen.includes("มีรอยบางๆ")) {
        reduce = price * 0.1;
    } else if (screen.includes("มีรอยสะดุด")) {
        reduce = price * 0.2;
    } else if (screen.includes("มีรอยแตกชำรุด")) {
        reduce = price * 0.5;
    }
    return reduce;
};

const checkDisplay = (display, price) => {
    let reduce = 0;
    if (display.includes("จุด Bright / ฝุ่นในจอ")) {
        reduce = price * 0.1;
    } else if (display.includes("จุด Dead / จุดสี")) {
        reduce = price * 0.2;
    } else if (display.includes("แสดงผลไม่ได้")) {
        reduce = price * 0.5;
    }
    return reduce;
};

const  CalPrice = (state, phonePrice) => {
    let sell_price = 0;
    let price = phonePrice;

    if (state.model.includes("LL") || state.model.includes("OTHER")) {
        price = phonePrice * 0.5;
        if (state.problems.length) {
            return 0;
        }
    }
    const device =  checkDevice(state.device, price);
    const screen =  checkScreen(state.screen, price);
    const display =  checkDisplay(state.display, price);

    
    sell_price = price - (device + screen + display)
    if (state.problems.length === 1) {
  
        sell_price = sell_price - 2000
    }
    else if (state.problems.length === 2) {
 
        sell_price = sell_price - 4000
    }
    else if (state.problems.length === 3){
        sell_price = 0
    }
    



    return sell_price;
};

const EditOffer = (state, data) => {
    const dataCapacity = data.capacities?.find((p) => p.size === state.capacity);
    const sellPrice = CalPrice(state, dataCapacity?.second_price);

    const offerData = {
        ...state,
        name: data.name,
        brand: data.brand,
        sell_price: sellPrice,
        seller: "watcharin",
        phone_no: "0621683645",
    };

    return offerData;
};

export const OfferDetail = (data,state) => {

    let offerData;
    if(data&&state){
        offerData = EditOffer(state, data);
    }

    return offerData;
};
