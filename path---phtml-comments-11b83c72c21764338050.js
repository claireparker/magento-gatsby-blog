webpackJsonp([63757967351238],{510:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Magento 1 Frontend Bits",author:"Claire Parker-Jones"}},markdownRemark:{id:"/Users/Claire/gatsby-blog/src/pages/phtml-comments/index.md absPath of file >>> MarkdownRemark",html:'<p>Magento is a framework built in PHP. It uses phtml files for templates. What’s a phtml file you ask? Well:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>PHP + HTML = phtml</code></pre>\n      </div>\n<p>If a PHP file and a HTML file had a baby, a phtml file would be the result. <a href="http://devdocs.magento.com/guides/m1x/magefordev/mage-for-dev-4.html">Alan Storm talks a bit more about phtml files here</a>.</p>\n<p>We can write HTML in a phtml file, and also PHP, as long as it’s  within a special tag.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is normal HTML<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>PHP can output strings:\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token prolog">&lt;?php echo \'Bonjour\'; ?></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>PHP will also calculate values, so this will show 5:\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token prolog">&lt;?php 2 + 3; ?></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>(Remember not to abuse this though - abstract business logic into block methods, and leave display concerns for templates.)</p>\n<h2>Comments in template files</h2>\n<p>It’s always a good idea to document your code with comments. However, when you add HTML-style comments, they appear in the final compiled code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token comment">&lt;!-- A comment that you’ll be able to see in the live site --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Normal markup<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>But as this is a phtml file, we can also use PHP-style comments. If we use these instead, the comments are compiled by PHP and not output in the final source of the website!</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token prolog">&lt;?php /* I am a comment */ ?></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Normal HTML markup.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>This is very useful. Comments should be only be seen by:</p>\n<ul>\n<li>You and other developers working on the project</li>\n</ul>\n<p>Comments should not be seen by:</p>\n<ul>\n<li>Users or customers of the site</li>\n<li>Nosey people looking at the source code in Dev Tools</li>\n</ul>\n<p>So write PHP-style comments in your templates and only allow fellow devs to them.</p>',frontmatter:{title:"Comments in phtml templates",date:"March 08, 2018"}}},pathContext:{slug:"/phtml-comments/",previous:{fields:{slug:"/validation-rule/"},frontmatter:{title:"Setting a custom validation message"}},next:!1}}}});
//# sourceMappingURL=path---phtml-comments-11b83c72c21764338050.js.map