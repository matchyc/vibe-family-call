# 亲戚称呼计算器

极简 Web 应用：用按钮点出关系链（如「父亲的母亲的哥哥」），调用大模型得到称呼。

## 使用

1. 打开 `index.html`（或部署后的页面）。
2. 点击「父 / 母 / 夫 / 妻 / 兄 / 弟 / 姐 / 妹 / 子 / 女」构建关系链；「删」去掉最后一步，「清」清空。
3. 在「设置」中填写大模型 Base URL 和 API Key（兼容 OpenAI 风格接口）。
4. 有结果后可点「更多」展开简短解释。

## 部署上线

项目只有静态文件，无需构建，任选一种方式即可。

### 方式一：GitHub Pages（免费，适合已有 GitHub）

1. **把代码推到 GitHub**
   ```bash
   cd /path/to/vibe-family-call
   git init
   git add index.html README.md
   git commit -m "init"
   git branch -M main
   git remote add origin https://github.com/你的用户名/vibe-family-call.git
   git push -u origin main
   ```

2. **打开仓库 → Settings → Pages**
   - **Source** 选 **Deploy from a branch**
   - **Branch** 选 `main`，目录选 **/ (root)**
   - 点 **Save**

3. 等一两分钟，访问：`https://你的用户名.github.io/vibe-family-call/`

### 方式二：Cloudflare Pages（免费，全球 CDN）

1. **代码先推到 GitHub**（同上），或本地用 Wrangler 上传。

2. **登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create application → Pages → Connect to Git**
   - 选你的仓库（如 `vibe-family-call`）
   - **Build command** 留空
   - **Build output directory** 填：`/`（表示根目录就是站点）
   - 点 **Save and Deploy**

3. 部署完成后会得到一个地址，例如：`https://vibe-family-call.xxx.pages.dev`

### 注意

- API Key 和 Base URL 只存在**用户浏览器**的 localStorage 里，每个访客需要自己在页面里填一次。
- 若用 HTTPS 页面调用的 API 是 HTTP，浏览器可能拦截（混合内容），建议 API 也使用 HTTPS。

## 本地

用任意静态服务器打开即可，例如：

```bash
npx serve .
# 或
python3 -m http.server 8000
```

然后访问 `http://localhost:8000`（或对应端口）。

## 技术

单文件 HTML，内联 CSS/JS，无构建步骤。API Key 与 Base URL 仅存于浏览器 `localStorage`，不会上传到本仓库。
