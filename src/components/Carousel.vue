<template>
  <div class="carousel-container">
    <div class="slider">
      <div class="slide" v-for="(newsArt, index) in news" :key="index" v-show="index === currentIndex">
        <a :href="newsArt.url">
          <img :src="checkImageNull(newsArt)" alt="News Image" />
          <div class="slide-text-container">
            <div class="slide-text">
              <h2>{{ newsArt.title }}</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import nullImage from "@/assets/img.png";
import { myApiKey } from '@/assets/apiKey'

export default {
  data() {
    return {
      apiKey: myApiKey,
      language: 'en',
      currentIndex: 0,
      news: []
    };
  },
  mounted() {
    this.showSlides();
    fetch(`https://newsapi.org/v2/everything?language=${this.language}&pageSize=4&apiKey=${this.apiKey}&q=apple`)
        .then((res) => res.json())
        .then((data) => (this.news = data.articles))
        .catch((err) => console.log(err.message));
  },
  methods: {
    showSlides() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.news.length;
      }, 5000);
    },

    checkImageNull(imgToCheck) {
      return imgToCheck.urlToImage || nullImage
    },
  },
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
}

.slider {
  display: flex;
  transition: transform 0.5s;
}

.slider img {
  width: 100%;
  height: 562px;
}

.slide {
  min-width: 100%;
  flex: 1;
  position: relative;
}

.slide-text-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.slide-text {
  color: #ddd;
  font-size: 24px;
  padding: 10px;
}

@media (max-width: 767px) {
  .overlay {
    font-size: 18px;
  }
}
</style>