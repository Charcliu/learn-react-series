### React路由

主要有三种主要组件在React Router中

```html
// 所有的组件都从 react-router-dom 导入
- routers,  <BrowserRouter> and <HashRouter>
- route matchers,  <Route> and <Switch>
- navigation,  <Link>, <NavLink>, and <Redirect>
```

#### Routers

每一个React Router应用都应该有router组件，在web项目中，react-router-dom提供了BrowserRouter 和 HashRouter，区别如下：

| 组件 | BrowserRouter | HashRouter |
| --- | --- | --- |
| URL | 生成易读URL，如：http://example.com/your/page | 使用Hash语法，如 http://example.com/#/your/page
| 服务部署 |需要配置指向index.html|无需配置

使用Router时，确保组件渲染于根结点。代表性的，可以使用Router包裹顶级 APP 组件。

#### 路由匹配

Switch 和 Route

```jsx
<Switch>
  {/* URL路径为/about Route将渲染，剩下的路由将被忽略*/}
  <Route path="/about">
    <About />
  </Route>

  {/* 两个接近的路由，更加特殊的路由应该放在低特殊性路由之前，否则只能匹配到低特殊性路由，其他路由将被忽略 */}
  <Route path="/contact/:id">
    <Contact />
  </Route>
  <Route path="/contact">
    <AllContacts />
  </Route>

  {/* 如果前面的路由都没有匹配，此路由将作为应急计划，路由path为 / 将会匹配所有URL，因为每个URL都以 / 开头 */}
  <Route path="/">
    <Home />
  </Route>
</Switch>
```

- Route path 匹配URL开头，并非全部内容。所以 Route path="/" 将匹配所有路径，所以我们需要将 Route path="/" 放在 Switch 底部。

#### 导航路由

- Link

Link将会渲染和a标签一样，跳转传入to参数的地址

- NavLink

特殊Link标签，当前路由和NavLink匹配，将会自动激活（active）

- Redirect

重新导航使用传入参数

#### 代码分割

递增式下载应用，使用webpack、@babel/plugin-syntax-dynamic-import 和 loadble-components

CRA项目已经配置好webpack和@babel/plugin-syntax-dynamic-import

这里我们只需安装loadble-components，并进行如下配置便可实现代码分割。

```tsx
import loadable from '@loadable/component';
const Context = loadable(() => import('@context/index'), { fallback: <h1>loading</h1> });

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/context">
            <Context></Context>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
```

#### Router Hooks

- useHistory 返回 history 对象
- useLocation 返回 location 对象
- useParams 返回当前 url 参数 key/value 对象
- useRouteMatch 尝试以与 Route 相同的方式匹配当前URL

```tsx
// before
import { Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* ... */}
      <Route
        path="/BLOG/:slug/"
        strict
        sensitive
        render={({ match }) => {
          return match ? <BlogPost match={match} /> : <NotFound />
        }}
      />
    </div>
  )
}

// after
import { useRouteMatch } from 'react-router-dom'

function App() {
  let match = useRouteMatch({
    path: '/BLOG/:slug/',
    strict: true,
    sensitive: true
  })

  return (
    <div>
      {/* ... */}
      {match ? <BlogPost match={match} /> : <NotFound />}
    </div>
  )
}
```