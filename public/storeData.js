const storeData ={
    logo: "/images/logo@2x.png",
    chains: [
        {
            name: "edgeware",
            isTowCurrencies: true,
            currencies : [
                {
                    id: 11,
                    name: "staking",
                    type: 1, 
                    icon: "/images/kton@2x.png"
                },
                {
                    id: 22,
                    name: "spending",
                    type: 2,
                    icon: "ksm@2x.png"
                }
            ]
        },
        {
            name: "kusama",
            isTowCurrencies: false,
            currencies : [
                {
                    id: 1,
                    name: "ring",
                    type: 3,
                    icon: "ksm@2x.png"
                }
            ]
        }
    ]
}
window.storeData =storeData;