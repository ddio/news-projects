export const QUIZ_QUESTIONS = [
  {
    question: '台電預測，20 年後臺灣將出現供電不足的問題，你的解決方法是？',
    options: [
      { text: '再蓋新的核電廠', order: 1, president: 'Lee' },
      { text: '蓋多一點火力發電廠', order: 2, president: 'Chen' },
      { text: '將現有的核電廠延役', order: 3, president: 'Ma' },
      { text: '加速發展再生能源', order: 4, president: 'Tsai' }
    ]
  },
  {
    question: '國際社會因應全球暖化、極端氣候威脅，從 20 世紀末開始制定公約減少碳排放，臺灣不屬於聯合國會員國，沒有強制減排的壓力，那你會如何面對全球暖化議題？',
    options: [
      { text: '主動立法響應全球減碳', order: 1, president: 'Lee' },
      { text: '制定《環境基本法》，讓臺灣永續發展和環保意識更進一步', order: 4, president: 'Chen' },
      { text: '大家一起節能減碳！核能的碳排放比火力發電低，也應該多多發展', order: 2, president: 'Ma' },
      { text: '推動能源轉型，降低對核能和火力發電的依賴，讓再生能源成為新時代的重要能源', order: 3, president: 'Tsai' }
    ]
  },
  {
    question: '世界許多國家積極開發再生能源，你的再生能源政策是？',
    options: [
      { text: '拚經濟最重要，但還是響應世界潮流，小幅提升再生能源佔比規劃好了', order: 3, president: 'Lee' },
      { text: '再生能源佔比可以調高，但要怎麼達成，可能還要再研究看看', order: 4, president: 'Chen' },
      { text: '我支持制定政策發展再生能源，但開發成本好像有點高，實際推行就……再看看吧', order: 2, president: 'Ma' },
      { text: '再生能源很棒！要積極推行，讓臺灣再生能源佔比大幅提升', order: 1, president: 'Tsai' }
    ]
  },
  {
    question: '火力發電被認為是造成空污的原因之一，你的火力發電政策是？',
    options: [
      { text: '火力發電是臺灣最主要電力來源，火力發電不能停！核能也要有！', order: 1, president: 'Lee' },
      { text: '廢核更重要，發電量缺口只能先靠提高火力發電來補足', order: 2, president: 'Chen' },
      { text: '核能與火力發電並行，改善電廠發電技術來降低碳排放，這樣就可以兼顧減緩空污與穩定供電', order: 4, president: 'Ma' },
      { text: '我主張廢核，因此火力佔比不能調太低，但會加強發展比燃煤更低污染的燃氣電廠', order: 3, president: 'Tsai' }
    ]
  },
  {
    question: '台電長期壟斷臺灣供電市場，你會怎麼處理？',
    options: [
      { text: '為了公平而且自由化，應該要回歸市場機制，先立法鼓勵民間蓋電廠賣電給台電', order: 2, president: 'Lee' },
      { text: '台電勢力龐大，還是先靜觀其變吧（扁）', order: 1, president: 'Chen' },
      { text: '成立專案小組再《電業法》推一把', order: 4, president: 'Ma' },
      { text: '把《電業法》列為修法重點，讓台電進一步轉型，打造更自由的電業市場', order: 3, president: 'Tsai' }
    ]
  }
]

export const QUIZ_ANSWERS ={ 
  Lee: {
    order: 4,
    name: '李登輝',
    termOfOffice: '1988 ~ 2000',
    text: [
      '拍板興建核四',
      '台電電源開發計劃受阻，為穩定供電開放民營電廠，麥寮、海湖、和平等民營電廠動工',
      '推動電業市場自由化',
      '回應《京都議定書》，召開第一次全國能源會議，規劃 2020 年能源配比為：再生能源 3.3 %、天然氣 16%、 燃煤 28 %、核能 15 %'
    ]
  },
  Chen: {
    order: 3,
    name: '陳水扁',
    termOfOffice: '2000 ~ 2008',
    text: [
      '上任時主張核四工程再評估，引起朝野動盪，民眾支持度大降之後又重啟核四',
      '通過《環境基本法》，將非核家園納入目標，並成立行政院永續發展委員會',
      '第二次全國能源會議中大幅降低核電配比至 4 %，再生能源為 6 %、天然氣 17.5 %、燃煤發電 43 %',
      '為了使之後供電無虞，動工多座火力發電廠，並進行深澳及林口電廠更新擴建計畫'
    ]
  },
  Ma: {
    order: 2,
    name: '馬英九',
    termOfOffice: '2008 ~ 2016',
    text: [
      '視核能為清潔能源之一，贊成在核能安全前提下使用核電',
      '福島核災後民間反核態度漸強，政府承諾逐步邁向非核，宣布核四安檢後封存',
      '制定綠電發展基礎的《再生能源發展條例》，確立以優惠價格長期收購綠電的躉購制度',
      '成立專案小組推動《電業法》修法，但任內未能成功修法',
      '推動老舊火力發電機組汰換與更新，希望提高發電效率、降低污染'
    ]
  },
  Tsai: {
    order: 1,
    name: '蔡英文',
    termOfOffice: '2016 ~ 2020',
    text: [
      '力推「能源轉型」和「非核家園」，積極鼓勵發展再生能源，保證能穩定供電',
      '完成懸宕幾十年的《電業法》修法，修法重點讓「綠電先行」，並讓電能更自由被買賣',
      '明訂核能設備應該在 2025 年以前全部停止運轉（但公投後需調整新的能源政策）',
      '規劃 2025 年能源配比為再生能源占比 20％、 天然氣 50 ％、燃煤 30％',
      '在保障供電的前提下，以火力發電為過渡，未來將調高燃氣佔比'
    ]
  }
}
