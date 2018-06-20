//关系信息
var msg = {
  name: '华谊兄弟',
  children: [
    {
      name: '所属行业',
      children: [{ name: '影视娱乐' }, { name: '品牌授权' }, { name: '实景娱乐' }, { name: '互联网娱乐' }],
    },
    {
      name: '行业龙头',
      children: [
        { name: '自己' },
        {
          name: '竞争对手',
          children: [{ name: '万达影视' }, { name: '光线传媒' }],
        },
      ],
    },
    {
      name: '实际控制人',
      children: [{ name: '王忠军、王忠磊兄弟' }],
    },
    {
      name: '董监高',
      children: [
        {
          name: '董事',
          children: [
            { name: '王忠军' },
            { name: '王忠磊' },
            { name: '刘晓梅' },
            { name: '王夫也' },
            { name: '丁琪' },
            { name: '叶宁' },
          ],
        },
        {
          name: '独立董事',
          children: [{ name: '王力群' }, { name: '盛希泰' }, { name: '王超群' }],
        },
        {
          name: '监事',
          children: [{ name: '吴鹰' }, { name: '薛桂枝' }, { name: '李青' }],
        },
        {
          name: '高管',
          children: [{ name: '王忠磊' }, { name: '丁琪' }, { name: '叶宁' }, { name: '刘韬' }, { name: '高辉' }],
        },
      ],
    },
    {
      name: '十大股东',
      children: [
        { name: '王忠军' },
        { name: '深圳市腾讯计算机系统有限公司' },
        { name: '王忠磊' },
        { name: '杭州阿里创业投资有限公司' },
        { name: '马云' },
        { name: '中国平安人寿保险股份有限公司-传统-普通保险产品' },
        { name: '鲁伟鼎' },
        { name: '西藏信托有限公司-西藏信托-莱沃26号集合资金信托计划' },
        { name: '国民信托有限公司-国民信托·华谊兄弟大股东增持1号集合资金信托计划' },
        { name: '王晨晓' },
      ],
    },
    { name: '子公司' },
    { name: '供应商' },
    { name: '客户' },
    {
      name: '应收账款',
      children: [
        { name: 'All’s Well Media Company Ltd' },
        { name: 'China Lion Entertainment Ltd' },
        { name: '北京兴盛天亚文化传播有限公司' },
        { name: '河南建业华谊兄弟文化旅游产业有限公司' },
        { name: '华谊影城(苏州)有限公司' },
        { name: '南京利必多影视文化有限公司' },
        { name: '上海淳泰投资管理有限公司' },
        { name: '上海嘉华影视文化产业发展有限公司' },
        { name: '深圳市腾讯计算机系统有限公司' },
        { name: '英雄互娱科技股份有限公司' },
        { name: '东阳向上影业有限公司' },
        { name: '北京新影联华谊兄弟影院有限公司' },
      ],
    },
    {
      name: '应付账款',
      children: [
        { name: '东阳向上影业有限公司' },
        { name: '英雄互娱科技股份有限公司' },
        { name: '北京无限自在文化传媒股份有限公司' },
        { name: '深圳市腾讯计算机系统有限公司' },
        { name: '中影环球(北京)科技有限公司' },
      ],
    },
    {
      name: '担保方',
      children: [
        { name: '北京华谊兄弟娱乐投资有限公司', time: '2001' },
        { name: '华谊兄弟互娱（天津）投资有限公司' },
        { name: '王忠军' },
        { name: '刘晓梅' },
        { name: '王忠磊' },
        { name: '王晓蓉' },
        { name: '深圳市环球数码科技有限公司' },
        { name: 'Huayi Brothers Inc. (US)' },
      ],
    },
    {
      name: '被担保方',
      children: [
        { name: '北京华谊兄弟娱乐投资有限公司' },
        { name: '华谊兄弟国际有限公司' },
        { name: 'GDC Technology Limited' },
        { name: '北京华谊兄弟创星娱乐科技股份有限公司' },
        { name: '华谊兄弟影院投资有限公司' },
        { name: 'Huayi Brothers Pictures LLC华谊美国项目公司' },
      ],
    },
    {
      name: '债权人',
      children: [
        { name: '华夏银行股份有限公司两广支行' },
        { name: '江苏银行股份有限公司北京安定门支行' },
        { name: '宁波银行股份有限公司北京分行' },
        { name: '中国民生银行股份有限公司北京分行' },
        { name: '中国民生银行股份有限公司总行营业部' },
        { name: '杭州银行股份有限公司营业部' },
        { name: '北京银行股份有限公司中关村分行' },
        { name: '浙商银行股份有限公司' },
        { name: '天津银行股份有限公司北京分行' },
        { name: '北京银行股份有限公司朝外支行' },
        { name: '招商银行股份有限公司北京分行' },
        { name: '平安银行股份有限公司北京分行' },
        { name: 'East West Bank（“华美银行”）' },
      ],
    },
    { name: '董监高的亲属关系' },
    {
      name: '城市',
      children: [
        {
          name: '注册地址',
          children: [{ name: '浙江省东阳市横店影视产业实验区 C1-001' }],
        },
        {
          name: '办公地址',
          children: [{ name: '北京市朝阳区新源南路甲 2 号华谊兄弟办公大楼' }],
        },
      ],
    },
    {
      name: '省份',
      children: [
        {
          name: '注册省份',
          children: [{ name: '浙江省' }],
        },
        {
          name: '办公省份',
          children: [{ name: '北京市' }],
        },
      ],
    },
    {
      name: '企业战略关系',
      children: [
        { name: '阿里巴巴' },
        { name: '腾讯公司' },
        { name: '百视通网络电视技术发展有限责任公司' },
        { name: '中国电信天翼视讯' },
        { name: '中国平安' },
        { name: '美国 STX' },
        { name: '好莱坞顶级导演罗素兄弟' },
      ],
    },
    { name: '中标项目' },
    {
      name: '担保人与反担保人',
      children: [{ name: '北京华谊兄弟影投资有限公司' }],
    },
    { name: '法律法规' },
    {
      name: '通过董监高简历比对展示企业与企业的关系',
      children: [
        {
          name: '王忠军',
          children: [
            {
              name: '北京兄弟联合投资有限公司',
              children: [{ name: '董事' }, { name: '总经理' }],
            },
            {
              name: '北京多慕斯餐饮管理有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: '尔果斯华谊兄弟创业投资有限公司',
              children: [{ name: '执行董事' }, { name: '经理' }],
            },
            {
              name: '	保利华谊（上海）拍卖有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊兄弟（天津）体育文化有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '	华谊兄弟（天津）投资有限公司',
              children: [{ name: '执行董事' }, { name: '经理' }],
            },
            {
              name: '北京华谊兄弟创星娱乐科技股份有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊兄弟南京艺术有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '上海嘉华影视文化产业发展有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '天津滨海新区华谊启明东方暖公 关顾问有限责任公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊影城（苏州）有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '海南观澜湖华谊冯小刚文化旅游 实业有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊玄如文化艺术有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '英雄互娱科技股份有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '海南观澜湖华谊冯小刚电影公社 影视服务有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊天辰国际投资基金普通合伙人有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊天辰国际投资基金资产管理 有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊腾讯娱乐有限公司',
              children: [{ name: '董事长' }],
            },
          ],
        },
        {
          name: '王忠磊',
          children: [
            {
              name: '北京兄弟联合投资有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '霍尔果斯华谊兄弟创业投资有限公司',
              children: [{ name: '监事' }],
            },
            {
              name: '华谊兄弟（天津）投资有限公司',
              children: [{ name: '监事' }],
            },
            {
              name: '华谊兄弟时尚（上海）文化传媒有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: 'All’s Well Media Company Limited',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊兄弟（天津）实景娱乐有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: 'China Lion Entertainment Limited',
              children: [{ name: '董事' }],
            },
            {
              name: '深圳市华宇讯科技有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '浙江常升影视制作有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '新圣堂（天津）文化传播有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: 'GDC Technology Limited',
              children: [{ name: '董事' }],
            },
            {
              name: 'Guru Online(Holdings) Limited',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊乐恒有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '浙江东阳浩瀚影视娱乐有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: '浙江东阳美拉传媒有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: '北京华谊兄弟聚星文化有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: '华谊兄弟（北京）电影发行有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: '英雄互娱科技股份有限公司',
              children: [{ name: '副董事长' }],
            },
            {
              name: '北京华谊兄弟创星娱乐科技股份有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '北京魔镜未来科技有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊腾讯娱乐有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '保利华谊（上海）拍卖有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '北京随视传媒科技股份有限公司',
              children: [{ name: '董事' }],
            },
          ],
        },
        {
          name: '丁琪',
          children: [
            {
              name: '广州银汉科技有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '深圳市华宇讯科技有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: 'GDC Technology Limited',
              children: [{ name: '董事' }],
            },
            {
              name: '兄弟姐妹（天津）文化信息咨询合 伙企业（有限合伙）	',
              children: [{ name: '执行事务合伙人' }],
            },
            {
              name: '乐恒互动（北京）文化有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊玄如文化艺术有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '深圳市星河互动科技有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '华谊乐恒有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '天津滨海新区华谊启明东方暖公关顾问有限责任公司',
              children: [{ name: '董事' }],
            },
            {
              name: '上海刃游网络科技有限公司',
              children: [{ name: '董事' }],
            },
          ],
        },
        {
          name: '叶宁',
          children: [
            {
              name: 'GDC Technology Limited',
              children: [{ name: '董事' }],
            },
            {
              name: '华影天下（天津）电影发行有限责任公司',
              children: [{ name: '董事长' }],
            },
          ],
        },
        {
          name: '刘晓梅',
          children: [
            {
              name: '北京兄弟联合投资有限公司',
              children: [{ name: '董事' }],
            },
          ],
        },
        {
          name: '王夫也',
          children: [
            {
              name: 'GDC Technology Limited',
              children: [{ name: '董事' }],
            },
            {
              name: '北京天赐之恒网络科技有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '英雄互娱科技股份有限公司',
              children: [{ name: '监事' }],
            },
            {
              name: '北京集结号资本',
              children: [{ name: '合伙人' }],
            },
            {
              name: '做实事科技服务（北京）有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '北京爱月投资有限公司',
              children: [{ name: '执行董事' }, { name: '经理' }],
            },
            {
              name: '北京还有电影科技有限公司',
              children: [{ name: '董事长' }, { name: '总经理' }],
            },
          ],
        },
        {
          name: '王力群',
          children: [
            {
              name: '上海磐石投资有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '上海交运集团股份有限公司',
              children: [{ name: '独立董事' }],
            },
            {
              name: '中国永达汽车服务控股有限公司',
              children: [{ name: '非执行董事' }],
            },
            {
              name: '上海新通联包装股份有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '上海润欣科技股份有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '上海鹏欣环球资源股份有限公司',
              children: [{ name: '独立董事' }],
            },
            {
              name: '艺龙公司 /CHINA E-DRAGON HOLDINGS LIMITED',
              children: [{ name: '董事' }],
            },
          ],
        },
        {
          name: '盛希泰',
          children: [
            {
              name: '浪潮软件股份有限公司',
              children: [{ name: '独立董事' }],
            },
            {
              name: '中商惠民（北京）电子商务有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '北京洪泰同创投资管理有限公司',
              children: [{ name: '执行董事' }],
            },
            {
              name: '洪泰资本控股有限公司',
              children: [{ name: '总经理' }],
            },
          ],
        },
        {
          name: '王超群',
          children: [
            {
              name: '山西蓝焰控股股份有限公司',
              children: [{ name: '独立董事' }],
            },
            {
              name: '长治银行股份有限公司',
              children: [{ name: '监事' }],
            },
            {
              name: '山西祝融万权（天津）律师事务所',
              children: [{ name: '主任' }],
            },
          ],
        },
        {
          name: '吴鹰',
          children: [
            {
              name: '中泽嘉盟投资有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '北京中泽启天投资中心（有限合伙）',
              children: [{ name: '执行事务合伙人' }],
            },
            {
              name: '上海稳实投资管理中心（普通合 伙）',
              children: [{ name: '执行事务合伙人' }],
            },
            {
              name: '北京博升优势科技发展有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '卓尔集团股份有限公司',
              children: [{ name: '独立非执行董事' }],
            },
            {
              name: '广州达意隆包装机械股份有限公司',
              children: [{ name: '独立董事' }],
            },
            {
              name: '海联金汇科技股份有限公司',
              children: [{ name: '董事' }],
            },
            {
              name: '茂业通信网络股份有限公司',
              children: [{ name: '董事长' }],
            },
            {
              name: '众安在线财产保险股份有限公司',
              children: [{ name: '独立非执行董事' }],
            },
          ],
        },
        {
          name: '刘韬',
          children: [
            {
              name: '浙江东阳浩瀚影视娱乐有限公司',
              children: [{ name: '总经理' }],
            },
          ],
        },
      ],
    },
  ],
};

export const data = {
  edges: [],
  nodes: [],
};

var arr = [];
var resultArr = [];

// 去重函数
function trim(arr) {
  var resultArr = [];
  arr.forEach(item => {
    !resultArr.includes(item) && resultArr.push(item);
  });
  return resultArr;
}

// 递归遍历msg
function traverseTree(node) {
  if (!node) {
    return;
  }

  arr.push(node.name);
  resultArr = trim(arr);
  if (node.children && node.children.length > 0) {
    var i = 0;
    for (i = 0; i < node.children.length; i++) {
      traverseTree(node.children[i]);
      data.edges.unshift({
        id: data.edges.length,
        source: node.name,
        target: node.children[i].name,
        weight: 1,
        time: node.time,
      });
    }
  }
}

traverseTree(msg);

data.nodes = resultArr.map(item => ({
  id: item,
  name: item,
  weight: 1,
}));
