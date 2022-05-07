<template>
  <div class="page3">
  <h1>Speech, Language, and Literacy</h1>
  <p><strong>Pediatric Speech-Language Pathologist </strong> - creating Speech, Language, and Literacy Resources for the classroom, speech therapy, and language therapy.</p>

      <div class="accordion" role="tablist">

        <b-card no-body class="mb-1" v-for="(accord, s) in accordion" :key="accord.id">
          <b-card-header header-tag="header" class="p.s" role="tab">
            <b-button block v-b-toggle="'accord' + accordion.id"  variant="info">{{accord.title}}</b-button>
          </b-card-header>
          <b-collapse :id="'accord' + accordion.id" accordion="my-accordion" role="tabpanel" >
            <b-card-body>
            <b-img :src="accord.pic"></b-img>
                <hr class="featurette-divider">
              <b-card-text>{{ accord.text }}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
    accordion: [
      { id: 0, title: 'Speech', pic: require('@/assets/frog.jpg'), text: '  Target spatial concepts using 12 prepositions (positional words) with these frog and umbrella themed prepositional or positional phrase task cards, clip cards, puzzles, and sentence strip activity. Work on grammar skills with these hands-on & digital activities that can be paired with any frog, rain or spring-themed lesson plan or story. Digital Slide activities are also included with drag & drop activities and fill-in-the-blank tasks. Digital Activities are compatible with PowerPoint and Google Slides™.' },
      { id: 1, title: 'Language', pic: require('@/assets/snowman.jpg'), text: '  Snowmen at Work by Caralyn Buehner is a language rich winter and snowman themed story. This resource targets describing vocabulary, inference clues, comparing & contrasting, sorting winter and summer clothing, sequencing, story retelling, plural nouns, social skills, phonological/phonemic awareness (compound words), and comprehension questions. Step-by-step lesson directions are provided. This book companion can be differentiated for a variety of elementary grade levels. Digital Slide activities are included to lead discussions about the story AND to play various drag & drop games.'  },
      { id: 2, title: 'Literacy', pic: require('@/assets/shark.jpg'), text: 'This back to school themed literacy resource contains two vocabulary based book companions for the books Clark the Shark and The Name Jar. Follow the six step, scripted vocabulary lesson activities to engage students in discussing Tier 2 vocabulary words. Reading response worksheets are included with visual symbols to support comprehension.'  }
     ]
    }
  }
}
</script>
