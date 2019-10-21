<template>
  <div>
    <a-menu v-model="current"
            mode="horizontal">
      <a-menu-item key="one">
        One
      </a-menu-item>
      <a-menu-item key="two">
        Two
      </a-menu-item>
      <a-menu-item key="three">
        Three
      </a-menu-item>
      <a-menu-item key="four">
        Four
      </a-menu-item>
    </a-menu>
    <section>
      <article>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x250/cf4ccf/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Stone Giant</h2>
            <p>
              Coming to life as a chunk of stone, Tiny's origins are a mystery on which he continually speculates. He is a Stone Giant now, but what did he used to be? A splinter broken from a Golem's heel? A shard swept from a gargoyle-sculptor's workshop? A fragment of the Oracular Visage of Garthos? A deep curiosity drives him, and he travels the world tirelessly seeking his origins, his parentage, his people. As he roams, he gathers weight and size; the forces that weather lesser rocks, instead cause Tiny to grow and ever grow.
            </p>
            <p>
              以一团石头的形式出现的生命体，小小不断思索他的起源，但这始终是个谜。现在的他是个石巨人，但过去是什么呢？从土傀儡的脚后跟掉落的碎片？从制造石像鬼的工房被打扫出来的碎屑？神圣预言石的表层之砂？受到强烈的好奇心驱使，他不知疲倦的环游世界，寻找着他的起源，他的出身，和他的种族。在旅途中，他变得越来越庞大，不过路上的风雨吹打掉了他身上的石头，所以他不停的吸收新的岩石，永远在长大。
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x250/403640/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Spectre</h2>
            <p>
              Just as higher states of energy seek a lower level, the Spectre known as Mercurial is a being of intense and violent energy who finds herself irresistibly drawn to scenes of strife as they unfold in the physical world. While her normal spectral state transcends sensory limitations, each time she takes on a physical manifestation, she is stricken by a loss of self--though not of purpose. In the clash of combat, her identity shatters and reconfigures, and she begins to regain awareness. She grasps that she is Mercurial the Spectre--and that all of her Haunts are but shadows of the one true Spectre. Focus comes in the struggle for survival; her true mind reasserts itself; until in the final moments of victory or defeat, she transcends matter and is restored once more to her eternal form.
            </p>
            <p>
              和所有强大的能量都喜欢欺凌弱小一样，被称为墨丘利的幽鬼也是一个拥有着强横能量的存在，同样的，她对现实世界中的冲突和纷争无比着迷。然而她平时的幽鬼形态超越了常人的感知范围，因此每当她以实体形态出现时，她不得不损失一部分自我能量——尽管她也不愿意。在战斗中，她的自我意识逐渐散落并重新聚合，她也开始有了意识。她意识到了自己是幽鬼墨丘利——其他所有的鬼影都只是她自我的阴影。出于重新凝聚的打算，她开始专注，她的心智也在不断的成熟。只有等到她取得胜利或者彻底失败时，她那超物质的形态才会得以重聚。
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x250/cfaecf/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Ancient Apparition</h2>
            <p>
              Kaldr, the Ancient Apparition, is an image projected from outside time. He springs from the cold, infinite void that both predates the universe and awaits its end. Kaldr is, Kaldr was, Kaldr shall be...and what we perceive, powerful as it appears to us, is but the faintest faded echo of the true, eternal Kaldr. Some believe that as the cosmos ages and approaches its final moments, the brightness and power of Kaldr will also intensify--that the Ancient Apparition will grow younger and stronger as eternity's end draws nigh. His grip of ice will bring all matter to a stop, his image will cast a light too terrible to behold. An Apparition no longer!
            </p>
            <p>
              卡德尔，极寒幽魂，是时光之外的冰冷投影。他来自寒冷的无尽虚空，目睹宇宙诞生，见证宇宙终结。卡德尔是夕在，今在，永在的无上力量...我们的所有认知，所有自认为正确的强大的事物，在永恒的卡德尔看来，不过是最细微最无力的附和。有人相信，随着宇宙的老化并走向衰亡，卡德尔的力量和光芒也将变得更强——极寒幽魂将更加年轻，更加强大。他对冰霜的控制能够冻结一切事物，他的投影放出的光芒异常夺目。他将不再是幽魂，而是神!
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x380/0a020a/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Weaver</h2>
            <p>
              The fabric of creation needs constant care, lest it grow tattered; for when it unravels, whole worlds come undone. It is the work of the Weavers to keep the fabric tight, to repair worn spots in the mesh of reality. They also defend from the things that gnaw and lay their eggs in frayed regions, whose young can quickly devour an entire universe if the Weavers let their attention lapse. Skitskurr was a master Weaver, charged with keep one small patch of creation tightly woven and unfaded. But the job was not enough to satisfy. It nagged him that the original work of creation all lay in the past; the Loom had done its work and travelled on. He wanted to create rather than merely maintain--to weave worlds of his own devising. He began making small changes to his domain, but the thrill of creation proved addictive, and his strokes became bolder, pulling against the pattern that the Loom had woven. The guardians came, with their scissors, and Weaver's world was pared off, snipped from the cosmic tapestry, which they rewove without him in it. Skitskurr found himself alone, apart from his kind, a state that would have been torment for any other Weaver. But Skitskurr rejoiced, for now he was free. Free to create for himself, to begin anew. The raw materials he needed to weave a new reality were all around him. All he had to do was tear apart this old world at the seams.
            </p>
            <p>
              创世之纱需要长期细心的照料，以防止其变得残破；因为一旦它散开了，整个世界就将毁于一旦。编织者的工作就是保持创世之纱的紧密，用现实之网修补它的破损。他们同样要防止那些在创世之纱的缺口上产卵或者侵蚀创世之纱的虫子，只要编织者稍微分心，这些家伙的幼虫就能吞噬掉整个宇宙。斯吉茨格尔是一名大师级的编织者，负责维护一块小补丁的紧密。然而这项任务并不能满足他，他经常唠叨过去那些原始的创造工作，对干完活就走人的世界纺织者也是颇有微词。他想创造，不想只是维护——他想按自己的设计编织出自己的世界。他开始在他负责的区域上做手脚，逐渐不能自拔，他的胆子也愈发的大，甚至私自改动了世界纺织者编织的图案。最后，守卫者来了，毁掉了编织者所作的一切，直接从创世之纱上去除了这一块，然后重新编织，却不让他参与其中。斯吉茨格尔现在孤身一人，被种群所弃，换做任何其他编织者，都会备受折磨。然而斯吉茨格尔却无比愉悦，因为他终于自由了，能够自由的创造，重头开始。他创造新世界所需的所有材料都触手可及。他只需要从缺口处将现在的世界撕裂。
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x220/d9c8d9/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Doom Bringer</h2>
            <p>
              A towering being of unimaginable evil, Lucifer the Doom Bringer marches the farthest reaches of the world in search of new and exciting ways to satisfy his taste for unrest and greed. Once a feared leader in the army of the Purgers of the Realm, Doom left his position as a comrade of fellow demonic warriors as he simply could not bear the thought of sharing the glory of pillaging and feats of destruction with other lowly demons. Despite no longer leading an army, Doom is a fearful foe in combat, possessing mastery of hellish magic and physical attacks - eventually, the world will belong to Doom.
            </p>
            <p>
              一个邪恶程度超乎想象的存在——末日使者路西法在世界各地不停寻找着新的方法来满足他的贪婪和对骚乱的热衷。他曾经是其所在国度中备受畏惧的灭劫军团统帅，然而末日使者后来却离开了他的将军职位，丢下了一帮恶魔战士，原因很简单，他无法与一帮低级恶魔分享掠夺和毁灭带来的所谓荣耀。尽管他不再是军队的统帅了，末日使者在战斗中仍然是个令人恐惧的对手，他拥有极高的肉搏技巧，还掌握了邪恶的地狱魔法——最终，整个世界将为他所有。
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x350/853885/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Dragon Knight</h2>
            <p>
              After years on the trail of a legendary Eldwurm, the Knight Davion found himself facing a disappointing foe: the dreaded Slyrak had grown ancient and frail, its wings tattered, its few remaining scales stricken with scale-rot, its fangs ground to nubs, and its fire-gouts no more threatening than a pack of wet matchsticks. Seeing no honor to be gained in dragon-murder, Knight Davion prepared to turn away and leave his old foe to die in peace. But a voice crept into his thoughts, and Slyrak gave a whispered plea that Davion might honor him with death in combat. Davion agreed, and found himself rewarded beyond expectation for his act of mercy: As he sank his blade in Slyrak's breast, the dragon pierced Davion's throat with a talon. As their blood mingled, Slyrak sent his power out along the Blood Route, sending all its strength and centuries of wisdom to the knight. The dragon's death sealed their bond and Dragon Knight was born. The ancient power slumbers in the Dragon Knight Davion, waking when he calls it. Or perhaps it is the Dragon that calls the Knight...
            </p>
            <p>
              在传说中的龙冢——厄尔多姆试炼多年以后，骑士戴维安发现自己的对手愈发不能令他满意了：过去那个让人闻风丧胆的神龙斯莱瑞克已经变得苍老而脆弱，它的双翼已经残破，它所剩不多的龙鳞也开始腐烂，它的爪子变得肿大老化，它曾经引以为傲的火焰吐息现在威力和进水了的火柴差不多。戴维安觉得这样的屠龙行径已经不能给他带来任何荣誉，转身就要离开，让他的老对手安静的死去。但是他的脑海里传来了一个声音，斯莱瑞克低声的乞求着，让戴维安允许它光荣的战死。戴维安同意了，随即发现他的怜悯给他带来了意外的收获：当他将手中的锋刃刺入斯莱瑞克的胸膛时，龙使出最后的力量用龙爪刺穿了他的喉咙，随着他们血液的融合，斯莱瑞克将它所有的力量随着血液赐予了戴维安，也赐予了他龙族千万年来的智慧。龙的死去将他们的命运完全的绑定在了一起，龙骑士横空出世。古老的力量在龙骑士戴维安的身体里沉睡着，当他需要力量时则完全复苏。而龙族之力，也唤醒了骑士的所有力量...
            </p>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="6">
            <div><img src="https://dummyimage.com/250x420/b37fb3/fff"></div>
          </a-col>
          <a-col :span="18">
            <h2>Venomancer</h2>
            <p>
              In the Acid Jungles of Jidi Isle, poison runs in the veins and bubbles in the guts of every creature that scuttles, climbs or swoops between fluorescent vines dripping with caustic sap. Yet even in this toxic menagerie, Venomancer is acknowledged as the most venomous. Ages ago, an Herbalist named Lesale crossed the Bay of Fradj by coracle, searching for potent essences that might be extracted from bark and root, and found instead a nightmare transformation. Two leagues into Jidi's jungle, Lesale encountered a reptile camouflaged as an epiphyte, which stung him as he mistakenly plucked it. In desperation, he used his partial knowledge of the jungle's herbal bounty, mixing the venom of the (swiftly throttled) reptile with the nectar of an armored orchid, to compound an antidote. In the moments before a black paralysis claimed him completely, he injected himself by orchid-thorn, and instantly fell into a coma. Seventeen years later, something stirred in the spot where he had fallen, throwing off the years' accumulation of humus: Venomancer. Lesale the Herbalist no longer--but Lesale the Deathbringer. His mind was all but erased, and his flesh had been consumed and replaced by a new type of matter--one fusing the venom of the reptile with the poisonous integument of the orchid. Jidi's Acid Jungles knew a new master, one before whom even the most vicious predators soon learned to bow or burrow for their lives. The lurid isle proved too confining, and some human hunger deep in the heart of the Venomancer drove Lesale out in search of new poisons--and new deaths to bring.
            </p>
            <p>
              在基迪岛上的浓酸密林中，在所有生物的体内，包括植物的根茎，动物的内脏中，都流淌着致命的腐蚀剧毒。然而，就算在这种毒巢里，剧毒术士也是公认的万毒之王。多年以前，一个叫做里瑟尔的植物学家乘坐小舟跨越弗拉基海湾，想要从植物的根须中提取出一种强力药剂，结果他却遭遇了噩梦一般的变故。在深入到基迪岛密林中数英里时，里瑟尔遇到了一种伪装成寄生植物的毒性爬虫，当他想把爬虫扯下来的时候，被爬虫狠狠的蛰了。绝望之际，他用他对丛林植物仅有的认知，飞快地掐住这只爬虫后，将它的毒液和一种带甲兰花的花蜜混合，合成了解毒剂。他用兰花的尖刺为自己注射了解毒剂，然后立即陷入昏迷，并且逐渐陷入了全身完全麻木的状态。十七年后，在他倒下的地方，从多年积累的腐土中钻出某个东西：剧毒术士。草药学家里瑟尔已经不复存在，现在他是死亡使者里瑟尔。他的记忆几乎都没有了，他原来的肉体已经毁灭，现在被一种新的物质所替代--融合了那只爬虫的毒液和兰花的毒性外皮。基迪岛的浓酸丛林现在有了新的主人，过去最剧毒的捕食者在他面前都只能逃走或臣服求饶。这个可怕的岛屿毕竟太有限了，里瑟尔受到内心深处残留的人类的饥渴驱使，离开了岛屿，去寻找新的毒物，以及带来新的死亡。
            </p>
          </a-col>
        </a-row>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HTMLToPDF',
  data () {
    return {
      name: '生成PDF文件',
      current: ['mail'],
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
