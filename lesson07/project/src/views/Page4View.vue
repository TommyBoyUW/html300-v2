<template>
  <div class="page4">
    <h1>Speech Activities</h1>

  <hr class="featurette-divider">


  <div class="container">

    <div class="row" >
      <div class="col-sm-6 d-none d-sm-block" v-for="(top, x) in tops" :key="top.id">
          <b-img :src="top.pic"  class="img-fluid rounded mx-auto d-block"></b-img>
          <h2 class="text-center">{{top.title}}</h2>
          <p class="text-center">{{top.blurb}}</p>
        </div><!-- /.col-sm-6 -->
    </div><!-- /.row -->

  <hr class="featurette-divider">


    <div class="row">

      <div class="col-12 col-md-6 center-block" v-for="(mid, y) in mids" :key="mid.id">
        <b-img :src="mid.pic" class="rounded-circle img-fluid rounded mx-auto d-block"></b-img>
          <h2 class="text-center">{{mid.title}}</h2>
          <p>{{mid.blurb}}</p>
        </div><!-- /.col-md-6 -->
    </div><!-- /.row -->


  <hr class="featurette-divider">

    <div class="row">
      <div class="col-12 col-lg-3" v-for="(bottom, y) in bottoms" :key="bottom.id">
      <b-img :src="bottom.pic" width="500" height="500" background="#eee" color="#aaa" class="bd-placeholder-img-lg featurette-image img-fluid mx-auto"></b-img>
      <p class="lead">{{bottom.blurb}}</p>
      </div>
    </div>

  </div><!-- /.container -->

  </div>
</template>

<script>
export default {
  data() {
    return {
       tops: [
         {id: 0, title: 'Language', pic: require('@/assets/beehive.jpg'), blurb: 'Target describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions and to more confidently answer "who, what, where, when, and why" questions. This will help target vocabulary skills and answering WH questions during speech and language activities. The Describing Vocabulary resources includes digital slides of each page with drag & drop pieces are included. This is a must-have, year round bundle for any SLP, teacher, and parent.' },
         { id: 1, title: 'Literature', pic: require('@/assets/fly.jpg'), blurb: 'Language describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions and to more confidently answer "who, what, where, when, and why" questions. This will help target vocabulary skills and answering WH questions during speech and language activities. The Describing Vocabulary resources includes digital slides of each page with drag & drop pieces are included. This is a must-have, year round bundle for any SLP, teacher, and parent.'}
        ],
        mids: [
          {id: 0, title: 'Literacy', pic: require('@/assets/task.jpg'), blurb: 'Target describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions and to more confidently answer "who, what, where, when, and why" questions. This will help target vocabulary skills and answering WH questions during speech and language activities. The Describing Vocabulary resources includes digital slides of each page with drag & drop pieces are included. This is a must-have, year round bundle for any SLP, teacher, and parent.' },
          { id: 1, title: 'Literature', pic: require('@/assets/fly.jpg'), blurb: 'Language describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions and to more confidently answer "who, what, where, when, and why" questions. This will help target vocabulary skills and answering WH questions during speech and language activities. The Describing Vocabulary resources includes digital slides of each page with drag & drop pieces are included. This is a must-have, year round bundle for any SLP, teacher, and parent.'}
         ],
         bottoms: [
           {id: 0, pic: require('@/assets/task.jpg'), blurb: '352 Articulation Spring Raindrop Cards are included to target /p, b, t, d, m, n, k, g, f, v/ in all positions of words, /h/ and /w/ in the initial position of words, and CVC words in speech therapy. Students will enjoy adding raindrop picture cards to their umbrella, watering can, and/or cloud worksheets. Cut & glue worksheets for sorting sounds are also included for each speech sound. Color and black & white versions of each page are included. This is a great resource for spring themed articulation activities in speech therapy!' },
           {id: 1, pic: require('@/assets/fly.jpg'), blurb: 'Target describing vocabulary words by naming six to seven attributes and answering WH Questions (who, what, where, when, why) using these visual prompts in speech and language therapy. Learners can use these pictures to increase the number of characteristics or details in their vocabulary descriptions and to more confidently answer "who, what, where, when, and why" questions. This will help target vocabulary skills and answering WH questions during speech and language activities.'},
           {id: 2, pic: require('@/assets/task.jpg'), blurb: 'Target relational vocabulary, describing vocabulary, sorting items into categories, and inference clues while playing bingo with these spring themed language activities This spring-themed resource could be paired with almost any story about spring. Digital Slide activities are also included that are compatible with PowerPoint and Google Slides™.' },
           {id: 3, pic: require('@/assets/fly.jpg'), blurb: 'Vocabulary plays a critical role in reading comprehension. Planning for robust vocabulary lessons using literacy-based instruction can be time consuming. Save time planning and effectively teach Tier 2 vocabulary words with this pirate-themed product. This word meaning resource includes definitions, detailed vocabulary questions, examples of meanings in other contexts, a worksheet that can be used for assessment or vocabulary homework, as well as, two different reading response worksheets.'}
          ]
    };
  }
}
</script>
