import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

let instance = null;
async function render(props) {
  const { container, routerBase, microContainer } = props;
  instance = new Vue({ render: (h) => h(App), router });
  instance.$mount(container ? container.querySelector("#app") : "#app");

  // eslint-disable-next-line no-underscore-dangle
  if (window.__POWERED_BY_QIANKUN__) {
    router.afterEach((to) => {
      const matched = to.matched.map((item) => {
        return {
          ...item,
          path: `${routerBase}${item.path}`,
          redirect: `${routerBase}${item.path}`,
        };
      });
      props.mainStore.dispatch("app/getMicroBreadcrumb", [...matched]);
    });
  }
}

// eslint-disable-next-line no-underscore-dangle
if (!window.__POWERED_BY_QIANKUN__) {
  render({
    container: document.body,
    routerBase: "#/order",
    microContainer: "#app",
  });
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  // 标记当前启动形式为微服务启动
  // store.commit("app/microChange", true);
  await render(props);
}

export async function unmount() {
  instance && instance.$destroy();
}
