export default {
  namespace: 'result',

  state: {
    msg:{
        "chart": {
            "unit": "元",
            "names": ["资产总计", "负债总计", "所有者权益", "其中归母公司所有者权益合法权益"],
            "year":[
              {"2017": [22000, 21000, 22000, 10000]},
              { "2016": [22000, 21000, 22000, 10000]},
              {"2015": [22000, 21000, 22000, 10000]}
            ],
        },
  }
  },

  effects: {
  },

  reducers: {

}
}