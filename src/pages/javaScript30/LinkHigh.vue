<template>
  <div class="linkHigh_bg">
    <nav>
      <ul class="menu"
          id="menu">
        <li><a class="link"
             href="">Home</a></li>
        <li><a class="link"
             href="">Order Status</a></li>
        <li><a class="link"
             href="">Tweets</a></li>
        <li><a class="link"
             href="">Read Our History</a></li>
        <li><a class="link"
             href="">Contact Us</a></li>
      </ul>
    </nav>
    <div class="wrapper">
      <p>
        Lorem ipsum dolor sit amet, <a class="link"
           href="#">consectetur</a> adipisicing elit. Est <a class="link"
           href="#">explicabo</a> unde natus
        necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!
      </p>
      <p>
        Aspernatur sapiente quae sint <a class="link"
           href="#">soluta</a> modi, atque praesentium laborum pariatur earum
        <a class="link"
           href="#">quaerat</a> cupiditate consequuntur facilis ullam dignissimos, aperiam quam veniam.
      </p>
      <p>
        Cum ipsam quod, incidunt sit ex <a class="link"
           href="#">tempore</a> placeat maxime <a class="link"
           href="#">corrupti</a> possimus
        <a class="link"
           href="#">veritatis</a> ipsum fugit recusandae est doloremque? Hic, <a class="link"
           href="#">quibusdam</a>, nulla.
      </p>
      <p>
        Esse quibusdam, ad, ducimus cupiditate <a class="link"
           href="#">nulla</a>, quae magni odit <a class="link"
           href="#">totam</a> ut consequatur
        eveniet sunt quam provident sapiente dicta neque quod.
      </p>
      <p>
        Aliquam <a class="link"
           href="#">dicta</a> sequi culpa fugiat <a class="link"
           href="#">consequuntur</a> pariatur optio ad minima, maxime
        <a class="link"
           href="#">odio</a>, distinctio magni impedit tempore enim repellendus <a class="link"
           href="#">repudiandae</a> quas!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinkHighlight',
  data () {
    return {
      activeBg: ''
    }
  },
  mounted () {
    let oLi = document.getElementsByTagName('li');
    let len = oLi.length;
    this.activeBg = document.createElement('span');
    this.activeBg.setAttribute('class', 'high');
    document.body.appendChild(this.activeBg);

    //避免第一次激活时跳动
    this.activeBg.style.display = 'none';

    //监听鼠标移入事件以及鼠标移出事件
    for (let i = 0; i < len; i++) {
      oLi[i].onmouseenter = this.lighOn;
    }
  },
  methods: {
    lighOn: function (e) {
      //Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
      let activeLink = e.target.getBoundingClientRect();
      // scrollX:返回文档/页面水平方向滚动的像素值
      // scrollY:返回文档在垂直方向已滚动的像素值
      let options = {
        height: activeLink.height,
        width: activeLink.width,
        left: window.scrollX + activeLink.left,
        top: window.scrollY + activeLink.top
      }
      this.activeBg.style.height = `${options.height}px`;
      this.activeBg.style.width = `${options.width}px`;
      this.activeBg.style.left = `${options.left}px`;
      this.activeBg.style.top = `${options.top}px`;
      this.activeBg.style.display = 'inline';
    }
  }
}
</script>

<style>
.linkHigh_bg {
  min-height: 100vh;
  margin: 0; /* Important! */
  font-family: sans-serif;
  background: linear-gradient(
      45deg,
      hsla(340, 100%, 55%, 1) 0%,
      hsla(340, 100%, 55%, 0) 70%
    ),
    linear-gradient(
      135deg,
      hsla(225, 95%, 50%, 1) 10%,
      hsla(225, 95%, 50%, 0) 80%
    ),
    linear-gradient(
      225deg,
      hsla(140, 90%, 50%, 1) 10%,
      hsla(140, 90%, 50%, 0) 80%
    ),
    linear-gradient(
      315deg,
      hsla(35, 95%, 55%, 1) 100%,
      hsla(35, 95%, 55%, 0) 70%
    );
}

.linkHigh_bg nav {
  padding: 10px 0;
}

.wrapper {
  margin: 0 auto;
  max-width: 500px;
  font-size: 20px;
  line-height: 2;
  position: relative;
}

.link {
  text-decoration: none;
  color: black;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
}

.high {
  transition: all 0.2s;
  border-bottom: 2px solid white;
  position: absolute;
  top: 0;
  background: white;
  left: 0;
  /* z-index: -1; */
  border-radius: 20px;
  display: block;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.menu {
  padding: 0;
  display: flex;
  list-style: none;
  justify-content: center;
  margin-bottom: 0;
}

.menu li {
  z-index: 1;
}

.menu .link {
  display: inline-block;
  padding: 5px;
  margin: 0 20px;
  color: black;
}
</style>
