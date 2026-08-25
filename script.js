/**
 * ============================================
 * InfinityCore v1.3.0 - 核心脚本
 * 保持底层框架不变，增强交互体验
 * ============================================
 */

// ====== 全局配置 ======
const CONFIG = {
    particleCount: 25,
    particleMinSize: 2,
    particleMaxSize: 6,
    cursorSize: 8,
    scrollThreshold: 50,
    animationDuration: 400,
    version: '1.3.0'
};

// ====== 页面初始化 ======
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initCustomCursor();
    initNavbarScroll();
    initMobileMenu();
    initLoader();
    initProgressBar();
    initSmoothScroll();
    initImageZoom();
});

// ====== 背景粒子系统（保持不变）======
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < CONFIG.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 随机属性
        const size = Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize) + CONFIG.particleMinSize;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 10;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${left}%;
            top: ${top}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        fragment.appendChild(particle);
    }
    
    container.appendChild(fragment);
}

// ====== 自定义光标（保持不变）======
function initCustomCursor() {
    const dot = document.querySelector('.cursor-dot');
    if (!dot) return;
    
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // 平滑跟随
        dotX += (mouseX - dotX) * 0.15;
        dotY += (mouseY - dotY) * 0.15;
        
        dot.style.left = dotX + 'px';
        dot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // 悬停效果增强 v1.3.0
    const interactiveElements = document.querySelectorAll('a, button, .content-card, .project-card, .quick-access-card, .link-item');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            dot.style.transform = 'translate(-50%, -50%) scale(2)';
            dot.style.background = 'var(--primary)';
            dot.style.opacity = '0.6';
        });
        
        el.addEventListener('mouseleave', function() {
            dot.style.transform = 'translate(-50%, -50%) scale(1)';
            dot.style.background = 'var(--accent)';
            dot.style.opacity = '1';
        });
    });
}

// ====== 导航栏滚动效果（保持不变）======
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > CONFIG.scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

// ====== 移动端菜单（保持不变）======
function initMobileMenu() {
    const toggle = document.getElementById('mobileToggle');
    const links = document.getElementById('navLinks');
    
    if (!toggle || !links) return;
    
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        links.classList.toggle('active');
        this.textContent = links.classList.contains('active') ? '✕' : '☰';
    });
    
    // 点击外部关闭
    document.addEventListener('click', function(e) {
        if (!links.contains(e.target) && !toggle.contains(e.target)) {
            links.classList.remove('active');
            toggle.textContent = '☰';
        }
    });
}

// ====== 加载动画（保持不变）======
function initLoader() {
    const loader = document.getElementById('loader');
    if (!loader) return;
    
    // 确保所有资源加载完成后隐藏
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.style.opacity = '0';
            
            setTimeout(function() {
                loader.style.display = 'none';
                
                // 触发入场动画
                document.body.classList.add('loaded');
                
                // 初始化滚动动画
                initScrollReveal();
                
            }, 600);
        }, 800);
    });
    
    // 备用：如果window.load已触发
    if (document.readyState === 'complete') {
        setTimeout(function() {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 600);
        }, 800);
    }
}

// ====== 滚动进度条 v1.3.0新增 ======
function initProgressBar() {
    // 创建进度条元素
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressBar.style.width = '0%';
    document.body.prepend(progressBar);
    
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
                progressBar.style.width = progress + '%';
                ticking = false;
            });
            ticking = true;
        }
    });
}

// ====== 平滑滚动 v1.3.0增强 ======
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ====== 滚动渐入动画 v1.3.0增强 ======
function initScrollReveal() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });
        
        elements.forEach(el => observer.observe(el));
    } else {
        // 降级处理：直接显示所有元素
        elements.forEach(el => el.classList.add('visible'));
    }
}

// ====== 内容切换功能（核心SPA逻辑，保持不变）======
function showContent(contentId, activeLink) {
    // 隐藏所有内容区域
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // 显示目标内容
    const targetSection = document.getElementById(contentId + '-content');
    if (targetSection) {
        targetSection.style.display = 'block';
        
        // 重新触发动画
        const animatedElements = targetSection.querySelectorAll('.fade-in-up');
        animatedElements.forEach(el => {
            el.classList.remove('visible');
            void el.offsetWidth; // 强制重排
            el.classList.add('visible');
        });
        
        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // 更新导航激活状态
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    if (activeLink && activeLink.classList) {
        activeLink.classList.add('active');
    }
    
    // 关闭移动端菜单
    const mobileMenu = document.getElementById('navLinks');
    const toggleBtn = document.getElementById('mobileToggle');
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (toggleBtn) toggleBtn.textContent = '☰';
}

// ====== 打赏弹窗功能（保持不变）======
function openDonateModal() {
    const modal = document.getElementById('donateModal');
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // 预加载微信二维码
        preloadQRCode('wechat');
    }
}

function closeDonateModal() {
    const modal = document.getElementById('donateModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// 点击遮罩关闭
document.addEventListener('click', function(e) {
    const modal = document.getElementById('donateModal');
    if (e.target === modal) {
        closeDonateModal();
    }
});

// ESC键关闭
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDonateModal();
        closeZoomModal();
    }
});

// 二维码切换与预加载
function showQR(type) {
    const wechatQR = document.getElementById('wechatQR');
    const alipayQR = document.getElementById('alipayQR');
    const buttons = document.querySelectorAll('.qr-tabs .tab-btn');
    
    // 更新按钮状态
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // 切换显示
    if (type === 'wechat') {
        wechatQR.style.display = 'block';
        alipayQR.style.display = 'none';
        preloadQRCode('wechat');
    } else {
        wechatQR.style.display = 'none';
        alipayQR.style.display = 'block';
        preloadQRCode('alipay');
    }
}

function preloadQRCode(type) {
    const imgId = type + 'Img';
    const loadingId = type + 'Loading';
    const errorId = type + 'Error';
    
    const img = document.getElementById(imgId);
    const loading = document.getElementById(loadingId);
    const error = document.getElementById(errorId);
    
    if (!img || img.dataset.loaded === 'true') return;
    
    loading.style.display = 'block';
    error.style.display = 'none';
    
    const tempImg = new Image();
    tempImg.onload = function() {
        img.src = img.getAttribute('src'); // 使用原始src
        img.classList.add('active');
        img.dataset.loaded = 'true';
        loading.style.display = 'none';
    };
    
    tempImg.onerror = function() {
        loading.style.display = 'none';
        error.style.display = 'block';
        img.dataset.loaded = 'error';
    };
    
    tempImg.src = img.getAttribute('src');
}

// ====== 图片放大查看器（保持不变）======
function zoomImage(src) {
    const modal = document.getElementById('imageZoomModal');
    const img = document.getElementById('zoomedImage');
    
    if (modal && img) {
        img.src = src;
        img.style.transform = 'scale(1)';
        modal.classList.add('active');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeZoomModal() {
    const modal = document.getElementById('imageZoomModal');
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// 图片缩放控制
let currentScale = 1;

function zoomIn() {
    currentScale = Math.min(currentScale + 0.3, 4);
    updateZoomTransform();
}

function zoomOut() {
    currentScale = Math.max(currentScale - 0.3, 0.5);
    updateZoomTransform();
}

function resetZoom() {
    currentScale = 1;
    updateZoomTransform();
}

function updateZoomTransform() {
    const img = document.getElementById('zoomedImage');
    if (img) {
        img.style.transform = `scale(${currentScale})`;
    }
}

// 图片拖拽功能
(function() {
    let isDragging = false;
    let startX, startY, translateX = 0, translateY = 0;
    
    document.addEventListener('mousedown', function(e) {
        const img = document.getElementById('zoomedImage');
        const modal = document.getElementById('imageZoomModal');
        
        if (e.target === img && modal && modal.classList.contains('active')) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            img.style.cursor = 'grabbing';
        }
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const img = document.getElementById('zoomedImage');
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        img.style.transform = `scale(${currentScale}) translate(${translateX}px, ${translateY}px)`;
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        const img = document.getElementById('zoomedImage');
        if (img) img.style.cursor = 'grab';
    });
})();

// ====== 回到顶部功能 v1.3.0新增 ======
function scrollToTop() {
    window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
    });
}

// ====== 3D卡片倾斜效果（保持不变）======
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.perspective');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            const innerCard = this.querySelector('.card-3d');
            if (innerCard) {
                innerCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const innerCard = this.querySelector('.card-3d');
            if (innerCard) {
                innerCard.style.transform = 'rotateX(0) rotateY(0) scale(1)';
            }
        });
    });
});

// ====== 性能优化：防抖函数 ======
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ====== 性能优化：节流函数 ======
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ====== 工具函数：检测设备类型 ======
const DeviceUtils = {
    isMobile: () => window.innerWidth <= 768,
    isTablet: () => window.innerWidth > 768 && window.innerWidth <= 1024,
    isDesktop: () => window.innerWidth > 1024,
    
    // 检测是否支持触摸
    isTouchDevice: () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    },
    
    // 检测是否为iOS
    isIOS: () => {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) || 
               (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    },
    
    // 获取设备信息
    getDeviceInfo: () => ({
        mobile: DeviceUtils.isMobile(),
        tablet: DeviceUtils.isTablet(),
        desktop: DeviceUtils.isDesktop(),
        touch: DeviceUtils.isTouchDevice(),
        ios: DeviceUtils.isIOS(),
        width: window.innerWidth,
        height: window.innerHeight
    })
};

// ====== 控制台欢迎信息 v1.3.0更新 ======
console.log(
    `%c∞ InfinityCore v${CONFIG.version} %c探索 · 创造 · 分享`,
    'color: #c7a27c; font-size: 20px; font-weight: bold; background: #f8f7f4; padding: 10px 20px; border-radius: 6px;',
    'color: #4a6fa5; font-size: 12px; padding: 10px 10px;'
);

console.log(
    `%c🛠️ 技术栈: HTML5 · CSS3 · JavaScript · Font Awesome 6.4.0`,
    'color: #6d6d6d; font-size: 11px; padding: 5px 0;'
);

console.log(
    `%c✨ v1.3.0 更新: UI全面升级 | 快速入口 | 技能展示 | 时间线视图 | 滚动进度条 | 回到顶部`,
    'color: #5cb85c; font-size: 11px; padding: 5px 0;'
);

console.log(
    `%c💡 提示: 按 ESC 可快速关闭弹窗`,
    'color: #999; font-size: 10px; padding: 5px 0;'
);

// ====== 错误监控 v1.3.0新增 ======
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error(`[InfinityCore Error] ${msg}\n at ${url}:${lineNo}:${columnNo}`);
    return false;
};

// ====== PWA提示 v1.3.0新增 ======
if ('serviceWorker' in navigator) {
    console.log('%c[PWA] Service Worker 可用，可考虑添加离线支持', 'color: #2196F3; font-size: 10px;');
}

// ====== 导出全局函数供内联脚本使用 ======
window.showContent = showContent;
window.openDonateModal = openDonateModal;
window.closeDonateModal = closeDonateModal;
window.showQR = showQR;
window.zoomImage = zoomImage;
window.closeZoomModal = closeZoomModal;
window.zoomIn = zoomIn;
window.zoomOut = zoomOut;
window.resetZoom = resetZoom;
window.scrollToTop = scrollToTop;
window.showEmail = typeof showEmail !== 'undefined' ? showEmail : () => {};
