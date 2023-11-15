const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        immagine: 'https://picsum.photos/id/1/200/300'
      }
    }
  }).mount('#app')