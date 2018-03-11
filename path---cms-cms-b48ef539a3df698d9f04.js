webpackJsonp([0x5d44c7e4811f],{507:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Magento 1 Frontend Bits",author:"Claire Parker-Jones"}},markdownRemark:{id:"/Users/Claire/gatsby-blog/src/pages/cms-cms/index.md absPath of file >>> MarkdownRemark",html:'<div class="gatsby-highlight">\n      <pre class="language-none"><code>{{ block type=“cms/block” block_id=“[block-identifier]” }}</code></pre>\n      </div>\n<p>Imagine you a CMS block, which you use to output some nice text. But now you want to include the contents of <em>another</em> CMS block, right slap-bang in the middle of it!</p>\n<p>For that you need to use the block directive. When you’re working with CMS blocks in Magento, you can use directives within the text content of the CMS block or page. Directives are defined by double curly brackets <code>{{ directive }}</code> and provide access to file paths, site urls, translations and much more. Google them for the possibilities!</p>\n<p>Several different directive types exist, which require different arguments. The block directive is quite straightfoward in its purpose: it retrieves the content of the specified block and outputs it into the CMS block where it was called.</p>\n<p>To output the contents of a CMS block called “footer-links”, the directive definition would look like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>{{ block type=“cms/block” block_id=“footer-links” }}</code></pre>\n      </div>\n<p>The <code>type</code> should be “cms/block” and the <code>block_id</code> argument should match the identifier of the CMS block to be loaded. The ID can be found by checking it in the admin panel if you’re not sure (under <code>CMS</code> > <code>Static blocks</code> menu).</p>\n<h2>Why would I split my blocks up like that?</h2>\n<p>Maybe you’re wondering why you wouldn’t just have a single CMS block that contained all this content instead of two separate blocks?</p>\n<ul>\n<li>Perhaps you need to display the CMS content on different pages, e.g. social media links or contact details. Using a single block for the content and loading it into the different pages reduces repeated code and means there’s only one place to edit if there are any changes.</li>\n<li>It can be confusing and difficult to work with a very large CMS file, especially in Magento’s WYSIWYG editor. It can be easier to split a large file into distinct sections, and use a parent block to group them together and be resposible for the display. This makes it easier to work with the files, and often helps organise the site better. This is also a good tactic for phtml templates.</li>\n</ul>\n<h2>Bonus: PHTML template syntax</h2>\n<p>Compare the CMS directive syntax with the equivalent needed to output the CMS block within a phtml template:</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token prolog">&lt;?php echo $this->getLayout()->createBlock(\'cms/block\')->setBlockId(\'footer-links\')->toHtml() ?></span>\n</code></pre>\n      </div>',frontmatter:{title:"How to output a CMS block from another CMS block",date:"February 27, 2018"}}},pathContext:{slug:"/cms-cms/",previous:{fields:{slug:"/atom-snippets/"},frontmatter:{title:"How to add snippets for templates in Atom"}},next:{fields:{slug:"/validation-rule/"},frontmatter:{title:"Setting a custom validation message"}}}}}});
//# sourceMappingURL=path---cms-cms-b48ef539a3df698d9f04.js.map