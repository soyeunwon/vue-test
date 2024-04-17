<template>
  <section id="about" class="container">
    <h1>About</h1>
    <div class="row gx-5">
      <figure class="col-md-6">
        <img src="../assets/images/profile.jpg" />
        <figcaption>About</figcaption>
      </figure>
      <p class="col-md-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis,
        amet in quos non reiciendis illo! Aliquam enim, excepturi omnis, dolor
        natus doloremque blanditiis neque quasi magni, animi amet sint
        explicabo.
      </p>
    </div>

    <article class="row py-5">
      <h2>Skills</h2>
      <dl v-for="item in skills">
        <dt class="lead">{{ item.name }}</dt>
        <dd>
          <div class="progress" role="progressbar">
            <div class="progress-bar" :style="{ width: item.point }">
              {{ item.point }}
            </div>
          </div>
        </dd>
      </dl>
    </article>
  </section>
</template>

<script setup>
const skills = [
  { name: "HTML", point: "90%" },
  { name: "CSS", point: "80%" },
  { name: "JAVASCRIPT", point: "50%" },
  { name: "VUE", point: "75%" },
];
</script>

<style lang="scss">
figure {
  img {
    width: 100%;
  }
}
</style>
