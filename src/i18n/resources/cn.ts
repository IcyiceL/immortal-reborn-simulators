export default {
  translations: {
    // 系统
    language: '中',
    title: '不朽星图模拟器',
    credit: '作者',
    creator: '作者：MintyKnight',
    englishTranslator: '英语翻译：Ciello',
    bugReport: '我想去{{repoProvider}}报告页面错误，或提供修改意见/建议',
    showAll: '全部显示',
    hideAll: '全部隐藏',
    resetBuild: '重置',
    loadBuild: '导入BD的星点',
    load: '导入',
    currentBuild: '现在的星点',
    search4Perk: '搜索星图',
    share: '分享',
    tower: '通天塔：',
    towerLvl: '通天层数',
    remainPoints: '剩余：{{points}}星点',
    reqiredPoints: '需要：{{totalPoints}}星点，{{towerLevels}}层通天塔',
    buildCopied: '链接已复制到剪贴板，请粘贴使用\n{{link}}',
    points: '{{points}}点',
    // 属性类别
    offensive: '进攻属性',
    defensive: '防御属性',
    passive: '核心天赋',
    baseStats: '五围',
    skilllvl: '技能等级',
    special: '特殊',
    // 五围
    allStats: '全属性',
    luck: '运',
    agility: '敏',
    power: '威',
    endurance: '耐',
    wisdom: '秘',
    // 主动技能等级
    beginner: '一转',
    intermediate: '二转',
    advanced: '三转',
    master: '四转',
    // 进攻属性
    atk: '攻击',
    atkboost: '攻击增幅',
    summon: '召唤',
    summonBoost: '召唤增幅',
    critChance: '暴击率',
    critEffect: '暴击效果',
    dmgboost: '伤害增幅',
    normalup: '普攻',
    attackSpeed: '攻速',
    allDamage: '全伤',
    physicalDamage: '物伤',
    fireDamage: '火伤',
    iceDamage: '冰伤',
    lightDamage: '光伤',
    darkDamage: '暗伤',
    // 防御属性
    maxhp: '生命',
    maxhpboost: '生命增幅',
    armor: '护甲',
    armorboost: '护甲增幅',
    dmgreduction: '伤害减免',
    blockChance: '格挡率',
    blockEffect: '格挡效果',
    allResistance: '全抗',
    physicalResistance: '物抗',
    fireResistance: '火抗',
    iceResistance: '冰抗',
    lightResistance: '光抗',
    darkResistance: '暗抗',
    lifesteal: '生命吸取',
    shieldsteal: '护盾吸取',
    reflect: '伤害反射',
    dodge: '绝闪',
    // 核心天赋
    lostsoul: '失魂',
    martialartist:'格斗家',
    bravery:'刑天',
    luckycharm:'幸运祝福',
    doubleluck:'双重幸运',
    windrider:'风之骑士',
    nomansland:'无人之地',
    breathofwind:'风息',
    courage:'越战越勇',
    kiting:'风筝',
    assassination:'刺杀',
    accuracy:'例无虚发',
    booster:'技能增幅',
    mirrorimage:'镜像',
    ironwill:'铁壁',
    fortress:'固垒',
    giant:'巨人',
    grandsummoner:'召唤大师',
    skywardstrike:'穿云',
    wail:'同伴的哀鸣',
    alchemist:'炼金术师',
    unpenetrable:'刀枪不入',
    leadership:'领袖',
    // 核心天赋说明
    lostsoulDescription: 
    '生命吸取和护盾吸取分别增加0.1%，但友方无法在通过任何治疗方式恢复生命。',
    martialartistDescription:
    '战斗中，若主武器的攻击范围≤3，则攻击范围+1，武器普攻伤害降低15%。',
    braveryDescription:
    '当友方单位生命≥25%时，该单位所受到的所有伤害优先扣除生命再扣除护盾。',
    luckycharmDescription:
    '治疗效果可以产生暴击，且治疗暴击时效果固定为150%。',
    doubleluckDescription:
    '友方格挡后，5秒内降低目标12%的攻击。',
    windriderDescription:
    '友方有15%的概率躲避负面状态。',
    nomanslandDescription:
    '闪避率的上限+2%。每一个存活的敌人，使友方绝对闪避+1.5%。',
    breathofwindDescription:
    '角色武器普攻有50%的概率触发风息：对目标造成基础伤害95%的物理异常伤害，受角色普攻伤害加成影响，冷却时间6秒。',
    courageDescription:
    '友方单位生命≤50%时，友方伤害提高10%，控制延长+10%。',
    kitingDescription:
    '近距离时降低15%的伤害，远距离时提高15%的伤害。',
    assassinationDescription:
    '远距离时降低15%的伤害，近距离时提高15%的伤害。',
    accuracyDescription:
    '友方的攻击不会被闪避，但友方的暴击率固定为0%。',
    boosterDescription:
    '角色每次使用攻击技能后，使受到的伤害降低0.6%，可叠加20次。',
    mirrorimageDescription:
    '生命提高5%，伤害反射+50%',
    ironwillDescription:
    '全属性抗性+3.5%，全属性抗性上限+1%',
    fortressDescription:
    '战斗中，角色生命上限转化为开场护盾并固定变为1点，角色因治疗而溢出的生命，以12%的比例转化为护盾。',
    giantDescription:
    '战斗中不再能闪避攻击。将面板上的绝对闪避转化为角色的护甲提高。',
    grandsummonerDescription:
    '角色承受伤害的12%，由所有随从共同承担',
    skywardstrikeDescription:
    '武器攻击距离固定为最大值。但伤害降低15%。',
    wailDescription:
    '任意随从死亡时，存活的随从发射火球，对敌方单位造成随从基础伤害120%的火属性伤害，冷却时间5秒。',
    alchemistDescription:
    '敌方的伤害降低15%，但敌方的每次攻击都会附带1层[燃烧][中毒][流血]。',
    unpenetrableDescription:
    '全属性抗性+5%。全属性抗性上限+2%',
    leadershipDescription:
    '友方每一个存活的随从，使友方随从伤害提高2.5%。',
    // 特殊
    cooldownRecovery: '冷却恢复',
    shieldatstart: '开场获得护盾',
    hpregen: '每3秒恢复生命',
    str: '腕力',
    // 搜索关键词
    skillLevel: '技能等级',
    offense: '进攻',
    defense: '防御',
    offenseDefense: '进攻 防御',
    passive: '核心天赋',
  },
};
