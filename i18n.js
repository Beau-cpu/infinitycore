/**
 * InfinityCore 多语言系统
 * 支持中文(zh-CN)和英文(en)切换
 */

const i18n = {
    currentLang: localStorage.getItem('infinitycore_lang') || 'zh-CN',
    
    translations: {
        'zh-CN': {
            // 导航栏
            'nav.home': '首页',
            'nav.about': '关于我',
            'nav.projects': '我的项目',
            'nav.toolbox': '工具箱',
            'nav.logo': 'Beau 🤍 的技术空间',
            
            // 首页 Hero区域
            'hero.subtitle': '这里是 Beau 🤍 的技术实验场，汇集学习过程中开发的各种实用工具和项目实践',
            'stats.projects': '个项目',
            'stats.tools': '个工具',
            'stats.visits': '次访问',
            'stats.updating': '持续更新中',
            
            // 卡片内容
            'card.tech.title': '技术探索',
            'card.tech.desc1': '在学习过程中不断尝试新技术，从HTML/CSS到JavaScript，探索Web开发的无限可能。',
            'card.tech.desc2': '通过实际项目驱动学习，将理论知识转化为实用工具。',
            
            'card.learn.title': '学习实践',
            'card.learn.desc1': '注重理论与实践结合，每一个项目都是对知识的深入理解和应用。',
            'card.learn.desc2': '通过用户研究和数据分析，确保每个项目都能带来实际价值。',
            
            'card.future.title': '未来规划',
            'card.future.desc1': '持续学习，不断进步。计划深入前端框架、后端开发，探索更广阔的技术领域。',
            'card.future.desc2': '期待将更多想法转化为实用的工具和项目。',
            
            // 最新动态
            'updates.title': '最新动态',
            'updates.major': '重大更新',
            'updates.new': '新增',
            'updates.improve': '优化',
            'update.1': '全新UI升级：优化视觉层次与交互体验',
            'update.2': '新增数据可视化图表工具',
            'update.3': '新增Markdown编辑器实时预览功能',
            'update.4': '新增番茄钟专注工具',
            'update.5': '新增多功能计算器（科学+单位转换）',
            'update.6': '优化页面滚动动画与交互体验',
            
            // 关于页面
            'about.title': '关于我',
            'about.subtitle': '一名热爱技术的计算机科学学生',
            'about.education.bg': '学习背景',
            'about.education.school': 'YIPC · 物联网工程专业',
            'about.education.desc': '专注于Web开发与网络技术，通过项目实践驱动学习，对前端开发、物联网应用和网络技术有浓厚兴趣。',
            
            'about.skills.title': '技术栈',
            'about.skills.list': 'HTML5 · CSS3 · JavaScript · 响应式设计',
            'about.skills.learning': '正在学习 Vue.js/React · Node.js 基础 · Git 版本控制',
            'about.skills.note': '这个网站是我学习和实践过程的成果展示。',
            
            'about.goals.title': '项目目标',
            'about.goals.desc1': '通过实际项目深入学习技术，开发有用的工具解决实际问题。',
            'about.goals.desc2': '记录学习过程，整理有用的资源和经验，为未来职业发展打下基础。',
            
            // 时间线
            'timeline.start': '🚀 启程',
            'timeline.start.desc': '开始接触 Web 开发，搭建第一个个人网站',
            'timeline.explore': '🛠️ 探索',
            'timeline.explore.desc': '开发抽奖工具、资源导航站等实用小工具',
            'timeline.growth': '📈 成长',
            'timeline.growth.desc': '学习 JavaScript 深入知识，构建代码共享平台',
            'timeline.now': '✨ 现在',
            'timeline.now.desc': '全面升级，新增多个实用工具模块',
            
            // 联系方式
            'contact.title': '联系我',
            'contact.desc': '欢迎交流技术与合作机会',
            'contact.website': 'http://yang110.hkfree.work/',
            'contact.email.click': '[点击显示邮箱]',
            
            // 项目页面
            'projects.title': '我的项目集合',
            'projects.subtitle': '在学习过程中开发的各种实用工具',
            
            // 项目名称
            'project.lottery.name': '随机抽选工具',
            'project.lottery.desc': '用于课堂抽点、活动抽奖的实用工具，支持自定义名单和多种随机算法。',
            'project.lottery.btn': '使用工具',
            
            'project.resources.name': '资源导航站',
            'project.resources.desc': '收集整理的学习资源和实用网站，方便快速访问常用开发工具和学习平台。',
            'project.resources.btn': '查看资源',
            
            'project.code.name': '代码学习中心',
            'project.code.desc': '收集整理的学习代码的方法，方便快速搭建交流平台。',
            'project.code.btn': '进入中心',
            
            'project.pomodoro.name': '番茄钟专注工具',
            'project.pomodoro.desc': '基于番茄工作法的专注计时器，帮助提升学习和工作效率，支持自定义时长和休息提醒。',
            'project.pomodoro.btn': '使用工具',
            
            'project.calculator.name': '多功能计算器',
            'project.calculator.desc': '支持基础计算、科学函数（三角/对数/幂运算）、8种单位转换的在线计算工具。',
            'project.calculator.btn': '使用工具',
            
            'project.notes.name': '技术学习笔记',
            'project.notes.desc': '系统化的前端学习笔记，涵盖 HTML/CSS/JS 核心知识、Git 使用、性能优化等实战内容。',
            'project.notes.btn': '阅读笔记',
            
            'project.markdown.name': 'Markdown 编辑器',
            'project.markdown.desc': '在线 Markdown 编辑器，支持实时预览、语法高亮、工具栏快捷操作、一键导出 HTML。',
            'project.markdown.btn': '使用工具',
            
            'project.charts.name': '数据可视化工具',
            'project.charts.desc': '纯前端数据可视化工具，支持柱状图/折线图/饼图/雷达图等多种图表类型，即输即显。',
            'project.charts.btn': '使用工具',
            
            'project.design.name': '设计工具箱',
            'project.design.desc': '前端设计辅助工具集合，包含颜色选择、渐变生成、阴影效果、圆角预览、字体预览等功能。',
            'project.design.btn': '使用工具',
            
            'project.blog.name': '个人技术博客',
            'project.blog.desc': '计划中的个人技术博客，用于记录学习笔记、技术总结和项目经验分享。',
            'project.blog.btn': '开发中',
            
            'project.api.name': 'API工具集合',
            'project.api.desc': '计划开发的一系列API工具，包括天气查询、IP查询、二维码生成等实用功能。',
            'project.api.btn': '构思中',
            
            // 状态标签
            'status.done': '已完成',
            'status.plan': '计划中',
            'status.hot': '✨ 热门',
            
            // 页脚
            'footer.copyright': '© {year} Beau 🤍 的个人项目 | 探索 · 创造 · 分享',
            'footer.website': '网址：http://yang110.hkfree.work/',
            'footer.email': '邮箱：[点击显示]',
            
            // 打赏弹窗
            'donate.title': '感谢您的支持',
            'donate.wechat': '微信支付',
            'donate.alipay': '支付宝',
            'donate.text1': '您的支持是我持续学习和创作的动力',
            'donate.text2': '每一份支持都将用于技术学习和项目开发',
            'donate.text3': '感谢您对InfinityCore的信任与支持！',
            
            // 加载动画
            'loader.ready': '准备就绪',
            
            // 语言切换按钮提示
            'lang.tooltip': 'Switch to English'
        },
        
        'en': {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About Me',
            'nav.projects': 'Projects',
            'nav.toolbox': 'Toolbox',
            'nav.logo': "Beau 🤍's Tech Space",
            
            // Hero Section
            'hero.subtitle': "Welcome to Beau 🤍's tech lab, featuring various practical tools and projects developed during learning",
            'stats.projects': 'projects',
            'stats.tools': 'tools',
            'stats.visits': 'visits',
            'stats.updating': 'Continuously Updating',
            
            // Card Content
            'card.tech.title': 'Tech Exploration',
            'card.tech.desc1': 'Constantly trying new technologies during learning, from HTML/CSS to JavaScript, exploring infinite possibilities of Web development.',
            'card.tech.desc2': 'Driving learning through practical projects, converting theoretical knowledge into useful tools.',
            
            'card.learn.title': 'Learning & Practice',
            'card.learn.desc1': 'Focusing on combining theory with practice, each project represents deep understanding and application of knowledge.',
            'card.learn.desc2': 'Through user research and data analysis, ensuring every project brings real value.',
            
            'card.future.title': 'Future Plans',
            'card.future.desc1': 'Continuous learning and improvement. Planning to dive into frontend frameworks, backend development, and explore broader tech fields.',
            'card.future.desc2': 'Looking forward to turning more ideas into practical tools and projects.',
            
            // Updates
            'updates.title': 'Latest Updates',
            'updates.major': 'Major',
            'updates.new': 'New',
            'updates.improve': 'Improve',
            'update.1': 'Brand new UI upgrade: Optimized visual hierarchy and interaction experience',
            'update.2': 'Added data visualization chart tool',
            'update.3': 'Added Markdown editor with real-time preview',
            'update.4': 'Added Pomodoro focus timer tool',
            'update.5': 'Added multifunctional calculator (Scientific + Unit Conversion)',
            'update.6': 'Optimized page scroll animations and interaction experience',
            
            // About Page
            'about.title': 'About Me',
            'about.subtitle': 'A computer science student passionate about technology',
            'about.education.bg': 'Education Background',
            'about.education.school': 'YIPC · Internet of Things Major',
            'about.education.desc': 'Focusing on Web development and network technology, driving learning through project practice, with strong interest in frontend, IoT applications, and networking.',
            
            'about.skills.title': 'Tech Stack',
            'about.skills.list': 'HTML5 · CSS3 · JavaScript · Responsive Design',
            'about.skills.learning': 'Learning Vue.js/React · Node.js Basics · Git Version Control',
            'about.skills.note': 'This website showcases my learning and practice journey.',
            
            'about.goals.title': 'Project Goals',
            'about.goals.desc1': 'Deepen technical knowledge through practical projects, develop useful tools to solve real problems.',
            'about.goals.desc2': 'Document the learning process, organize useful resources and experiences, laying the foundation for future career development.',
            
            // Timeline
            'timeline.start': '🚀 Journey Begins',
            'timeline.start.desc': 'Started Web development, built first personal website',
            'timeline.explore': '🛠️ Exploring',
            'timeline.explore.desc': 'Developed lottery tools, resource navigation sites and other practical tools',
            'timeline.growth': '📈 Growing',
            'timeline.growth.desc': 'Learned advanced JavaScript, built code sharing platform',
            'timeline.now': '✨ Now',
            'timeline.now.desc': 'Comprehensive upgrade, added multiple practical tool modules',
            
            // Contact
            'contact.title': 'Contact Me',
            'contact.desc': 'Welcome to discuss technology and collaboration opportunities',
            'contact.website': 'http://yang110.hkfree.work/',
            'contact.email.click': '[Click to show email]',
            
            // Projects Page
            'projects.title': 'My Projects Collection',
            'projects.subtitle': 'Various practical tools developed during learning',
            
            // Project Names
            'project.lottery.name': 'Random Picker Tool',
            'project.lottery.desc': 'A practical tool for class roll calls and event lotteries, supporting custom lists and multiple random algorithms.',
            'project.lottery.btn': 'Use Tool',
            
            'project.resources.name': 'Resource Navigator',
            'project.resources.desc': 'Collection of learning resources and useful websites for quick access to common dev tools and learning platforms.',
            'project.resources.btn': 'View Resources',
            
            'project.code.name': 'Code Learning Center',
            'project.code.desc': 'Collection of code learning methods for quick platform building and communication.',
            'project.code.btn': 'Enter Center',
            
            'project.pomodoro.name': 'Pomodoro Focus Timer',
            'project.pomodoro.desc': 'A focus timer based on the Pomodoro Technique to improve study and work efficiency, supporting custom durations and break reminders.',
            'project.pomodoro.btn': 'Use Tool',
            
            'project.calculator.name': 'Multifunctional Calculator',
            'project.calculator.desc': 'Online calculator supporting basic calculations, scientific functions (trig/log/power), and 8 types of unit conversions.',
            'project.calculator.btn': 'Use Tool',
            
            'project.notes.name': 'Technical Study Notes',
            'project.notes.desc': 'Systematic frontend study notes covering HTML/CSS/JS core knowledge, Git usage, performance optimization, and more.',
            'project.notes.btn': 'Read Notes',
            
            'project.markdown.name': 'Markdown Editor',
            'project.markdown.desc': 'Online Markdown editor with real-time preview, syntax highlighting, toolbar shortcuts, and one-click HTML export.',
            'project.markdown.btn': 'Use Tool',
            
            'project.charts.name': 'Data Visualization Tool',
            'project.charts.desc': 'Pure frontend data visualization tool supporting bar/line/pie/radar charts and more, instant rendering.',
            'project.charts.btn': 'Use Tool',
            
            'project.design.name': 'Design Toolbox',
            'project.design.desc': 'Frontend design assistant toolkit including color picker, gradient generator, shadow effects, border-radius preview, font preview, etc.',
            'project.design.btn': 'Use Tool',
            
            'project.blog.name': 'Personal Tech Blog',
            'project.blog.desc': 'Planned personal tech blog for recording study notes, technical summaries, and project experience sharing.',
            'project.blog.btn': 'In Development',
            
            'project.api.name': 'API Tools Collection',
            'project.api.desc': 'A series of planned API tools including weather query, IP query, QR code generation, and more.',
            'project.api.btn': 'In Concept',
            
            // Status Tags
            'status.done': 'Completed',
            'status.plan': 'Planned',
            'status.hot': '✨ Hot',
            
            // Footer
            'footer.copyright': '{year} Beau 🤍 Personal Project | Explore · Create · Share',
            'footer.website': 'Website: http://yang110.hkfree.work/',
            'footer.email': 'Email: [Click to show]',
            
            // Donate Modal
            'donate.title': 'Thank You for Your Support',
            'donate.wechat': 'WeChat Pay',
            'donate.alipay': 'Alipay',
            'donate.text1': 'Your support drives my continuous learning and creation',
            'donate.text2': 'Every contribution will be used for tech learning and project development',
            'donate.text3': 'Thank you for your trust and support for InfinityCore!',
            
            // Loading Animation
            'loader.ready': 'Ready',
            
            // Language Switch Tooltip
            'lang.tooltip': '切换到中文'
        }
    },
    
    /**
     * 获取翻译文本
     */
    t(key) {
        const lang = this.currentLang;
        return (this.translations[lang] && this.translations[lang][key]) || 
               (this.translations['zh-CN'] && this.translations['zh-CN'][key]) || 
               key;
    },
    
    /**
     * 切换语言
     */
    toggle() {
        this.currentLang = this.currentLang === 'zh-CN' ? 'en' : 'zh-CN';
        localStorage.setItem('infinitycore_lang', this.currentLang);
        this.apply();
        
        // 更新语言按钮状态
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.textContent = this.currentLang === 'zh-CN' ? 'EN' : '中';
            langBtn.setAttribute('data-tooltip', this.t('lang.tooltip'));
        }
        
        // 更新HTML语言属性
        document.documentElement.lang = this.currentLang;
    },
    
    /**
     * 应用翻译到页面
     */
    apply() {
        // 使用 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            let text = this.t(key);
            
            // 处理模板变量
            if (key === 'footer.copyright') {
                text = text.replace('{year}', new Date().getFullYear());
            }
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = text;
            } else {
                el.textContent = text;
            }
        });
        
        // 使用 data-i18n-placeholder 属性的元素
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        
        // 使用 data-i18n-title 属性的元素
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });
        
        // 特殊处理：打字机效果文本需要重新初始化
        if (window.reinitTypewriter) {
            window.reinitTypewriter();
        }
    },
    
    /**
     * 初始化多语言系统
     */
    init() {
        // 设置初始语言按钮状态
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.textContent = this.currentLang === 'zh-CN' ? 'EN' : '中';
            langBtn.style.display = 'flex';
            langBtn.addEventListener('click', () => this.toggle());
        }
        
        // 应用当前语言
        this.apply();
        
        // 设置HTML语言属性
        document.documentElement.lang = this.currentLang;
    }
};

// 导出到全局
window.i18n = i18n;

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化，确保其他脚本先执行
    setTimeout(() => {
        if (window.i18n) {
            window.i18n.init();
        }
    }, 100);
});
