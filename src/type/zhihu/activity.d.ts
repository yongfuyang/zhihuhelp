export type Record = AnswerVoteUpActivityRecord | ArticleVoteUpActivityRecord
export type AnswerVoteUpActivityRecord = {
  target: {
    relationship: {
      is_author: false | boolean
      voting: 0 | number
      is_thanked: false | boolean
      is_nothelp: false | boolean
      upvoted_followee_ids: []
    }
    mark_infos: []
    excerpt: '把文章看完了，作者是是…' | string
    created_time: 1548463831 | number
    preview_type: 'expand' | string
    id: 582222330 | number
    is_copyable: true | boolean
    author: {
      is_followed: false | boolean
      type: 'people' | string
      name: '韩冬' | string
      headline: '不公正，哪怕有利于我的，长远来看必有害于我' | string
      url_token: 'handong1986' | string
      user_type: 'people' | string
      vip_info: null
      url: 'https://api.zhihu.com/people/3aacd95f3c680a51c282d91fb796b9ac' | string
      avatar_url: 'https://pic3.zhimg.com/50/9a22cd951_s.jpg' | string
      is_following: false | boolean
      is_org: false | boolean
      gender: 1 | number
      badge: []
      id: '3aacd95f3c680a51c282d91fb796b9ac' | string
    }
    url: 'https://api.zhihu.com/answers/582222330' | string
    comment_permission: 'all' | string
    question: {
      author: {
        is_followed: false | boolean
        type: 'people' | string
        name: '真实故事计划' | string
        headline: '' | string
        url_token: 'zhen-shi-gu-shi-ji-hua' | string
        user_type: 'organization' | string
        vip_info: null
        url: 'https://api.zhihu.com/people/dd00a1331c92c5f94e28c007443271b5' | string
        avatar_url: 'https://pic4.zhimg.com/50/v2-3b1f2e192ac6d2ee0af97b46bc564200_s.jpg' | string
        is_following: false | boolean
        is_org: true | boolean
        gender: 1 | number
        badge: []
        id: 'dd00a1331c92c5f94e28c007443271b5' | string
      }
      created: 1548346984 | number
      url: 'https://api.zhihu.com/questions/310188241' | string
      title: '如何看待《一个北大毕业生决定去送外卖》一文刷屏？什么样的人生才值得一过？' | string
      excerpt: '作者在摘一过？北大毕业生去体验外卖员的人生，到底是不是一种浪费？' | string
      answer_count: 1716 | number
      bound_topic_ids: [473 | number, 1575 | number, 6780 | number, 14432 | number, 27237]
      comment_count: 62 | number
      is_following: false | boolean
      follower_count: 8423 | number
      type: 'question' | string
      id: 310188241 | number
    }
    updated_time: 1548463831 | number
    content: '<p>把文章看完己当了标题党。这也是个黑色幽默吧。</p>' | string
    comment_count: 3 | number
    voteup_count: 11 | number
    reshipment_settings: 'allowed' | string
    thanks_count: 2 | number
    excerpt_new: '把文章看完。不过我觉得…' | string
    preview_text: '把文章看完了，作者是色幽默吧。' | string
    can_comment: {
      status: true | boolean
      reason: '' | string
    }
    type: 'answer' | string
    thumbnail: '' | string
  }
  action_text: '赞同了回答' | string
  actor: {
    is_followed: false | boolean
    type: 'people' | string
    name: '姚泽源' | string
    headline: '专业填坑' | string
    url_token: '404-Page-Not-found' | string
    user_type: 'people' | string
    vip_info: {
      is_vip: false | boolean
    }
    url: 'https://api.zhihu.com/people/57842aac37ccd0de3965f9b6e17cb555' | string
    avatar_url: 'https://pic4.zhimg.com/50/dce9dde98c91a4d1e3cb86e627ecca86_s.jpg' | string
    is_following: false | boolean
    is_org: false | boolean
    gender: 1 | number
    badge: []
    id: '57842aac37ccd0de3965f9b6e17cb555' | string
  }
  verb: 'ANSWER_VOTE_UP' | string
  created_time: 1548470036 | number
  type: 'feed' | string
  id: 1548470036 | number
}

export type ArticleVoteUpActivityRecord = {
  target: {
    updated: 1548396355 | number
    author: {
      is_followed: false | boolean
      type: 'people' | string
      name: '喻以流年' | string
      headline: '在《资治通鉴》里，探寻当下与未来。欢迎@微信公号：喻以流年。' | string
      url_token: 'yyln2016' | string
      user_type: 'people' | string
      vip_info: null
      url: 'https://api.zhihu.com/people/6af47a6193b0f0e1806163160b1e1842' | string
      avatar_url: 'https://pic2.zhimg.com/50/v2-d9c49d5e0c9bcb66c7d03f4e7f978b47_s.jpg' | string
      is_following: false | boolean
      is_org: false | boolean
      gender: 0 | number
      badge: []
      id: '6af47a6193b0f0e1806163160b1e1842' | string
    }
    excerpt:
      | '众欲退，骑督成倅弟太子舍人济问充曰：“事急矣，当云何？”充曰；“司马公畜养汝等，正为今日。今日之事，无所问也！”济即抽戈前刺帝，殒于车下。 <b>《资治通鉴</b>•<b>卷七十七</b>•<b>魏纪九》</b> <b>皇帝死社稷，这事说起来容易做起来难。</b> 有很多人佩服崇祯皇帝，因为他在北京城破后没有选择出降，而是自缢身亡。但其实，这只是一种不得已，崇祯当时已经无路可去。 那有没有那种在帝国移鼎之际奋力一击，用自己的鲜血为帝国祭奠的皇帝呢？ <b>…</b>'
      | string
    id: 55699497 | number
    voteup_count: 20 | number
    upvoted_followees: []
    created: 1548396355 | number
    url: 'https://api.zhihu.com/articles/55699497' | string
    comment_permission: 'all' | string
    title: '君王死社稷——少年天子与他的江山' | string
    preview_type: 'default' | string
    content:
      | '<blockquote>众欲退，骑督成倅弟太子舍人济问充曰：“事急矣，当云何？”充曰；“司马公畜养汝等，正为今日。今日之事，无所问也！”济即抽戈前刺帝，殒于车下。<br><br><b>《资治通鉴</b>•<b>卷七十七</b>•<b>魏纪九》</b></blockquote><p><br></p><p><b>皇帝死社稷，这事说起来容易做起来难。</b><br><br>有很多人佩服崇祯皇帝，因为他在北京城破后没有选择出降，而是自缢身亡。但其实，这只是一种不得已，崇祯当时已经无路可去。<br><br>那有没有那种在帝国移鼎之际奋力一击，用自己的鲜血为帝国祭奠的皇帝呢？<br><br><b>有，比如曹髦</b>。<br><br>曹髦是曹丕的孙子，但皇位能与他有缘，却完全是个意外。正元元年（公元254年），姜维在西线扰边，司马师派司马昭带领魏中央军自许昌出发，支援前线。彼时的魏帝是曹芳，他与臣下谋划，试图在陛见时除去司马昭，夺取兵权，然后逼司马师退位。但临到事前，曹芳却因懦弱不敢签署诏书，令司马昭有惊无险地逃过一劫。<br><br>但司马师当然不会善罢甘休，他趁司马昭带兵在京，借机废除了曹芳，改立曹髦为帝。</p><p><br></p><blockquote>曹髦一开始其实并不是司马师中意的人选，司马师挑中的是彭城王曹据。但却被郭太后所反对，理由是曹据辈分太高，比她自己还要高出一辈——曹据为曹操之子、曹丕之弟，而郭太后则是曹丕的儿媳。<br><br>郭太后给出的这个理由无懈可击，令司马师十分无奈。从名义上来说，册立皇帝的权力是掌握在太后手中的。若是选立曹据，那就是侄媳妇立叔叔为帝，这让郭太后以后还怎么自处？<br><br>因此，司马师只好听从郭太后的意见，曹髦得以入继大统。 </blockquote><p><br></p><p>继位时，曹髦只有14岁。但他并不只是一个不懂事的小孩子，<b>在当皇帝的八年时间里，他几乎年年都在搞事情。</b><br><br>在曹髦继位的第二年，毌丘俭于淮南反叛。司马师不顾病体，带兵出征，虽然平定了叛乱，但却病死于回程途中。临死之前，留在洛阳镇守的司马昭到许昌探望，司马师将军权付与司马昭。<br><br>但这边司马师才刚死，曹髦那边在朝里就做出了反应，他下诏让司马昭暂驻于许昌，以防备东南，同时命尚书傅嘏将中央军带回洛阳。<br><br>只可惜，傅嘏很是靠不住。他与身在军中的钟会密谋，决定与司马昭同时返回洛阳，造成既定事实。<br><br>至此，曹髦棋差一招，只能接受。但司马昭也算是第一次领教了这个小孩子的本事，他似乎不像上一个那么好糊弄了。<br></p><figure><img src="https://pic2.zhimg.com/v2-673efa5e6f895a1bbf4fa964170d506b_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="640" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic2.zhimg.com/v2-673efa5e6f895a1bbf4fa964170d506b_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><hr><p>果然，没多久曹髦就又搞事了。<br><br>曹髦很喜欢跟诸儒探讨经义，而且水平不俗。又一次，他跟儒生们探讨起少康和刘邦的优劣，坚持认为少康为优。</p><p><br></p><ul><li>少康是夏朝的中兴之主。传说夏朝曾被后羿篡位，少康在成年后，杀死权臣，夺回权力。 </li></ul><p><br></p><p>这其中什么意思，就算是傻子都能听得出来。太学里的儒生们哪里敢接这个茬，皇上说什么就是什么吧，曹髦终于在自己的地盘里体验了一把志得意满。<br><br>当时，有几个常在皇帝身边的大臣也经常参与讨论。这几个人，包括了<b>中护军司马望、侍中王沈、散骑常侍裴秀、黄门侍郎钟会</b>。曹髦开始有意识的拉拢这几个人——当中用心最多的，又属司马望。<br><br>这里面有几重原因：首先，司马望任中护军，手握禁军兵权，是实力派人物。其次，司马望虽然跟司马昭属兄弟，但只是堂兄弟。司马望的生父是司马孚——我们在上一篇的番外中，已经介绍过司马孚在司马篡魏过程中的种种纠结。<b>他固然不能站在曹魏这一边，但对曹魏皇帝却是有感情的。</b>因此，曹髦觉得，司马望身为司马孚之子，有可能被拉拢。<br><br>对司马望，曹髦简直是给予“殊荣”。史书记载，“帝性急，请召欲速，以望职在外，特给追锋车、虎贲五人，每有集会，辄奔驰而至。”<br><br>曹髦性格急躁，要求臣下随叫随到，但司马望供职于宫外，无法及时赶到。为此，曹髦专门给他配了一辆车以及五名专门驾车的卫士，以便让他能飞奔而至。<br><br>表面上看起来，这体现的是曹髦的性子急。<b>但这件事更深层次的意思，其实在于形式上的看重。</b>设想一下，贵司有个人每天在大楼里踩着平衡车窜来窜去，老总还说这是他特批的。就凭这份与众不同，你怎么着也能看出来这个小孩在老总心中的地位了。<br><br>但司马望面对着曹髦的这种拉拢，却只感到胆战心惊。两厢为难之下，他自请出外，远离朝堂。曹髦的这次尝试，又以失败告终。<br></p><figure><img src="https://pic4.zhimg.com/v2-5bbc80a105a513fb31408571f3b3c20f_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="640" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic4.zhimg.com/v2-5bbc80a105a513fb31408571f3b3c20f_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><hr><p>甘露二年（公元257年），征东大将军诸葛诞于淮南谋反，是为“淮南三叛”中的最后一叛。此时，司马师已死，司马孚也年迈，无法再领兵出征。<br><br>一时之间，司马昭颇为两难。他若是自己在洛阳坐镇，盯着皇帝和太后，那么不放心带兵的将领，毕竟自己家的权力来源不正；但如果自己带兵出征，留下曹髦在洛阳，又指不定会生出多少事端来。<br><br>捉襟见肘之下，司马昭最终决定：<b>带着太后跟皇帝一起出征。</b><br><br>如此行事，事实上冒了极大的风险。将皇帝带在军中，既有利也有弊。好处，是能极大的鼓舞士气；坏处，则是司马昭绝对不能败。<br><br>根据史料记载，当时，下到各营的军令依然是以诏书的名义。因此，曹髦依然有着极大的影响力，只不过是被司马昭约束了而已。这种情况下，司马昭一旦吃败仗，对于军队的控制必然会有所松动。到时候曹髦如果手段得当，是完全可以趁机诛杀司马昭，夺回军权的。<br><br>有鉴于此，司马昭不敢掉以轻心，他几乎把所有能调动的军队全部都给拉到了淮南战场。而对方诸葛诞也准备了许久，聚集了十余万人坚守寿春，同时还向东吴求援。一时之间，寿春附近集结了近五十万的军队，大家都在等待最后的决战。<br><br><b>这可能是司马昭的人生中最接近于失败的一次，内忧未解而外患又起。</b>但是，再大的困难也架不住人家运气好，诸葛诞虽来势汹汹，实际上却基本就是个猪对手。大军在淮南前后拉锯了一年多，最终司马昭有惊无险地赢了这一战，顺利回到洛阳。</p><p><br></p><ul><li>当时，姜维也嗅到了机会，带着几万人到魏国边界骚扰。但无奈，镇守关中的司马望和邓艾却根本不搭理他。后来，得知诸葛诞战败，姜维也就退回了成都。</li></ul><p><br></p><figure><img src="https://pic1.zhimg.com/v2-4fef6715403db5f0523c53334d18b9b1_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="640" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic1.zhimg.com/v2-4fef6715403db5f0523c53334d18b9b1_r.jpg"><figcaption>（图片来源于网络） </figcaption></figure><hr><p>在曹髦及司马昭回到洛阳的第二年，魏国宁陵的一口井里出现了黄龙——这不是第一次有此异相，据说近年来，魏国屡屡出现黄龙。群臣因此上奏，说这是吉兆，应该庆祝。<br><br><b>但曹髦却不同意。</b>他说，龙是君王的象征。但《易经》说飞龙在天，见龙在田；如今这条龙既不在天上，也不在田间，而在窝在井里，可见并不是什么吉兆。<br><br>说罢，曹髦感慨不已。完了还觉得内心的情绪没有完全排解，又写了一首《潜龙诗》抒发感情。这一年，曹髦19岁，大臣们噤若寒蝉，司马昭恨得咬牙切齿。<br><br>到了甘露五年五月（公元260年），曹髦终于准备爆发了。“帝见威权日去，不胜其忿”，可以想见，这些年来曹髦为了收回权力，一定做了无数努力，只可惜全都化为泡影。眼见着回天无力，曹髦决定使出最后一招，以期玉石俱焚，同归于尽。<br><br><b>他想出的办法，是自己带人去刺杀司马昭。</b>司马昭不论再怎么篡权，终究是臣下；他曹髦再是个傀儡，也依然是名正言顺的大魏皇帝。曹髦笃定，自己这是出其不意的带兵杀入司马昭府中，周围人一时惊呆，不敢近身，或许就能在众目睽睽之下，刺死司马昭！<br><br>临行前，曹髦将自己的计划告诉了近身的大臣：<b>侍中王沈、尚书王经、散骑常侍王业。</b>其中，王经力劝曹髦不可莽撞行事。王经说，如今权在司马一门，已经三代；而且宿卫空虚，皇上您上哪去找人跟你一起杀敌呢？到时候万一有什么意外，后果不堪设想。但曹髦不听劝阻，径自便去禀报太后。<br><br>被吓傻了的三人半天才回过神来，王沈和王业赶忙跑去把消息报告给司马昭——两人本来是叫王经去的，但王经死活不去。后来，王经全家被司马昭所杀——司马昭听闻后大惊，急忙派人阻拦曹髦。<br><br>曹髦当时带着的侍卫和奴仆加起来大约共有几百人，正准备出宫。他们最先碰到了司马昭的弟弟司马伷的兵。司马伷果然已经被吓傻，手下也在一通苛责叫骂中四散奔逃。<br><br>但还没走出宫门，曹髦就又碰到了带兵赶来的中护军贾充。曹髦亲自上阵，士兵们不敢阻拦，纷纷退散。<br><br>这时，太子舍人成济问贾充怎么办？贾充说，司马公养你们是干什么用的！还问什么问！</p><p><br></p><p><b>得到了命令的成济于是上前一剑，直接刺死了曹髦。</b></p><p><br></p><p>历代杀皇帝的事并不少见，有用毒酒的，有用白绫的，也有用刀剑的，但是，<b>臣子在公开场合直接刺死皇帝，这种事自开天辟地以来却是头一遭。</b>司马昭听到消息后，直接吓得瘫倒在地。太傅司马孚则跑到宫里，抱着曹髦的尸体大哭，“杀陛下者，臣之罪也！”<br><br>不过司马昭的这种反应，其实是多虑了。其时司马氏权威日深，满朝文武提出的最为严格的要求，也不过是陈泰所提的“杀贾充”——而魏廷威严日削，贾充在司马昭的庇护之下，居然也侥幸过关。<br><br>最后，只有实际动手的成济成了替罪羔羊。<br></p><figure><img src="https://pic4.zhimg.com/v2-001e3d10be50be6be17d70d28fa6face_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="720" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic4.zhimg.com/v2-001e3d10be50be6be17d70d28fa6face_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><hr><p><b>为何历来的篡位者总是喜欢立小皇帝？</b></p><p><br></p><p>有一种说法认为，在于小皇帝好控制。这种说法虽然对，但并不全面。小皇帝并不一定都是那么听话的，曹髦就是一个反例。<br><br><b>小皇帝的特点，不在于年幼无知，而是在于少年人不成熟的心性。</b>不成熟，就意味着处事时不够周密，漏洞百出的反抗更容易被识破。<br><br>曹髦已经算是傀儡皇帝中的佼佼者了，在前后X年的皇帝生涯中，他一直在谋划重新夺权。但纵观整个过程，对手太强大固然是一个绕不开的客观存在，曹髦自己在其中的表现也并不出彩，他存在的问题和缺点，实在是太大太多。<br><br><b>首 先 ，少年人心性，心中难以藏事</b>。<br><br>所谋者越大，所行者越慎，曹髦面对着司马氏的篡权，心中有所不满是理所当然的。但是，将这种不满到处发泄出来，却绝不是一个好办法。<br><br>与诸儒辩论少康和刘邦优劣、做《潜龙诗》，这种做法，只会平白让对方产生警惕，而于大事没有丝毫助益，实在是得不偿失。过早地让司马昭产生警觉，并因此而有戒备，这是曹髦的第一大失策。<br></p><p><b>其 次 ，所托非人。</b><br><br>曹髦先后拉拢和信任的人，如司马望、王沈、钟会等，没有一个取得成功。<br><br>而这，也正是历代权臣选择小皇帝们时的一项重要考虑：<b>由外藩入继的幼年宗室，基本上不会有自己的基本班底。</b>皇帝自己就算能力再高，也需要有人帮扶，而皇帝如果年纪太小，那么基本上就找不到这种人。<br><br><b>皇帝想要依靠的人，都不该是靠利益打动的</b>。毕竟他们已经失了先手，论以利惑人，对方肯定开得起更高的价格。因此，皇帝能够倚靠的，必须是在价值上认同他，在精神上臣服他，发自内心真正想帮他夺回权力的人。<br><br>但这种人，其实又很难培养。你想想看，一个十几岁的半大小子，要怎样才能说得动成年人为他抛头颅洒热血？</p><p><br></p><blockquote>因此，<b>皇族在夺回政权时，最为可靠的其实是宗室。</b>只有宗室，才真正是与皇帝一损俱损一荣俱荣的。<br><br>但可惜的是，曹魏皇族的这条路，却早就被堵死了。司马懿还活着的时候，就已将曹魏皇族全部圈禁于邺城。而远支宗室，在之前也已被屠戮殆尽。</blockquote><p><br>因此曹髦所能倚靠，仅仅是几个近臣。这其中，钟会的狼子野心自不待言；告密的王沈，在曹髦死后不久即升任豫州刺史。<br><br>只有王经，曾劝诫曹髦隐忍，也不愿意向司马昭告密——他应该是司马昭派在曹髦身边做监视用的，但最终被曹髦成功拉拢。只不过，这种倒戈的作用并不大。王经的所作所为不仅于事无补，事后还被杀了全家。<br><br><b>再其次，自己亲自上阵带人冲杀，实在是鲁莽行为。</b><br><br>曹髦即便能笃定自己皇帝的身份是护身符，但重赏之下必有勇夫，战场上，总有成济之流的存在，杀红了眼便会突破底线。<br><br>虽说司马氏此时已经全面掌握局面，曹髦再等下去也是死路一条。<b>但是，无路可走并不意味着就一定要铤而走险。</b>一如王经所谏，也如后事所证，一旦失败，后果不堪设想。<br><br>不管再怎么冒险，都不该把自己搭进去，毕竟只要活着就有希望，而死了就什么都没了。<br></p><figure><img src="https://pic4.zhimg.com/v2-26dab420764a2d7f90f5363b08667f54_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="480" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic4.zhimg.com/v2-26dab420764a2d7f90f5363b08667f54_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><hr><p>在这些事上，<b>曹髦其实是有前辈高人可以借鉴的</b>，而且这个高人距离他的时代也并不远。只是可惜，他没有学到人家的经验。</p><p><br></p><p><b>这位高人，就是汉献帝刘协。</b><br><br>刘协在继位时也是傀儡，但人家硬生生从小傀儡做到了老傀儡。数遍中国古代历史，傀儡皇帝能做近三十年的，仅此一例。<br><br>并不是因为献帝运气好，也没有仰仗曹操的宽宏大度，而是献帝行事巧妙，虽然久经变故，但最终成功的保护住了自己。<br><br>献帝早年颠沛流离，饿到没东西吃，乱军甚至能从皇后的手中抢东西；并曾被追兵逼迫仓皇渡河，差点沉船......这些经历，都是曹髦所不能想象的。<br><br>然而，<b>苦难并没有击垮献帝，反而铸就了他坚毅隐忍的品格。</b>回顾献帝一生，先后经历的权臣有董卓、李傕、杨奉、曹操。除曹操外，献帝成功从前三人手中脱险。<br><br>即便是在曹操的控制之下，献帝也先后挑动了三次反抗。尤其是在建安二十三年，此时献帝在曹操控制下已经二十多年，但他依然有能力在众多的曹操眼线中，拉拢到忠实于自己的人。</p><p><br><b>再转回来看曹髦：</b></p><p><br>在曹髦身上发生的事迹，以一个更大的视角来看，是皇权旁落时皇帝和权臣之间的争斗。这其中的成功与失败，牵涉颇多，我们今天只分析曹髦失败原因中的一个因素——这个因素，甚至都不是主要因素，但在曹髦身上的表现，却特别典型：<b>年轻人的冲动。</b><br><br>相较于曹髦，汉献帝所处的环境恶劣得多。但纵观献帝在一系列事情上的处理，手段却远比曹髦要来得熟练，结果也比曹髦的冲动强太多。<br><br>在曹髦身上，可以明显看到的，是年轻人的一些共性，比如：性急、冒失、藏不住心事、嫉恶如仇等等。<br><br><b>所有这些，与其说是缺点，还不如说是弱点。</b>所谓缺点，就是你身上做得不对的地方，应该予以纠正。而所谓弱点，则不是在讨论对错，只是在分析利弊时，找出可以改善的部分。<br><br>性急冒失，并不是多大的缺陷，但如果能平和稳重一些，肯定更好；嫉恶如仇，固然可以体现出一个人正直的本性，但是否真的需要“如仇”，却是一个度的问题。<br><br>年轻人身上的这些“毛病”，大部分都会随着年纪的增长和阅历的丰富而逐渐褪去。取而代之的，是更为沉稳、老练的举止做派——<b>这也正是一个人走向成熟的过程</b>，通过磨炼心性，变得更沉得住气，更藏得住事。<br><br>你可以把这理解成是对世俗的妥协——这种妥协，你或许是看不上的。但是，它确实能让你在这个世俗的世界中，活得相对容易许多。<br><br><b>纵观曹髦短暂的一生，他终究吃了年轻的亏。</b>作为一个血气方刚的年轻人，他身上洋溢着的是年轻人的激情，血液里流淌着的是对曹魏的责任。但单纯年轻如他，却根本不可能是老练圆滑的司马昭的对手。<br><br><b>他们的年龄之差，决定了他们的阅历之差，这是一道抹不去的鸿沟。</b><br><br>而这也正是司马师选择一个年轻人做傀儡的真正原因，年轻人身上有太多的弱点，太容易被世故者加以利用。<br><br>当然会有人对此愤愤不平，生气于世道的不公。但这个世界很多时候就是这般的冷酷无情。弱肉强食，你弱，所以你被欺负。<br><br>因此，年轻人才需要历练，需要成长，需要磨炼心性，需要用更圆滑的手段去处理世事。<br><br>这不是要教你变坏，而是想说：<b>手段不是目的，方法也不是本心</b>。就好比碰到恃强凌弱的场景，你不一定非得是见义勇为才是正直；面对倒在街边的老人，也不是只有救或者不管两个选择……<br><br><b>重要的，</b><br><b>是坚守住自己的正直和善良，</b><br><br><b>但在此基础之上，</b><br><b>手段和方法可以更加灵活。</b><br><br>成长，从来就不是一场轻易的转身。<br></p><figure><img src="https://pic1.zhimg.com/v2-37adaf5cd6680950620296cb090060e2_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="625" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic1.zhimg.com/v2-37adaf5cd6680950620296cb090060e2_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><hr><p><br><b>番外 | 我们的说书时间</b></p><p><br></p><ul><li><b>壹</b></li></ul><p><br></p><p>几乎跟曹髦同一时期，孙吴也正在经历皇帝和权臣的斗争。<br><br><br>孙权死后，将幼子孙亮托孤于诸葛恪。但第二年诸葛恪就被孙亮杀死，孙峻、孙綝先后执政。<br><br>孙亮长大以后，不满于孙綝的专权，企图发动政变夺回权力。但孙綝先发制人，直接废除了孙亮。<br><br><b>然后，孙綝犯了一个致命的错误：改立孙休为帝。</b><br><br>孙休是除孙亮外，孙权唯一在世的儿子，当时已经24岁。孙休的继位，当然具有天然的合法性。但这个合法性，却给孙綝带来了要命的威胁。<br><br>即便孙休是孙綝所立，两人之间的矛盾也天然存在，不可消除。因此，孙休在继位后，一方面给孙綝以恩宠，一方面隐忍不发，静待时机。<br><br>转机首先出现在政事上：孙綝于政事一窍不通，在执政后经常犯错，孙休因此顺势塞了一个人跟孙綝共同处理政事。<br><br>说是共同处理，但不久孙綝就丧失了对政事的掌握。<b>权力这种东西，并不是说你在职位上就是你的。你得真的挑得起来，才能真正握得住。</b>打个比方，你们部门有两位正职领导，一个兢兢业业，勤勉认真，做事公道；另一个对业务完全不通，频频出糗。时间长了，肯定第二个人就变成挂名的了，不会再处理任何实际事务。<br><br>这时，有人向孙休告发孙綝谋反。孙休问都没问，直接就把人给抓了起来，送到孙綝那里让他处理。这种表面上的推心置腹，让孙綝觉得心胆俱裂。<br><br>在杀了告发者之后，孙綝越想越觉得待在建康太危险，于是自请出外，想离开建康这个是非窝。因为君臣一旦相疑，孙綝在得不到大多数人支持的情况下，周围处处都是危机，随时都有可能会被暗杀。<br><br>孙綝于是请求镇守武昌，孙休也痛快的答应了，并给了他最大的恩惠：留在建康的人，随他轻易安排布置；要带走的人和兵器，也准他随意挑选。孙休的目的，其实就是先把孙綝赶出建康，然后再除掉其他的党羽就容易得多了。<br><br>但准备好了之后，孙綝又有点不想走了。孙休想到的，他也想到了，这是一个两难的局：留在建康，可以震慑孙休，但自己很不安全；离开建康，安全倒是安全了，但孙休就会有脱离控制的可能。<br><br>犹豫不决之中，时间到了年底。<br><br>孙休在宫内举办年底的腊会，邀请孙綝赴宴。孙綝百般推辞，但无可奈何，还是被接到了宫中。<br><br>见过孙休以后，孙綝谎称家中着火，要立即出宫。但孙休好不容易才把他给骗进来，怎么可能再放他出去，此时宫里早已布满兵士。孙綝随即被杀，孙休顺利夺回权力。</p><p><br></p><ul><li><b>这里不妨对比一下孙休的成功与曹髦的失败：</b></li></ul><p><br></p><p><b>首 先 ，对手的实力差距巨大，这是主因。</b>孙綝所能控制的，其实只有禁军，他对朝廷的控制力要远逊于司马氏；而司马氏对于曹魏政权的控制则是全方面的。<br><br><b>其 次 ，司马氏的夺权篡位之路，是有目标有过程，循序渐进的。</b>曹髦若一直等下去，只能是坐以待毙。但孙休却不同，他面对的孙綝其实只是个莽夫，也没有多少追求。因此，孙休才可以慢慢等待机会，静候对手出错。<br><br><b>最 后 ，还是个人处事风格的原因。</b>回看孙休杀孙綝的整个过程，我们能看到的是王者的沉稳。他有条不紊，步步为营，内紧外松，表面上不露声色，内里却积极准备，丝毫没有马虎。再对比一下曹髦对于司马昭的处理，处处透着急躁，很早便被司马氏发现了他的欲求，并因此而早做准备。<br></p><figure><img src="https://pic3.zhimg.com/v2-80907c41911f395099744d5deba784e9_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="640" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic3.zhimg.com/v2-80907c41911f395099744d5deba784e9_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><p><br></p><ul><li><b>贰</b></li></ul><p><br></p><p><b>小皇帝该如何对付权臣？</b><br><br>虽然以我们现代人看来，“封建社会”中这种例子不胜枚举，但事实上，在不同的时代，方法也是不同的。而这其中，<b>关键因素是文官集团的崛起。</b><br><br>在帝制时代的早期，职业文官还远远没有作为一个成熟的文官集团而出现。也就是说，文官集团整体上，是没有自己固有的利益格局和价值取向的。<br><br>因此，皇帝在面对权臣之时，基本上都是单兵作战。朝中大员，绝大多数只会坐观虎斗，明哲保身。<br><br><b>直了宋代文官集团开始成型以后，这种局面才有了根本性的逆转。</b><br><br>宋朝以后，只要是在文官集团强大的时代，就几乎不会再有权臣可以凌逼帝位的事情发生。<br><br>宋朝的蔡京、秦桧、史弥远、贾似道，明朝的刘谨、杨廷和、严嵩、魏忠贤，在位时都是权倾天下的人物。但即便权势滔天，他们也无法威胁到皇帝自身的地位。</p><p><br></p><blockquote>这里可以举<b>杨廷和</b>的例子： <br><br>明武宗突然去世以后，大明王朝经历了20多天没有皇帝的日子。在这些时日里，杨廷和统筹内外，兼理上下，迎立藩王进京入继大宝。<br><br>后来的嘉靖皇帝此时只有16岁，尚未进京，但却能在礼仪问题上跟杨廷和据理力争，并最终取得成功。这种情形，放在汉魏之间是想都不敢想的事。设想一下，假如曹髦在继承帝位前敢跟司马氏这么横，那么等待他的可能就是暴死。</blockquote><p><br></p><p>这其中的关键差别，就在于文官集团的强大。<br><br>杨廷和权力再大，在文臣政治的背景下，也只能是谨守人臣本分，代行君权。唯有如此，才能得到整个文官政府的支持。<br><br><b>至于先代前辈夺权所倚靠的军事力量，实际上也是掌握在文官政府手中，</b>而非杨廷和个人手中的。如果他表露出任何企图废帝自立的心思，立马就会丧失整个文官集团对他的支持。<br><br>因此，杨廷和在与嗣皇帝的对立中，天然就处于劣势。<br><br>当然，这种文官集团的强大也不是没有代价的。一样的经典案例也发生在嘉靖时代，在“大礼议”之争中，嘉靖就几乎受到了整个文官集团的反对。<br><br><b>一个利益集团在成型以后，会形成它自己的利益格局和价值取向，</b>任何有违于这两者的行为，都会遭到反扑。<br><br>当然，反扑能否成功，那就是另外一回事了。</p><figure><img src="https://pic4.zhimg.com/v2-30fefb16118c4e6e7c1186c2adac5a9f_b.jpg" data-size="small" data-rawwidth="886" data-rawheight="720" class="origin_image zh-lightbox-thumb" width="886" data-original="https://pic4.zhimg.com/v2-30fefb16118c4e6e7c1186c2adac5a9f_r.jpg"><figcaption>（图片来源于网络）</figcaption></figure><p><br></p><ul><li><b>叁</b></li></ul><p><br></p><p>最后的最后，再来发一点小感慨。<br><br>干脏活，绝对不是一夜之间就换取荣华富贵的终南捷径。<b>这条路的终点，只会是断头台。</b>因为上位者为了干脏活带上的白手套，在脏活干完之后，是肯定要丢掉的。<br><br>就好比成济，帮着司马昭做了最艰难的事，解决了最大的问题，但换回来的，只能是夷三族。<br><br>只是可惜，千载之下，总是有人记吃不记打。<br></p><figure><img src="https://pic1.zhimg.com/v2-ed8cee67d38bd12c1642e3cded7dbae3_b.jpg" data-size="normal" data-rawwidth="960" data-rawheight="640" class="origin_image zh-lightbox-thumb" width="960" data-original="https://pic1.zhimg.com/v2-ed8cee67d38bd12c1642e3cded7dbae3_r.jpg"><figcaption>（图片来源于网络） </figcaption></figure><p><br></p><p><b>- Review - </b></p><p><a href="http://link.zhihu.com/?target=http%3A//mp.weixin.qq.com/s%3F__biz%3DMzAxNzg4MDMzMg%3D%3D%26mid%3D2247484531%26idx%3D1%26sn%3D4c2f4dde45c53f48b5ca28f5398fe447%26chksm%3D9bdf8010aca8090662ed05307cc4e4b8be60ff73b079e8ee4a1992ad8a506e8ce5b8959d5d12%26scene%3D21%23wechat_redirect" class=" wrap external" target="_blank" rel="nofollow noreferrer">太子难当</a><br><a href="http://link.zhihu.com/?target=http%3A//mp.weixin.qq.com/s%3F__biz%3DMzAxNzg4MDMzMg%3D%3D%26mid%3D2247484108%26idx%3D1%26sn%3D22389579d74f825741ca1282bc81714e%26chksm%3D9bdf86afaca80fb98669fae45f987deeda176b659b224078856a4d2ba1ff6df6f6b15b837d50%26scene%3D21%23wechat_redirect" class=" wrap external" target="_blank" rel="nofollow noreferrer">董卓之死</a><br><a href="http://link.zhihu.com/?target=http%3A//mp.weixin.qq.com/s%3F__biz%3DMzAxNzg4MDMzMg%3D%3D%26mid%3D2247484792%26idx%3D1%26sn%3D5bd265314a477cfe22579f288a467ef5%26chksm%3D9bdf811baca8080d2d798b67c21cd018b189aff5b0b5c68f6c517672ce9666584091bd44f60b%26scene%3D21%23wechat_redirect" class=" wrap external" target="_blank" rel="nofollow noreferrer">东吴乱局</a></p><p><br></p><p><b>- More -</b></p><blockquote><b>文字内容原创 <br>谢绝未经授权转载</b><br><br>三国之前内容已归档入 <br><b>微信公号“喻以流年” </b><br>不再搬运<br><br>图片来源于网络<br>版权属于原作者<br>如有不妥请告知删除</blockquote>'
      | string
    column: {
      updated: 1458209676 | number
      author: {
        is_followed: false | boolean
        type: 'people' | string
        name: '喻以流年' | string
        headline: '在《资治通鉴》里，探寻当下与未来。欢迎@微信公号：喻以流年。' | string
        url_token: 'yyln2016' | string
        user_type: 'people' | string
        vip_info: null
        url: 'https://api.zhihu.com/people/6af47a6193b0f0e1806163160b1e1842' | string
        avatar_url: 'https://pic2.zhimg.com/50/v2-d9c49d5e0c9bcb66c7d03f4e7f978b47_s.jpg' | string
        is_following: false | boolean
        is_org: false | boolean
        gender: 0 | number
        badge: []
        id: '6af47a6193b0f0e1806163160b1e1842' | string
      }
      url: '/columns/yyln2016' | string
      comment_permission: 'all' | string
      title: '喻以流年' | string
      image_url: 'https://pic2.zhimg.com/50/v2-d9c49d5e0c9bcb66c7d03f4e7f978b47.jpg' | string
      id: 'yyln2016' | string
    }
    comment_count: 3 | number
    image_url: 'https://pic2.zhimg.com/50/v2-10dd98e75c02b9372d0f484dab2164d7_hd.jpg' | string
    linkbox: {
      url: '' | string
      category: '' | string
      pic: '' | string
      title: '' | string
    }
    excerpt_new:
      | '众欲退，骑督成倅弟太子舍人济问充曰：“事急矣，当云何？”充曰；“司马公畜养汝等，正为今日。今日之事，无所问也！”济即抽戈前刺帝，殒于车下。 《资治通鉴•卷七十七•魏纪九》 皇帝死社稷，这事说起来容易做起来难。 有很多人佩服崇祯皇帝，因为他在北京…'
      | string
    excerpt_title: '' | string
    preview_text: '' | string
    voting: 0 | number
    type: 'article' | string
  }
  action_text: '赞了文章' | string
  actor: {
    is_followed: false | boolean
    type: 'people' | string
    name: '姚泽源' | string
    headline: '专业填坑' | string
    url_token: '404-Page-Not-found' | string
    user_type: 'people' | string
    vip_info: {
      is_vip: false | boolean
    }
    url: 'https://api.zhihu.com/people/57842aac37ccd0de3965f9b6e17cb555' | string
    avatar_url: 'https://pic4.zhimg.com/50/dce9dde98c91a4d1e3cb86e627ecca86_s.jpg' | string
    is_following: false | boolean
    is_org: false | boolean
    gender: 1 | number
    badge: []
    id: '57842aac37ccd0de3965f9b6e17cb555' | string
  }
  verb: 'MEMBER_VOTEUP_ARTICLE' | string
  created_time: 1548462476 | number
  type: 'feed' | string
  id: 1548462476 | number
}
