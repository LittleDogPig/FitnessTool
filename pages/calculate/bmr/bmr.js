// pages/calculate/bmr/bmr.js
Page({
  data: {
    array: ['男', '女'],
    array2: ['不计算 x1', '几乎不动 x1.2', '1-3次运动 x1.375', '3-5次运动 x1.55', '6-7次运动 x1.725','专业运动 x1.9'],
    index: 0,
    index2:0,
    bmr: 0,
    bmrDTO: 0,
    weight: 0,
    age:0,
    // sex:0,
    height:0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  caclulate: function (e) {
    var bmr
    var weight = this.data.weight
    var age = this.data.age
    var height = this.data.height
    if(weight == 0 || age == 0 || height == 0){
      wx.showToast({
        title: "请填写完整信息",
        icon: 'info',
        duration: 2000
      })
      return false;
    }
    if(this.data.index == 0){
      bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age)}
      else {
        bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
      }
    this.setData({
      bmr: bmr.toFixed(0),
      bmrDTO: bmr.toFixed(0)
    })
    if(this.data.index2 == 0){
     
        var bmr = this.data.bmr
        var bmrDTO = bmr * 1
        this.setData({
          bmrDTO: bmrDTO.toFixed(0)
        })
    } else if (this.data.index2 == 1){
      var bmr = this.data.bmr
      var bmrDTO = bmr * 1.2
      this.setData({
        bmrDTO: bmrDTO.toFixed(0)
      })
    } else if (this.data.index2 == 2) {
      var bmr = this.data.bmr
      var bmrDTO = bmr * 1.375
      this.setData({
        bmrDTO: bmrDTO.toFixed(0)
      })
    } else if (this.data.index2 == 3) {
      var bmr = this.data.bmr
      var bmrDTO = bmr * 1.55
      this.setData({
        bmrDTO: bmrDTO.toFixed(0)
      })
    } else if (this.data.index2 == 4) {
      var bmr = this.data.bmr
      var bmrDTO = bmr * 1.725
      this.setData({
        bmrDTO: bmrDTO.toFixed(0)
      })
    } else if (this.data.index2 == 5) {
      var bmr = this.data.bmr
      var bmrDTO = bmr * 1.9
      this.setData({
        bmrDTO: bmrDTO.toFixed(0)
      })
    } 
     

  },
  weightInput: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  ageInput:function(e) {
    this.setData({
      age: e.detail.value
    })
  },
  heightInput: function (e) {
    this.setData({
      height: e.detail.value
    })
  },
  // radioChange: function (e) {
  //   this.setData({
  //     sex: e.detail.value
  //   })
  // },
  time1: function (e) {
    var bmr = this.data.bmr
    var bmrDTO = bmr * 1.2
    this.setData({
      bmrDTO: bmrDTO.toFixed(0)
    })
  },
  time2: function (e) {
    var bmr = this.data.bmr
    var bmrDTO = bmr * 1.375
    this.setData({
      bmrDTO : bmrDTO.toFixed(0)
    })
  },
  time3: function (e) {
    var bmr = this.data.bmr
    var bmrDTO = bmr * 1.55
    this.setData({
      bmrDTO: bmrDTO.toFixed(0)
    })
  },
  time4: function (e) {
    var bmr = this.data.bmr
    var bmrDTO = bmr * 1.725
    this.setData({
      bmrDTO: bmrDTO.toFixed(0)
    })
  },
  time5: function (e) {
    var bmr = this.data.bmr
    var bmrDTO = bmr * 1.9
    this.setData({
      bmrDTO: bmrDTO.toFixed(0)
    })
  },
})