# qiankun-federation

## architecture

qiankun + pnpm(monorepo) + changeset + webpack5(module federation)

## objective

解决微前端的子应用大量重复的资源使用

## introduce

本项目你可以用 pnpm 的包管理方式引入其他子应用的组件、样式等，主项目安装所有子应用的公用依赖，所以你的子应用的 node_modules 相比非 monorepo 架构下体积会很小。同时当你的某个子应用不需要包管理的方式引入依赖的，你可以用 webpack5 的 module federation 来获取其他子应用的组件、样式等。

在 pnpm 的 monorepo 下，你的子项目同样可以使用其他包管理 yarn、npm, 但是不同的项目请统一包的统一版本

## why ?

qiankun 微前端的多个子应用想要共享主应用的依赖是不可行的，但是我们可以用 pnpm 的 monorepo 巧妙解决，多项目管理架构优点方便维护、管理规范、发布，缺点就是仓库体积大、项目启动慢。另外 monorepo 管理的是你的 npm 包，每个微应用对应一个 npm 包，changeset 可以很方便管理发布，某种层面上他跟 webpack5 的新特性 module federation 是类似的。只不过是 npm 包层级的依赖引用。

## range

目前实践在 vue2 + vue3

## projects

1. packages/mainApp 主应用
2. packages/microApp-vue3-product vue3 的 product 子应用
3. packages/shared 共享的应用

## quick start

pnpm p:install
pnpm dev:main
pnpm dev:product

## how to publish

.changeset 目录下配置
pnpm changeset 选择发布
pnpm changeset publish

## command

- 安装公共包
  pnpm install <package name> -D -w

- 子应用不指定版本号，取其他子应用最新版本
  pnpm install @ccj/shared@\* --filter @ccj/web1
