<script setup>
//Ages 16 - 21 info
import { store } from '../store/store.js'

console.log(store)
</script>

<template>
  <div class="page">
    <div class="card">
      <header class="card-header">Ball Exhibit</header>
      <img
        class="card-image"
        alt="Fly over of Ball State University "
        src="/BallStateFlyOver.jpg"
      />
      <div class="text-body">
        <div v-if="store.mode === 'easy'">
          <header>Who Were the Ball Brothers?</header>
          The Ball Brothers were five brothers who became famous for making glass jars—the kind your
          grandma might use for canning fruits and jams! Their company, Ball Corporation, started in
          the late 1800s and became very successful.
          <header>How Did They Help Start Ball State University?</header>
          In 1918, the Ball Brothers wanted to help their hometown of Muncie, Indiana, grow. They
          donated money and land to a small teachers' college that was just starting. At first, the
          school had a long, tricky name: Indiana State Normal School Eastern Division. But in 1922,
          the state renamed it Ball Teachers College to thank the brothers for their help. Later, in
          1965, the school grew bigger and became a full university—that’s when it got the name we
          know today: Ball State University!
        </div>
        <div v-if="store.mode === 'medium'">
          <header>Ball Brothers and Their Legacy</header>
          The Ball Brothers—Lucius, William, Edmund, Frank, and George—were entrepreneurs who built
          the Ball Corporation, a major glass manufacturing company known for its iconic mason jars.
          Their success allowed them to give back to their community in Muncie, Indiana.
          <header>The Founding of Ball State University</header>
          In 1918, the Ball Brothers donated land and funds to support a new branch of Indiana State
          Normal School (a school for training teachers). This campus was originally called the
          Indiana State Normal School Eastern Division. By 1922, the Indiana government recognized
          the brothers' contributions and renamed the school Ball Teachers College. Over time, the
          college expanded its programs beyond teacher education. In 1965, it achieved university
          status and was officially renamed Ball State University in honor of the family’s
          generosity. Today, Ball State is known for its strong academics and beautiful campus, all
          thanks to the vision of the Ball Brothers.
        </div>
        <div v-if="store.mode === 'hard'">
          <header>The Ball Brothers: Industrialists and Philanthropists</header>
          The five Ball Brothers—Lucius, William, Edmund, Frank, and George—founded the Ball
          Corporation in the late 19th century, revolutionizing glass jar production and becoming
          leaders in the packaging industry. Their wealth and influence allowed them to invest in
          education and community development in Muncie, Indiana.

          <header>The Establishment and Evolution of Ball State University</header>
          In 1918, the Ball Brothers donated a significant portion of their family estate, along
          with financial support, to establish the Indiana State Normal School Eastern Division, a
          teacher-training institution. Their donation was instrumental in securing the school’s
          future. By 1922, the Indiana General Assembly renamed it Ball Teachers College in
          recognition of their contributions. Over the decades, the institution expanded its
          curriculum, adding liberal arts, sciences, and professional programs. In 1965, after
          meeting state requirements for graduate programs and research, it was granted university
          status and renamed Ball State University.

          <header>Legacy and Impact</header>
          The Ball Brothers’ philanthropy laid the foundation for what is now a comprehensive public
          research university. Ball State continues to honor their legacy through programs in
          architecture, business, education, and the arts, serving over 20,000 students annually.
        </div>
      </div>
      <div>
        <router-link to="/bobross"><Button class="next-button" @click="">></Button></router-link>
      </div>
    </div>
  </div>
</template>

<style></style>
