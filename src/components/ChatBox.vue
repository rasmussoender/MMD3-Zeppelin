<template>
    <div>
      <div v-if="!isChatOpen" class="chatButton" @click="toggleChat">
        <i class="fa-regular fa-comment"></i>
      </div>
  
      <div v-if="isChatOpen" class="chatBox">
        <div class="chatTop">
          <span>Send os en besked!</span>
          <button class="closeButton" @click="toggleChat"><i class="fa-solid fa-x"></i></button>
        </div>
        <div class="chatBottom">
          <form @submit.prevent="sendMessage">
            <input type="text" v-model="name" placeholder="Navn" required />
            <input type="email" v-model="email" placeholder="Mail" required />
            <textarea v-model="message" placeholder="Besked" required></textarea>
            <button type="submit">SEND BESKED</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isChatOpen: false,
        name: "",
        email: "",
        message: "",
      };
    },
    methods: {
      toggleChat() {
        this.isChatOpen = !this.isChatOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .chatButton{
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #408FEC;
    color: white;
    border: none;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 24px;
    z-index: 100;
  }
  
  .chatBox{
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 5px;
    z-index: 100;

  }
  
  .chatTop {
    background-color: #408FEC;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .closeButton {
    background: none;
    border: none;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
  }
  
  .chatBottom {
    padding: 20px;
  }
  
  .chatBottom form {
    display: flex;
    flex-direction: column;
  }
  
  .chatBottom input {
    margin-bottom: 20px;
    padding: 8px;
    border: 1px solid #408FEC;
    border-radius: 5px;
    height: 25px; 

  }
  .chatBottom textarea {
  margin-bottom: 10px;
  border: 1px solid #408FEC;
  width: 100%; 
  height: 135px; 
  resize: none;
  border-radius: 5px;
}
.chatBottom button {
    background-color: #408FEC;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 4px;
    cursor: pointer;
}
  </style>
  