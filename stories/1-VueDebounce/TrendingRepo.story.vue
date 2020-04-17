<template>
  <div>
    <h1>Search Trending Repo, via Language</h1>
    <input
      v-debounce="debounceHandler"
      type="text"
      class="filter-input"
      placeholder="Language: Java, JavaScript, Ruby, Python"
    >
    <ul class="trending-list">
      <li
        v-for="(repo, index) in trendingRepos"
        :key="index"
      >
        <h2>{{ repo.name }}</h2>
        <h3>Author: {{ repo.author }}</h3>
        <p>{{ repo.description }}</p>
        <a
          :href="repo.url"
          target="_blank"
        >
          View on GitHub
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    trendingRepos: []
  }),
  methods: {
    debounceHandler(val) {
      fetch(`https://github-trending-api.now.sh/repositories?language=${val}`)
        .then(res => res.json())
        .then(res => { this.trendingRepos = res })
    }
  }
}
</script>

<style scoped>
html,
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    padding: 20px;
    background-color: #111;
    margin-bottom: 20px;
  }

  header > h1 {
    color: #fff;
    font-weight: 400;
    margin: 0;
  }

  main {
    width: 1200px;
    margin: 0 auto;
  }

  .loader {
    font-size: 1.5em;
    font-weight: 300;
    text-align: center;
    padding: 80px;
  }

  .trending-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .trending-list > li {
    width: 50%;
    margin: 0 auto;
    border: 1px solid #000;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
  }

  .trending-list > li > h2 {
    font-weight: 400;
    margin: 0 auto 10px;
  }

  .trending-list > li > h3 {
    font-weight: 300;
    margin: 0 auto 10px;
  }

  .trending-list > li > p {
    font-weight: 300;
    margin: 0 auto 10px;
  }

  .trending-list > li > a {
    font-weight: 400;
    margin: 0 auto;
  }

  .filter-input {
    border: 1px solid green;
    border-radius: 4px;
    height: 22px;
    font-size: 14px;
    display: block;
    margin: 0 auto;
    margin-bottom: 13px;
    width: 50%;
    padding: 6px 13px;
  }

  h1 {
    padding-left: 20px;
  }
</style>
