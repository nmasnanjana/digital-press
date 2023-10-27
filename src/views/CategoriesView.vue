<template>
  <div class="news">
    <div v-for="newsArt in news" :key="newsArt.title" class="news-article">
      <a :href="newsArt.url">
        <div class="article-header">
          <img :src="checkImageNull(newsArt)" alt="News Image">
          <h3>{{newsArt.title}}</h3>
        </div>
        <p class="description">{{newsArt.description}}</p>
      </a>
    </div>
  </div>
</template>

<script>
import nullImage from "@/assets/img.png";
import { myApiKey } from '@/assets/apiKey'

export default {
  name: "Countries",
  data() {
    return {
      id: this.$route.params.id,
      apiKey: myApiKey,
      language: 'en',

      news: []
    }
  },
  watch: {
    '$route.params.id': {
      handler(newId) {
        this.id = newId;
        this.fetchDataFromAPI()
      },
      immediate: true,
    },

  },
  methods: {
    fetchDataFromAPI() {
      fetch(`https://newsapi.org/v2/everything?q=${this.id}&apiKey=${this.apiKey}&language=${this.language}`)
          .then((res) => res.json())
          .then((data) => (this.news = data.articles))
          .catch((err) => console.log(err.message));
    },
    checkImageNull(imgToCheck) {
      return imgToCheck.urlToImage || nullImage
    },
  }
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

.news {
  margin: 0 10px;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.news-article {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px 0;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.2s ease;
}

.news-article:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.article-header {
  text-align: center;
  margin-bottom: 10px;
}

.article-header h3 {
  font-size: 1.2em;
}

.description {
  text-align: justify;
  font-size: 1em;
  display: block;
}

.news-article a {
  text-decoration: none;
  color: black;
}

@media (max-width: 768px) {
  .description {
    display: none;
  }
}

@media (min-width: 769px) {

  .news {
    margin: 0 185px;
  }

  .news-article {
    width: calc(33.3333% - 20px);
    margin: 10px 10px;
  }
}
</style>