var productModal = new Vue({
    el: '#product-box',
    data: {
      products: [],
    },
    methods: {
        navToInfo: function (e) {
            var id=$(e.currentTarget).attr("id");
            if(id!=undefined){
                window.location="productInfo.html?id="+id;
            }
            
        }
    }
  })

  var productZyModal=[
    { 
        type:"zy", img:[{url:"content/images/product/zy/1/zy-1.jpg"}],title:'小型化铠装式金属封闭开关设备',id:'zy-1',href:'productInfo.html?id=zy-1',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/1/info-1.jpg",info:''},
            {url:"content/images/product/zy/1/info-2.jpg",info:''},
            {url:"content/images/product/zy/1/info-3.jpg",info:''},
            {url:"content/images/product/zy/1/info-4.jpg",info:''},
            {url:"content/images/product/zy/1/info-5.jpg",info:''},
            {url:"content/images/product/zy/1/info-6.jpg",info:''},
            {url:"content/images/product/zy/1/info-7.jpg",info:''},
        ]
    },
    { 
        type:"zy", img:[{url:"content/images/product/zy/2/zy-2.jpg"}],title:'户内交流高压氟化硫环网开关设备',id:'zy-2',href:'productInfo.html?id=zy-2',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/2/info-1.jpg",info:''},
            {url:"content/images/product/zy/2/info-2.jpg",info:''},
            {url:"content/images/product/zy/2/info-3.jpg",info:''},
            {url:"content/images/product/zy/2/info-4.jpg",info:''},
            {url:"content/images/product/zy/2/info-5.jpg",info:''},
            {url:"content/images/product/zy/2/info-6.jpg",info:''},
            {url:"content/images/product/zy/2/info-7.jpg",info:''},
        ]
    },
    { 
        type:"zy", img:[{url:"content/images/product/zy/3/zy-3.jpg"}],title:'户内交流金属铠装中置式开关设备',id:'zy-3',href:'productInfo.html?id=zy-3',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/3/info-1.jpg",info:''},
            {url:"content/images/product/zy/3/info-2.jpg",info:''},
            {url:"content/images/product/zy/3/info-3.jpg",info:''},
            {url:"content/images/product/zy/3/info-4.jpg",info:''},
            {url:"content/images/product/zy/3/info-5.jpg",info:''},
            {url:"content/images/product/zy/3/info-6.jpg",info:''},
            {url:"content/images/product/zy/3/info-7.jpg",info:''},
            {url:"content/images/product/zy/3/info-8.jpg",info:''},
            {url:"content/images/product/zy/3/info-9.jpg",info:''},
            {url:"content/images/product/zy/3/info-10.jpg",info:''},
            {url:"content/images/product/zy/3/info-11.jpg",info:''},
            {url:"content/images/product/zy/3/info-12.jpg",info:''},
            {url:"content/images/product/zy/3/info-13.jpg",info:''},
            {url:"content/images/product/zy/3/info-14.jpg",info:''},
            {url:"content/images/product/zy/3/info-15.jpg",info:''},
            {url:"content/images/product/zy/3/info-16.jpg",info:''},
            {url:"content/images/product/zy/3/info-17.jpg",info:''},
            {url:"content/images/product/zy/3/info-18.jpg",info:''},
            {url:"content/images/product/zy/3/info-19.jpg",info:''},
        ]
    },
    { 
        type:"zy", img:[{url:"content/images/product/zy/4/zy-4.jpg"}],title:'铠装移开式金属封闭开关设备',id:'zy-4',href:'productInfo.html?id=zy-4',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/4/info-1.jpg",info:''},
            {url:"content/images/product/zy/4/info-2.jpg",info:''},
            {url:"content/images/product/zy/4/info-3.jpg",info:''},
            {url:"content/images/product/zy/4/info-4.jpg",info:''},
            {url:"content/images/product/zy/4/info-5.jpg",info:''},
            {url:"content/images/product/zy/4/info-6.jpg",info:''},
            {url:"content/images/product/zy/4/info-7.jpg",info:''},
            {url:"content/images/product/zy/4/info-8.jpg",info:''},
            {url:"content/images/product/zy/4/info-9.jpg",info:''},
            {url:"content/images/product/zy/4/info-10.jpg",info:''},
            {url:"content/images/product/zy/4/info-11.jpg",info:''},
            {url:"content/images/product/zy/4/info-12.jpg",info:''},
            {url:"content/images/product/zy/4/info-13.jpg",info:''},
            {url:"content/images/product/zy/4/info-14.jpg",info:''},
        ]
    },
    { 
        type:"zy", img:[{url:"content/images/product/zy/5/zy-5.jpg"}],title:'HXGN□-12ZFQ(R)箱型交流金属封闭环网开关设备',id:'zy-5',href:'productInfo.html?id=zy-5',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/5/info-1.jpg",info:''},
            {url:"content/images/product/zy/5/info-2.jpg",info:''},
            {url:"content/images/product/zy/5/info-3.jpg",info:''},
            {url:"content/images/product/zy/5/info-4.jpg",info:''},
            {url:"content/images/product/zy/5/info-5.jpg",info:''},
            {url:"content/images/product/zy/5/info-6.jpg",info:''},
        ]
    },
    { 
        type:"zy", img:[{url:"content/images/product/zy/6/zy-6.jpg"}],title:'GN2-12型箱型固定式交流金属铠装移开式高压开关柜',id:'zy-6',href:'productInfo.html?id=zy-6',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/6/info-1.jpg",info:''},
            {url:"content/images/product/zy/6/info-2.jpg",info:''},
            {url:"content/images/product/zy/6/info-3.jpg",info:''},
            {url:"content/images/product/zy/6/info-4.jpg",info:''},
            {url:"content/images/product/zy/6/info-5.jpg",info:''},
            {url:"content/images/product/zy/6/info-6.jpg",info:''},
            {url:"content/images/product/zy/6/info-7.jpg",info:''},
            {url:"content/images/product/zy/6/info-8.jpg",info:''},
            {url:"content/images/product/zy/6/info-9.jpg",info:''},
            {url:"content/images/product/zy/6/info-10.jpg",info:''},
            {url:"content/images/product/zy/6/info-11.jpg",info:''},
            {url:"content/images/product/zy/6/info-12.jpg",info:''},
            {url:"content/images/product/zy/6/info-13.jpg",info:''},
            {url:"content/images/product/zy/6/info-14.jpg",info:''},
            {url:"content/images/product/zy/6/info-15.jpg",info:''},
        ]
    },
    { 
        type:"zy", img:[{url:"content/images/product/zy/7/zy-7.jpg"}],title:'HXGN15A-12ZF(R)型箱式(固定)金属封闭环网开关设备',id:'zy-7',href:'productInfo.html?id=zy-7',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/zy/7/info-1.jpg",info:''},
            {url:"content/images/product/zy/7/info-1.jpg",info:''},
            {url:"content/images/product/zy/7/info-2.jpg",info:''},
            {url:"content/images/product/zy/7/info-3.jpg",info:''},
            {url:"content/images/product/zy/7/info-4.jpg",info:''},
            {url:"content/images/product/zy/7/info-5.jpg",info:''},
            {url:"content/images/product/zy/7/info-6.jpg",info:''},
            {url:"content/images/product/zy/7/info-7.jpg",info:''},
        ]
    },
        
  ];

  var productByModal=[
    { 
        type:"by", img:[{url:"content/images/product/by/1/by-1.jpg"}],title:'非晶合金变压器',id:'by-1',href:'productInfo.html?id=by-1',
        info:
        '非晶合金变压器适当成分的液体金属，以大约每秒摄氏一百万度的冷却速率，急速凝固所获得的合金，因其原子在结晶化之前即已凝固，结果使合金具有类似玻璃的非结晶原子结构及优点的软磁性质。 非晶合金变压器<br>' 
        +'产品特点<br>'
        +'1.超低损耗特性，省能源、用电效率高；<br>'
        +'2.非晶金属材料制造时使用较低能源以及其超低的损耗特性，可大幅节省电力消耗及减少电厂发电量，相对的减少CO₂ SO₂废气的排放，降低对环境污染及温室效应，免保养，无污染；<br>'
        +'3.运转温度低、绝缘老化慢、变压器使用寿命长；<br>'
        +'4.高超载能力，高机械强度；<br>'
        +'5.非晶铁心在通过较高频率磁通时，仍具有低铁损及低激磁电流的特性而不致产生铁心饱和的问题，故以非晶铁心制成的SCRBH15型非晶合金变压器具有较好的耐谐波能力；<br>'
        +'6.投资回收效益快。<br>'
        +'三、技术参数<br>'
        +'额定功率：50/60(KVA)<br>'
        +'效 率(η)：100～1000<br>'
        +'电 压 比：10000/400(V)<br>'
        +'外形结构：立式<br>'
        +'冷却方式：风冷式<br>'
        +'防潮方式：灌封式<br>'
        +'绕组数目：三绕组<br>'
        +'铁心结构：非晶合金<br>'
        +'冷却形式：干式铁心<br>'
        +'形状：R型电源<br>'
        +'相数：三相频率<br>'
        +'特性：低频<br>'
        +'型 号：SCRBH15-200/10<br>'
        +'应用范围：电力' ,
        imgInfo:{}
    },
    { 
        type:"by", img:[{url:"content/images/product/by/2/by-2.jpg"}],title:'SFSZ9-50000/110',id:'by-2',href:'productInfo.html?id=by-2',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/by/2/info-1.jpg",info:''},
        ]
    },
    { 
        type:"by", img:[{url:"content/images/product/by/3/by-3.jpg"}],title:'KS9',id:'by-3',href:'productInfo.html?id=by-3',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/by/3/info-1.jpg",info:''},
        ]
    },
    { 
        type:"by", img:[{url:"content/images/product/by/4/by-4.jpg"}],title:'S11-M-Z',id:'by-4',href:'productInfo.html?id=by-4',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/by/3/info-1.jpg",info:''},
        ]
    },
    { 
        type:"by", img:[{url:"content/images/product/by/5/by-5.jpg"}],title:'S9-M-Z',id:'by-5',href:'productInfo.html?id=by-5',
        info:'',
        imgInfo:[
            {url:"content/images/product/by/5/info-1.jpg",info:''},
        ]
    },
    { 
        type:"by", img:[{url:"content/images/product/by/6/by-6.jpg"}],title:'SFZ9-10000/35',id:'by-6',href:'productInfo.html?id=by-6',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/by/6/info-1.jpg",info:''},
        ]
    },

        
  ];

  var productDyModal=[
    { 
        type:"dy", img:[{url:"content/images/product/dy/1/dy-1.jpg"}],title:'JP综合配电箱',id:'dy-1',href:'productInfo.html?id=dy-1',
        info:'户外综合配电箱（JP柜）适用于广大农村配电变压器，额定频率交流50Hz，额定工作电压400V，额定电流630A及以下的配电系统中，户外柱上安装使用。作为电能分配、电能计量、电能信息采集与监控、测量(PDK)、无功补偿和保护之用的综合低压设备。（是我公司根据国家电网智能化建设的要求，在原JP柜基础上研制开发的智能化新产品，该产品不仅具有原JP柜适用于广大农村的产品特点，更具有了智能电网要求的电能信息采集与监控，电网负荷控制管理等功能，是城乡电网的更新换代产品）',imgInfo:{} 
    },
    { 
        type:"dy", img:[{url:"content/images/product/dy/2/dy-2.jpg"}],title:'MNS型低压抽出式开关柜',id:'dy-2',href:'productInfo.html?id=dy-2',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/dy/2/info-1.jpg",info:''},
            {url:"content/images/product/dy/2/info-2.jpg",info:''},
            {url:"content/images/product/dy/2/info-3.jpg",info:''},
            {url:"content/images/product/dy/2/info-4.jpg",info:''},
            {url:"content/images/product/dy/2/info-5.jpg",info:''},
            {url:"content/images/product/dy/2/info-6.jpg",info:''},
            {url:"content/images/product/dy/2/info-7.jpg",info:''},
            {url:"content/images/product/dy/2/info-8.jpg",info:''},
            {url:"content/images/product/dy/2/info-9.jpg",info:''},
            {url:"content/images/product/dy/2/info-10.jpg",info:''},
            {url:"content/images/product/dy/2/info-11.jpg",info:''},
            {url:"content/images/product/dy/2/info-12.jpg",info:''},
            {url:"content/images/product/dy/2/info-13.jpg",info:''},
            {url:"content/images/product/dy/2/info-14.jpg",info:''},
            {url:"content/images/product/dy/2/info-15.jpg",info:''},
            {url:"content/images/product/dy/2/info-16.jpg",info:''},
            {url:"content/images/product/dy/2/info-17.jpg",info:''},
        ]
    },
    { 
        type:"dy", img:[{url:"content/images/product/dy/3/dy-3.jpg"}],title:'GCS型低压抽出式开关柜',id:'dy-3',href:'productInfo.html?id=dy-3',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/dy/3/info-1.jpg",info:''},
            {url:"content/images/product/dy/3/info-2.jpg",info:''},
            {url:"content/images/product/dy/3/info-3.jpg",info:''},
            {url:"content/images/product/dy/3/info-4.jpg",info:''},
            {url:"content/images/product/dy/3/info-5.jpg",info:''},
            {url:"content/images/product/dy/3/info-6.jpg",info:''},
            {url:"content/images/product/dy/3/info-7.jpg",info:''},
            {url:"content/images/product/dy/3/info-8.jpg",info:''},
            {url:"content/images/product/dy/3/info-9.jpg",info:''},
            {url:"content/images/product/dy/3/info-10.jpg",info:''},
            {url:"content/images/product/dy/3/info-11.jpg",info:''},
            {url:"content/images/product/dy/3/info-12.jpg",info:''},
            {url:"content/images/product/dy/3/info-13.jpg",info:''},
            {url:"content/images/product/dy/3/info-14.jpg",info:''},
            {url:"content/images/product/dy/3/info-15.jpg",info:''},
            {url:"content/images/product/dy/3/info-16.jpg",info:''},
            {url:"content/images/product/dy/3/info-17.jpg",info:''},
        ]
    },
    { 
        type:"dy", img:[{url:"content/images/product/dy/4/dy-4.jpg"}],title:'GCK2000-Z型智能型交流低压成套设备',id:'dy-4',href:'productInfo.html?id=dy-4',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/dy/4/info-1.jpg",info:''},
            {url:"content/images/product/dy/4/info-2.jpg",info:''},
            {url:"content/images/product/dy/4/info-3.jpg",info:''},
            {url:"content/images/product/dy/4/info-4.jpg",info:''},
            {url:"content/images/product/dy/4/info-5.jpg",info:''},
            {url:"content/images/product/dy/4/info-6.jpg",info:''},
            {url:"content/images/product/dy/4/info-7.jpg",info:''},
            {url:"content/images/product/dy/4/info-8.jpg",info:''},
            {url:"content/images/product/dy/4/info-9.jpg",info:''},
            {url:"content/images/product/dy/4/info-10.jpg",info:''},
            {url:"content/images/product/dy/4/info-11.jpg",info:''},
            {url:"content/images/product/dy/4/info-12.jpg",info:''},
        ]
    },
    { 
        type:"dy", img:[{url:"content/images/product/dy/5/dy-5.jpg"}],title:'GCK型低压抽出开关柜',id:'dy-5',href:'productInfo.html?id=dy-5',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/dy/5/info-1.jpg",info:''},
            {url:"content/images/product/dy/5/info-2.jpg",info:''},
            {url:"content/images/product/dy/5/info-3.jpg",info:''},
            {url:"content/images/product/dy/5/info-4.jpg",info:''},
            {url:"content/images/product/dy/5/info-5.jpg",info:''},
            {url:"content/images/product/dy/5/info-6.jpg",info:''},
            {url:"content/images/product/dy/5/info-7.jpg",info:''},
            {url:"content/images/product/dy/5/info-8.jpg",info:''},
            {url:"content/images/product/dy/5/info-9.jpg",info:''},
            {url:"content/images/product/dy/5/info-10.jpg",info:''},
            {url:"content/images/product/dy/5/info-11.jpg",info:''},
            {url:"content/images/product/dy/5/info-12.jpg",info:''},
            {url:"content/images/product/dy/5/info-13.jpg",info:''},
            {url:"content/images/product/dy/5/info-14.jpg",info:''},
        ]
    },
    { 
        type:"dy", img:[{url:"content/images/product/dy/6/dy-6.jpg"}],title:'GGD型交流低压配电柜',id:'dy-6',href:'productInfo.html?id=dy-6',
        info:'',
        imgInfo:[
            {url:"content/images/product/dy/6/info-1.jpg",info:''},
            {url:"content/images/product/dy/6/info-2.jpg",info:''},
            {url:"content/images/product/dy/6/info-3.jpg",info:''},
            {url:"content/images/product/dy/6/info-4.jpg",info:''},
            {url:"content/images/product/dy/6/info-5.jpg",info:''},
            {url:"content/images/product/dy/6/info-6.jpg",info:''},
            {url:"content/images/product/dy/6/info-7.jpg",info:''},
            {url:"content/images/product/dy/6/info-8.jpg",info:''},
            {url:"content/images/product/dy/6/info-9.jpg",info:''},
            {url:"content/images/product/dy/6/info-10.jpg",info:''},
            {url:"content/images/product/dy/6/info-11.jpg",info:''},
            {url:"content/images/product/dy/6/info-12.jpg",info:''},
            {url:"content/images/product/dy/6/info-13.jpg",info:''},
            {url:"content/images/product/dy/6/info-14.jpg",info:''},
            {url:"content/images/product/dy/6/info-15.jpg",info:''},
            {url:"content/images/product/dy/6/info-16.jpg",info:''},
            {url:"content/images/product/dy/6/info-17.jpg",info:''},
            {url:"content/images/product/dy/6/info-18.jpg",info:''},
            {url:"content/images/product/dy/6/info-19.jpg",info:''},
            {url:"content/images/product/dy/6/info-20.jpg",info:''},
            {url:"content/images/product/dy/6/info-21.jpg",info:''},
        ] 
    },
    { 
        type:"dy", img:[{url:"content/images/product/dy/7/dy-7.jpg"}],title:'封闭母线槽',id:'dy-7',href:'productInfo.html?id=dy-7',
        info:'母线槽适用于额定电压660V，频率为50Hz(或60Hz)，额定工作电流100-5000A的交流三相三线、三相四线、三相五线的配电。产品具有体积小，结构紧凑，输送电流大、安全可靠、安装灵活等特点。(见示意图)带插接口的母线槽可通过插接开关箱很方便地引出分支电源。母线槽安装时可直接从变压器接到配电柜，亦可从低压柜直接接到配电系统作为配电干线路。通过母线槽的各类弯曲单元可使母线系统在任何建筑结构中进行分层、转角、交替、变容等的安装。见弯曲单元及变径单元图例。(我厂可派技术人员帮用户设计布局走向)。符合GB7251.2-2006标准，并通过国家强制性产品认证。',
        imgInfo:[
            {url:"content/images/product/dy/7/info-1.jpg",info:''},
        ] 
    },
];

var productGfModal=[
    { 
        type:"gf", img:[{url:"content/images/product/gf/1/gf-1.jpg"},{url:"content/images/product/gf/1/gf-2.jpg"}],title:'光伏变电站',id:'gf-1',href:'productInfo.html?id=gf-1',
        info:'光伏发电可以减少污染气体排放。<br>'+
        '光伏发电技术将太阳能直接转换为电能的技术称为光伏发电技术。在国际上，光伏发电技术的研究已有100多年的历史。这一能源高端产品已经成熟。我国于1958年开始研究太阳电池，1971年首次成功地应用于我国发射的东方红二号卫星上。1973年开始将太阳电池用于地面。2002年，国家有关部门启动“送电到乡工程”，在西部七省区的近800个无电乡所在地安装光伏电站，该项目拉动了我国光伏工业快速发展。截止到2004年底，我国太阳电池的累计装机已经达到6.5万千瓦。光伏发电的优点是较少受地域限制，因为阳光普照大地;光伏系统还具有安全可靠、无噪声、低污染、无需消耗燃料和架设输电线路即可就地发电供电及建设周期短的优点。' ,
        imgInfo:{}
    },
];
var productSxModal=[
    { 
        type:"sx", img:[{url:"content/images/product/sx/1/sx-1.jpg"}],title:'YB(ZBW1)型系列预装式变电站',id:'sx-1',href:'productInfo.html?id=sx-1',
        info:'',
        imgInfo:[
            {url:"content/images/product/sx/1/info-1.jpg",info:''},          
        ] 
    },
    { 
        type:"sx", img:[{url:"content/images/product/sx/2/sx-2.jpg"}],title:'YB(ZBW1)型系列预装式变电站',id:'sx-2',href:'productInfo.html?id=sx-2',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/sx/2/info-1.jpg",info:''},
            {url:"content/images/product/sx/2/info-2.jpg",info:''},
            {url:"content/images/product/sx/2/info-3.jpg",info:''},
            {url:"content/images/product/sx/2/info-4.jpg",info:''},
            
        ] 
    },
    { 
        type:"sx", img:[{url:"content/images/product/sx/3/sx-3.jpg"}],title:'YB(ZBW1)型系列预装式变电站',id:'sx-3',href:'productInfo.html?id=sx-3',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/sx/3/info-1.jpg",info:''},
            {url:"content/images/product/sx/3/info-2.jpg",info:''},
            {url:"content/images/product/sx/3/info-3.jpg",info:''},
            
        ] 
    },
    { 
        type:"sx", img:[{url:"content/images/product/sx/4/sx-4.jpg"}],title:'YB(ZBW1)型系列预装式变电站',id:'sx-4',href:'productInfo.html?id=sx-4',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/sx/4/info-1.jpg",info:''},
            
        ] 
    },
    { 
        type:"sx", img:[{url:"content/images/product/sx/5/sx-5.jpg"}],title:'YB(ZBW1)型系列预装式变电站',id:'sx-5',href:'productInfo.html?id=sx-5',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/sx/5/info-1.jpg",info:''},
            
        ] 
    },
    { 
        type:"sx", img:[{url:"content/images/product/sx/6/sx-6.jpg"}],title:'YB(ZBW1)型系列预装式变电站',id:'sx-6',href:'productInfo.html?id=sx-6',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/sx/6/info-1.jpg",info:''},
            
        ] 
    },
];
var productYzModal=[
    { 
        type:"yz", img:[{url:"content/images/product/yz/1/yz-1.jpg"},{url:"content/images/product/yz/1/yz-1-1.jpg"}],title:'预制舱',id:'yz-1',href:'productInfo.html?id=yz-1',
        info:'预制舱的尺寸'+'</br>'
        +'根据配送式智能变电站建设的要求，结合《超限运输车辆行驶公路管理规定》，预制舱主要分为Ⅰ型、Ⅱ型、Ⅲ型。'+'</br>'
        +'Ⅰ型预制舱： 长×宽×高6200mm×2800mm×3133mm（外部尺寸）</br>'
        +'Ⅱ型预制舱： 长×宽×高9200mm×2800mm×3133mm（外部尺寸）</br>'
        +'Ⅲ型预制舱： 长×宽×高12200mm×2800mm×3133mm（外部尺寸）</br>'

        +'组合预制舱的尺寸</br>'
        +'结合实际工程需求，由预制舱衍生出组合预制舱。组合预制舱由2个同型号的预制舱拼接而成，舱体内部和外部要求同预制舱。</br>'
        +'Ⅰ型预制舱： 长×宽×高6200mm×5600mm×3133mm（外部尺寸）</br>'
        +'Ⅱ型预制舱： 长×宽×高9200mm×5600mm×3133mm（外部尺寸）</br>'
        +'Ⅲ型预制舱： 长×宽×高12200mm×5600mm×3133mm（外部尺寸）</br>'
        +'（运输时，需将拼接好的组合预制舱拆分成两个独立的预制舱运输至现场，在现场再次拼接）</br>'

        +'预制舱及组合预制舱较传统建筑物的优点：</br>'
        +'大幅降低现场湿作业，缩短变电站土建施工周期。一、二次设备一体化设计，一体化调试。设备模块化设计、工厂化定制和现场组合化拼装，实现“即装即用”，大幅减小现场施工、调试的工作量，缩短投运时间。</br>'
        ,imgInfo:{}
    },
    { 
        type:"yz", img:[{url:"content/images/product/yz/2/yz-2.jpg"},{url:"content/images/product/yz/2/yz-2-1.jpg"}],title:'预制舱',id:'yz-2',href:'productInfo.html?id=yz-2',
        info:'预制舱的尺寸'+'</br>'
        +'根据配送式智能变电站建设的要求，结合《超限运输车辆行驶公路管理规定》，预制舱主要分为Ⅰ型、Ⅱ型、Ⅲ型。'+'</br>'
        +'Ⅰ型预制舱： 长×宽×高6200mm×2800mm×3133mm（外部尺寸）</br>'
        +'Ⅱ型预制舱： 长×宽×高9200mm×2800mm×3133mm（外部尺寸）</br>'
        +'Ⅲ型预制舱： 长×宽×高12200mm×2800mm×3133mm（外部尺寸）</br>'

        +'组合预制舱的尺寸</br>'
        +'结合实际工程需求，由预制舱衍生出组合预制舱。组合预制舱由2个同型号的预制舱拼接而成，舱体内部和外部要求同预制舱。</br>'
        +'Ⅰ型预制舱： 长×宽×高6200mm×5600mm×3133mm（外部尺寸）</br>'
        +'Ⅱ型预制舱： 长×宽×高9200mm×5600mm×3133mm（外部尺寸）</br>'
        +'Ⅲ型预制舱： 长×宽×高12200mm×5600mm×3133mm（外部尺寸）</br>'
        +'（运输时，需将拼接好的组合预制舱拆分成两个独立的预制舱运输至现场，在现场再次拼接）</br>'

        +'预制舱及组合预制舱较传统建筑物的优点：</br>'
        +'大幅降低现场湿作业，缩短变电站土建施工周期。一、二次设备一体化设计，一体化调试。设备模块化设计、工厂化定制和现场组合化拼装，实现“即装即用”，大幅减小现场施工、调试的工作量，缩短投运时间。</br>'
        ,imgInfo:{}
    },
    { 
        type:"yz", img:[{url:"content/images/product/yz/3/yz-3.jpg"}],title:'预装式变电站（美式箱变)',id:'yz-3',href:'productInfo.html?id=yz-3',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/yz/3/info-1.jpg",info:''},
            {url:"content/images/product/yz/3/info-2.jpg",info:''},
            {url:"content/images/product/yz/3/info-3.jpg",info:''},
            {url:"content/images/product/yz/3/info-4.jpg",info:''},
            {url:"content/images/product/yz/3/info-5.jpg",info:''},
            {url:"content/images/product/yz/3/info-6.jpg",info:''},
            {url:"content/images/product/yz/3/info-7.jpg",info:''},
            {url:"content/images/product/yz/3/info-8.jpg",info:''},
            {url:"content/images/product/yz/3/info-9.jpg",info:''},
            
        ] 
    },
    { 
        type:"yz", img:[{url:"content/images/product/yz/4/yz-4.jpg"}],title:'YB□(ZBW1)型系列预装式变电站',id:'yz-4',href:'productInfo.html?id=yz-4',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/yz/4/info-1.jpg",info:''},
            {url:"content/images/product/yz/4/info-2.jpg",info:''},
            
        ] 
    },
    { 
        type:"yz", img:[{url:"content/images/product/yz/5/yz-5.jpg"}],title:'户外环网柜电缆分接箱',id:'yz-5',href:'productInfo.html?id=yz-5',
        info:'' ,
        imgInfo:[
            {url:"content/images/product/yz/5/info-1.jpg",info:''},
            
        ] 
    },
];

  var productMenuModal = new Vue({
    el: '#product-menu',
    data: {
      items: [
        { title:"中压开关系列",type:'zy'},
        { title:"低压开关系列",type:'dy'},
        { title:"预制舱-预装式变电站",type:'yz'},
        { title:"三箱类",type:'sx'},
        { title:"光伏变电站",type:'gf'},
        { title:"变压器",type:'by'},
      ]
    },
    methods: {
        navToType: function (e) {
            var type=$(e.currentTarget).attr("id");
            if(type!=undefined){
                console.log(type);
                window.location="product.html?type="+type;
            }
            
            
        }
    }
  });





  function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
    return unescape(r[2]);
    return null;
  }

  function getProductType(s){
    var modal=null;
    switch(s)
        {
        case "by":
        modal=productByModal;
        break;
        case "dy":
        modal=productDyModal;
        break;
        case "gf":
        modal=productGfModal;
        break;
        case "sx":
        modal=productSxModal;
        break;
        case "yz":
        modal=productYzModal;
        break;
        case "zy":
        modal=productZyModal;
        break;
        default:
        modal=productZyModal;
        };
    return modal;
    
  }

  var type=getUrlParms('type');

  productModal.products=getProductType(type);


