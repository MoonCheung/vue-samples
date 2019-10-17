<template>
  <div class="flexPanel_bg">
    <div class="panels">
      <div v-for="(item,index) in arrays"
           :key="index">
        <div ref='panel'
             class="panel"
             :class="'panel'+index"
             @click="toggleOpen(index)"
             @transitionend="toggleActive">
          <p>{{item.preName}}</p>
          <p>{{item.name}}</p>
          <p>{{item.nextName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlexPanels',
  data () {
    return {
      arrays: [
        { id: "0", preName: 'Hey', name: "Let's", nextName: 'Dance' },
        { id: "1", preName: 'Give', name: "Take", nextName: 'Receive' },
        { id: "2", preName: 'Experience', name: "It", nextName: 'Today' },
        { id: "3", preName: 'Give', name: "All", nextName: 'You can' },
        { id: "4", preName: 'Life', name: "In", nextName: 'Motion' }
      ],
      active: null
    }
  },
  methods: {
    toggleOpen: function (e) {
      this.active = e;
      this.$refs.panel[e].classList.toggle('open');
    },
    toggleActive: function (e) {
      if (e.propertyName.includes('flex')) {
        this.$refs.panel[this.active].classList.toggle('open-active')
      }
    }
  }
}
</script>

<style lang="css">
.flexPanel_bg {
  box-sizing: border-box;
  background: #ffc600;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
}

.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
}

.panel {
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  min-height: 100vh;
  text-align: center;
  align-items: center;
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  transition: font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11),
    flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), background 0.2s;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.panel0 {
  background-image: url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500);
}

.panel1 {
  background-image: url(https://source.unsplash.com/1CD3fd8kHnE/1500x1500);
}

.panel2 {
  background-image: url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d);
}

.panel3 {
  background-image: url(https://source.unsplash.com/ITjiVXcwVng/1500x1500);
}

.panel4 {
  background-image: url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500);
}

.panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5s;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.open-active > *:last-child {
  transform: translateY(0);
}

.panel p {
  text-transform: uppercase;
  font-family: "Amatic SC", cursive;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;
}

.panel p:nth-child(2) {
  font-size: 4em;
}

.panel.open {
  flex: 5;
  font-size: 40px;
}

.cta {
  color: white;
  text-decoration: none;
}
</style>
